<template>
    <div class="column">
      <div class="card my-4">
        <header class="card-header my-4">
          <h1 class="card-header-title has-text-black">
           Agro Consultations between {{ startDate }} and {{ endDate }}
          </h1>
        </header>

        <div class="buttons">
        

         <b-tooltip label="Add details of new tasks here" type="is-dark">
        <b-button class="mx-2" icon-left="filter" type="is-warning" @click="filter">Filter</b-button>
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
  
            <!--
            <div class=" my-4 px-2">
                Household termites control: 
                <span class="tag is-primary mx-4 "> {{ houseTermiteControl.length }}</span>
             
            </div>
  
            <div class=" my-4 px-2">
                Agricultural field termite control:
                 <span class="tag is-primary mx-4 "> {{ fieldTermitControl.length }}</span>
             
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
            </div> -->


           
          </div>
        </div>
        <footer class="card-footer">
          <div class="card-footer-item">
            <div class="my-4 has-text-black">
              Total:<countTo :startVal='startVal' :endVal='landscaping.length' :duration='8000'></countTo>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </template>
  
  <script>
  import FilterModal from '~/components/modals/Filter/filter-modal.vue'
  import { countTo } from 'vue-count-to'
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
            startDate: new Date().toLocaleDateString('en-GB'),
            endDate: new Date().toLocaleDateString('en-GB')
        }
    },

    computed: {
    
        ...mapGetters('agroData', {
        loading: 'loading',
        agros: 'allAgroRecords',
         landscaping:'allLandscapingRecords',
         pestControlVeg:'allPestControlVegRecords',
        //  houseTermiteControl:'allHouseholdTermitesControlRecords',
        //  fieldTermitControl:'allAgricFieldTermiteControlRecords',
        //  grainProtection:'allGrainProtectionRecords',
        //  weedControl:'allWeedControlRecords',
        //  pestControlField:'allPestControlFieldRecords',
        //  publicHealthPestControl:'allPublicHealthPestControlRecords',
        //  vegEnterpriseBudget:'allVegEnterpriseBudgetRecords',
        //  pestControlOrchard:'allPestControlOrchardRecords',
        //  soilAnalysis:'allSoilAnalysisRecords'
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
    font-size: x-large;
    font-weight:700;
  }
  </style>
  