<template>
  <div class="modal-card ">
    <header class="modal-card-head">
      <h3 class="modal-card-title">General Snapshot</h3>
     
      <button type="button" class="delete" @click="close"></button>
    </header>
    <section class="modal-card-body has-background-white">
      <!-- Modal Content -->
      <div>
       <b-form v-model="generalForm" class="form">

        
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
            
            <b-input type="text" v-model="generalClientName" placeholder="Client name"></b-input>
            </div>
          </div>

          <h4> <span class="is-blue"> Contact Number</span></h4>
          <div class="columns">

            
            <div  class="column is-three-quarters">
            
            <b-input type="number" v-model="generalClientPhoneNumber" placeholder="Enter phone no. here..."></b-input>
            </div>

          </div>

          <h4> <span class="is-blue"> Town</span></h4>

            <div class="columns">



            <div  class="column is-three-quarters">

            <b-input type="text" v-model="generalClientTown" placeholder="Enter town here..."></b-input>
            </div>
            </div>

          <h4> <span class="is-blue"> Location</span></h4>

           <div class="columns">
            
            

            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="generalClientLocation" placeholder="Enter address here..."></b-input>
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
                           v-model="generalContactPoint"
                           placeholder="--Select Contact Point--"
                         >
                       <option value=" WhatsApp "> WhatsApp</option>
                       <option value=" Phone Call "> Phone Call</option>
       
                       </b-select>
                       </div>
     
                     </div>
                </div>
           

            <h4> <span class="is-blue"> Comments/Remarks</span></h4>

            <div class="columns">



            <div  class="column is-three-quarters">

            <b-input type="textarea" v-model="generalClientComments" placeholder=" Comments/Remarks..."></b-input>
            </div>
            </div>

        

        

          
         
         


         
        <div class=" card my-4 ">
             
           <div class=" summary-content">
             <h2 class="tag is-info is-light mx-4 mb-4 summary">Summary</h2>
             
             <!-- <div>
              <p v-if="SignedInUser !== 'general Consultant' && generalConsultingPerson !== 'Other'" class="mx-4 cat">Consulting Person : {{ generalConsultingPerson }}</p>

              <p v-if="SignedInUser !== 'general Consultant' && generalConsultingPerson === 'Other'" class="mx-4 cat">Consulting Person(If not on list) : {{ generalOtherConsultingPerson }}</p>
             </div> -->
        
             <p class="mx-4 cat">Client Name :  {{generalClientName}}</p>

             <p class="mx-4 cat">Client Number :  {{generalClientPhoneNumber}}</p>

             <p class="mx-4 cat">Client Location :  {{generalClientLocation}}</p>

             <p class="mx-4 cat">Client Town Location :  {{generalClientTown}}</p>

             <p class="mx-4 cat">Comments/Remarks :  {{generalClientComments}}</p>

           
          
            
         
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
  name: 'generalModal',

  data() {
    var SignedInUser = computed(()=>this.user)
    return {
      
        SignedInUser,

      data:[
            
             'Consultations',
             'Sales'
      ],


      isFullPage: true,
      // generalForm: {
      
      //         clientName:null,
             
      //         clientPhoneNumber:null,

      //         generalCategory:null,
         
        
      // },
     
    }
  },

   computed: {

      ...mapFields('generalData', [
      'generalForm',
      'generalForm.generalClientName',
      'generalForm.generalClientLocation',
      'generalForm.generalClientTown',
      'generalForm.generalContactPoint',
      'generalForm.generalClientPhoneNumber',
      'generalForm.generalClientComments',    
      
  ]),

      ...mapGetters('generalData', {
       general: 'selectedGeneralRecord',
       clients: 'allGeneralRecords',
      generalLoading: 'loading',
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
      ...mapActions('generalData', ['addNewGeneralRecord','getAllGeneralRecords', 'load']),

   loading() {
      return this.generalLoading 
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
    const clientData = this.clients.find(client => client.generalClientPhoneNumber === this.searchClientPhoneNumber);

    if (clientData) {
      this.generalClientName = clientData.generalClientName;
      this.generalClientPhoneNumber = clientData.generalClientPhoneNumber;
      this.generalClientLocation = clientData.generalClientLocation;
      this.generalClientTown = clientData.generalClientTown;
      // Clear other fields if needed
      this.generalCategory = '';
      this.generalOther = '';
      this.generalComments = '';
    } else {
      // Handle case when client is not found
      this.showAlert('The client being searched for was not found. Please enter their details manually.');

      this.generalClientName = '';
      this.generalClientPhoneNumber = this.searchClientPhoneNumber;
      this.generalClientLocation = '';
      this.generalClientTown = '';
      // Clear other fields if needed
      this.generalContactPoint = '';
      this.generalCategory = '';
      this.generalOther = '';
      this.generalComments = '';
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
          
         await this.addNewGeneralRecord();

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
        message: 'general Snapshot closed.',
        duration: 2000,
        position: 'is-bottom',
        type: 'is-warning ',
      })
      this.$parent.close()
    },

    clearForm() {

     this.generalForm = {

              
              generalClientName:null,
              generalClientPhoneNumber:null,
              generalClientLocation:null,
              generalClientTown:null,
              generalClientComments:null,
              
        
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
