<script setup lang="ts">
import OneSection from "./components/OneSection.vue"
</script>

<template>
  <h1>App Component</h1>
  <section>
    <h2>section 1</h2>
    <OneSection />
  </section>
  <section>
    <h2>コンポーネントが複数</h2>

    <OneSection />
    <OneSection />
    <OneSection />
  </section>
</template>