<template>
  <section v-if=" this.$auth.user.email=== 'kondwani1mwale@gmail.com'" class="section">

    <div class="columns is-mobile">

     <div class="card total-client-card  card-body">
      <span class="text-in-calf">Total Annual Costs</span>
       <div  class="card-body">
        <a
          class="navbar-item"
          href="/"
        >
           <b-icon
                icon="account"
                size="is-medium"
                type="is-dark"
                >
            </b-icon>


      <!-- v-if="this.$auth.user.email === 'detroncattle@gmail.com'" -->
        

        </a>

      <span><span class="total-cost-count mb-2"> <countTo :startVal='startVal' :endVal='MongoDB + Netlify + DigitalOcean' :duration='2000'></countTo>.00</span> <br> <span class="text-client"></span></span>
      <!-- <span class="text-bull"> <countTo :startVal='startVal' :endVal='Bulls' :duration='3000'></countTo> Bulls</span><br>
      <span class="text-cow"> <countTo :startVal='startVal' :endVal='Cows' :duration='3000'></countTo> Cows</span><br>
      <span class="text-heifer"> <countTo :startVal='startVal' :endVal='Heifers' :duration='3000'></countTo> Heifers</span><br>
      <span class="text-calves"> <countTo :startVal='startVal' :endVal='Calves' :duration='3000'></countTo> Calves</span> -->
      </div>
     </div>


     <div class="card total-revenue-card ml-5 card-body">
      <span class="text-in-calf">Total Annual Revenue</span>
       <div class="card-body">
        <a
          class="navbar-item"
          href="/"
        >
         
           
                 <b-icon
                icon="cash"
                size="is-medium"
                >
                 </b-icon>


            
        </a>

        
      <span>ZMW <span class="total-revenue-count mb-2"> <countTo :startVal='startVal' :endVal='(ARR * (paidUsers.length - 1 ))' :duration='3000'></countTo>.00</span></span> <br>
   
      <!-- <span class="text-bull"> <countTo :startVal='startVal' :endVal='Bulls' :duration='3000'></countTo> Bulls</span><br>
      <span class="text-cow"> <countTo :startVal='startVal' :endVal='Cows' :duration='3000'></countTo> Cows</span><br>
      <span class="text-heifer"> <countTo :startVal='startVal' :endVal='Heifers' :duration='3000'></countTo> Heifers</span><br>
      <span class="text-calves"> <countTo :startVal='startVal' :endVal='Calves' :duration='3000'></countTo> Calves</span> -->
      </div>
     </div>
    
    
   



      
    </div>
    

<!------------------------------------------- PAID AND PENDING CUSTOMERS------------------------------------------------- -->
       <div class="columns is-mobile my-2">
     <div class="card total-paid-users-card  card-body">
      <span class="text-in-calf">Profit</span>
       <div  class="card-body">
        <a
          class="navbar-item"
          href="/"
        >
           <b-icon
                icon="account"
                size="is-medium"
                type="is-dark"
                >
            </b-icon>


      <!-- v-if="this.$auth.user.email === 'detroncattle@gmail.com'" -->
        

        </a>

      <span><span class="total-cost-count mb-2"> <countTo :startVal='startVal' :endVal='((ARR * (paidUsers.length - 1)) -(MongoDB + Netlify + DigitalOcean))' :duration='2000'></countTo>.00</span> <br> <span class="text-client"></span></span>
      <!-- <span class="text-bull"> <countTo :startVal='startVal' :endVal='Bulls' :duration='3000'></countTo> Bulls</span><br>
      <span class="text-cow"> <countTo :startVal='startVal' :endVal='Cows' :duration='3000'></countTo> Cows</span><br>
      <span class="text-heifer"> <countTo :startVal='startVal' :endVal='Heifers' :duration='3000'></countTo> Heifers</span><br>
      <span class="text-calves"> <countTo :startVal='startVal' :endVal='Calves' :duration='3000'></countTo> Calves</span> -->
      </div>
     </div>
     


     <div class="card total-pending-users-card ml-5 card-body">
      <span class="text-in-calf">Profit Margin</span>
       <div class="card-body">
        <a
          class="navbar-item"
          href="/"
        >
         
           
                 <b-icon
                icon="cash"
                size="is-medium"
                >
                 </b-icon>


            
        </a>

        
      <span><span class="total-revenue-count mb-2"> <countTo :startVal='startVal' :endVal='((((ARR * (paidUsers.length - 1)) - (MongoDB + Netlify + DigitalOcean))/(ARR *(paidUsers.length - 1)))*100).toFixed(2)' :duration='3000'></countTo>%</span></span> <br>
   
      <!-- <span class="text-bull"> <countTo :startVal='startVal' :endVal='Bulls' :duration='3000'></countTo> Bulls</span><br>
      <span class="text-cow"> <countTo :startVal='startVal' :endVal='Cows' :duration='3000'></countTo> Cows</span><br>
      <span class="text-heifer"> <countTo :startVal='startVal' :endVal='Heifers' :duration='3000'></countTo> Heifers</span><br>
      <span class="text-calves"> <countTo :startVal='startVal' :endVal='Calves' :duration='3000'></countTo> Calves</span> -->
      </div>
     </div>
    
    
   



      
    </div>
    
