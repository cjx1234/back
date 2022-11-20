//引入
import Vue from "vue";
import Vuex from "vuex"
import tab from "./tab"
//使用
Vue.use(Vuex)
//创建Vuex实例
export default new Vuex.Store({
    modules:{
        tab
    }
})
