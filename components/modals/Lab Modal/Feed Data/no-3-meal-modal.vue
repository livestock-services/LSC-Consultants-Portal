<template>
    <div class="modal-card ">
      <header class="modal-card-head">
        <h3 class="modal-card-title">No.3 Meal Submission Snapshot</h3>
       
        <button type="button" class="delete" @click="close"></button>
      </header>
      <section class="modal-card-body has-background-white">
        <!-- Modal Content -->
        <div>
         <b-form v-model="nmFeedSubmissionsForm" class="form">

            <h4> <span class="is-blue"> Date of Sample Collected </span></h4>
            
            <div class="columns">
      
            <div  class="column is-three-quarters">
            
            <b-datepicker v-model="nmDateOfSampleCollected" placeholder="--select date--"></b-datepicker>
            </div>
            </div>


            
            <h4> <span class="is-blue"> Time </span></h4>
            
            <div class="columns">
                <div  class="column is-three-quarters">
                    <b-timepicker
                        v-model="nmTimeOfReceipt"
                        placeholder="--select a time--"
                        :min-time="minTime"
                        :max-time="maxTime"
                        disabled>
                        
                    </b-timepicker>
                </div>
            </div>


  
          <h4> <span class="is-blue"> Submission No.</span></h4>
  
            <div class="columns">
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="nmSubmissionNumber" placeholder="submission no..."></b-input>
              </div>
            </div>
  
            <h4> <span class="is-blue">Supplier Name</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="nmSupplierName" placeholder="Supplier Name..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">NRC</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="nmNRC" placeholder="NRC..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">Vehicle Reg No.</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="nmVehicleRegNumber" placeholder="Vehicle Reg No.."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Tel No.</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="nmTelNumber" placeholder="Tel No.."></b-input>
              </div>
  
            </div>
            


            <h4> <span class="is-blue">Email</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="nmEmail" placeholder="Email.."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">Sample ID</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="nmSampleID" placeholder="Sample ID..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Type Of Sample</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="nmTypeOfSample" placeholder="Type Of Sample..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Site/Location</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="nmSiteLocation" placeholder="Site/Location..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Tel No of bags/tonnage_Vehicle</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="nmNumberOfBagsPerTonnage" placeholder="No of bags/tonnage_Vehicle..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">No of Bags Sampled</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="nmNumberOfBagsSampled" placeholder="No of Bags Sampled..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Color</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="nmColor" placeholder="Color..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Smell</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="nmSmell" placeholder="Smell..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Texture</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="nmTexture" placeholder="Texture..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Foreign Bodies</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="nmForeignBodies" placeholder="Foreign Bodies..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Weevils/Insects</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="nmWeevilsOrInsects" placeholder="Weevils/Insects..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">Bran Content</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="nmBranContent" placeholder="Bran Content..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Grit Content</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="nmGritContent" placeholder="Grit Content..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">Powder Content</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="nmPowderContent" placeholder="Powder Content..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">Other</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="nmOther" placeholder="Other..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">Moisture</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="nmMoisture" placeholder="Moisture..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">Technician</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="nmTechnician" placeholder="Technician..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">Overall Qualitative Score</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="nmQualitativeScore" placeholder="Qualitative Score..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Final Verdict</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="nmFinalVerdict" placeholder="Final Verdict..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">Reasons For Verdict</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="nmReasonForVerdict" placeholder="Reason For Verdict..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">If reason is other(Indicate)</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="nmOtherReason" placeholder="If reason is other(Indicate)..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">No. of Bags/Tonnage Selected</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="nmNumberOfBagsOrTonnageSelected" placeholder="No. of Bags/Tonnage Selected..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">No. of Bags/Tonnage Rejected</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="nmNumberOfBagsOrTonnageRejected" placeholder="No. of Bags/Tonnage Rejected..."></b-input>
              </div>
  
            </div>
           
            
  



           
          <div class=" card my-4 ">
               
             <div class=" summary-content">
               <h2 class="tag is-info is-light mx-4 mb-4 summary">Summary</h2>
               
              
          
               <p class="mx-4 cat">Date Of Submission:  {{ nmDateOfSampleCollected}}</p>
  
               <p class="mx-4 cat"> Time :  {{ nmTimeOfReceipt }}</p>

               <p class="mx-4 cat"> Submission No:  {{ nmSubmissionNumber }}</p>

               <p class="mx-4 cat"> Supplier Name :  {{ nmSupplierName }}</p>

               <p class="mx-4 cat"> NRC :  {{ nmNRC}}</p> 
  
               <p class="mx-4 cat"> Vehicle Reg No. :  {{ nmVehicleRegNumber }}</p>

               <p class="mx-4 cat">Tel No.:  {{ nmTelNumber }}</p>
  
               <p class="mx-4 cat"> Email :  {{ nmEmail }}</p>

               <p class="mx-4 cat"> SampleID:  {{ nmSampleID }}</p>

               <p class="mx-4 cat"> Type Of Sample :  {{ nmTypeOfSample }}</p>

               <p class="mx-4 cat"> Site/Location :  {{ nmSiteLocation}}</p> 
  
               <p class="mx-4 cat"> No. Of Bags/Tonnage_Vehicle :  {{ nmNumberOfBagsPerTonnage }}</p>

               <p class="mx-4 cat"> No. Of Bags Sampled :  {{ nmNumberOfBagsSampled }}</p>

               <p class="mx-4 cat">Color:  {{ nmColor }}</p>
  
               <p class="mx-4 cat"> Smell :  {{ nmSmell }}</p>

               <p class="mx-4 cat"> Texture:  {{ nmTexture }}</p>

               <p class="mx-4 cat"> Foreign Bodies :  {{ nmForeignBodies }}</p>

               <p class="mx-4 cat"> Weevils/Insects :  {{ nmWeevilsOrInsects}}</p> 
  
               <p class="mx-4 cat"> Bran Content :  {{ nmBranContent }}</p>

               <p class="mx-4 cat"> Grit Content :  {{ nmGritContent }}</p>

               <p class="mx-4 cat">Powder Content:  {{ nmPowderContent }}</p>
  
               <p class="mx-4 cat"> Other :  {{ nmOther }}</p>

               <p class="mx-4 cat"> Moisture:  {{ nmMoisture }}</p>

               <p class="mx-4 cat"> Technician :  {{ nmTechnician }}</p>

               <p class="mx-4 cat"> Overall Qualitative Score :  {{ nmQualitativeScore}}</p> 
  
               <p class="mx-4 cat"> Final Verdict :  {{ nmFinalVerdict }}</p>

               <p class="mx-4 cat"> Reason For Verdict :  {{ nmReasonForVerdict }}</p>

               <p class="mx-4 cat"> If Reason is Other, Indicate :  {{ nmOtherReason}}</p> 
  
               <p class="mx-4 cat"> No. Of Bags/Tonnage Selected :  {{ nmNumberOfBagsOrTonnageSelected }}</p>

               <p class="mx-4 cat"> No. Of Bags/Tonnage Rejected :  {{ nmNumberOfBagsOrTonnageRejected }}</p>
  
                          
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
    name: 'NMModal',
  
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

                    "nmFeedSubmissionsForm",

                    "nmFeedSubmissionsForm.nmDateOfSampleCollected",
                
                    "nmFeedSubmissionsForm.nmTimeOfReceipt",

                    "nmFeedSubmissionsForm.nmSubmissionNumber" ,

                    "nmFeedSubmissionsForm.nmSupplierName", 

                    "nmFeedSubmissionsForm.nmNRC",
            
                    "nmFeedSubmissionsForm.nmVehicleRegNumber" ,

                    "nmFeedSubmissionsForm.nmTelNumber", 

                    "nmFeedSubmissionsForm.nmEmail", 

                    "nmFeedSubmissionsForm.nmSampleID",

                    "nmFeedSubmissionsForm.nmTypeOfSample",

                    "nmFeedSubmissionsForm.nmSiteLocation", 

                    "nmFeedSubmissionsForm.nmNumberOfBagsPerTonnage",

                    "nmFeedSubmissionsForm.nmNumberOfBagsSampled",

                    "nmFeedSubmissionsForm.nmColor",

                    "nmFeedSubmissionsForm.nmSmell",

                    "nmFeedSubmissionsForm.nmTexture",

                    "nmFeedSubmissionsForm.nmForeignBodies",

                    "nmFeedSubmissionsForm.nmWeevilsOrInsects", 

                    "nmFeedSubmissionsForm.nmBranContent",

                    "nmFeedSubmissionsForm.nmGritContent",

                    "nmFeedSubmissionsForm.nmPowderContent",

                    "nmFeedSubmissionsForm.nmOther",

                    "nmFeedSubmissionsForm.nmMoisture",

                    "nmFeedSubmissionsForm.nmTechnician",

                    "nmFeedSubmissionsForm.nmQualitativeScore" ,

                    "nmFeedSubmissionsForm.nmFinalVerdict",

                    "nmFeedSubmissionsForm.nmReasonForVerdict",

                    "nmFeedSubmissionsForm.nmOtherReason", 

                    "nmFeedSubmissionsForm.nmNumberOfBagsOrTonnageSelected",

                    "nmFeedSubmissionsForm.nmNumberOfBagsOrTonnageRejected"
                            
      
        
    ]),
  
        ...mapGetters('labData', {
        // nm: 'selectedNMRecord',
      //  nmLoading: 'loading',
      }),
  
     },
  
     
  
    // },
  
    mounted() {},
  
    
  
    methods: {
        ...mapActions('labData', ['addNewNMRecord', 'load']),
  
     loading() {
       // return this.nmLoading 
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
            
           await this.addNewNMRecord();
  
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
  
       this.nmFeedSubmissionsForm = {
        
                    nmDateOfSampleCollected:null,
                
                    nmTimeOfReceipt:null,

                    nmSubmissionNumber:null,

                    nmSupplierName:null, 

                    nmNRC:null,
            
                    nmVehicleRegNumber:null,

                    nmTelNumber:null, 

                    nmEmail:null, 

                    nmSampleID:null,

                    nmTypeOfSample:null,

                    nmSiteLocation:null, 

                    nmNumberOfBagsPerTonnage:null,

                    nmNumberOfBagsSampled:null,

                    nmColor:null,

                    nmSmell:null,

                    nmTexture:null,

                    nmForeignBodies:null,

                    nmWeevilsOrInsects:null, 

                    nmBranContent:null,

                    nmGritContent:null,

                    nmPowderContent:null,

                    nmOther:null,

                    nmMoisture:null,

                    nmTechnician:null,

                    nmQualitativeScore:null,

                    nmFinalVerdict:null,

                    nmReasonForVerdict:null,

                    nmOtherReason:null, 

                    nmNumberOfBagsOrTonnageSelected:null,

                    nmNumberOfBagsOrTonnageRejected:null
       
  
          
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
  