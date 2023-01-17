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
        <download-excel :data="tableData" name = "Milking Records">
        <b-button class="mx-2" icon-left="export" type="is-success ">Excel</b-button>
        <img src="download_icon.png" />
      </download-excel>   
       </b-tooltip>

      </div>

        <div class="card-content my-4">
          <div class="content has-text-left">
            <div class=" my-4 px-2">
                Landscaping establishment, mgt & pest control in lawns & ornaments:
                 <span class="tag is-primary mx-4 "> {{ landscaping.length }}</span>
             
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

            <!-- <textarea class="card" v-model="agroConsultData">
                   <ol>
                    <li>Soil analysis(all crops): {{ soilAnalysis.length }}</li>
                   </ol>
                </textarea> -->
           
          </div>
        </div>
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
      title: 'Records',
      icon: {
        type: String,
        required: true
      }
    },

    data(){
        return {
            startVal:0,
            // startDate: this.filteredTimes.startDate,
            // endDate: this.filteredTimes.endDate
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
         endTime:'filteredEndTime'
      }),

    },

    async created() {
  let filteredAgros = await this.getAllAgroRecords();
   console.log(filteredAgros)

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
                message: `Task Snapshot closed!`,
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

  .footy{
    background-color:rgb(233, 253, 246) ;
  }

  .header-text{
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: large;
  }
  </style>
  