import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import Home from "../views/Home.vue";
import EditProfil from "../views/EditProfil.vue";
import Deconnexion from "../views/Deconnexion.vue";
import recupIDPage from "../views/recupIDPage.vue";
import Apropos from "../views/Apropos.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/LoginPage",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/RegisterPage",
    name: "RegisterPage",
    component: RegisterPage,
  },
  {
    path: "/EditProfil",
    name: "EditProfil",
    component: EditProfil,
  },
  {
    path: "/Deconnexion",
    name: "Deconnexion",
    component: Deconnexion,
  },
  {
    path: "/recupIDPage",
    name: "recupIDPage",
    component: recupIDPage,
    props: true,
  },
  {
    path: "/Apropos",
    name: "Apropos",
    component: Apropos,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
