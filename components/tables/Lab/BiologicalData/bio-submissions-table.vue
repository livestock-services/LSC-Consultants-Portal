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
           

           <b-tooltip label="Export to Excel" type="is-dark">

                  <download-excel  
                  :fields="{
                    'Submission Number':'submissionNumber',
                    'Sample ID':'sampleID',
                    'Sample Type':'sampleType',
                    'Animal Type':'animalType',
                    'Breed':'breed',
                    'Age':'age',
                    'Sex':'sex',
                    'Sample Condition on Receipt':'sampleGoodOnReceipt',
                    'Date Sample Collected':'dateSampleCollected',
                    'Test Requested':'testRequested',
                    'Comments':'comments',
                    'Lab Findings':'labFindings'
                  }"
                  :data="samples" 
                  worksheet="Sample Information Worksheet"
                  type="xls"
                  name = "Sample Information.xls">

                  <b-button class="mx-2" icon-left="export" type="is-success ">Excel</b-button>
                  <img src="download_icon.png" />
                  </download-excel>   
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
          field="dateSubmitted"
          label="Date "
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.dateSubmitted }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>
  
  
        <b-table-column
          v-slot="props"
          field="clientName"
          label="Client Name"
          searchable
          
        >
        <span class="tag numbers">  {{ props.row.clientName }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>
  
 
        
        <b-table-column
          v-slot="props"
          field="bioSubmissionNumber"
          label="Submission No."
          searchable
          
        >
        <span class="tag tasks">  {{ props.row.bioSubmissionNumber }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>
       

       
        <b-table-column
          v-slot="props"
          field="timeStamp"
          label="Time Stamp"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.timeStamp }} </span>
         
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
          <h4 class="is-size-4 text-center has-text-centered">No Bio Submissions Data yet. &#x1F4DA;. Click the <span class="tag is-info"> refresh button</span> right above</h4>
          </b-tooltip>
  
        </template>
      </b-table>
          </div>
      </div>
    </div>
  
    
  </template>
  
  
  <script>
  import { mapActions, mapGetters } from 'vuex'
  
  import BioSubmissionsModal from '@/components/modals/LabModal/BiologicalData/bio-submissions-modal.vue'
  import { computed } from 'vue';
  import BioSubmissionSnapshotModal from '@/components/modals/LabModal/BiologicalData/bio-submission-snapshot-modal.vue'
import bioSubmissionsTemplate from '~/components/PDFTemplates/bio-submissions-template.vue';
  export default {
  components: { bioSubmissionsTemplate },
    name: 'SampleInfoTable',
  
    data() {  
        const min = new Date()
            min.setHours(9)
            min.setMinutes(0)
            const max = new Date()
            max.setHours(18)
            max.setMinutes(0)
      var allSamples = computed(()=>this.samples)

      var SignedInUser = computed(()=>this.user)
      return {
        SignedInUser,
        minTime: min,
        maxTime: max,
        isPaginated: true,
        currentPage: 1,
        perPage: 10,
        pageOptions: [5, 10, 25, 50, 100],
        paginationPosition: 'bottom',
        defaultSortDirection: 'asc',
        sortIcon: 'arrow-up',
        sortIconSize: 'is-small',
        stickyHeaders: true,

        // samples_fields:{
        //         "Submission No.":"submission_no",
        //         "Number":"number",
              
        //     },

            

            agro_data:[
              allSamples
            ]
      }

    },
  
  
    computed: {
      
      ...mapGetters('labData', {
          loading: 'loading',
          samples: 'allBioSubmissionsRecords',
        }),

        ...mapGetters('users', {
          loading: 'loading',
          users: 'allUsers',
          user:'loggedInUser',

          
        }),
      
       isEmpty() {
       return this.samples.length === 0
       },
  
      
  
      isNames() {
        return this.names
      },
      
      tableData() {
        return this.isEmpty ? [] : this.samples
      },
    },
  
    async created() {
      await this.getAllBioSubmissionsRecords();
    },
  
    
  
    methods: {
     
  
       ...mapActions('labData', ['addNewBioSubmissionRecord','getAllBioSubmissionsRecords','selectBioSubmissionRecord', 'load']),
  
       async refresh(){
  
        // alert(
        //   "Refreshed!"
        // )
      //  this.isLoading = true
       await this.getAllBioSubmissionsRecords();
     //   this.isLoading = false
   
      },
  
  
       captureReceipt(sample) {
         this.selectBioSubmissionRecord(sample)
         setTimeout(() => {
           this.$buefy.modal.open({
             parent: this,
             component: BioSubmissionSnapshotModal,
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
            component: BioSubmissionsModal,
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
  