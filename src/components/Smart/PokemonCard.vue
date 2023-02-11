<template>
  <div class="card">
    <div class="img">
      <img :src="image" alt="Card Image">
    </div>
    <div class="content">
      <div class="content-title">
        <span>{{ name }}</span>
      </div>

      <div class="content-subtitle">
        <template
          v-for="(type, index) in types"
          :key="index"
        >
          <span>
          {{ type }}
          </span>

          <a v-if="index < types.length - 1">-</a>
        </template>
      </div>

      <div class="separator"></div>

      <div class="section">
        <div class="section-content">
          <span
            v-for="(ability, index) in abilities"
            :key="index"
          >
            {{ ability }}
          </span>
        </div>
      </div>

      <pokemon-card-stats :stats="stats"></pokemon-card-stats>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import IPokemonStats from '@/typings/IPokemonStats';
import PokemonCardStats from '@/components/Smart/PokemonCardStats.vue';

defineProps<{
  image: string,
  name: string,
  types: string[],
  abilities: string[],
  stats: IPokemonStats,
}>();
</script>

<style lang="sass" scoped>
.card
  height: 550px
  width: 350px
  border-radius: 16px
  background-color: #D9D9D9
  filter: drop-shadow(0 0 16px rgba(0, 0, 0, 0.125))
  text-transform: capitalize
  font-size: 18px

  .img
    height: 50%
    display: flex
    justify-content: center
    align-items: center

    img
      width: 100%
      height: 100%
      object-fit: contain

  .content
    height: 50%
    background-color: white
    border-radius: 16px
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-evenly

    .content-title
      span
        font-size: 24px

    .content-subtitle
      span
        margin: 0 0.35em
        font-size: 18px

    .section
      width: 100%

      .section-content
        display: flex
        flex-direction: row
        justify-content: space-evenly

    .separator
      width: calc(100% - 64px)
      border-radius: 2px
      height: 2px
      background-color: rgba(44, 62, 80, 0.25)
</style>
