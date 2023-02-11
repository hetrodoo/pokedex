<template>
  <div class="pokemon-card-stats">
    <div class="stats">
      <div class="stat">
        <div class="stat-title">ATK:</div>
        <div class="stat-text">
          {{ stats.atk }}
        </div>
      </div>

      <div class="stat">
        <div class="stat-title">DEF:</div>
        <div class="stat-text">
          {{ stats.def }}
        </div>
      </div>

      <div class="stat">
        <div class="stat-title">HP:</div>
        <div class="stat-text">
          {{ stats.hp }}
        </div>
      </div>
    </div>
    <div class="stats">
      <div class="stat">
        <div class="stat-title">S-ATK:</div>
        <div class="stat-text">
          {{ stats.sAtk }}
        </div>
      </div>

      <div class="stat">
        <div class="stat-title">S-DEF:</div>
        <div class="stat-text">
          {{ stats.sDef }}
        </div>
      </div>

      <div class="stat">
        <div class="stat-title">SPEED:</div>
        <div class="stat-text">
          {{ stats.speed }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import IPokemonStats from '@/typings/IPokemonStats';

defineProps<{
  stats: IPokemonStats
}>();
</script>

<style scoped lang="sass">
.pokemon-card-stats
  width: 100%
  --border: 1px solid rgba(44, 62, 80, 0.5)

  .stats
    display: grid
    width: 100%
    grid-template-columns: repeat(3, 1fr)

    &:nth-child(odd)
      border-top: var(--border)
      border-bottom: var(--border)

    &:last-of-type
      border-bottom: var(--border)

    .stat
      position: relative
      flex-grow: 1
      display: flex
      justify-content: center
      align-items: center
      border-right: var(--border)
      padding: 12%

      .stat-title
        position: absolute
        top: 2px
        left: 2px
        font-size: 0.65em
        font-style: italic

      &:last-of-type
        border-right: none

</style>
