<template>
    <div class="column">
      <div class="card">
        <header class="card-header mx-4">
            
             <div>
                <div class="buttons">
                    <b-tooltip label="Add details of new tasks here" type="is-dark">
                    <b-button class="mx-2" icon-left="filter" type="is-success" @click="addNewTask">Filter</b-button>
                    </b-tooltip>
            
                    <b-tooltip label="Refresh" type="is-dark">
                    <b-button class="mx-2" icon-left="refresh" type="is-info" @click="filter">Refresh</b-button>
                    </b-tooltip>
                </div>
            </div> 

        </header>
        <div class="card-content">
            <div class="columns is-mobile">
     <div class="card cow-card  card-body">
      
       <div  class="card-body my-4 mx-4">
        <a
          class="navbar-item"
          href="/"
        >
          <b-icon
                icon="cow"
                size="is-medium"
                type="is-dark">
            </b-icon>

      <!-- v-if="this.$auth.user.email === 'detroncattle@gmail.com'" -->
        

        </a>

     <span><span class=" mb-2"></span>
     <span class="text-cattle">Cattle</span></span> <br>
            <div class="mt-4">
                <h3>Total:<countTo :startVal='startVal' :endVal='cattle.length' :duration='20000'></countTo></h3>
            </div>
      </div>
     </div>

      <div class="card cow-card ml-5 card-body">
      
       <div class="card-body  my-4 mx-4">
        <a
          class="navbar-item"
          href="/"
        >
          <b-icon
                icon="cow"
                size="is-medium"
                type="is-dark">
            </b-icon>
        </a>

     <span><span class="mb-2"></span>
     <span class="">Goats</span></span> <br>
            <div class="mt-4">
                <h3>Total:<countTo :startVal='startVal' :endVal='cattle.length' :duration='20000'></countTo></h3>
            </div>
      </div>
     </div>

     <div class="card cow-card ml-5 card-body">
      
       <div class="card-body my-4 mx-4">
        <a
          class="navbar-item"
          href="/"
        >
          <b-icon
                icon="sheep"
                size="is-medium"
                type="is-dark">
            </b-icon>
        </a>

     <span><span class=" mb-2"></span>
     <span class="t">Sheep</span></span> <br>
            <div class="mt-4">
                <h3>Total:<countTo :startVal='startVal' :endVal='cattle.length' :duration='20000'></countTo></h3>
            </div>
      </div>
     </div>
    
    
   



      
             </div>

             <div class="columns my-4 is-mobile">
     <div class="card cow-card  card-body">
      
       <div  class="card-body my-4 mx-4">
        <a
          class="navbar-item"
          href="/"
        >
          <b-icon
                icon="pig"
                size="is-medium"
                type="is-dark">
            </b-icon>

      <!-- v-if="this.$auth.user.email === 'detroncattle@gmail.com'" -->
        

        </a>

     <span><span class="mb-2"></span>
     <span class="">Pigs</span></span> <br>
            <div class="mt-4">
                <h3>Total:<countTo :startVal='startVal' :endVal='cattle.length' :duration='20000'></countTo></h3>
            </div>
      </div>
     </div>

      <div class="card cow-card ml-5 card-body">
      
       <div class="card-body my-4 mx-4">
        <a
          class="navbar-item"
          href="/"
        >
          <b-icon
                icon="egg"
                size="is-medium"
                type="is-dark">
            </b-icon>
        </a>

     <span><span class=" mb-2"></span>
     <span class="">Poultry</span></span> <br>
            <div class="mt-4">
                <h3>Total:<countTo :startVal='startVal' :endVal='cattle.length' :duration='20000'></countTo></h3>
            </div>
      </div>
     </div>

     <div class="card cow-card ml-5 card-body">
      
       <div class="card-body my-4 mx-4">
        <a
          class="navbar-item"
          href="/"
        >
          <b-icon
                icon="cat"
                size="is-medium"
                type="is-dark">
            </b-icon>
        </a>

     <span><span class=" mb-2"></span>
     <span class="">Dogs & Cats</span></span> <br>
            <div class="mt-4">
                <h3>Total:<countTo :startVal='startVal' :endVal='cattle.length' :duration='20000'></countTo></h3>
            </div>
      </div>
     </div>
    
    
   



      
            </div>


            <div class="columns my-4 is-mobile">
            <div class="card cow-card  card-body">
            
            <div  class="card-body my-4 mx-4">
                <a
                class="navbar-item"
                href="/"
                >
                <b-icon
                        icon="rabbit"
                        size="is-medium"
                        type="is-dark">
                    </b-icon>

            <!-- v-if="this.$auth.user.email === 'detroncattle@gmail.com'" -->
                

                </a>

            <span><span class=" mb-2"></span>
            <span class="text-cattle">Rabbits</span></span> <br>
                    <div class="mt-4">
                        <h3>Total:<countTo :startVal='startVal' :endVal='cattle.length' :duration='20000'></countTo></h3>
                    </div>
            </div>
            </div>

            <div class="card cow-card ml-5 card-body">
            
            <div class="card-body my-4 mx-4">
                <a
                class="navbar-item"
                href="/"
                >
                <b-icon
                        icon="elephant"
                        size="is-medium"
                        type="is-dark">
                    </b-icon>
                </a>

            <span><span class=" mb-2"></span>
            <span class="text-mortalities">Wildlife/Game</span></span> <br>
                    <div class="mt-4">
                        <h3>Total:<countTo :startVal='startVal' :endVal='cattle.length' :duration='20000'></countTo></h3>
                    </div>
            </div>
            </div>

            <div class="card cow-card ml-5 card-body">
            
            <div class="card-body my-4 mx-4">
                <a
                class="navbar-item"
                href="/"
                >
                <b-icon
                        icon="horse"
                        size="is-medium"
                        type="is-dark">
                    </b-icon>
                </a>

            <span><span class=" mb-2"></span>
            <span class="">Horses</span></span> <br>
                    <div class="mt-4">
                        <h3>Total:<countTo :startVal='startVal' :endVal='cattle.length' :duration='20000'></countTo></h3>
                    </div>
            </div>
            </div>
            
            
        



            
            </div>

        </div>
        <footer class="card-footer">
          <div class="card-footer-item">
            <span>
              <slot />
            </span>
          </div>
        </footer>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex'
   import countTo from 'vue-count-to';
   import FilterModal from '~/components/modals/Vet Modal/filter-modal.vue'
  export default {
    name: 'Animal Card',
    components: {
    countTo 
   
  },
    data(){
        return{
            startVal: 0,
            cattle:['1','1','1','1','1','1','1','1',
                    '1','1','1','1','1','1','1','1','1','1',
                    '1','1','1','1','1','1','1','1','1','1',
                    '1',
                    '1','1','1','1','1','1','1','1','1','1',
                    '1','1','1','1','1','1','1','1','1','1',
                    '1','1','1']
        }
    },
    props: {
      title: 'Records',
      icon: {
        type: String,
        required: true
      }
    },

    async created() {
        let cattle = this.cattle;
        console.log(cattle)
    },

    methods:{
      ...mapActions('vetData', ['filter']),

      async filter(){
        await this.filter();
      },

      addNewTask() {
        
        setTimeout(() => {
          this.$buefy.modal.open({
            parent: this,
            component: FilterModal,
            hasModalCard: true,
            trapFocus: true,
            canCancel: ['x'],
            destroyOnHide: true,
            customClass: '',
            onCancel: () => {
              this.$buefy.toast.open({
                message: `Task Snapshot closed!`,
                duration: 5000,
                position: 'is-top',
                type: 'is-info',
              })
            },
          })
        }, 300)
      },
    }
  }
  </script>
  <style scoped>
 .cow-card {
  width: 220px;
  height:150px;
  background-color: rgb(220, 249, 223);
}

@media only screen and (min-width: 1600px) {
    .cow-card {
  width: 300px;
  height:170px;
  background-color: rgb(220, 249, 223);
}
}
  </style>