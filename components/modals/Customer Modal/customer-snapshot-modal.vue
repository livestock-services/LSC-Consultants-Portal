<template>
    <div class="modal-card ">
      <header class="modal-card-head">
        <h3 class="modal-card-title">Staff Snapshot</h3>
       
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
                <span
            :class="[
              'tag',
          
              {
                'is-warning' :user.role ===  'user',
              },
  
              {
                'is-success ':user.role === 'admin',
              },
            ]"
            >
                  
                  
                  
                  {{ user.role}}</span>
              </p>
             </div>
           </div>
  
         
  
         </b-form>
  
        </div>
      </section>
      <footer class="modal-card-foot">
        <b-button label="Close" @click="close" />


        <b-tooltip type="is-success" label="Make Administrator">
          <b-button   
          class="mx-1"
          type="is-success"
          icon-left="account"
          icon-right="star"
          @click="onAdmin"
        /> 
        </b-tooltip>

        <b-tooltip label="Make Manager">
          <b-button   
          class="mx-1"
          type="is-primary"
          icon-right="star"
          @click="onManager"
        /> 
        </b-tooltip>

        <b-tooltip label="Make Vet Manager">
          <b-button   
          class="mx-1 vet"
          type="is-primary"
          icon-left="star"
          icon-right="doctor"
          @click="onVetManager"
        /> 
        </b-tooltip>

        <b-tooltip label="Make Lab Manager">
          <b-button   
          class="mx-1 lab"
          type="is-primary"
          icon-left="microscope"
          icon-right="star"
          @click="onLabManager"
        /> 
        </b-tooltip>

        <b-tooltip label="Make Vet Consultant">
          <b-button   
          class="mx-1 vet"
         
          icon-left="doctor"
          @click="onVet"
        /> 
        </b-tooltip>

        <b-tooltip label="Make Agro Consultant">
          <b-button   
          class="mx-1 agro"
         
          icon-left="flower"
          @click="onAgro"
        /> 
        </b-tooltip>

        <b-tooltip label="Make Lab Consultant">
          <b-button   
          class="mx-1 lab"
          
          icon-left="microscope"
          @click="onLab"
        /> 
        </b-tooltip>

        <b-tooltip label="Make Nutrition Consultant">
          <b-button   
          class="mx-1 nutrition"
         
          icon-left="food"
          @click="onNutrition"
        /> 
        </b-tooltip>

        <b-tooltip label="Make AI Consultant">
          <b-button   
          class="mx-1 ai"
         
          icon-left="needle"
          @click="onAI"
        /> 
        </b-tooltip>

        <b-tooltip label="Make Irrigation/Waterpumps Consultant">
          <b-button   
          class="mx-1 roto"
          
          icon-left="water"
          @click="onRoto"
        /> 
        </b-tooltip>

        <b-tooltip label="Make Fence Consultant">
          <b-button   
          class="mx-1 fence"
          
          icon-left="wall"
          @click="onFence"
        /> 
        </b-tooltip>

        <b-tooltip label="Make Fish Consultant">
          <b-button   
          class="mx-1 fish"
          
          icon-left="fish"
          @click="onFish"
        /> 
        </b-tooltip>

       
        
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
      ...mapActions('users', ['load', 'selectUser', 'makeAdminUser','makeManagerUser',
                    'makeVetUser','makeAgroUser','makeLabUser','makeNutritionUser',
                    'makeAIUser','makeRotoUser','makeFenceUser','makeFishUser', 'makeVetManagerUser', 'makeLabManagerUser']),
  
      async onAdmin() {

        await this.makeAdminUser();

        const msg = await Promise.resolve('Operation successfull')
        this.$buefy.toast.open({
          message: msg, // 'Operation successful',
          duration: 5000,
          position: 'is-top',
          type: 'is-info',
        })
        this.$parent.close()
      },

      async onManager() {

      await this.makeManagerUser();

      const msg = await Promise.resolve('Operation successfull')
      this.$buefy.toast.open({
        message: msg, // 'Operation successful',
        duration: 5000,
        position: 'is-top',
        type: 'is-info',
      })
      this.$parent.close()
      },

            async onVetManager() {

      await this.makeVetManagerUser();

      const msg = await Promise.resolve('Operation successfull')
      this.$buefy.toast.open({
        message: msg, // 'Operation successful',
        duration: 5000,
        position: 'is-top',
        type: 'is-info',
      })
      this.$parent.close()
      },


          async onLabManager() {

    await this.makeLabManagerUser();

    const msg = await Promise.resolve('Operation successfull')
    this.$buefy.toast.open({
      message: msg, // 'Operation successful',
      duration: 5000,
      position: 'is-top',
      type: 'is-info',
    })
    this.$parent.close()
    },

      async onVet() {

      await this.makeVetUser();

      const msg = await Promise.resolve('Operation successfull')
      this.$buefy.toast.open({
        message: msg, // 'Operation successful',
        duration: 5000,
        position: 'is-top',
        type: 'is-info',
      })
      this.$parent.close()
      },

      async onAgro() {

      await this.makeAgroUser();

      const msg = await Promise.resolve('Operation successfull')
      this.$buefy.toast.open({
        message: msg, // 'Operation successful',
        duration: 5000,
        position: 'is-top',
        type: 'is-info',
      })
      this.$parent.close()
      },

      async onLab() {

      await this.makeLabUser();

      const msg = await Promise.resolve('Operation successfull')
      this.$buefy.toast.open({
        message: msg, // 'Operation successful',
        duration: 5000,
        position: 'is-top',
        type: 'is-info',
      })
      this.$parent.close()
      },

      async onNutrition() {

      await this.makeNutritionUser();

      const msg = await Promise.resolve('Operation successfull')
      this.$buefy.toast.open({
        message: msg, // 'Operation successful',
        duration: 5000,
        position: 'is-top',
        type: 'is-info',
      })
      this.$parent.close()
      },

      async onAI() {

      await this.makeAIUser();

      const msg = await Promise.resolve('Operation successfull')
      this.$buefy.toast.open({
        message: msg, // 'Operation successful',
        duration: 5000,
        position: 'is-top',
        type: 'is-info',
      })
      this.$parent.close()
      },

      async onRoto() {

      await this.makeRotoUser();

      const msg = await Promise.resolve('Operation successfull')
      this.$buefy.toast.open({
        message: msg, // 'Operation successful',
        duration: 5000,
        position: 'is-top',
        type: 'is-info',
      })
      this.$parent.close()
      },

      async onFence() {

      await this.makeFenceUser();

      const msg = await Promise.resolve('Operation successfull')
      this.$buefy.toast.open({
        message: msg, // 'Operation successful',
        duration: 5000,
        position: 'is-top',
        type: 'is-info',
      })
      this.$parent.close()
      },

      async onFish() {

      await this.makeFishUser();

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

  .modal-card{
    width: fit-content;
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

  .vet{
    color:white;
    background-color: rgb(122, 163, 201);
  }

  .agro{
    color:white;
    background-color: rgb(185, 187, 61);
  }

  .lab{
    color:white;
    background-color: rgb(152, 176, 255);
  }

  .nutrition{
    color:white;
    background-color: rgb(197, 157, 25);
  }

  .roto{
    color:white;
    background-color: rgb(19, 179, 152);
  }


  .ai{
    color:white;
    background-color: rgb(142, 40, 238);
  }

  .fence{
    color:white;
    background-color: rgb(119, 60, 11);
  }

  .fish{
    color:white;
    background-color: rgb(41, 175, 228);
  }
  </style>
  