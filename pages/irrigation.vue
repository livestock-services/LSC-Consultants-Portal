<template>
    <div>
      <b-tabs class="table" v-model="activeTab">
                   
                  <b-tab-item label="Irrigation">
                    <b-tabs>
                      <b-tab-item label="Consultation" >
                        <IrrigationTable/>
                    </b-tab-item>

                    <b-tab-item label="Records" >
                       <IrrigationCard/>
                    </b-tab-item>
                    </b-tabs>
                  </b-tab-item>


                  <b-tab-item label="Water Pumps">
                    <b-tabs>
                      <b-tab-item label="Consultation" >
                        <PumpsTable/>
                      </b-tab-item>

                    <b-tab-item  label="Records" >
                       <PumpsCard/>
                    </b-tab-item>
                    </b-tabs>
                   </b-tab-item>
            
  
        </b-tabs>
  
    </div>
  </template>
  
  <script>
import IrrigationTable from '~/components/tables/Irrigation/irrigation-table.vue';
import PumpsTable from '~/components/tables/Pumps/pumps-table.vue';
import IrrigationCard from '~/components/Tools/Reports/irrigation-card.vue';
import PumpsCard from '~/components/Tools/Reports/pumps-card.vue';


  export default {
    components: { IrrigationTable, IrrigationCard, PumpsTable, PumpsCard },
  
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