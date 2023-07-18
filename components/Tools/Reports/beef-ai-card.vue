<template>
  
    <div class="column">
      <div class="card  my-4">
        <header class="card-header footy my-4">
          <h1 class="card-header-title  header-text">
           AI Consultations between <span class="tag is-info is-light"> {{ startTime }} </span> and <span class="tag is-info is-light"> {{ endTime }} </span>
          </h1>
        </header>
  
        <div class="buttons ml-5">
        
  
         <b-tooltip label="Filter Consultations by date range" type="is-dark">
        <b-button class="mx-2" icon-left="filter" type="is-warning" @click="filter">Filter</b-button>
        </b-tooltip>
  
       <b-tooltip label="Export to Excel" type="is-dark">
  
        <download-excel
         :data="beefAI_data" 
         :fields="beefAI_fields"
         worksheet="AI Worksheet"
         type="xls"
         name = "Beef AI Consultations.xls">
        
        <b-button class="mx-2" icon-left="export" type="is-success ">Excel</b-button>
        <img src="download_icon.png" />
      </download-excel>   
       </b-tooltip>
  
      </div>
  
        <b-form v-model="beefAICard" class="card-content mx-4 my-4">
          <div class="content mx-6 has-text-left">
            
            <div class="columns">
              <div class=" my-4 pl-4">
            Dairy:
                 <b-field  class=" tag is-primary mx-4"> {{ beefAIDairies }}</b-field>
             
            </div>
            
            <div class=" my-4 pl-4">
            Beef:
                 <b-field  class=" tag is-primary mx-4"> {{ beefAIBeefs }}</b-field>
             
            </div>

            <div class=" my-4 pl-4">
            Goat:
                 <b-field  class=" tag is-primary mx-4"> {{ beefAIGoats }}</b-field>
             
            </div>
            
            <div class=" my-4 pl-4">
            Pig:
                 <b-field  class=" tag is-primary mx-4"> {{ beefAIPigs }}</b-field>
             
            </div>

            <div class=" my-4 pl-4">
            Other:
                 <b-field  class=" tag is-primary mx-4"> {{ beefAIOthers }}</b-field>
             
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
              Total Consultations:<span class="is-success mx-4 "> 
                <countTo :startVal='startVal' 
                :endVal='
                 beefAIDairies +
                 beefAIBeefs+
                 beefAIGoats+
                 beefAIPigs+
                 beefAIOthers
                   
                 
                 ' 
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
  import BeefAIFilterModal from '~/components/modals/Filter/beef-ai-filter-modal.vue'
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
  
      var beefAIDairy = computed(()=> this.beefAIDairies)

      var beefAIBeef = computed(()=> this.beefAIBeefs)

      var beefAIGoat = computed(()=> this.beefAIGoats)

      var beefAIPig = computed(()=> this.beefAIPigs)

      var beefAIOther = computed(()=> this.beefAIOthers)
     
        
     
      
      
  
      var totalConsults =  computed(
                            ()=> this.beefAIDairies+
                                 this.beefAIBeefs+
                                 this.beefAIGoats+
                                 this.beefAIPigs+
                                 this.beefAIOther

                                  
                                 )
                         
                          
      // console.log( this.landscape === this.landscaping)
  
        return {
            startVal:0,
           
           beefAI_fields:{
                "Consultations By Category":"consultation",
                "Number":"number",
                "Total":"total",
                "Start Date":"start_date",
                "End Date":"end_date"
            },
  
            
  
           beefAI_data:[
                
                {"start_date": startDate,
                 "end_date":endDate
                },
  
              
                
                { 
                  "consultation":"Dairy",
                  "number":beefAIDairy
                },
                
                { 
                  "consultation":"Beef",
                  "number":beefAIBeef
                },

                
                { 
                  "consultation":"Goat",
                  "number":beefAIGoat
                },
                
                { 
                  "consultation":"Pig",
                  "number":beefAIPig
                },
                
                { 
                  "consultation":"Other",
                  "number":beefAIOther
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
  
       
        ...mapGetters('beefAIData', {
         loading: 'loading',
         allBAIs: 'allBeefAIRecords',
  
         beefAIDairies:'allBeefAIDairyRecords',
         beefAIBeefs:'allBeefAIBeefRecords',

         beefAIGoats:'allBeefAIGoatRecords',
         beefAIPigs:'allBeefAIPigRecords',

         beefAIOthers:'allBeefAIOtherRecords',
         
         startTime:'filteredBeefAIStartTime',
         endTime:'filteredBeefAIEndTime',
  
          
        
  
        
      
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
  //let allAgros = await this.getAllPostM();
  //var landscape = this.landscaping
  //console.log(landscape);
  
  //let filteredAgros = await this.getFilteredAgroRecords();
     
  // console.log(allAgros)
   //console.log(filteredAgros)
  
  },
  
  
    methods:{
        ...mapActions('beefAIData', ['getFilteredBeefAIPMRecords', 'load']),
  
  
        filter() {
        
        setTimeout(() => {
          this.$buefy.modal.open({
            parent: this,
            component: BeefAIFilterModal,
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
  