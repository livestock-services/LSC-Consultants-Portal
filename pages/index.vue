<template>
  <section  class="section">
    <div class="columns is-mobile">
     <div class="card total-cow-card  card-body">
      
       <div  class="card-body">
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

     <span><span class="text-cattle-count mb-2"> <countTo :startVal='startVal' :endVal='cows.length + bulls.length + calves.length + allTreatments.length + allCalvesTreatments.length + weaners.length + yearlings.length + heifers.length + morts.length' :duration='10000'></countTo></span><span class="text-cattle">Total Herd Size</span></span> <br>
      <!-- <span class="text-bull"> <countTo :startVal='startVal' :endVal='Bulls' :duration='3000'></countTo> Bulls</span><br>
      <span class="text-cow"> <countTo :startVal='startVal' :endVal='Cows' :duration='3000'></countTo> Cows</span><br>
      <span class="text-heifer"> <countTo :startVal='startVal' :endVal='Heifers' :duration='3000'></countTo> Heifers</span><br>
      <span class="text-calves"> <countTo :startVal='startVal' :endVal='Calves' :duration='3000'></countTo> Calves</span> -->
      </div>
     </div>

      <div class="card mortalities-card ml-5 card-body">
      
       <div class="card-body">
        <a
          class="navbar-item"
          href="/"
        >
          <b-icon
                icon="cow"
                size="is-medium"
                type="is-danger is-light">
            </b-icon>
        </a>

     <span><span class="text-mortality-count mb-2"> <countTo :startVal='startVal' :endVal='morts.length' :duration='9000'></countTo></span><span class="text-mortalities">Mortalities</span></span> <br>
      <!-- <span class="text-bull"> <countTo :startVal='startVal' :endVal='Bulls' :duration='3000'></countTo> Bulls</span><br>
      <span class="text-cow"> <countTo :startVal='startVal' :endVal='Cows' :duration='3000'></countTo> Cows</span><br>
      <span class="text-heifer"> <countTo :startVal='startVal' :endVal='Heifers' :duration='3000'></countTo> Heifers</span><br>
      <span class="text-calves"> <countTo :startVal='startVal' :endVal='Calves' :duration='3000'></countTo> Calves</span> -->
      </div>
     </div>

     <div class="card under-treatment-card ml-5 card-body">
      
       <div class="card-body">
        <a
          class="navbar-item"
          href="/"
        >
          <b-icon
                icon="cow"
                size="is-medium"
                type="is-warning">
            </b-icon>
        </a>

     <span><span class="text-under-treatment-count mb-2"> <countTo :startVal='startVal' :endVal='allTreatments.length + allCalvesTreatments.length' :duration='8000'></countTo></span><span class="text-under-treatment">Under Treatment</span></span> <br>
      <!-- <span class="text-bull"> <countTo :startVal='startVal' :endVal='Bulls' :duration='3000'></countTo> Bulls</span><br>
      <span class="text-cow"> <countTo :startVal='startVal' :endVal='Cows' :duration='3000'></countTo> Cows</span><br>
      <span class="text-heifer"> <countTo :startVal='startVal' :endVal='Heifers' :duration='3000'></countTo> Heifers</span><br>
      <span class="text-calves"> <countTo :startVal='startVal' :endVal='Calves' :duration='3000'></countTo> Calves</span> -->
      </div>
     </div>
    
    
   



      
    </div>
    

     <div class="columns my-4 is-mobile">
    
        <div class="card bulls-card  card-body">
      
       <div class="card-body">
        <a
          class="navbar-item"
          href="/"
        >
          <b-icon
                icon="cow"
                size="is-medium"
                type="is-light">
            </b-icon>
        </a>

     <span><span class="text-bulls-count mb-2"> <countTo :startVal='startVal' :endVal='bulls.length' :duration='7000'></countTo></span><span class="text-bulls"> Bulls</span></span> <br>
      <!-- <span class="text-bull"> <countTo :startVal='startVal' :endVal='Bulls' :duration='3000'></countTo> Bulls</span><br>
      <span class="text-cow"> <countTo :startVal='startVal' :endVal='Cows' :duration='3000'></countTo> Cows</span><br>
      <span class="text-heifer"> <countTo :startVal='startVal' :endVal='Heifers' :duration='3000'></countTo> Heifers</span><br>
      <span class="text-calves"> <countTo :startVal='startVal' :endVal='Calves' :duration='3000'></countTo> Calves</span> -->
      </div>
     </div>

      <div class="card cow-card ml-5 card-body">
      
       <div class="card-body px-5">
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

     <span><span class="text-cows-count mb-2"> <countTo :startVal='startVal' :endVal='cows.length' :duration='5000'></countTo></span><span class="text-cows">Cows</span></span> <br>
      <!-- <span class="text-bull"> <countTo :startVal='startVal' :endVal='Bulls' :duration='3000'></countTo> Bulls</span><br>
      <span class="text-cow"> <countTo :startVal='startVal' :endVal='Cows' :duration='3000'></countTo> Cows</span><br>
      <span class="text-heifer"> <countTo :startVal='startVal' :endVal='Heifers' :duration='3000'></countTo> Heifers</span><br>
      <span class="text-calves"> <countTo :startVal='startVal' :endVal='Calves' :duration='3000'></countTo> Calves</span> -->
      </div>
     </div>
    


      <div class="card bulling-heifers-card ml-5 card-body">
      
       <div class="card-body">
        <a
          class="navbar-item"
          href="/"
        >
           <b-icon
                icon="cow"
                size="is-medium"
                type="is-primary ">
            </b-icon>
        </a>

     <span><span class="text-heifers-count mb-2"> <countTo :startVal='startVal' :endVal='heifers.length' :duration='6000'></countTo></span><span class="text-bulling-heifers">Heifers</span></span> <br>
      <!-- <span class="text-bull"> <countTo :startVal='startVal' :endVal='Bulls' :duration='3000'></countTo> Bulls</span><br>
      <span class="text-cow"> <countTo :startVal='startVal' :endVal='Cows' :duration='3000'></countTo> Cows</span><br>
      <span class="text-heifer"> <countTo :startVal='startVal' :endVal='Heifers' :duration='3000'></countTo> Heifers</span><br>
      <span class="text-calves"> <countTo :startVal='startVal' :endVal='Calves' :duration='3000'></countTo> Calves</span> -->
      </div>
     </div>
    

     


      
    </div>



     <div class="columns my-4 is-mobile">
    
        <div class="card yearlings-card  card-body">
      
       <div class="card-body">
        <a
          class="navbar-item"
          href="/"
        >
          <b-icon
                icon="cow"
                size="is-medium"
                type="is-primary">
            </b-icon>
        </a>

     <span><span class="text-yearlings-count mb-2"> <countTo :startVal='startVal' :endVal='yearlings.length' :duration='5000'></countTo></span><span class="text-yearlings"> Yearlings</span></span> <br>
      <!-- <span class="text-bull"> <countTo :startVal='startVal' :endVal='Bulls' :duration='3000'></countTo> Bulls</span><br>
      <span class="text-cow"> <countTo :startVal='startVal' :endVal='Cows' :duration='3000'></countTo> Cows</span><br>
      <span class="text-heifer"> <countTo :startVal='startVal' :endVal='Heifers' :duration='3000'></countTo> Heifers</span><br>
      <span class="text-calves"> <countTo :startVal='startVal' :endVal='Calves' :duration='3000'></countTo> Calves</span> -->
      </div>
     </div>

      <div class="card weaners-card ml-5 card-body">
      
       <div class="card-body px-5">
        <a
          class="navbar-item"
          href="/"
        >
          <b-icon
                icon="cow"
                size="is-medium"
                type="is-light">
            </b-icon>
        </a>

     <span><span class="text-weaners-count mb-2"> <countTo :startVal='startVal' :endVal='weaners.length' :duration='5000'></countTo></span><span class="text-weaners">Weaners</span></span> <br>
      <!-- <span class="text-bull"> <countTo :startVal='startVal' :endVal='Bulls' :duration='3000'></countTo> Bulls</span><br>
      <span class="text-cow"> <countTo :startVal='startVal' :endVal='Cows' :duration='3000'></countTo> Cows</span><br>
      <span class="text-heifer"> <countTo :startVal='startVal' :endVal='Heifers' :duration='3000'></countTo> Heifers</span><br>
      <span class="text-calves"> <countTo :startVal='startVal' :endVal='Calves' :duration='3000'></countTo> Calves</span> -->
      </div>
     </div>
    


      <div class="card calf-card ml-5 card-body">
      
       <div class="card-body">
        <a
          class="navbar-item"
          href="/"
        >
           <b-icon
                icon="cow"
                size="is-medium"
                type="is-info ">
            </b-icon>
        </a>

     <span><span class="text-calf-count mb-2"> <countTo :startVal='startVal' :endVal='calves.length' :duration='6000'></countTo></span><span class="text-calf">Calves</span></span> <br>
      <!-- <span class="text-bull"> <countTo :startVal='startVal' :endVal='Bulls' :duration='3000'></countTo> Bulls</span><br>
      <span class="text-cow"> <countTo :startVal='startVal' :endVal='Cows' :duration='3000'></countTo> Cows</span><br>
      <span class="text-heifer"> <countTo :startVal='startVal' :endVal='Heifers' :duration='3000'></countTo> Heifers</span><br>
      <span class="text-calves"> <countTo :startVal='startVal' :endVal='Calves' :duration='3000'></countTo> Calves</span> -->
      </div>
     </div>
    

     


      
    </div>

    

    
     
   

  </section>
