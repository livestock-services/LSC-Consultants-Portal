<template>
  <section  class="section main-section">

    
     <div v-if="SignedInUser.role === 'Admin' || SignedInUser.role === 'Manager'"  class="buttons ml-5">
        

        <b-tooltip label="Filter Consultations by date range" type="is-dark">
       <b-button class="mx-2" icon-left="filter" type="is-warning" @click="filter">Filter</b-button>
       </b-tooltip>

      <b-tooltip label="Export to Excel" type="is-dark">

       <download-excel
        :data="totalConsults_data" 
        :fields="totalConsults_fields"
        worksheet="Total Consultations Worksheet"
        type="xls"
        name = "Total Consultations.xls">
       
       <b-button class="mx-2" icon-left="export" type="is-success ">Excel</b-button>
       <img src="download_icon.png" />
     </download-excel>   
      </b-tooltip>

     </div> 


    <div  v-if="SignedInUser.role  === 'Admin' || SignedInUser.role === 'Manager'"  class="managers">
      <div class="columns is-mobile">
     <div class="card total-consult-card  card-body">
      
       <div  class="card-body">
        <a
          class="navbar-item mx-4"
          href="/"
        >
          <b-icon
                icon="home"
                size="is-large"
                type="is-dark">
            </b-icon>

      <!-- v-if="this.$auth.user.email === 'detroncattle@gmail.com'" -->
         name:{{ SignedInUser.name}} <br/>
          role: {{ SignedInUser.role }}

        </a>

     <span><span class="text-cattle-count mb-2"> <countTo :startVal='startVal' :endVal='totalConsults' :duration='10000'></countTo></span><span class="totalConsults">Total Consultations between {{ startTime }} and {{ endTime }} </span></span>
      <br>
    
      <!-- <span class="text-bull"> <countTo :startVal='startVal' :endVal='Bulls' :duration='3000'></countTo> Bulls</span><br>
      <span class="text-cow"> <countTo :startVal='startVal' :endVal='Cows' :duration='3000'></countTo> Cows</span><br>
      <span class="text-heifer"> <countTo :startVal='startVal' :endVal='Heifers' :duration='3000'></countTo> Heifers</span><br>
      <span class="text-calves"> <countTo :startVal='startVal' :endVal='Calves' :duration='3000'></countTo> Calves</span> -->
      </div>
     </div>

  

    
   



      
    </div>
    

     <div class="columns my-4 is-mobile">
    
        <div class="card bulls-card  card-body">
      
       <div class="card-body">
        <a
          class="navbar-item mx-4 mt-2"
          href="/"
        >
          <b-icon
                icon="doctor"
                size="is-medium"
                type="is-light">
            </b-icon>
        </a>

      

     <span><span class="text-bulls-count mb-2"> <countTo :startVal='startVal' :endVal='vet' :duration='7000'></countTo></span> <br/><span class=" mx-4 text-bulls">Vet Consultations</span> </span> <br>
      <!-- <span class="text-bull"> <countTo :startVal='startVal' :endVal='Bulls' :duration='3000'></countTo> Bulls</span><br>
      <span class="text-cow"> <countTo :startVal='startVal' :endVal='Cows' :duration='3000'></countTo> Cows</span><br>
      <span class="text-heifer"> <countTo :startVal='startVal' :endVal='Heifers' :duration='3000'></countTo> Heifers</span><br>
      <span class="text-calves"> <countTo :startVal='startVal' :endVal='Calves' :duration='3000'></countTo> Calves</span> -->
      </div>
     </div>

      <div class="card cow-card ml-5 card-body">
      
       <div class="card-body px-5">
        <a
          class="navbar-item mx-4 mt-2"
          href="/"
        >
          <b-icon
                icon="wall"
                size="is-medium"
                type="is-dark">
            </b-icon>
        </a>

     <span><span class="text-cows-count mb-2"> <countTo :startVal='startVal' :endVal='fences' :duration='5000'></countTo></span> <br/><span class=" mx-4 text-cows">Fence Consultations</span></span> <br>
      <!-- <span class="text-bull"> <countTo :startVal='startVal' :endVal='Bulls' :duration='3000'></countTo> Bulls</span><br>
      <span class="text-cow"> <countTo :startVal='startVal' :endVal='Cows' :duration='3000'></countTo> Cows</span><br>
      <span class="text-heifer"> <countTo :startVal='startVal' :endVal='Heifers' :duration='3000'></countTo> Heifers</span><br>
      <span class="text-calves"> <countTo :startVal='startVal' :endVal='Calves' :duration='3000'></countTo> Calves</span> -->
      </div>
     </div>
    


      <div class="card bulling-heifers-card ml-5 card-body">
      
       <div class="card-body">
        <a
          class="navbar-item mx-4 mt-2"
          href="/"
        >
           <b-icon
                icon="fish"
                size="is-medium"
                type="is-primary ">
            </b-icon>
        </a>

     <span><span class="text-heifers-count mb-2"> <countTo :startVal='startVal' :endVal='fish' :duration='6000'></countTo></span> <br/><span class="text-bulling-heifers">Fish Consultations</span></span> <br>
      <!-- <span class="text-bull"> <countTo :startVal='startVal' :endVal='Bulls' :duration='3000'></countTo> Bulls</span><br>
      <span class="text-cow"> <countTo :startVal='startVal' :endVal='Cows' :duration='3000'></countTo> Cows</span><br>
      <span class="text-heifer"> <countTo :startVal='startVal' :endVal='Heifers' :duration='3000'></countTo> Heifers</span><br>
      <span class="text-calves"> <countTo :startVal='startVal' :endVal='Calves' :duration='3000'></countTo> Calves</span> -->
      </div>
     </div>
    

     


      
    </div>



     <div class="columns my-4 is-mobile">
    
        <div class="card yearlings-card  card-body">
      
       <div class="card-body">
        <a
          class="navbar-item mx-4 mt-2"
          href="/"
        >
          <b-icon
                icon="water"
                size="is-medium"
                type="is-info">
            </b-icon>
        </a>

     <span><span class="text-yearlings-count mb-2"> <countTo :startVal='startVal' :endVal='irrigation + pumps' :duration='5000'></countTo></span> <br/><span class=" mx-4 text-yearlings"> Irrigation Consultations</span></span> <br>
      <!-- <span class="text-bull"> <countTo :startVal='startVal' :endVal='Bulls' :duration='3000'></countTo> Bulls</span><br>
      <span class="text-cow"> <countTo :startVal='startVal' :endVal='Cows' :duration='3000'></countTo> Cows</span><br>
      <span class="text-heifer"> <countTo :startVal='startVal' :endVal='Heifers' :duration='3000'></countTo> Heifers</span><br>
      <span class="text-calves"> <countTo :startVal='startVal' :endVal='Calves' :duration='3000'></countTo> Calves</span> -->
      </div>
     </div>

      <div class="card weaners-card ml-5 card-body">
      
       <div class="card-body px-5">
        <a
          class="navbar-item mx-4 mt-2"
          href="/"
        >
          <b-icon
                icon="sack"
                size="is-medium"
                type="is-light">
            </b-icon>
        </a>

     <span><span class="text-weaners-count mb-2"> <countTo :startVal='startVal' :endVal='nutrition' :duration='5000'></countTo></span> <br/><span class=" mx-4 text-weaners">Nutrition Consultations</span></span> <br>
      <!-- <span class="text-bull"> <countTo :startVal='startVal' :endVal='Bulls' :duration='3000'></countTo> Bulls</span><br>
      <span class="text-cow"> <countTo :startVal='startVal' :endVal='Cows' :duration='3000'></countTo> Cows</span><br>
      <span class="text-heifer"> <countTo :startVal='startVal' :endVal='Heifers' :duration='3000'></countTo> Heifers</span><br>
      <span class="text-calves"> <countTo :startVal='startVal' :endVal='Calves' :duration='3000'></countTo> Calves</span> -->
      </div>
     </div>
    


      <div class="card calf-card ml-5 card-body">
      
       <div class="card-body">
        <a
          class="navbar-item mx-4 mt-2"
          href="/"
        >
           <b-icon
                icon="needle"
                size="is-medium"
                type="is-info ">
            </b-icon>
        </a>

     <span><span class="text-calf-count mb-2"> <countTo :startVal='startVal' :endVal='pigAI + beef' :duration='6000'></countTo></span> <br/><span class=" mx-4 text-calf"> AI Consultations</span></span> <br>
      <!-- <span class="text-bull"> <countTo :startVal='startVal' :endVal='Bulls' :duration='3000'></countTo> Bulls</span><br>
      <span class="text-cow"> <countTo :startVal='startVal' :endVal='Cows' :duration='3000'></countTo> Cows</span><br>
      <span class="text-heifer"> <countTo :startVal='startVal' :endVal='Heifers' :duration='3000'></countTo> Heifers</span><br>
      <span class="text-calves"> <countTo :startVal='startVal' :endVal='Calves' :duration='3000'></countTo> Calves</span> -->
      </div>
     </div>


    

     


      
    </div>

    <div class="columns my-4 is-mobile">
    
    <div class="card agro-card  card-body">
  
   <div class="card-body">
    <a
      class="navbar-item mx-4 mt-2"
      href="/"
    >
      <b-icon
            icon="flower"
            size="is-medium"
            type="is-primary">
        </b-icon>
    </a>

 <span><span class="text-yearlings-count mb-2"> <countTo :startVal='startVal' :endVal='agros' :duration='5000'></countTo></span> <br/><span class=" mx-4 text-yearlings"> Agronomy Consultations</span></span> <br>
  <!-- <span class="text-bull"> <countTo :startVal='startVal' :endVal='Bulls' :duration='3000'></countTo> Bulls</span><br>
  <span class="text-cow"> <countTo :startVal='startVal' :endVal='Cows' :duration='3000'></countTo> Cows</span><br>
  <span class="text-heifer"> <countTo :startVal='startVal' :endVal='Heifers' :duration='3000'></countTo> Heifers</span><br>
  <span class="text-calves"> <countTo :startVal='startVal' :endVal='Calves' :duration='3000'></countTo> Calves</span> -->
  </div>
 </div>

  <div class="card water-pump-card ml-5 card-body">
  
   <div class="card-body px-5">
    <a
      class="navbar-item mx-4 mt-2"
      href="/"
    >
      <b-icon
            icon="test-tube"
            size="is-medium"
            type="is-light">
        </b-icon>
    </a>

 <span><span class="text-weaners-count mb-2"> <countTo :startVal='startVal' :endVal='labs' :duration='5000'></countTo></span> <br/><span class=" mx-4 text-weaners">Lab Submissions</span></span> <br>
  <!-- <span class="text-bull"> <countTo :startVal='startVal' :endVal='Bulls' :duration='3000'></countTo> Bulls</span><br>
  <span class="text-cow"> <countTo :startVal='startVal' :endVal='Cows' :duration='3000'></countTo> Cows</span><br>
  <span class="text-heifer"> <countTo :startVal='startVal' :endVal='Heifers' :duration='3000'></countTo> Heifers</span><br>
  <span class="text-calves"> <countTo :startVal='startVal' :endVal='Calves' :duration='3000'></countTo> Calves</span> -->
  </div>
 </div>



  <div class="card post-mortem-card ml-5 card-body">
  
   <div class="card-body">
    <a
      class="navbar-item mx-4 mt-2"
      href="/"
    >
       <b-icon
            icon="skull"
            size="is-medium"
            type="is-info ">
        </b-icon>
    </a>

 <span><span class="text-calf-count mb-2"> <countTo :startVal='startVal' :endVal='PMs' :duration='6000'></countTo></span> <br/><span class=" mx-4 text-calf">Post Mortems</span></span> <br>
  <!-- <span class="text-bull"> <countTo :startVal='startVal' :endVal='Bulls' :duration='3000'></countTo> Bulls</span><br>
  <span class="text-cow"> <countTo :startVal='startVal' :endVal='Cows' :duration='3000'></countTo> Cows</span><br>
  <span class="text-heifer"> <countTo :startVal='startVal' :endVal='Heifers' :duration='3000'></countTo> Heifers</span><br>
  <span class="text-calves"> <countTo :startVal='startVal' :endVal='Calves' :duration='3000'></countTo> Calves</span> -->
  </div>
 </div>




 


  
