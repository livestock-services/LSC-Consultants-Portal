<template>
    <div>
      <b-tabs class="table" v-model="activeTab">
           
        <b-tab-item label="Agro">
            <b-tabs >
                 
                 <b-tab-item label="Agronomy Consultation" >
                      <AgroTable/>
                  </b-tab-item>

                  <b-tab-item label="Records">
               <AgroCard/>
              </b-tab-item>

          

      </b-tabs>
        </b-tab-item>


        <b-tab-item label="Vet">
            <b-tabs >
                <b-tab-item label="Consultations">
                <b-tabs>
                <b-tab-item label="Consultations">
                    <VetTable/>
                </b-tab-item>

                <b-tab-item label="Records">
                    <VetCard/>
                </b-tab-item>

                </b-tabs>
                </b-tab-item>  




                <b-tab-item label="Post Mortems">
                    <b-tabs>
                <b-tab-item label="Consultations">
                    <PostMortemTable/>
                </b-tab-item>

                <b-tab-item label="Records">
                    <b-tabs>

                    <!-- <b-tab-item label="Total Post Mortems">
                    <PostMortemCard/>
                    </b-tab-item> -->

                    <b-tab-item label="Village Chickens">
                    <VillageChickensCard/>
                    </b-tab-item>
                    <b-tab-item label="Broilers">
                    <BroilersCard/>
                    </b-tab-item>
                    <b-tab-item label="Layers">
                    <LayersCard/>
                    </b-tab-item>
                    <b-tab-item label="Pigs">
                    <PigsCard/>
                    </b-tab-item>
                    <b-tab-item label="Goats">
                    <GoatsCard/>
                    </b-tab-item>
                    <b-tab-item label="Quails">
                    <QuailsCard/>
                    </b-tab-item>
                    <b-tab-item label="Rabbits">
                    <RabbitsCard/>
                    </b-tab-item>
                    <b-tab-item label="Cattle">
                    <CattleCard/>
                    </b-tab-item>
                    </b-tabs>

                </b-tab-item>

                </b-tabs>
                    
                </b-tab-item>
            </b-tabs>
            
        </b-tab-item>



       
  

  
         
        <b-tab-item label="Nutrition">
            <b-tabs>
              <b-tab-item label="Consultations">
                <NutritionTable/>
              </b-tab-item>

              <b-tab-item label="Records">
               <NutritionCard/>
              </b-tab-item>

            </b-tabs>
          </b-tab-item> 
          
          
          <b-tab-item label="AI & Breeding">
                <b-tabs>
                  <b-tab-item label="Consultation" >
                        <BeefAiTable/>
                    </b-tab-item>

                    <b-tab-item label="Records" >
                       <BeefAiCard/>
                    </b-tab-item>
                </b-tabs>
               </b-tab-item> 
               
               
            <b-tab-item label="Fence">
              
              <b-tabs>
                  
                    <b-tab-item label="Fence Consultation" >
                    <FenceTable/>
                    </b-tab-item>

                    <b-tab-item label="Records" >
                        <FenceCard/>
                    </b-tab-item>
                    

              </b-tabs>
            </b-tab-item >

            <b-tab-item label="Fish">
              <b-tabs>
                <b-tab-item label="Fish Consultation" >
                      <FishTable/>
                  </b-tab-item>

                  <b-tab-item label="Records" >
                       <FishCard/>
                    </b-tab-item>
              </b-tabs>
            </b-tab-item>
              
             
          <b-tab-item label="General">
            <b-tabs >
                 
                 <b-tab-item label="General Consultation" >
                      <GeneralTable/>
                  </b-tab-item>

                  <b-tab-item label="Records">
               <AgroCard/>
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
  import AgroTable from '~/components/tables/Agro/agro-table.vue'
  import AgroCard from '~/components/Tools/Reports/agro-card.vue'
import GeneralTable from '~/components/tables/General/general-table.vue';
import NutritionTable from '~/components/tables/AnimalNutrition/nutrition-table.vue'
import NutritionCard from '~/components/Tools/Reports/animal-nutrition-card.vue'

import BeefAiTable from '~/components/tables/BeefAI/beef-ai-table.vue';
import BeefAiCard from '~/components/Tools/Reports/beef-ai-card.vue';

import FenceTable from '~/components/tables/Fencing/fencing-table.vue'
import FenceCard from '~/components/Tools/Reports/fence-card.vue';
import FishTable from '~/components/tables/Fish/fish-table.vue'
import FishCard from '~/components/Tools/Reports/fish-card.vue';
  
  
  export default {
    components: { 
                  VetTable, VetCard, PostMortemTable,
                  PostMortemCard, BroilersCard, VillageChickensCard,
                  LayersCard, PigsCard, GoatsCard, 
                  QuailsCard, RabbitsCard, CattleCard,AgroTable, AgroCard,
        GeneralTable, NutritionTable, NutritionCard, BeefAiTable, BeefAiCard,
         FenceTable, FenceCard, FishTable, FishCard
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