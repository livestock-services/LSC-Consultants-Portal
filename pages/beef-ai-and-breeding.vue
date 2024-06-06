<template>
    <div>
      <b-tabs class="table" v-model="activeTab">
                   
                   <b-tab-item label="Beef AI Consultation" >
                       <BeefAiTable/>
                    </b-tab-item>

                    <b-tab-item label="Records" >
                       <BeefAiCard/>
                    </b-tab-item>
  
            
  
        </b-tabs>
  
    </div>
  </template>
  
  <script>

import BeefAiTable from '~/components/tables/BeefAI/beef-ai-table.vue';
import BeefAiCard from '~/components/Tools/Reports/beef-ai-card.vue';

  export default {
    components: { BeefAiTable, BeefAiCard },
  
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