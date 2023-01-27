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
          
          
          

      </b-tabs>

  </div>
</template>

<script>

import VetTable from '~/components/tables/Vet/vet-table.vue'

import VillageChickensPMTable from '~/components/tables/Post Mortems/post-mortem-table.vue'
import AnimalCard from '~/components/Tools/Other/animal-cards.vue'

export default {
  components: { 
                
                VillageChickensPMTable
                , VetTable, AnimalCard
              },

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