</div>

    </div>

   


<div v-if="SignedInUser.role !== 'Admin' & SignedInUser.role !== 'Manager'" class="columns is-mobile">

       <div class="card total-cow-card  card-body">
        
         <div  class="card-body">
          <a
            class="navbar-item mx-4"
            href="/"
          >
            <b-icon
                  icon="home"
                  size="is-large"
                  type="is-dark">
              </b-icon>

              <Greeting/> <span class="mx-1" style="font-size: 20px;color: #333;">{{ SignedInUser.name }}</span>
  
       
         
  
          </a>
  
          

        </div>
       </div>
  
    
  
       <div class="card consultants-card ml-5 card-body">
        
         <div class="card-body">
          <a
            class="navbar-item mx-4 mt-2"
            href="/"
          >
            <b-icon
                  icon="clock"
                  size="is-medium"
                  type="is-info">
              </b-icon>
          </a>
          <h2 class="ml-4">Welcome to your dashboard. <br/> Time is:</h2>
       <span><span class="text-under-treatment-count mb-2"> <digital-clock :blink="true" :displaySeconds="true"/> </span> <br/><span class="tag is-info is-light mx-4 text-under-treatment">Logged in as: {{ this.$auth.user.email }}  </span></span> <br>
      
        <!-- <span class="text-bull"> <countTo :startVal='startVal' :endVal='Bulls' :duration='3000'></countTo> Bulls</span><br>
        <span class="text-cow"> <countTo :startVal='startVal' :endVal='Cows' :duration='3000'></countTo> Cows</span><br>
        <span class="text-heifer"> <countTo :startVal='startVal' :endVal='Heifers' :duration='3000'></countTo> Heifers</span><br>
        <span class="text-calves"> <countTo :startVal='startVal' :endVal='Calves' :duration='3000'></countTo> Calves</span> -->
        </div>
       </div>
      
      
     
  
  
  
        
      </div>

    

    
     
   

  </section>
