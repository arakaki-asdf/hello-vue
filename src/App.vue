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

list.set(1, {id: 1, name: "田中太郎", email:"bow@example.com", points: 35, note: "初回特典" });
list.set(2, {id: 2, name: "鈴木", email: "mue@example.com2", points: 53 });
const listRef = ref(list);

const onIncrementPoint = (id: number): void => {
  var item = listRef.value.get(id);
  if (item === undefined) return;

  item.points++;
};
const totalPoints = computed(
  (): number => {
    let total = 0;
    for (const item of listRef.value.values()) {
      total += item.points;
    }
    return total;
  });

</script>

<template>
  <section>
    <h1>親コンポーネント</h1>
    <p>全体ポイント: {{ totalPoints }}</p>
    <!-- データ、実行するイベントを渡す -->
    <OneSection
      v-for="[id, item] in listRef"
      v-bind:key="id"
      v-bind:id="id"
      v-bind:name="item.name"
      v-bind:email="item.email"
      v-bind:points="item.points"
      v-bind:note="item.note"
      v-on:incrementPoint="onIncrementPoint" />
  </section>
</template>

<style>
section {
  border: blue 1px solid;
  margin: 10px;
}
</style>