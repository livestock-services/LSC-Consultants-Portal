<template>
  <div class="modal-card ">
    <header class="modal-card-head">
      <h3 class="modal-card-title">Fence Snapshot</h3>
     
      <button type="button" class="delete" @click="close"></button>
    </header>
    <section class="modal-card-body has-background-white">
      <!-- Modal Content -->
      <div>
       <b-form v-model="fenceForm" class="form">

        
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
            
            <b-input type="text" v-model="fenceClientName" placeholder="Client name"></b-input>
            </div>
          </div>

          <h4> <span class="is-blue"> Contact Number</span></h4>
          <div class="columns">

            
            <div  class="column is-three-quarters">
            
            <b-input type="number" v-model="fenceClientPhoneNumber" placeholder="Enter phone no. here..."></b-input>
            </div>

          </div>

          <h4> <span class="is-blue"> Town </span></h4>

            <div class="columns">
              
              

              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="fenceClientTown" placeholder="Enter town here..."></b-input>
              </div>
            </div>

          <h4> <span class="is-blue"> Location</span></h4>

          <div class="columns">
            
            

            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="fenceClientLocation" placeholder="Enter address here..."></b-input>
            </div>
          </div>


         
          <div v-if="SignedInUser.role !== 'Fence Consultant'">

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
                      v-model="fenceConsultingPerson"
                      placeholder="Client name"
                    >
                  <option value="Paul Shiluwe"> Paul Shiluwe</option>
                  <option value="Desteria Miyanza"> Desteria Miyanza</option>
                  <option value="Emeldah Banda"> Emeldah Banda</option>
                
                  <option value="Other">Other</option>
                  
                  </b-select>
                  </div>

                </div>

                <div v-if="fenceConsultingPerson === 'Other'" >
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
                      v-model="fenceOtherConsultingPerson"
                      placeholder="Consulting Person"
                    />
                  
                  
                  </div>
                </div>
                </div>

        </div>

         
          
        

         <h4> <span class="is-blue"> Comments/Remarks </span></h4>

          <div class="columns">
            
            

            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="fenceClientComments" placeholder="Comments/Remarks..."></b-input>
            </div>
          </div>

          
         
         


         
        <div class=" card my-4 ">
             
           <div class=" summary-content">
             <h2 class="tag is-info is-light mx-4 mb-4 summary">Summary</h2>
             
             <div>
              <p v-if="SignedInUser !== 'Fence Consultant' && fenceConsultingPerson !== 'Other'" class="mx-4 cat">Consulting Person : {{ fenceConsultingPerson }}</p>

              <p v-if="SignedInUser !== 'Fence Consultant' && fenceConsultingPerson === 'Other'" class="mx-4 cat">Consulting Person(If not on list) : {{ fenceOtherConsultingPerson }}</p>
             </div>
        
             <p class="mx-4 cat">Client Name :  {{fenceClientName}}</p>

             <p class="mx-4 cat">Client Number :  {{fenceClientPhoneNumber}}</p>

             <p class="mx-4 cat">Client Location :  {{fenceClientLocation}}</p> 

             <p class="mx-4 cat">Client Town :  {{fenceClientTown}}</p>

             <p class="mx-4 cat">Comments/Remarks :  {{fenceClientComments}}</p>
          
            
         
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
  name: 'FenceModal',

  data() {
    var SignedInUser = computed(()=>this.user)
    return {
      
        SignedInUser,

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

      ...mapFields('fenceData', [
      'fenceForm',
      'fenceForm.fenceConsultingPerson',
      'fenceForm.fenceOtherConsultingPerson',
      'fenceForm.fenceClientName',
      'fenceForm.fenceClientLocation',
      'fenceForm.fenceClientTown',
      'fenceForm.fenceClientPhoneNumber',
      'fenceForm.fenceClientComments',
    
      
  ]),

      ...mapGetters('fenceData', {
       fence: 'selectedfenceRecord',
       clients: 'allFenceRecords',
      fenceLoading: 'loading',
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
      ...mapActions('fenceData', ['addNewFenceRecord','getAllFenceRecords', 'load']),

   loading() {
      return this.fenceLoading 
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
    const clientData = this.clients.find(client => client.fenceClientPhoneNumber === this.searchClientPhoneNumber);

    if (clientData) {
      this.fenceClientName = clientData.fenceClientName;
      this.fenceClientPhoneNumber = clientData.fenceClientPhoneNumber;
      this.fenceClientLocation = clientData.fenceClientLocation;
      this.fenceClientTown = clientData.fenceClientTown;
      // Clear other fields if needed
      this.fenceCategory = '';
      this.fenceOther = '';
      this.fenceComments = '';
    } else {
      // Handle case when client is not found
      this.showAlert('The client being searched for was not found. Please enter their details manually.');

      this.fenceClientName = '';
      this.fenceClientPhoneNumber = this.searchClientPhoneNumber;
      this.fenceClientLocation = '';
      this.fenceClientTown = '';
      // Clear other fields if needed
      this.fenceCategory = '';
      this.fenceOther = '';
      this.fenceComments = '';
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
          
         await this.addNewFenceRecord();

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

     this.fenceForm = {
              fenceConsultingPerson:null,
              fenceOtherConsultingPerson:null,
              fenceClientName:null,
              fenceClientPhoneNumber:null,
              fenceClientLocation:null,
              fenceClientTown:null,
              fenceCategory:null,
              fenceClientComments:null,

        
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