</template>

<script>
import DigitalClock from "vue-digital-clock";
import Greeting from "~/components/Tools/Other/Greeting.vue"
import Card from '~/components/Tools/Other/Card.vue'
import TotalConsultsFilterModal from '~/components/modals/Filter/total-consults-filter-modal.vue'
 import countTo from 'vue-count-to';
import {mapActions, mapGetters} from 'vuex'
import { computed } from 'vue';


export default {
  name: 'IndexPage',
  components: {
   countTo ,
    Card,
    DigitalClock,
    Greeting
   
   
  },

  data(){


    var SignedInUser = computed(()=>this.user)

    var startDate = computed(()=>this.startTime)

      var endDate = computed(()=>this.endTime)

      var agro = computed(()=> this.agros)
      var beefAIs = computed(()=>this.beef)
      var fences =computed(()=> this.fences)
      var fishes = computed (()=> this.fish)
      var irrigations = computed(()=> this.irrigation)
      var nutritions = computed(()=> this.nutrition)
      var pigAIs = computed(()=> this.pigAI)
      var postMortems = computed(()=> this.PMs)
      var vets = computed(()=> this.vet)
      var waterPumps = computed(()=> this.pumps)
      var lab = computed(()=> this.labs)
      

      var totalConsults =  computed(
                            ()=> this.agros +
                                 this.beef+
                                 this.fences+
                                 this.fish+
                                 this.irrigation+
                                 this.nutrition+
                                 this.pigAI+
                                 this.PMs+
                                 this.vet+
                                 this.pumps+
                                 this.labs
                                
                                 
                                 )
      

    return{
    
      startVal: 0,
        endVal: 100,
        Bulls: 10,
        Cows:60,
        Heifers:10,
        Calves: 20,
        
        totalConsults_fields:{
                "Consultations By Category":"consultation",
                "no. of Consultations":"consultations",
              
                "Start Date":"start_date",
                "End Date":"end_date"
            },

            SignedInUser,

            

            totalConsults_data:[
                
                {"start_date": startDate,
                 "end_date":endDate
                },

              
                
                { 
                  "consultation":"Agronomy",
                  "consultations":agro
                },

                 { "consultation":"Beef AI & Breeding",
                    "consultations":beefAIs
                },

                 { "consultation":"Fencing",
                    "consultations":fences
                  },

                 { "consultation":"Fish",
                    "consultations":fishes
                },

                 { "consultation":"Irrigation",
                    "consultations":irrigations
                  },

                  { 
                  "consultation":"Lab Submissions",
                  "consultations":lab
                },

                 { "consultation":"Nutrition",
                    "consultations":nutritions
                  },

                 { "consultation":"Pig AI & Breeding",
                    "consultations":pigAIs
                },

                 { "consultation":"Post Mortems",
                    "consultations":postMortems
                  },

                 { "consultation":"Vet",
                    "consultations":vets
                  },

                 { "consultation":"Water Pumps",
                    "consultations":waterPumps
                  },
              
               
               
                  { "consultation":"",
                    "consultations":""
                 },

                 { "consultation":"Total",
                    "consultations":totalConsults
                 },

                ]
    }
  },

  computed: {

      ...mapGetters('totalConsultsData', {
        loading: 'loading',
        totalConsults: 'allFilteredTotalConsultsRecords',
        labs:'allFilteredTotalLabSubmissionsRecords',
        agros:'allFilteredTotalAgroRecords',
        beef:'allFilteredTotalBeefAIRecords',
        fences:'allFilteredTotalFenceRecords',
        fish:'allFilteredTotalFishRecords',
        irrigation:'allFilteredTotalIrrigationRecords',
        nutrition:'allFilteredTotalNutritionRecords',
        pigAI:'allFilteredTotalPigAIRecords',
        pumps:'allFilteredTotalWaterPumpRecords',
        vet:'allFilteredTotalVetRecords',
        PMs:'allFilteredTotalPostMortemsRecords',
        startTime:'filteredTotalConsultsStartTime',
        endTime:'filteredTotalConsultsEndTime',
        
      }),

      ...mapGetters('users', {
          loading: 'loading',
          users: 'allUsers',
          user:'loggedInUser',

          
        }),

      
        
        


  },

  

// COMPONENT THAT GETS ALL THE FILTERED DATA. THIS IS WHERE WE GET ALL DASHBOARD DATA FROM
  async created() {
  let agros = await this.getAllAgroRecords();
  let beef = await this.getAllBeefAIRecords();

  let fence = await this.getAllFenceRecords();
  let fish = await this.getAllFishRecords();
  let irrigation = await this.getAllIrrigationRecords();
  let nutrition = await this.getAllNutritionRecords();
  let pigAI = await this.getAllPigAIRecords();
  let pumps = await this.getAllWaterPumpRecords();
  let vet = await this.getAllVetRecords();
  
  let users = await this.getAllUsers();
  console.log(users)

  },


  methods:{
     ...mapActions('users', ['getAllUsers']),

      ...mapActions('agroData', ['getAllAgroRecords']),

      ...mapActions('beefAIData', ['getAllBeefAIRecords']),



      ...mapActions('fenceData', ['getAllFenceRecords']),

      ...mapActions('fishData', ['getAllFishRecords']),

      ...mapActions('irrigationData', ['getAllIrrigationRecords']),

      ...mapActions('nutritionData', ['getAllNutritionRecords']),

      ...mapActions('pigAIData', ['getAllPigAIRecords']),

      ...mapActions('pumpData', ['getAllWaterPumpRecords']),

      ...mapActions('vetData', ['getAllVetRecords', ' getAllPostMortemRecords']),

      filter() {
        
        setTimeout(() => {
          this.$buefy.modal.open({
            parent: this,
            component: TotalConsultsFilterModal,
            hasModalCard: true,
            trapFocus: true,
            canCancel: ['x'],
            destroyOnHide: true,
            customClass: '',
            onCancel: () => {
              this.$buefy.toast.open({
                message: `Filter Snapshot closed!`,
                duration: 5000,
                position: 'is-top',
                type: 'is-info',
              })
            },
          })
        }, 300)
      },

     
  }
}
</script>

