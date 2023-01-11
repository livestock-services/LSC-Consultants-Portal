<template>
  <div>
    <b-tabs v-model="activeTab">
                 
                 <b-tab-item label="Cattle" >
                      <CattleTable/>
                  </b-tab-item>

                  <b-tab-item label="Goats" >
                    <b-tooltip label="All your cows will show up here." type="is-dark">
                       <GoatsTable/>
                    </b-tooltip>
                      
                  </b-tab-item>

                  <b-tab-item label="Sheep" >
                     <b-tooltip label="All your bulls will show up here." type="is-dark">
                      <SheepTable/>
                     </b-tooltip>
                  </b-tab-item>


                  <b-tab-item label="Pigs" >
                    <b-tooltip label="Both cows & bulls under treatment will show up here." type="is-dark">
                      <PigsTable/>
                    </b-tooltip>
                  </b-tab-item>

                  <b-tab-item label="Poultry" >
                    <b-tooltip label="Both cows & bulls under treatment will show up here." type="is-dark">
                      <RabbitsTable/>
                    </b-tooltip>
                  </b-tab-item>

                  <b-tab-item label="Dogs & Cats" >
                    <b-tooltip label="Both cows & bulls under treatment will show up here." type="is-dark">
                      <RabbitsTable/>
                    </b-tooltip>
                  </b-tab-item>

                  <b-tab-item label="Rabbits" >
                    <b-tooltip label="Both cows & bulls under treatment will show up here." type="is-dark">
                      <RabbitsTable/>
                    </b-tooltip>
                  </b-tab-item>

                  <b-tab-item label="Wildlife/Game" >
                    <b-tooltip label="Both cows & bulls under treatment will show up here." type="is-dark">
                      <RabbitsTable/>
                    </b-tooltip>
                  </b-tab-item>

                  <b-tab-item label="Horses" >
                    <b-tooltip label="Both cows & bulls under treatment will show up here." type="is-dark">
                      <HorsesTable/>
                    </b-tooltip>
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
export default {
  components: { CattleTable,GoatsTable,SheepTable,
    PigsTable,PoultryTable, DogsAndCatsTable, 
    RabbitsTable, HorsesTable,WildlifeGameTable },

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