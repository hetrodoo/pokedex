<template>
  <h2 style="margin-left: 16px">
    Pokedex
  </h2>

  <list>
    <list-item
      v-for="(item, index) in pokemonList"
      :key="index"
      @click="openCard(item)"
    >
      {{ item }}
    </list-item>
  </list>

  <div class="next" v-if="!hasEnded">
    <template v-if="isLoading">
      <loading />
    </template>

    <template v-else>
      <pk-button
        @click="requestPokemonList"
      >
        Ver mais
      </pk-button>
    </template>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import List from '@/components/List/List.vue';
import ListItem from '@/components/List/List-Item.vue';
import pkButton from '@/components/Button.vue';
import { useStore } from 'vuex';
import Loading from '@/components/Loading.vue';

@Options({
  components: {
    Loading,
    List,
    ListItem,
    pkButton,
  },
})
export default class HomeView extends Vue {
  private readonly store = useStore();

  get pokemonList(): string[] {
    return this.store.getters.GET_POKEMON_LIST;
  }

  get isLoading(): string[] {
    return this.store.getters.GET_IS_LOADING;
  }

  get hasEnded(): string[] {
    return this.store.getters.GET_HAS_ENDED;
  }

  mounted() {
    this.store.dispatch('LOAD_POKEMON_LIST_PAGINATED');
  }

  requestPokemonList() {
    this.store.dispatch('LOAD_POKEMON_LIST_PAGINATED');
  }

  openCard(pokemon: string) {
    this.$router.push(`/${pokemon}`).catch(console.error);
  }
}
</script>

<style lang="sass" scoped>
.next
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  padding: 16px 0
</style>
