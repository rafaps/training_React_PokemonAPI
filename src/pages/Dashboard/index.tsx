import React, {FormEvent, useState} from 'react';
import { Title, Form,Repository, Error } from './styles'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'

import apiInfo from '../../services/apiInfo';
import apiDesc from '../../services/apiDesc';
// import apiImage from '../../services/apiImages';

import PokeLogo from '../../assets/index.png';

interface Repository {
    pokeName: string;
    pokeId: number;
    pokeType: string;
    pokemonDescriptionFiltered: string;
    pokeImage: string;
}


const Dashboard = () => {
    const [inputError, setInputError] = useState('');
    const [newPoke, setNewPokes] = useState('');
    const [pokemons, setPokemons] = useState<Repository[]>([]);


   async function handleAddPoke(e: FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();

        if (!newPoke) {
            setInputError('Choose a pokemon');
            return;
        }

        try {

            const pokemonAPI = await apiInfo.get(`${newPoke.toLowerCase()}`);
            const pokeName = pokemonAPI.data.name;
            const pokeId = pokemonAPI.data.id;
            const pokeType = pokemonAPI.data.types[0].type.name;

            const pokemonDescriptionAPI = await apiDesc.get(`${pokeId}`);
            const pokemonDescription = pokemonDescriptionAPI.data.flavor_text_entries[1].flavor_text;
            const pokemonDescriptionFiltered = pokemonDescription.replace(/(\r\n|\n|\r)/gm," ");
            
            const pokeImageAPI = 'https://pokeres.bastionbot.org/images/pokemon';
            const pokeImage = (pokeImageAPI + "/" + pokeId + ".png");
    
            const pokemonData = { 
                pokeName,
                pokeId,
                pokeType,
                pokemonDescriptionFiltered,
                pokeImage
            }
            
    
            setPokemons([...pokemons, pokemonData]);
            setNewPokes('');
            setInputError('');


        } catch (err) {
            setInputError('Pokemon not found');
        }

        


    }



    return (
        <>
            <Title>
                <img src={PokeLogo} alt="Pokemon Logo"/>
            </Title>

            <Form onSubmit={handleAddPoke}>
                <input value={newPoke} onChange={e => setNewPokes(e.target.value)} placeholder="Pokemon's name"></input>
                <button type="submit">Search</button>
            </Form>

            {inputError && <Error>{inputError}</Error>}

            <Repository>
{pokemons.map(pokemon => (
    
    <a key={pokemon.pokeId} href="">
    <img src={pokemon.pokeImage} alt={pokemon.pokeImage}/>

    <div>
        <div>
        <strong>{pokemon.pokeName.toUpperCase()}</strong>
        <span>| N:{pokemon.pokeId} |</span>
        <span>{pokemon.pokeType.toUpperCase()}</span>
        </div>

<span>{pokemon.pokemonDescriptionFiltered}</span>
    </div>


    <FaRegArrowAltCircleRight size={20}/>





</a>




))}



            </Repository>

        </>



    )

};

export default Dashboard;