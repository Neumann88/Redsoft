import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Catalog",
    component: () =>
      import("@/components/SectionComponents/Catalog/Catalog.vue"),
  },
  {
    path: "/delivery",
    name: "Delivery",
    component: () =>
      import("@/components/SectionComponents/Delivery/Delivery.vue"),
  },
  {
    path: "/payment",
    name: "Payment",
    component: () =>
      import("@/components/SectionComponents/Payment/Payment.vue"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () =>
      import("@/components/SectionComponents/Contacts/Contacts.vue"),
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () =>
      import("@/components/SectionComponents/Gallery/Gallery.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
