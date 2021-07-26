import Vue from 'vue'
import VueRouter from 'vue-router'
import IncomeAndExpenditureList from '@/views/IncomeAndExpenditureList'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'IncomeAndExpenditureList',
    component: IncomeAndExpenditureList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
