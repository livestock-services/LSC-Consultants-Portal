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
        <b-tooltip label="Add details of new reproductive record here" type="is-dark">
        <b-button class="mx-2" icon-left="plus" type="is-success" @click="addNewReproductive">Add New Reproduction Record</b-button>
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
       <span class="tag is-primary is-light"> {{ props.row.earTagID }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

     
       <!-- <b-table-column
        v-slot="props"
        field="pfiNumber"
        label="Age at 1st Calving"
        sortable
      >
       <span class="tag is-primary is-light">  {{ props.row.ageAtFirstCalving }} </span>
      </b-table-column> -->

        <b-table-column
        v-slot="props"
        field="pfiNumber"
        label="Services Per Insemination"
        sortable
      >
       <span
          :class="[
            'tag',
            {
              'is-danger ': props.row.numberOfServicesPerInsemination > 5,
            },

            {
              'is-warning  ' : props.row.numberOfServicesPerInsemination > 3 && props.row.numberOfServicesPerInsemination < 5 ,
            },

            {
              'is-success  ' : props.row.numberOfServicesPerInsemination <  3 ,
            },

           
          ]"
          >   {{ props.row.numberOfServicesPerInsemination }} </span>
      </b-table-column>


        <b-table-column
        v-slot="props"
        field="pfiNumber"
        label="Calving Interval"
        sortable
      >
        <span
          :class="[
            'tag',
            {
              'is-danger ': props.row.calvingInterval > 340,
            },

            {
              'is-warning  ' : props.row.calvingInterval > 320 && props.row.calvingInterval < 340 ,
            },

            {
              'is-success  ' : props.row.calvingInterval <  320 ,
            },

           
          ]"
          >  {{ props.row.calvingInterval }} days</span> 
      </b-table-column>

        <b-table-column
        v-slot="props"
        field="pfiNumber"
        label="Calving Ease Index"
        sortable
      >
        <span
          :class="[
            'tag',
            {
              'is-danger ': props.row.calvingEaseIndex === 5,
            },

            {
              'is-warning  ' : props.row.calvingEaseIndex > 3 && props.row.calvingEaseIndex < 5 ,
            },

            {
              'is-success  ' : props.row.calvingEaseIndex <  3 ,
            },

           
          ]"
          > 
           {{ props.row.calvingEaseIndex }} </span>
      </b-table-column>

        <b-table-column
        v-slot="props"
        field="pfiNumber"
        label="Abortions Per Lifecycle"
        sortable
      >
       <span
          :class="[
            'tag',
            {
              'is-danger ': props.row.abortionsPerLifecycle > 6,
            },

            {
              'is-warning  ' : props.row.abortionsPerLifecycle > 3 && props.row.abortionsPerLifecycle < 6 ,
            },

            {
              'is-success  ' : props.row.abortionsPerLifecycle <  3 ,
            },

           
          ]"
          > 
          
           {{ props.row.abortionsPerLifecycle }} </span>
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
        <h4 class="is-size-4 text-center has-text-centered">No Reproduction Data yet. &#x1F4DA;. Click the <span class="tag is-info"> refresh button</span> right above</h4>
        </b-tooltip>

      </template>
    </b-table>
        </div>
    </div>
  </div>

  
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
import ReproductiveModal from '@/components/modals/Reproductive Modal/reproductive-modal.vue'
import ReproductiveSnapshotModal from '@/components/modals/Reproductive Modal/reproductive-snapshot-modal.vue'
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
    
    ...mapGetters('reproductiveData', {
        loading: 'loading',
        reproductives: 'allReproductives',
      }),
    
     isEmpty() {
     return this.reproductives.length === 0
     },

    

    isNames() {
      return this.names
    },
    
    tableData() {
      return this.isEmpty ? [] : this.reproductives
    },
  },

  async created() {
  // await this.load()
   this.selectReproductive(this.reproductives[0])
  },

  

  methods: {
   

     ...mapActions('reproductiveData', ['addNewReproductive','getAllReproductives', 'load', 'selectReproductive']),

     async refresh(){
    //  this.isLoading = true
      await this.getAllReproductives();
   //   this.isLoading = false
 
    },


    captureReceipt(reproductive) {
      this.selectReproductive(reproductive)
      setTimeout(() => {
        this.$buefy.modal.open({
          parent: this,
          component: ReproductiveSnapshotModal,
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

     addNewReproductive() {
      
      setTimeout(() => {
        this.$buefy.modal.open({
          parent: this,
          component: ReproductiveModal,
          hasModalCard: true,
          trapFocus: true,
          canCancel: ['x'],
          destroyOnHide: true,
          customClass: '',
          onCancel: () => {
            this.$buefy.toast.open({
              message: `Reproductive Snapshot closed!`,
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
