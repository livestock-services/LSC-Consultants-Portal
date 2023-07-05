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
  
           <b-tooltip label="Export to Excel" type="is-dark">

            <download-excel  
            :fields="{
            'Submissions No.':'submissionsNumber',
            'Client Name':'clientName',
            'Consulting Veterinarian':'consultingVet',
            'Tel No.(For The Vet)':'vetPhoneNumber',
            'Date & Time Received':'dateTimeReceived',
            'Received By':'receivedBy',
            'Submitted By':'submittedBy',
            'Report Name':'reportName',
            'Address':'address',
            'Tel No.':'telPhoneNumber',
            'Email':'email',
            'Report to be sent via':'reportSentVia',

            'Site/Farm Location':'siteLocation',
            'Blood':'blood',
            'Plasma':'plasma',
            'Serum':'serum',
            'Blood Smear':'bloodSmear',
            'Impression Smear':'impressionSmear',
            'Lymphnode Smear':'lymphnodeSmear',
            'Brain Crush Smear':'brainCrushSmear',
            'Urine':'urine',
            'Faecal':'faecal',
            'Milk':'milk',
            'Semen':'semen',


            'Tracheal Washing':'trachealWashing',
            'Swab':'swab',
            'Skin Scraping':'skinScraping',
            'Abort/Fetal':'abortedOrFetal',
            'Tissue/Organ':'tissueOrOrgan',
            'Biopsy':'biopsy',
            'Carcass':'carcass',
            'Other(namely)':'other',
            'Total No. Samples Submitted':'totalNumberOfSamplesSubmitted',
            'Total No. Samples Rejected':'totalNumberOfSamplesRejected',
            'Presenting Problems':'presentingProblems',
            'Examination Requested':'examinationRequested',
            'Test Urgency':'testUrgency',
            'Submission Status':'submissionStatus',
            'Invoice No.':'invoiceNumber'

            }"
            :data="submissions_data" 
            worksheet="Submissions Information Worksheet"
            type="xls"
            name = "Submissions Information.xls">

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
          field="submissionsNumber"
          label="Submission No."
          searchable
          
        >
        <span class="tag tasks">  {{ props.row.submissionsNumber }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>
  
        <b-table-column
          v-slot="props"
          field="clientName"
          label="Client Name"
          
          
        >
        <span class="tag numbers">  {{ props.row.clientName }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>
  
        <b-table-column
          v-slot="props"
          field="consultingVet"
          label="Consulting Veterinarian"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.consultingVet }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>
  
        <b-table-column
          v-slot="props"
          field="vetPhoneNumber"
          label="Tel No. (For The Vet)"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.vetPhoneNumber }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>
  
  
  
       <b-table-column
          v-slot="props"
          field="dateTimeReceived"
          label="Date & Time Received"
          searchable
        >
  
        <span class="tag is-info is-light">  {{ props.row.dateTimeReceived }} </span>
         
        </b-table-column>
  
        <b-table-column
          v-slot="props"
          field="receivedBy"
          label="Received By"
          searchable
        >
  
        <span class="tag is-info is-light">  {{ props.row.receivedBy }} </span>
         
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="submittedBy"
          label="Submitted By"
          searchable
        >
  
        <span class="tag is-info is-light">  {{ props.row.submittedBy }} </span>
         
        </b-table-column>
        
        <b-table-column
          v-slot="props"
          field="reportName"
          label="Report Name"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.reportName }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="address"
          label="Address"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.address }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>


        <b-table-column
          v-slot="props"
          field="telPhoneNumber"
          label="Tel No."
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.telPhoneNumber }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>


        <b-table-column
          v-slot="props"
          field="email"
          label="Email"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.email }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>


        <b-table-column
          v-slot="props"
          field="reportSentVia"
          label="Report to be sent via"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.reportSentVia }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>


        <b-table-column
          v-slot="props"
          field="siteLocation"
          label="Site/Farm Location"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.siteLocation }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>


        <b-table-column
          v-slot="props"
          field="blood"
          label="Blood"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.blood }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>


        <b-table-column
          v-slot="props"
          field="plasma"
          label="Plasma"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.plasma }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>


        <b-table-column
          v-slot="props"
          field="serum"
          label="Serum"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.serum }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="bloodSmear"
          label="Blood Smear"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.bloodSmear }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="impressionSmear"
          label="Impression Smear"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.impressionSmear }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="lymphnodeSmear"
          label="Lymphnode Smear"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.lymphnodeSmear }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="brainCrushSmear"
          label="Brain Crush Smear"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.brainCrushSmear }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="urine"
          label="Urine"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.urine }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="faecal"
          label="Faecal"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.faecal }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="milk"
          label="Milk"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.milk }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="semen"
          label="Semen"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.semen }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>


        <b-table-column
          v-slot="props"
          field="trachealWashing"
          label="Tracheal Washing"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.trachealWashing }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="swab"
          label="Swab"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.swab }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="skinScraping"
          label="Skin Scraping"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.skinScraping }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>


        <b-table-column
          v-slot="props"
          field="abortedOrFetal"
          label="Aborted/Fetal"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.abortedOrFetal }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="tissueOrOrgan"
          label="Tissue/Organ"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.tissueOrOrgan }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="biopsy"
          label="Biopsy"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.biopsy }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="carcass"
          label="Carcass"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.carcass }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="other"
          label="Other"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.other }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>


        <b-table-column
          v-slot="props"
          field="totalNumberOfSamplesSubmitted"
          label="Total No. Samples Submitted"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.totalNumberOfSamplesSubmitted }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="totalNumberOfSamplesRejected"
          label="Total No. Samples Rejected"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.totalNumberOfSamplesRejected }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>


        <b-table-column
          v-slot="props"
          field="presentingProblems"
          label="Presenting Problems"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.presentingProblems }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>


        <b-table-column
          v-slot="props"
          field="examinationRequested"
          label="Examination Requested"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.examinationRequested }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>


        <b-table-column
          v-slot="props"
          field="testUrgency"
          label="Test Urgency"
          searchable
          
        >
        <span :class="[
            'tag',
          

            {
              'is-success  ' : props.row.testUrgency ===  'Routine',
            },

            {
              'is-warning ': props.row.testUrgency === 'Urgent',
            },

           

          ]"
          
          >  {{ props.row.testUrgency }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="submissionStatus"
          label="Submission Status"
          searchable
          
        >
        <span :class="[
            'tag',
          

            {
              'is-success is-light  ' : props.row.submissionStatus ===  'Dispatched',
            },

            {
              'is-warning is-light': props.row.submissionStatus === 'Pending',
            },

           

          ]"
          
          >  {{ props.row.submissionStatus }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="invoiceNumber"
          label="Invoice Number"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.invoiceNumber }} </span>
         
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
  import { computed } from 'vue';
  import SubmissionsModal from '@/components/modals/Lab Modal/Biological Data/submissions-modal.vue'
  
  // import AgroSnapshotModal from '@/components/modals/Agro Modal/agro-snapshot-modal.vue'
  export default {
    name: 'SampleInfoTable',
  
    data() {  
    
      var allSubmissions = computed(()=>this.submissions)
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

        submissions_data:[
              allSubmissions
            ]
      }
    },
  
  
    computed: {
      
      ...mapGetters('labData', {
          loading: 'loading',
          submissions:'allSubmissionsRecords',
        }),

        ...mapGetters('users', {
          loading: 'loading',
          users: 'allUsers',
          user:'loggedInUser',

          
        }),
      
       isEmpty() {
      return this.submissions.length === 0
       },
  
      
  
      isNames() {
        return this.names
      },
      
      tableData() {
       return this.isEmpty ? [] : this.submissions
      },
    },
  
    async created() {
    // await this.load()
    // this.selectAgroRecord(this.agros[0])
    },
  
    
  
    methods: {
     
  
       ...mapActions('labData', ['addNewSubmissionsRecord','getAllSubmissionsRecords', 'load']),
  
       async refresh(){
  
        // alert(
        //   "Refreshed!"
        // )
      //  this.isLoading = true
       await this.getAllSubmissionsRecords();
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
            component: SubmissionsModal,
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
  