import Vue from 'vue'
import Vuex from 'vuex'

import json from '/data/incomeAndExpenditureData.json'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
      data:[],
  },

  getters:{
    IncomeAndExpenditures: (state) => state.data
  },

  mutations: {
      fetch(state, {res}){
          state.data = res.data
      },
      add(state, {payload}){
        state.data.push(payload)
      },
      edit(state,{payload}){
          state.data[payload.index].date = payload.date
          state.data[payload.index].detail = payload.detail
          state.data[payload.index].income = payload.income
          state.data[payload.index].expenditure = payload.expenditure
      },
  },

  actions: {
      editIncomeAndExpenditure({commit}, payload){
          commit("edit", {payload})
      },
      fetchIncomeAndExpenditure({commit}){
          let res ={
            data: json
          }
            
          commit("fetch",{res})
      },
      addIncomeAndExpenditure({commit}, payload){
          commit("add", {payload})
      },
  },

  modules: {
  }
})