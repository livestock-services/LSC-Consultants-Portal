<template>
<div class="form-card-2">
  <div class="grid is-full-height ">

    <div class="card-1 form-card-1">
     <FormulateForm
        #default="{ isLoading }"
        v-model="registerForm"
        :class="['card-content']"
        @click="registerUser"
      >
        <h1 class="header center mb-10">
          <span class="is-blue">Sign up</span> 
          <span class="is-blue">With</span> 
        
          
           <br><a
          class="navbar-item"
          href="#"
        >
         <span class="litmas">Litmas  </span>
          <img
            src="~assets/svg/ram.svg"
            alt="Litmas"
            height="20"
          >

          <span class="litmas"> Dairy &trade; </span>
        </a>
        </h1>
       
      <div>
       <FormulateInput
          type="text"
          name="name"
          class="email "
          label="Name"
          v-model="username"
          validation="bail|required"
          data-has-icons-left
          
        >
          <template #suffix>
            <span class="icon is-left">
              <i class="mdi mdi-account"></i>
            </span>
          </template>
        </FormulateInput>
        </div>


        <div>
       <FormulateInput
          type="email"
          name="email"
          class="email"
          v-model="email"
          label="Email"
          validation="bail|required|email"
          data-has-icons-left
          
        >
          <template #suffix>
            <span class="icon is-left">
              <i class="mdi mdi-mail"></i>
            </span>
          </template>
        </FormulateInput>
        </div>
       

      
        <FormulateInput
          type="password"
          name="password"
          label="Password"
           v-model="password"
          validation="required"
          data-has-icons-left
          class="password is-full-width"
        >
          <template #suffix>
            <span class="icon is-left">
              <i class="mdi mdi-key"></i>
            </span>
          </template>
        </FormulateInput>

        <!-- <FormulateInput
          type ='password'
          name ='password_confirm'
          label= 'Confirm your password'
          validation = '^required|confirm:password'
          validationName = 'Password confirmation'
          class="password is-full-width"
        >
          <template #suffix>
            <span class="icon is-left">
              <i class="mdi mdi-key"></i>
            </span>
          </template>
        </FormulateInput> -->

        
        

        <b-button
          class="mt-4 mb-10"
          expanded
          
          type="is-success"
          tag="input"
          native-type="submit"
          value="Sign Up"
        />
        <b-loading :active="isLoading" is-full-page></b-loading>
      
       

        
      </FormulateForm>

      <p class="mt-2">
          Already a member? 
          <nuxt-link to="/auth/login"><span class="sign-up"> Login here</span></nuxt-link>
        </p>
  
    </div>

    <div class="card form-card-3"></div>

   

    </div>
  </div>
</template>

<script>
import {api} from '@/helpers/axios-instance'
import { mapActions, mapGetters } from 'vuex'
import { mapFields } from 'vuex-map-fields'
export default {

    auth: 'guest',
  data() {
    return {
    
      registerForm:{
            // username:'',
            // email:'',
            // password:'',
        },
      
      hasError: true,
      isLoading: false,
      isFullPage: true,
    }
  },

  computed: {
//     ...mapGetters('users', {
//        loading: 'loading',
//         Users: 'allUsers',
//    }),

   ...mapFields('users', [
      'registerForm',
       'registerForm.name',
       'registerForm.email',
       'registerForm.password'  
      
      
  ]),
  },

  methods: {
 //  ...mapActions('user', ['getUser']),

  ...mapActions('users', ['addNewUser']),


    async registerUser() {

      try {
      this.isLoading= true;

     await this.addNewUser();

    // const {data: newUser} =  await api.post(`/auth/register`, {
    //                data: this.registerForm
                      
    //                 })

    console.log(newUser.data);

        this.$buefy.toast.open({
          duration: 3000,
          message: 'Successfully Registered! Proceed login page',
          position: 'is-top',
          type: 'is-success',
        })
                
             this.isLoading= false;
      //  this.$router.push({ path: '/account/login' })

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
  height: 30vh;
  grid-row: 1/3;
  grid-column: 2/3; 
  width: 100%;
  
  background-repeat: no-repeat;
  background-size: cover;
   
    
     
}

.form-card-3 {
  height: 60vh;
  grid-row: 1/3;
  grid-column: 2/3;
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
   height: 60vh;  
  grid-row: 2/3;
  grid-column: 1/3;
  width: 70%;
  background-color: rgba(152, 153, 153, 0.863);
}

.card-content {
  padding-top: 5.5rem;
  width: auto;
}

.form-card-2 {
  height: 60vh;
  grid-row: 1/3;
  grid-column: 3/3; 
  width: 80%;
  background: url('../../assets/images/LSC3.png');
  background-repeat: no-repeat;
  background-size: cover;
   
    margin-left: 8rem; 
     
      
}


.form-card-3 {
  height: 60vh;
  grid-row: 2/3;
  grid-column: 3/3;
  width: 80%;

  background-repeat: no-repeat;
  background-size: cover;
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