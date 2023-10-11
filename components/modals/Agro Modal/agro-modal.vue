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
export default {
  name: 'AgroModal',

   data() {
    return {

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
      'agroForm.clientName',
      'agroForm.clientLocation',
      'agroForm.clientTown',
      'agroForm.clientPhoneNumber',
      'agroForm.agroCategory',
      'agroForm.agroOtherCategory',
      'agroForm.clientComments',
      
      
  ]),

      ...mapGetters('agroData', {
       agro: 'selectedAgroRecord',
      agroLoading: 'loading',
    }),

   },

   

  // },

  mounted() {},

  

  methods: {
      ...mapActions('agroData', ['addNewAgroRecord','getAllAgroRecords', 'load']),

   loading() {
      return this.agroLoading 
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
              agroCategory:null,
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
