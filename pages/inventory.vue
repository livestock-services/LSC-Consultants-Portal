<template>
  <div>
    <b-tabs v-model="activeTab">
                 
                 <b-tab-item label="All Animals" >
                      <CattleTable/>
                  </b-tab-item>

                  <b-tab-item label="Cows" >
                    <b-tooltip label="All your cows will show up here." type="is-dark">
                        <CowsTable/>
                    </b-tooltip>
                      
                  </b-tab-item>

                  <b-tab-item label="Bulls" >
                     <b-tooltip label="All your bulls will show up here." type="is-dark">
                      <BullsTable/>
                     </b-tooltip>
                  </b-tab-item>


                  <b-tab-item label="Sick Cattle" >
                    <b-tooltip label="Both cows & bulls under treatment will show up here." type="is-dark">
                      <CattleUnderTreatment/>
                    </b-tooltip>
                  </b-tab-item>

                   <b-tab-item label="Sick Calves " >
                    <b-tooltip label="Both cows & bulls under treatment will show up here." type="is-dark">
                     <CalvesUnderTreatment/>
                    </b-tooltip>
                  </b-tab-item>

                   <b-tab-item label="Calves" >
                      <b-tooltip label="All your calves will show up here." type="is-dark">
                      <NewCalvesTable/>
                      </b-tooltip>
                  </b-tab-item>

                  <b-tab-item label="Weaners" >
                    <b-tooltip label="All your weaners will show up here." type="is-dark">
                      <WeanersTable/>
                    </b-tooltip>
                  </b-tab-item>

                  <b-tab-item label="Yearlings" >
                    <b-tooltip label="All your yearlings will show up here." type="is-dark">
                      <YearlingsTable/>
                    </b-tooltip>
                  </b-tab-item>

                  <b-tab-item label="Bulling Heifers" >
                    <b-tooltip label="All your bulling heifers will show up here." type="is-dark">
                      <BullingHeifersTable/>
                    </b-tooltip>
                  </b-tab-item>

      </b-tabs>

  </div>
</template>

<script>
import FeedTable from '~/components/tables/feed-table.vue'
import TreatmentTable from '~/components/tables/treatment-table.vue'
import CattleTable from '~/components/tables/cattle-table.vue'
import CalfTable from '~/components/tables/calf-table.vue'
import WeanersTable from '~/components/tables/weaners-table.vue'
import YearlingsTable from '~/components/tables/yearlings-table.vue'
import BullingHeifersTable from '~/components/tables/bulling-heifers-table.vue'
import NewCalvesTable from '~/components/tables/new-calves-table.vue'
import CowsTable from '~/components/tables/cows-table.vue'
import BullsTable from '~/components/tables/bulls-table.vue'
import CattleUnderTreatment from '~/components/tables/cattle-under-treatment.vue'
import CalvesUnderTreatment from '~/components/tables/calves-under-treatment.vue'
export default {
  components: { FeedTable, TreatmentTable, CattleTable, CalfTable, 
  WeanersTable,YearlingsTable, BullingHeifersTable, NewCalvesTable, BullsTable, CowsTable,
    CattleUnderTreatment, CalvesUnderTreatment },

  data(){
    return {
         activeTab: 0,
      showBooks: false
    }
  },

    async created() {

//     function showNotifications(){
//    const notification = new Notification("Your Herd Section", {
//        body: "This section keeps track of your animals to maximize precision and minimize duplicate entries.",
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