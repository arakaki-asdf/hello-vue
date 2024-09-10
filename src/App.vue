<script setup lang="ts">
import { reactive, provide } from "vue";
import { RouterView } from "vue-router";
import type { Member } from "@/interfaces";

const memberList = new Map<number, Member>();
provide("memberList", reactive(memberList));
memberList.set(33456, {
  id: 33456,
  name: "田中太郎",
  email: "tanaka@example.com",
  points: 35,
  note: "初回特典あり"});
memberList.set(47783, {
  id: 47783,
  name: "鈴木次郎",
  email: "suzuki@example.com",
  points: 53});
</script>

<template>
  <header>
    <h1>Vue Routerサンプル</h1>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
main {
    border: blue 1px solid;
    padding: 10px;
}

/* パンくずリスト */
#breadcrumbs ul li {
  display: inline;
  list-style-type: none;
}
#breadcrumbs {
  margin-left: 0px;
}
#breadcrumbs ul {
  padding-left: 0px;
}
#breadcrumbs ul .current {
  color: red;
}
#breadcrumbs ul li:before {
  content: " > ";
}
#breadcrumbs ul li:first-child:before {
  content: none;
}
</style>