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
        <b-tooltip label="Add details of new customers here" type="is-dark">
        <b-button class="mx-2" icon-left="plus" type="is-success" @click="addNewTask">Add New Customer</b-button>
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
        field="taskDescription"
        label="Name"
        searchable
        
      >
       {{ props.row.name }}
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="taskDescription"
        label="Email"
        sortable
        
      >
       {{ props.row.email }}
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>


     <b-table-column
        v-slot="props"
        field="selectPriority"
        label="Payment Status"
        sortable
      >

      <span
          :class="[
            'tag',
        
            {
              'is-warning  ' : props.row.paymentStatus ===  'Pending',
            },

            {
              'is-success ': props.row.paymentStatus === 'Paid',
            },
          ]"
          >  {{ props.row.paymentStatus }} </span
        >
       
      </b-table-column>


 <b-table-column
        v-slot="props"
        field="selectPriority"
        label="Billing Cycle"
        sortable
      >

      <span
          :class="[
            'tag',
            {
              'monthly': props.row.billingCycle ===  'Annual',
            },

           
          
          ]"
          >  {{ props.row.billingCycle }} </span
        >
       
      </b-table-column>



       <b-table-column v-slot="props" field="date" label="Start Date" sortable>

          <span class="tag is-success is-light">{{ props.row.startDate}}</span>

      </b-table-column>  

       <b-table-column v-slot="props" field="date" label="End Date" sortable>

          <span class="tag is-danger is-light">{{ props.row.endDate}}</span>

      </b-table-column>  

      
   

    

       <b-table-column v-slot="props" label="Options">
        <span class="buttons">
          <!-- <b-button type="is-secondary-outline" icon-left="eye">View</b-button> -->
          <b-tooltip label="Activate User" type="is-warning is-light">
          <b-button
            type=""
            icon-left="arrow-up "
             icon-right="star"
            @click="captureReceipt(props.row)"
            class="enterprise"
            ></b-button
          >
          </b-tooltip>
          
        </span>

        
      </b-table-column>

      
                

      


      <template #empty>

        <b-tooltip  label="Once freshed, your details will appear here" type="is-dark">
        <h4 class="is-size-4 text-center has-text-centered">No Customer Data yet. &#x1F4DA;.Click the <span class="tag is-info"> refresh button</span> right above</h4>
        </b-tooltip>


      </template>
    </b-table>
        </div>
    </div>
  </div>

  
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
import CustomerModal from'../modals/Customer Modal/customer-modal.vue'
import CustomerSnapshotModal from '../modals/Customer Modal/customer-snapshot-modal.vue'
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
    
    ...mapGetters('users', {
        loading: 'loading',
        users: 'allUsers',
      }),
    
     isEmpty() {
     return this.users.length === 0
     },

    

    isNames() {
      return this.names
    },
    
    tableData() {
      return this.isEmpty ? [] : this.users
    },
  },

  async created() {
  // await this.load()
   this.selectUser(this.users[0])
  },

  

  methods: {
   

     ...mapActions('users', ['getAllUsers', 'load', 'selectUser']),

     async refresh(){
    //  this.isLoading = true
      await this.getAllUsers();
   //   this.isLoading = false
 
    },


    captureReceipt(user) {
      this.selectUser(user)
      setTimeout(() => {
        this.$buefy.modal.open({
          parent: this,
          component: CustomerSnapshotModal,
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

     addNewTask() {
      
      setTimeout(() => {
        this.$buefy.modal.open({
          parent: this,
          component: CustomerModal,
          hasModalCard: true,
          trapFocus: true,
          canCancel: ['x'],
          destroyOnHide: true,
          customClass: '',
          onCancel: () => {
            this.$buefy.toast.open({
              message: `Task Snapshot closed!`,
              duration: 5000,
              position: 'is-top',
              type: 'is-info',
            })
          },
        })
      }, 300)
    },
  }

 

  
}

  
</script>

<style scoped>

.monthly{
  background-color: rgb(196, 250, 146);
}
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

.growth{
  background-color: rgb(100, 193, 247);
}

.enterprise{
  background-color: rgb(255, 192, 97);
}

.del{
  background-color: rgb(214, 145, 145);
}

.content-area {
  grid-column: 2/3;
}

.text-center{
  margin-left: 100px;
  font-size: 10px;
}
</style>
