<script setup lang="ts">
import useFetch from "@/composables/use_fetch.composable.ts";
const { isFetching, error, data } = useFetch("").get();
</script>

<template>
  <p v-if="isFetching">Loading...</p>
  <p v-if="error">{{ error }}</p>
  <p v-if="data">{{ data }}</p>
</template>
