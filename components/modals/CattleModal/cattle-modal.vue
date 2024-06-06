<template>
  <div class="modal-card ">
    <header class="modal-card-head">
      <h3 class="modal-card-title">Cattle Snapshot</h3>
     
      <button type="button" class="delete" @click="close"></button>
    </header>
    <section class="modal-card-body has-background-white">
      <!-- Modal Content -->
      <div>
       <b-form v-model="cattleForm" class="form">

         <h4> <span class="is-blue"> Cattle Breed</span></h4>

         <div class="columns">
            
           <div  class="column is-three-quarters">
            
           <b-input type="text" v-model="cattleBreed" placeholder="Breed"></b-input>
           </div>
         </div>

         <h4> <span class="is-blue"> Cattle Date Of Birth</span></h4>

         <div class="columns">
            
           <div  class="column is-three-quarters">
                
            <b-field label="Select a date">
            <b-datepicker
                :disabled="!cattleBreed"
                placeholder="Click to select..."
                v-model="cattleDateOfBirth"
                >
            </b-datepicker>
          </b-field>

           
           </div>
         </div>

         <h4> <span class="is-blue"> Date Purchased</span></h4>

         <div class="columns">
            
           <div  class="column is-three-quarters">
            
          <b-field label="Select a date">
            <b-datepicker
             :disabled="!cattleDateOfBirth"
                placeholder="Click to select..."
                v-model="datePurchased"
                >
            </b-datepicker>
          </b-field>

           </div>
         </div>

        
           <h4> <span class="is-blue"> Sire/Semen Code</span></h4>

         <div class="columns">
            
           <div  class="column is-three-quarters">
            
           <b-input :disabled="!datePurchased" type="text" v-model="cattleSire" placeholder="Sire/Semen Code"></b-input>
           </div>
         </div>


            <h4> <span class="is-blue"> Dam </span></h4>

         <div class="columns">
            
           <div  class="column is-three-quarters">
            
           <b-input :disabled="!cattleSire" type="text" v-model="cattleDam" placeholder="Dam"></b-input>
           </div>
         </div>


        
         <h4> <span class="is-blue"> Cattle Sex </span></h4>

         <div class="columns">
            
           <div  class="column is-three-quarters">
            
           <b-field  class="column is-full">
             
           <b-select :disabled="!datePurchased" v-model="cattleSex" placeholder="Select a sex">
             <option value="Male">Male</option>
             <option value="Female">Female</option>
             
           </b-select>
           </b-field>

           </div>
         </div>

         <h4> <span class="is-blue"> Cattle Weight</span></h4>

         <div class="columns">
            
           <div  class="column is-three-quarters">
            
           <b-input :disabled="!cattleSex" type="text" v-model="cattleWeight" placeholder="Weight"></b-input>
           </div>
         </div>

         

            <h4> <span class="is-blue"> Supplier</span></h4>

         <div class="columns">
         
           <div  class="column is-three-quarters">  
           <b-input :disabled="!cattleWeight" type="text" v-model="supplierName" placeholder="Supplier"></b-input>
           </div>
           
         </div>


        
        <h4> <span class="is-blue">  Ear Tag ID</span></h4>
        <div class="columns">
          
           <div  class="column is-three-quarters">
              
            <b-input :disabled="!supplierName" type="text" v-model="earTagID" placeholder="Ear Tag ID"></b-input>
           </div>
         </div>


        <h4> <span class="is-blue">  Ear Tag Color</span></h4>
        <div class="columns">
          
           <div  class="column is-three-quarters">
              
            <b-input :disabled="!earTagID" type="text" v-model="earTagColor" placeholder="Ear Tag Color"></b-input>
           </div>
         </div>

          <h4> <span class="is-blue"> Color</span></h4>
        <div class="columns">
          
           <div  class="column is-three-quarters">
              
            <b-input :disabled="!earTagColor" type="text" v-model="cattleColor" placeholder="Color"></b-input>
           </div>
         </div>


         <h4> <span class="is-blue">  Status</span></h4>
        <div class="columns">
          
           <div  class="column is-three-quarters">
              
            <b-input :disabled="!cattleColor" type="text" v-model="cattleStatus" placeholder="Status"></b-input>
           </div>
         </div>

         <h4> <span class="is-blue">  Remarks</span></h4>
        <div class="columns">
          
           <div  class="column is-three-quarters">
              
            <b-input :disabled="!cattleStatus" type="text" v-model="cattleRemarks" placeholder="Status"></b-input>
           </div>
         </div>

         <div class=" card my-4">
             
           <div class=" summary-content">
             <h2 class="tag is-info is-light mb-4 summary">Summary</h2>
              <p class="yellow">Before adding your data, <br> confirm correct entries using the summary below </p>

            <p>Breed:  {{cattleBreed}}</p> 
           <p>Date of Birth:  {{cattleDateOfBirth}}</p>
          <p>Sire/Semen Code:  {{cattleSire}}</p>
          <p>Dam:  {{cattleDam}}</p>
           <p>Sex:  {{cattleSex}}</p>
           <p>Weight:  {{cattleWeight}} kg</p>
            <p>Ear Tag ID:  {{earTagID}}</p>
           <p>Ear Tag Color:  {{earTagColor}}</p>
            <p>Cattle Color:  {{cattleColor}}</p>
           <p>Status:  {{cattleStatus}}</p>
           <p>Remarks:  {{cattleRemarks}}</p>
           </div>
         </div>

       <b-button :disabled="!cattleRemarks" @click="onSubmit" type="is-info">Add </b-button>

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
  name: 'CattleModal',

   data() {
    return {
      date: new Date(),
       dates: [],

      isFullPage: true,

      cattleForm:{
        
      cattleBreed:null,
      cattleDateOfBirth:null,
      datePurchased:null,
      cattleSire:null,
      cattleDam:null,
      cattleSex:null,
      cattleWeight:null,
      earTagID:null,
      earTagColor:null,
      cattleColor:null,
      supplierName:null,
      cattleStatus:null,
      cattleRemarks:null
        
    },
     
    }
  },

   computed: {

      ...mapFields('cattleData', [
      'cattleForm',
      'cattleForm.cattleBreed',
      'cattleForm.cattleDateOfBirth',
      'cattleForm.datePurchased',
      'cattleForm.cattleSire',
      'cattleForm.cattleDam',
      'cattleForm.cattleSex',
      'cattleForm.cattleWeight',
      'cattleForm.earTagID',
      'cattleForm.earTagColor',
      'cattleForm.cattleColor',
      'cattleForm.supplierName',
      'cattleForm.cattleStatus',
      'cattleForm.cattleRemarks'
          
      
      
  ]),

      ...mapGetters('cattleData', {
       cattle: 'selectedCattle',
      cattleLoading: 'loading',
    }),

   },

   

  // },

  mounted() {},

  

  methods: {
      ...mapActions('cattleData', ['addNewCattle','getAllCattle', 'load']),

   loading() {
      return this.cattleLoading 
    },


    async onSubmit() {
         await this.$buefy.dialog.confirm({
        title: 'Add New Cattle',
        message: 'Proceed to add new entry?',
        cancelText: 'Cancel',
        confirmText: 'Yes, entries are correct',
        type: 'is-warning is-light',
        hasIcon: true,
        onConfirm: async () => {
          
           await this.addNewCattle();

          this.$buefy.toast.open({
            duration: 3000,
            message: 'Cattle Successfully Added!',
            position: 'is-top',
            type: 'is-info is-light',
          })
           this.clearForm();
          showNotifications();
          this.$parent.close()
      
     
        },

      })

       function showNotifications(){
   const notification = new Notification("New cattle data added.", {
       body: "Be sure to check your cattle data periodically.",
      
   }); 

        }

   
     
    },

    close() {
      this.$buefy.toast.open({
        message: 'Cattle Snapshot closed.',
        duration: 2000,
        position: 'is-bottom',
        type: 'is-warning ',
      })
      this.$parent.close()
    },

    clearForm(){
      this.cattleForm ={
        
      cattleBreed:null,
      cattleDateOfBirth:null,
      datePurchased:null,
      cattleSire:null,
      cattleDam:null,
      cattleSex:null,
      cattleWeight:null,
      earTagID:null,
      earTagColor:null,
      supplierName:null,
      cattleStatus:null
        
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
  font-size: 1.1rem;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
