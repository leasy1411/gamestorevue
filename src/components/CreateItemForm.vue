<script setup lang="ts">
  import { store } from '../store/store';
  import { nanoid } from 'nanoid';
  import { ref } from 'vue';

  let item = ref({
      id: '',
      title: '',
      description: '',
      price: 0,
      imgUrl: ''
    });

  const createItem = () => {
    item.value.id = nanoid();

    store.items.push(item.value);

    console.log(store.items);

    alert("Item has been added");

    item.value = {
      id: '',
      title: '',
      description: '',
      price: 0,
      imgUrl: ''
    };
  }
</script>

<template>
  <div class="wrap-main">
    <div class="wrap-form">
      <form @submit.prevent="createItem">
        <label>Title</label>
        <input v-model="item.title" :required="true" class="mb-24">
        <label>Price</label>
        <input type="number" v-model.number="item.price" :required="true" class="mb-24">
        <label>Description</label>
        <textarea v-model="item.description" :required="true" class="mb-24" />
        <label>Image Url</label>
        <input v-model="item.imgUrl" class="mb-24">
        <div class="wrap-button">
          <button>Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
  .wrap-main {
    display: flex;
    justify-content: center;
  }

  .wrap-form {
    max-width: 90vw;
    width: 600px;
    background-color: white;
    border-radius: 10px;
    padding: 24px;
    box-sizing: border-box;
  }

  .wrap-button {
    display: flex;
    justify-content: end;
  }

  label {
    font-size: 18px;
    margin-bottom: 8px;
    display:inline-block;
  }

  input, textarea {
    width: 100%;
    box-sizing: border-box;
    padding: 12px 16px;
    border: 1px solid #EDEAE7;
    border-radius: 10px;
    font-size: 16px;
  }

  textarea {
    height: 100px;
  }

  input:focus, textarea:focus {
    outline: none;
  }

  button {
    border-radius: 10px;
    border: none;
    font-size: 18px;
    padding: 12px;
    background-color: #FE0279;
    color: white;
    cursor: pointer;
  }
</style>
