<template>
  <div>
        <table>
          <thead>
              <tr>
                  <th>Date</th>
                  <th>Detail</th>
                  <th>Income</th>
                  <th>Expenditure</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(IAE, index) in IncomeAndExpenditures" :key="index">
                  <td v-if="index !== editIndex">{{IAE.date}}</td>
                  <td v-if="index === editIndex">
                      <input type="date" v-model="form.date">
                  </td>

                  <td v-if="index !== editIndex">{{IAE.detail}}</td>
                  <td v-if="index === editIndex">
                      <input type="text" v-model="form.detail">
                  </td>

                  <td v-if="index !== editIndex">{{IAE.income}}</td>
                  <td v-if="index === editIndex">
                      <input type="text" v-model="form.income">
                  </td>

                  <td v-if="index !== editIndex">{{IAE.expenditure}}</td>
                  <td v-if="index === editIndex">
                      <input type="text" v-model="form.expenditure">
                  </td>

                  <td v-if="index !== editIndex"><button @click="openForm(index, IAE)">Edit</button></td>
                  <td v-if="index === editIndex">
                      <button @click="editIncomeAndExpenditure">Update</button>
                      <button @click="closeForm">Cancle</button>
                  </td>

                  <td><button @click="deleteForm(index)">Delete</button></td>
              </tr>
          </tbody>
      </table>
      <div class="total">
          Total:
          {{sumField('income') - sumField('expenditure')}}
      </div>
  </div>
</template>

<script>
import IncomeAndExpenditureStore from '@/store/IncomeAndExpenditure'
export default {
    data(){
        return{
            IncomeAndExpenditures: [],

            editIndex: -1,

            form:{
                date: '',
                detail: '',
                income: '',
                expenditure: '',
            },
            
        }
    },
    created(){
        this.fetchIncomeAndExpenditure()

    },

    methods:{
        fetchIncomeAndExpenditure(){
            IncomeAndExpenditureStore.dispatch('fetchIncomeAndExpenditure')
            this.IncomeAndExpenditures = IncomeAndExpenditureStore.getters.IncomeAndExpenditures
        },

        openForm(index, IAE){
            this.editIndex = index
            this.form.date = IAE.date
            this.form.detail = IAE.detail
            this.form.income = IAE.income
            this.form.expenditure = IAE.expenditure
        },

        closeForm(){
            this.editIndex = -1
            this.form = {
                date: '',
                detail: '',
                income: '',
                expenditure: '',
            }
        },
        deleteForm(index){
            this.editIndex--
            this.IncomeAndExpenditures.splice(index,1)
        },

        editIncomeAndExpenditure(){
            this.form.income = parseInt(this.form.income)
            this.form.expenditure = parseInt(this.form.expenditure)
            let payload = {
                index: this.editIndex,
                date: this.form.date,
                detail: this.form.detail,
                income: this.form.income,
                expenditure: this.form.expenditure

            }
            IncomeAndExpenditureStore.dispatch('editIncomeAndExpenditure', payload)
            this.closeForm()
        },

        sumField(key) {
        return this.IncomeAndExpenditures.reduce((a, b) => a + (b[key || 0]), 0)
        },

    }
}
</script>

<style>
th{
    padding: 40px;
}
td{
    padding: 10px;
}

table, td, th {
  border: 2px solid black;
}

table {
  width: 100%;
  border-collapse: collapse;
}
.total{
    text-align: left;
    font-size: 30px;
}

</style>