<!------------------------------------------------------------------  -------------------------------------------------->
     <div class="columns my-4 is-mobile">
    
        <div class="card client-card   card-body">
       <span class="text-arr">Digital Ocean</span>
       <div class="card-body px-5">

         
        <a
          class="navbar-item"
          href="/"
        >
          <b-icon
                icon="fish"
                size="is-medium"
                type="is-warning"
                >
            </b-icon>

             
          
        </a>

    <span>ZMW<span class="client-count mb-2"> <countTo :startVal='startVal' :endVal='DigitalOcean' :duration='2000'></countTo>.00</span> <span class="text-client"></span></span>
      <!-- <span class="text-bull"> <countTo :startVal='startVal' :endVal='Bulls' :duration='3000'></countTo> Bulls</span><br>
      <span class="text-cow"> <countTo :startVal='startVal' :endVal='Cows' :duration='3000'></countTo> Cows</span><br>
      <span class="text-heifer"> <countTo :startVal='startVal' :endVal='Heifers' :duration='3000'></countTo> Heifers</span><br>
      <span class="text-calves"> <countTo :startVal='startVal' :endVal='Calves' :duration='3000'></countTo> Calves</span> -->
      </div>
     </div>

      <div class="card mrr-card ml-5 card-body">
      
       <div class="card-body px-5">
          <b-tooltip label="
          Total Annual Costs: Total annual cost means the
           sum of the normal cost plus the supplemental annual cost. ." 
             
             type="is-info is-light"
             position="is-top">

         <span class="text-mrr">Mongo DB</span> 
        
          </b-tooltip>
        <a
          class="navbar-item"
          href="/"
        >
           <b-icon
                icon="leaf"
                size="is-medium"
                type="is-success">
            </b-icon>

          
        </a>

     <span><span class="is-info is-light">ZMW</span> <span class="mrr-count mb-2"> <countTo :startVal='startVal' :endVal='MongoDB' :duration='3000'></countTo>.00</span></span>
      <!-- <span class="text-bull"> <countTo :startVal='startVal' :endVal='Bulls' :duration='3000'></countTo> Bulls</span><br>
      <span class="text-cow"> <countTo :startVal='startVal' :endVal='Cows' :duration='3000'></countTo> Cows</span><br>
      <span class="text-heifer"> <countTo :startVal='startVal' :endVal='Heifers' :duration='3000'></countTo> Heifers</span><br>
      <span class="text-calves"> <countTo :startVal='startVal' :endVal='Calves' :duration='3000'></countTo> Calves</span> -->
      </div>
     </div>
    


      <div class="card arr-card ml-5 card-body">
      
       <div class="card-body">
          <b-tooltip label="
           Annual Recurring Revenue: shows the money that 
           comes in every year for the life of a subscription (or contract) per user/enterprise." 
             
             type="is-success is-light"
             position="is-left">
         <span class="text-arr">Netlify</span>
          </b-tooltip>
        <a
          class="navbar-item"
          href="/"
        >
           <b-icon
                icon="cube"
                size="is-medium"
                type="is-info">
            </b-icon>
        </a>

     <span>ZMW <span class="arr-count mb-2"> <countTo :startVal='startVal' :endVal='Netlify' :duration='2000'></countTo>.00</span> <br></span> <br>
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
import Card from '~/components/Card'
 import countTo from 'vue-count-to';
