<template>
  
  <div class="column">
    <div class="card  my-4">
      <header class="card-header footy my-4">
        <h1 class="card-header-title  header-text">
         Goat Post Mortems between <span class="tag is-info is-light"> {{ startTime }} </span> and <span class="tag is-info is-light"> {{ endTime }} </span>
        </h1>
      </header>

      <div class="buttons ml-5">
      

       <b-tooltip label="Filter Consultations by date range" type="is-dark">
      <b-button class="mx-2" icon-left="filter" type="is-warning" @click="filter">Filter</b-button>
      </b-tooltip>

     <b-tooltip label="Export to Excel" type="is-dark">

      <download-excel
       :data="goat_data" 
       :fields="goat_fields"
       worksheet="Goat Worksheet"
       type="xls"
       name = "Goat Post Mortems.xls">
      
      <b-button class="mx-2" icon-left="export" type="is-success ">Excel</b-button>
      <img src="download_icon.png" />
    </download-excel>   
     </b-tooltip>

    </div>

      <b-form v-model="goatCard" class="card-content mx-4 my-4">
        <div class="content mx-6 has-text-left">
          
          <div class="columns">
            <div class=" my-4 pl-4">
            Helminthiasis:
               <b-field  class=" tag is-primary mx-4"> {{ goatHelminthiasis }}</b-field>
           
          </div>

           <div class=" my-4 pl-4">
              Heartwater:
              <span class="tag is-primary mx-4 "> {{ goatHeartwater }}</span>
           
          </div>

        
          <div class=" my-4 pl-4">
              Trauma:
              <span class="tag is-primary mx-4 "> {{ goatTrauma }}</span>
           
          </div>

          <div class=" my-4 pl-4">
            Hemonchosis:
               <span class="tag is-primary mx-4 "> {{ goatHemonchosis }}</span>
           
          </div>

          <div class=" my-4 pl-4">
            Other Diseases:
               <span class="tag is-primary mx-4 "> {{ other }}</span>
           
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
              
               goatHelminthiasis + 
               goatHeartwater +
               goatTrauma + 
               goatHemonchosis+
               other
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
import GoatFilterModal from '~/components/modals/Filter/goat-filter-modal.vue'
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

    var goatHelm = computed(()=> this.goatHelminthiasis)
    var goatHeart = computed(()=>this.goatHeartwater)
    var goatTrau =computed(()=> this.goatTrauma)
    var goatHemo = computed (()=> this.goatHemonchosis)
    var otherD = computed (()=> this.other)
    
    

    var totalConsults =  computed(
                          ()=> this.goatHelminthiasis +
                               this.goatHeartwater+
                               this.goatTrauma+
                               this.goatHemonchosis+
                               this.other
                               
                               
                               
                               )
                       
                        
    // console.log( this.landscape === this.landscaping)

      return {
          startVal:0,
         
          goat_fields:{
              "Consultations By Category":"consultation",
              "Number":"number",
              "Total":"total",
              "Start Date":"start_date",
              "End Date":"end_date"
          },

          

          goat_data:[
              
              {"start_date": startDate,
               "end_date":endDate
              },

            
              
              { 
                "consultation":"Helminthiasis",
                "number":goatHelm
              },

               { "consultation":"Heartwater",
                  "number":goatHeart
              },

               { "consultation":"Trauma",
                  "number":goatTrau
                },

               { "consultation":"Hemonchosis",
                  "number":goatHemo
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

     
      ...mapGetters('vetData', {
       loading: 'loading',
       allPMs: 'allPostMortemRecords',

       goatHelminthiasis:'allGoatHelminthiasisRecords',
       goatHeartwater:'allGoatHeartWaterRecords',    
       goatTrauma:'allGoatTraumaRecords',
       goatHemonchosis:'allGoatHemonchosisRecords',
       other:'allOtherGoatDiseaseRecords',

       startTime:'filteredGoatPMStartTime',
       endTime:'filteredGoatPMEndTime',

        
      

      
    
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
      ...mapActions('vetData', ['getAllPostMortemRecords','getFilteredGoatPMRecords', 'load']),


      filter() {
      
      setTimeout(() => {
        this.$buefy.modal.open({
          parent: this,
          component: GoatFilterModal,
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
