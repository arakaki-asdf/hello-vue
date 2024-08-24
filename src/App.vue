<script setup lang="ts">
import { ref, watch } from "vue";

interface Data {
  id: number;
  name: string;
  price: number;
};

// テンプレート変数
const dataNo = ref(1);
const priceMessage = ref("");

watch(dataNo, (): void => {
    priceMessage.value = getCocktailInfo(dataNo.value);
  }
);

function getCocktailInfo(no: number): string {
  // データ
  const map = new Map<number, Data>();
  map.set(1, {id: 1, name: "white", price: 1200});
  map.set(2, {id: 2, name: "blue", price: 1500});
  map.set(3, {id: 3, name: "new", price: 1100});
  map.set(4, {id: 4, name: "mat", price: 1500});
  const data = map.get(no);

  return data === undefined
    ? "該当カクテルはありません。"
    : `該当するカクテルは${data.name}で、価格は${data.price}円です`;
}

setInterval(
  (): void => {
    dataNo.value = Math.round(Math.random() * 3) + 1;
  },
  1000);
</script>

<template>
  <p>現在のカクテル番号: {{ dataNo }}</p>
  <p>{{ priceMessage }}</p>
</template>