</template>

<script>
import Card from '~/components/Tools/Card.vue'
 import countTo from 'vue-count-to';
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'IndexPage',
  components: {
   countTo ,
    Card,
   
  },

  data(){
    return{
      isLoading:false,
      startVal: 0,
        endVal: 100,
        Bulls: 10,
        Cows:60,
        Heifers:10,
        Calves: 20
    }
  },

  computed: {
     ...mapGetters('users', {
        loading: 'loading',
         Users: 'allUsers',
    }),

    ...mapGetters('cattleData', {
        loading: 'loading',
        cattles: 'allCattle',
        cows:'allCows',
        bulls:'allBulls',
        allCalves: 'allCalves',
        dmrs: 'allDMRs',
        calves:'allNewCalves',
        weaners:'allWeaners',
        yearlings:'allYearlings',
        heifers:'allBullingHeifers',
        allTreatments:'allCattleUnderTreatment',
        allCalvesTreatments:'allCalvesUnderTreatment'
      }),

      ...mapGetters('mortalitiesData', {
        loading: 'loading',
        morts: 'allMortalities'
      }),

      isEmpty() {
   return this.calves.length === 0
     },
  },


// COMPONENT THAT GETS ALL THE FILTERED DATA. THIS IS WHERE WE GET ALL DASHBOARD DATA FROM
  async created() {
  let cattles = await this.getAllCattle();
  let calves = await this.getAllCalves();
  let dmrs = await this.getAllDMRs();
  let morts = await this.getAllMortalities();
  console.log(cattles)
  console.log(dmrs)
  console.log(calves)
  console.log(morts)
    //this.selectPfi(this.pfis[0])

//     function showNotifications(){
//    const notification = new Notification("Your Litmas dashboard.", {
//        body: "This section gives an overview of all your animals. More details are in the herd & records section under 'Tools' .",
//        icon: "http://localhost:3000/assets/litmas3.png",
       

//    }); 
// }

// if (Notification.permission === "granted") {
//     showNotifications();
// } else if(Notification.permission !== "denied") {
//     Notification.requestPermission().then(permission =>{
//         if (permission === "granted") {
//             showNotifications();
//         }
      
//     })
// }

  },


  methods:{
     ...mapActions('users', ['getAllUsers']),

      ...mapActions('mortalitiesData', ['getAllMortalities']),

      ...mapActions('cattleData', ['addNewCattle','getAllCattle', 'load', 'selectCattle', 'addNewCalf','getAllCalves', 'selectCalf',  'addNewDMR','getAllDMRs', 'selectDMR']),
    
     
  }
}
</script>

