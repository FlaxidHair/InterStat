import { createRouter, createWebHashHistory } from 'vue-router'
import Auth from '../views/App-Auth.vue'
import AddItem from '../views/App-AddItem.vue'
import ListItem from '../views/App-ListItem.vue'
import Stat from '../views/App-Stat.vue'
// import Main from '../views/App-MainPage.vue'
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
  // { path: '/', component: Main, beforeEnter: checkAuth },
  { path: '/Auth', name: 'auth', component: Auth },
  { path: '/', component: AddItem, beforeEnter: checkAuth },
  { path: '/ListItem', component: ListItem, beforeEnter: checkAuth },
  { path: '/Stat', component: Stat, beforeEnter: checkAuth }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
