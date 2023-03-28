<template>
    <div>
      <b-tabs class="table" v-model="activeTab">
                   
                   <b-tab-item label="Biological Data">
                    <b-tabs>
                      <b-tab-item label="Sample Information" >
                        <SampleInfoTable/>
                    </b-tab-item>
  
                    <b-tab-item label="Submissions">
                       <SubmissionsTable/>
                    </b-tab-item>
                    </b-tabs>
                   </b-tab-item>


                   <b-tab-item label="Feed Data">
                    <b-tabs>
                      <b-tab-item label="Sample Information" >
                        <SampleInfoTable/>
                    </b-tab-item>
  
                    <b-tab-item label="Submissions">
                       <SubmissionsTable/>
                    </b-tab-item>
                    </b-tabs>
                   </b-tab-item>
      
            
  
        </b-tabs>
  
    </div>
  </template>
  
  <script>

import SampleInfoTable from '~/components/tables/Lab/Biological Data/sample-info-table.vue';
import SubmissionsTable from '~/components/tables/Lab/Biological Data/submissions-table.vue';

  export default {
    components: {  SampleInfoTable, SubmissionsTable },
  
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