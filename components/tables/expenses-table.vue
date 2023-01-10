<template>
  <div>
    <div class="card p-5 mr-5">
        <div class="card-body">
            <b-field grouped group-multiline>
      <b-select v-model="perPage">
        <option
          v-for="(option, index) in pageOptions"
          :key="index"
          :value="option"
        >
          {{ option }} entries
        </option>
      </b-select>

     <div class="buttons">
        <b-tooltip label="Add details of new sales here" type="is-dark">
        <b-button class="mx-2" icon-left="plus" type="is-success" @click="addNewExpensesRecord">Add New Expenses Data</b-button>
        </b-tooltip> 

         <b-tooltip label="Refresh" type="is-dark">
         <b-button class="mx-2" icon-left="refresh" type="is-info" @click="refresh">Refresh</b-button>
         </b-tooltip>


      </div>

      
    </b-field>
    <b-table
      :data="tableData"
      :loading="loading"
      :paginated="isPaginated"
      :per-page="perPage"
      :current-page.sync="currentPage"
      :pagination-position="paginationPosition"
      :default-sort-direction="defaultSortDirection"
      mobile-cards
      default-sort="selectPriority"
      aria-next-label="Next Page"
      aria-previous-label="Previous Page"
      aria-page-label="Page"
      aria-current-label="Current Page"
    >
      

       <b-table-column
        v-slot="props"
        field="earTagID"
        label="Item"
        searchable
        
      >
      <span class="tag is-primary is-light">{{ props.row.expensesItem}}</span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>


       <b-table-column
        v-slot="props"
        field="earTagID"
        label="Cost"
        sortable
        
      >
      <span class="tag is-primary is-light">ZMW {{ props.row.expensesCost}} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>


 

      <b-table-column v-slot="props" field="date" label="Date" searchable>

          <span class="tag is-info is-light">{{ props.row.expensesDate}}</span>

      </b-table-column> 

      


      
     <b-table-column v-slot="props" label="Options">
        <span class="buttons">
          <!-- <b-button type="is-secondary-outline" icon-left="eye">View</b-button> -->
          <b-button
            type="is-secondary-outline"
            icon-left="eye-check"
            @click="captureReceipt(props.row)"
            class="preview"
            >Preview</b-button
          >
        </span>
      </b-table-column>

      
                

      


      <template #empty>

        <b-tooltip  label="Once freshed, your details will appear here" type="is-dark">
        <h4 class="is-size-4 text-center has-text-centered">No Expenses Data yet. &#x1F4DA;.Click the <span class="tag is-info"> refresh button</span> right above</h4>
        </b-tooltip>

      </template>
    </b-table>
        </div>
    </div>
  </div>

  
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
import ExpensesModal from '~/components/modals/Expenses Modal/expenses-modal.vue'
import ExpensesSnapshotModal from '~/components/modals/Expenses Modal/expenses-snapshot-modal.vue'
export default {
  name: 'UnreceiptedDebitsTable',

  data() {  
  
    
    return {

      isPaginated: true,
      currentPage: 1,
      perPage: 10,
      pageOptions: [5, 10, 25, 50, 100],
      paginationPosition: 'bottom',
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
    }
  },


  computed: {
    
    ...mapGetters('expensesData', {
        loading: 'loading',
        expenses: 'allExpenses',
      }),
    
     isEmpty() {
   //  return this.expenses.length === 0
     },

    

    isNames() {
      return this.names
    },
    
    tableData() {
      return this.isEmpty ? [] : this.expenses
    },
  },

  async created() {
  // await this.load()

//              function showNotifications(){
//    const notification = new Notification("New message from Litmas!", {
//        body: "You might want to check your milking data.",
//        icon: '@/assets/pug3.jpg'
//    }); 
// }

// if (Notification.permission === "granted") {
//     showNotifications();
// } else if(Notification.permission !== "denied") {
//     Notification.requestPermission().then(permission =>{
//         if (permission === "granted") {
//             showNotifications();
//         }
      
//     })
// }
 //  this.selectExpense(this.Expenses[0])
  },

  

  methods: {
   

     ...mapActions('expensesData', [' addNewExpense','getAllExpenses', 'load', 'selectExpense']),

     async refresh(){

          function showNotifications(){
   const notification = new Notification("New message from Litmas!", {
       body: "You might want to check your milking data.",
     //  icon: '@/assets/pug3.jpg'
   }); 
}

      this.isLoading = true
      await this.getAllExpenses();

   //   await this.getTotalMikingRecords();

      showNotifications();
      this.isLoading = false

    },


    captureReceipt(expense) {
      this.selectExpense(expense)

      
      setTimeout(() => {
        this.$buefy.modal.open({
          parent: this,
          component: ExpensesSnapshotModal,
          hasModalCard: true,
          trapFocus: true,
          canCancel: ['x'],
          destroyOnHide: true,
          customClass: '',
          onCancel: () => {
            this.$buefy.toast.open({
              message: `Snapshot closed`,
              duration: 5000,
              position: 'is-top',
              type: 'is-info',
            })
          },
        })
      }, 300)

   
    },

     addNewExpensesRecord() {
      
      setTimeout(() => {
        this.$buefy.modal.open({
          parent: this,
          component: ExpensesModal,
          hasModalCard: true,
          trapFocus: true,
          canCancel: ['x'],
          destroyOnHide: true,
          customClass: '',
          onCancel: () => {
            this.$buefy.toast.open({
              message: `Expenses Snapshot closed!`,
              duration: 5000,
              position: 'is-top',
              type: 'is-info',
            })
          },
        })
      }, 300)
    },
  },

  
}
  
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}

.is-proc{
 background-color: rgb(78, 159, 252);
 color: aliceblue;
}

.preview{
  background-color: rgb(177, 219, 243);
}

.content-area {
  grid-column: 2/3;
}

.text-center{
  margin-left: 100px;
}
</style>
