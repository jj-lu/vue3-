import router from './router'
import store from './store'

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  // console.log(store.getters.token)
  if (store.getters.token) {
    if (to.path === '/login') next('/')
    else {
      if (!store.getters.hasUserInfo) {
        await store.dispatch('user/getUserInfo')
      }
      next()
    }
  } else {
    if (whiteList.includes(to.path)) next()
    else next('/login')
  }
})
