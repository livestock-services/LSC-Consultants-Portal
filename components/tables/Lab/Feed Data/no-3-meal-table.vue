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
        <b-tooltip label="Add details of new records here" type="is-dark">
        <b-button class="mx-2" icon-left="plus" type="is-success" @click="addNewTask">Add New Record</b-button>
        </b-tooltip>

         <b-tooltip label="Refresh" type="is-dark">
         <b-button class="mx-2" icon-left="refresh" type="is-info" @click="refresh">Refresh</b-button>
         </b-tooltip>

       
            
      </div>

      
    </b-field>
    <b-table
      :sticky-header="stickyHeaders"
      :data="tableData"
      :loading="loading"
      :paginated="isPaginated"
      :per-page="perPage"
      :current-page.sync="currentPage"
      :pagination-position="paginationPosition"
      :default-sort-direction="defaultSortDirection"
      mobile-cards
      debounce-search="1200"
      default-sort="selectPriority"
      aria-next-label="Next Page"
      aria-previous-label="Previous Page"
      aria-page-label="Page"
      aria-current-label="Current Page"
    >

  

       <b-table-column
        v-slot="props"
        field="nmDateOfSampleCollection"
        label="Date Of Sample Collection"
        searchable
        
        
      >
      <span class="tag tasks">  {{ props.row.nmDateOfSampleCollected }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

     

      <b-table-column
        v-slot="props"
        field="nmTimeOfReceipt"
        label="Time"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.nmTimeOfReceipt }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="nmSubmissionNumber"
        label="Submission"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.nmSubmissionNumber }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>



     <b-table-column
        v-slot="props"
        field="nmSupplierName"
        label="Supplier/Customer"
        searchable
      >

      <span class="tag is-info is-light">  {{ props.row.nmSupplierName }} </span>
       
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="nmNRC"
        label="NRC"
        searchable
      >

      <span class="tag is-info is-light">  {{ props.row.nmNRC }} </span>
       
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="nmVehicleRegNumber"
        label="Vehicle Reg No."
        searchable
      >

      <span class="tag is-info is-light">  {{ props.row.nmVehicleRegNumber }} </span>
       
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="nmTelNumber"
        label="Telephone No."
        searchable
      >

      <span class="tag is-info is-light">  {{ props.row.nmTelNumber }} </span>
       
      </b-table-column>
      
      <b-table-column
        v-slot="props"
        field="nmEmail"
        label="Email"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.nmEmail }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="nmSampleID"
        label="Sample ID"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.nmSampleID }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="nmTypeOfSample"
        label="Type Of Sample"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.nmTypeOfSample }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>


      <b-table-column
        v-slot="props"
        field="nmSiteLocation"
        label="Site/Location"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.nmSiteLocation }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>


      <b-table-column
        v-slot="props"
        field="nmNumberOfBagsPerTon"
        label="No. of Bags/Tonnage_Vehicle"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.nmNumberOfBagsPerTon }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="nmNumberOfBagsSampled"
        label="No. of Bags Sampled"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.nmNumberOfBagsSampled }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>


      <b-table-column
        v-slot="props"
        field="nmColor"
        label="Color"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.nmColor }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>


      <b-table-column
        v-slot="props"
        field="nmTexture"
        label="Texture"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.nmTexture }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="nmSmell"
        label="Smell"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.nmSmell }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="nmForeignBodies"
        label="Foreign Bodies"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.nmForeignBodies }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="nmWeevilsInsects"
        label="Weevils/Insects"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.nmWeevilsInsects }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>


      <b-table-column
        v-slot="props"
        field="nmBranContent"
        label="Bran Content"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.nmBranContent }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="nmGritContent"
        label="Grit Content"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.nmGritContent }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="nmPowderContent"
        label="Powder Content"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.nmPowderContent }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>


      <b-table-column
        v-slot="props"
        field="nmOther"
        label="Other"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.nmOther }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="nmMoisture"
        label="Moisture"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.nmMoisture }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="nmTechnician"
        label="Technician"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.nmTechnician }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>


      <b-table-column
          v-slot="props"
          field="nmQualitativeScore"
          label="Overall Qualitative Score"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.nmQualitativeScore }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>



      <b-table-column
        v-slot="props"
        field="nmFinalVerdict"
        label="Final Verdict"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.nmFinalVerdict }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>


      
      <b-table-column
        v-slot="props"
        field="nmReasonForVerdict"
        label="Reason For Verdict"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.nmReasonForVerdict }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="nmReasonIsOther"
        label="Other Reason"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.nmReasonIsOther }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="nmNumberOfBagsOrTonnageSelected"
        label="No. Of Bags/Tonnage Selected"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.nmNumberOfBagsOrTonnageSelected }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>


      <b-table-column
        v-slot="props"
        field="nmNumberOfBagsOrTonnageRejected"
        label="No. Of Bags/Tonnage Rejected"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.nmNumberOfBagsOrTonnageRejected }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>


     
      
       
             
      <b-table-column
      v-if="SignedInUser.role === 'Admin' || SignedInUser.role === 'Manager'"
          v-slot="props"
          field="createdBy"
          label="Created By"
          searchable
        >
  
        <span class="tag is-info is-light">  {{ props.row.createdBy }} </span>
         
        </b-table-column>


        
      


      
      <!-- <b-table-column v-slot="props" label="Options">
        <span class="buttons">
          <b-tooltip label="View more details about this task" type="is-dark" position="is-left">
          <b-button
            type="is-secondary-outline"
            icon-left="eye-check"
            @click="captureReceipt(props.row)"
            class="preview"
            ></b-button>

          </b-tooltip>
        </span>
      </b-table-column> -->

      
                 

      


      <template #empty>

        <b-tooltip  label="Once freshed, your details will appear here" type="is-dark">
        <h4 class="is-size-4 text-center has-text-centered">No Submission Information Data yet. &#x1F4DA;. Click the <span class="tag is-info"> refresh button</span> right above</h4>
        </b-tooltip>

      </template>
    </b-table>
        </div>
    </div>
  </div>

  
