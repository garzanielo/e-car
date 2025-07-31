import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import CatalogView from "@/views/CatalogView.vue";
import FinancingView from "@/views/FinancingView.vue";
import AboutUsView from "@/views/AboutUsView.vue";
import LocationView from "@/views/LocationView.vue";
import ContactView from "@/views/ContactView.vue";
import CarDetailView from "@/views/CarDetailView.vue";
import LoginView from "@/views/admin/LoginView.vue";
import AdminPanelView from "@/views/admin/AdminPanelView.vue";
import AddCarView from "@/views/admin/AddCarView.vue";
import RemoveCarView from "@/views/admin/RemoveCarView.vue";
import ClientRequestsView from "@/views/admin/ClientRequestsView.vue";

import { isAdminLoggedIn } from "@/utils/auth";

const routes = [
  { path: "/", name: "Inicio", component: HomeView },
  { path: "/catalog", name: "Catálogo", component: CatalogView },
  { path: "/financing", name: "Financiación", component: FinancingView },
  { path: "/about-us", name: "Nosotros", component: AboutUsView },
  { path: "/location", name: "Ubicación", component: LocationView },
  { path: "/contact", name: "Contacto", component: ContactView },
  {
    path: "/car/:id",
    name: "DetalleAuto",
    component: CarDetailView,
    props: true,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/admin",
    name: "AdminPanel",
    component: AdminPanelView,
    beforeEnter: (to, from, next) => {
      isAdminLoggedIn() ? next() : next("/login");
    },
  },
  {
    path: "/admin/add-car",
    name: "AddCar",
    component: AddCarView,
    beforeEnter: (to, from, next) => {
      isAdminLoggedIn() ? next() : next("/login");
    },
  },
  {
    path: "/admin/remove-car",
    name: "RemoveCar",
    component: RemoveCarView,
    beforeEnter: (to, from, next) => {
      isAdminLoggedIn() ? next() : next("/login");
    },
  },
  {
    path: "/requests",
    name: "ClientRequests",
    component: ClientRequestsView,
    beforeEnter: (to, from, next) => {
      isAdminLoggedIn() ? next() : next("/login");
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
