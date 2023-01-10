<template>
  <div class="modal-card ">
    <header class="modal-card-head">
      <h3 class="modal-card-title">Customer Snapshot</h3>
     
      <button type="button" class="delete" @click="close"></button>
    </header>
    <section class="modal-card-body has-background-white">
      <!-- Modal Content -->
      <div>
       <b-form v-model="userForm" class="form">

         <h4> <span class="is-blue"> Enter Customer Name</span></h4>

         <div class="columns">
            
           <div  class="column is-three-quarters">
            
           <b-input rounded icon="account" type="text" v-model="name" placeholder="Name"></b-input>
           </div>
         </div>

           
        <h4> <span class="is-blue"> Email </span></h4>
        <div class="columns">
          
           <div  class="column is-three-quarters">
              
            <b-input v-if="name" rounded icon="mail" type="email" required="true" v-model="email" placeholder="email address"></b-input>
           </div>
         </div>

          <h4> <span class="is-blue"> Password </span></h4>
        <div class="columns">
          
           <div  class="column is-three-quarters">
              
            <b-input v-if="email" rounded icon="key" type="password" v-model="password" placeholder="password"></b-input>
           </div>
         </div>


       <b-button v-if="password" @click="onSubmit" type="is-info">Add </b-button>

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
  name: 'CustomerModal',

   data() {
    return {
      isFullPage: true,

      userForm: {
      
              name:null,
              email:null,
              password:null        
        
      },
     
    }
  },

   computed: {

      ...mapFields('users', [
      'userForm',
      'userForm.name',
      'userForm.email',
      'userForm.password'  
      
      
      ]),

      ...mapGetters('users', {
       user: 'selectedUser',
     // userLoading: 'loading',
    }),

   },

   

  // },

  mounted() {},

  

  methods: {
      ...mapActions('users', ['addNewUser','getAllUsers', 'load']),

   loading() {
     // return this.userLoading 
    },


    async onSubmit() {

     // this.userLoading= true
      await this.addNewUser();
      const msg = await Promise.resolve('Customer Successfully Created!')
      this.$buefy.toast.open({
        message: msg, // 'Operation successful',
        duration: 1200,
        position: 'is-top-right',
        type: 'is-success',
      })
     // this.userLoading= false
      
      this.clearForm();
      this.$parent.close()
    },

    close() {
      this.$buefy.toast.open({
        message: 'Customer Snapshot closed.',
        duration: 2000,
        position: 'is-bottom',
        type: 'is-warning ',
      })
      this.$parent.close()
    },

    clearForm(){
       this.userForm = {
      
              name:null,
              email:null,
              password:null        
        
      }
    }
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
