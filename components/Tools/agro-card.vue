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
         :data="landscapeData" 
         :fields="agro_fields"
         worksheet="Agro Worksheet"
         type="xls"
         name = "Agro Consultations.xls">
        
        <b-button class="mx-2" icon-left="export" type="is-success ">Excel</b-button>
        <img src="download_icon.png" />
      </download-excel>   
       </b-tooltip>

      </div>

        <b-form v-model="agroCard" class="card-content my-4">
          <div class="content has-text-left">
            <div class=" my-4 px-2">
                Landscaping establishment, mgt & pest control in lawns & ornaments:
                 <b-field v-model="landscaping" id="landscape" class=" landscape tag is-primary mx-4"> {{ landscaping.length }}</b-field>
             
            </div>
  
             <div class=" my-4 px-2">
                Pest control, mgt & fertilization in vegetable crops: 
                <span class="tag is-primary mx-4 "> {{ pestControlVeg.length }}</span>
             
            </div>
  
          
            <div class=" my-4 px-2">
                Household termites control: 
                <span class="tag is-primary mx-4 "> {{ houseTermiteControl.length }}</span>
             
            </div>

              
            <div class=" my-4 px-2">
                Agricultural field termite control:
                 <span class="tag is-primary mx-4 "> {{ fieldTermiteControl.length }}</span>
             
            </div>
            
           
            <div class=" my-4 px-2">
                Grain Protection:
                 <span class="tag is-primary mx-4 "> {{ grainProtection.length }}</span>
             
            </div>

            
            <div class=" my-4 px-2">
                Weed control in non-crop areas:
                 <span class="tag is-primary mx-4 "> {{  weedControl.length }}</span>
             
             
            </div>

             
            <div class=" my-4 px-2">
                Pest control, mgt & fertilization in field crops: 
                <span class="tag is-primary mx-4 "> {{ pestControlField.length }}</span>
             
             
            </div>

            
            <div class=" my-4 px-2">
                Public health pest control:
                 <span class="tag is-primary mx-4 "> {{ publicHealthPestControl.length }}</span>
             
             
            </div>

            
            <div class=" my-4 px-2">
                Vegetable enterprise budgets:
                 <span class="tag is-primary mx-4 "> {{ vegEnterpriseBudget.length }}</span>
             
            </div>

           
            <div class=" my-4 px-2">
              
             Pest control, mgt & fertilization in orchards: 
             <span class="tag is-primary mx-4 ">{{ pestControlOrchard.length }}</span>
          
            </div>

             
            <div class=" my-4 px-2">
                
             Soil analysis(all crops): 
             <span class="tag is-primary mx-4 "> {{ soilAnalysis.length }}</span>
            </div> 

             
           
          </div>

          <!-- <pre>
            {{ landscaping.length }}
          </pre> -->
        </b-form>

        <table :data="landscapeData" class="">
          <tr>
            <th>Consultations</th>
            <th>number</th>
            <th>Total</th>
          </tr>
          <tr >
            <td class="ml-2">Landscaping establishment, mgt & pest control in lawns & ornaments</td>
            <td>{{ landscaping.length }}</td>
           
          </tr>

          <tr >
            <td class="ml-2"> Pest control, mgt & fertilization in vegetable crops</td>
            <td>{{ pestControlVeg.length }}</td>
           
          </tr>

          <tr >
            <td class="ml-2"> Household termites control</td>
            <td>{{ houseTermiteControl.length }}</td>
           
          </tr>

          <tr >
            <td class="ml-2"> Agricultural field termite control</td>
            <td>{{ fieldTermiteControl.length }}</td>
           
          </tr>

          <tr >
            <td class="ml-2">Grain Protection</td>
            <td>{{ grainProtection.length }}</td>
           
          </tr>

          <tr >
            <td class="ml-2"> Weed control in non-crop areas</td>
            <td>{{ weedControl.length }}</td>
           
          </tr>

          <tr >
            <td class="ml-2"> Pest control, mgt & fertilization in field crops</td>
            <td>{{ pestControlField.length }}</td>
           
          </tr>

          <tr >
            <td class="ml-2">  Public health pest control</td>
            <td>{{ publicHealthPestControl.length }}</td>
           
          </tr>

          <tr >
            <td class="ml-2"> Vegetable enterprise budgets</td>
            <td>{{ vegEnterpriseBudget.length }}</td>
           
          </tr>

          <tr >
            <td class="ml-2"> Pest control, mgt & fertilization in orchards</td>
            <td>{{ pestControlOrchard.length }}</td>
           
          </tr>

          <tr >
            <td class="ml-2">  Soil analysis(all crops)</td>
            <td>{{ soilAnalysis.length }}</td>
           
          </tr>

          
        </table>


      
        <footer class="card-footer footy">
          <div class="card-footer-item">
            <div class="my-4 text ">
              Total Consultations:<span class="is-success mx-4 "> 
                <countTo :startVal='startVal' 
                :endVal='landscaping.length +
                 pestControlVeg.length + 
                 houseTermiteControl.length + 
                 fieldTermiteControl.length + 
                 grainProtection.length + 
                 weedControl.length + 
                 pestControlField.length + 
                 publicHealthPestControl.length + 
                 vegEnterpriseBudget.length + 
                 pestControlOrchard.length + 
                 soilAnalysis.length' 
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
  import FilterModal from '~/components/modals/Filter/filter-modal.vue'
  import countTo from 'vue-count-to';
  import { mapActions, mapGetters } from 'vuex'

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

    
        return {
            startVal:0,
          
            agro_fields:{
                "Consultations":"consultation",
                "Number":"number",
                "Total":"total",
                "Start Date":"start_date",
                "End Date":"end_date"
            },

            agro_data:[
                
                { 
                  "consultation":"Landscaping establishment, mgt & pest control in lawns & ornaments",
                  "number":23
                },

                 { "consultation":"Pest control, mgt & fertilization in vegetable crops" },

                 { "consultation":"Household termites control" },

                 { "consultation":"Agricultural field termite control" },

                 { "consultation":"Grain Protection" },

                 { "consultation":"Weed control in non-crop areas" },

                 { "consultation":"Pest control, mgt & fertilization in field crops" },

                 { "consultation":"Public health pest control" },

                 { "consultation":" Vegetable enterprise budgets" },

                 { "consultation":" Pest control, mgt & fertilization in orchards" },
              
                 { "consultation":"Soil Analysis(all crops )" },

                 {"total":34 },

                 {"start_date":this.startTime},

                 {"end_date":this.endTime}
                
                
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
         startTime:'filteredStartTime',
         endTime:'filteredEndTime',


         landscapeData() {
          return this.isEmpty ? [] : this.landscaping
        },

      },


     

     
      
      
      ),


    },

    async created() {
  let allAgros = await this.getAllAgroRecords();
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
            component: FilterModal,
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
  