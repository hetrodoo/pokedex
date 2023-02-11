<template>
  <img
    class="background"
    src="@/assets/forest.jpg"
    alt="pokemon background"
  >

  <div class="pokemon-view">
    <template v-if="isLoading">
      <div class="loader-background">
        <loading />
      </div>
    </template>

    <template v-else>
      <div class="return-btn">
        <pk-button
          @click="goBack"
        >
          Change
        </pk-button>
      </div>

      <pokemon-card
        :abilities="pokemonAbilities"
        :types="pokemonTypes"
        :stats="pokemonStats"
        :image="pokemonImage"
        :name="pokemonName"
      />
    </template>
  </div>
</template>

<style scoped lang="sass">
.background, .pokemon-view
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  display: flex
  justify-content: center
  align-items: center
  object-fit: cover

.background
  z-index: 0

.pokemon-view
  z-index: 1
  backdrop-filter: blur(16px)

.return-btn
  position: absolute
  top: 16px
  left: 16px

.loader-background
  display: flex
  align-items: center
  justify-content: center
  width: 256px
  height: 256px
  background: white
  border-radius: 8px
</style>

<script lang="ts" setup>
/* eslint camelcase: 0 */
import {
  computed,
  onMounted,
  reactive,
  watch,
  ref,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import PokeApi from '@/api/PokeApi';
import Loading from '@/components/Loading.vue';
import PkButton from '@/components/Button.vue';
import PokemonCard from '@/components/Smart/PokemonCard.vue';
import IPokeApiPokemonResponse from '@/typings/pokeApi/IPokeApiPokemonResponse';
import IPokemonStats from '@/typings/IPokemonStats';

const router = useRouter();
const route = useRoute();
const pokemon = computed(() => route.params.pokemon);

watch(pokemon, () => router.go(0));

const pokemonAbilities: string[] = reactive([]);
const pokemonTypes: string[] = reactive([]);
const pokemonStats: IPokemonStats = reactive({
  atk: 0,
  def: 0,
  hp: 0,
  sAtk: 0,
  sDef: 0,
  speed: 0,
});
const pokemonName = ref(pokemon.value as string);
const pokemonImage = ref('');
const isLoading = ref(true);

onMounted(async () => {
  const {
    data: {
      abilities,
      types,
      stats,
      sprites,
    },
  } = await PokeApi.POKEMON<IPokeApiPokemonResponse>(pokemon.value as string);

  pokemonAbilities.push(...abilities.map(({ ability }) => ability.name));
  pokemonTypes.push(...types.map(({ type }) => type.name));

  stats.forEach(({ stat, base_stat }) => {
    switch (stat.name) {
      case 'hp':
        pokemonStats.hp = base_stat;
        break;
      case 'attack':
        pokemonStats.atk = base_stat;
        break;
      case 'defense':
        pokemonStats.def = base_stat;
        break;
      case 'special-attack':
        pokemonStats.sAtk = base_stat;
        break;
      case 'special-defense':
        pokemonStats.sDef = base_stat;
        break;
      case 'speed':
        pokemonStats.speed = base_stat;
        break;
      default:
        // noop
        break;
    }

    pokemonImage.value = sprites.other['official-artwork'].front_default;
    isLoading.value = false;
  });
});

function goBack() {
  router.push('/');
}
</script>
