<script setup lang="ts">
import OneSection from "./components/OneSection.vue";
</script>

<template>
  <section class="box">
    <h2>Slotの利用</h2>
    <OneSection>
      <template v-slot:detail="{memberInfo}">
        <dl>
          <dt>名前</dt>
          <dd>{{  memberInfo.name }}</dd>

          <dt>状況</dt>
          <dd>{{ memberInfo.state }}</dd>
        </dl>
      </template>
    </OneSection>
  </section>
</template>

<style>
.box {
    border: green 1px solid;
    margin: 10px;
}
</style>