<style>

.section{
    margin-top: 4rem;
    background-color: rgb(238, 250, 232);
    padding: 2rem
  }

  .text-consult-count{
    text-align: center;
    margin-left: 20px;
    font-size: 130px;
      z-index: 2;
    color: rgb(252, 242, 223);
  }
  

  .totalConsults{
  color: aliceblue;
  font-size: 18px
}

.user{
  color: rgb(66, 151, 231);
}

.total-cow-card{
  width: 520px;
  height:390px;
  
   /* background-color: rgb(244, 172, 72);  */
  background: url('~/assets/images/LSC2.png');
  background-repeat: no-repeat;
  background-size: cover;  
}


.total-consult-card{
  width: 945px;
  height:190px;
  
   background-color: rgb(244, 172, 72); 
   /* background: url('~/assets/cow5.jpg');
  background-repeat: no-repeat;
  background-size: cover;  */
}

/* .total-cow-card:hover{
  width: 300px;
  height:170px;
   
   background-color: rgb(188, 197, 227);
  /* background: url('~/assets/cow5.jpg');
  background-repeat: no-repeat;
  background-size: cover; 
} */

.mortalities-card{
  width: 300px;
  height:190px;
  background-color: rgb(245, 206, 188);
}

.heifer-card{
  width: 300px;
  height:190px;
  background-color: rgb(210, 188, 245);
}

