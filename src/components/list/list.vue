<template>
  <div class="list">
    <slot />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class List extends Vue {
}
</script>

<style lang="sass" scoped>
.list
  display: flex
  flex-direction: column
</style>
