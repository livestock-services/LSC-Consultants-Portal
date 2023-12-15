<template>
  <div class="modal-card ">
    <header class="modal-card-head">
      <h3 class="modal-card-title">Vet Snapshot</h3>
     
      <button type="button" class="delete" @click="close"></button>
    </header>
    <section class="modal-card-body has-background-white">
      <!-- Modal Content -->
      <div>
       <b-form class="form">

        <div v-if="vet.vetConsultingPerson !== 'Other'" class="columns">
           <div  class="column is-half">
             <h4> <span class="toggle is-blue"> Consulting Person</span></h4>
            <p >
             <span class="tag earTagID "> {{vet.vetConsultingPerson}} </span>
             
            </p>

             <!-- <b-input v-model="earTagID" class="toggle"></b-input> -->
           </div>
         </div>

         <div v-if="vet.vetConsultingPerson === 'Other'" class="columns">
           <div  class="column is-half">
             <h4> <span class="toggle is-blue"> Consulting Person</span></h4>
            <p >
             <span class="tag earTagID "> {{vet.vetOtherConsultingPerson}} </span>
             
            </p>

             <!-- <b-input v-model="earTagID" class="toggle"></b-input> -->
           </div>
         </div>

          <div class="columns">
           <div  class="column is-half">
             <h4> <span class="toggle is-blue"> Client Name</span></h4>
            <p >
             <span class="tag earTagID "> {{vet.vetClientName}} </span>
             
            </p>

             <!-- <b-input v-model="earTagID" class="toggle"></b-input> -->
           </div>
         </div>

         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Phone No.</span></h4>
            <p >
             <span class="tag breed "> {{vet.vetClientPhoneNumber}} </span>
              
            </p>
           </div>
         </div>

         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Location</span></h4>
            <p >
             <span class="tag  is-light"> {{vet.vetClientLocation}} </span>
              
            </p>
           </div>
         </div>

           <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Town</span></h4>
            <p >
             <span class="tag age "> {{vet.vetClientTown}} </span>
              
            </p>
           </div>
         </div>

           <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Category</span></h4>
            <p >
            <span class="tag is-info" > {{vet.vetCategory}} </span>
              
            </p>
           </div>
         </div>

         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Category (Other than listed)</span></h4>
            <p >
            <span class="tag is-info is-light" > {{vet.vetOther}} </span>
              
            </p>
           </div>
         </div>

         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Date</span></h4>
            <p >
            <span class="tag is-info is-light" > {{vet.date}} </span>
              
            </p>
           </div>
         </div>


         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Comments/Remarks</span></h4>
            <p >
             <span style="font-size: small;" aria-multiline="true"> {{vet.vetComments}} </span>
              
            </p>
           </div>
         </div>

         

       

       </b-form>

      </div>
    </section>
    <footer class="modal-card-foot">
       <b-button label="Close" @click="close" />

       <b-tooltip label="Export to PDF" type="is-dark" position="is-top">
          <consultation-template/>
        </b-tooltip>
     
    </footer>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import ConsultationTemplate from '~/components/PDF Templates/consultation-template.vue'
export default {
  
  components:{ConsultationTemplate},
  name: 'vetSnapshotModal',

   data() {

    
    return {
      isFullPage: true,

      
     
    }
  },

  computed: {
     ...mapGetters('vetData', {
      vet: 'selectedVetRecord',
      vetLoading: 'loading',
    }),

    loading() {
      return this.vetLoading 
    },

  },

  mounted() {},



  methods: {
    ...mapActions('vetData', ['load', 'selectVetRecord']),

    async onSubmit() {
       await this.putvetInTreatment();
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
      
      await this.markvetAsTreated();
       const msg = await Promise.resolve('Operation successful')
     
      this.$buefy.toast.open({
        message: msg, // 'Operation successful',
        duration: 5000,
        position: 'is-top',
        type: 'is-info',
      })
      this.$parent.close()
    },


 invet(){
  console.log("Preggo!")
},

 onMortality(){
  console.log("Pegged!")
},

    close() {
      this.$buefy.toast.open({
        message: 'vet Snapshot closed.',
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
