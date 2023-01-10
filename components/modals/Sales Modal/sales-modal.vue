<template>
  <div class="modal-card ">
    <header class="modal-card-head">
      <h3 class="modal-card-title">Sales Snapshot</h3>
     
      <button type="button" class="delete" @click="close"></button>
    </header>
    <section class="modal-card-body has-background-white">
      <!-- Modal Content -->
      <div>
       <b-form v-model="salesForm" class="form">

         <h4> <span class="is-blue">Total Amount in Litres</span></h4>

                <div class="columns">
                    
                  <div  class="column is-three-quarters">
                    
                   <b-input type="text" icon="cup" v-model="totalAmountInLitres" placeholder="Total Amount in Litres"></b-input>

                  </div>
                </div>



           <h4> <span class="is-blue"> Selling Price</span></h4>
                <div class="columns">
                  
                  <div  class="column is-three-quarters">
                      
                    <b-input type="number" icon="cash"  step=".01" :disabled="!totalAmountInLitres" v-model="sellingPrice" placeholder="Selling Price"></b-input>
                  </div>
                </div>

            <h4> <span class="is-blue"> Date</span></h4>
          <div class="columns">
            
           <div  class="column is-three-quarters">
                
            <b-field label="">
            <b-datepicker
            :disabled="!sellingPrice"
                placeholder="Click to select..."
                v-model="sellingDate"
                >
            </b-datepicker>
          </b-field>

           
           </div>
         </div>


                <div :disabled="!calfRemarks" class=" card my-4">
             
           <div class=" summary-content">
             <h2 class="tag is-info is-light mb-4 summary">Summary</h2>
              <p class="yellow">Before adding your data, <br> confirm correct entries using the summary below </p>

            
        
            <p>Total Amount In Litres:  {{totalAmountInLitres}}</p>
            <p>Selling Price:  {{sellingPrice}}</p>
            <p>Date:  {{sellingDate}}</p>
         
           </div>
         </div>


       <b-button :disabled="!sellingPrice" @click="onSubmit" type="is-info">Add </b-button>

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
import { api } from '@/helpers/axios-instance'
  //import data from '../../../store/salesData'
import { mapActions, mapGetters } from 'vuex'
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'SalesModal',

   data() {
    return {
      isFullPage: true,

      salesForm: {
      
             totalAmountInLitres:null,
             sellingPrice:null,
             sellingDate:null
              
      },

     
     
    }
  },

   computed: {

      ...mapFields('salesData', [
      'salesForm',
      'salesForm.totalAmountInLitres',
      'salesForm.sellingPrice',
      'salesForm.sellingDate',
      
       ]),



      ...mapGetters('salesData', {
       sale: 'selectedSale',
       allSales:'allSales',
      saleLoading: 'loading',

    }),

   },

   

  // },

  mounted() {},

  async created() {

  },
  

  methods: {
      ...mapActions('salesData', ['addNewSale','getAllSales', 'load']),

   loading() {
      return this.saleLoading 
    },

    
       

    async onSubmit() {
      await this.$buefy.dialog.confirm({
        title: 'Add New Sales Data',
        message: 'Proceed to add new entry?',
        cancelText: 'Cancel',
        confirmText: 'Yes, entries are correct',
        type: 'is-warning is-light',
        hasIcon: true,
        onConfirm: async () => {
          
        await this.addNewSale();

          this.$buefy.toast.open({
            duration: 3000,
            message: 'Sales data Successfully Added!',
            position: 'is-top',
            type: 'is-info is-light',
          })
           this.clearForm();
          showNotifications();
          this.$parent.close()
        },
      })
   

            function showNotifications(){
   const notification = new Notification("Sales data added.", {
       body: "Be sure to check your sales data periodically.",
       icon: '@/assets/pug3.jpg'
   }); 

      
        }

   
    },

    close() {
      this.$buefy.toast.open({
        message: 'Sales Snapshot closed.',
        duration: 2000,
        position: 'is-bottom',
        type: 'is-warning ',
      })
      this.$parent.close()
    },

    clearForm(){
       this.salesForm ={
      
             totalAmountInLitres:null,
             sellingPrice:null,
              
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

                  <!-- <b-autocomplete 
                  rounded  
                  :data="filteredDataArray" 
                  v-model="earTagID" 
                  placeholder="ear tag ID" 
                  icon="magnify"
                  clearable
                  @select="option => selected = option">
                     <template #empty>No results found</template>
                  </b-autocomplete> -->