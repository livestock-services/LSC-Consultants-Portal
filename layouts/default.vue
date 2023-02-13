<template>
  <div class="nav-padding">
    <nav
      v-if="$auth.loggedIn"
      class="navbar pl-5 header has-shadow color"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
         <span class="litmas tag is-success mr-4">LSC </span>
          <img
            src="~assets/images/LSC.jpg"
            alt="Litmas"
            height="22"
          >

          <span class=" tag is-success litmas"> Consultants </span>

          <span class="ml-2 tag is-success dairy">Portal</span>

          <span class="ml-2 tag is-warning dairy">BETA</span>

        </a>

       

        <div class="right">

             <b-dropdown v-model="isPublic" aria-role="list" position="is-bottom-left">

        <template v-if="isPublic" #trigger>
            <b-button
                label="Menu"
                class="color"
                icon-left="apps"
                icon-right="menu-down" />
        </template>

        <template v-else #trigger>
            <b-button
                label="Menu"
                class="color"
                icon-left="apps"
                icon-right="menu-down" />

        </template>


        <b-dropdown-item  aria-role="listitem"  >
            <div class="media">
                <b-icon class="media-left" icon="account"></b-icon>
                <div class="media-content">
                    <h3>Logged in as</h3>
                    <small> <span class="blue"> {{ this.$auth.user.email}} </span></small>
                </div>
            </div>
        </b-dropdown-item>

        <b-dropdown-item  aria-role="listitem">
            <div class="media">
                <b-icon class="media-left" icon="account-multiple"></b-icon>
                <div class="media-content">
                    <h3>Personal </h3>
                    <small> Profile</small>
                </div>
            </div>
        </b-dropdown-item>

         <b-dropdown-item @click="logout" :value="true" aria-role="listitem">
            <div class="media">
                <b-icon class="media-left" icon="logout"></b-icon>
                <div class="media-content">
                    <h3>Options </h3>
                    <small> Logout</small>
                </div>
            </div>
        </b-dropdown-item>

    </b-dropdown>


         <!-- <b-navbar-dropdown icon="home-outline" label="Menu">
                <b-navbar-item href="#">
                 <span class="blue"> {{this.$auth.user.email}} </span>
                </b-navbar-item>

                <b-navbar-item href="#">
                  Profile
                </b-navbar-item>

                <b-navbar-item @click="logout">
                    Logout
                </b-navbar-item>
            </b-navbar-dropdown> -->
        </div>
        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>

    <section 
    class="main-content  columns">
      <section class="sidebar-layout ">
             <b-sidebar
                position="static"
                :mobile="mobile"
                :expand-on-hover="expandOnHover"
                :reduce="reduce"
                :delay="expandWithDelay ? 500 : null"
                type="is-dark"
                open
                v-if="$auth.loggedIn"
                class="sidebar"
                
            >
                <div class="m-6 ">
                   
                    <b-menu class="menu-bg height is-custom-mobile">
                        <b-menu-list label="Menu" class="menu-bg">
                            <b-menu-item  icon="warehouse"  @click="index" label="Home"></b-menu-item>

                            <!-- <b-menu-item icon="home-outline"  @click="indexConsultantsView" label="Consultants Home"></b-menu-item> -->

                            <b-menu-list class="ml-2" icon="account"  label="Consultations">

                                 <b-menu-item  v-if="$auth.user.email === 'nutrition@livestock.co.zm' ||  $auth.user.email === 'mataas@livestock.co.zm' || $auth.user.email === 'kondwani1mwale@gmail.com'" icon="food" @click="nutrition" label="Nutrition"></b-menu-item>
                               
                                <b-menu-item v-if="$auth.user.email === 'vet-technical@livestock.co.zm' || $auth.user.email === 'augustined@livestock.co.zm' || $auth.user.email === 'bornfacec@livestock.co.zm' ||  $auth.user.email === 'kondwani1mwale@gmail.com' || $auth.user.email === 'vet-sales@livestock.co.zm'" icon="doctor"   @click="vetTech" label="Vet">  </b-menu-item>



                                <b-menu-item  v-if="$auth.user.email === 'beef-ai@livestock.co.zm' || $auth.user.email === 'pig-ai@livestock.co.zm' || $auth.user.email === 'kondwani1mwale@gmail.com'" icon="needle"   @click="AI" label="Artificial Insemination ">  </b-menu-item>



                                <b-menu-item  v-if="$auth.user.email === 'agro@livestock.co.zm' || $auth.user.email === 'omegad@livestock.co.zm' || $auth.user.email === 'kondwani1mwale@gmail.com'" icon="flower"   @click="agro" label="Agronomy">  </b-menu-item>

                                <b-menu-item  v-if="$auth.user.email === 'fence@livestock.co.zm' || $auth.user.email === 'kondwani1mwale@gmail.com'" icon="wall"   @click="fence" label="Fencing">  </b-menu-item>

                                <b-menu-item  v-if="$auth.user.email === 'fish@livestock.co.zm' || $auth.user.email === 'kondwani1mwale@gmail.com'" icon="fish"   @click="fish" label="Fish">  </b-menu-item>

                                <b-menu-item  v-if="$auth.user.email === 'irrigation@livestock.co.zm' || $auth.user.email === 'pumps@livestock.co.zm' || $auth.user.email === 'kondwani1mwale@gmail.com'" icon="water"   @click="irrgiate" label="Irrigation & Water Pumps">  </b-menu-item>

                               

                              
                               
                               
                            </b-menu-list>

                            
                                <b-menu-item v-if="$auth.user.email === 'kondwani1mwale@gmail.com'" icon="account-multiple-outline" @click="customers" label="Users"></b-menu-item>
                               

                            


                           
                        </b-menu-list>
                       
                        <b-menu-list label="Actions">
                            <b-menu-item icon="logout" @click="logout" label="Logout"></b-menu-item>
                        </b-menu-list>
                    </b-menu>
                </div>
            </b-sidebar>
      <b-loading :active="isLoading" is-full-page></b-loading>
            
        </section>
      

      <div class="container column is-10">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {

     isPublic: false,
      isLoading: false,
      expandOnHover: false,
      expandWithDelay: false,
      mobile: "reduce",
      reduce: false,

      items: [

        {
          title: 'Login',
          icon: 'account-user',
          to: { name: 'login' },
          
        },

        
        {
          title: 'Logout',
          icon: 'account-user',
          to: { name: 'login' }
        },

        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Animal Nutrition',
          icon: 'food',
          to: { name: 'nutrition' },
          hash: 'nutrition'
        },

        {
          title: 'Vet Consultation',
          icon: 'vet',
          to: { name: 'vetCon' }
        },

        {
          title: 'Vet Post Mortems',
          icon: 'vet',
          to: { name: 'vetPost' }
        },

        {
          title: 'Agronomy Consultation',
          icon: 'plant',
          to: { name: 'agro' }
        },

         {
          title: 'Fence Consultation',
          icon: 'fence',
          to: { name: 'fence' }
        },


          {
          title: 'Fish Consultation',
          icon: 'fish',
          to: { name: 'fish' }
        },

        // {
        //   title: 'Admin Panel',
        //   icon: 'book',
        //   to: { name: 'admin-panel' }
        // },

        
      ]
    }
  },

  methods:{
     index(){
      this.$router.push("/")
    },

    indexConsultantsView(){
      this.$router.push("index-consultants-view")
    },

      admin(){
       this.$router.push("admin-panel")
     },

      login(){
      this.$router.push("login")
    },
    
    customers(){
      this.$router.push("customers")
    },

    nutrition(){
      this.$router.push("nutrition")
    },
    vetTech(){
      this.$router.push("vet-con")
    },

    vetSales(){
      this.$router.push("vet-sales")
    },

    vetPost(){
      this.$router.push("vet-post-mortems")
    },

    agro(){
      this.$router.push("agro")
    },

    AI(){
      this.$router.push("ai-and-breeding")
    },

 

     fence(){
      this.$router.push("fence")
    },

    fish(){
      this.$router.push("fish")
    },

    irrgiate(){
      this.$router.push("irrigation")
    },


    pump(){
      this.$router.push("pumps")
    },


   
    // async logout(){

    //   this.isLoading= true;
    //  await  this.$auth.logout()
    //   this.$router.push("auth/login")
    //   this.isLoading= false;
    // },

     async logout() {

      await this.$buefy.dialog.confirm({
        title: 'Log out',
        message: 'Are you sure you want to <b>log out</b>?',
        cancelText: 'Cancel',
        confirmText: 'Yes',
        type: 'is-warning',
        hasIcon: true,
        onConfirm: async () => {
          
          await this.$auth.logout()
           
          this.$buefy.toast.open({
            duration: 3000,
            message: 'Until next time!',
            position: 'is-top',
            type: 'is-info is-light',
          })
          this.$router.push({ path: '/auth/login' })
          
        },
      })
    },

  }
}
</script>

