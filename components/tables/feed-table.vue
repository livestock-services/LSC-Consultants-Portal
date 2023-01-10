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
        <!-- <b-tooltip label="Add details of new tasks here" type="is-dark">
        <b-button class="mx-2" icon-left="plus" type="is-success" @click="addNewMilkRecord">Add New Milking Data</b-button>
        </b-tooltip> -->

         <b-tooltip label="Refresh" type="is-dark">
         <b-button class="mx-2" icon-left="refresh" type="is-info" @click="refresh">Refresh</b-button>
         </b-tooltip>
      </div>

        <download-excel :data="tableData">
        <b-button class="mx-2" icon-left="download" type="is-success ">Excel</b-button>
        <img src="download_icon.png" />
      </download-excel>   
      
       <download-excel :data="tableData">
        <b-button class="mx-2" icon-left="download" type="is-danger ">PDF</b-button>
        <img src="download_icon.png" />
      </download-excel>    
      
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
        field="dailyMilkingYield"
        label="Daily Milking Yield (DMY) (L)"
        sortable
        
      >

    <b-tooltip label="Calculated based on daily milking sessions per cow.
         The more milk produced, the higher the DMY. This affects DFA per cow" 
         type="is-dark"
         position="is-top">
      
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

    </b-tooltip>

      </b-table-column>


      <b-table-column
        v-slot="props"
        field="earTagID"
        label="Daily Feed Allocation (DFA) in KG"
        sortable
        
      >

        <b-tooltip label="Calculated based on Daily Milking Yield Per Cow.
         The more milk produced, the more feed allocated" 
         type="is-dark"
         position="is-top">
      <span class="tag feed ">{{ props.row.DailyFeedAllocation}} kg/day</span>
        </b-tooltip>
        <!-- {{ props.row.sumInsured }} -->
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

          <span class="tag is-info is-light">{{ props.row.date}}</span>

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
        <h4 class="is-size-4 text-center has-text-centered">No Feed Data yet. &#x1F4DA;.Click the <span class="tag is-info"> refresh button</span> right above</h4>
        </b-tooltip>

      </template>
    </b-table>
        </div>
    </div>
  </div>

  
</template>


<script>

import { mapActions, mapGetters } from 'vuex'
import MilkingModal from '~/components/modals/Milking Modal/milking-modal.vue'
import FeedSnapshotModal from '~/components/modals/Feed Modal/feed-snapshot-modal.vue'
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
      sortIconSize: 'is-small'
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
  // await this.load()

//              function showNotifications(){
//    const notification = new Notification("New message from Litmas!", {
//        body: "You might want to check your milking data.",
//        icon: '@/assets/pug3.jpg'
//    }); 
// }

// if (Notification.permission === "granted") {
//     showNotifications();
// } else if(Notification.permission !== "denied") {
//     Notification.requestPermission().then(permission =>{
//         if (permission === "granted") {
//             showNotifications();
//         }
      
//     })
// }
   this.selectDMR(this.DMRs[0])
  },

  

  methods: {
   

     ...mapActions('cattleData', ['addNewDMR','getAllDMRs', 'getTotalMikingRecords', 'load', 'selectDMR']),

     async refresh(){

          function showNotifications(){
   const notification = new Notification("New message from Litmas!", {
       body: "You might want to check your milking data.",
     //  icon: '@/assets/pug3.jpg'
   }); 
}

    //  this.isLoading = true
      await this.getAllDMRs();

   //   await this.getTotalMikingRecords();

      showNotifications();
   //   this.isLoading = false
 
    },


    captureReceipt(DMR) {
      this.selectDMR(DMR)

      
      setTimeout(() => {
        this.$buefy.modal.open({
          parent: this,
          component: FeedSnapshotModal,
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
          component: MilkingModal,
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
.feed{
  background-color: rgb(192, 248, 170);
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
