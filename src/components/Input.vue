<script setup lang="ts">
import { ref } from "vue";

// v-modelによる双方向バインディング
const inputNameModel = ref("田中太郎");
</script>

<template>
    <!-- v-model 双方向バインディング -->
    <input type="text" v-model="inputNameModel">
    <p>{{ inputNameModel }}</p>
</template>