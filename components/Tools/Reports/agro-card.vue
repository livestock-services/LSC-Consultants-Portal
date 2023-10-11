<template>
  
    <div class="column">
      <div class="card  my-4">
        <header class="card-header footy my-4">
          <h1 class="card-header-title  header-text">
           Agronomy Consultations between <span class="tag is-info is-light"> {{ startTime }} </span> and <span class="tag is-info is-light"> {{ endTime }} </span>
          </h1>
        </header>

        <div class="buttons ml-5">
        

         <b-tooltip label="Filter Consultations by date range" type="is-dark">
        <b-button class="mx-2" icon-left="filter" type="is-warning" @click="filter">Filter</b-button>
        </b-tooltip>

       <b-tooltip label="Export to Excel" type="is-dark">

        <download-excel
         :data="agro_data" 
         :fields="agro_fields"
         worksheet="Agro Worksheet"
         type="xls"
         name = "Agro Consultations.xls">
        
        <b-button class="mx-2" icon-left="export" type="is-success ">Excel</b-button>
        <img src="download_icon.png" />
      </download-excel>   
       </b-tooltip>

      </div>

        <b-form v-model="agroCard" class="card-content mx-4 my-4">
          <div class="content has-text-left">
            <div class=" my-4 pl-4">
                Landscaping establishment, mgt & pest control in lawns & ornaments:
                 <b-field v-model="landscaping" id="landscapes" class=" tag is-primary mx-4"> {{ landscaping }}</b-field>
             
            </div>
  
             <div class=" my-4 pl-4">
                Pest control, mgt & fertilization in vegetable crops: 
                <span class="tag is-primary mx-4 "> {{ pestControlVeg }}</span>
             
            </div>
  
          
            <div class=" my-4 pl-4">
                Household termites control: 
                <span class="tag is-primary mx-4 "> {{ houseTermiteControl }}</span>
             
            </div>

              
            <div class=" my-4 pl-4">
                Agricultural field termite control:
                 <span class="tag is-primary mx-4 "> {{ fieldTermiteControl }}</span>
             
            </div>
            
           
            <div class=" my-4 pl-4">
                Grain Protection:
                 <span class="tag is-primary mx-4 " id="grain"> {{ grainProtection }}</span>
             
            </div>

            
            <div class=" my-4 pl-4">
                Weed control in non-crop areas:
                 <span class="tag is-primary mx-4 "> {{  weedControl }}</span>
             
             
            </div>

             
            <div class=" my-4 pl-4">
                Pest control, mgt & fertilization in field crops: 
                <span class="tag is-primary mx-4 "> {{ pestControlField }}</span>
             
             
            </div>

            
            <div class=" my-4 pl-4">
                Public health pest control:
                 <span class="tag is-primary mx-4 "> {{ publicHealthPestControl }}</span>
             
             
            </div>

            
            <div class=" my-4 pl-4">
                Vegetable enterprise budgets:
                 <span class="tag is-primary mx-4 "> {{ vegEnterpriseBudget }}</span>
             
            </div>

           
            <div class=" my-4 pl-4">
              
             Pest control, mgt & fertilization in orchards: 
             <span class="tag is-primary mx-4 ">{{ pestControlOrchard }}</span>
          
            </div>

             
            <div class=" my-4 pl-4">
                
             Soil analysis(all crops): 
             <span class="tag is-primary mx-4 "> {{ soilAnalysis }}</span>
            </div> 


            <div class=" my-4 pl-4">
                
                Other Diseases: 
                <span class="tag is-primary mx-4 "> {{ other }}</span>
               </div> 

             
           
          </div>

          <!-- <pre>
            {{ landscaping.length }}
          </pre> -->
        </b-form>

       

      
        <footer class="card-footer footy">
          <div class="card-footer-item">
            <div class="my-4 text ">
              Total Consultations:<span class="is-success mx-4 "> 
                <countTo :startVal='startVal' 
                :endVal='landscaping +
                 pestControlVeg + 
                 houseTermiteControl + 
                 fieldTermiteControl + 
                 grainProtection + 
                 weedControl + 
                 pestControlField + 
                 publicHealthPestControl + 
                 vegEnterpriseBudget + 
                 pestControlOrchard + 
                 soilAnalysis+
                 other' 
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
  import AgroFilterModal from '~/components/modals/Filter/agro-filter-modal.vue'
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

      var landscapes = computed(()=> this.landscaping)
      var pestsCtrlVeg = computed(()=>this.pestControlVeg)
      var houseTermiteCtrl =computed(()=> this.houseTermiteControl)
      var fieldTermiteCtrl = computed (()=> this.fieldTermiteControl)
      var grainProtect = computed(()=> this.grainProtection)
      var weedCtrl = computed(()=> this.weedControl)
      var pestCtrlField = computed(()=> this.pestControlField)
      var publicHealthPestCtrl = computed(()=> this.publicHealthPestControl)
      var vegEntBudget = computed(()=> this.vegEnterpriseBudget)
      var pestCtrlOrchard = computed(()=> this.pestControlOrchard)
      var soilAna = computed(()=> this.soilAnalysis)
      var otherD = computed(()=> this.other)

      var totalConsults =  computed(
                            ()=> this.landscaping +
                                 this.pestControlVeg+
                                 this.houseTermiteControl+
                                 this.fieldTermiteControl+
                                 this.grainProtection+
                                 this.weedControl+
                                 this.pestControlField+
                                 this.publicHealthPestControl+
                                 this.vegEnterpriseBudget+
                                 this.pestControlOrchard+
                                 this.soilAnalysis+
                                 this.other
                                 
                                 )
                         
                          
      // console.log( this.landscape === this.landscaping)

        return {
            startVal:0,
           
            agro_fields:{
                "Consultations By Category":"consultation",
                "Number":"number",
              
                "Start Date":"start_date",
                "End Date":"end_date"
            },

            

            agro_data:[
                
                {"start_date": startDate,
                 "end_date":endDate
                },

              
                
                { 
                  "consultation":"Landscaping establishment, mgt & pest control in lawns & ornaments",
                  "number":landscapes
                },

                 { "consultation":"Pest control, mgt & fertilization in vegetable crops",
                    "number":pestsCtrlVeg
                },

                 { "consultation":"Household termites control",
                    "number":houseTermiteCtrl
                  },

                 { "consultation":"Agricultural field termite control",
                    "number":fieldTermiteCtrl
                },

                 { "consultation":"Grain Protection",
                    "number":grainProtect
                  },

                 { "consultation":"Weed control in non-crop areas",
                    "number":weedCtrl
                  },

                 { "consultation":"Pest control, mgt & fertilization in field crops",
                    "number":pestCtrlField
                },

                 { "consultation":"Public health pest control",
                    "number":publicHealthPestCtrl
                  },

                 { "consultation":" Vegetable enterprise budgets",
                    "number":vegEntBudget
                  },

                 { "consultation":" Pest control, mgt & fertilization in orchards",
                    "number":pestCtrlOrchard
                  },
              
                 { "consultation":"Soil Analysis(all crops )",
                    "number":soilAna
                  },

                  { "consultation":"Other Diseases",
                    "number":otherD
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

       
        ...mapGetters('agroData', {
         loading: 'loading',
         agros: 'allAgroRecords',
         landscaping:'allLandscapingRecords',
         pestControlVeg:'allPestControlVegRecords',
         houseTermiteControl:'allHouseholdTermitesControlRecords',
         fieldTermiteControl:'allAgricFieldTermiteControlRecords',
         grainProtection:'allGrainProtectionRecords',
         weedControl:'allWeedControlRecords',
         pestControlField:'allPestControlFieldRecords',
         publicHealthPestControl:'allPublicHealthPestControlRecords',
         vegEnterpriseBudget:'allVegEnterpriseBudgetRecords',
         pestControlOrchard:'allPestControlOrchardRecords',
         soilAnalysis:'allSoilAnalysisRecords',
         other:'allOtherAgroRecords',
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
  let allAgros = await this.getAllAgroRecords();
 //var landscape = this.landscaping
  //console.log(landscape);
  
  //let filteredAgros = await this.getFilteredAgroRecords();
     
   console.log(allAgros)
   //console.log(filteredAgros)

  },


    methods:{
        ...mapActions('agroData', ['getAllAgroRecords','getFilteredAgroRecords', 'load']),


        filter() {
        
        setTimeout(() => {
          this.$buefy.modal.open({
            parent: this,
            component: AgroFilterModal,
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
  </style>
  