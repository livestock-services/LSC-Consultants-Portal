<template>
    <div class="modal-card ">
      <header class="modal-card-head">
        <h3 class="modal-card-title">Pig AI Snapshot</h3>
       
        <button type="button" class="delete" @click="close"></button>
      </header>
      <section class="modal-card-body has-background-white">
        <!-- Modal Content -->
        <div>
         <b-form v-model="pigAIForm" class="form">
  
          <h4> <span class="is-blue"> Client Name</span></h4>
  
            <div class="columns">
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="pigAIClientName" placeholder="Client name"></b-input>
              </div>
            </div>
  
            <h4> <span class="is-blue"> Contact Number</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="number" v-model="pigAIClientPhoneNumber" placeholder="Enter phone no. here..."></b-input>
              </div>
  
            </div>
  
            <h4> <span class="is-blue"> Location</span></h4>
  
            <div class="columns">
              
              
  
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="pigAIClientLocation" placeholder="Enter address here..."></b-input>
              </div>
            </div>


            <h4> <span class="is-blue"> Town</span></h4>
  
                <div class="columns">
                  
                  

                  <div  class="column is-three-quarters">
                  
                  <b-input type="text" v-model="pigAIClientTown" placeholder="Enter town here..."></b-input>
                  </div>
                </div>
           

                <h4> <span class="is-blue"> Comments/Remarks</span></h4>

                <div class="columns">



                <div  class="column is-three-quarters">

                <b-input type="text" v-model="pigAIClientComments" placeholder="Comments/Remarks..."></b-input>
                </div>
                </div>

  
  
           
          <div class=" card my-4 ">
               
             <div class=" summary-content">
               <h2 class="tag is-info is-light mx-4 mb-4 summary">Summary</h2>
               
              
          
               <p class="mx-4 cat">Client Name :  {{pigAIClientName}}</p>
  
               <p class="mx-4 cat">Client Number :  {{pigAIClientPhoneNumber}}</p>
  
               <p class="mx-4 cat">Client Location :  {{pigAIClientLocation}}</p>

               <p class="mx-4 cat">Client Town Location :  {{pigAIClientTown}}</p>

               <p class="mx-4 cat">Comments/Remarks :  {{pigAIClientComments}}</p>
  
             
            
              
           
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
    name: 'PigAIModal',
  
     data() {
      return {
  
        data:[
              
               'Consultations',
               'Sales'
        ],
  
  
        isFullPage: true,
        // pigAIForm: {
        
        //         clientName:null,
               
        //         clientPhoneNumber:null,
  
        //         pigAICategory:null,
           
          
        // },
       
      }
    },
  
     computed: {
  
        ...mapFields('pigAIData', [
        'pigAIForm',
        'pigAIForm.pigAIClientName',
        'pigAIForm.pigAIClientLocation',
        'pigAIForm.pigAIClientTown',
        'pigAIForm.pigAIClientPhoneNumber',
        'pigAIForm.pigAIClientComments',     
        
    ]),
  
        ...mapGetters('pigAIData', {
         pigAI: 'selectedpigAIRecord',
        pigAILoading: 'loading',
      }),
  
     },
  
     
  
    // },
  
    mounted() {},
  
    
  
    methods: {
        ...mapActions('pigAIData', ['addNewPigAIRecord','getAllPigAIRecords', 'load']),
  
     loading() {
        return this.pigAILoading 
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
            
           await this.addNewPigAIRecord();
  
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
  
       this.pigAIForm = {
        
                pigAIClientName:null,
                pigAIClientPhoneNumber:null,
                pigAIClientLocation:null,
                pigAICategory:null,
                pigAIClientTown:null,
                pigAIClientComments:null
  
          
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
  