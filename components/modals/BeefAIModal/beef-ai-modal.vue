<template>
    <div class="modal-card ">
      <header class="modal-card-head">
        <h3 class="modal-card-title"> AI Snapshot</h3>
       
        <button type="button" class="delete" @click="close"></button>
      </header>
      <section class="modal-card-body has-background-white">
        <!-- Modal Content -->
        <div>
         <b-form v-model="beefAIForm" class="form">

        
          <h4><span class="is-blue">Search Client by Contact Number</span></h4>
              <div class="columns">
                <div class="column is-three-quarters">
                  <b-input
                    type="number"
                    v-model="searchClientPhoneNumber"
                    placeholder="Enter phone no. to search..."
                  ></b-input>
                </div>
                <div class="column">
                  <b-button @click="searchClient" type="is-info">Search</b-button>
                </div>
          </div>

  
          <h4> <span class="is-blue"> Client Name</span></h4>
  
            <div class="columns">
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="beefAIClientName" placeholder="Client name"></b-input>
              </div>
            </div>
  
            <h4> <span class="is-blue"> Contact Number</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="number" v-model="beefAIClientPhoneNumber" placeholder="Enter phone no. here..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue"> Town</span></h4>

              <div class="columns">



              <div  class="column is-three-quarters">

              <b-input type="text" v-model="beefAIClientTown" placeholder="Enter town here..."></b-input>
              </div>
              </div>
  
            <h4> <span class="is-blue"> Location</span></h4>
  
            <div class="columns">
              
              
  
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="beefAIClientLocation" placeholder="Enter address here..."></b-input>
              </div>
            </div>

              
            <div v-if="SignedInUser.role !== 'AI Consultant'">

              <h4> <b-tooltip 
                    label="This is the designated consultant who may not be 
                    physically available for a consultation, but can do
                    so via phone call, WhatsApp, email etc " 
                    multilined 
                    type="is-dark"
                    position="is-right mt-4">
                      <span class="is-blue"> Consulting Person</span>
                    
                    </b-tooltip> </h4>

                <div class="columns">
                  <div class="column is-three-quarters">
                    <b-select
                      type="text"
                      v-model="beefAIConsultingPerson"
                      placeholder="Client name"
                    >
                    <option value="Ethel Lubinda ">Ethel Lubinda</option>
                    <option value="Pius Sosala ">Pius Sosala</option>
                    <option value="Other"> Other</option>
                    
                  
                  
                  </b-select>
                  </div>
                </div>

                <div v-if="beefAIConsultingPerson === 'Other'" >
                  <h4> <b-tooltip 
                      label="This is the designated consultant who may not be 
                      physically available for a consultation, but can do
                      so via phone call, WhatsApp, email etc " 
                      multilined 
                      type="is-dark"
                      position="is-right mt-4">
                        <span class="is-blue"> Consulting Person(if not on list)</span>
                      
                      </b-tooltip> </h4>
                  <div class="columns">
                    <div class="column is-three-quarters">
                      <b-input
                        type="text"
                        v-model="beefAIOtherConsultingPerson"
                        placeholder="Consulting Person"
                      />
                    
                    
                    </div>
                  </div>
                  </div>

              </div>


           
              <h4> <span class="is-blue"> Select Category</span></h4>
  
           <div class="columns">
            
             <b-field  class="column is-full">
               
             <b-select v-model="beefAICategory" placeholder="Select a Category">
               <option value="Dairy">Dairy </option>
               <option value="Beef">Beef</option>
               <option value="Pig">Pig </option>
               <option value="Goat">Goat</option>
               <option value="Other">Other</option>


               </b-select>
              
             </b-field>
           </div>

           <div v-if="beefAICategory === 'Other'">
            <h4><span class="is-blue"> Other (if not among the options above)</span></h4>
  
            <div class="columns">
              <div class="column is-three-quarters">
                <b-input
                  type="text"
                  v-model="beefAIOtherCategory" 
                  placeholder="Other"
                ></b-input>
              </div>
            </div>

           </div>

           <h4> <span class="is-blue"> Comments/Remarks</span></h4>

              <div class="columns">



              <div  class="column is-three-quarters">

              <b-input type="text" v-model="beefAIClientComments" placeholder="Comments/Remarks..."></b-input>
              </div>
              </div>
  
          
  
          
  
            
           
           
  
  
           
          <div class=" card my-4 ">
               
             <div class=" summary-content">
               <h2 class="tag is-info is-light mx-4 mb-4 summary">Summary</h2>
               
               <p v-if="SignedInUser !== 'AI Consultant' && beefAIConsultingPerson !== 'Other'"  class="mx-4 cat">Consulting Person : {{ beefAIConsultingPerson }}</p>

               <p v-if="SignedInUser !== 'AI Consultant' && beefAIConsultingPerson === 'Other'" class="mx-4 cat">Consulting Person : {{ beefAIOtherConsultingPerson }}</p>
          
               <p class="mx-4 cat">Client Name :  {{beefAIClientName}}</p>
  
               <p class="mx-4 cat">Client Number :  {{beefAIClientPhoneNumber}}</p>
  
               <p class="mx-4 cat">Client Location :  {{beefAIClientLocation}}</p>

               <p class="mx-4 cat">Client Town Location :  {{beefAIClientTown}}</p>
  
              <p class="mx-4 cat">Category Selected :  {{beefAICategory}}</p>

              <p class="mx-4 cat">Category Selected :  {{beefAIOtherCategory}}</p>

              <p class="mx-4 cat">Comments/Remarks :  {{beefAIClientComments}}</p>
            
              
           
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
  import { computed } from 'vue';
  import { mapFields } from 'vuex-map-fields'
  export default {
    name: 'beefAIModal',
  
     data() {
      var SignedInUser = computed(()=>this.user)
      return {
  
        SignedInUser,
  
        isFullPage: true,
        // beefAIForm: {
        
        //         clientName:null,
               
        //         clientPhoneNumber:null,
  
        //         beefAICategory:null,
           
          
        // },
       
      }
    },
  
     computed: {
  
        ...mapFields('beefAIData', [
        'beefAIForm',
        'beefAIForm.beefAIConsultingPerson',
        'beefAIForm.beefAIOtherConsultingPerson',
        'beefAIForm.beefAIClientName',
        'beefAIForm.beefAIClientLocation',
        'beefAIForm.beefAIClientTown',
        'beefAIForm.beefAIClientPhoneNumber',
        'beefAIForm.beefAICategory',
        'beefAIForm.beefAIOtherCategory',
        'beefAIForm.beefAIClientComments',
        
        
    ]),
  
        ...mapGetters('beefAIData', {
         beefAI: 'selectedbeefAIRecord',
         clients: 'allBeefAIRecords',
        beefAILoading: 'loading',
      }),

      ...mapGetters('users', {
          loading: 'loading',
          users: 'allUsers',
          user:'loggedInUser',

          
        }),
  
     },
  
     
  
    // },
  
    mounted() {},
  
    
  
    methods: {
        ...mapActions('beefAIData', ['addNewBeefAIRecord','getAllBeefAIRecords', 'load']),
  
     loading() {
        return this.beefAILoading 
      },

      showAlert(message) {
    this.$buefy.dialog.alert({
      title: 'According to my records,',
      message: message,
      type: 'is-info',
      position: 'is-top',
      hasIcon: true, // Add this line
      icon: 'magnify',
      
    });
  },

    async searchClient() {
    // Assuming you have a Vuex getter named 'getClientByPhoneNumber'
    const clientData = this.clients.find(client => client.beefAIClientPhoneNumber === this.searchClientPhoneNumber);

    if (clientData) {
      this.beefAIClientName = clientData.beefAIClientName;
      this.beefAIClientPhoneNumber = clientData.beefAIClientPhoneNumber;
      this.beefAIClientLocation = clientData.beefAIClientLocation;
      this.beefAIClientTown = clientData.beefAIClientTown;
      // Clear other fields if needed
      this.beefAICategory = '';
      this.beefAIOther = '';
      this.beefAIComments = '';
    } else {
      // Handle case when client is not found
      this.showAlert('The client being searched for was not found. Please enter their details manually.');

      this.beefAIClientName = '';
      this.beefAIClientPhoneNumber = this.searchClientPhoneNumber;
      this.beefAIClientLocation = '';
      this.beefAIClientTown = '';
      // Clear other fields if needed
      this.beefAICategory = '';
      this.beefAIOther = '';
      this.beefAIComments = '';
    }
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
            
           await this.addNewBeefAIRecord();
  
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
          message: 'Beef Snapshot closed.',
          duration: 2000,
          position: 'is-bottom',
          type: 'is-warning ',
        })
        this.$parent.close()
      },
  
      clearForm() {
  
       this.beefAIForm = {
                beefAIConsultingPerson:null,
                beefAIOtherConsultingPerson:null,
                beefAIClientName:null,
                beefAIClientPhoneNumber:null,
                beefAIClientLocation:null,
                beefAIClientTown:null,
                beefAIClientComments:null,
                beefAICategory:null
  
          
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
  