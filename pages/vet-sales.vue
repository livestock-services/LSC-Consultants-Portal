<template>
    <div>
      <b-tabs class="table" v-model="activeTab">
            <b-tab-item label="Animal Consultations">
              <b-tabs>
                <b-tab-item label="Consultations">
                  <VetTable/>
                </b-tab-item>
  
                <b-tab-item label="Records">
                 <VetCard/>
                </b-tab-item>
  
              </b-tabs>
            </b-tab-item>   
              
  
        </b-tabs>
  
    </div>
  </template>
  
  <script>
  
  import VetCard from '~/components/Tools/Reports/vet-card.vue'
  import VetTable from '~/components/tables/Vet/vet-table.vue';
  import PostMortemTable from '~/components/tables/PostMortems/post-mortem-table.vue';
  import PostMortemCard from '~/components/Tools/Reports/post-mortem-card.vue';
  import BroilersCard from '~/components/Tools/Reports/broilers-card.vue'
  import VillageChickensCard from '~/components/Tools/Reports/village-chickens-card.vue'
  import CattleCard from '~/components/Tools/Reports/cattle-card.vue'
  import GoatsCard from '~/components/Tools/Reports/goats-card.vue'
  import LayersCard from '~/components/Tools/Reports/layers-card.vue'
  import PigsCard from '~/components/Tools/Reports/pigs-card.vue'
  import QuailsCard from '~/components/Tools/Reports/quails-card.vue'
  import RabbitsCard from '~/components/Tools/Reports/rabbits-card.vue'
  
  
  export default {
    components: { 
                  VetTable, VetCard, PostMortemTable,
                  PostMortemCard, BroilersCard, VillageChickensCard,
                  LayersCard, PigsCard, GoatsCard, 
                  QuailsCard, RabbitsCard, CattleCard
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
  .table{
    margin-top: 4rem;
  }
  </style>