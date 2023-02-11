<template>
  <router-view/>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import { onMounted } from 'vue';

const store = useStore();

onMounted(() => store.dispatch('LOAD_POKEMON_LIST_PAGINATED'));
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap')

body
  margin: 0
  padding: 0

*
  font-family: 'Roboto', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
</style>
