export default [
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: () => import("./views/ErorrPage.vue"),
    },
  ];