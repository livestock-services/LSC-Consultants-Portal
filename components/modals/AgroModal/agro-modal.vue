<template>
  <div class="modal-card ">
    <header class="modal-card-head">
      <h3 class="modal-card-title">Agronomy Snapshot</h3>
     
      <button type="button" class="delete" @click="close"></button>
    </header>
    <section class="modal-card-body has-background-white">
      <!-- Modal Content -->
      <div>
       <b-form v-model="agroForm" class="form">

        
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
            
            <b-input type="text" v-model="clientName" placeholder="Client name"></b-input>
            </div>
          </div>

          <h4> <span class="is-blue"> Contact Number</span></h4>
          <div class="columns">

            
            <div  class="column is-three-quarters">
            
            <b-input type="number" v-model="clientPhoneNumber" placeholder="Enter phone no. here..."></b-input>
            </div>

          </div>

          <h4> <span class="is-blue"> Town</span></h4>

            <div class="columns">
              
              

              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="clientTown" placeholder="Enter town here..."></b-input>
              </div>
            </div>



          <h4> <span class="is-blue"> Location</span></h4>

          <div class="columns">
            
            

            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="clientLocation" placeholder="Enter address here..."></b-input>
            </div>
          </div>

          <div v-if="SignedInUser.role !== 'Agro Consultant' || SignedInUser.role !== 'Agro Online Consultant'">

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
                      v-model="agroConsultingPerson"
                      placeholder="Client name"
                    >
                  <option value=" Omega Dondoro "> Omega Dondoro</option>
                  <option value=" Nachilima Mandandai "> Nachilima Mandandai</option>
                 
                
                  <option value="Other">Other</option>
                  
                  </b-select>
                  </div>

                </div>

                <div v-if="agroConsultingPerson === 'Other'" >
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
                      v-model="agroOtherConsultingPerson"
                      placeholder="Consulting Person"
                    />
                  
                  
                  </div>
                </div>
                </div>

              </div>

           <div v-if="SignedInUser.role === 'Vet Online Consultant' || SignedInUser.role === 'Agro Online Consultant'">
                 
            <h4> <b-tooltip 
              label="This is the source of contact between the consultant and the client ie. WhatsApp, Phone Calls etc"
              multilined 
              type="is-dark"
              position="is-right mt-4">
                <span class="is-blue"> Contact Point</span>
              
              </b-tooltip> </h4>

                <div class="columns">
                  <div class="column is-three-quarters">
                    <b-select
                      type="text"
                      v-model="agroContactPoint"
                      placeholder="--Select Contact Point--"
                    >
                  <option value=" WhatsApp "> WhatsApp</option>
                  <option value=" Phone Call "> Phone Call</option>
  
                  </b-select>
                  </div>

                </div>
           </div>

        
         
            <h4> <span class="is-blue"> Select Category</span></h4>

         <div class="columns">
          
           <b-field  class="column is-full">
             
           <b-select v-model="agroCategory" placeholder="Select a Category">
             <option value="Landscaping establishment, mgt & pest control in lawns & ornaments">Landscaping establishment, mgt & pest control in lawns & ornaments</option>
             <option value="Pest control, mgt & fertilization in vegetable crops">Pest control, mgt & fertilization in vegetable crops</option>
             <option value="Household termites control">Household termites control</option>
             <option value="Agricultural field termite control">Agricultural field termite control</option>
             <option value="Grain Protection">Grain Protection</option>
             <option value="Weed control in non-crop areas">Weed control in non-crop areas</option>
             <option value="Pest control, mgt & fertilization in field crops">Pest control, mgt & fertilization in field crops</option>
             <option value="Public health pest control">Public health pest control</option>
             <option value="Vegetable enterprise budgets">Vegetable enterprise budgets</option>
             <option value="Pest control, mgt & fertilization in orchards">Pest control, mgt & fertilization in orchards</option>
             <option value="Soil analysis(all crops)">Soil analysis(all crops)</option>
             <option value="Other">Other</option>
           </b-select>
           </b-field>
         </div>

        <div v-if="agroCategory === 'Other'">
          <h4><span class="is-blue"> Other (if not among the options above)</span></h4>
  
        <div class="columns">
          <div class="column is-three-quarters">
            <b-input
              type="text"
              v-model="agroOtherCategory" 
              placeholder="Other"
            ></b-input>
          </div>
       </div>
        </div>

          <h4> <span class="is-blue"> Comments/Remarks</span></h4>

          <div class="columns">



          <div  class="column is-three-quarters">

          <b-input type="text" v-model="clientComments" placeholder="Comments/Remarks..."></b-input>
          </div>
          </div>

          
         
         


         
        <div class=" card my-4 ">
             
           <div class=" summary-content">
             <h2 class="tag is-info is-light mx-4 mb-4 summary">Summary</h2>
             
             <div>
              <p v-if="SignedInUser !== 'Agro Consultant' && agroConsultingPerson !== 'Other'" class="mx-4 cat">Consulting Person : {{ agroConsultingPerson }}</p>

              <p v-if="SignedInUser !== 'Agro Consultant' && agroConsultingPerson === 'Other'" class="mx-4 cat">Consulting Person(If not on list) : {{ agroOtherConsultingPerson }}</p>
             </div>
        
             <p class="mx-4 cat">Client Name :  {{clientName}}</p>

             <p class="mx-4 cat">Client Number :  {{clientPhoneNumber}}</p>

             <p class="mx-4 cat">Client Location :  {{clientLocation}}</p>

             <p class="mx-4 cat">Client Town Location :  {{clientTown}}</p>

            <p class="mx-4 cat">Category Selected :  {{agroCategory}}</p>

            <p class="mx-4 cat">Category Selected :  {{agroOtherCategory}}</p>

            <p class="mx-4 cat">Comments/Remarks :  {{clientComments}}</p>
          
            
         
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
import { computed } from 'vue';

