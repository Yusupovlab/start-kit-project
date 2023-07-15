import { createRouter, createWebHistory } from 'vue-router'

// I use import.meta.glob to import all the routes from the modules folder.
// This way I don't have to manually import each route file.
// I also use eager: true to make sure the routes are loaded before the app is mounted.
const importedModules = import.meta.glob("../modules/**/*.router.js", {
  eager: true,
});

const modules = [];

Object.keys(importedModules).forEach((key) => {
  if (importedModules[key]?.default) {
    if (
      Array.isArray(importedModules[key].default) &&
      importedModules[key].default.length
    ) {
      modules.push(...importedModules[key].default);
    }
  }
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'dashboard' }
    },
    ...modules,
  ]
})

export default router