import { createStore } from 'vuex'
import dashboardStore from '@/modules/dashboard/store'
import layoutStore from '@/modules/layout/store'
import commonStore from '@/modules/common/store'

const store = createStore({
  modules: {
    dashboard: dashboardStore,
    layout: layoutStore,
    common: commonStore
  }
})

export default store
