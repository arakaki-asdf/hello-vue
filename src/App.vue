<script setup lang="ts">
import { ref, computed } from "vue";
import OneSection from "./components/OneSection.vue";

let rand = Math.round(Math.random() * 10);
const randRef = ref(rand);
const onCreateNewRand = (): void => {
  // randRef.value = Math.round(Math.random() * 10);
  randRef.value = Math.round(Math.random() * 10);
}
</script>

<template>
  <section>
    <h1>親コンポーネント</h1>
    <!-- データ、実行するイベントを渡す -->
    <OneSection
      v-bind:rand="randRef"
      v-on:createNewRand="onCreateNewRand"
    />
  </section>
</template>

<style>
section {
  border: blue 1px solid;
  margin: 10px;
}
</style>