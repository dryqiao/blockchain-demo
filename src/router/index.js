import Vue from 'vue'
import Router from 'vue-router'
import block from '@/components/block'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'block',
      component: block
    }
  ]
})
