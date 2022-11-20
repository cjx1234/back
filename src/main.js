
import ElementUI from 'element-ui'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  './api/mock'
import Cookie from 'js-cookie'

Vue.config.productionTip = false

Vue.use(ElementUI)


router.beforeEach((to, from, next) => {
  const token=Cookie.get('token')
  if(!token && to.name !== 'login'){
    next({name:'login'})
  }else if(token && to.name === 'login'){
    next({name:'home'})
  }else{
    next()
  }
})

new Vue({
  store,
  router,
  render: h => h(App),
  created(){
    store.commit('addMenu',router)
  }
}).$mount('#app')