.calf-card{
  width: 300px;
  height:190px;
  background-color: rgb(188, 224, 245);
}

.post-mortem-card{
  width: 300px;
  height:190px;
  background-color: rgb(253, 159, 145);
}

.water-pump-card{
  width: 300px;
  height:190px;
  background-color: rgb(187, 136, 181);
}

.agro-card{
  width: 300px;
  height:190px;
  background-color: rgb(253, 235, 145);
}


.cow-card {
  width: 300px;
  height:190px;
  background-color: rgb(196, 240, 126);
}

.bulls-card {
  width: 300px;
  height:190px;
  background-color: rgb(52, 124, 234);
}

.under-treatment-card {
  width: 300px;
  height:190px;
  background-color: rgb(214, 244, 241);
}

.consultants-card {
  width: 360px;
  height:260px;
  background-color: rgb(214, 244, 241);
}


.weaners-card{
  width: 300px;
  height:190px;
  background-color: rgb(104, 201, 164);
}

.yearlings-card {
  width: 300px;
  height:190px;
  background-color: rgb(226, 197, 250);
}

.bulling-heifers-card {
  width: 300px;
  height:190px;
  background-color: rgb(240, 156, 170);
} 





@media only screen and (min-width: 1600px) {
  
  .section{
    margin-top: 5rem;
  }

  .cow-card{
  width: 400px;
  height:220px;
}

 .calf-card{
  width: 400px;
  height:220px;
}

.post-mortem-card{
  width: 400px;
  height:220px;
 
}

.water-pump-card{
  width: 400px;
  height:220px;
 
}

.agro-card{
  width: 400px;
  height:220px;
 
}

.mortalities-card{
  width: 400px;
  height:220px;
}

.heifer-card{
  width: 400px;
  height:220px;
  
}

.bulls-card {
  width: 400px;
  height:220px;
 
}

.total-cow-card {
  width: 820px;
  height:520px;
}

.total-consult-card{
  width: 1250px;
  height:220px;
  
  
}

.under-treatment-card {
  width: 400px;
  height:220px;
  margin-right: 2rem;
  
}

.consultants-card{
  width: 400px;
  height:260px;
}

.weaners-card{
  width: 400px;
  height:220px;
 
}

.yearlings-card {
  width: 400px;
  height:220px;
 
}

.bulling-heifers-card {
  width: 400px;
  height:220px;
 
}

.totalConsults{
  color: aliceblue;
  font-size: 24px
}

}

