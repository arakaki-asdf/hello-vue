<script setup lang="ts">
import { computed, inject } from "vue";
import type { Member } from "../interfaces"
// parent -> this
interface Props {
    id: number;
}
const props = defineProps<Props>();

const memberList = inject("memberList") as Map<number, Member>;
const member = computed(
    (): Member => {
        return memberList.get(props.id) as Member;
    }
);
</script>

<template>
    <section class="box">
        <h4>{{ member.name }}さんの情報</h4>
        <dl>
            <dt>ID</dt>
            <dd>{{ id }}</dd>

            <dt>メールアドレス</dt>
            <dd>{{ member.email }}</dd>

            <dt>保有ポイント</dt>
            <dd>
                <input type="number" v-model.number="member.points">
            </dd>

            <dt>備考</dt>
            <dd>{{ member.note }}</dd>
        </dl>
        <!-- <button v-on:click="pointUp">ポイント加算</button> -->
    </section>
</template>

<style>
.box {
    border: green 1px dashed;
    margin: 10px;
}
</style>