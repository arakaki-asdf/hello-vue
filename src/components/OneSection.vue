<script setup lang="ts">
// parent -> this
interface Props {
    id: number;
    name: string;
    email: string;
    points: number;
    note?: string;
}

// this -> parent (event fire)
interface Emits {
    // (event: "createNewRand"): void;
    (event: "incrementPoint", id: number): void;
}

// Propsを適用
const props = withDefaults(
    defineProps<Props>(),
    { note: "--" });

// Emitの定義、実行用イベント
const emit = defineEmits<Emits>();
const pointUp = (): void => {
    // emit("createNewRand");
    emit("incrementPoint", props.id);
}
</script>

<template>
    <section class="box">
        <h4>{{ name }}さんの情報</h4>
        <dl>
            <dt>ID</dt>
            <dd>{{ id }}</dd>

            <dt>メールアドレス</dt>
            <dd>{{ email }}</dd>

            <dt>保有ポイント</dt>
            <dd>{{ points }}</dd>

            <dt>備考</dt>
            <dd>{{ note }}</dd>
        </dl>

        <button v-on:click="pointUp">ポイント加算</button>
    </section>
</template>

<style>
.box {
    border: green 1px dashed;
    margin: 10px;
}
</style>