<template>
  <div class="modal-card ">
    <header class="modal-card-head">
      <h3 class="modal-card-title">Fish Snapshot</h3>
     
      <button type="button" class="delete" @click="close"></button>
    </header>
    <section class="modal-card-body has-background-white">
      <!-- Modal Content -->
      <div>
       <b-form v-model="fishForm" class="form">

        <div v-if="SignedInUser.role !== 'Fish Consultant'">

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
          v-model="fishConsultingPerson"
          placeholder="Client name"
        >
      <option value=" Moonde Mapepula "> Moonde Mapepula</option>
      <option value=" Yolantha Chibwe "> Yolantha Chibwe</option>
      
      <option value="Other">Other</option>
      
      </b-select>
      </div>

    </div>

    <div v-if="fishConsultingPerson === 'Other'" >
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
          v-model="fishOtherConsultingPerson"
          placeholder="Consulting Person"
        />
      
      
      </div>
     </div>
    </div>

  </div>

        <h4> <span class="is-blue"> Client Name</span></h4>

          <div class="columns">
            
            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="fishClientName" placeholder="Client name"></b-input>
            </div>
          </div>

          <h4> <span class="is-blue"> Contact Number</span></h4>
          <div class="columns">

            
            <div  class="column is-three-quarters">
            
            <b-input type="number" v-model="fishClientPhoneNumber" placeholder="Enter phone no. here..."></b-input>
            </div>

          </div>

          <h4> <span class="is-blue"> Town</span></h4>

            <div class="columns">



            <div  class="column is-three-quarters">

            <b-input type="text" v-model="fishClientTown" placeholder="Enter town here..."></b-input>
            </div>
            </div>

          <h4> <span class="is-blue"> Location</span></h4>

          <div class="columns">
            
            

            <div  class="column is-three-quarters">
            
            <b-input type="text" v-model="fishClientLocation" placeholder="Enter address here..."></b-input>
            </div>
          </div>
          
        
           

            <h4> <span class="is-blue"> Comments/Remarks</span></h4>

            <div class="columns">



            <div  class="column is-three-quarters">

            <b-input type="text" v-model="fishClientComments" placeholder=" Comments/Remarks..."></b-input>
            </div>
            </div>

        

        

          
         
         


         
        <div class=" card my-4 ">
             
           <div class=" summary-content">
             <h2 class="tag is-info is-light mx-4 mb-4 summary">Summary</h2>
             
             <div>
              <p v-if="SignedInUser !== 'Fish Consultant' && fishConsultingPerson !== 'Other'" class="mx-4 cat">Consulting Person : {{ fishConsultingPerson }}</p>

              <p v-if="SignedInUser !== 'Fish Consultant' && fishConsultingPerson === 'Other'" class="mx-4 cat">Consulting Person(If not on list) : {{ fishOtherConsultingPerson }}</p>
             </div>
        
             <p class="mx-4 cat">Client Name :  {{fishClientName}}</p>

             <p class="mx-4 cat">Client Number :  {{fishClientPhoneNumber}}</p>

             <p class="mx-4 cat">Client Location :  {{fishClientLocation}}</p>

             <p class="mx-4 cat">Client Town Location :  {{fishClientTown}}</p>

             <p class="mx-4 cat">Comments/Remarks :  {{fishClientComments}}</p>

           
          
            
         
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
  name: 'FishModal',

  data() {
    var SignedInUser = computed(()=>this.user)
    return {
      
        SignedInUser,

      data:[
            
             'Consultations',
             'Sales'
      ],


      isFullPage: true,
      // fishForm: {
      
      //         clientName:null,
             
      //         clientPhoneNumber:null,

      //         fishCategory:null,
         
        
      // },
     
    }
  },

   computed: {

      ...mapFields('fishData', [
      'fishForm',
      'fishForm.fishConsultingPerson',
      'fishForm.fishOtherConsultingPerson',
      'fishForm.fishClientName',
      'fishForm.fishClientLocation',
      'fishForm.fishClientTown',
      'fishForm.fishClientPhoneNumber',
      'fishForm.fishClientComments',    
      
  ]),

      ...mapGetters('fishData', {
       fish: 'selectedfishRecord',
      fishLoading: 'loading',
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
      ...mapActions('fishData', ['addNewFishRecord','getAllFishRecords', 'load']),

   loading() {
      return this.fishLoading 
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
          
         await this.addNewFishRecord();

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
        message: 'Fish Snapshot closed.',
        duration: 2000,
        position: 'is-bottom',
        type: 'is-warning ',
      })
      this.$parent.close()
    },

    clearForm() {

     this.fishForm = {

              fishConsultingPerson:null,
              fishOtherConsultingPerson:null,
              fishClientName:null,
              fishClientPhoneNumber:null,
              fishClientLocation:null,
              fishClientTown:null,
              fishClientComments:null,
              
        
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
