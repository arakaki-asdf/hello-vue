import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import AppTop from "@/views/AppTop.vue";

const routeSettings: RouteRecordRaw[] = [
    {
        path: "/",
        name: "AppTop",
        component: AppTop,
    },
    {
        path: "/member/memberList",
        name: "MemberList",
        component: () => {
            return import("@/views/member/MemberList.vue");
        }
    },
    {
        path: "/member/memberDetail/:id", // idパラメータ付き
        name: "MemberDetail",
        component: () => import("@/views/member/MemberDetail.vue"),
        props: (routes) => {
            return { id: Number(routes.params.id) };
        }
    },
    {
        path: "/member/memberAdd",
        name: "MemberAdd",
        component: () => import("@/views/member/MemberAdd.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routeSettings
});

export default router;