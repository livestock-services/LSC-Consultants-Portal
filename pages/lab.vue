<template>
    <div>
      <b-tabs class="table" v-model="activeTab">
                   
                  <b-tab-item label="DATA FILES">
                      <b-tabs>
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
                      <b-tab-item label="No. 3 Meal (NM)" >
                        <No3MealTable/>
                    </b-tab-item>
  
                    <b-tab-item label="Soya (FF)">
                       <SoyaFFTable/>
                    </b-tab-item>

                    <b-tab-item label="Soya (SE)" >
                        <SoyaSETable/>
                    </b-tab-item>

                    <b-tab-item label="Soya (ME)" >
                        <SoyaMETable/>
                    </b-tab-item>
  
                    <b-tab-item label="Sunflower (SC)">
                       <SunflowerSCTable/>
                    </b-tab-item>

                    
                    </b-tabs>
                   </b-tab-item>
                      </b-tabs>
                  </b-tab-item>

                  <b-tab-item label="RECEIVING">
                    <b-tabs label="Lab Submissions" >
                          <b-tab-item label="Biological Submissions">
                            <BioSubmissionsTable/>
                          </b-tab-item>

                          <b-tab-item label="Feed Submissions">
                            <FeedSubmissionsTable/>
                          </b-tab-item>

                      </b-tabs>
                  </b-tab-item>
      
            
  
        </b-tabs>
  
    </div>
  </template>
  
  <script>

import SampleInfoTable from '~/components/tables/Lab/Biological Data/sample-info-table.vue';
import SubmissionsTable from '~/components/tables/Lab/Biological Data/submissions-table.vue';
import No3MealTable from '~/components/tables/Lab/Feed Data/no-3-meal-table.vue';
import SoyaFFTable from '~/components/tables/Lab/Feed Data/soya-ff-table.vue';
import SoyaMETable from '~/components/tables/Lab/Feed Data/soya-me-table.vue';
import SoyaSETable from '~/components/tables/Lab/Feed Data/soya-se-table.vue';
import SunflowerSCTable from '~/components/tables/Lab/Feed Data/sunflower-sc-table.vue';
import BioSubmissionsTable from '~/components/tables/Lab/Biological Data/bio-submissions-table.vue'
import FeedSubmissionsTable from '~/components/tables/Lab/Feed Data/feed-submissions-table.vue'
  export default {
    components: { SampleInfoTable, SubmissionsTable, No3MealTable,
                  SoyaFFTable,SoyaMETable,SoyaSETable,SunflowerSCTable, BioSubmissionsTable, FeedSubmissionsTable
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