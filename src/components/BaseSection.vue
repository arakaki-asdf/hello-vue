<script setup lang="ts">
import { computed, inject } from "vue";
import OneSection from "./OneSection.vue";
import type { Member } from "../interfaces";

const memberList = inject("memberList") as Map<number, Member>;
const totalPoints = computed(
    (): number => {
        let total = 0;
        for (const item of memberList.values()) {
            total += item.points;
        }
        return total;
    }
);
</script>

<template>
    <section>
        <h1>会員リスト</h1>
        <p>全会員の保有ポイントの合計: {{ totalPoints }}</p>
        <OneSection
            v-for="id in memberList.keys()"
            v-bind:key="id"
            v-bind:id="id" />
    </section>
</template>

<style scoped>
section {
    border: orange 1px dashed;
    margin: 10px;
}
</style>