<template>
    <div class="modal-card ">
      <header class="modal-card-head">
        <h3 class="modal-card-title">Sunflower Cake (SC) Submission Snapshot</h3>
       
        <button type="button" class="delete" @click="close"></button>
      </header>
      <section class="modal-card-body has-background-white">
        <!-- Modal Content -->
        <div>
         <b-form v-model="scFeedSubmissionsForm" class="form">

            <h4> <span class="is-blue"> Date of Sample Collected </span></h4>
            
            <div class="columns">
      
            <div  class="column is-three-quarters">
            
            <b-datepicker v-model="scDateOfSampleCollected" placeholder="--select date--"></b-datepicker>
            </div>
            </div>


            
            <h4> <span class="is-blue"> Time </span></h4>
            
            <div class="columns">
                <div  class="column is-three-quarters">
                    <b-timepicker
                        v-model="scTimeOfReceipt"
                        placeholder="--select a time--"
                        :min-time="minTime"
                        :max-time="maxTime">
                    </b-timepicker>
                </div>
            </div>


  
          <h4> <span class="is-blue"> Submission No.</span></h4>
  
            <div class="columns">
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="scSubmissionNumber" placeholder="submission no..."></b-input>
              </div>
            </div>
  
            <h4> <span class="is-blue">Supplier Name</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="scSupplierName" placeholder="Supplier Name..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">NRC</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="scNRC" placeholder="NRC..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">Vehicle Reg No.</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="scVehicleRegNumber" placeholder="Vehicle Reg No.."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Tel No.</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="scTelNumber" placeholder="Tel No.."></b-input>
              </div>
  
            </div>
            


            <h4> <span class="is-blue">Email</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="scEmail" placeholder="Email.."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">Sample ID</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="scSampleID" placeholder="Sample ID..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Type Of Sample</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="scTypeOfSample" placeholder="Type Of Sample..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Site/Location</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="scSiteLocation" placeholder="Site/Location..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Tel No of bags/tonnage_Vehicle</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="scNumberOfBagsPerTonnage" placeholder="No of bags/tonnage_Vehicle..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">No of Bags Sampled</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="scNumberOfBagsSampled" placeholder="No of Bags Sampled..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Color</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="scColor" placeholder="Color..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Smell</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="scSmell" placeholder="Smell..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Texture</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="scTexture" placeholder="Texture..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Foreign Bodies</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="scForeignBodies" placeholder="Foreign Bodies..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Weevils/Insects</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="scWeevilsOrInsects" placeholder="Weevils/Insects..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">Bran Content</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="scBranContent" placeholder="Bran Content..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Grit Content</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="scGritContent" placeholder="Grit Content..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">Powder Content</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="scPowderContent" placeholder="Powder Content..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">Other</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="scOther" placeholder="Other..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">Moisture</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="scMoisture" placeholder="Moisture..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">Technician</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="scTechnician" placeholder="Technician..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">Overall Qualitative Score</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="scQualitativeScore" placeholder="Qualitative Score..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Final Verdict</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="scFinalVerdict" placeholder="Final Verdict..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">Reasons For Verdict</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="scReasonForVerdict" placeholder="Reason For Verdict..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">If reason is other(Indicate)</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="scOtherReason" placeholder="If reason is other(Indicate)..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">No. of Bags/Tonnage Selected</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="scNumberOfBagsOrTonnageSelected" placeholder="No. of Bags/Tonnage Selected..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">No. of Bags/Tonnage Rejected</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="scNumberOfBagsOrTonnageRejected" placeholder="No. of Bags/Tonnage Rejected..."></b-input>
              </div>
  
            </div>
           
            
  



           
          <div class=" card my-4 ">
               
             <div class=" summary-content">
               <h2 class="tag is-info is-light mx-4 mb-4 summary">Summary</h2>
               
              
          
               <p class="mx-4 cat">Date Of Submission:  {{ scDateOfSampleCollected}}</p>
  
               <p class="mx-4 cat"> Time :  {{ scTimeOfReceipt }}</p>

               <p class="mx-4 cat"> Submission No:  {{ scSubmissionNumber }}</p>

               <p class="mx-4 cat"> Supplier Name :  {{ scSupplierName }}</p>

               <p class="mx-4 cat"> NRC :  {{ scNRC}}</p> 
  
               <p class="mx-4 cat"> Vehicle Reg No. :  {{ scVehicleRegNumber }}</p>

               <p class="mx-4 cat">Tel No.:  {{ scTelNumber }}</p>
  
               <p class="mx-4 cat"> Email :  {{ scEmail }}</p>

               <p class="mx-4 cat"> SampleID:  {{ scSampleID }}</p>

               <p class="mx-4 cat"> Type Of Sample :  {{ scTypeOfSample }}</p>

               <p class="mx-4 cat"> Site/Location :  {{ scSiteLocation}}</p> 
  
               <p class="mx-4 cat"> No. Of Bags/Tonnage_Vehicle :  {{ scNumberOfBagsPerTonnage }}</p>

               <p class="mx-4 cat"> No. Of Bags Sampled :  {{ scNumberOfBagsSampled }}</p>

               <p class="mx-4 cat">Color:  {{ scColor }}</p>
  
               <p class="mx-4 cat"> Smell :  {{ scSmell }}</p>

               <p class="mx-4 cat"> Texture:  {{ scTexture }}</p>

               <p class="mx-4 cat"> Foreign Bodies :  {{ scForeignBodies }}</p>

               <p class="mx-4 cat"> Weevils/Insects :  {{ scWeevilsOrInsects}}</p> 
  
               <p class="mx-4 cat"> Bran Content :  {{ scBranContent }}</p>

               <p class="mx-4 cat"> Grit Content :  {{ scGritContent }}</p>

               <p class="mx-4 cat">Powder Content:  {{ scPowderContent }}</p>
  
               <p class="mx-4 cat"> Other :  {{ scOther }}</p>

               <p class="mx-4 cat"> Moisture:  {{ scMoisture }}</p>

               <p class="mx-4 cat"> Technician :  {{ scTechnician }}</p>

               <p class="mx-4 cat"> Overall Qualitative Score :  {{ scQualitativeScore}}</p> 
  
               <p class="mx-4 cat"> Final Verdict :  {{ scFinalVerdict }}</p>

               <p class="mx-4 cat"> Reason For Verdict :  {{ scReasonForVerdict }}</p>

               <p class="mx-4 cat"> If Reason is Other, Indicate :  {{ scOtherReason}}</p> 
  
               <p class="mx-4 cat"> No. Of Bags/Tonnage Selected :  {{ scNumberOfBagsOrTonnageSelected }}</p>

               <p class="mx-4 cat"> No. Of Bags/Tonnage Rejected :  {{ scNumberOfBagsOrTonnageRejected }}</p>
  
                          
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
    name: 'SCModal',
  
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

                    "scFeedSubmissionsForm",

                    "scFeedSubmissionsForm.scDateOfSampleCollected",
                
                    "scFeedSubmissionsForm.scTimeOfReceipt",

                    "scFeedSubmissionsForm.scSubmissionNumber" ,

                    "scFeedSubmissionsForm.scSupplierName", 

                    "scFeedSubmissionsForm.scNRC",
            
                    "scFeedSubmissionsForm.scVehicleRegNumber" ,

                    "scFeedSubmissionsForm.scTelNumber", 

                    "scFeedSubmissionsForm.scEmail", 

                    "scFeedSubmissionsForm.scSampleID",

                    "scFeedSubmissionsForm.scTypeOfSample",

                    "scFeedSubmissionsForm.scSiteLocation", 

                    "scFeedSubmissionsForm.scNumberOfBagsPerTonnage",

                    "scFeedSubmissionsForm.scNumberOfBagsSampled",

                    "scFeedSubmissionsForm.scColor",

                    "scFeedSubmissionsForm.scSmell",

                    "scFeedSubmissionsForm.scTexture",

                    "scFeedSubmissionsForm.scForeignBodies",

                    "scFeedSubmissionsForm.scWeevilsOrInsects", 

                    "scFeedSubmissionsForm.scBranContent",

                    "scFeedSubmissionsForm.scGritContent",

                    "scFeedSubmissionsForm.scPowderContent",

                    "scFeedSubmissionsForm.scOther",

                    "scFeedSubmissionsForm.scMoisture",

                    "scFeedSubmissionsForm.scTechnician",

                    "scFeedSubmissionsForm.scQualitativeScore" ,

                    "scFeedSubmissionsForm.scFinalVerdict",

                    "scFeedSubmissionsForm.scReasonForVerdict",

                    "scFeedSubmissionsForm.scOtherReason", 

                    "scFeedSubmissionsForm.scNumberOfBagsOrTonnageSelected",

                    "scFeedSubmissionsForm.scNumberOfBagsOrTonnageRejected"
                            
      
        
    ]),
  
        ...mapGetters('labData', {
        // sc: 'selectedscRecord',
      //  scLoading: 'loading',
      }),
  
     },
  
     
  
    // },
  
    mounted() {},
  
    
  
    methods: {
        ...mapActions('labData', ['addNewSCRecord','getAllscSubmissionsRecords', 'load']),
  
     loading() {
       // return this.scLoading 
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
            
           await this.addNewSCRecord();
  
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
          message: 'Sunflower Cake (SC) Submissions Snapshot closed.',
          duration: 2000,
          position: 'is-bottom',
          type: 'is-warning ',
        })
        this.$parent.close()
      },
  
      clearForm() {
  
       this.scFeedSubmissionsForm = {
        
                    scDateOfSampleCollected:null,
                
                    scTimeOfReceipt:null,

                    scSubmissionNumber:null,

                    scSupplierName:null, 

                    scNRC:null,
            
                    scVehicleRegNumber:null,

                    scTelNumber:null, 

                    scEmail:null, 

                    scSampleID:null,

                    scTypeOfSample:null,

                    scSiteLocation:null, 

                    scNumberOfBagsPerTonnage:null,

                    scNumberOfBagsSampled:null,

                    scColor:null,

                    scSmell:null,

                    scTexture:null,

                    scForeignBodies:null,

                    scWeevilsOrInsects:null, 

                    scBranContent:null,

                    scGritContent:null,

                    scPowderContent:null,

                    scOther:null,

                    scMoisture:null,

                    scTechnician:null,

                    scQualitativeScore:null,

                    scFinalVerdict:null,

                    scReasonForVerdict:null,

                    scOtherReason:null, 

                    scNumberOfBagsOrTonnageSelected:null,

                    scNumberOfBagsOrTonnageRejected:null
       
  
          
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
  