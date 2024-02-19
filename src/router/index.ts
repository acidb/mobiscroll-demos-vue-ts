import { createRouter, createWebHistory } from 'vue-router'
import { demos, demoTitleMap } from '../demos'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/', component: HomeView }]
})

for (const main of demos) {
  for (const sub of main.items) {
    for (const group of sub.items) {
      for (const demo of group.items) {
        const path = `/${main.unique}/${sub.unique}/${demo.unique}`
        demoTitleMap[path] = demo.name
        router.addRoute({ path, component: demo.component })
      }
    }
  }
}

export default router
