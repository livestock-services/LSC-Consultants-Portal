<template>
    <div class="modal-card ">
      <header class="modal-card-head">
        <h3 class="modal-card-title">Soya(ME) Submission Snapshot</h3>
       
        <button type="button" class="delete" @click="close"></button>
      </header>
      <section class="modal-card-body has-background-white">
        <!-- Modal Content -->
        <div>
         <b-form v-model="meFeedSubmissionsForm" class="form">

            <h4> <span class="is-blue"> Date Received </span></h4>
            
            <div class="columns">
      
            <div  class="column is-three-quarters">
            
            <b-datepicker v-model="meDateReceived" placeholder="--select date--"></b-datepicker>
            </div>
            </div>

            <h4> <span class="is-blue"> Received By</span></h4>
  
            <div class="columns">
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="meReceivedBy" placeholder="submission no..."></b-input>
              </div>
            </div>

            
            <h4> <span class="is-blue"> Time </span></h4>
            
            <div class="columns">
                <div  class="column is-three-quarters">
                    <b-timepicker
                        v-model="meTimeOfReceipt"
                        placeholder="--select a time--"
                        :min-time="minTime"
                        :max-time="maxTime">
                    </b-timepicker>
                </div>
            </div>


  
          <h4> <span class="is-blue"> Submission No.</span></h4>
  
            <div class="columns">
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="meSubmissionNumber" placeholder="submission no..."></b-input>
              </div>
            </div>
  
            <h4> <span class="is-blue">Supplier/Customer</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="meSupplierName" placeholder="Supplier/Customer..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">NRC</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="meNRC" placeholder="NRC..."></b-input>
              </div>
  
            </div>


            
            <h4> <span class="is-blue">Tel No.</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="meTelNumber" placeholder="Tel No.."></b-input>
              </div>
  
            </div>
            


            <h4> <span class="is-blue">Description</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="meDescription" placeholder="Description..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Site/Location</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="meSiteLocation" placeholder="Site/Location..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">Sample ID</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="meSampleID" placeholder="Sample ID..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Sample Packaging</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="meSamplePackaging" placeholder="Sample Packaging..."></b-input>
              </div>
  
            </div>


           <h4> <span class="is-blue">Sample Labelling</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="meSampleLabelling" placeholder="Sample Labelling..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Sample Condition</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="meSampleCondition" placeholder="Sample Condition..."></b-input>
              </div>
  
            </div>
            
            <h4> <span class="is-blue">Test Requested</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="meTestRequested" placeholder="Test Requested..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Color</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="meColor" placeholder="Color..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Smell</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="meSmell" placeholder="Smell..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Texture</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="meTexture" placeholder="Texture..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Foreign Bodies</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="meForeignBodies" placeholder="Foreign Bodies..."></b-input>
              </div>
  
            </div>

            
            <h4> <span class="is-blue">Other</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="meOther" placeholder="Other..."></b-input>
              </div>
  
            </div>

          

            <h4> <span class="is-blue">Overall Qualitative Score</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="meQualitativeScore" placeholder="Qualitative Score..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Antitrypsin Test</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="meAntiTrypsinTest" placeholder="Antitrypsin Test..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">Moisture</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="meMoisture" placeholder="Moisture..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Protein As Is</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="meProtein" placeholder="Protein..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Fat As Is</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="meFat" placeholder="Fat..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Fibre As Is</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="meFibre" placeholder="Fat..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Ash As Is</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="meAsh" placeholder="Ash..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Nutritionist Comment</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="meNutritionistComment" placeholder="Nutritionist Comment..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Second Comment</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="meSecondComment" placeholder="Nutritionist Comment..."></b-input>
              </div>
  
            </div>



           
           
            
  



           
          <div class=" card my-4 ">
               
             <div class=" summary-content">
               <h2 class="tag is-info is-light mx-4 mb-4 summary">Summary</h2>
               
              
          
               <p class="mx-4 cat">Date Received:  {{ meDateReceived}}</p>

               <p class="mx-4 cat">Received By:  {{ meReceivedBy}}</p>
  
               <p class="mx-4 cat"> Time :  {{ meTimeOfReceipt }}</p>

               <p class="mx-4 cat"> Submission No:  {{ meSubmissionNumber }}</p>

               <p class="mx-4 cat"> Supplier Name :  {{ meSupplierName }}</p>

               <p class="mx-4 cat"> NRC :  {{ meNRC}}</p> 
  

               <p class="mx-4 cat">Tel No.:  {{ meTelNumber }}</p>
  
               <p class="mx-4 cat"> Desscription :  {{ meDesscription }}</p>

               <p class="mx-4 cat"> SampleID:  {{ meSampleID }}</p>
    

               <p class="mx-4 cat"> Site/Location :  {{ meSiteLocation}}</p> 

               <p class="mx-4 cat"> Sample Packaging:  {{ meSamplePackaging}}</p>

               
               <p class="mx-4 cat"> Sample Labelling:  {{ meSampleLabelling}}</p>

               <p class="mx-4 cat"> Sample Condition:  {{ meSampleCondition}}</p>
  

               <p class="mx-4 cat">Color:  {{ meColor }}</p>
  
               <p class="mx-4 cat"> Smell :  {{ meSmell }}</p>

               <p class="mx-4 cat"> Texture:  {{ meTexture }}</p>

               <p class="mx-4 cat"> Foreign Bodies :  {{ meForeignBodies }}</p>
            
  
               <p class="mx-4 cat"> Other :  {{ meOther }}</p>


               <p class="mx-4 cat"> Overall Qualitative Score :  {{ meQualitativeScore}}</p> 
  
               <p class="mx-4 cat"> Antitrypsin Test :  {{ meAntiTrypsinTest }}</p>

               <p class="mx-4 cat"> Moisture :  {{ meMoisture }}</p>

               <p class="mx-4 cat"> Protein :  {{ meProtein }}</p>

               <p class="mx-4 cat"> Fat :  {{ meFat }}</p>

               <p class="mx-4 cat"> Fibre :  {{ meFibre }}</p>

               <p class="mx-4 cat"> Ash :  {{ meAsh }}</p>

               <p class="mx-4 cat"> Nutritionist Comments :  {{ meNutritionistComment }}</p>

               <p class="mx-4 cat"> Second Comment :  {{ meSecondComment }}</p>

  
                          
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
    name: 'MEModal',
  
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

                    "meFeedSubmissionsForm",

                    "meFeedSubmissionsForm.meDateReceived",

                    "meFeedSubmissionsForm.meReceivedBy" ,
                
                    "meFeedSubmissionsForm.meTimeOfReceipt",

                    "meFeedSubmissionsForm.meSubmissionNumber" ,

                    "meFeedSubmissionsForm.meSupplierName", 

                    "meFeedSubmissionsForm.meNRC",
             

                    "meFeedSubmissionsForm.meTelNumber", 

                    "meFeedSubmissionsForm.meDescription",

                    "meFeedSubmissionsForm.meSiteLocation", 

                    "meFeedSubmissionsForm.meSampleID",

                    "meFeedSubmissionsForm.meSamplePackaging",

                    "meFeedSubmissionsForm.meSampleLabelling",

                    "meFeedSubmissionsForm.meSampleCondition",

                    "meFeedSubmissionsForm.meTestRequested",

                    "meFeedSubmissionsForm.meColor",

                    "meFeedSubmissionsForm.meSmell",

                    "meFeedSubmissionsForm.meTexture",

                    "meFeedSubmissionsForm.meForeignBodies",

                    "meFeedSubmissionsForm.meOther",

                    
                    "meFeedSubmissionsForm.meQualitativeScore" ,

                    
                    "meFeedSubmissionsForm.meAntiTrypsinTest" ,

                    "meFeedSubmissionsForm.meMoisture",



                    "meFeedSubmissionsForm.meProtein",

                    "meFeedSubmissionsForm.meFat",

                    "meFeedSubmissionsForm.meFibre", 

                    "meFeedSubmissionsForm.meAsh",

                    "meFeedSubmissionsForm.meNutritionistComment",

                    "meFeedSubmissionsForm.meSecondComment"
                            
      
        
    ]),
  
        ...mapGetters('labData', {
        // me: 'selectedmeRecord',
      //  meLoading: 'loading',
      }),
  
     },
  
     
  
    // },
  
    mounted() {},
  
    
  
    methods: {
        ...mapActions('labData', ['addNewMERecord','getAllMERecords', 'load']),
  
     loading() {
       // return this.meLoading 
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
            
           await this.addNewMERecord();
  
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
          message: 'Soya (ME) Submissions Snapshot closed.',
          duration: 2000,
          position: 'is-bottom',
          type: 'is-warning ',
        })
        this.$parent.close()
      },
  
      clearForm() {
  
       this.meFeedSubmissionsForm = {
        
            meDateReceived:null,

            meReceivedBy:null ,

            meTimeOfReceipt:null,

            meSubmissionNumber:null ,

            meSupplierName:null, 

            meNRC:null,

            meTelNumber:null, 

            meDescription:null,

            meSiteLocation:null, 

            meSampleID:null,

            meSamplePackaging:null,

            meSampleLabelling:null,

            meSampleCondition:null,

            meTestRequested:null,

            meColor:null,

            meSmell:null,

            meTexture:null,

            meForeignBodies:null,

            meOther:null,

            meQualitativeScore:null ,

            meAntiTrypsinTest:null ,

            meMoisture:null,

            meProtein:null,

            meFat:null,

            meFibre:null, 

            meAsh:null,

            meNutritionistComment:null,

            meSecondComment:null
       
  
          
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
  