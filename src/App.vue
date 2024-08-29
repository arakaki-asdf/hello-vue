<script setup lang="ts">
import { ref, computed } from "vue";
import OneSection from "./components/OneSection.vue";

interface Member {
  id: number;
  name: string;
  email: string;
  points: number;
  note?: string;
}

const list = new Map<number, Member>();
list.set(1, { id: 1, name: "田中太郎", email:"bow@example.com", points: 35, note: "初回入会特典あり" });
list.set(2, { id: 2, name: "鈴木太郎", email:"mue@example.com", points: 53 });
const memberList = ref(list);

const totalPoints = computed((): number => {
  let total = 0;
  for (const member of memberList.value.values()) {
    total += member.points;
  }
  return total;
});
</script>

<template>
  <h1>Props基礎</h1>
  <section>
    <h2>属性に直接記述</h2>
    <p>全会員の保有ポイントの合計: {{ totalPoints }}</p>
    <OneSection 
      v-for="[id, item] in list"
      v-bind:key="id"
      v-bind:id="id"
      v-bind:name="item.name"
      v-bind:email="item.email"
      v-bind:points="item.points"
      v-bind:note="item.note"
    />
  </section>
</template>

<style>
section {
  border: blue 1px solid;
  margin: 10px;
}
</style>