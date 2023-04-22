<template>
    <div class="modal-card ">
      <header class="modal-card-head">
        <h3 class="modal-card-title">Soya(FF) Submission Snapshot</h3>
       
        <button type="button" class="delete" @click="close"></button>
      </header>
      <section class="modal-card-body has-background-white">
        <!-- Modal Content -->
        <div>
         <b-form v-model="ffFeedSubmissionsForm" class="form">

            <h4> <span class="is-blue"> Date Received </span></h4>
            
            <div class="columns">
      
            <div  class="column is-three-quarters">
            
            <b-datepicker v-model="ffDateReceived" placeholder="--select date--"></b-datepicker>
            </div>
            </div>

            <h4> <span class="is-blue"> received By</span></h4>
  
            <div class="columns">
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="ffReceivedBy" placeholder="submission no..."></b-input>
              </div>
            </div>

            
            <h4> <span class="is-blue"> Time </span></h4>
            
            <div class="columns">
                <div  class="column is-three-quarters">
                    <b-timepicker
                        v-model="ffTimeOfReceipt"
                        placeholder="--select a time--"
                        :min-time="minTime"
                        :max-time="maxTime">
                    </b-timepicker>
                </div>
            </div>


  
          <h4> <span class="is-blue"> Submission No.</span></h4>
  
            <div class="columns">
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="ffSubmissionNumber" placeholder="submission no..."></b-input>
              </div>
            </div>
  
            <h4> <span class="is-blue">Supplier/Customer</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="ffSupplierName" placeholder="Supplier/Customer..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">NRC</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="ffNRC" placeholder="NRC..."></b-input>
              </div>
  
            </div>


            
            <h4> <span class="is-blue">Tel No.</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="ffTelNumber" placeholder="Tel No.."></b-input>
              </div>
  
            </div>
            


            <h4> <span class="is-blue">Description</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="ffDescription" placeholder="Description..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Site/Location</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="ffSiteLocation" placeholder="Site/Location..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">Sample ID</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="ffSampleID" placeholder="Sample ID..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Sample Packaging</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="ffSamplePackaging" placeholder="Sample Packaging..."></b-input>
              </div>
  
            </div>


           <h4> <span class="is-blue">Sample Labelling</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="ffSampleLabelling" placeholder="Sample Labelling..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Sample Condition</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="ffSampleCondition" placeholder="Sample Condition..."></b-input>
              </div>
  
            </div>
            
            <h4> <span class="is-blue">Test Requested</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="ffTestRequested" placeholder="Test Requested..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Color</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="ffColor" placeholder="Color..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Smell</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="ffSmell" placeholder="Smell..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Texture</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="ffTexture" placeholder="Texture..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Foreign Bodies</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="ffForeignBodies" placeholder="Foreign Bodies..."></b-input>
              </div>
  
            </div>

            
            <h4> <span class="is-blue">Other</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="ffOther" placeholder="Other..."></b-input>
              </div>
  
            </div>

          

            <h4> <span class="is-blue">Overall Qualitative Score</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="ffQualitativeScore" placeholder="Qualitative Score..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Antitrypsin Test</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="ffAntiTrypsinTest" placeholder="Antitrypsin Test..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">Moisture</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="ffMoisture" placeholder="Moisture..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Protein As Is</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="ffProtein" placeholder="Protein..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Fat As Is</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="ffFat" placeholder="Fat..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Ash As Is</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="ffAsh" placeholder="Ash..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Nutritionist Comment</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="ffNutritionistComment" placeholder="Nutritionist Comment..."></b-input>
              </div>
  
            </div>


           
           
            
  



           
          <div class=" card my-4 ">
               
             <div class=" summary-content">
               <h2 class="tag is-info is-light mx-4 mb-4 summary">Summary</h2>
               
              
          
               <p class="mx-4 cat">Date Received:  {{ ffDateReceived}}</p>

               <p class="mx-4 cat">Received By:  {{ ffReceivedBy}}</p>
  
               <p class="mx-4 cat"> Time :  {{ ffTimeOfReceipt }}</p>

               <p class="mx-4 cat"> Submission No:  {{ ffSubmissionNumber }}</p>

               <p class="mx-4 cat"> Supplier Name :  {{ ffSupplierName }}</p>

               <p class="mx-4 cat"> NRC :  {{ ffNRC}}</p> 
  

               <p class="mx-4 cat">Tel No.:  {{ ffTelNumber }}</p>
  
               <p class="mx-4 cat"> Desscription :  {{ ffDesscription }}</p>

               <p class="mx-4 cat"> SampleID:  {{ ffSampleID }}</p>
    

               <p class="mx-4 cat"> Site/Location :  {{ ffSiteLocation}}</p> 

               <p class="mx-4 cat"> Sample Packaging:  {{ ffSamplePackaging}}</p>

               
               <p class="mx-4 cat"> Sample Labelling:  {{ ffSampleLabelling}}</p>

               <p class="mx-4 cat"> Sample Condition:  {{ ffSampleCondition}}</p>
  

               <p class="mx-4 cat">Color:  {{ ffColor }}</p>
  
               <p class="mx-4 cat"> Smell :  {{ ffSmell }}</p>

               <p class="mx-4 cat"> Texture:  {{ ffTexture }}</p>

               <p class="mx-4 cat"> Foreign Bodies :  {{ ffForeignBodies }}</p>
            
  
               <p class="mx-4 cat"> Other :  {{ ffOther }}</p>


               <p class="mx-4 cat"> Overall Qualitative Score :  {{ ffQualitativeScore}}</p> 
  
               <p class="mx-4 cat"> Antitrypsin Test :  {{ ffAntiTrypsinTest }}</p>

               <p class="mx-4 cat"> Moisture :  {{ ffMoisture }}</p>

               <p class="mx-4 cat"> Protein :  {{ ffProtein }}</p>

               <p class="mx-4 cat"> Fat :  {{ ffFat }}</p>

               <p class="mx-4 cat"> Fibre :  {{ ffFibre }}</p>

               <p class="mx-4 cat"> Ash :  {{ ffAsh }}</p>

               <p class="mx-4 cat"> Nutritionist Comments :  {{ ffNutritionistComment }}</p>

  
                          
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
    name: 'FenceModal',
  
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

                    "ffFeedSubmissionsForm",

                    "ffFeedSubmissionsForm.ffDateReceived",

                    "ffFeedSubmissionsForm.ffReceivedBy" ,
                
                    "ffFeedSubmissionsForm.ffTimeOfReceipt",

                    "ffFeedSubmissionsForm.ffSubmissionNumber" ,

                    "ffFeedSubmissionsForm.ffSupplierName", 

                    "ffFeedSubmissionsForm.ffNRC",
             

                    "ffFeedSubmissionsForm.ffTelNumber", 

                    "ffFeedSubmissionsForm.ffDescription",

                    "ffFeedSubmissionsForm.ffSiteLocation", 

                    "ffFeedSubmissionsForm.ffSampleID",

                    "ffFeedSubmissionsForm.ffSamplePackaging",

                    "ffFeedSubmissionsForm.ffSampleLabelling",

                    "ffFeedSubmissionsForm.ffSampleCondition",

                    "ffFeedSubmissionsForm.ffTestRequested",

                    "ffFeedSubmissionsForm.ffColor",

                    "ffFeedSubmissionsForm.ffSmell",

                    "ffFeedSubmissionsForm.ffTexture",

                    "ffFeedSubmissionsForm.ffForeignBodies",

                    "ffFeedSubmissionsForm.ffOther",

                    
                    "ffFeedSubmissionsForm.ffQualitativeScore" ,

                    
                    "ffFeedSubmissionsForm.ffAntiTrypsinTest" ,

                    "ffFeedSubmissionsForm.ffMoisture",



                    "ffFeedSubmissionsForm.ffProtein",

                    "ffFeedSubmissionsForm.ffFat",

                    "ffFeedSubmissionsForm.ffFibre", 

                    "ffFeedSubmissionsForm.ffAsh",

                    "ffFeedSubmissionsForm.ffNutritionistComment"
                            
      
        
    ]),
  
        ...mapGetters('labData', {
        // ff: 'selectedffRecord',
      //  ffLoading: 'loading',
      }),
  
     },
  
     
  
    // },
  
    mounted() {},
  
    
  
    methods: {
        ...mapActions('labData', ['addNewffSubmissionsRecord','getAllffSubmissionsRecords', 'load']),
  
     loading() {
       // return this.ffLoading 
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
            
           await this.addNewffSubmissionsRecord();
  
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
          message: 'No.3 Meal Submissions Snapshot closed.',
          duration: 2000,
          position: 'is-bottom',
          type: 'is-warning ',
        })
        this.$parent.close()
      },
  
      clearForm() {
  
       this.ffFeedSubmissionsForm = {
        
            ffDateReceived:null,

            ffReceivedBy:null ,

            ffTimeOfReceipt:null,

            ffSubmissionNumber:null ,

            ffSupplierName:null, 

            ffNRC:null,

            ffTelNumber:null, 

            ffDescription:null,

            ffSiteLocation:null, 

            ffSampleID:null,

            ffSamplePackaging:null,

            ffSampleLabelling:null,

            ffSampleCondition:null,

            ffTestRequested:null,

            ffColor:null,

            ffSmell:null,

            ffTexture:null,

            ffForeignBodies:null,

            ffOther:null,

            ffQualitativeScore:null ,

            ffAntiTrypsinTest:null ,

            ffMoisture:null,

            ffProtein:null,

            ffFat:null,

            ffFibre:null, 

            ffAsh:null,

            ffNutritionistComment:null
       
  
          
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
  