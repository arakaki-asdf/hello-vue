<script setup lang="ts">
import { reactive, provide } from "vue";
import BaseSection from "./components/BaseSection.vue";
import type { Member } from "./interfaces";

const memberList = new Map<number, Member>();
memberList.set(1, {id: 1, name: "田中太郎", email:"bow@example.com", points: 35, note: "初回特典" });
memberList.set(2, {id: 2, name: "鈴木", email: "mue@example.com2", points: 53 });
// 会員情報リストの用意
provide("memberList", reactive(memberList));
</script>

<template>
  <BaseSection />
</template>