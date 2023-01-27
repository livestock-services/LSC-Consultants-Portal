<template>
  
    <div class="column">
      <div class="card  my-4">
        <header class="card-header footy my-4">
          <h1 class="card-header-title  header-text">
           Village Chicken Post Mortems between <span class="tag is-info is-light"> {{ startTime }} </span> and <span class="tag is-info is-light"> {{ endTime }} </span>
          </h1>
        </header>

        <div class="buttons ml-5">
        

         <b-tooltip label="Filter Consultations by date range" type="is-dark">
        <b-button class="mx-2" icon-left="filter" type="is-warning" @click="filter">Filter</b-button>
        </b-tooltip>

       <b-tooltip label="Export to Excel" type="is-dark">

        <download-excel
         :data="village_chicken_post_mortem_data" 
         :fields="village_chicken_post_mortem_fields"
         worksheet="Village Chicken Post Mortems Worksheet"
         type="xls"
         name = "LSC Village Chicken Post Mortems.xls">
        
        <b-button class="mx-2" icon-left="export" type="is-success ">Excel</b-button>
        <img src="download_icon.png" />
      </download-excel>   
       </b-tooltip>

      </div>

        <b-form v-model="agroCard" class="card-content mx-4 my-4">
          <div class="content has-text-left">
            <div class=" my-4 pl-4">
                Infectious Laryngotracheitis:
                 <b-field class=" tag is-primary mx-4"> {{ infectiousLary }}</b-field>
             
            </div>
  
             <div class=" my-4 pl-4">
                Newcastle: 
                <span class="tag is-primary mx-4 "> {{ newcastle }}</span>
             
            </div>
  
          
            <div class=" my-4 pl-4">
                Gumboro: 
                <span class="tag is-primary mx-4 "> {{ gumboro }}</span>
             
            </div>

              
            <div class=" my-4 pl-4">
                Coccidiosis:
                 <span class="tag is-primary mx-4 "> {{ coccidiosis }}</span>
             
            </div>
            
           
            <div class=" my-4 pl-4">
               Fowl Pox:
                 <span class="tag is-primary mx-4 " id="grain"> {{ fowlPox }}</span>
             
            </div>

            
            <div class=" my-4 pl-4">
               Egg Peritonitis:
                 <span class="tag is-primary mx-4 "> {{  eggPeritonitis }}</span>
             
             
            </div>

             
            <div class=" my-4 pl-4">
                Ectoparasites:
                <span class="tag is-primary mx-4 "> {{ ectoParasites }}</span>
             
             
            </div>

            
            <div class=" my-4 pl-4">
               Helminthiasis:
                 <span class="tag is-primary mx-4 "> {{ helminthiasis}}</span>
             
             
            </div>

            
            <div class=" my-4 pl-4">
                Mycoplasmosis:
                 <span class="tag is-primary mx-4 "> {{  mycoPlasmosis }}</span>
             
            </div>

           
            <div class=" my-4 pl-4">
              
             Snake Bite: 
             <span class="tag is-primary mx-4 ">{{ snakeBite }}</span>
          
            </div>

             
            <div class=" my-4 pl-4">
                
            Colibacillosis: 
             <span class="tag is-primary mx-4 "> {{ colibacillosis }}</span>
            </div> 

            <div class=" my-4 pl-4">
                
               Chronic Infectious Bronchitis:
                 <span class="tag is-primary mx-4 "> {{ chronicInfectiousBronchy }}</span>
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
                :endVal='infectiousLary +
                 newcastle + 
                 gumboro + 
                 coccidiosis + 
                 fowlPox + 
                 eggPeritonitis + 
                 ectoParasites + 
                 helminthiasis + 
                 mycoPlasmosis + 
                 snakeBite + 
                 colibacillosis+
                 chronicInfectiousBronchy' 
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
  import VillageChickenFilterModal from '~/components/modals/Filter/village-chicken-filter-modal.vue'
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

      var infectiousLaryD = computed(()=> this.infectiousLary)
      var newcastleD = computed(()=>this.newcastle)
      var gumboroD =computed(()=> this.gumboro)
      var coccidiosisD = computed (()=> this.coccidiosis)
      var fowlPoxD = computed(()=> this.fowlPox)
      var eggPeritonitisD = computed(()=> this.eggPeritonitis)
      var ectoParasitesD = computed(()=> this.ectoParasites)
      var helminthiasisD = computed(()=> this.helminthiasis)
      var mycoPlasmosisD = computed(()=> this.mycoPlasmosis)
      var snakeBiteD = computed(()=> this.snakeBite)
      var colibacillosisD = computed(()=> this.colibacillosis)
      var chronicInfectiousBronchyD = computed(()=> this.chronicInfectiousBronchy)

      var totalConsults =  computed(
                            ()=> this.infectiousLary +
                                 this.newcastle+
                                 this.gumboro+
                                 this.coccidiosis+
                                 this.fowlPox+
                                 this.eggPeritonitis+
                                 this.ectoParasites+
                                 this.helminthiasis+
                                 this.mycoPlasmosis+
                                 this.snakeBite+
                                 this.colibacillosis+
                                 this.chronicInfectiousBronchy
                                 
                                 )
                         
                          
      // console.log( this.landscape === this.landscaping)

        return {
            startVal:0,
           
            village_chicken_post_mortem_fields:{
                "Post Mortems By Disease Category":"disease",
                "Number":"number",
             
                "Start Date":"start_date",
                "End Date":"end_date"
            },

            

            village_chicken_post_mortem_data:[
                
                {"start_date": startDate,
                 "end_date":endDate
                },

              
                
                { 
                  "disease":"Infectious Laryngotracheitis",
                  "number":infectiousLaryD
                },

                 { "disease":"Newcastle",
                    "number":newcastleD
                },

                 { "disease":"Gumboro",
                    "number":gumboroD
                  },

                 { "disease":"Coccidiosis",
                    "number":coccidiosisD
                },

                 { "disease":"Fowl Pox",
                    "number":fowlPoxD
                  },

                 { "disease":"Egg Peritonitis",
                    "number":eggPeritonitisD
                  },

                 { "disease":"Ectoparasites",
                    "number":ectoParasitesD
                },

                 { "disease":"Helminthiasis",
                    "number":helminthiasisD
                  },

                 { "disease":"Mycoplasmosis",
                    "number":mycoPlasmosisD
                  },

                 { "disease":" Snake Bite",
                    "number":snakeBiteD
                  },
              
                 { "disease":"Colibacillosis",
                    "number":colibacillosisD
                  },

                  { "disease":"Chronic Infectious Bronchitis",
                    "number":chronicInfectiousBronchyD
                  },


                 { "disease":"",
                    "number":""
                 },

                 { "disease":"Total",
                    "number":totalConsults
                 },

                
                
                
            ]
        }
    },
    
    
    computed: {

       
        ...mapGetters('vetData', {
         loading: 'loading',
         agros: 'allVCPMs',
         infectiousLary:'allILRecords',
         newcastle:'allNewcastleRecords',
         gumboro:'allGumboroRecords',
         coccidiosis:'allCoccidiosisRecords',
         fowlPox:'allFowlPoxRecords',
         ectoParasites:'allEctoParasitesRecords',
         eggPeritonitis:'allEggPeritonitisRecords',
         helminthiasis:'allHelminthiasisRecords',
         mycoPlasmosis:'allMycoPlasmosisRecords',
         snakeBite:'allSnakeBiteRecords',
         colibacillosis:'allColibacillosisRecords',
         chronicInfectiousBronchy:'allChronicInfectiousBronchyRecords',
         startTime:'filteredPMStartTime',
         endTime:'filteredPMEndTime',

          
        

        
      
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
  let allVCPMs = await this.getAllPostMortemRecords();
 //var landscape = this.landscaping
  //console.log(landscape);
  
  //let filteredAgros = await this.getFilteredAgroRecords();
     
   console.log(allVCPMs)
   //console.log(filteredAgros)

  },


    methods:{
        ...mapActions('vetData', ['addNewVillageChickenPMRecord','getAllPostMortemRecords','getFilteredVillageChickenPMRecords', 'load']),


        filter() {
        
        setTimeout(() => {
          this.$buefy.modal.open({
            parent: this,
            component: VillageChickenFilterModal,
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
  