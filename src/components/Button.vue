<template>
  <div class="button">
    <slot />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class ListItem extends Vue {
}
</script>

<style lang="sass" scoped>
.button
  cursor: pointer
  display: inline-block
  text-transform: uppercase
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.125))
  background-color: white
  padding: 8px
  border-radius: 8px

.button:hover
  background-color: rgb(245, 245, 245)
</style>
