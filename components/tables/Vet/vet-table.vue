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
        <b-tooltip v-if="SignedInUser.role !== 'Manager'" label="Add details of new records here" type="is-dark">
        <b-button class="mx-2" icon-left="plus" type="is-success" @click="addNewTask">Add New Record</b-button>
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
      debounce-search="1200"
      default-sort="selectPriority"
      aria-next-label="Next Page"
      aria-previous-label="Previous Page"
      aria-page-label="Page"
      aria-current-label="Current Page"
    >

  

       <b-table-column
        v-slot="props"
        field="vetClientName"
        label="Client Name"
        searchable
        
      >
      <span class="tag tasks">  {{ props.row.vetClientName }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="taskDescription"
        label="Client Phone No."
        
        
      >
      <span class="tag numbers">  {{ props.row.vetClientPhoneNumber }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="vetClientLocation"
        label="Location"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.vetClientLocation }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
          v-slot="props"
          field="vetClientTown"
          label="Town"
         searchable 
          
        >
        <span class="tag is-primary is-light">  {{ props.row.vetClientTown }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        



     <!-- <b-table-column
        v-slot="props"
        field="vetCategory"
        label="Category"
        searchable
      >

      <span class="tag is-info is-light">  {{ props.row.vetCategory }} </span>
       
      </b-table-column>


      <b-table-column
        v-slot="props"
        field="vetOther"
        label="Other Category"
        searchable
      >

      <span class="tag is-info is-light">  {{ props.row.vetOther }} </span>
       
      </b-table-column>

      
     -->

      <b-table-column
        v-slot="props"
        field="date"
        label="Date"
        searchable
      >

      <span class="tag is-info is-light">  {{ props.row.date }} </span>
       
      </b-table-column> 

      <!-- <b-table-column
        v-slot="props"
        field="selectPriority"
        label="Comments/Remarks"
        
      >

      <span class=" is-info is-light">  {{ props.row.vetComments }} </span>
       
      </b-table-column> -->

      <b-table-column
      v-if="SignedInUser.role === 'Admin' || SignedInUser.role === 'Manager'"
        v-slot="props"
        field="selectPriority"
        label="Created By"
        searchable
      >

      <span class="tag is-success is-light">  {{ props.row.createdBy }} </span>
       
      </b-table-column>
      
      
       


        
      


      
     <b-table-column v-slot="props" label="Options">
        <span class="buttons">
          <b-tooltip label="View more details about this consult" type="is-dark" position="is-left">
          <b-button
            type="is-secondary-outline"
            icon-left="eye-check"
            @click="captureReceipt(props.row)"
            class="preview"
            ></b-button>

          </b-tooltip>
        </span>
      </b-table-column>

      
                 

      


      <template #empty>

        <b-tooltip  label="Once freshed, your details will appear here" type="is-dark">
        <h4 class="is-size-4 text-center has-text-centered">No Vet Data yet. &#x1F4DA;. Click the <span class="tag is-info"> refresh button</span> right above</h4>
        </b-tooltip>

      </template>
    </b-table>
        </div>
    </div>
  </div>

  
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
import { computed } from 'vue';
import VetModal from '@/components/modals/Vet Modal/vet-modal.vue'

import VetSnapshotModal from '@/components/modals/Vet Modal/vet-snapshot-modal'
export default {
  name: 'VetTable',

  data() {  
  
    
    var SignedInUser = computed(()=>this.user)
      return {
        SignedInUser,
      isPaginated: true,
      currentPage: 1,
      perPage: 10,
      pageOptions: [5, 10, 25, 50, 100],
      paginationPosition: 'bottom',
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
      searchable:true
    }
  },


  computed: {
    
    ...mapGetters('vetData', {
        loading: 'loading',
        vets: 'allVetRecords',
      }),

      ...mapGetters('users', {
          loading: 'loading',
          users: 'allUsers',
          user:'loggedInUser',

          
        }),
    
     isEmpty() {
     return this.vets.length === 0
     },

    

    isNames() {
      return this.names
    },
    
    tableData() {
      return this.isEmpty ? [] : this.vets
    },
  },

  async created() {
  // await this.load()
  // this.selectvetRecord(this.vets[0])
  },

  

  methods: {
   

     ...mapActions('vetData', ['addNewVetRecord','getAllVetRecords','selectVetRecord', 'load']),

     async refresh(){

      // alert(
      //   "Refreshed!"
      // )
    //  this.isLoading = true
     await this.getAllVetRecords();
   //   this.isLoading = false
 
    },


 captureReceipt(vet) {
   this.selectVetRecord(vet)
   setTimeout(() => {
     this.$buefy.modal.open({
       parent: this,
       component: VetSnapshotModal,
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
          component: VetModal,
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
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}

.tasks{
  background-color: rgb(247, 204, 179);
}

.numbers{
  background-color: rgb(217, 249, 198);
}


.assignedTo{
  background-color: rgb(94, 241, 222);
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