export default {
  name: 'AgroModal',

   data() {
    var SignedInUser = computed(()=>this.user)
    return {
      
        SignedInUser,

      data:[
            'Landscaping establishment, mgt & pest control in lawns & ornaments',
             'Pest control, mgt & fertilization in vegetable crops',
             'Household termites control',
             'Agricultural field termite control',
             'Grain Protection',
             'Weed control in non-crop areas',
             'Pest control, mgt & fertilization in field crops',
             'Public health pest control',
             'Vegetable enterprise budgets',
             'Pest control, mgt & fertilization in orchards',
             'Soil analysis(all crops)'
      ],


      isFullPage: true,
      // agroForm: {
      
      //         clientName:null,
             
      //         clientPhoneNumber:null,

      //         agroCategory:null,
         
        
      // },
     
    }
  },

   computed: {

      ...mapFields('agroData', [
      'agroForm',
      'agroForm.agroConsultingPerson',
      'agroForm.agroOtherConsultingPerson',
      'agroForm.clientName',
      'agroForm.clientLocation',
      'agroForm.clientTown',
      'agroForm.clientPhoneNumber',
      'agroForm.agroContactPoint',
      'agroForm.agroCategory',
      'agroForm.agroOtherCategory',
      'agroForm.clientComments',
      
      
  ]),

      ...mapGetters('agroData', {
       agro: 'selectedAgroRecord',
       clients: 'allAgroRecords',
      agroLoading: 'loading',
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
      ...mapActions('agroData', ['addNewAgroRecord','getAllAgroRecords', 'load']),

   loading() {
      return this.agroLoading 
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
    const clientData = this.clients.find(client => client.clientPhoneNumber === this.searchClientPhoneNumber);

    if (clientData) {
      this.clientName = clientData.clientName;
      this.clientPhoneNumber = clientData.clientPhoneNumber;
      this.clientLocation = clientData.clientLocation;
      this.clientTown = clientData.clientTown;
      // Clear other fields if needed
      this.agroCategory = '';
      this.agroOtherCategory = '';
      this.clientComments = '';
    } else {
      // Handle case when client is not found
      this.showAlert('The client being searched for was not found. Please enter their details manually.');

      this.clientName = '';
      this.clientPhoneNumber = this.searchClientPhoneNumber;
      this.clientLocation = '';
      this.clientTown = '';
      // Clear other fields if needed
      this.agroContactPoint = '';
      this.agroCategory = '';
      this.agroOtherCategory = '';
      this.clientComments = '';
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
          
         await this.addNewAgroRecord();

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
        message: 'Agro Snapshot closed.',
        duration: 2000,
        position: 'is-bottom',
        type: 'is-warning ',
      })
      this.$parent.close()
    },

    clearForm() {

     this.agroForm = {
      
              clientName:null,
              clientPhoneNumber:null,
              clientLocation:null,
              clientTown:null,
              agroContactPoint:null,
              agroCategory:null,
              agroConsultingPerson:null,
              agroOtherConsultingPerson:null,
              clientComments:null

        
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
