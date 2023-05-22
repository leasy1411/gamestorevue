<script setup lang="ts">
  import type { Item } from 'src/models/item';
  import { store } from '../store/store';

  const props = defineProps<{
    item: Item
  }>();

  const deleteItem = (id: string) => {
    const index = store.items.findIndex((item) => {
      return item.id === id
    })
    store.items.splice(index, 1);
  }
</script>

<template>
  <div class="card">
    <div class="card-image">
      <img :src="props.item?.imgUrl || 'src/assets/placeholder-image.png'" alt="">
    </div>
    <div class="card-info">
      <div class="card-title">
        <div class="card-title">
          <span style="font-weight: bold;">{{ props.item.title }}</span>
        </div>
        <div>
          {{ props.item.price }} <span>$</span>
        </div>
      </div>
      <div class="card-description">
        <div>
          {{ props.item.description }}
        </div>
      </div>
      <div class="card-button">
        <button @click="() => deleteItem(props.item.id)"><img src="/src/assets/icon-delete.svg" alt=""></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .card {
    font-size: 16px;
    background-color: white;
    border-radius: 10px;
    max-width: 90vw;
    width: 600px;
    margin-bottom: 20px;
  }
  
  .card-image {
    height: 250px;
    border-radius: 10px;
  }

  .card-info {
    padding: 24px;
  }

  .card-description {
    margin: 24px 0 24px 0;
    line-height: 20px;
    white-space: pre-wrap;
  }

  .card-title {
    font-size: 22px;
    display: flex;
    justify-content: space-between;
  }

  .card-button {
    display: flex;
    justify-content: end;
  }

  span {
    color: #FE0279;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }

  button {
    height: 24px;
    width: 24px;
    border: none;
    background: none;
    cursor: pointer;
  }
</style>
