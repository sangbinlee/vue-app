import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue"; //메인 컴포넌트 호출
import List from "@/views/board/List.vue"; //게시판 리스트 컴포넌트 호출
import ShopList from "@/views/shop/List.vue"; //게시판 리스트 컴포넌트 호출
import Login from "@/views/Login.vue"; //게시판 리스트 컴포넌트 호출
import About from "@/views/About.vue"; //게시판 리스트 컴포넌트 호출
import NotFoundVue from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/board/list",
    name: "List",
    component: List,
  },
  {
    path: "/shop/list",
    name: "ShopList",
    component: ShopList,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFoundVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
