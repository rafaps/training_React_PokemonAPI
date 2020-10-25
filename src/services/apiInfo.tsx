import axios from 'axios';


const apiInfo = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/'

});

export default apiInfo;