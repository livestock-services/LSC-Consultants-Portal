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
          field="ffDateReceived"
          label="Date Received"
          searchable
          
        >
        <span class="tag tasks">  {{ props.row.ffDateReceived }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>
  
        <b-table-column
          v-slot="props"
          field="ffReceivedBy"
          label="Received By"
          
          
        >
        <span class="tag numbers">  {{ props.row.ffReceivedBy }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>
  
        <b-table-column
          v-slot="props"
          field="ffTimeOfReceipt"
          label="Time"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.ffTimeOfReceipt }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>
  
        <b-table-column
          v-slot="props"
          field="ffSubmissionNumber"
          label="Submission"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.ffSubmissionNumber }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>
  
  
  
       <b-table-column
          v-slot="props"
          field="ffSupplierName"
          label="Supplier/Customer"
          searchable
        >
  
        <span class="tag is-info is-light">  {{ props.row.ffSupplierName }} </span>
         
        </b-table-column>
  
        <b-table-column
          v-slot="props"
          field="ffNRC"
          label="NRC"
          searchable
        >
  
        <span class="tag is-info is-light">  {{ props.row.ffNRC }} </span>
         
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="ffTelNumber"
          label="Telephone No."
          searchable
        >
  
        <span class="tag is-info is-light">  {{ props.row.ffTelNumber }} </span>
         
        </b-table-column>
        
        <b-table-column
          v-slot="props"
          field="ffDescription"
          label="Description"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.ffDescription }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="ffSampleID"
          label="Sample ID"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.ffSampleID }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="ffSiteLocation"
          label="Site/Location"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.ffSiteLocation }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>


        <b-table-column
          v-slot="props"
          field="ffSamplePackaging"
          label="Sample Packaging"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.ffSamplePackaging }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="ffSampleLabelling"
          label="Sample Labelling"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.ffSampleLabelling }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="ffSampleCondition"
          label="Sample Condition"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.ffSampleCondition }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>


        <b-table-column
          v-slot="props"
          field="ffColor"
          label="ffColor"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.ffColor }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>


        <b-table-column
          v-slot="props"
          field="ffTexture"
          label="Texture"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.ffTexture }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="ffSmell"
          label="Smell"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.ffSmell }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="ffForeignBodies"
          label="Foreign Bodies"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.ffForeignBodies }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="ffOther"
          label="Other"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.ffOther }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>


        <b-table-column
          v-slot="props"
          field="ffQualitativeScore"
          label="Overall Qualitative Score"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.ffQualitativeScore }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="ffAntiTrypsinTest"
          label="AntiTrypsin Test"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.ffAntiTrypsinTest }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="ffMoisture"
          label="Moisture"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.ffMoisture }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="ffProtein"
          label="Protein As is"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.ffProtein }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="ffFat"
          label="Fat As is"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.ffFat }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="ffFibre"
          label="Fibre As is"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.ffFibre }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>


        <b-table-column
          v-slot="props"
          field="ffAsh"
          label="Ash As is"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.ffAsh }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>


        <b-table-column
          v-slot="props"
          field="ffNutritionistComment"
          label="Nutritionist Comment"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.ffNutritionistComment }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>


        <b-table-column
          v-slot="props"
          field="ffSecondComment"
          label="Second Comment"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.ffSecondComment }} </span>
         
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
  
  import FFModal from '@/components/modals/Lab Modal/Feed Data/soya-ff-modal.vue'
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
          FF: 'allFFRecords',
        }),

        ...mapGetters('users', {
          loading: 'loading',
          users: 'allUsers',
          user:'loggedInUser',

          
        }),
      
       isEmpty() {
      return this.FF.length === 0
       },
  
      
  
      isNames() {
        return this.names
      },
      
      tableData() {
       return this.isEmpty ? [] : this.FF
      },
    },
  
    async created() {
    // await this.load()
    // this.selectAgroRecord(this.agros[0])
    },
  
    
  
    methods: {
     
  
       ...mapActions('labData', ['addNewFFRecord','getAllFFRecords', 'load']),
  
       async refresh(){
  
        // alert(
        //   "Refreshed!"
        // )
      //  this.isLoading = true
       await this.getAllFFRecords();
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
            component: FFModal,
            hasModalCard: true,
            trapFocus: true,
            canCancel: ['x'],
            destroyOnHide: true,
            customClass: '',
            onCancel: () => {
              this.$buefy.toast.open({
                message: `Soya (FF) Snapshot closed!`,
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
  