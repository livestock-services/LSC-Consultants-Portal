<template>
    <div class="modal-card ">
      <header class="modal-card-head">
        <h3 class="modal-card-title">Filter Snapshot</h3>
       
        <button type="button" class="delete" @click="close"></button>
      </header>
      <section class="modal-card-body has-background-white">
        <!-- Modal Content -->
        <div>
            <b-form v-model="cattlePostMortemFilterForm" class="form">
  
  <h4> <span class="is-blue"> Start Date</span></h4>

    <div class="columns">
      
      <div  class="column is-three-quarters">
      
      <b-datepicker v-model="startDate" placeholder="--select date--"></b-datepicker>
      </div>
    </div>

    <h4> <span class="is-blue"> End Date</span></h4>

    <div class="columns">
      
      <div  class="column is-three-quarters">
      
      <b-datepicker v-model="endDate" placeholder="--select date--"></b-datepicker>
      </div>
    </div>

    
   
     
   
  <div class=" card my-4 ">
       
     <div class=" summary-content">
       <h2 class="tag is-info is-light mx-4 mb-4 summary">Summary</h2><br/>
       
      
        <div class="ml-4">
            <h4>Selecting all Post Mortems from:</h4> 
        </div>

       <p class="mx-4 cat">Start Date :  {{ startDate }}</p>
            <p class="mx-4"> to </p>
       <p class="mx-4 cat">End Date :  {{ endDate }}</p>

     
    
      
   
     </div>
   </div>



 <b-button @click="onGetResult" type="is-info">Get Results</b-button>

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
    name: 'CattleFilterModal',
  
     data() {
      return {
  
    
  
        isFullPage: true,
        // agroForm: {
        
        //         clientName:null,
               
        //         clientPhoneNumber:null,
  
        //         agroCategory:null,
           
          
        // },
       
      }
    },
  
     computed: {
  
        ...mapFields('vetData', [
        'cattlePostMortemFilterForm',
        'cattlePostMortemFilterForm.startDate',
        'cattlePostMortemFilterForm.endDate'
        
        
    ]),

   

     },
  
     
  
    // },
  
    mounted() {},
  
    
  
    methods: {
        ...mapActions('vetData', ['getFilteredCattlePMRecords', 'load']),

     
  
     loading() {
        return this.agroLoading 
      },
  
  
      async onGetResult() {
  
         await this.$buefy.dialog.confirm({
          title: 'Get Post Mortem Results',
          message: 'Proceed to implement filter?',
          cancelText: 'Cancel',
          confirmText: 'Yes, entries are correct',
          type: 'is-success is-light',
          hasIcon: true,
          onConfirm: async () => {
            
           await this.getFilteredCattlePMRecords();
  
            this.$buefy.toast.open({
              duration: 3000,
              message: 'Results Successfully Found',
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
  
       this.cattlePostMortemFilterForm = {
        
                startDate:null,
                endDate:null,
                
  
          
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
  