<script setup lang="ts">
import { computed, inject } from 'vue';
import type { Member } from '@/interfaces';

interface Props {
    id: number;
}
const props = defineProps<Props>();
const title = "会員詳細情報";
const memberList = inject("memberList") as Map<number, Member>;

const member = computed((): Member =>  memberList.get(props.id) as Member);
const localNote = computed((): string => member.value.note ?? "--");
</script>

<template>
    <h1>会員管理</h1>
    <!-- パンクズ -->
    <nav id="breadcrumbs">
        <ul>
            <li>
                <RouterLink v-bind:to="{name: 'AppTop'}">TOP</RouterLink>
            </li>
            <li>
                <RouterLink v-bind:to="{name: 'MemberList'}">会員リスト</RouterLink>
            </li>
            <li>{{ title }}</li>
        </ul>
    </nav>

    <section>
        <h2>{{ title }}</h2>
        <dl>
            <dt>ID</dt>
            <dd>{{ member.id }}</dd>

            <dt>名前</dt>
            <dd>{{ member.name }}</dd>

            <dt>メール</dt>
            <dd>{{ member.email }}</dd>

            <dt>保有ポイント</dt>
            <dd>{{ member.points }}</dd>

            <dt>備考</dt>
            <dd>{{ localNote }}</dd>
        </dl>
    </section>
</template>