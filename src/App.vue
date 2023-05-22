<script setup lang="ts">
  import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/"><span>Game</span>Store</RouterLink>
    <RouterLink to="/create"><div class="icon-create"><img src="src/assets/icon-add.svg" alt=""></div></RouterLink>
  </header>
  <RouterView />
</template>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5vw;
    height: 60px;
    box-sizing: border-box;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 36px;
  }

  span {
    color: #FE0279;
  }

  .icon-create {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 10px;
    height: 43px;
    width: 43px;
    font-size: 18px;
    font-weight: normal;
    background-color: rgba(255, 255, 255, 0.5);
  }

  @media only screen and (min-width: 768px) {
    header {
      padding: 24px;
      margin-bottom: 50px;
    }
  }
</style>
