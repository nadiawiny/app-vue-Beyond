import Vue from 'vue'
import VueRouter from 'vue-router'
import FeedView from '../views/FeedView.vue'
import PerfilUsers from '../views/PerfilUsers.vue'
import UserList from '../views/UserList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/feed/:userId',
    name: 'feed',
    component: FeedView
  },
  {
    path: '/perfil/:userId',
    name: 'perfil',
    component: PerfilUsers
  },
  {
    path: '/usuario',
    name: 'usisario',
    component: UserList
  },
  {
    path: '/',
    redirect: '/usuario',
  }
]

const router = new VueRouter({
  routes
})

export default router
