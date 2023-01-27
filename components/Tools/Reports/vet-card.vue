<template>
  
  <div class="column">
      <div class="card">
        <header class="card-header footy my-4">
          <h1 class="card-header-title  header-text">
           Vet Consultations between <span class="tag is-info is-light"> {{ startTime }} </span> and <span class="tag is-info is-light"> {{ endTime }} </span>
          </h1>
        </header>

        <div class="buttons ml-5">
        

        <b-tooltip label="Filter Consultations by date range" type="is-dark">
       <b-button class="mx-2" icon-left="filter" type="is-warning" @click="filter">Filter</b-button>
       </b-tooltip>

      <b-tooltip label="Export to Excel" type="is-dark">

       <download-excel
        :data="vet_data" 
        :fields="vet_fields"
        worksheet="Vet Worksheet"
        type="xls"
        name = "Vet Consultations.xls">
       
       <b-button class="mx-2" icon-left="export" type="is-success ">Excel</b-button>
       <img src="download_icon.png" />
     </download-excel>   
      </b-tooltip>

     </div>

        <div class="card-content">
            <div class="columns is-mobile">
     <div class="card cow-card  card-body">
      
       <div  class="card-body my-4 mx-4">
        <a
          class="navbar-item"
          href="/"
        >
          <b-icon
                icon="cow"
                size="is-medium"
                type="is-dark">
            </b-icon>

      <!-- v-if="this.$auth.user.email === 'detroncattle@gmail.com'" -->
        

        </a>

     <span><span class=" mb-2"></span>
     <span class="text-cattle">Cattle</span></span> <br>
            <div class="mt-4">
                <h3>Total:<countTo :startVal='startVal' :endVal='cattle' :duration='20000'></countTo></h3>
            </div>
      </div>
     </div>

      <div class="card cow-card ml-5 card-body">
      
       <div class="card-body  my-4 mx-4">
        <a
          class="navbar-item"
          href="/"
        >
          <b-icon
                icon="cow"
                size="is-medium"
                type="is-dark">
            </b-icon>
        </a>

     <span><span class="mb-2"></span>
     <span class="">Goats</span></span> <br>
            <div class="mt-4">
                <h3>Total:<countTo :startVal='startVal' :endVal='goats' :duration='20000'></countTo></h3>
            </div>
      </div>
     </div>

     <div class="card cow-card ml-5 card-body">
      
       <div class="card-body my-4 mx-4">
        <a
          class="navbar-item"
          href="/"
        >
          <b-icon
                icon="sheep"
                size="is-medium"
                type="is-dark">
            </b-icon>
        </a>

     <span><span class=" mb-2"></span>
     <span class="t">Sheep</span></span> <br>
            <div class="mt-4">
                <h3>Total:<countTo :startVal='startVal' :endVal='sheep' :duration='20000'></countTo></h3>
            </div>
      </div>
     </div>
    
    
   



      
             </div>

             <div class="columns my-4 is-mobile">
     <div class="card cow-card  card-body">
      
       <div  class="card-body my-4 mx-4">
        <a
          class="navbar-item"
          href="/"
        >
          <b-icon
                icon="pig"
                size="is-medium"
                type="is-dark">
            </b-icon>

      <!-- v-if="this.$auth.user.email === 'detroncattle@gmail.com'" -->
        

        </a>

     <span><span class="mb-2"></span>
     <span class="">Pigs</span></span> <br>
            <div class="mt-4">
                <h3>Total:<countTo :startVal='startVal' :endVal='pigs' :duration='20000'></countTo></h3>
            </div>
      </div>
     </div>

      <div class="card cow-card ml-5 card-body">
      
       <div class="card-body my-4 mx-4">
        <a
          class="navbar-item"
          href="/"
        >
          <b-icon
                icon="egg"
                size="is-medium"
                type="is-dark">
            </b-icon>
        </a>

     <span><span class=" mb-2"></span>
     <span class="">Poultry</span></span> <br>
            <div class="mt-4">
                <h3>Total:<countTo :startVal='startVal' :endVal='poultry' :duration='20000'></countTo></h3>
            </div>
      </div>
     </div>

     <div class="card cow-card ml-5 card-body">
      
       <div class="card-body my-4 mx-4">
        <a
          class="navbar-item"
          href="/"
        >
          <b-icon
                icon="cat"
                size="is-medium"
                type="is-dark">
            </b-icon>
        </a>

     <span><span class=" mb-2"></span>
     <span class="">Dogs & Cats</span></span> <br>
            <div class="mt-4">
                <h3>Total:<countTo :startVal='startVal' :endVal='dogsAndCats' :duration='20000'></countTo></h3>
            </div>
      </div>
     </div>
    
    
   



      
            </div>


            <div class="columns my-4 is-mobile">
            <div class="card cow-card  card-body">
            
            <div  class="card-body my-4 mx-4">
                <a
                class="navbar-item"
                href="/"
                >
                <b-icon
                        icon="rabbit"
                        size="is-medium"
                        type="is-dark">
                    </b-icon>

            <!-- v-if="this.$auth.user.email === 'detroncattle@gmail.com'" -->
                

                </a>

            <span><span class=" mb-2"></span>
            <span class="text-cattle">Rabbits</span></span> <br>
                    <div class="mt-4">
                        <h3>Total:<countTo :startVal='startVal' :endVal='rabbits' :duration='20000'></countTo></h3>
                    </div>
            </div>
            </div>

            <div class="card cow-card ml-5 card-body">
            
            <div class="card-body my-4 mx-4">
                <a
                class="navbar-item"
                href="/"
                >
                <b-icon
                        icon="elephant"
                        size="is-medium"
                        type="is-dark">
                    </b-icon>
                </a>

            <span><span class=" mb-2"></span>
            <span class="text-mortalities">Wildlife/Exotics</span></span> <br>
                    <div class="mt-4">
                        <h3>Total:<countTo :startVal='startVal' :endVal='wildlifeOrExotics' :duration='20000'></countTo></h3>
                    </div>
            </div>
            </div>

            <div class="card cow-card ml-5 card-body">
            
            <div class="card-body my-4 mx-4">
                <a
                class="navbar-item"
                href="/"
                >
                <b-icon
                        icon="horse"
                        size="is-medium"
                        type="is-dark">
                    </b-icon>
                </a>

            <span><span class=" mb-2"></span>
            <span class="">Horses</span></span> <br>
                    <div class="mt-4">
                        <h3>Total:<countTo :startVal='startVal' :endVal='horses' :duration='20000'></countTo></h3>
                    </div>
            </div>
            </div>
            
            
        



            
            </div>

        </div>
        <footer class="card-footer footy">
          <div class="card-footer-item">
            <div class="my-4 text ">
              Total Consultations:<span class="is-success mx-4 "> 
                <countTo :startVal='startVal'   
                :endVal='cattle +
                        goats+
                         sheep+
                         pigs+
                         poultry+
                         dogsAndCats+
                         rabbits+
                         wildlifeOrExotics+
                        horses'
                 :duration='7000'
                 ></countTo>
                </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </template>
  
  <script>
  import VetFilterModal from '~/components/modals/Filter/vet-filter-modal.vue'
  import countTo from 'vue-count-to';
  import { mapActions, mapGetters } from 'vuex'
