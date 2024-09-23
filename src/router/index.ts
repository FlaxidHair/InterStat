import { createRouter, createWebHashHistory } from 'vue-router'
import Auth from '../views/App-Auth.vue'
import AddItem from '../views/App-AddItem.vue'
import ListItem from '../views/App-ListItem.vue'
import Stat from '../views/App-Stat.vue'
import EditItem from '../views/App-EditItem.vue'
import type { RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const checkAuth = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  let isAuth = false

  onAuthStateChanged(getAuth(), (user) => {
    if (user && !isAuth) {
      isAuth = true
      next()
    } else if (!user && !isAuth) {
      isAuth = true
      next('/Auth')
    }
  })
}

const routes: RouteRecordRaw[] = [
  { path: '/Auth', name: 'auth', component: Auth },
  { path: '/',name: 'main', component: AddItem, beforeEnter: checkAuth },
  { path: '/ListItem', name: 'list', component: ListItem, beforeEnter: checkAuth },
  { path: '/Stat', name: 'statistics', component: Stat, beforeEnter: checkAuth },
  { path: '/EditItem/:id',name: 'edit', component: EditItem, beforeEnter: checkAuth }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
