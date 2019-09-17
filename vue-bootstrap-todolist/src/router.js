import Vue from 'vue'
import Router from 'vue-router'
import TodoList from './views/TodoList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: TodoList
    },
    {
      path: '/task/:id',
      name: 'task',
      component: () => import(
        /* webpackChunkName: listitem */
        './views/ListItem.vue'
      )
    }
  ]
})
