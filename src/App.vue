<script setup lang="ts">
import { Routes } from "./router/routes.enum.ts";
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="flex flex-row gap-4">
      <router-link :to="Routes.Home">Home</router-link>
      <router-link :to="Routes.About">About</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
