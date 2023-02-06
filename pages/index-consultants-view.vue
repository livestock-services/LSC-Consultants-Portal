<template>
    <section  class="section">
  
      <h1>Consultants View</h1>


       <div class="buttons ml-5">
          
  
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
  
  
      <div class="columns is-mobile">
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
  
        <!-- v-if="this.$auth.user.email === 'detroncattle@gmail.com'" -->
          
  
          </a>
  
       <span><span class="text-consult-count mb-2"> <countTo :startVal='startVal' :endVal='totalConsults' :duration='10000'></countTo></span> <br/><span class="mx-5 my-6 totalConsults">Total Consultations between {{ startTime }} and {{ endTime }} </span></span>
        <br>
      
        <!-- <span class="text-bull"> <countTo :startVal='startVal' :endVal='Bulls' :duration='3000'></countTo> Bulls</span><br>
        <span class="text-cow"> <countTo :startVal='startVal' :endVal='Cows' :duration='3000'></countTo> Cows</span><br>
        <span class="text-heifer"> <countTo :startVal='startVal' :endVal='Heifers' :duration='3000'></countTo> Heifers</span><br>
        <span class="text-calves"> <countTo :startVal='startVal' :endVal='Calves' :duration='3000'></countTo> Calves</span> -->
        </div>
       </div>
  
    
  
       <div class="card under-treatment-card ml-5 card-body">
        
         <div class="card-body">
          <a
            class="navbar-item mx-4 mt-2"
            href="/"
          >
            <b-icon
                  icon="cow"
                  size="is-medium"
                  type="is-warning">
              </b-icon>
          </a>
  
       <span><span class="text-under-treatment-count mb-2"> <countTo :startVal='startVal' :endVal='beef' :duration='8000'></countTo></span> <br/><span class=" mx-4 text-under-treatment">Beef AI Consultations</span></span> <br>
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
  import Card from '~/components/Tools/Other/Card.vue'
  import TotalConsultsFilterModal from '~/components/modals/Filter/total-consults-filter-modal.vue'
   import countTo from 'vue-count-to';
  import {mapActions, mapGetters} from 'vuex'
  import { computed } from 'vue';
  import { api } from '~/helpers/axios-instance';
  
  export default {
    name: 'IndexPage',
    components: {
     countTo ,
      Card,
     
    },
  
    data(){
  
      var startDate = computed(()=>this.startTime)
  
        var endDate = computed(()=>this.endTime)
  
        var agros = computed(()=> this.agros)
        var beefAIs = computed(()=>this.beef)
        var fences =computed(()=> this.fences)
        var fishes = computed (()=> this.fish)
        var irrigations = computed(()=> this.irrigation)
        var nutritions = computed(()=> this.nutrition)
        var pigAIs = computed(()=> this.pigAI)
        var postMortems = computed(()=> this.PMs)
        var vets = computed(()=> this.vet)
        var waterPumps = computed(()=> this.pumps)
        
  
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
                                   this.pumps
                                  
                                   
                                   )
        
  
      return{
        isLoading:false,
        startVal: 0,
          endVal: 100,
          Bulls: 10,
          Cows:60,
          Heifers:10,
          Calves: 20,
  
          totalConsults_fields:{
                  "Consultations By Category":"consultation",
                  "no. of Consultations":"no. of Consultations",
                
                  "Start Date":"start_date",
                  "End Date":"end_date"
              },
  
              
  
              totalConsults_data:[
                  
                  {"start_date": startDate,
                   "end_date":endDate
                  },
  
                
                  
                  { 
                    "consultation":"Agronomy",
                    "no. of Consultations":agros
                  },
  
                   { "consultation":"Beef AI & Breeding",
                      "no. of Consultations":beefAIs
                  },
  
                   { "consultation":"Fencing",
                      "no. of Consultations":fences
                    },
  
                   { "consultation":"Fish",
                      "no. of Consultations":fishes
                  },
  
                   { "consultation":"Irrigation",
                      "no. of Consultations":irrigations
                    },
  
                   { "consultation":"Nutrition",
                      "no. of Consultations":nutritions
                    },
  
                   { "consultation":"Pig AI & Breeding",
                      "no. of Consultations":pigAIs
                  },
  
                   { "consultation":"Post Mortems",
                      "no. of Consultations":postMortems
                    },
  
                   { "consultation":"Vet",
                      "no. of Consultations":vets
                    },
  
                   { "consultation":"Water Pumps",
                      "no. of Consultations":waterPumps
                    },
                
                 
                 
                    { "consultation":"",
                      "no. of Consultations":""
                   },
  
                   { "consultation":"Total",
                      "no. of Consultations":totalConsults
                   },
  
                  ]
      }
    },
  
    computed: {
      //  ...mapGetters('agroData', {
      //     loading: 'loading',
      //      agros: 'allAgroRecords',
      // }),
  
      // ...mapGetters('beefAIData', {
      //     loading: 'loading',
      //     beef: 'allBeefAIRecords'
      //   }),
  
    
      //   ...mapGetters('fenceData', {
      //     loading: 'loading',
      //     fences: 'allFenceRecords'
      //   }),
  
      //   ...mapGetters('fishData', {
      //     loading: 'loading',
      //     fish: 'allFishRecords'
      //   }),
  
      //   ...mapGetters('irrigationData', {
      //     loading: 'loading',
      //     irrigation: 'allIrrigationRecords'
      //   }),
  
      //   ...mapGetters('nutritionData', {
      //     loading: 'loading',
      //     nutrition: 'allNutritionRecords'
      //   }),
  
      //   ...mapGetters('pigAIData', {
      //     loading: 'loading',
      //     pigAI: 'allPigAIRecords'
      //   }),
  
      //   ...mapGetters('pumpData', {
      //     loading: 'loading',
      //     pumps: 'allWaterPumpRecords'
      //   }),
  
      //   ...mapGetters('vetData', {
      //     loading: 'loading',
      //     vet: 'allVetRecords'
      //   }),
  
      //   ...mapGetters('vetData', {
      //     loading: 'loading',
      //     PMs: 'allPostMortemRecords'
      //   }),
  
        ...mapGetters('totalConsultsData', {
          loading: 'loading',
          totalConsults: 'allFilteredTotalConsultsRecords',
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
          endTime:'filteredTotalConsultsEndTime'
        }),
  
        
        isEmpty() {
   //  return this.calves === 0
       },
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
    // let PMs = await this.getAllPostMortemRecords();
  
 

      //this.selectPfi(this.pfis[0])
  
  //     function showNotifications(){
  //    const notification = new Notification("Your Litmas dashboard.", {
  //        body: "This section gives an overview of all your animals. More details are in the herd & records section under 'Tools' .",
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
    
     background-color: rgb(244, 172, 72); 
     /* background: url('~/assets/cow5.jpg');
    background-repeat: no-repeat;
    background-size: cover;  */
  }
  
 
  
  .cow-card {
    width: 300px;
    height:190px;
    background-color: rgb(196, 240, 126);
  }
  
 
  
  .under-treatment-card {
    width: 380px;
    height:190px;
    background-color: rgb(68, 66, 63);
  }
  
  

  .text-consult-count{
    text-align: center;
    margin-left: 20px;
    font-size: 130px;
      z-index: 2;
    color: rgb(252, 242, 223);
  }
  
  @media only screen and (min-width: 1600px) {
    
    .section{
      margin-top: 4rem;
    }

    .text-consult-count{
    text-align: center;
    margin-left: 20px;
    font-size: 130px;
      z-index: 2;
    color: rgb(252, 242, 223);
  }
  
    .cow-card{
    width: 400px;
    height:220px;
  }
  

  
  
  .total-cow-card {
    width: 830px;
    height:520px;
  }
  
  .under-treatment-card {
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
  
 
  
  .text-calf-count{
    text-align: center;
    margin-left: 20px;
    font-size: 65px;
    color: rgb(15, 82, 94);
  }
  
  
  
  
  .text-under-treatment-count{
    text-align: center;
    margin-left: 20px;
    font-size: 65px;
    color: rgb(233, 182, 16);
  }
  
 
  
  </style>
  