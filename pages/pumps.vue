<template>
    <div>
      <b-tabs class="table" v-model="activeTab">
                   
                   <b-tab-item label="Pump Consultation" >
                        <PumpsTable/>
                    </b-tab-item>

                    <b-tab-item  label="Records" >
                       <PumpsCard/>
                    </b-tab-item>
  
            
  
        </b-tabs>
  
    </div>
  </template>
  
  <script>
  import PumpsTable from '~/components/tables/Pumps/pumps-table.vue';
import PumpsCard from '~/components/Tools/Reports/pumps-card.vue';

  export default {
    components: { PumpsTable, PumpsCard },
  
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
  .table{
    margin-top: 4rem;
  }
  </style>