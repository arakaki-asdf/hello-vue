<script setup lang="ts">
import { ref } from "vue";

const radioSelect = ref("");
const dropdownSelect = ref("");
const isConfirm = ref(false);
const confirmValue = ref(0);
const selectedOS = ref([]);
const selectedOS2 = ref([]);
</script>

<template>
  <section>
    <label><input type="radio" name="memberType" value="まる" v-model="radioSelect">まる</label>
    <label><input type="radio" name="memberType" value="さんかく" v-model="radioSelect">さんかく</label>
    <label><input type="radio" name="memberType" value="しかく" v-model="radioSelect">しかく</label>
    <p>選択 : {{ radioSelect }}</p>
  </section>
  <br>

  <section>
    <select v-model="dropdownSelect">
      <option value="上">上</option>
      <option value="中">中</option>
      <option value="下">下</option>
    </select>
    <p>選択 : {{ dropdownSelect }}</p>
  </section>
  <br>

  <section>
    <label><input type="checkbox" v-model="isConfirm">決定する</label>
    <p>check: {{ isConfirm }}</p>
  </section>

  <br>
  <section>
    <label><input type="checkbox" v-model="confirmValue" true-value="1" false-value="0">決定する(0, 1)</label>
    <p>check: {{ confirmValue }}</p>
  </section>
  <br>

  <section>
    <label><input type="checkbox" v-model="selectedOS" value="1">mac</label>
    <label><input type="checkbox" v-model="selectedOS" value="2">windows</label>
    <label><input type="checkbox" v-model="selectedOS" value="3">linux</label>
    <label><input type="checkbox" v-model="selectedOS" value="4">ios</label>
    <label><input type="checkbox" v-model="selectedOS" value="5">android</label>
    <p>OS: {{ selectedOS }}</p>
  </section>

  <section>
    <select v-model="selectedOS2" multiple>
      <option value="1">mac</option>
      <option value="2">windows</option>
      <option value="3">ios</option>
    </select>
    <p>選択 : {{ selectedOS2 }}</p>
  </section>
  <br>

</template>