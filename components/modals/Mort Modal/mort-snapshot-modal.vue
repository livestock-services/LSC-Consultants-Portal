<template>
  <div class="modal-card ">
    <header class="modal-card-head">
      <h3 class="modal-card-title">Mortalities Snapshot</h3>
     
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
              {{mortality.earTagID}}
              
            </p>
           </div>
         </div>

         <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue"> Cause Of Death</span></h4>
            <p  placeholder="Supplier Name">
              {{mortality.causeOfDeath}}
            </p>
           </div>
         </div>

        <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue"> Date Of Death</span></h4>
            <p  placeholder="Supplier Name">
              {{mortality.dateOfDeath}}
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
  name: 'MortSnapshotModal',

   data() {
    return {
      isFullPage: true,
     
     
    }
  },

  computed: {
     ...mapGetters('mortalitiesData', {
      mortality: 'selectedMortality',
      mortalitiesLoading: 'loading',
    }),

    loading() {
      return this.mortalitiesLoading 
    },

  },

  mounted() {},

  

  methods: {
    ...mapActions('mortalitiesData', ['load', 'selectMortality']),

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
        message: 'mortalities Snapshot closed.',
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
