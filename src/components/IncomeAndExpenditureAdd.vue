<template>
  <div>
      <div class="Add">
          Add Income and Expenditure
      </div>
      <div>
          <div>
              <label for="date">Date:</label>
              <input type="date" v-model="form.date">
          </div>

          <div>
              <label for="detail">Detail:</label>
              <input type="text" v-model="form.detail">
          </div>

          <div>
              <label for="income">Income:</label>
              <input type="text" v-model="form.income">
          </div>

          <div>
              <label for="expenditure">Expenditure:</label>
              <input type="text" v-model="form.expenditure">
          </div>

          <div>
              <button @click="addIncomeAndExpenditure">Add</button>
          </div>

      </div>
  </div>
</template>

<script>
import IncomeAndExpenditureStore from '@/store/IncomeAndExpenditure'

export default {
    data(){
        return{
            form:{
                date: '',
                detail: '',
                income: '',
                expenditure: '',
            }
        }
    },
    methods:{
        clearForm(){
            this.form = {
                date: '',
                detail: '',
                income: '',
                expenditure: '',
            }
        },

        changeTypeInput(){
            if(this.form.income !== ''){
                this.form.income = parseInt(this.form.income)
            }
            if(this.form.expenditure !== ''){
                this.form.expenditure = parseInt(this.form.expenditure)
            }
        },

        checkForm(){
            if(this.form.income === ''){
                this.form.income = 0
            }
            if(this.form.expenditure === ''){
                this.form.expenditure = 0
            }
        },

        addIncomeAndExpenditure(){
            this.changeTypeInput()
            this.checkForm()
            let payload = {
                date: this.form.date,
                detail: this.form.detail,
                income: this.form.income,
                expenditure: this.form.expenditure

            }
            IncomeAndExpenditureStore.dispatch('addIncomeAndExpenditure', payload)
            console.log(payload)
            this.clearForm()
        }
    }

}
</script>

<style>

label{
    padding: 5px;
}

div{
    padding: 10px;
}
.Add{
    font-size: 20px;
}

</style>