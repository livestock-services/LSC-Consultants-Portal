<template>
  <div class="modal-card ">
    <header class="modal-card-head">
      <h3 class="modal-card-title">Milking Snapshot</h3>
     
      <button type="button" class="delete" @click="close"></button>
    </header>
    <section class="modal-card-body has-background-white">
      <!-- Modal Content -->
      <div>
       <b-form v-model="milkingFormByDate" class="form">

        
           <h4> <span class="is-blue">Start Date</span></h4>
          <div class="columns">
            
           <div  class="column is-three-quarters">
                
            <b-field label="">
            <b-datepicker
                :date-parser="parser"
                placeholder="Click to select..."
                v-model="milkingStartDate"
                >
            </b-datepicker>
          </b-field>

           
           </div>
         </div>

         
           <h4> <span class="is-blue">End Date</span></h4>
          <div class="columns">
            
           <div  class="column is-three-quarters">
                
            <b-field label="">
            <b-datepicker
                :date-parser="parser"
                placeholder="Click to select..."
                v-model="milkingEndDate"
                >
            </b-datepicker>
          </b-field>

           
           </div>
         </div>



                  <div :disabled="!milkingEndDate" class=" card my-4">
             
           <div class=" summary-content">
             <h2 class="tag is-info is-light mb-4 summary">Summary</h2>
              <p class="yellow">Before adding your data, <br> confirm correct entries using the summary below </p>

            TOTAL MILKING RECORDS FROM
            <p> Start Date:  {{milkingStartDate}}</p>

             <p>End Date:  {{ milkingEndDate }}</p>
          
            
           </div>
         </div>

       <b-button  @click="onSubmit" type="is-info">Add </b-button>

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
  //import data from '../../../store/cattleData'
import { mapActions, mapGetters } from 'vuex'
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'MilkingReportModal',

   data() {
    return {
      isFullPage: true,

      // milkingFormByDate: {
      
      //         milkingStartDate:null,
      //         milkingEndDate:null       
        
      // },

   

     
      
      // data: [
      //               'Angular',
      //               'Angular 2',
      //               'Aurelia',
      //               'Backbone',
      //               'Ember',
      //               'jQuery',
      //               'Meteor',
      //               'Node.js',
      //               'Polymer',
      //               'React',
      //               'RxJS',
      //               'Vue.js'
      //           ],
     
    }
  },

   computed: {

      ...mapFields('cattleData', [
      'milkingFormByDate',
      'milkingFormByDate.milkingStartDate',
      'milkingFormByDate.milkingEndDate'
  
      
      
  ]),



      ...mapGetters('cattleData', {
       dmr: 'selectedDMR',
       totalDMRs:'totalDMRs',
      DMRLoading: 'loading',
      earTagOptions: 'earTagOptions'
    }),

   },

   

  // },

  mounted() {},

  async created() {

  },
  

  methods: {
      ...mapActions('cattleData', ['addNewDMR','getAllDMRs', 'addMilkingByDate', 'load']),

   loading() {
      return this.DMRLoading 
    },

        parser(d) { 
          
          return new Date(Date.parse(d)) 
          
          },
    
         async  filteredDataArray() {

        //    const earTagOptions = await this.getAllDMRs();

        //       console.log(earTagOptions.earTagID);

                // return this.data.filter((option) => {
                //     return option
                //         .toString()
                        
                // })
            },


    async onSubmit() {
             await this.$buefy.dialog.confirm({
        title: 'Add New Milking Data',
        message: 'Proceed to add new entry?',
        cancelText: 'Cancel',
        confirmText: 'Yes, entries are correct',
        type: 'is-warning is-light',
        hasIcon: true,
        onConfirm: async () => {
          
           await this.addMilkingByDate();

          this.$buefy.toast.open({
            duration: 3000,
            message: 'Milking Data Successfully Added!',
            position: 'is-top',
            type: 'is-info is-light',
          })
           this.clearForm();
          showNotifications();
          this.$parent.close()
      
     
        },

      })

       function showNotifications(){
   const notification = new Notification("Milking data added.", {
       body: "Be sure to check your milking data periodically.",
      
   }); 

        }


    },

    close() {
      this.$buefy.toast.open({
        message: 'Milking Snapshot closed.',
        duration: 2000,
        position: 'is-bottom',
        type: 'is-warning ',
      })
      this.$parent.close()
    },

    clearForm(){
      this.milkingFormByDate ={
        milkingStartDate:null,
        milkingEndDate:null
      }
    },

//    async getMilkingByDate(){
//         const {data: allDMRs} = await api.get(`/cattle/AllDMRs`)

//        //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
//                const filteredDMRs = allDMRs.data.filter( dmr => 
//                 dmr.createdBy === this.$auth.user.email 
                
//                );

//               //-----------------------------------CALCULATE TOTAL MILK YIELD BY DATE-----------------------------//
//            const filteredDmrByDate = filteredDMRs.filter( t => 
//             t.milkingDate > t.milkingStartDate && t.milkingDate < t.milkingEndDate
//            );
          

//             console.log(filteredDmrByDate[0].DailyMilkingYield)
            
//             let sum = 0;

//             for (let i = 0; i < filteredDmrByDate.length; i++) {
               
//                 sum += filteredDmrByDate[i].DailyMilkingYield;
//             }
          
//            console.log(sum);

//            const totalFilteredMilking = sum

//            return totalFilteredMilking;

//     }
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