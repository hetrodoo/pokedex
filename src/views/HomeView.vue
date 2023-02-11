<template>
  <h2 style="margin-left: 16px">
    Pokedex <span style="font-size: 12px">v{{version}}</span>
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

  <div class="next" v-if="!hasEnded && isLoading">
    <loading />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import List from '@/components/List/List.vue';
import ListItem from '@/components/List/List-Item.vue';
import pkButton from '@/components/Button.vue';
import { useStore } from 'vuex';
import Loading from '@/components/Loading.vue';
import Package from '../../package.json';

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

  // eslint-disable-next-line class-methods-use-this
  get version(): string {
    return Package.version;
  }

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
    window.addEventListener('scroll', this.loadIfAtBottom);
  }

  unmounted() {
    window.removeEventListener('scroll', this.loadIfAtBottom);
  }

  loadIfAtBottom() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.store.dispatch('LOAD_POKEMON_LIST_PAGINATED');
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
