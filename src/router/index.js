import Vue from 'vue'
import Router from 'vue-router'
import Ask from '@/components/Ask'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Ask',
      component: Ask
    }
  ]
})
