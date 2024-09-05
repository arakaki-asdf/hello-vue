<script setup lang="ts">
import { ref, shallowRef } from "vue";
import Radio from "./components/Radio.vue";
import Select from "./components/Select.vue";
import Input from "./components/Input.vue";

const componentList = [Input, Radio, Select];
const nameList: string[] = ["Input", "Radio", "Select"];

let currentIndex = 0;
const currentComponent = shallowRef(componentList[currentIndex]);
const currentName = ref(nameList[currentIndex]);

const switchComponent = (): void => {
  currentIndex = ++currentIndex % componentList.length;
  currentComponent.value = componentList[currentIndex];
  currentName.value = nameList[currentIndex];
}
</script>

<template>
  <p>コンポーネント名: {{ currentName }}</p>
  <KeepAlive>
    <component v-bind:is="currentComponent" />
  </KeepAlive>
  <button v-on:click="switchComponent">切り替え</button>
</template>

<style>
.box {
    border: green 1px solid;
    margin: 10px;
}
</style>