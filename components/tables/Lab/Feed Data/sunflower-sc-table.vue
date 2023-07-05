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
        field="scDateOfSampleCollection"
        label="Date Of Sample Collection"
        searchable
        
      >
      <span class="tag tasks">  {{ props.row.scDateOfSampleCollected }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

     

      <b-table-column
        v-slot="props"
        field="scTimeOfReceipt"
        label="Time"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.scTimeOfReceipt }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="scSubmissionNumber"
        label="Submission"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.scSubmissionNumber }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>



     <b-table-column
        v-slot="props"
        field="scSupplierName"
        label="Supplier/Customer"
        searchable
      >

      <span class="tag is-info is-light">  {{ props.row.scSupplierName }} </span>
       
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="scNRC"
        label="NRC"
        searchable
      >

      <span class="tag is-info is-light">  {{ props.row.scNRC }} </span>
       
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="scVehicleRegNumber"
        label="Vehicle Reg No."
        searchable
      >

      <span class="tag is-info is-light">  {{ props.row.scVehicleRegNumber }} </span>
       
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="scTelNumber"
        label="Telephone No."
        searchable
      >

      <span class="tag is-info is-light">  {{ props.row.scTelNumber }} </span>
       
      </b-table-column>
      
      <b-table-column
        v-slot="props"
        field="scEmail"
        label="Email"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.scEmail }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="scSampleID"
        label="Sample ID"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.scSampleID }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="scTypeOfSample"
        label="Type Of Sample"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.scTypeOfSample }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>


      <b-table-column
        v-slot="props"
        field="scSiteLocation"
        label="Site/Location"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.scSiteLocation }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>


      <b-table-column
        v-slot="props"
        field="scNumberOfBagsPerTon"
        label="No. of Bags/Tonnage_Vehicle"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.scNumberOfBagsPerTon }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="scNumberOfBagsSampled"
        label="No. of Bags Sampled"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.scNumberOfBagsSampled }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>


      <b-table-column
        v-slot="props"
        field="scColor"
        label="Color"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.scColor }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>


      <b-table-column
        v-slot="props"
        field="scTexture"
        label="Texture"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.scTexture }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="scSmell"
        label="Smell"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.scSmell }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="scForeignBodies"
        label="Foreign Bodies"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.scForeignBodies }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="scWeevilsInsects"
        label="Weevils/Insects"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.scWeevilsInsects }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>


      <b-table-column
        v-slot="props"
        field="scBranContent"
        label="Bran Content"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.scBranContent }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="scGritContent"
        label="Grit Content"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.scGritContent }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="scPowderContent"
        label="Powder Content"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.scPowderContent }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>


      <b-table-column
        v-slot="props"
        field="scOther"
        label="Other"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.scOther }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="scMoisture"
        label="Moisture"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.scMoisture }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="scTechnician"
        label="Technician"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.scTechnician }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>


      <b-table-column
          v-slot="props"
          field="scQualitativeScore"
          label="Overall Qualitative Score"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.scQualitativeScore }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>



      <b-table-column
        v-slot="props"
        field="scFinalVerdict"
        label="Final Verdict"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.scFinalVerdict }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>


      
      <b-table-column
        v-slot="props"
        field="scReasonForVerdict"
        label="Reason For Verdict"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.scReasonForVerdict }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="scReasonIsOther"
        label="Other Reason"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.scReasonIsOther }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="scNumberOfBagsOrTonnageSelected"
        label="No. Of Bags/Tonnage Selected"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.scNumberOfBagsOrTonnageSelected }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>


      <b-table-column
        v-slot="props"
        field="scNumberOfBagsOrTonnageRejected"
        label="No. Of Bags/Tonnage Rejected"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.scNumberOfBagsOrTonnageRejected }} </span>
       
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


        
      


<!--       
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

import SCModal from '@/components/modals/Lab Modal/Feed Data/sunflower-sc-modal.vue'
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
        SC: 'allSCRecords',
      }),

      ...mapGetters('users', {
          loading: 'loading',
          users: 'allUsers',
          user:'loggedInUser',

          
        }),
    
     isEmpty() {
    return this.SC.length === 0
     },

    

    isNames() {
      return this.names
    },
    
    tableData() {
     return this.isEmpty ? [] : this.SC
    },
  },

  async created() {
  // await this.load()
  // this.selectAgroRecord(this.agros[0])
  },

  

  methods: {
   

     ...mapActions('labData', ['addNewSCRecord','getAllSCRecords', 'load']),

     async refresh(){

      // alert(
      //   "Refreshed!"
      // )
    //  this.isLoading = true
     await this.getAllSCRecords();
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
          component: SCModal,
          hasModalCard: true,
          trapFocus: true,
          canCancel: ['x'],
          destroyOnHide: true,
          customClass: '',
          onCancel: () => {
            this.$buefy.toast.open({
              message: `Soya (sc) Snapshot closed!`,
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
