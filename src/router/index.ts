import { createRouter, createWebHashHistory } from 'vue-router'
import Auth from '../views/App-Auth.vue'
import AddItem from '../views/App-AddItem.vue'
import ListItem from '../views/App-ListItem.vue'
import Stat from '../views/App-Stat.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Auth },
    { path: '/AddItem', component: AddItem },
    { path: '/ListItem', component: ListItem },
    { path: '/Stat', component: Stat }
  ]
})

export default router
