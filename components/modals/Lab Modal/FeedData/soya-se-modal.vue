<template>
  <div class="modal-card ">
    <header class="modal-card-head">
      <h3 class="modal-card-title">Soya(SE) Submission Snapshot</h3>
     
      <button type="button" class="delete" @click="close"></button>
    </header>
    <section class="modal-card-body has-background-white">
      <!-- Modal Content -->
      <div>
       <b-form v-model="seFeedSubmissionsForm" class="form">

          <h4> <span class="is-blue"> Date Received </span></h4>
          
          <div class="columns">
    
          <div  class="column is-three-quarters">
          
          <b-datepicker v-model="seDateReceived" placeholder="--select date--"></b-datepicker>
          </div>
          </div>

          <h4> <span class="is-blue"> Received By</span></h4>

          <div class="columns">
            
            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="seReceivedBy" placeholder="received by..."></b-input>
            </div>
          </div>

          
          <h4> <span class="is-blue"> Time </span></h4>
          
          <div class="columns">
              <div  class="column is-three-quarters">
                  <b-timepicker
                      v-model="seTimeOfReceipt"
                      placeholder="--select a time--"
                      :min-time="minTime"
                      :max-time="maxTime">
                  </b-timepicker>
              </div>
          </div>



        <h4> <span class="is-blue"> Submission No.</span></h4>

          <div class="columns">
            
            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="seSubmissionNumber" placeholder="submission no..."></b-input>
            </div>
          </div>

          <h4> <span class="is-blue">Supplier/Customer</span></h4>
          <div class="columns">

            
            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="seSupplierName" placeholder="Supplier/Customer..."></b-input>
            </div>

          </div>


          <h4> <span class="is-blue">NRC</span></h4>
          <div class="columns">

            
            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="seNRC" placeholder="NRC..."></b-input>
            </div>

          </div>


          
          <h4> <span class="is-blue">Tel No.</span></h4>
          <div class="columns">

            
            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="seTelNumber" placeholder="Tel No.."></b-input>
            </div>

          </div>
          


          <h4> <span class="is-blue">Description</span></h4>
          <div class="columns">

            
            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="seDescription" placeholder="Description..."></b-input>
            </div>

          </div>

          <h4> <span class="is-blue">Site/Location</span></h4>
          <div class="columns">

            
            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="seSiteLocation" placeholder="Site/Location..."></b-input>
            </div>

          </div>


          <h4> <span class="is-blue">Sample ID</span></h4>
          <div class="columns">

            
            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="seSampleID" placeholder="Sample ID..."></b-input>
            </div>

          </div>

          <h4> <span class="is-blue">Sample Packaging</span></h4>
          <div class="columns">

            
            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="seSamplePackaging" placeholder="Sample Packaging..."></b-input>
            </div>

          </div>


         <h4> <span class="is-blue">Sample Labelling</span></h4>
          <div class="columns">

            
            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="seSampleLabelling" placeholder="Sample Labelling..."></b-input>
            </div>

          </div>

          <h4> <span class="is-blue">Sample Condition</span></h4>
          <div class="columns">

            
            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="seSampleCondition" placeholder="Sample Condition..."></b-input>
            </div>

          </div>
          
          <h4> <span class="is-blue">Test Requested</span></h4>
          <div class="columns">

            
            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="seTestRequested" placeholder="Test Requested..."></b-input>
            </div>

          </div>

          <h4> <span class="is-blue">Color</span></h4>
          <div class="columns">

            
            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="seColor" placeholder="Color..."></b-input>
            </div>

          </div>

          <h4> <span class="is-blue">Smell</span></h4>
          <div class="columns">

            
            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="seSmell" placeholder="Smell..."></b-input>
            </div>

          </div>

          <h4> <span class="is-blue">Texture</span></h4>
          <div class="columns">

            
            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="seTexture" placeholder="Texture..."></b-input>
            </div>

          </div>

          <h4> <span class="is-blue">Foreign Bodies</span></h4>
          <div class="columns">

            
            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="seForeignBodies" placeholder="Foreign Bodies..."></b-input>
            </div>

          </div>

          
          <h4> <span class="is-blue">Other</span></h4>
          <div class="columns">

            
            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="seOther" placeholder="Other..."></b-input>
            </div>

          </div>

        

          <h4> <span class="is-blue">Overall Qualitative Score</span></h4>
          <div class="columns">

            
            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="seQualitativeScore" placeholder="Qualitative Score..."></b-input>
            </div>

          </div>

          <h4> <span class="is-blue">Antitrypsin Test</span></h4>
          <div class="columns">

            
            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="seAntiTrypsinTest" placeholder="Antitrypsin Test..."></b-input>
            </div>

          </div>


          <h4> <span class="is-blue">Moisture</span></h4>
          <div class="columns">

            
            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="seMoisture" placeholder="Moisture..."></b-input>
            </div>

          </div>

          <h4> <span class="is-blue">Protein As Is</span></h4>
          <div class="columns">

            
            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="seProtein" placeholder="Protein..."></b-input>
            </div>

          </div>

          <h4> <span class="is-blue">Fat As Is</span></h4>
          <div class="columns">

            
            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="seFat" placeholder="Fat..."></b-input>
            </div>

          </div>

          <h4> <span class="is-blue">Fibre As Is</span></h4>
          <div class="columns">

            
            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="seFibre" placeholder="Fat..."></b-input>
            </div>

          </div>

          <h4> <span class="is-blue">Ash As Is</span></h4>
          <div class="columns">

            
            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="seAsh" placeholder="Ash..."></b-input>
            </div>

          </div>

          <h4> <span class="is-blue">Nutritionist Comment</span></h4>
          <div class="columns">

            
            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="seNutritionistComment" placeholder="Nutritionist Comment..."></b-input>
            </div>

          </div>

          <h4> <span class="is-blue">Second Comment</span></h4>
          <div class="columns">

            
            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="seSecondComment" placeholder="Nutritionist Comment..."></b-input>
            </div>

          </div>



         
         
          




         
        <div class=" card my-4 ">
             
           <div class=" summary-content">
             <h2 class="tag is-info is-light mx-4 mb-4 summary">Summary</h2>
             
            
        
             <p class="mx-4 cat">Date Received:  {{ seDateReceived}}</p>

             <p class="mx-4 cat">Received By:  {{ seReceivedBy}}</p>

             <p class="mx-4 cat"> Time :  {{ seTimeOfReceipt }}</p>

             <p class="mx-4 cat"> Submission No:  {{ seSubmissionNumber }}</p>

             <p class="mx-4 cat"> Supplier Name :  {{ seSupplierName }}</p>

             <p class="mx-4 cat"> NRC :  {{ seNRC}}</p> 


             <p class="mx-4 cat">Tel No.:  {{ seTelNumber }}</p>

             <p class="mx-4 cat"> Description :  {{ seDescription }}</p>

             <p class="mx-4 cat"> SampleID:  {{ seSampleID }}</p>
  

             <p class="mx-4 cat"> Site/Location :  {{ seSiteLocation}}</p> 

             <p class="mx-4 cat"> Sample Packaging:  {{ seSamplePackaging}}</p>

             
             <p class="mx-4 cat"> Sample Labelling:  {{ seSampleLabelling}}</p>

             <p class="mx-4 cat"> Sample Condition:  {{ seSampleCondition}}</p>


             <p class="mx-4 cat">Color:  {{ seColor }}</p>

             <p class="mx-4 cat"> Smell :  {{ seSmell }}</p>

             <p class="mx-4 cat"> Texture:  {{ seTexture }}</p>

             <p class="mx-4 cat"> Foreign Bodies :  {{ seForeignBodies }}</p>
          

             <p class="mx-4 cat"> Other :  {{ seOther }}</p>


             <p class="mx-4 cat"> Overall Qualitative Score :  {{ seQualitativeScore}}</p> 

             <p class="mx-4 cat"> Antitrypsin Test :  {{ seAntiTrypsinTest }}</p>

             <p class="mx-4 cat"> Moisture :  {{ seMoisture }}</p>

             <p class="mx-4 cat"> Protein :  {{ seProtein }}</p>

             <p class="mx-4 cat"> Fat :  {{ seFat }}</p>

             <p class="mx-4 cat"> Fibre :  {{ seFibre }}</p>

             <p class="mx-4 cat"> Ash :  {{ seAsh }}</p>

             <p class="mx-4 cat"> Nutritionist Comments :  {{ seNutritionistComment }}</p>

             <p class="mx-4 cat"> Second Comment :  {{ seSecondComment }}</p>


                        
           </div>
         </div>



       <b-button @click="onSubmit" type="is-info">Add </b-button>

       </b-form>

      </div>
    </section>
    <footer class="modal-card-foot">
      <b-button label="Close" @click="close" />
      <!-- <b-button
        label="Submit"
        type="is-primary"
        icon-left="account"
        @click="onSubmit"
      /> -->
    </footer>
  </div>