import { computed } from 'vue';


  export default {

 
    name: 'BuefyCard',
    components: {
    countTo 
   
  },
    props: {
       // landscape: landscaping, 
      title: 'Records',
      icon: {
        type: String,
        required: true
      },
     
    },

  

    data(){
      
      var startDate = computed(()=>this.startTime)

      var endDate = computed(()=>this.endTime)

      var cattles = computed(()=> this.cattle)
      var goats = computed(()=>this.goats)
      var sheep =computed(()=> this.sheep)
      var pigs = computed (()=> this.pigs)
      var poultry = computed(()=> this.poultry)
      var dogsAndCats = computed(()=> this.dogsAndCats)
      var rabbits = computed(()=> this.rabbits)
      var wildlifeOrExotics = computed(()=> this.wildlifeOrExotics)
      var horses = computed(()=> this.horses)
     
      var totalConsults =  computed(
                            ()=> this.cattle +
                                 this.goats +
                                 this.sheep +
                                 this.pigs +
                                 this.poultry +
                                 this.dogsAndCats +
                                 this.rabbits +
                                 this.wildlifeOrExotics +
                                 this.horses
                                 
                                 
                                 )
                         
                          
      // console.log( this.landscape === this.landscaping)

        return {
            startVal:0,
           
            vet_fields:{
                "Consultations By Category":"consultation",
             
                "Total":"total",
                "Start Date":"start_date",
                "End Date":"end_date"
            },

            

            vet_data:[
                
                {"start_date": startDate,
                 "end_date":endDate
                },

              
                
                { 
                  "consultation":"Cattle",
                  "number":cattles
                },

                 { "consultation":"Goats",
                    "number":goats
                },

                 { "consultation":"Sheep",
                    "number":sheep
                  },

                 { "consultation":"Pigs",
                    "number":pigs
                },

                 { "consultation":"Poultry",
                    "number":poultry
                  },

                 { "consultation":"Dogs & Cats",
                    "number":dogsAndCats
                  },

                 { "consultation":"Rabbits",
                    "number":rabbits
                },

                 { "consultation":"Wildlife Or Exotics",
                    "number":wildlifeOrExotics
                  },

                 { "consultation":"Horses",
                    "number":horses
                  },

                  

                
                  { "consultation":"",
                    "number":""
                 },

                 { "consultation":"Total",
                    "number":totalConsults
                 },

                
                
                
            ]
        }
    },
    
    
    computed: {

       
        ...mapGetters('vetData', {
         loading: 'loading',
         vets: 'allVetRecords',
         cattle:'allCattleRecords',
         goats:'allGoatRecords',
         sheep:'allSheepRecords',
         pigs:'allPigRecords',
         poultry:'allPoultryRecords',
         dogsAndCats:'allDogsAndCatsRecords',
         rabbits:'allRabbitRecords',
         wildlifeOrExotics:'allWildlifeOrExoticsRecords',
         horses:'allHorseRecords',
         startTime:'filteredStartTime',
         endTime:'filteredEndTime',
        

          
        

        
      
      },


     

     
      
      
      ),


    },

    provide(){
      return{
        landscapes: computed(() => this.landscaping)
      }
    },

  //   mounted(){
  //     const landscapeConsults = this.landscaping
  //   this.landscapes = landscapeConsults 
     
      
  //  console.log(landscapeConsults === this.landscapes)

  //  console.log(this.landscapes)
  //   },
    

    async created() {
  let allVets = await this.getAllVetRecords();
 //var landscape = this.landscaping
  //console.log(landscape);
  
  //let filteredAgros = await this.getFilteredAgroRecords();
     
   console.log(allVets)
   //console.log(filteredAgros)

  },


    methods:{
        ...mapActions('vetData', ['getAllVetRecords','getFilteredVetRecords', 'load']),


        filter() {
        
        setTimeout(() => {
          this.$buefy.modal.open({
            parent: this,
            component: VetFilterModal,
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

  <style scoped>
  .text{
    font-size: xx-large;
    font-weight:700;
    color: rgb(54, 142, 113);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .ml-2{
    margin-right: 2rem;
  }

  .footy{
    background-color:rgb(233, 253, 246) ;
  }

  .header-text{
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: large;
  }

  .cow-card {
  width: 220px;
  height:150px;
  background-color: rgb(220, 249, 223);
}

@media only screen and (min-width: 1600px) {
    .cow-card {
  width: 350px;
  height:130px;
  background-color: rgb(220, 249, 223);
}
}

.text{
    font-size: xx-large;
    font-weight:700;
    color: rgb(54, 142, 113);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .ml-2{
    margin-right: 2rem;
  }

  .footy{
    background-color:rgb(233, 253, 246) ;
  }

  .header-text{
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: large;
  }
  </style>
  