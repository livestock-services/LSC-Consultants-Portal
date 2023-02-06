<template>
  
    <div class="column">
      <div class="card  my-4">
        <header class="card-header footy my-4">
          <h1 class="card-header-title  header-text">
           Layer Post Mortems between <span class="tag is-info is-light"> {{ startTime }} </span> and <span class="tag is-info is-light"> {{ endTime }} </span>
          </h1>
        </header>

        <div class="buttons ml-5">
        

         <b-tooltip label="Filter Consultations by date range" type="is-dark">
        <b-button class="mx-2" icon-left="filter" type="is-warning" @click="filter">Filter</b-button>
        </b-tooltip>

       <b-tooltip label="Export to Excel" type="is-dark">

        <download-excel
         :data="layer_data" 
         :fields="layer_fields"
         worksheet="Layer Worksheet"
         type="xls"
         name = "Layer Consultations.xls">
        
        <b-button class="mx-2" icon-left="export" type="is-success ">Excel</b-button>
        <img src="download_icon.png" />
      </download-excel>   
       </b-tooltip>

      </div>

        <b-form v-model="layerCard" class="card-content mx-4 my-4">
          <div class="content mx-6 has-text-left">
            
            <div class="columns">
              <div class=" my-4 pl-4">
                Fatty Liver HS:
                 <b-field v-model="landscaping" id="landscapes" class=" tag is-primary mx-4"> {{ layerFattyLiverHS }}</b-field>
             
            </div>
  
             <div class=" my-4 pl-4">
                Coccidiosis: 
                <span class="tag is-primary mx-4 "> {{ layerCoccidiosis }}</span>
             
            </div>
  
          
            <div class=" my-4 pl-4">
                Egg Peritonitis: 
                <span class="tag is-primary mx-4 "> {{ layerEggPeritonitis }}</span>
             
            </div>

            </div>


            <div class="columns">
                
            <div class=" my-4 pl-4">
                Laryngotracheitis:
                 <span class="tag is-primary mx-4 "> {{ laryngotracheitis }}</span>
             
            </div>
            
           
            <div class=" my-4 pl-4">
                Newcastle:
                 <span class="tag is-primary mx-4 " id="grain"> {{ layerNewCastle }}</span>
             
            </div>

            
            <div class=" my-4 pl-4">
                Helminthiasis:
                 <span class="tag is-primary mx-4 "> {{  layerHelminthiasis }}</span>
             
             
            </div>

            </div>
            
            

            <div class="columns">
              
             
            <div class=" my-4 pl-4">
                Infectious Bronchitis: 
                <span class="tag is-primary mx-4 "> {{ infectiousBronchitis }}</span>
             
             
            </div>

            
            <div class=" my-4 pl-4">
                Gumboro:
                 <span class="tag is-primary mx-4 "> {{ layerGumboro }}</span>
             
             
            </div>

            
            <div class=" my-4 pl-4">
                Calcium Deficiency:
                 <span class="tag is-primary mx-4 "> {{ calciumDeficiency }}</span>
             
            </div>

            </div>
           
           
             
           
          </div>

          <!-- <pre>
            {{ landscaping.length }}
          </pre> -->
        </b-form>

       

      
        <footer class="card-footer footy">
          <div class="card-footer-item">
            <div class="my-4 text ">
              Total Post Mortems:<span class="is-success mx-4 "> 
                <countTo :startVal='startVal' 
                :endVal=' layerFattyLiverHS+
                          layerCoccidiosis + 
                          layerEggPeritonitis + 
                          laryngotracheitis + 
                          layerNewCastle + 
                          layerHelminthiasis + 
                          infectiousBronchitis + 
                          layerGumboro + 
                          calciumDeficiency' 
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
  import LayerFilterModal from '~/components/modals/Filter/layers-filter-modal.vue'
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

      var fattyLiverHS = computed(()=> this.layerFattyLiverHS)
      var layerCocci = computed(()=>this.layerCoccidiosis)
      var eggPeriton =computed(()=> this.layerEggPeritonitis)
      var lary = computed (()=> this.laryngotracheitis)
      var layerNewCast = computed(()=> this.layerNewCastle)
      var helmin = computed(()=> this.layerHelminthiasis)
      var infectBronchy = computed(()=> this.infectiousBronchitis)
      var layerGumbo = computed(()=> this.layerGumboro)
      var calciumDef = computed(()=> this.calciumDeficiency)
      
      var totalConsults =  computed(
                            ()=> this.layerFattyLiverHS +
                                 this.layerCoccidiosis+
                                 this.layerEggPeritonitis+
                                 this.laryngotracheitis+
                                 this.layerNewCastle+
                                 this.layerHelminthiasis+
                                 this.infectiousBronchitis+
                                 this.layerGumboro+
                                 this.calciumDeficiency
                                 
                                 
                                 )
                         
                          
      // console.log( this.landscape === this.landscaping)

        return {
            startVal:0,
           
            layer_fields:{
                "Consultations By Category":"consultation",
                "Number":"number",
                "Total":"total",
                "Start Date":"start_date",
                "End Date":"end_date"
            },

            

            layer_data:[
                
                {"start_date": startDate,
                 "end_date":endDate
                },

              
                
                { 
                  "consultation":"Fatty Liver HS",
                  "number":fattyLiverHS
                },

                 { "consultation":"Coccidiosis",
                    "number":layerCocci
                },

                 { "consultation":"Egg Peritonitis",
                    "number":eggPeriton
                  },

                 { "consultation":"Laryngotracheitis",
                    "number":lary
                },

                 { "consultation":"Newcastle",
                    "number":layerNewCast
                  },

                 { "consultation":"Helminthiasis",
                    "number":helmin
                  },

                 { "consultation":"Infectious Bronchitis",
                    "number":infectBronchy
                },

                 { "consultation":"Gumboro",
                    "number":layerGumbo
                  },

                 { "consultation":" Calcium Deficiency",
                    "number":calciumDef
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
         allPMs: 'allPostMortemRecords',

         layerFattyLiverHS:'allLayerFattyLiverHSRecords',
         layerCoccidiosis:'allLayerCoccidiosisRecords',
         layerEggPeritonitis:'allLayerEggPeritonitisRecords',
         laryngotracheitis:'allLayerLaryngotracheitisRecords',
         layerNewCastle:'allLayerNewCastleRecords',
         layerHelminthiasis:'allLayerHelminthiasisRecords',
         infectiousBronchitis:'allLayerInfectiousBronchitisRecords',
         layerGumboro:'allLayerGumboroRecords',       
         calciumDeficiency:'allLayerCalciumDeficiencyRecords', 

         startTime:'filteredLayerPMStartTime',
         endTime:'filteredLayerPMEndTime',
          
        

        
      
      },


     

     
      
      
      ),


    },

  



    async created() {
  //let allLayerss = await this.getAllLayerRecords();

  // console.log(allLayers)
   //console.log(filteredAgros)

  },


    methods:{
        ...mapActions('vetData', ['getAllLayerRecords','getFilteredLayerRecords', 'load']),


        filter() {
        
        setTimeout(() => {
          this.$buefy.modal.open({
            parent: this,
            component: LayerFilterModal,
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
  