</template>


<script>
import { mapActions, mapGetters } from 'vuex'

import NMModal from '@/components/modals/Lab Modal/Feed Data/no-3-meal-modal.vue'
import { computed } from 'vue';
// import AgroSnapshotModal from '@/components/modals/Agro Modal/agro-snapshot-modal.vue'
export default {
  name: 'SampleInfoTable',

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
      stickyHeaders: true,
    }
  },


  computed: {
    
    ...mapGetters('labData', {
        loading: 'loading',
        NM: 'allNMRecords',
      }),

      ...mapGetters('users', {
          loading: 'loading',
          users: 'allUsers',
          user:'loggedInUser',

          
        }),
    
     isEmpty() {
    return this.NM.length === 0
     },

    

    isNames() {
      return this.names
    },
    
    tableData() {
     return this.isEmpty ? [] : this.NM
    },
  },

  async created() {
  // await this.load()
  // this.selectAgroRecord(this.agros[0])
  },

  

  methods: {
   

     ...mapActions('labData', ['addNewNMRecord','getAllNMRecords', 'load']),

     async refresh(){

      // alert(
      //   "Refreshed!"
      // )
    //  this.isLoading = true
     await this.getAllNMRecords();
   //   this.isLoading = false
 
    },


    // captureReceipt(agro) {
    //   this.selectAgroRecord(agro)
    //   setTimeout(() => {
    //     this.$buefy.modal.open({
    //       parent: this,
    //       component: AgroSnapshotModal,
    //       hasModalCard: true,
    //       trapFocus: true,
    //       canCancel: ['x'],
    //       destroyOnHide: true,
    //       customClass: '',
    //       onCancel: () => {
    //         this.$buefy.toast.open({
    //           message: `Snapshot closed`,
    //           duration: 5000,
    //           position: 'is-top',
    //           type: 'is-info',
    //         })
    //       },
    //     })
    //   }, 300)
    // },

     addNewTask() {
      
      setTimeout(() => {
        this.$buefy.modal.open({
          parent: this,
          component: NMModal,
          hasModalCard: true,
          trapFocus: true,
          canCancel: ['x'],
          destroyOnHide: true,
          customClass: '',
          onCancel: () => {
            this.$buefy.toast.open({
              message: `Soya (nm) Snapshot closed!`,
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