import {mapActions, mapGetters} from 'vuex'
import CowStatTable from '~/components/tables/cow-stat-table.vue';
export default {
  name: 'IndexPage',
  components: {
   countTo ,
    Card,
    CowStatTable
  },

  data(){
    return{
      isLoading:false,
      startVal: 0,
        totalRevenue: 100,
        MRR: 1500.00,
        ARR: (500.00 * 12),
        MongoDB:(950.00 * 12),
        Netlify:(0.00*12),
        DigitalOcean:(250.00*12)
        
        
    }
  },

  computed: {
     ...mapGetters('users', {
        loading: 'loading',
         users: 'allUsers',
         paidUsers: 'paidUsers',
         pendingUsers: 'pendingUsers'
    }),

    ...mapGetters('cattleData', {
        loading: 'loading',
        cattles: 'allCattle',
        calves: 'allCalves'
      }),
  },


// COMPONENT THAT GETS ALL THE FILTERED DATA. THIS IS WHERE WE GET ALL DASHBOARD DATA FROM
  async created() {
  const cattles = await this.getAllCattle();
  const calves = await this.getAllCalves();
  const users = await this.getAllUsers();
  // const paidUsers = await this.getAllUsers();
  // const pendingUsers = await this.getAllUsers();

  console.log(cattles)
  console.log(calves)
  console.log(users)
  // console.log(paidUsers)
  // console.log(pendingUsers)

    //this.selectPfi(this.pfis[0])
  },


  methods:{
     ...mapActions('users', ['getAllUsers']),

      ...mapActions('cattleData', ['addNewCattle','getAllCattle', 'load', 'selectCattle', 'addNewCalf','getAllCalves', 'selectCalf']),
    
     
  }
}
</script>

<style>

.user{
  color: rgb(66, 151, 231);
}

.total-client-card{
  width: 425px;
  height:160px;
  background-color: rgb(253, 243, 229);
}

.total-paid-users-card{
  width: 425px;
  height:160px;
  background-color: rgb(197, 236, 244);
}

.total-pending-users-card{
  width: 500px;
  height:160px;
  background-color: rgb(249, 211, 209);
}

.mortalities-card{
  width: 300px;
  height:250px;
  background-color: rgb(245, 206, 188);
}

.client-card{
  width: 300px;
  height:200px;
  background-color: rgb(119, 175, 202);
}

.arr-card{
  width: 300px;
  height:200px;
  background-color: rgb(65, 173, 163);
}

.total-revenue-card {
  width: 500px;
  height:160px;
  background-color: rgb(222, 252, 188);
}

.mrr-card {
  width: 300px;
  height:200px;
  background-color: rgb(230, 247, 210);
}

@media only screen and (min-width: 1600px) {
  
  .total-client-card{
  width: 600px;
  height:300px;
}

 .arr-card{
  width: 500px;
  height:300px;
}

.mortalities-card{
  width: 500px;
  height:300px;
}

.client-card{
  width: 620px;
  height:300px;
  
}

.total-revenue-card {
  width: 620px;
  height:300px;
}

.mrr-card {
  width: 500px;
  height:300px;
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

.total-revenue-count{
  text-align: center;
  margin-left: 10px;
  font-size: 30px;
  color: rgb(148, 197, 12);
}

.text-mortality-count{
  text-align: center;
  margin-left: 20px;
  font-size: 35px;
  color: rgb(141, 6, 6);
}

.client-count{
  text-align: center;
  margin-left: 10px;
  font-size: 25px;
  color: rgb(227, 245, 245);
}

.total-cost-count{
  text-align: center;
  margin-left: 10px;
  font-size: 25px;
  color: rgb(68, 121, 121);
}

.arr-count{
  text-align: center;
  margin-left: 10px;
  font-size: 25px;
  color: rgb(232, 239, 240);
}




.text-arr-count{
  text-align: center;
  margin-left: 20px;
  font-size: 30px;
  color: rgb(77, 165, 109);
}

.mrr-count{
  text-align: center;
  margin-right: 10px;
  font-size: 25px;
  color: rgb(84, 160, 109);
}

.text-cattle{
  font-size: 18px;
  margin-top: 4px;
}

.text-mrr{
    font-size: 18px;
  margin-top: 4px;

  
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

.text-arr{
    font-size: 18px;
  margin-top: 4px;
    color: antiquewhite;
}

.text-bull{
  text-align: center;
  margin-left: 20px;
  font-size: 15px;
  color: rgb(22, 79, 145);
}

.text-cow{
  text-align: center;
  margin-left: 20px;
  font-size: 15px;
  color: rgb(158, 51, 101);
}
.text-client{
  text-align: center;
  margin-left: 20px;
  font-size: 20px;
  color: rgb(193, 185, 200);
}

.text-calves{
  text-align: center;
  margin-left: 20px;
  font-size: 15px;
  color: rgb(82, 236, 141);
}
</style>
