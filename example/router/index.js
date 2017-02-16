import Vue from 'vue'
import Router from 'vue-router'
import About from '../views/About.vue'
import iAudio from '../views/iAudio.vue'
import changeLog from '../views/changeLog.vue'
Vue.use(Router)

const router = new Router({
  routes:[
    { name: 'home', path: '/', component: About},
    { name: 'about', path: '/about', component: About},
    { name: 'changeLog', path: '/changeLog', component: changeLog},
    { name: 'iAudio', path: '/iAudio', component: iAudio}

  ]
})

router.beforeEach((to, from, next) => {
  let top = document.body.scrollTop
  if(top > 0){
    const timer = setInterval(()=>{
      scrollTo(0, top)
      top -= 100
      if(top <= 0){
        scrollTo(0, 0)
        clearInterval(timer)
      }
    }, 20)
  }
  next()
})

export default router