<style>

.user{
  color: rgb(66, 151, 231);
}

.total-cow-card{
  width: 300px;
  height:170px;
  
   background-color: rgb(244, 172, 72); 
   /* background: url('~/assets/cow5.jpg');
  background-repeat: no-repeat;
  background-size: cover;  */
}

/* .total-cow-card:hover{
  width: 300px;
  height:170px;
   
   background-color: rgb(188, 197, 227);
  /* background: url('~/assets/cow5.jpg');
  background-repeat: no-repeat;
  background-size: cover; 
} */

.mortalities-card{
  width: 300px;
  height:170px;
  background-color: rgb(245, 206, 188);
}

.heifer-card{
  width: 300px;
  height:170px;
  background-color: rgb(210, 188, 245);
}

.calf-card{
  width: 300px;
  height:170px;
  background-color: rgb(188, 224, 245);
}

.cow-card {
  width: 300px;
  height:170px;
  background-color: rgb(196, 240, 126);
}

.bulls-card {
  width: 300px;
  height:170px;
  background-color: rgb(52, 124, 234);
}

.under-treatment-card {
  width: 300px;
  height:170px;
  background-color: rgb(68, 66, 63);
}

.weaners-card{
  width: 300px;
  height:170px;
  background-color: rgb(104, 201, 164);
}

