<script setup lang="ts">
import { ref } from "vue";

const msg = ref("none");
const onEnterKey = (): void => {
  msg.value = "エンターキーが押下されました。";
};
const onRightButtonClick = (): void => {
  msg.value = "ボタンが右クリックされました。";
};
const onShiftClick = (): void => {
  msg.value = "シフトを押しながらクリックされました。";
};
</script>

<template>
  <p>{{ msg }}</p>
  <input type="text" v-on:keydown.enter="onEnterKey"><br>
  <button v-on:click.right="onRightButtonClick">右クリック</button>
  <button v-on:click.shift="onShiftClick">シフトを押しながらクリック</button><br>
</template>