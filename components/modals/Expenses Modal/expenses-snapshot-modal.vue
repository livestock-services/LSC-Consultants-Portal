<template>
  <div class="modal-card ">
    <header class="modal-card-head">
      <h3 class="modal-card-title">Expenses Snapshot</h3>
     
      <button type="button" class="delete" @click="close"></button>
    </header>
    <section class="modal-card-body has-background-white">
      <!-- Modal Content -->
      <div>
       <b-form class="form">
         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Item</span></h4>
            <p >
             <span class="tag is-primary is-light">{{ expense.expensesItem }} </span>
              
            </p>
           </div>
         </div>

         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Cost</span></h4>
            <p >
             <span class="tag is-primary is-light">ZMW {{ expense.expensesCost}}</span>
              
            </p>
           </div>
         </div>

        
        
       

           
         <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue">Date</span></h4>
            <p  placeholder="Date">
               <span class="tag is-info is-light">{{ expense.expensesDate}}</span>
            </p>
           </div>
         </div>

       

       </b-form>

      </div>
    </section>
    <footer class="modal-card-foot">
      <b-button label="Close" @click="close" />
      <!-- <b-button
        label="Submit"
        type="is-primary"
        icon-left="account"
        @click="onSubmit"
      /> -->
    </footer>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ExpensesSnapshotModal',

   data() {
    return {
      isFullPage: true,
      expensesForm: {
      
              expensesItem:null,
              expensesCost:null,
              expensesDate:null
                    
        
      },
     
    }
  },

  computed: {
     ...mapGetters('expensesData', {
      expense: 'selectedExpense',
      expensesLoading: 'loading',
    }),

    loading() {
      return this.expenseLoading 
    },

  },

  mounted() {},

  

  methods: {
    ...mapActions('expensesData', ['load', 'selectExpense']),

    async onSubmit() {
      const msg = await Promise.resolve('Operation successful')
      this.$buefy.toast.open({
        message: msg, // 'Operation successful',
        duration: 5000,
        position: 'is-top',
        type: 'is-info',
      })
      this.$parent.close()
    },

    close() {
      this.$buefy.toast.open({
        message: 'Expenses Snapshot closed.',
        duration: 2000,
        position: 'is-top',
        type: 'is-warning ',
      })
      this.$parent.close()
    },
  },
}
</script>

<style scoped>
.modal-width-auto {
  width: auto;
}


.is-blue{
  color: rgb(0, 118, 228);
font-family:'Times New Roman', Times, serif;
  font-size: 1.2rem;
  
}

p{
  font-size: 1.5rem;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