.yearlings-card {
  width: 300px;
  height:170px;
  background-color: rgb(226, 197, 250);
}

.bulling-heifers-card {
  width: 300px;
  height:170px;
  background-color: rgb(240, 156, 170);
}

@media only screen and (min-width: 1600px) {
  
  .cow-card{
  width: 500px;
  height:220px;
}

 .calf-card{
  width: 500px;
  height:220px;
}

.mortalities-card{
  width: 500px;
  height:170px;
}

.heifer-card{
  width: 500px;
  height:220px;
  
}

.bulls-card {
  width: 500px;
  height:220px;
 
}

.total-cow-card {
  width: 500px;
  height:220px;
}

.under-treatment-card {
  width: 500px;
  height:220px;
  
}

.weaners-card{
  width: 500px;
  height:220px;
 
}

.yearlings-card {
  width: 500px;
  height:220px;
 
}

.bulling-heifers-card {
  width: 500px;
  height:220px;
 
}


}

.ram{
  width: auto;
  height: auto;
  margin: 10px;
}

.cow{
  width: auto;
  height: auto;
  text-decoration: none;
  margin-top: 70px;
  margin-left: 70px;
  background: none;
}

.text-cattle-count{
  text-align: center;
  margin-left: 20px;
  font-size: 65px;
    z-index: 2;
  color: rgb(252, 242, 223);
}

.text-mortality-count{
  text-align: center;
  margin-left: 20px;
  font-size: 65px;
  color: rgb(141, 6, 6);
}

.text-heifers-count{
  text-align: center;
  margin-left: 20px;
  font-size: 65px;
  color: rgb(81, 22, 42);
}

.text-bulls-count{
   text-align: center;
  margin-left: 20px;
  font-size: 65px;
  color: rgb(236, 241, 249);
}

.text-cows-count{
   text-align: center;
  margin-left: 20px;
  font-size: 65px;
  color: rgb(92, 94, 96);
}



.text-calf-count{
  text-align: center;
  margin-left: 20px;
  font-size: 65px;
  color: rgb(15, 82, 94);
}




.text-weaners-count{
  text-align: center;
  margin-left: 20px;
  font-size: 65px;
  color: rgb(29, 63, 44);
}

.text-yearlings-count{
  text-align: center;
  margin-left: 20px;
  font-size: 65px;
  color: rgb(61, 23, 86);
}

.text-under-treatment-count{
  text-align: center;
  margin-right: 3px;
  font-size: 65px;
  color: rgb(233, 182, 16);
}

.text-cattle{
  font-size: 18px;
  margin-top: 4px;
}

.text-under-treatment{
    font-size: 18px;
  margin-top: 2px;
  color: rgb(238, 210, 148);
  
}

.text-mortalities{
    font-size: 18px;
  margin-top: 4px;

}

.text-calves{
    font-size: 18px;
  margin-top: 4px;
  color: black;

}


.text-weaners{
    font-size: 18px;
  margin-top: 4px;
   color: rgb(245, 249, 221);
  
}


.text-bulls{
  text-align: center;
  margin-left: 20px;
  font-size: 18px;
  color: rgb(231, 236, 243);
}

.text-cows{
  text-align: center;
  margin-left: 20px;
  font-size: 18px;
  color: rgb(39, 41, 33);
}
.text-bulling-heifers{
  text-align: center;
  margin-left: 20px;
  font-size: 18px;
  color: rgb(108, 28, 50);
}

.text-calves{
  text-align: center;
  margin-left: 20px;
  font-size: 18px;
  color: rgb(82, 236, 141);
}
</style>
