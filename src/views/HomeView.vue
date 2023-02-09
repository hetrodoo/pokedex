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
      Loading...
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
import List from '@/components/list/list.vue';
import ListItem from '@/components/list/list-item.vue';
import pkButton from '@/components/button.vue';
import PokeApi from '@/api/PokeApi';

@Options({
  components: {
    List,
    ListItem,
    pkButton,
  },
})
export default class HomeView extends Vue {
  offset: number = 0;

  count: number = 0;

  pokemonList: string[] = [];

  isLoading: boolean = false

  hasEnded: boolean = false

  mounted() {
    this.requestPokemonList()
      .catch(console.error);
  }

  async requestPokemonList() {
    if (this.isLoading) return;
    this.isLoading = true;

    try {
      if (this.count !== 0 && this.count === this.offset) this.hasEnded = true;

      const { data: { results, count } } = await PokeApi.POKEMON_LIST(this.offset, 20);
      this.pokemonList.push(...results.map((r: Record<string, unknown>) => r.name));

      this.count = count;
      this.offset += 20;
      this.offset = Math.min(this.count, this.offset);
    } catch (e) {
      console.error(e);
    } finally {
      this.isLoading = false;
    }
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
