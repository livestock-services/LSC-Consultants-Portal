<template>
  <div class="modal-card ">
    <header class="modal-card-head">
      <h3 class="modal-card-title">Agro Snapshot</h3>
     
      <button type="button" class="delete" @click="close"></button>
    </header>
    <section class="modal-card-body has-background-white">
      <!-- Modal Content -->
      <div>
       <b-form class="form">

        <div class="columns">
           <div  class="column is-half">
             <h4> <span class="toggle is-blue"> Consulting Person</span></h4>
            <p >
             <span class="tag earTagID "> {{agro.agroConsultingPerson}} </span>
             
            </p>

             <!-- <b-input v-model="earTagID" class="toggle"></b-input> -->
           </div>
         </div>

         <div v-if="agro.agroConsultantPerson === 'Other'" class="columns">
           <div  class="column is-half">
             <h4> <span class="toggle is-blue"> Consulting Person(If not on the list)</span></h4>
            <p >
             <span class="tag earTagID "> {{agro.agroOtherConsultingPerson}} </span>
             
            </p>

             <!-- <b-input v-model="earTagID" class="toggle"></b-input> -->
           </div>
         </div>

          <div class="columns">
           <div  class="column is-half">
             <h4> <span class="toggle is-blue"> Client Name</span></h4>
            <p >
             <span class="tag earTagID "> {{agro.clientName}} </span>
             
            </p>

             <!-- <b-input v-model="earTagID" class="toggle"></b-input> -->
           </div>
         </div>

         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Phone No.</span></h4>
            <p >
             <span class="tag breed "> {{agro.clientPhoneNumber}} </span>
              
            </p>
           </div>
         </div>

         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Location</span></h4>
            <p >
             <span class="tag  is-light"> {{agro.clientLocation}} </span>
              
            </p>
           </div>
         </div>

           <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Town</span></h4>
            <p >
             <span class="tag age "> {{agro.clientTown}} </span>
              
            </p>
           </div>
         </div>

           <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Category</span></h4>
            <p >
            <span class="tag is-info" > {{agro.agroCategory}} </span>
              
            </p>
           </div>
         </div>


         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Comments/Remarks</span></h4>
            <p >
             <span style="font-size: small;" aria-multiline="true"> {{agro.clientComments}} </span>
              
            </p>
           </div>
         </div>

         

       

       </b-form>

      </div>
    </section>
    <footer class="modal-card-foot">
       <b-button label="Close" @click="close" />


     
    </footer>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'AgroSnapshotModal',

   data() {
    return {
      isFullPage: true,

      
     
    }
  },

  computed: {
     ...mapGetters('agroData', {
      agro: 'selectedAgroRecord',
      agroLoading: 'loading',
    }),

    loading() {
      return this.agroLoading 
    },

  },

  mounted() {},



  methods: {
    ...mapActions('agroData', ['load', 'selectAgroRecord']),

    async onSubmit() {
       await this.putagroInTreatment();
      const msg = await Promise.resolve('Operation successful')
      this.$buefy.toast.open({
        message: msg, // 'Operation successful',
        duration: 5000,
        position: 'is-top',
        type: 'is-info',
      })
      this.$parent.close()
    },

     async onTreated() {
      
      await this.markagroAsTreated();
       const msg = await Promise.resolve('Operation successful')
     
      this.$buefy.toast.open({
        message: msg, // 'Operation successful',
        duration: 5000,
        position: 'is-top',
        type: 'is-info',
      })
      this.$parent.close()
    },


 inagro(){
  console.log("Preggo!")
},

 onMortality(){
  console.log("Pegged!")
},

    close() {
      this.$buefy.toast.open({
        message: 'agro Snapshot closed.',
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

.age{
  background-color: rgb(217, 219, 250);
}

.earTagID{
  background-color: rgb(157, 248, 236);
}

.breed{
  background-color: rgb(196, 252, 170);
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
