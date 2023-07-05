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
        field="seDateReceived"
        label="Date Received"
        searchable
        
      >
      <span class="tag tasks">  {{ props.row.seDateReceived }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="seReceivedBy"
        label="Received By"
        
        
      >
      <span class="tag numbers">  {{ props.row.seReceivedBy }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="seTimeOfReceipt"
        label="Time"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.seTimeOfReceipt }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="seSubmissionNumber"
        label="Submission"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.seSubmissionNumber }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>



     <b-table-column
        v-slot="props"
        field="seSupplierName"
        label="Supplier/Customer"
        searchable
      >

      <span class="tag is-info is-light">  {{ props.row.seSupplierName }} </span>
       
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="seNRC"
        label="NRC"
        searchable
      >

      <span class="tag is-info is-light">  {{ props.row.seNRC }} </span>
       
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="seTelNumber"
        label="Telephone No."
        searchable
      >

      <span class="tag is-info is-light">  {{ props.row.seTelNumber }} </span>
       
      </b-table-column>
      
      <b-table-column
        v-slot="props"
        field="seDescription"
        label="Description"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.seDescription }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="seSampleID"
        label="Sample ID"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.seSampleID }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="seSiteLocation"
        label="Site/Location"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.seSiteLocation }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>


      <b-table-column
        v-slot="props"
        field="seSamplePackaging"
        label="Sample Packaging"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.seSamplePackaging }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="seSampleLabelling"
        label="Sample Labelling"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.seSampleLabelling }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="seSampleCondition"
        label="Sample Condition"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.seSampleCondition }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>


      <b-table-column
        v-slot="props"
        field="seColor"
        label="seColor"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.seColor }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>


      <b-table-column
        v-slot="props"
        field="seTexture"
        label="Texture"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.seTexture }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="seSmell"
        label="Smell"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.seSmell }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="seForeignBodies"
        label="Foreign Bodies"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.seForeignBodies }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="seOther"
        label="Other"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.seOther }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>


      <b-table-column
        v-slot="props"
        field="seQualitativeScore"
        label="Overall Qualitative Score"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.seQualitativeScore }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="seAntiTrypsinTest"
        label="AntiTrypsin Test"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.seAntiTrypsinTest }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="seMoisture"
        label="Moisture"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.seMoisture }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="seProtein"
        label="Protein As is"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.seProtein }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="seFat"
        label="Fat As is"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.seFat }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="seFibre"
        label="Fibre As is"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.seFibre }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>


      <b-table-column
        v-slot="props"
        field="seAsh"
        label="Ash As is"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.seAsh }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>


      <b-table-column
        v-slot="props"
        field="seNutritionistComment"
        label="Nutritionist Comment"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.seNutritionistComment }} </span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>


      <b-table-column
        v-slot="props"
        field="seSecondComment"
        label="Second Comment"
        searchable
        
      >
      <span class="tag is-primary is-light">  {{ props.row.seSecondComment }} </span>
       
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

import SEModal from '@/components/modals/Lab Modal/Feed Data/soya-se-modal.vue'
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
        SE: 'allSERecords',
      }),

      ...mapGetters('users', {
          loading: 'loading',
          users: 'allUsers',
          user:'loggedInUser',

          
        }),
    
     isEmpty() {
  //  return this.SE.length === 0
     },

    

    isNames() {
      return this.names
    },
    
    tableData() {
     return this.isEmpty ? [] : this.SE
    },
  },

  async created() {
  // await this.load()
  // this.selectAgroRecord(this.agros[0])
  },

  

  methods: {
   

     ...mapActions('labData', ['addNewSERecord','getAllSERecords', 'load']),

     async refresh(){

      // alert(
      //   "Refreshed!"
      // )
    //  this.isLoading = true
     await this.getAllSERecords();
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
          component: SEModal,
          hasModalCard: true,
          trapFocus: true,
          canCancel: ['x'],
          destroyOnHide: true,
          customClass: '',
          onCancel: () => {
            this.$buefy.toast.open({
              message: `Soya (SE) Snapshot closed!`,
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
