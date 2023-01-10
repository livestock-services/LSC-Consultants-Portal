<template>
  <div>
    <b-tabs v-model="activeTab">
            <b-tab-item label="Lifecycle Records">
               <b-tabs>
                 
            
                  <b-tab-item label="Birth Records" >
                     <b-tooltip label="Add your new calves to the herd here." type="is-dark">
                      <CalfTable/>
                     </b-tooltip>
                  </b-tab-item>

                  <b-tab-item label="Death Records" >
                     <b-tooltip label="Record mortalities here." type="is-dark">
                      <MortalitiesTable/>
                     </b-tooltip>
                  </b-tab-item>

                  <b-tab-item label="Reproductive Records">
                     <b-tooltip label="Record reproductive data of each cow here." type="is-dark">
                 <ReproductionTable/>
                     </b-tooltip>
                  </b-tab-item>

            

                  <b-tab-item label="Daily Milking Records" >
                     <b-tooltip label="Record daily milking yields for all cows here." type="is-dark">
                      <MilkingTable/>
                     </b-tooltip>
                  </b-tab-item>

                  <b-tab-item label="Milking Report" >
                     <b-tooltip label="Record daily milking yields for all cows here." type="is-dark">
                      <Chart/>
                     </b-tooltip>
                  </b-tab-item>

                  <b-tab-item label="Milking Report" >
                     <b-tooltip label="Record daily milking yields for all cows here." type="is-dark">
                      <MilkingReportTable/>
                     </b-tooltip>
                  </b-tab-item>


               </b-tabs>
            </b-tab-item>

            <!-- <b-tab-item label="Sales Records">
                 <b-tabs>
               
                  <b-tab-item label="Sales Records" >
                     <b-tooltip label="Record your sales data here." type="is-dark">
                      <SalesTable/>
                     </b-tooltip>
                  </b-tab-item>
               </b-tabs>
            </b-tab-item> -->

            
            <b-tab-item label="Production Records" >
                <b-tabs>
                 <!-- <b-tab-item label="Artificial Insemination">
                   <CattleTable/>
                  </b-tab-item>

                  <b-tab-item label="Natural Service">
                 <CattleTable/>
                  </b-tab-item> -->
            
                  <b-tab-item label="Feed Records" >
                     <b-tooltip label="All your feed data such as daily feed rates per cow will show up here." type="is-dark">
                      <FeedTable/>
                     </b-tooltip>
                  </b-tab-item>

                  <b-tab-item label="Treatment Records" >
                     <b-tooltip label="Record your treatment data here." type="is-dark">
                      <TreatmentTable/> 
                     </b-tooltip>
                  </b-tab-item>

               </b-tabs>
            </b-tab-item>

          
        </b-tabs>

        
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import FeedTable from '~/components/tables/feed-table.vue'
import TreatmentTable from '~/components/tables/treatment-table.vue'
import CattleTable from '~/components/tables/cattle-table.vue'
import CalfTable from '~/components/tables/calf-table.vue'
import MilkingTable from '~/components/tables/milking-table.vue'
import ReproductionTable from '~/components/tables/reproduction-table.vue'
import MortalitiesTable from '~/components/tables/mortalities-table.vue'
import SalesTable from '~/components/tables/sales-table.vue'
import TotalMilkingRecordsTable from '~/components/tables/total-milking-records-table.vue'
import MilkingReportTable from '~/components/tables/milking-report-table.vue'
import Chart from './chart.vue'
export default {
  components: { FeedTable, TreatmentTable, CattleTable, CalfTable, MilkingTable, ReproductionTable, MortalitiesTable, SalesTable, TotalMilkingRecordsTable, MilkingReportTable, Chart },

  data(){
    
    return{
      activeTab: 0,
      showBooks: false
    }
  },

  async created() {

//     function showNotifications(){
//    const notification = new Notification("Your Records Section", {
//        body: "This section keeps track of your various animal records. Do acquaint yourself with where things are.",
//        icon: "http://localhost:3000/assets/litmas3.png",
       

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
  },
  }


</script>

<style>

</style>