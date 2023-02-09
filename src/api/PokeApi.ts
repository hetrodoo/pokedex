import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

const pokeApi = setupCache(axios.create({
  baseURL: 'https://pokeapi.co/',
}));

export default {
  POKEMON_LIST: (offset: number, limit: number) => pokeApi.get('api/v2/pokemon', { params: { offset, limit } }),
  POKEMON: (pokemon: string) => pokeApi.get(`api/v2/pokemon/${pokemon}`),
};
