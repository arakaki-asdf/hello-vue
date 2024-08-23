<script setup lang="ts">
import { ref, computed} from "vue";

const list: string[] = ["hoge", "hogehoge", "world"];
const cockList = ref(list);
const changeList = (): void => {
  cockList.value = ["バラライカ", "XYZ", "マンハッタン"];
};

const addCockList = (): void => {
  cockList.value.push("ブルームーン");
};
const deleteFromCockList = (): void => {
  cockList.value.pop();
};
</script>

<template>
  <ul>
    <li
      v-for="(name, index) in cockList"
      v-bind:key="name">
      {{ name }}({{ index }})
    </li>
  </ul>

  <p><button v-on:click="changeList">Change</button></p>
  <p><button v-on:click="addCockList">Add</button></p>
  <p><button v-on:click="deleteFromCockList">Delete</button></p>
</template>