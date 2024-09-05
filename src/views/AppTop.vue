<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
    <h1>TOP</h1>
    <nav id="breadcrumbs">
        <ul>
            <li>TOP</li>
        </ul>
    </nav>
    <section>
        <p>
            <!-- index.tsで指定したルーティングのnameプロパティを指定 -->
            <RouterLink v-bind:to="{name: 'MemberList'}">
                会員管理はこちら
            </RouterLink>
        </p>
    </section>
</template>