<template>
  <div class="box card form-card-2">
    <div class="grid is-full-height pt-2">
      <div class="card form-card-2"></div>
      
      <div class="card-1 form-card-1">
       <FormulateForm
          #default="{ isLoading }"
          v-model="form"
          :class="['card-content']"
          @submit="onLogin"
        >
          <h1 class="header center my-4">
            <span class="is-blueish">L</span> 
            <span class="is-blueish">S</span> 
            <span class="is-blueish">C</span>
            <span class="is-blueish">S</span> <br> <span class="is-greenish"> Consultants Portal.</span>
          </h1>
         
        <div>
         <FormulateInput
            type="email"
            name="email"
            class="email "
            label="Email"
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
         
  
        
          <FormulateInput
            type="password"
            name="password"
            label="Password"
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
  
          <b-button
            class="mt-4"
            expanded
            type="is-info"
            tag="input"
            native-type="submit"
            value="Login"
          />
          <b-loading :active="isLoading" is-full-page></b-loading>
        <!--
          <p>
            Not Registered? Sign up
            <nuxt-link to="/auth/register">here</nuxt-link>
          </p>
  
          -->
        </FormulateForm>
    
      </div>
  
     
  
     
  
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
  
      auth: 'guest',
    data() {
      return {
        form: {
          
          email: 'kondwanim@livestock.co.zm',
          password: '123456',
        },
        hasError: true,
        isLoading: false,
        isFullPage: true,
      }
    },
  
     computed: {
       ...mapGetters('users', {
          loading: 'loading',
           Users: 'allUsers',
      }),
    },
  
    methods: {
     ...mapActions('user', ['getUser']),
  
     ...mapActions('users', ['getAllUsers']),
  
    async onLogin(){
       this.$buefy.toast.open({
            duration: 3000,
            message: 'Welcome!',
            position: 'is-top',
            type: 'is-success',
          })
    
       
   
       this.$router.push({ path: '/' })
  
         
    
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
  
  <style scoped>
  
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
    color: rgb(5, 105, 67);
    font-size: 1.8rem;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }

  .is-blueish {
    color: rgb(24, 72, 168);
    font-size: 1.8rem;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }

  .is-green {
    color: rgb(17, 158, 158);
    font-size: 2.8rem;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  .is-greenish {
    color: rgb(62, 96, 144);
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
     height: 92vh;  
    grid-row: 2/3;
    grid-column: 3/3;
    width: 100%;
    background-color: rgba(204, 242, 248, 0.863);
  }
  
  .card-content {
    padding-top: 7.5rem;
    width: auto;
  }
  
  .form-card-2 {
    height: 92vh;
    grid-row: 2/3;
    grid-column: 1/3;
    background: url('../../assets/images/LSC2.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  .box{
      /*background-color: rgb(35, 87, 134); 
      /* background: url('../../assets/images/p2.jpg'); */
      padding-top: 0.5rem;
      padding-bottom: 0rem;
      padding-left: 1.5rem;
      padding-right: 1rem;
  }
  </style>
  