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
          field="submissionNumber"
          label="Submission No."
          searchable
          
        >
        <span class="tag tasks">  {{ props.row.submissionNumber }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>
  
        <b-table-column
          v-slot="props"
          field="sampleID"
          label="Sample ID"
          sortable
          
        >
        <span class="tag numbers">  {{ props.row.sampleID }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>
  
        <b-table-column
          v-slot="props"
          field="sampleType"
          label="Sample Type"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.sampleType }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>
  
        <b-table-column
          v-slot="props"
          field="animalType"
          label="Animal Type"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.animalType }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>
  
  
  
       <b-table-column
          v-slot="props"
          field="breed"
          label="Breed"
          searchable
        >
  
        <span class="tag is-info is-light">  {{ props.row.breed }} </span>
         
        </b-table-column>
  
        <b-table-column
          v-slot="props"
          field="age"
          label="Age"
          searchable
        >
  
        <span class="tag is-info is-light">  {{ props.row.age }} </span>
         
        </b-table-column>
        
        <b-table-column
          v-slot="props"
          field="sex"
          label="Sex"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.sex }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>


        <b-table-column
          v-slot="props"
          field="sampleGoodOnReceipt"
          label="Sample Condition on Receipt"
          searchable
          
        >
        <span :class="[
            'tag',
          

            {
              'is-success  ' : props.row.sampleGoodOnReceipt ===  'Good',
            },

            {
              'is-warning ': props.row.sampleGoodOnReceipt === 'Satisfactory',
            },

            {
              'is-danger ': props.row.sampleGoodOnReceipt === 'Bad',
            },

          ]"
          
          >  {{ props.row.sampleGoodOnReceipt }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="dateSampleCollected"
          label="Date Sample Collected"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.dateSampleCollected }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="testRequested"
          label="Test Requested"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.testRequested }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="comments"
          label="Comments"
          searchable
          
        >
        <span class="">  {{ props.row.comments }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="labFindings"
          label="Lab Findings"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.labFindings }} </span>
         
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
          <h4 class="is-size-4 text-center has-text-centered">No Sample Information Data yet. &#x1F4DA;. Click the <span class="tag is-info"> refresh button</span> right above</h4>
          </b-tooltip>
  
        </template>
      </b-table>
          </div>
      </div>
    </div>
  
    
  </template>
  
  
  <script>
  import { mapActions, mapGetters } from 'vuex'
  
  import SampleInfoModal from '@/components/modals/LabModal/BiologicalData/sample-info-modal.vue'
  import { computed } from 'vue';
  
  // import AgroSnapshotModal from '@/components/modals/Agro Modal/agro-snapshot-modal.vue'
  export default {
    name: 'SampleInfoTable',
  
    data() {  
    
      var allSamples = computed(()=>this.samples)
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
          samples: 'allSampleInformationRecords',
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
    // await this.load()
    // this.selectAgroRecord(this.agros[0])
    },
  
    
  
    methods: {
     
  
       ...mapActions('labData', ['addNewSampleInformationRecord','getAllSampleInformationRecords', 'load']),
  
       async refresh(){
  
        // alert(
        //   "Refreshed!"
        // )
      //  this.isLoading = true
       await this.getAllSampleInformationRecords();
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
            component: SampleInfoModal,
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
  