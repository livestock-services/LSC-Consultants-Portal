<template>
    <div class="modal-card ">
      <header class="modal-card-head">
        <h3 class="modal-card-title">Customer Snapshot</h3>
       
        <button type="button" class="delete" @click="close"></button>
      </header>
      <section class="modal-card-body has-background-white">
        <!-- Modal Content -->
        <div>
         <b-form class="form">
           <div class="columns">
             <div  class="column is-half">
               <h4> <span class="is-blue"> User Name</span></h4>
              <p >
               <span class="tag is-primary is-light">{{ user.name }}</span>
                
              </p>
             </div>
           </div>
  
          
         
  
             
           <div class="columns">
             <div  class="column is-half">
                <h4> <span class="is-blue">Email</span></h4>
              <p  placeholder="Date">
                 <span class="tag is-info is-light">{{ user.email}}</span>
              </p>
             </div>
           </div>


           <div class="columns">
             <div  class="column is-half">
                <h4> <span class="is-blue">Role</span></h4>
              <p  placeholder="Date">
                 <span class="tag is-info is-light">{{ user.role}}</span>
              </p>
             </div>
           </div>
  
         
  
         </b-form>
  
        </div>
      </section>
      <footer class="modal-card-foot">
        <b-button label="Close" @click="close" />


         <b-button
          label="Make Administrator"
          type="is-info"
          icon-left="account"
          @click="onSubmit"
        /> 
      </footer>
    </div>
  </template>
  
  <script>
  
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'CustomerSnapshotModal',
  
     data() {
      return {
        isFullPage: true,
        
       
      }
    },
  
    computed: {
       ...mapGetters('users', {
        user: 'currentUser',
        userLoading: 'loading',
      }),
  
      loading() {
        return this.userLoading 
      },
  
    },
  
    mounted() {},
  
    
  
    methods: {
      ...mapActions('users', ['load', 'selectUser', 'activateUser']),
  
      async onSubmit() {

        await this.activateUser();

        const msg = await Promise.resolve('Operation successfull')
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
          message: 'User Snapshot closed.',
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
  
  .feed{
    background-color: rgb(192, 248, 170);
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
  