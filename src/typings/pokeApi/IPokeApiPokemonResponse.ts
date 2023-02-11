import IPokeApiAbility from '@/typings/pokeApi/IPokeApiAbility';
import IPokeApiStat from '@/typings/pokeApi/IPokeApiStat';
import IPokeApiType from '@/typings/pokeApi/IPokeApiType';
import IPokeApiSprites from '@/typings/pokeApi/IPokeApiSprites';

interface IPokeApiPokemonResponse {
  abilities: IPokeApiAbility[]
  types: IPokeApiType[]
  stats: IPokeApiStat[]
  sprites: IPokeApiSprites
}

export default IPokeApiPokemonResponse;
