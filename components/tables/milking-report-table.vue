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
        <b-tooltip label="Add details of new milking record here" type="is-dark">
        <b-button class="mx-2" icon-left="plus" type="is-success" @click="addNewMilkRecord">Add New Milking Data</b-button>
        </b-tooltip>

         <b-tooltip label="Refresh" type="is-dark">
         <b-button class="mx-2" icon-left="refresh" type="is-info" @click="refresh">Refresh</b-button>
         </b-tooltip>

          <download-excel :data="tableData" name = "Milking Records">
        <b-button class="mx-2" icon-left="download" type="is-success ">Excel</b-button>
        <img src="download_icon.png" />
      </download-excel>   
      
       <download-excel :data="tableData">
        <b-button class="mx-2" icon-left="download" type="is-danger ">PDF</b-button>
        <img src="download_icon.png" />
      </download-excel>    

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
      <span class="tag is-primary is-light">{{ props.row.earTagID}}</span>
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

 
      
       <b-table-column
        v-slot="props"
        field="firstMilking"
        label="1st Milking (L)"
        sortable
      >

       <span
          :class="[
            'tag',
            {
              'is-danger ': props.row.firstMilking < 7.5,
            },

            {
              'is-warning  ' : props.row.firstMilking > 7.5 && props.row.firstMilking < 8.5 ,
            },

            {
              'is-success  ' : props.row.firstMilking >  8.5 ,
            },

           
          ]"
          > 
          
            {{ props.row.firstMilking }} L </span>


       
      </b-table-column>

       <b-table-column
        v-slot="props"
        field="secondMilking"
        label="2nd Milking (L)"
        sortable
      >
        <span
          :class="[
            'tag',
            {
              'is-danger ': props.row.secondMilking < 7.5,
            },

            {
              'is-warning  ' : props.row.secondMilking > 7.5 && props.row.secondMilking < 8.5 ,
            },

            {
              'is-success  ' : props.row.secondMilking >  8.5 ,
            },

           
          ]"
          > 
          
            {{ props.row.secondMilking }} L </span>
      </b-table-column>

       <b-table-column
        v-slot="props"
        field="thirdMilking"
        label="3rd Milking (L)"
        sortable
      >
       <span
          :class="[
            'tag',
            {
              'is-danger ': props.row.thirdMilking < 6.5,
            },

            {
              'is-warning  ' : props.row.thirdMilking > 6.5 && props.row.thirdMilking < 8.5 ,
            },

            {
              'is-success  ' : props.row.thirdMilking >  8.5 ,
            },

           
          ]"
          > 
          
            {{ props.row.thirdMilking }} L </span>
      </b-table-column>

        <b-table-column
        v-slot="props"
        field="dailyMilkingYield"
        label="Daily Milking Yield(L)"
        sortable
      >
       <span
          :class="[
            'tag',
            {
              'is-danger ': props.row.DailyMilkingYield < 20.5,
            },

            {
              'is-warning  ' : props.row.DailyMilkingYield > 20.5 && props.row.DailyMilkingYield < 26.5 ,
            },

            {
              'is-success  ' : props.row.DailyMilkingYield >  26.5 ,
            },

           
          ]"
          > 
          
            {{ props.row.DailyMilkingYield }} L/day</span>
      </b-table-column>


      <b-table-column
       v-if="this.$auth.user.email === 'kondwani1mwale@gmail.com'"
        v-slot="props"
        field="dailyMilkingYield"
        label="Daily Earnings/Cow"
        sortable
      >
       <span

      
          :class="[
            'tag',
            {
              'is-danger ': props.row.dailyEarnings < 350.50,
            },

            {
              'is-warning  ' : props.row.dailyEarnings > 350.50 && props.row.dailyEarnings < 399.99 ,
            },  

            {
              'is-success  ' : props.row.dailyEarnings >  400.00 ,
            },

           
          ]"
          > 
          
           ZMW {{ props.row.dailyEarnings }} /day </span>
      </b-table-column>

      

      


      <b-table-column v-slot="props" field="date" label="Date" searchable>

          <span class="tag is-info is-light">{{ props.row.milkingDate}}</span>

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
        <h4 class="is-size-4 text-center has-text-centered">No Milking Data yet. &#x1F4DA;.Click the <span class="tag is-info"> refresh button</span> right above</h4>
        </b-tooltip>

      </template>
    </b-table>
        </div>
    </div>
  </div>

  
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
import MilkingReportModal from '~/components/modals/Total Milking Report Modal/milking-report-modal.vue'
import MilkingSnapshotModal from '~/components/modals/Milking Modal/milking-snapshot-modal.vue'
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
    
    ...mapGetters('cattleData', {
        loading: 'loading',
        DMRs: 'allDMRs',
      }),
    
     isEmpty() {
     return this.DMRs.length === 0
     },

    

    isNames() {
      return this.names
    },
    
    tableData() {
      return this.isEmpty ? [] : this.DMRs
    },
  },

  async created() {
  //  this.DMRs.filter( t => 
  //           t.milkingDate > t.milkingStartDate && t.milkingDate < t.milkingEndDate
  //          );

   this.selectDMR(this.DMRs[0])
  },

  

  methods: {
   

     ...mapActions('cattleData', ['addNewDMR','getAllDMRs', 'getTotalMikingRecords','getMilkingByDate', 'load', 'selectDMR']),

     async refresh(){

          function showNotifications(){
   const notification = new Notification("New message from Litmas!", {
       body: "You might want to check your milking data.",
     //  icon: '@/assets/pug3.jpg'
   }); 
}

    //  this.isLoading = true
      await this.getMilkingByDate();
     

   //   await this.getTotalMikingRecords();

      showNotifications();
   //   this.isLoading = false
 
    },


    captureReceipt(DMR) {
      this.selectDMR(DMR)

      
      setTimeout(() => {
        this.$buefy.modal.open({
          parent: this,
          component: MilkingSnapshotModal,
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

     addNewMilkRecord() {
      
      setTimeout(() => {
        this.$buefy.modal.open({
          parent: this,
          component: MilkingReportModal,
          hasModalCard: true,
          trapFocus: true,
          canCancel: ['x'],
          destroyOnHide: true,
          customClass: '',
          onCancel: () => {
            this.$buefy.toast.open({
              message: `Milking Snapshot closed!`,
              duration: 5000,
              position: 'is-top',
              type: 'is-info',
            })
          },
        })
      }, 300)
    },
  },

  
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
