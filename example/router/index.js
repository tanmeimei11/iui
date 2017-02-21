import Vue from 'vue'
import Router from 'vue-router'
import { routes } from '../config'
Vue.use(Router)
const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  let top = document.body.scrollTop
  if (top > 0) {
    const timer = setInterval(() => {
      scrollTo(0, top)
      top -= 100
      if (top <= 0) {
        scrollTo(0, 0)
        clearInterval(timer)
      }
    }, 20)
  }
  next()
})

export default router
