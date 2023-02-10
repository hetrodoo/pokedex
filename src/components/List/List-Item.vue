<template>
  <div class="list-item">
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
.list-item
  cursor: pointer
  border-top: 1px solid rgba(0, 0, 0, 0.25)
  padding: 16px
  transition: background-color 125ms ease-in-out
  text-transform: capitalize
  background-color: white

.list-item:hover
  background-color: rgb(245, 245, 245)

.list-item:last-of-type
  border-bottom: 1px solid rgba(0, 0, 0, 0.25)
</style>
