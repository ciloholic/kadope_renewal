import Vue from 'vue'
import Kdp from '@/Kdp'
import router from '@/router'
import store from '@/store/index'

// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas, far, fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// moment
import moment from 'moment-timezone'
moment.tz.setDefault('Asia/Tokyo')
moment.locale('ja')
Vue.prototype.moment = moment

// lodash
import _ from 'lodash'
Vue.prototype._ = _

// vue-color
import { Chrome } from 'vue-color'
Vue.component('chrome-picker', Chrome)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Kdp)
}).$mount('#app')
