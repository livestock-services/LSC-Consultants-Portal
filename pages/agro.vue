<template>
  <div>
    <b-tabs v-model="activeTab">
                 
                 <b-tab-item label="Agronomy Consultation" >
                      <AgroTable/>
                  </b-tab-item>

                  <b-tab-item label="Records">
               <AgroCard/>
              </b-tab-item>

          

      </b-tabs>

  </div>
</template>

<script>
import AgroTable from '~/components/tables/Agro/agro-table.vue'
import AgroCard from '~/components/Tools/Reports/agro-card.vue'
export default {
  components: { AgroTable, AgroCard },

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