<style>

.sidebar-layout{
  background-color:rgb(249, 229, 250);
}

.sidebar{
  margin-right: 25px;
}

.dairy{
  color: rgba(40, 180, 5, 0.712);
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
}

.litmas{
  font-size: 20px;
  margin-left: 8px;
  color:rgb(17, 127, 155)
}
.navbar{
  width:100%;
  position:fixed;
  margin-left: 17rem;
  padding-top: 1rem;
 
}
.color{
  background-color:rgb(249, 254, 249)
}
.right{
  float: right;
  margin-top: 1px;
  margin-left: 520px;
  font-size: 17px;
}

@media only screen and (max-width: 850px) {
 .right{
  float: right;
  margin-top: 1px;
  margin-left: 600px;
  font-size: 17px;
}
}


@media only screen and (min-width: 1600px) {

  .menu-bg{
    color:aquamarine
  }

 .right{
  float: right;
  margin-top: 1px;
  margin-left: 1100px;
  font-size: 17px;

  
}

.height{
 
  height:100vh;
  position:fixed;
  overflow-x: hidden;
  overflow-y: auto;
}

}

.height{
  height:100vh;
  position:fixed;
  overflow-x: hidden;
  overflow-y: auto;
}


.blue{
  color: rgb(44, 113, 192);
}
</style>

