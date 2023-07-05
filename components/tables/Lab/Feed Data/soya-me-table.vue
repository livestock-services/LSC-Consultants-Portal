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
          field="meDateReceived"
          label="Date Received"
          searchable
          
        >
        <span class="tag tasks">  {{ props.row.meDateReceived }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>
  
        <b-table-column
          v-slot="props"
          field="meReceivedBy"
          label="Received By"
          
          
        >
        <span class="tag numbers">  {{ props.row.meReceivedBy }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>
  
        <b-table-column
          v-slot="props"
          field="meTimeOfReceipt"
          label="Time"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.meTimeOfReceipt }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>
  
        <b-table-column
          v-slot="props"
          field="meSubmissionNumber"
          label="Submission"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.meSubmissionNumber }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>
  
  
  
       <b-table-column
          v-slot="props"
          field="meSupplierName"
          label="Supplier/Customer"
          searchable
        >
  
        <span class="tag is-info is-light">  {{ props.row.meSupplierName }} </span>
         
        </b-table-column>
  
        <b-table-column
          v-slot="props"
          field="meNRC"
          label="NRC"
          searchable
        >
  
        <span class="tag is-info is-light">  {{ props.row.meNRC }} </span>
         
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="meTelNumber"
          label="Telephone No."
          searchable
        >
  
        <span class="tag is-info is-light">  {{ props.row.meTelNumber }} </span>
         
        </b-table-column>
        
        <b-table-column
          v-slot="props"
          field="meDescription"
          label="Description"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.meDescription }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="meSampleID"
          label="Sample ID"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.meSampleID }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="meSiteLocation"
          label="Site/Location"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.meSiteLocation }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>


        <b-table-column
          v-slot="props"
          field="meSamplePackaging"
          label="Sample Packaging"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.meSamplePackaging }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="meSampleLabelling"
          label="Sample Labelling"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.meSampleLabelling }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="meSampleCondition"
          label="Sample Condition"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.meSampleCondition }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>


        <b-table-column
          v-slot="props"
          field="meColor"
          label="meColor"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.meColor }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>


        <b-table-column
          v-slot="props"
          field="meTexture"
          label="Texture"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.meTexture }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="meSmell"
          label="Smell"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.meSmell }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="meForeignBodies"
          label="Foreign Bodies"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.meForeignBodies }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="meOther"
          label="Other"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.meOther }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>


        <b-table-column
          v-slot="props"
          field="meQualitativeScore"
          label="Overall Qualitative Score"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.meQualitativeScore }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="meAntiTrypsinTest"
          label="AntiTrypsin Test"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.meAntiTrypsinTest }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="meMoisture"
          label="Moisture"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.meMoisture }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="meProtein"
          label="Protein As is"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.meProtein }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="meFat"
          label="Fat As is"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.meFat }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="meFibre"
          label="Fibre As is"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.meFibre }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>


        <b-table-column
          v-slot="props"
          field="meAsh"
          label="Ash As is"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.meAsh }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>


        <b-table-column
          v-slot="props"
          field="meNutritionistComment"
          label="Nutritionist Comment"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.meNutritionistComment }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>


        <b-table-column
          v-slot="props"
          field="meSecondComment"
          label="Second Comment"
          searchable
          
        >
        <span class="tag is-primary is-light">  {{ props.row.meSecondComment }} </span>
         
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
  
  import MEModal from '@/components/modals/Lab Modal/Feed Data/soya-me-modal.vue'
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
          ME: 'allMERecords',
        }),

        ...mapGetters('users', {
          loading: 'loading',
          users: 'allUsers',
          user:'loggedInUser',

          
        }),
      
       isEmpty() {
      return this.ME.length === 0
       },
  
      
  
      isNames() {
        return this.names
      },
      
      tableData() {
       return this.isEmpty ? [] : this.ME
      },
    },
  
    async created() {
    // await this.load()
    // this.selectAgroRecord(this.agros[0])
    },
  
    
  
    methods: {
     
  
       ...mapActions('labData', ['addNewMERecord','getAllMERecords', 'load']),
  
       async refresh(){
  
        // alert(
        //   "Refreshed!"
        // )
      //  this.isLoading = true
       await this.getAllMERecords();
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
            component: MEModal,
            hasModalCard: true,
            trapFocus: true,
            canCancel: ['x'],
            destroyOnHide: true,
            customClass: '',
            onCancel: () => {
              this.$buefy.toast.open({
                message: `Soya (me) Snapshot closed!`,
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
  