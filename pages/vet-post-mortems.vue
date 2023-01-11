<template>
  <div>
    <b-tabs v-model="activeTab">
                 
                 <b-tab-item label="Village Chickens" >
                      <VillageChickensTable/>
                  </b-tab-item>

                  <b-tab-item label="Broilers" >
                    <b-tooltip label="All your cows will show up here." type="is-dark">
                       <BroilersTable/>
                    </b-tooltip>
                      
                  </b-tab-item>

                  <b-tab-item label="Layers" >
                     <b-tooltip label="All your bulls will show up here." type="is-dark">
                     <LayersTable/>
                     </b-tooltip>
                  </b-tab-item>


                  <b-tab-item label="Pigs" >
                    <b-tooltip label="Both cows & bulls under treatment will show up here." type="is-dark">
                      <PigsTable/>
                    </b-tooltip>
                  </b-tab-item>

                  <b-tab-item label="Goats" >
                    <b-tooltip label="Both cows & bulls under treatment will show up here." type="is-dark">
                     <GoatsTable/>
                    </b-tooltip>
                  </b-tab-item>

                  <b-tab-item label="Quails" >
                    <b-tooltip label="Both cows & bulls under treatment will show up here." type="is-dark">
                     <QuailsTable/>
                    </b-tooltip>
                  </b-tab-item>

                  <b-tab-item label="Rabbits" >
                    <b-tooltip label="Both cows & bulls under treatment will show up here." type="is-dark">
                      <RabbitsTable/>
                    </b-tooltip>
                  </b-tab-item>

                  <b-tab-item label="Cattle" >
                    <b-tooltip label="Both cows & bulls under treatment will show up here." type="is-dark">
                    <CattleTable/>
                    </b-tooltip>
                  </b-tab-item>

                

      </b-tabs>

  </div>
</template>

<script>
import GoatsTable from '~/components/tables/Post Mortems/goats-table.vue'
import CattleTable from '~/components/tables/Post Mortems/cattle-table.vue'
import PigsTable from '~/components/tables/Post Mortems/pigs-table.vue'
import BroilersTable from '~/components/tables/Post Mortems/broilers-table.vue'
import LayersTable from '~/components/tables/Post Mortems/layers-table.vue'
import QuailsTable from '~/components/tables/Post Mortems/quails-table.vue'
import VillageChickensTable from '~/components/tables/Post Mortems/village-chickens-table.vue'

export default {
  components: { CattleTable, GoatsTable, PigsTable, 
                BroilersTable, BroilersTable, LayersTable,
                 QuailsTable, VillageChickensTable },

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