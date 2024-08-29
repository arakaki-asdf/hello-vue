<script setup lang="ts">
// parent -> this
interface Props {
    rand: number;
}

// this -> parent (event fire)
interface Emits {
    (event: "createNewRand"): void;
}

// Propsを適用
defineProps<Props>();

// Emitの定義、実行用イベント
const emit = defineEmits<Emits>();
const onNewRandButtonClick = (): void => {
    emit("createNewRand");
}
</script>

<template>
    <section class="box">
        <p>子コンポーネントで親の乱数を表示: {{ rand }}</p>
        <button v-on:click="onNewRandButtonClick">親の乱数発生イベントを実行</button>
    </section>
</template>

<style>
.box {
    border: green 1px dashed;
    margin: 10px;
}
</style>