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
        <b-tooltip label="Add details of new treatments here" type="is-dark">
        <b-button class="mx-2" icon-left="plus" type="is-success" @click="addNewTreatment">Add New Treatment Record</b-button>
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
        label="Ear Tag ID"
        searchable
        
      >
       <span class="tag  is-light"> {{ props.row.earTagID }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

     <b-table-column
        v-slot="props"
        field="symptomsDisplayed"
        label="Symptoms Displayed"
        searchable
      >

      {{ props.row.symptomsDisplayed }} 
       
      </b-table-column>
      
       <b-table-column
        v-slot="props"
        field="diagnosis"
        label="Diagnosis"
        sortable
      >
       <span class="tag is-danger is-light">  {{ props.row.diagnosis }} </span>
      </b-table-column>

       <b-table-column
        v-slot="props"
        field="diagnosis"
        label="Drugs & Dosage Administered"
        sortable
      >
       {{ props.row.drugsAdministered }} 
      </b-table-column>

    <b-table-column v-slot="props" field="date" label="Withdrawal Period" sortable>

          <span class="tag is-info is-light">{{ props.row.withdrawalPeriod}}</span>

      </b-table-column> 


      <b-table-column v-slot="props" field="date" label="Date" sortable>

          <span class="tag is-info is-light">{{ props.row.date}}</span>

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
        <h4 class="is-size-4 text-center has-text-centered">No Treatment data yet. &#x1F4DA;. Click the <span class="tag is-info"> refresh button</span> right above</h4>
        </b-tooltip>

      </template>
    </b-table>
        </div>
    </div>
  </div>

  
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
import TreatmentModal from '~/components/modals/Treatment Modal/treatment-modal.vue'
import TreatmentSnapshotModal from '~/components/modals/Treatment Modal/treatment-snapshot-modal.vue'
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
    
    ...mapGetters('treatmentData', {
        loading: 'loading',
        treatments: 'allTreatments',
      }),
    
     isEmpty() {
    // return this.treatments.length === 0
     },

    

    isNames() {
      return this.names
    },
    
    tableData() {
      return this.isEmpty ? [] : this.treatments
    },
  },

  async created() {
  // await this.load()
  // this.selectTreatment(this.treatments[0])
  },

  

  methods: {
   

     ...mapActions('treatmentData', ['addNewTreatment','getAllTreatments', 'load', 'selectTreatment']),

     async refresh(){
    //  this.isLoading = true
      await this.getAllTreatments();
   //   this.isLoading = false
 
    },


    captureReceipt(treatment) {
      this.selectTreatment(treatment)
      setTimeout(() => {
        this.$buefy.modal.open({
          parent: this,
          component: TreatmentSnapshotModal,
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

     addNewTreatment() {
      
      setTimeout(() => {
        this.$buefy.modal.open({
          parent: this,
          component: TreatmentModal,
          hasModalCard: true,
          trapFocus: true,
          canCancel: ['x'],
          destroyOnHide: true,
          customClass: '',
          onCancel: () => {
            this.$buefy.toast.open({
              message: `Treatment Snapshot closed!`,
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
