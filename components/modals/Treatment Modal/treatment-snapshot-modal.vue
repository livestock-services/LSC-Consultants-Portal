<template>
  <div class="modal-card ">
    <header class="modal-card-head">
      <h3 class="modal-card-title">Treatment Snapshot</h3>
     
      <button type="button" class="delete" @click="close"></button>
    </header>
    <section class="modal-card-body has-background-white">
      <!-- Modal Content -->
      <div>
       <b-form class="form">
         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Ear Tag ID</span></h4>
            <p >
              <span class="tag  is-light"> {{treatment.earTagID}} </span>
              
            </p>
           </div>
         </div>

         <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue"> Symptoms Displayed</span></h4>
            <p  placeholder="Symptoms Displayed">
             <span class="tag is-warning is-light">  {{ treatment.symptomsDisplayed }} </span>
            </p>
           </div>
         </div>

        <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue"> Diagnosis</span></h4>
            <p  placeholder="Diagnosis">
            <span class="tag is-danger is-light">   {{ treatment.diagnosis }} </span>
            </p>
           </div>
         </div>

          <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue"> Drugs/Dosage Administered</span></h4>
            <p  placeholder="Diagnosis">
             <span class="tag is-primary is-light">  {{ treatment.drugsAdministered }} </span>
            </p>
           </div>
         </div>

          <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue"> Treatment Remarks</span></h4>
            <p  placeholder="Diagnosis">
             <span class="tag is-primary is-light">  {{ treatment.treatmentRemarks }} </span>
            </p>
           </div>
         </div>

          <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue"> Date</span></h4>
            <p  placeholder="Diagnosis">
            <span class="tag is-primary is-light">   {{ treatment.date }} </span>
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
  name: 'TreatmentSnapshotModal',

   data() {
    return {
      isFullPage: true,
       treatmentForm: {
      
             earTagID:null,
             symptomsDisplayed:null,
             diagnosis:null,
             drugsAdministered:null         
        
      },
     
    }
  },

  computed: {
     ...mapGetters('treatmentData', {
      treatment: 'selectedTreatment',
      treatmentLoading: 'loading',
    }),

    loading() {
      return this.treatmentLoading 
    },

  },

  mounted() {},

  

  methods: {
    ...mapActions('treatmentData', ['load', 'selectTreatment']),

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
        message: 'Treatment Snapshot closed.',
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
