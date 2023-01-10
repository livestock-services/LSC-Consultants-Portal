<template>
  <div class="modal-card ">
    <header class="modal-card-head">
      <h3 class="modal-card-title">Calf Snapshot</h3>
     
      <button type="button" class="delete" @click="close"></button>
    </header>
    <section class="modal-card-body has-background-white">
      <!-- Modal Content -->
      <div>
       <b-form v-model="calfForm" class="form">

         <h4> <span class="is-blue"> Cattle Breed</span></h4>

         <div class="columns">
            
           <div  class="column is-three-quarters">
            
           <b-input type="text" v-model="calfBreed" placeholder="Breed"></b-input>
           </div>
         </div>

         <h4> <span class="is-blue"> Calf Date Of Birth</span></h4>

         <div  class="columns">
            
           <div  class="column is-three-quarters">
                
            <b-field label="Select a date">
            <b-datepicker
            :disabled="!calfBreed" 
                id="DOB"
                placeholder="Click to select..."
                v-model="calfDateOfBirth"
                >
            </b-datepicker>
          </b-field>

           
           </div>
         </div>

         <h4> <b-tooltip label="Father to the calf" type="is-dark"><span class="is-blue"> Sire/Semen Code</span></b-tooltip></h4> 

       <div  class="columns">
            
           <div  class="column is-three-quarters">
            
           <b-input :disabled="!calfDateOfBirth" type="text" v-model="sire" placeholder="Sire"></b-input>
           </div>
         </div>

          <h4><b-tooltip label="Mother to the calf" type="is-dark" position="is-right"> <span class="is-blue"> Dam</span></b-tooltip>  </h4>

       <div  class="columns">
            
           <div  class="column is-three-quarters">
            
           <b-input :disabled="!sire" type="text" v-model="dam" placeholder="Dam"></b-input>
           </div>
         </div>



         <h4> <span class="is-blue"> Calf Sex </span></h4>

         <div  class="columns">
            
           <div  class="column is-three-quarters">
            
           <b-field  class="column is-full">
             
           <b-select :disabled="!dam" v-model="calfSex" placeholder="Select a sex">
             <option value="Male">Male</option>
             <option value="Female">Female</option>
             
           </b-select>
           </b-field>

           </div>
         </div>

         <h4> <span class="is-blue"> Calf Weight</span></h4>

         <div  class="columns">
            
           <div  class="column is-three-quarters">
            
           <b-input :disabled="!calfSex" type="text" v-model="calfWeight" placeholder="Weight"></b-input>
           </div>
         </div>

         <h4> <span class="is-blue">  Ear Tag ID</span></h4>
        <div  class="columns">
          
           <div  class="column is-three-quarters">
              
            <b-input :disabled="!calfWeight" type="text" v-model="earTagID" placeholder="Ear Tag ID"></b-input>
           </div>
         </div>


        <h4> <span class="is-blue">  Ear Tag Color</span></h4>
        <div  class="columns">
          
           <div  class="column is-three-quarters">
              
            <b-input  :disabled="!earTagID" type="text" v-model="earTagColor" placeholder="Ear Tag Color"></b-input>
           </div>
         </div>

          <h4> <span class="is-blue"> Color</span></h4>
        <div  class="columns">
          
           <div  class="column is-three-quarters">
              
            <b-input :disabled="!earTagColor" type="text" v-model="calfColor" placeholder="Color"></b-input>
           </div>
         </div>


         <h4><b-tooltip label="This can be the general status of the calf eg. healthy, alive, still birth etc" type="is-dark" position="is-right"> <span class="is-blue">  Status</span> </b-tooltip></h4>
        <div  class="columns">
          
           <div  class="column is-three-quarters">
              
            <b-input :disabled="!calfColor" type="text" v-model="calfStatus" placeholder="Status"></b-input>
           </div>
         </div>

         <h4><b-tooltip label="This can be remarks about the birth/calf eg. difficulty in birth, weak etc" type="is-dark" position="is-right"> <span class="is-blue"> Remarks</span> </b-tooltip></h4>
        <div class="columns">
          
           <div  class="column is-three-quarters">
              
            <b-input :disabled="!calfStatus"  type="text" v-model="calfRemarks" placeholder="Remarks"></b-input>
           </div>
         </div>



       
         <div :disabled="!calfRemarks" class=" card my-4">
             
           <div class=" summary-content">
             <h2 class="tag is-info is-light mb-4 summary">Summary</h2>
              <p class="yellow">Before adding your data, <br> confirm correct entries using the summary below </p>

            <p>Breed:  {{calfBreed}}</p> 
           <p>Date of Birth:  {{calfDateOfBirth}}</p>
           <p>Sire:  {{sire}}</p>
           <p>Dam:  {{dam}}</p>
           <p>Sex:  {{calfSex}}</p>
           <p>Weight:  {{calfWeight}} kg</p>
            <p>Ear Tag ID:  {{earTagID}}</p>
           <p>Ear Tag Color:  {{earTagColor}}</p>
            <p>Calf Color:  {{calfColor}}</p>
           <p>Status:  {{calfStatus}}</p>
           <p>Remarks:  {{calfRemarks}}</p>
           </div>
         </div>



       <b-button :disabled="!calfRemarks" @click="onSubmit" type="is-info">Add </b-button>

       </b-form>

      </div>
    </section>
    <footer class="modal-card-foot">
      <b-button label="Close" @click="close" />
      <!-- <b-button
        label="Submit"
        type="is-primary"
        icon-left="account"
        @click="onSubmit"
      /> -->
    </footer>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'CalfModal',

   data() {
    return {
      date: new Date(),
       dates: [],

      isFullPage: true,

      calfForm:{
        
      calfBreed:null,
      calfDateOfBirth:null,
      sire:null,
      dam:null,
      calfSex:null,
      calfWeight:null,
      earTagColor:null,
      earTagID:null,
      calfColor:null,
      calfStatus:null,
      calfRemarks:null
        
    },
     
    }
  },

   computed: {

      ...mapFields('cattleData', [
      'calfForm',
      'calfForm.calfBreed',
      'calfForm.calfDateOfBirth',
      'calfForm.sire',
      'calfForm.dam',
      'calfForm.calfSex',
      'calfForm.calfWeight',
      'calfForm.earTagColor',
      'calfForm.earTagID',
      'calfForm.calfStatus',
      'calfForm.calfRemarks',
      'calfForm.calfColor'
          
      
      
  ]),

      ...mapGetters('cattleData', {
       calf: 'selectedCalf',
      calfLoading: 'loading',
    }),

   },

   

  // },

  mounted() {},

    created(){ 
      
    },

  methods: {
      ...mapActions('cattleData', ['addNewCalf','getAllCalves', 'load']),

   loading() {
      return this.calfLoading 
    },


    async onSubmit() {
        await this.$buefy.dialog.confirm({
        title: 'Add New Calf',
        message: 'Proceed to add new entry?',
        cancelText: 'Cancel',
        confirmText: 'Yes, entries are correct',
        type: 'is-warning is-light',
        hasIcon: true,
        onConfirm: async () => {
          
          await this.addNewCalf();

          this.$buefy.toast.open({
            duration: 3000,
            message: 'Calf Successfully Added!',
            position: 'is-top',
            type: 'is-info is-light',
          })
           this.clearForm();
          showNotifications();
          this.$parent.close()
        },
      })
   
     
   

      this.ageCalculator();

          function showNotifications(){
   const notification = new Notification("Calf data added.", {
       body: "Be sure to check your calf data periodically.",
       icon: '@/assets/pug3.jpg'
   }); 

        }

   
      
    },

    close() {
      this.$buefy.toast.open({
        message: 'Calf Snapshot closed.',
        duration: 2000,
        position: 'is-bottom',
        type: 'is-warning ',
      })
      this.$parent.close()
    },

    clearForm(){
      this.calfForm = {
      calfBreed:null,
      calfDateOfBirth:null,
      sire:null,
      dam:null,
      calfSex:null,
      calfWeight:null,
      earTagColor:null,
      calfStatus:null
      }
    },

     // ---------------------------DAY MONTH YEAR  --------------------------------------------------//
ageCalculator() {
  //collect input from HTML form and convert into date format
    var userinput = document.getElementById("DOB").value;
    var dob = new Date(userinput);
    
    //check user provide input or not
    if(userinput==null || userinput==''){
      console.log ("**Choose a date please!");  
     // return false; 
    } 

//extract the year, month, and date from user date input
var dobYear = dob.getYear();
console.log(dobYear)
var dobMonth = dob.getMonth();
console.log(dobMonth)
var dobDate = dob.getDate();
console.log(dobDate)


//get the current date from the system
var now = new Date();
//extract the year, month, and date from current date
var currentYear = now.getYear();
console.log(currentYear)
var currentMonth = now.getMonth();
console.log(currentMonth)
var currentDate = now.getDate();
console.log(currentDate)

 //declare a variable to collect the age in year, month, and days
 var age = {};
 var ageString = "";

 //get years
 yearAge = currentYear - dobYear;
	
 //get months
 if (currentMonth >= dobMonth)
   //get months when current month is greater
   var monthAge = currentMonth - dobMonth;
 else {
   yearAge--;
   var monthAge = 12 + currentMonth - dobMonth;
 }


 //get days
 if (currentDate >= dobDate)
 //get days when the current date is greater
 var dateAge = currentDate - dobDate;
else {
 monthAge--;
 var dateAge = 31 + currentDate - dobDate;

 if (monthAge < 0) {
   monthAge = 11;
   yearAge--;
 }
}
//group the age in a single variable
age = {
years: yearAge,
months: monthAge,
days: dateAge
};

if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
ageString = age.years + " years, " + age.months + " months, and " + age.days + " days old.";
else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
ageString = "Only " + age.days + " days old!";
//when current month and date is same as birth date and month
else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
ageString = age.years +  " years old. Happy Birthday!!";
else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
ageString = age.years + " years and " + age.months + " months old.";
else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
ageString = age.months + " months and " + age.days + " days old.";
else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
ageString = age.years + " years, and" + age.days + " days old.";
else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
ageString = age.months + " months old.";
//when current date is same as dob(date of birth)
else ageString = "Welcome to Earth! <br> It's first day on Earth!"; 

//display the calculated age
console.log(ageString); 

  //display the calculated age
   // return document.getElementById("result").innerHTML = ageString; 
      
}
  },
}
</script>

<style scoped>
.modal-width-auto {
  width: auto;
}

.yellow{
  color: rgb(193, 108, 28);
}
.summary{
  font-size: 1.6rem;
}
.summary-content p{
  margin-top: 12px;
  margin-bottom: 12px;
}

.summary-content {
  padding-bottom: 10px;
}

.is-blue{
  color: rgb(0, 118, 228);
font-family:'Times New Roman', Times, serif;
  font-size: 1.2rem;
  
}

p{
  font-size: 1.1rem;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
