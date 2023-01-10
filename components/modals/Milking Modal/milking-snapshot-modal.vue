<template>
  <div class="modal-card ">
    <header class="modal-card-head">
      <h3 class="modal-card-title">Milking Snapshot</h3>
     
      <button type="button" class="delete" @click="close"></button>
    </header>
    <section class="modal-card-body has-background-white">
      <!-- Modal Content -->
      <div>
       <b-form class="form">
         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue">  Ear Tag ID</span></h4>
            <p >
             <span class="tag is-primary is-light">{{ dmr.earTagID}}</span>
              
            </p>
           </div>
         </div>

         <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue"> 1st Milking</span></h4>
            <p  placeholder="1st Milking">
              
               <span
          :class="[
            'tag',
            {
              'is-danger ': dmr.firstMilking < 7.5,
            },

            {
              'is-warning  ' : dmr.firstMilking > 7.5 && dmr.firstMilking < 8.5 ,
            },

            {
              'is-success  ' : dmr.firstMilking >  8.5 ,
            },

           
          ]"
          > 
          
            {{ dmr.firstMilking }} L </span>

            </p>
           </div>
         </div>

        
         <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue"> 2nd Milking</span></h4>
            <p  placeholder="2nd Milking">
             
             <span
          :class="[
            'tag',
            {
              'is-danger ': dmr.secondMilking < 7.5,
            },

            {
              'is-warning  ' : dmr.secondMilking > 7.5 && dmr.secondMilking < 8.5 ,
            },

            {
              'is-success  ' : dmr.secondMilking >  8.5 ,
            },

           
          ]"
          > 
          
            {{ dmr.secondMilking }} L </span>

            </p>
           </div>
         </div>
         
         <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue"> 3rd Milking</span></h4>
            <p  placeholder="3rd Milking">
             
             <span
          :class="[
            'tag',
            {
              'is-danger ': dmr.thirdMilking < 6.5,
            },

            {
              'is-warning  ' : dmr.thirdMilking > 6.5 && dmr.thirdMilking < 8.5 ,
            },

            {
              'is-success  ' : dmr.thirdMilking >  8.5 ,
            },

           
          ]"
          > 
          
            {{ dmr.thirdMilking }} L </span>

            </p>
           </div>
         </div>

         
         <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue">Daily Milking Yield</span></h4>
            <p  placeholder="Daily Milking Yield">
             
             <span
          :class="[
            'tag',
            {
              'is-danger ': dmr.DailyMilkingYield < 20.5,
            },

            {
              'is-warning  ' : dmr.DailyMilkingYield > 20.5 && dmr.DailyMilkingYield < 26.5 ,
            },

            {
              'is-success  ' : dmr.DailyMilkingYield >  26.5 ,
            },

           
          ]"
          > 
          
            {{ dmr.DailyMilkingYield }} L/day</span>

            </p>
           </div>
         </div>

          <div v-if="this.$auth.user.email === 'kondwani1mwale@gmail.com'" class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue">Daily Earnings Per Cow</span></h4>
            <p  placeholder="Daily Milking Yield">
            
             <span
          :class="[
            'tag',
            {
              'is-danger ': dmr.dailyEarnings < 350.50,
            },

            {
              'is-warning  ' : dmr.dailyEarnings > 350.50 && dmr.dailyEarnings < 399.99 ,
            },  

            {
              'is-success  ' : dmr.dailyEarnings >  400.00 ,
            },

           
          ]"
          > 
          
           ZMW {{ dmr.dailyEarnings }} /day </span>

            </p>
           </div>
         </div>

          <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue">Total Cumulated Milking Yield</span></h4>
            <p  placeholder="Date">
               <span class="tag is-info ">{{ dmr.totalDMR}} L</span>
            </p>
           </div>
         </div>

         <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue">Date</span></h4>
            <p  placeholder="Date">
               <span class="tag is-info is-light">{{ dmr.milkingDate}}</span>
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
  name: 'MilkingSnapshotModal',

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
     ...mapGetters('cattleData', {
      dmr: 'selectedDMR',
      dmrLoading: 'loading',
    }),

    loading() {
      return this.dmrLoading 
    },

  },

  mounted() {},

  

  methods: {
    ...mapActions('cattleData', ['load', 'selectDMR']),

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
        message: 'Milking Snapshot closed.',
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
