<template>
  <div>
    <b-tabs v-model="activeTab">
          <b-tab-item label="Animal Feed Consultations">
            <b-tabs>
              <b-tab-item label="Consultations">
                <NutritionTable/>
              </b-tab-item>

              <b-tab-item label="Records">
               <NutritionCard/>
              </b-tab-item>

            </b-tabs>
          </b-tab-item>   
          
          
          

      </b-tabs>

  </div>
</template>

<script>

import NutritionTable from '~/components/tables/Animal Nutrition/nutrition-table.vue'

import NutritionCard from '~/components/Tools/Reports/animal-nutrition-card.vue'

export default {
  components: { 
                
               
                 NutritionTable, NutritionCard
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