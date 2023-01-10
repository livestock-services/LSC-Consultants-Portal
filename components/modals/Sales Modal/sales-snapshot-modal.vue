<template>
  <div class="modal-card ">
    <header class="modal-card-head">
      <h3 class="modal-card-title">Sales Snapshot</h3>
     
      <button type="button" class="delete" @click="close"></button>
    </header>
    <section class="modal-card-body has-background-white">
      <!-- Modal Content -->
      <div>
       <b-form class="form">
         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Total Amount In Litres</span></h4>
            <p >
             <span class="tag is-primary is-light">{{ sale.totalAmountInLitres}} L</span>
              
            </p>
           </div>
         </div>

         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Selling Price</span></h4>
            <p >
             <span class="tag is-primary is-light">ZMW {{ sale.sellingPrice}} /L</span>
              
            </p>
           </div>
         </div>

        
        
          <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue">Daily Earnings</span></h4>
            <p  placeholder="Daily Milking Yield">
            
             <span
          :class="[
            'tag',
            {
              'is-danger ': sale.totalDailyEarnings < 3500.50,
            },

            {
              'is-warning  ' : sale.totalDailyEarnings > 3500.50 && sale.totalDailyEarnings < 3990.99 ,
            },  

            {
              'is-success  ' : sale.totalDailyEarnings >  4000.00 ,
            },

           
          ]"
          > 
          
           ZMW {{ sale.totalDailyEarnings.toFixed(2) }} /day </span>

            </p>
           </div>
         </div>

           
         <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue">Date</span></h4>
            <p  placeholder="Date">
               <span class="tag is-info is-light">{{ sale.sellingDate}}</span>
            </p>
           </div>
         </div>

       

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
export default {
  name: 'SalesSnapshotModal',

   data() {
    return {
      isFullPage: true,
      milkingForm: {
      
              earTagID:null,
              firstMilking:null,
              secondMilking:null,
              thirdMilking:null,       
        
      },
     
    }
  },

  computed: {
     ...mapGetters('salesData', {
      sale: 'selectedSale',
      saleLoading: 'loading',
    }),

    loading() {
      return this.saleLoading 
    },

  },

  mounted() {},

  

  methods: {
    ...mapActions('salesData', ['load', 'selectSale']),

    async onSubmit() {
      const msg = await Promise.resolve('Operation successful')
      this.$buefy.toast.open({
        message: msg, // 'Operation successful',
        duration: 5000,
        position: 'is-top',
        type: 'is-info',
      })
      this.$parent.close()
    },

    close() {
      this.$buefy.toast.open({
        message: 'Sales Snapshot closed.',
        duration: 2000,
        position: 'is-top',
        type: 'is-warning ',
      })
      this.$parent.close()
    },
  },
}
</script>

<style scoped>
.modal-width-auto {
  width: auto;
}


.is-blue{
  color: rgb(0, 118, 228);
font-family:'Times New Roman', Times, serif;
  font-size: 1.2rem;
  
}

p{
  font-size: 1.5rem;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