.ram{
  width: auto;
  height: auto;
  margin: 10px;
}

.cow{
  width: auto;
  height: auto;
  text-decoration: none;
  margin-top: 70px;
  margin-left: 70px;
  background: none;
}

.text-cattle-count{
  text-align: center;
  margin-left: 20px;
  margin-top: 50px;
  font-size: 65px;
    z-index: 2;
  color: rgb(21, 21, 21);
}

.text-mortality-count{
  text-align: center;
  margin-left: 20px;
  font-size: 65px;
  color: rgb(141, 6, 6);
}

.text-heifers-count{
  text-align: center;
  margin-left: 20px;
  font-size: 65px;
  color: rgb(81, 22, 42);
}

.text-bulls-count{
   text-align: center;
  margin-left: 20px;
  font-size: 65px;
  color: rgb(236, 241, 249);
}

.text-cows-count{
   text-align: center;
  margin-left: 20px;
  font-size: 65px;
  color: rgb(92, 94, 96);
}



.text-calf-count{
  text-align: center;
  margin-left: 20px;
  font-size: 65px;
  color: rgb(15, 82, 94);
}




.text-weaners-count{
  text-align: center;
  margin-left: 20px;
  font-size: 65px;
  color: rgb(29, 63, 44);
}

.text-yearlings-count{
  text-align: center;
  margin-left: 20px;
  font-size: 65px;
  color: rgb(61, 23, 86);
}

.text-under-treatment-count{
  text-align: center;
  margin-left: 20px;
  font-size: 65px;
  color: rgb(7, 38, 12);
}

.totalConsults-text{
  margin-top: 80px;
}

.text-cattle{
  font-size: 18px;
  margin-top: 4px;
}

.text-under-treatment{
    font-size: 18px;
  margin-top: 2px;
  color: rgb(19, 62, 28);
  
}

.text-mortalities{
    font-size: 18px;
  margin-top: 4px;

}

.text-calves{
    font-size: 18px;
  margin-top: 4px;
  color: black;

}


.text-weaners{
    font-size: 18px;
  margin-top: 4px;
   color: rgb(245, 249, 221);
  
}


.text-bulls{
  text-align: center;
  margin-left: 20px;
  font-size: 18px;
  color: rgb(231, 236, 243);
}

.text-cows{
  text-align: center;
  margin-left: 20px;
  font-size: 18px;
  color: rgb(39, 41, 33);
}
.text-bulling-heifers{
  text-align: center;
  margin-left: 20px;
  font-size: 18px;
  color: rgb(108, 28, 50);
}

.text-calves{
  text-align: center;
  margin-left: 20px;
  font-size: 18px;
  color: rgb(82, 236, 141);
}


</style>