<template>
    <div class="modal-card ">
      <header class="modal-card-head">
        <h3 class="modal-card-title">Feed Submission Snapshot</h3>
       
        <button type="button" class="delete" @click="close"></button>
      </header>
      <section class="modal-card-body has-background-white">
        <!-- Modal Content -->
        <div>
         <b-form v-model="feedSubmissionsForm" class="form">
  
          <h4> <span class="is-blue"> Submission No.</span></h4>
  
            <div class="columns">
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="feedSubmissionNumber" placeholder="submission no..."></b-input>
              </div>
            </div>
  
            <h4> <span class="is-blue">Client Name</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="feedClientName" placeholder="Client Name..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">Description</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="feedDescription" placeholder="Description..."></b-input>
              </div>
  
            </div>


            <h4> <span class="is-blue">Type of Sample</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="typeOfSample" placeholder="Type of Sample..."></b-input>
              </div>
  
            </div>
  
           
            <h4> <span class="is-blue"> Date Submitted </span></h4>
            
            <div class="columns">
      
            <div  class="column is-three-quarters">
            
            <b-datepicker v-model="dateSubmitted" placeholder="--select date--"></b-datepicker>
            </div>
            </div>
  


            <h4> <span class="is-blue"> Time Stamp </span></h4>
            
            <div class="columns">
                <div  class="column is-three-quarters">
                    <b-timepicker
                        v-model="timeStamp"
                        placeholder="--select a time--"
                        :min-time="minTime"
                        :max-time="maxTime">
                    </b-timepicker>
                </div>
            </div>



           
          <div class=" card my-4 ">
               
             <div class=" summary-content">
               <h2 class="tag is-info is-light mx-4 mb-4 summary">Summary</h2>
               
              
          
               <p class="mx-4 cat">Submission No:  {{feedSubmissionNumber}}</p>
  
               <p class="mx-4 cat"> Client Name :  {{ feedClientName }}</p>

               <p class="mx-4 cat"> Client Name :  {{ feedDescription }}</p>

               <p class="mx-4 cat"> Client Name :  {{ typeOfSample }}</p>

               <p class="mx-4 cat">Date Submitted :  {{ dateSubmitted}}</p> 
  
               <p class="mx-4 cat">Time Stamp :  {{ timeStamp }}</p>
  
                          
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

        'feedSubmissionsForm',
        'feedSubmissionsForm.feedSubmissionNumber',
        'feedSubmissionsForm.feedClientName',
        'feedSubmissionsForm.feedDescription',
        'feedSubmissionsForm.typeOfSample',
        'feedSubmissionsForm.dateSubmitted',
        'feedSubmissionsForm.timeStamp',
              
      
        
    ]),
  
        ...mapGetters('labData', {
         sampleInfo: 'selectedSampleInformationRecord',
        sampleLoading: 'loading',
      }),
  
     },
  
     
  
    // },
  
    mounted() {},
  
    
  
    methods: {
        ...mapActions('labData', ['addNewFeedSubmissionsRecord','getAllFeedSubmissionsRecords', 'load']),
  
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
            
           await this.addNewFeedSubmissionsRecord();
  
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
          message: 'feed Submissions Snapshot closed.',
          duration: 2000,
          position: 'is-bottom',
          type: 'is-warning ',
        })
        this.$parent.close()
      },
  
      clearForm() {
  
       this.feedSubmissionsForm = {
        
        feedSubmissionNumber:null,
        feedClientName:null,
        feedDescription:null,
        typeOfSample:null,
        dateSubmitted:null,
        timeStamp:null,
       
  
          
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
  