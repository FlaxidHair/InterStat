import { createRouter, createWebHashHistory } from 'vue-router'
import Auth from '../views/App-Auth.vue'
import AddItem from '../views/App-AddItem.vue'
import ListItem from '../views/App-ListItem.vue'
import Stat from '../views/App-Stat.vue'
import Main from '../views/App-MainPage.vue'
import type { RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import { useStore } from '@/stores/store'
const checkAuth = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const store = useStore()
  if (!store.userId) {
    next('/Auth')
  } else {
    next()
  }
}

const routes: RouteRecordRaw[] = [
  { path: '/', component: Main, beforeEnter: checkAuth },
  { path: '/Auth', component: Auth, beforeEnter: checkAuth },
  { path: '/AddItem/:id', component: AddItem, beforeEnter: checkAuth },
  { path: '/ListItem', component: ListItem, beforeEnter: checkAuth },
  { path: '/Stat', component: Stat, beforeEnter: checkAuth }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