</template>

<script>


import { mapActions, mapGetters } from 'vuex'
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'seModal',

   data() {
    return {

      data:[
            
             'Consultations',
             'Sales'
      ],


      isFullPage: true,
      // fenceForm: {
      
      //         clientName:null,
             
      //         clientPhoneNumber:null,

      //         fenceCategory:null,
         
        
      // },
     
    }
  },

   computed: {

      ...mapFields('labData', [

                  "seFeedSubmissionsForm",

                  "seFeedSubmissionsForm.seDateReceived",

                  "seFeedSubmissionsForm.seReceivedBy" ,
              
                  "seFeedSubmissionsForm.seTimeOfReceipt",

                  "seFeedSubmissionsForm.seSubmissionNumber" ,

                  "seFeedSubmissionsForm.seSupplierName", 

                  "seFeedSubmissionsForm.seNRC",
           

                  "seFeedSubmissionsForm.seTelNumber", 

                  "seFeedSubmissionsForm.seDescription",

                  "seFeedSubmissionsForm.seSiteLocation", 

                  "seFeedSubmissionsForm.seSampleID",

                  "seFeedSubmissionsForm.seSamplePackaging",

                  "seFeedSubmissionsForm.seSampleLabelling",

                  "seFeedSubmissionsForm.seSampleCondition",

                  "seFeedSubmissionsForm.seTestRequested",

                  "seFeedSubmissionsForm.seColor",

                  "seFeedSubmissionsForm.seSmell",

                  "seFeedSubmissionsForm.seTexture",

                  "seFeedSubmissionsForm.seForeignBodies",

                  "seFeedSubmissionsForm.seOther",

                  
                  "seFeedSubmissionsForm.seQualitativeScore" ,

                  
                  "seFeedSubmissionsForm.seAntiTrypsinTest" ,

                  "seFeedSubmissionsForm.seMoisture",



                  "seFeedSubmissionsForm.seProtein",

                  "seFeedSubmissionsForm.seFat",

                  "seFeedSubmissionsForm.seFibre", 

                  "seFeedSubmissionsForm.seAsh",

                  "seFeedSubmissionsForm.seNutritionistComment",

                  "seFeedSubmissionsForm.seSecondComment"
                          
    
      
  ]),

      ...mapGetters('labData', {
      // se: 'selectedseRecord',
    //  seLoading: 'loading',
    }),

   },

   

  // },

  mounted() {},

  

  methods: {
      ...mapActions('labData', ['addNewSERecord','getAllSERecords', 'load']),

   loading() {
     // return this.seLoading 
    },


    async onSubmit() {

       await this.$buefy.dialog.confirm({
        title: 'Add New Record',
        message: 'Proceed to add new entry?',
        cancelText: 'Cancel',
        confirmText: 'Yes, entries are correct',
        type: 'is-success is-light',
        hasIcon: true,
        onConfirm: async () => {
          
         await this.addNewSERecord();

          this.$buefy.toast.open({
            duration: 3000,
            message: 'New Record Successfully Added!',
            position: 'is-top',
            type: 'is-success',
          })
           this.clearForm();
          showNotifications();
          this.$parent.close()
        },
      })
   

            function showNotifications(){
   const notification = new Notification("Task data added.", {
       body: "Be sure to check your sales data periodically.",
       icon: '@/assets/pug3.jpg'
   }); 

      
        }

    },

    close() {
      this.$buefy.toast.open({
        message: 'Soya se Submissions Snapshot closed.',
        duration: 2000,
        position: 'is-bottom',
        type: 'is-warning ',
      })
      this.$parent.close()
    },

    clearForm() {

     this.seFeedSubmissionsForm = {
      
          seDateReceived:null,

          seReceivedBy:null ,

          seTimeOfReceipt:null,

          seSubmissionNumber:null ,

          seSupplierName:null, 

          seNRC:null,

          seTelNumber:null, 

          seDescription:null,

          seSiteLocation:null, 

          seSampleID:null,

          seSamplePackaging:null,

          seSampleLabelling:null,

          seSampleCondition:null,

          seTestRequested:null,

          seColor:null,

          seSmell:null,

          seTexture:null,

          seForeignBodies:null,

          seOther:null,

          seQualitativeScore:null ,

          seAntiTrypsinTest:null ,

          seMoisture:null,

          seProtein:null,

          seFat:null,

          seFibre:null, 

          seAsh:null,

          seNutritionistComment:null,

          seSecondComment:null
     

        
      }
      
    }
  },

  
}
</script>

<style scoped>
.modal-width-auto {
  width: auto;
}

.yellow{
  color: rgb(193, 108, 28);
}
.summary{
  font-size: 1.6rem;
}
.summary-content p{
  margin-top: 12px;
  margin-bottom: 12px;
}

.summary-content {
  padding-bottom: 10px;
}


.is-blue{
  color: rgb(0, 118, 228);
font-family:'Times New Roman', Times, serif;
  font-size: 1.2rem;
  
}

p{ 
  font-size: 1.0rem;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.cat{
  font-weight: normal;
}
</style>
