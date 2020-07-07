import Vue from 'vue'
import App from './App'
import user from './common.js'

Vue.config.productionTip = false
Vue.prototype.$user = user;

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
