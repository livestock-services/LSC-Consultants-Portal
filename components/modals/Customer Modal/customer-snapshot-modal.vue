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
             <h4> <span class="is-blue">  Customer Name</span></h4>
            <p >
              <span class="tag is-light is-light">{{user.name}}</span> 
              
            </p>
           </div>
         </div>

         <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue"> Customer Email</span></h4>
            <p  placeholder="Supplier Name">
              <span class="tag is-light is-light"> {{user.email}}</span> 
            </p>
           </div>
         </div>

        <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue"> Subscription Plan</span></h4>
            <p  placeholder="Subscription Plan">
               
               <span
          :class="[
            'tag',
            {
              'is-primary ': user.subscriptionPlan === 'Starter'
            },

            {
              'is-info ' : user.subscriptionPlan === 'Growth' ,
            },

            {
              'is-success  ' : user.subscriptionPlan === 'Enterprise',
            },

           
          ]"
          > 
          
            {{user.subscriptionPlan}} </span>

                 
            </p>
           </div>
         </div>

         <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue"> Billing Cycle</span></h4>
            <p  placeholder="Supplier Name">
               <span
          :class="[
            'tag',
            {
              'annual ': user.billingCycle === 'Annual'
            },

            {
              'is-warning  ' : user.billingCycle === 'Quarterly' ,
            },

            {
              'is-success  ' : user.billingCycle === 'Annually',
            },

           
          ]"
          > 
          
            {{user.billingCycle}} </span>


            
            </p>
           </div>
         </div>

       <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue">Payment Status</span></h4>
            <p  placeholder="Supplier Name">
               <span
          :class="[
            'tag',
           

            {
              'is-warning  ' : user.paymentStatus === 'Pending' ,
            },

            {
              'is-success  ' : user.paymentStatus === 'Paid',
            },

           
          ]"
          > 
          
            {{user.paymentStatus}} </span>


            
            </p>
           </div>
         </div>

       

       </b-form>

      </div>
    </section>
    <footer class="modal-card-foot">
      <b-button label="Close" @click="close" />
       <b-button
        label="Activate"
        type="is-primary"
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
      userForm: {
      
             // name:null,
              email:null,
              subscriptionPlan:null,
              billingCycle:null         
        
      },
     
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
        message: 'Customer Snapshot closed.',
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

.annual{
  background-color: rgb(196, 250, 146);
}

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
