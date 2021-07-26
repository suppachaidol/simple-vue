<template>
  <div>
      <income-and-expenditure-add></income-and-expenditure-add>
      <income-and-expenditure-table></income-and-expenditure-table>
      
  </div>
</template>

<script>
import IncomeAndExpenditureTable from '@/components/IncomeAndExpenditureTable.vue'
import IncomeAndExpenditureAdd from '@/components/IncomeAndExpenditureAdd.vue'

export default {
  components: { 

    IncomeAndExpenditureAdd,
    IncomeAndExpenditureTable,
    

    },

}
</script>

<style>


</style>