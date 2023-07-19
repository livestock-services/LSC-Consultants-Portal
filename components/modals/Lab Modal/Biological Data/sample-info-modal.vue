<template>
    <div class="modal-card ">
      <header class="modal-card-head">
        <h3 class="modal-card-title">Sample Information Snapshot</h3>
       
        <button type="button" class="delete" @click="close"></button>
      </header>
      <section class="modal-card-body has-background-white">
        <!-- Modal Content -->
        <div>
         <b-form v-model="sampleInfoForm" class="form">
  
          <h4> <span class="is-blue"> Submission No.</span></h4>
  
            <div class="columns">
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="submissionNumber" placeholder="submission no..."></b-input>
              </div>
            </div>
  
            <h4> <span class="is-blue">Sample ID</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="sampleID" placeholder="sample ID..."></b-input>
              </div>
  
            </div>
  
            <h4> <span class="is-blue"> Sample Type</span></h4>
  
            <div class="columns">
              
              
  
              <div  class="column is-three-quarters my-2">
              
             
             
              <b-select
                v-model="sampleType"
                  placeholder="-- Select an option --"
                >
                  <option value="BLOOD">BLOOD</option>
                  <option value="FECAL">FECAL</option>
                  <option value="SERUM">SERUM</option>
                  <option value="SEMEN">SEMEN</option>
                  <option value="LIVER">LIVER</option>
                  <option value="SWABS">SWABS</option>
                  <option value="SKIN SCRAPINGS">SKIN SCRAPINGS</option>
                  <option value="EAR SWABS">EAR SWABS</option>
                  <option value="MILK">MILK</option>
                  <option value="SMEAR">SMEAR</option>
                  <option value="ORGAN">ORGAN</option>
                  <option value="BIOPSY">BIOPSY</option>
                  <option value="PUS">PUS</option>
                  <option value="OTHER">OTHER</option>


                  
                </b-select>

                
              </div>
            </div>


           <div v-if="sampleType === 'OTHER'">
            <h7> <span class="is-blue mt-2">Other(If sample type is not on list)</span></h7>
  
              <div class="columns">
                
                

                <div  class="column is-three-quarters">

                  
                  <b-input type="text" v-model="otherSampleType" placeholder="sample type..."></b-input>

                </div>
              </div>
           </div>
  
  
            <h4> <span class="is-blue"> Animal Type </span></h4>
  
            <div class="columns">
              
              
  
              <div  class="column is-three-quarters">
              
                <b-select
                v-model="animalType"
                  placeholder="-- Select an option --"
                >
                  <option value="CATTLE">CATTLE</option>
                  <option value="HORSE">HORSE</option>
                  <option value="ELEPHANT">ELEPHANT</option>
                  <option value="CANNINE">CANNINE</option>
                  <option value="CAT">CAT</option>
                  <option value="GOAT">GOAT</option>
                  <option value="SHEEP">SHEEP</option>
                  <option value="AVIAN">AVIAN</option>
                  <option value="POULTRY">POULTRY</option>
                  <option value="OTHER">OTHER</option>
                 
                 

                  
                </b-select>

              </div>
            </div>
  
  
            <div v-if="animalType === 'OTHER'">
              <h7> <span class="is-blue mt-2">Other(If Animal type is not on list)</span></h7>
  
            <div class="columns">
              
              
  
              <div  class="column is-three-quarters">

                
                <b-input type="text" v-model="otherAnimalType" placeholder="sample type..."></b-input>

              </div>
            </div>
            </div>
            
          
  
           <h4> <span class="is-blue"> Breed </span></h4>
  
            <div class="columns">
              
              
  
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="breed" placeholder="Breed..."></b-input>
              </div>
            </div>

            <h4> <span class="is-blue"> Age </span></h4>
  
            <div class="columns">
                
                

                <div  class="column is-three-quarters">
                
                <b-input type="text" v-model="age" placeholder="enter age here..."></b-input>
                </div>
            </div>


            <h4> <span class="is-blue"> Sex </span></h4>
            
            <div class="columns">
              <b-field class="column is-full">
                <b-select
                  v-model="sex"
                  placeholder="-- Select an option --"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  
                </b-select>
              </b-field>
            </div>


            <h4> <span class="is-blue"> Sample Condition on Receipt </span></h4>
            
            <div class="columns">
              <b-field class="column is-full">
                <b-select
                  v-model="sampleGoodOnReceipt"
                  placeholder="-- Select an option --"
                >
                  <option value="Good">Good</option>
                  <option value="Satisfactory">Satisfactory</option>
                  <option value="Bad">Bad</option>
                  
                </b-select>
              </b-field>
            </div>
            

            <h4> <span class="is-blue"> Date Sample Collected </span></h4>
            
            <div class="columns">
      
            <div  class="column is-three-quarters">
            
            <b-datepicker v-model="dateSampleCollected" placeholder="--select date--"></b-datepicker>
            </div>
            </div>
  


            <h4> <span class="is-blue"> Test Requested </span></h4>
            
            <div class="columns">
              <b-field class="column is-three-quarters">
                <b-input type="text" v-model="testRequested" placeholder="test requested..."></b-input>
              </b-field>
            </div>



            <h4> <span class="is-blue"> Comments </span></h4>
            
            <div class="columns">
                
                

                <div  class="column is-three-quarters">
                
                <b-input type="text" v-model="comments" placeholder="Comments/Remarks..."></b-input>
                </div>
            </div>
  

            <h4> <span class="is-blue"> Lab Findings </span></h4>
            
            <div class="columns">
                
                

                <div  class="column is-three-quarters">
                
                <b-input type="text" v-model="labFindings" placeholder="Lab findings..."></b-input>
                </div>
            </div>
  
  
            
           
           
  
  
           
          <div class=" card my-4 ">
               
             <div class=" summary-content">
               <h2 class="tag is-info is-light mx-4 mb-4 summary">Summary</h2>
               
              
          
               <p class="mx-4 cat">Submission No:  {{submissionNumber}}</p>
  
               <p class="mx-4 cat"> Sample ID :  {{sampleID}}</p>

               <p class="mx-4 cat">Sample Type :  {{sampleType}}</p> 
  
               <p class="mx-4 cat">Sample Type :  {{animalType}}</p> 

               <p class="mx-4 cat">Other(Sample Type) :  {{otherSampleType}}</p> 
  
               <p class="mx-4 cat">Other(Animal Type):  {{otherAnimalType}}</p> 
  
               <p class="mx-4 cat">breed :  {{breed}}</p>
  
               <p class="mx-4 cat">Age :  {{age}}</p>
                
               <p class="mx-4 cat">Sex:  {{sex}}</p>
  
               <p class="mx-4 cat"> Sample Good on Receipt :  {{sampleGoodOnReceipt}}</p>
  
               <p class="mx-4 cat">Date Sample Collected :  {{dateSampleCollected}}</p> 
  
               <p class="mx-4 cat">Test Requested :  {{testRequested}}</p>
  
               <p class="mx-4 cat">Comments :  {{comments}}</p>

               <p class="mx-4 cat">Lab Findings :  {{labFindings}}</p>
              
           
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
        'sampleInfoForm',
        'sampleInfoForm.submissionNumber',
        'sampleInfoForm.sampleID',
        'sampleInfoForm.sampleType',
        'sampleInfoForm.animalType',
        'sampleInfoForm.otherSampleType',
        'sampleInfoForm.otherAnimalType',
        'sampleInfoForm.breed',
        'sampleInfoForm.age',
        'sampleInfoForm.sex',
        'sampleInfoForm.sampleGoodOnReceipt',
        'sampleInfoForm.dateSampleCollected',
        'sampleInfoForm.testRequested',
        'sampleInfoForm.comments',
        'sampleInfoForm.labFindings',
      
      
        
    ]),
  
        ...mapGetters('labData', {
         sampleInfo: 'selectedSampleInformationRecord',
        sampleLoading: 'loading',
      }),
  
     },
  
     
  
    // },
  
    mounted() {},
  
    
  
    methods: {
        ...mapActions('labData', ['addNewSampleInformationRecord','getAllSampleInformationRecords', 'load']),
  
     loading() {
        return this.sampleInfoLoading 
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
            
           await this.addNewSampleInformationRecord();
  
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
          message: 'pig Snapshot closed.',
          duration: 2000,
          position: 'is-bottom',
          type: 'is-warning ',
        })
        this.$parent.close()
      },
  
      clearForm() {
  
       this.sampleInfoForm = {
        
        submissionNumber:null,
        sampleID:null,
        sampleType:null,
        animalType:null,
        otherSampleType:null,
        otherAnimalType:null,
        breed:null,
        age:null,
        sex:null,
        sampleGoodOnReceipt:null,
        dateSampleCollected:null,
        testRequested:null,
        comments:null,
        labFindings:null,
  
          
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
  