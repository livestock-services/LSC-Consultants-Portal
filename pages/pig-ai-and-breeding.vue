<template>
    <div>
      <b-tabs class="table" v-model="activeTab">
                   
                   <b-tab-item label="Pig AI Consultation" >
                        <PigAiTable/>
                    </b-tab-item>

                    <b-tab-item label="Records" >
                       <PigAiCard/>
                    </b-tab-item>
  
  
            
  
        </b-tabs>
  
    </div>
  </template>
  
  <script>

import PigAiTable from '~/components/tables/Pig AI/pig-ai-table.vue';
import PigAiCard from '~/components/Tools/Reports/pig-ai-card.vue';
  export default {
    components: { PigAiTable, PigAiCard },
  
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