<template>
  <div>
    <b-tabs v-model="activeTab">
          <b-tab-item label="Animal Consultations">
            <b-tabs>
              <b-tab-item label="Consultations">
                <VetTable/>
              </b-tab-item>

              <b-tab-item label="Records">
               <AnimalCard/>
              </b-tab-item>

            </b-tabs>
          </b-tab-item>   
          
          
          <b-tab-item label="Post Mortems">
            <b-tabs>
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
           
          </b-tab-item>
                 

      </b-tabs>

  </div>
</template>

<script>
import GoatsTable from '~/components/tables/Vet/goats-table.vue'
import SheepTable from '~/components/tables/Vet/sheep-table.vue'
import CattleTable from '~/components/tables/Vet/cattle-table.vue'
import PigsTable from '~/components/tables/Vet/pigs-table.vue'
import PoultryTable from '~/components/tables/Vet/poultry-table.vue'
import DogsAndCatsTable from '~/components/tables/Vet/dogs-and-cats-table.vue'
import RabbitsTable from '~/components/tables/Vet/rabbits-table.vue'
import HorsesTable from '~/components/tables/Vet/horses-table.vue'
import WildlifeGameTable from '~/components/tables/Vet/wildlife-game-table.vue'
import VetTable from '~/components/tables/Vet/vet-table.vue'
import GoatsPMTable from '~/components/tables/Post Mortems/goats-table.vue'
import CattlePMTable from '~/components/tables/Post Mortems/cattle-table.vue'
import PigsPMTable from '~/components/tables/Post Mortems/pigs-table.vue'
import BroilersPMTable from '~/components/tables/Post Mortems/broilers-table.vue'
import LayersPMTable from '~/components/tables/Post Mortems/layers-table.vue'
import QuailsPMTable from '~/components/tables/Post Mortems/quails-table.vue'
import VillageChickensPMTable from '~/components/tables/Post Mortems/village-chickens-table.vue'
import AnimalCard from '~/components/Tools/animal-cards.vue'

export default {
  components: { CattleTable,GoatsTable,SheepTable,
    PigsTable,PoultryTable, DogsAndCatsTable, 
    RabbitsTable, HorsesTable,WildlifeGameTable, 
    BroilersPMTable, LayersPMTable, QuailsPMTable,
     VillageChickensPMTable, GoatsPMTable, CattlePMTable, PigsPMTable, VetTable, AnimalCard },

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