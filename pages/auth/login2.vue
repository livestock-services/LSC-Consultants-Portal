<template>
    <div class="container">
      <div class="grid is-full-height pt-2">
        <div class="card form-card-2"></div>
        <div class="card-1 form-card-1">
          <FormulateForm
            #default="{ isLoading }"
            v-model="form"
            :class="['card-content']"
            @submit="loginUser"
          >
            <h1 class="header center my-4">
              <b-tooltip 
                style="font-size: medium;" 
                label="Consultants and Laboratory Assistive Information Management System (CLAIMS)." 
                position="is-top" 
                type="is-warning"
              >
                <span 
                  class="is-greenish" 
                  style="font-style: italic; font-family:Alegreya Sans; font-size:4rem; color: rgb(29, 28, 52);"
                >
                  CLAIMS 
                </span> 
                <span class="tag is-info">v1.0</span>
              </b-tooltip>
              <b-icon
                icon="flower"
                size="is-large"
                type="is-danger"
              />
            </h1>
            <div>
              <FormulateInput
                type="email"
                name="email"
                v-model="form.email"
                class="email"
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
              v-model="form.password"
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
          </FormulateForm>
          <!-- Uncomment if you want to enable registration link -->
          <!-- <p class="mt-2">
            Not Registered? Sign up
            <nuxt-link to="/auth/register"><span class="sign-up">here</span></nuxt-link>
          </p> -->
        </div>
      </div>
      <b-loading :active="showLoading" >
        <div class="custom-loading-content">
          <page-loading-vue/>
        </div>
      </b-loading>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex'
  import { mapFields } from 'vuex-map-fields'
  import PageLoadingVue from '~/components/Tools/Other/page-loading.vue'
  
  export default {
    components: {
      PageLoadingVue
    },
    auth: 'guest',
    data() {
      return {
        isPageReloaded: false,
        form: {
          email: '',
          password: '',
        },
        hasError: true,
        isLoading: false,
        showLoading: false,
      }
    },
    created() {
      this.getAllUsers().then(allUsers => {
        console.log(allUsers)
      });
    },
    computed: {
      ...mapFields('users', [
        'userLoginForm',
        'userLoginForm.email',
        'userLoginForm.password'  
      ]),
      ...mapGetters('users', {
        loading: 'loading',
        users: 'allUsers',
        user: 'loggedInUser',
      }),
    },
    methods: {
      ...mapActions('user', ['getUser']),
      ...mapActions('users', ['getAllUsers', 'loginUser']),
      async loginUser() {
        this.isLoading = true;
        try {
          await this.getAllUsers();
          const { data: response } = await this.$auth.loginWith('local', {
            data: this.form 
          });
          const user = response.data;
          this.$auth.setUser(user);
  
          this.$buefy.toast.open({
            duration: 3000,
            message: 'Welcome!',
            position: 'is-top',
            type: 'is-success',
          });
  
          if (!this.isPageReloaded) {
            this.isPageReloaded = true;
  
            setTimeout(() =>{
  
              this.showLoading = true;
  
            setTimeout(() => {
  
              window.location.reload();
              
              
            }, 3500); // Optional delay for a smoother transition
  
  
            
  
            }, 100);
            
          
            
          }
        } catch (error) {
          this.form.password = null;
          const message = error.response
            ? error.response.data.message
            : error.message;
          this.$buefy.toast.open({
            duration: 3000,
            message: 'Please check your details again!',
            position: 'is-top',
            type: 'is-danger',
          });
        } finally {
          this.isLoading = false;
        }
      },
    },
  }
  </script>
  
  <style scoped>
  .formulate-input::v-deep .email {
    background-color: red;
  }
  
  .header {
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
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  
  .is-greenish {
    color: rgb(62, 96, 144);
    font-size: 2.8rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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
    margin-bottom: 2rem;
    height: 92vh;
    grid-row: 2/3;
    grid-column: 3/3;
    width: 100%;
    background-color: rgba(253, 228, 181, 0.863);
  }
  
  .card-content {
    padding-top: 2.5rem;
    width: auto;
  }
  
  .form-card-2 {
    height: 92vh;
    grid-row: 2/3;
    grid-column: 1/3;
    background: url('../../assets/images/LSC2.png');
    background-repeat: no-repeat;
    background-size: contain;
  }
  
  .box {
    /*background-color: rgb(35, 87, 134); 
    /* background: url('../../assets/images/p2.jpg'); */
    padding-top: 0.5rem;
    padding-bottom: 0rem;
    padding-left: 1.5rem;
    padding-right: 1rem;
  }
  
  .custom-loading-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 1.5rem;
    color: #fff;
  }
  </style>
  