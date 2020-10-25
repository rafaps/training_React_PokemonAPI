import axios from 'axios';

const apiDesc = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon-species',
});

export default apiDesc;