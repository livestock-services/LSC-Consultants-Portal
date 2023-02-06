<template>
  
    <div class="column">
      <div class="card  my-4">
        <header class="card-header footy my-4">
          <h1 class="card-header-title  header-text">
           Broiler Post Mortems between <span class="tag is-info is-light"> {{ startTime }} </span> and <span class="tag is-info is-light"> {{ endTime }} </span>
          </h1>
        </header>

        <div class="buttons ml-5">
        

         <b-tooltip label="Filter Consultations by date range" type="is-dark">
        <b-button class="mx-2" icon-left="filter" type="is-warning" @click="filter">Filter</b-button>
        </b-tooltip>

       <b-tooltip label="Export to Excel" type="is-dark">

        <download-excel
         :data="broiler_data" 
         :fields="broiler_fields"
         worksheet="Broiler Worksheet"
         type="xls"
         name = "Broiler Consultations.xls">
        
        <b-button class="mx-2" icon-left="export" type="is-success ">Excel</b-button>
        <img src="download_icon.png" />
      </download-excel>   
       </b-tooltip>

      </div>

        <b-form v-model="broilerCard" class="card-content mx-4 my-4">
          <div class="content mx-6 has-text-left">
            
            <div class="columns">
              <div class=" my-4 pl-4">
               Gumboro:
                 <b-field  class=" tag is-primary mx-4"> {{ broilerGumboro }}</b-field>
             
            </div>
  
             <div class=" my-4 pl-4">
                Newcastle: 
                <span class="tag is-primary mx-4 "> {{ broilerNewCastle }}</span>
             
            </div>
  
          
            <div class=" my-4 pl-4">
                Colibacillosis:
                <span class="tag is-primary mx-4 "> {{ broilerColibacillosis }}</span>
             
            </div>

            </div>
              
           
           
           <div class="columns">
              
            <div class=" my-4 pl-4">
               Heat Stress:
                 <span class="tag is-primary mx-4 "> {{ heatStress }}</span>
             
            </div>
            
           
            <div class=" my-4 pl-4">
               Coccidiosis:
                 <span class="tag is-primary mx-4 " id="grain"> {{ broilerCoccidiosis }}</span>
             
            </div>

            
            <div class=" my-4 pl-4">
                Infectious Coryza:
                 <span class="tag is-primary mx-4 "> {{  infectiousCoryza }}</span>
             
             
            </div>

           </div>
             
            
           <div class="columns">
            <div class=" my-4 pl-4">
                Chronic Respiratory Disease:
                <span class="tag is-primary mx-4 "> {{ chronicRespDisease}}</span>
             
             
            </div>

            
            <div class=" my-4 pl-4">
                Ascites:
                 <span class="tag is-primary mx-4 "> {{ ascites }}</span>
             
             
            </div>

            
            <div class=" my-4 pl-4">
               Trauma:
                 <span class="tag is-primary mx-4 "> {{ trauma }}</span>
             
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
                :endVal='
                 broilerGumboro +
                 broilerNewCastle + 
                 broilerColibacillosis + 
                 heatStress + 
                 broilerCoccidiosis + 
                 infectiousCoryza + 
                 chronicRespDisease + 
                 ascites + 
                 trauma' 
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
  import BroilerFilterModal from '~/components/modals/Filter/broiler-filter-modal.vue'
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

      var gumboroD = computed(()=> this.broilerGumboro)
      var newcastleD = computed(()=>this.broilerNewCastle)
      var colibacillosisD =computed(()=> this.broilerColibacillosis)
      var heatStressD = computed (()=> this.heatStress)
      var coccidiosisD = computed(()=> this.broilerCoccidiosis)
      var infectiousCoryzaD = computed(()=> this.infectiousCoryza)
      var chronicRespDiseaseD = computed(()=> this.chronicRespDisease)
      var ascitesD = computed(()=> this.ascites)
      var traumaD = computed(()=> this.trauma)
      

      var totalConsults =  computed(
                            ()=> this.broilerGumboro +
                                 this.broilerNewCastle+
                                 this.broilerColibacillosis+
                                 this.heatStress+
                                 this.broilerCoccidiosis+
                                 this.infectiousCoryza+
                                 this.chronicRespDisease+
                                 this.ascites+
                                 this.trauma
                                 
                                 
                                 )
                         
                          
      // console.log( this.landscape === this.landscaping)

        return {
            startVal:0,
           
            broiler_fields:{
                "Consultations By Category":"consultation",
                "Number":"number",
                "Total":"total",
                "Start Date":"start_date",
                "End Date":"end_date"
            },

            

            broiler_data:[
                
                {"start_date": startDate,
                 "end_date":endDate
                },

              
                
                { 
                  "consultation":"Gumboro",
                  "number":gumboroD
                },

                 { "consultation":"Newcastle",
                    "number":newcastleD
                },

                 { "consultation":"Colibacillosis",
                    "number":colibacillosisD
                  },

                 { "consultation":"Heat Stress",
                    "number":heatStressD
                },

                 { "consultation":"Coccidiosis",
                    "number":coccidiosisD
                  },

                 { "consultation":"Infectious Coryza",
                    "number":infectiousCoryzaD
                  },

                 { "consultation":"Chronic Respiratory Disease",
                    "number":chronicRespDiseaseD
                },

                 { "consultation":"Ascites",
                    "number":ascitesD
                  },

                 { "consultation":" Trauma",
                    "number":traumaD
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
         broilerGumboro:'allBroilerGumboroRecords',
         broilerNewCastle:'allBroilerNewCastleRecords',
         broilerColibacillosis:'allBroilerColibacillosisRecords',
         heatStress:'allBroilerHeatStressRecords',
         broilerCoccidiosis:'allBroilerCoccidiosisRecords',
         infectiousCoryza:'allBroilerInfectiousCoryzaRecords',
         chronicRespDisease:'allBroilerChronicRespDiseaseRecords',
         ascites:'allBroilerAscitesRecords',
         trauma:'allBroilerTraumaRecords', 
         startTime:'filteredBroilerPMStartTime',
         endTime:'filteredBroilerPMEndTime',

          
        

        
      
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
  let allAgros = await this.getAllPostMortemRecords();
 //var landscape = this.landscaping
  //console.log(landscape);
  
  //let filteredAgros = await this.getFilteredAgroRecords();
     
   console.log(allAgros)
   //console.log(filteredAgros)

  },


    methods:{
        ...mapActions('vetData', ['getAllPostMortemRecords','getFilteredBroilerRecords', 'load']),


        filter() {
        
        setTimeout(() => {
          this.$buefy.modal.open({
            parent: this,
            component: BroilerFilterModal,
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
  