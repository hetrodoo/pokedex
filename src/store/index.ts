import { createStore } from 'vuex';
import PokeApi from '@/api/PokeApi';

export default createStore({
  state: {
    pokemonList: [],
    isLoading: false,
    hasEnded: false,
    count: -1,
    offset: 0,
  },
  getters: {
    GET_POKEMON_LIST(state) {
      return state.pokemonList;
    },
    GET_IS_LOADING(state) {
      return state.isLoading;
    },
    GET_HAS_ENDED(state) {
      return state.hasEnded;
    },
  },
  mutations: {
    SET_POKEMON_LIST(state, payload) {
      state.pokemonList = payload;
    },
    SET_IS_LOADING(state, payload) {
      state.isLoading = payload;
    },
    SET_HAS_ENDED(state, payload) {
      state.hasEnded = payload;
    },
    SET_COUNT(state, payload) {
      state.count = payload;
    },
    SET_OFFSET(state, payload) {
      state.offset = payload;
    },
  },
  actions: {
    async LOAD_POKEMON_LIST_PAGINATED(store) {
      if (store.state.isLoading) return;
      store.commit('SET_IS_LOADING', true);

      try {
        if (store.state.count !== 0 && store.state.count === store.state.offset) store.commit('SET_HAS_ENDED', true);

        const { data: { results, count } } = await PokeApi.POKEMON_LIST(store.state.offset, 20);
        const pokemonList = store.getters.GET_POKEMON_LIST;
        pokemonList.push(...results.map((r: Record<string, unknown>) => r.name));
        store.commit('SET_POKEMON_LIST', pokemonList);

        store.commit('SET_COUNT', count);
        store.commit('SET_OFFSET', Math.min(store.state.offset + 20, store.state.count));
      } catch (e) {
        console.error(e);
      } finally {
        store.commit('SET_IS_LOADING', false);
      }
    },
  },
  modules: {
  },
});
