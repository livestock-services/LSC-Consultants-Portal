<template>
<div class=" form-card-2">
  <div class="grid is-full-height ">

    <div class="card-1 form-card-1">
     <FormulateForm
        #default="{ isLoading }"
        v-model="form"
        :class="['card-content']"
        @submit="login"
      >
        <h1 class="header center my-4">
          <span class="is-blue">Reset your password</span> 
          <span class="is-blue">With</span> 
        
          
           <br> <a
          class="navbar-item"
          href="#"
        >
         <span class="litmas">Litmas  </span>
          <img
            src="~assets/svg/cow1.svg"
            alt="Litmas"
            height="20"
          >

          <span class="litmas"> Systems &trade; </span>
        </a>
        </h1>
       
     <div>
       <FormulateInput
          type="email"
          name="email"
          class="email "
          label="Enter your email address below. We will send a link to this email where you can reset your password"
          validation="bail|required|email"
          data-has-icons-left
          
        >
          <template #suffix>
            <span class="icon is-left">
              <i class="mdi mdi-account"></i>
            </span>
          </template>
        </FormulateInput>
        </div>

        <b-button
          class="mt-4 mb-10"
          expanded
          type="is-success"
          tag="input"
          native-type="submit"
          value="Send"
        />
        <b-loading :active="isLoading" is-full-page></b-loading>
      
        <p class="mt-5">
          Already a member? 
          <nuxt-link to="/auth/login"><span class="sign-up"> Login here</span></nuxt-link>
        </p>

        
      </FormulateForm>
  
    </div>

    <div class="card form-card-3">
       <img
            src="~assets/litmas3.png"
            alt="Litmas"
            height="20"
          >
    </div>

   

    </div>
  </div>
</template>

<script>
//import { mapActions, mapGetters } from 'vuex'
export default {

    auth: 'guest',
  data() {
    return {
      form: {
        
        email: null,
        password: null,
      },
      hasError: true,
      isLoading: false,
      isFullPage: true,
    }
  },

//    computed: {
//      ...mapGetters('users', {
//         loading: 'loading',
//          Users: 'allUsers',
//     }),
//   },

  methods: {
 //  ...mapActions('user', ['getUser']),

 //  ...mapActions('users', ['getAllUsers']),

  async onLogin(){
     this.$buefy.toast.open({
          duration: 3000,
          message: 'Feature is under development!',
          position: 'is-top',
          type: 'is-warning',
        })
  
     
 
   //  this.$router.push({ path: '/' })

       
  
  },
    async loginUser(user) {

      try {
        const { data: response } = await this.$auth.loginWith('local', {
            data: this.form 
          })
          //   const user = response.data
          console.log(response.data)
          this.$auth.setUser(user)

        
      

            
        this.$buefy.toast.open({
          duration: 3000,
          message: 'Welcome!',
          position: 'is-top',
          type: 'is-success',
        })
  

        this.$router.push({ path: '/' })

       // await this.getAllUsers();
        //   await this.getUser(form);

      } catch (error) {
        this.form.password = null
        const message = error.response
          ? error.response.data.message
          : error.message
        this.$buefy.toast.open({
          duration: 3000,
          message: 'Please check your details again!',
          position: 'is-top',
          type: 'is-danger',
        })
      }
    },
  },
}
</script>

<style>

@media only screen and (max-width: 500px) {
  


.grid {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  display: grid;
  grid-template-rows: 1fr minmax(min-content, auto) 1fr;
  grid-template-columns: 1fr minmax(min-content, auto) 1fr;
}
.form-card-1 {
   height: 50vh;  
  grid-row: 1/3;
  grid-column: 3/3;
  width: 100%;
  
  background-color: rgba(232, 242, 247, 0.863);
}

.card-content {
  padding-top: 1.2rem;
  width: auto;
}

.form-card-2 {
  height: 50vh;
  grid-row: 1/3;
  grid-column: 3/3; 
  width: 80%;
  background: url('../../assets/cow5.jpg');
  background-repeat: no-repeat;
  background-size: cover;
 
  margin-top: 4rem;
  margin-left: 1rem;
    
}

.form-card-3 {
  height: 50vh;
  grid-row: 1/3;
  grid-column: 3/3;
  width: 90%;
  background-color: rgba(232, 242, 247, 0.863);
  /* background: url('@/assets/cow3.jpg'); */
  background-repeat: no-repeat;
  background-size: cover;
  padding-right: 0.5rem;
 

}

}


/**--------------------------------------MIN WIDTH GREATER THAN 500----------------------------------------------------------------------- */



.card{
 padding: 30px;
 
}

.sign-up{
    color: rgb(24, 153, 204);
}

.reset{
    text-align: right;
    float: right;
    color: rgb(13, 192, 138);
}

.reset-pass{
    float: right;
    margin-bottom: 20px;
}
.formulate-input::v-deep .email {
  background-color: red;
}

.header{
  font-size: 2rem;
  color: gray;
}

.center {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: 700;
}
.is-blue {
  color: rgb(5, 65, 105);
  font-size: 1.8rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.is-green {
  color: rgb(31, 108, 172);
  font-size: 2.8rem;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.register {
  padding-left: 5rem;
}

.email {
  width: 100%;
  border-radius: 30%;
}

.password {
  width: 90%;
}
.grid {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  display: grid;
  grid-template-rows: 1fr minmax(min-content, auto) 1fr;
  grid-template-columns: 1fr minmax(min-content, auto) 1fr;
}
.form-card-1 {
  height: 72vh;  
  grid-row: 2/3;
  grid-column: 1/3;
  width: 100%;
  background-color: rgba(243, 235, 223, 0.863);
}

.card-content {
  padding-top: 7.5rem;
  width: auto;
}


.form-card-2 {
  height: 72vh;
  grid-row: 2/3;
  grid-column: 3/3; 
  width: 80%;
  background: url('../../assets/cow5.jpg');
  background-repeat: no-repeat;
  background-size: cover;
 
  margin-top: 4rem;
  margin-left: 9rem;
    
}


.form-card-3 {
  height: 72vh;
  grid-row: 2/3;
  grid-column: 3/3;
  width: 100%;
 
  background-repeat: no-repeat;
  background-size: contain;
  padding-right: 5rem;
   
    
}

/* .box{
    /*background-color: rgb(35, 87, 134); 
    /* background: url('../../assets/images/p2.jpg'); 
    padding-top: 0.2rem;
    padding-bottom: 1rem;
    padding-left: 1.5rem;
    padding-right: 1rem;
} */
</style>