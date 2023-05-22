<script setup lang="ts">
  import CardItem from './CardItem.vue';
  import { store } from '../store/store';
</script>

<template>
  <div class="wrap-main">
    <div>
      <CardItem v-for="item of store.items" :key="item.id" :item="item"></CardItem>
    </div>
  </div>
</template>

<style scoped>
  .wrap-main {
    display: flex;
    justify-content: center;
    width: 100%;
  }
</style>
