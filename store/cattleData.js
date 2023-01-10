import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { ADD_CATTLE,
    SET_ALL_CATTLE, 
    GET_ALL_CATTLE, 

    SET_ALL_CATTLE_UNDER_TREATMENT,
    GET_ALL_CATTLE_UNDER_TREATMENT,
    SET_SELECTED_CATTLE_UNDER_TREATMENT,

    SET_LOADING,
    SET_SELECTED_CATTLE,
    PUT_IN_TREATMENT,
    PUT_CALF_IN_TREATMENT,
    SET_ALL_BULLS, 
    GET_ALL_BULLS, 
    SET_SELECTED_BULL,

    SET_ALL_COWS, 
    GET_ALL_COWS, 
    SET_SELECTED_COW,


    ADD_CALF,
    SET_ALL_CALVES, 
    GET_ALL_CALVES, 
    SET_SELECTED_CALF,

    SET_ALL_CALVES_UNDER_TREATMENT,
    GET_ALL_CALVES_UNDER_TREATMENT,
    SET_SELECTED_CALF_UNDER_TREATMENT,

    SET_ALL_NEW_CALVES, 
    GET_ALL_NEW_CALVES, 
    SET_SELECTED_NEW_CALF,


    SET_ALL_WEANERS, 
    GET_ALL_WEANERS, 
    SET_SELECTED_WEANER,


    SET_ALL_YEARLINGS, 
    GET_ALL_YEARLINGS, 
    SET_SELECTED_YEARLING,


    SET_ALL_BULLING_HEIFERS, 
    GET_ALL_BULLING_HEIFERS, 
    SET_SELECTED_BULLING_HEIFER,

    

    ADD_DMR,
    SET_ALL_DMRS, 
    GET_ALL_DMRS, 
    SET_SELECTED_DMR,
    GET_TOTAL_DMRS
   } from '@/helpers/mutation-types'

export const state = () => ({

    loading: false,
    allCattle:[],
    allBulls:[],
    allCows:[],
    allCalves:[],
    allNewCalves:[],
    allCattleUnderTreatment:[],
    allCalvesUnderTreatment:[],
    allWeaners:[],
    allYearlings:[],
    allBullingHeifers:[],

    allDMRs:[],

    totalDMRs:[],

    options:[
        'Kondwani', 'Bob', 'Linda', 'Alison'
    ],
    
    selectedCattle: null,
    selectedCattleUnderTreatment: null,
    selectedCalfUnderTreatment: null,
    selectedBull:null,
    selectedCow:null,
    selectedCalf: null,
    selectedNewCalf:null,
    selectWeaner:null,
    selectYearling:null,
    selectBullingHeifer:null,

    selectedDMR:null,

    cattleForm:{
        
      cattleBreed:null,
      cattleDateOfBirth:null,
      datePurchased:null,
      cattleSire:null,
      cattleDam:null,
      cattleSex:null,
      cattleAge:null,
      cattleWeight:null,
      earTagID:null,
      earTagColor:null,
      cattleColor:null,
      supplierName:null,
      cattleStatus:null,
      cattleRemarks:null,
      createdBy:null,
      totalDMR:null  
      
        
    },

    calfForm:{
        
        calfBreed:null,
        calfDateOfBirth:null,
        sire:null,
        dam:null,
        calfSex:null,
        calfWeight:null,
        earTagID:null,
        earTagColor:null,
        calfColor:null,
        calfStatus:null,
        calfRemarks:null,
        createdBy:null,
        age:null,
        stage:null
          
      },


    milkingForm: {     
        earTagID:null,
        firstMilking:null,
        secondMilking:null,
        thirdMilking:null,
        milkingDate:null,
        createdBy:null,
        milkOwner:null,
        totalDMR:null  
    },

    milkingFormByDate:{

      milkingStartDate:null,
      milkingEndDate:null

    }
})

    


export const getters = {
    getField,

    loading(state) {
        return state.loading
    },
    selectedCattle(state) {
        return state.selectedCattle
      },

      selectedCattleUnderTreatment(state) {
        return state.selectedCattleUnderTreatment
      },

      selectedCalfUnderTreatment(state) {
        return state.selectedCalfUnderTreatment
      },

      selectedCow(state) {
        return state.selectedCow
      },

      selectedBull(state) {
        return state.selectedBull
      },

      earTagOptions(state){
          return state.options
      },

    allCattle(state){
        return state.allCattle
    },

    allCattleUnderTreatment(state){
        return state.allCattleUnderTreatment
    },

    allCalvesUnderTreatment(state){
        return state.allCalvesUnderTreatment
    },


    allCows(state){
        return state.allCows
    },

    allBulls(state){
        return state.allBulls
    },


    selectedCalf(state) {
        return state.selectedCalf
      },

    allCalves(state){
        return state.allCalves
    },

    //------NEW CALVES-------------
    selectedNewCalf(state) {
        return state.selectedNewCalf
      },

    allNewCalves(state){
        return state.allNewCalves
    },


//------WEANERS-------------
    selectedWeaner(state) {
        return state.selectedWeaner
      },

    allWeaners(state){
        return state.allWeaners
    },

//------YEARLINGS---------------
    selectedYearling(state) {
        return state.selectedYearling
      },

    allYearlings(state){
        return state.allYearlings
    },

//---------BULLING HEIFERS--------
    selectedBullingHeifer(state) {
        return state.selectedBullingHeifer
      },

    allBullingHeifers(state){
        return state.allBullingHeifers
    },


    selectedDMR(state) {
        return state.selectedDMR
      },

    allDMRs(state){
        return state.allDMRs
    },

    totalDMRs(state){
      return state.totalDMRs
    }


}


export const mutations = {

    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  

    //MUTATIONS FOR ADDING, SETTING AND GETTING TASKS
    [ADD_CATTLE](state, newCattle){
        state.allCattle.push(newCattle)
    },

    [SET_SELECTED_CATTLE](state, newCattle) {
        state.selectedCattle = newCattle
      },
    [SET_ALL_CATTLE](state, payload) {
        state.allCattle = payload
    },
    [GET_ALL_CATTLE](state, payload){
        state.allCattle = payload
    },

    [SET_SELECTED_CATTLE_UNDER_TREATMENT](state, newCattle) {
        state.selectedCattleUnderTreatment = newCattle
      },
    [SET_ALL_CATTLE_UNDER_TREATMENT](state, payload) {
        state.allCattleUnderTreatment = payload
    },
    [GET_ALL_CATTLE_UNDER_TREATMENT](state, payload){
        state.allCattleUnderTreatment = payload
    },


    [SET_SELECTED_CALF_UNDER_TREATMENT](state, newCalf) {
        state.selectedCalfUnderTreatment = newCalf
      },
    [SET_ALL_CALVES_UNDER_TREATMENT](state, payload) {
        state.allCalvesUnderTreatment = payload
    },
    [GET_ALL_CALVES_UNDER_TREATMENT](state, payload){
        state.allCalvesUnderTreatment = payload
    },


    [PUT_IN_TREATMENT](state, putResponse) {
        state.selectedCattle= putResponse
        state.selectedCattle.cattleStatus = "Under Treatment"
        }
    ,

    [PUT_CALF_IN_TREATMENT](state, putResponse) {
        state.selectedCalf= putResponse
        state.selectedCalf.calfStatus = "Under Treatment"
        }
    ,


    [SET_SELECTED_COW](state, newCattle) {
        state.selectedCow = newCattle
      },
    [SET_ALL_COWS](state, payload) {
        state.allCows = payload
    },
    [GET_ALL_COWS](state, payload){
        state.allCows = payload
    },


    [SET_SELECTED_BULL](state, newCattle) {
        state.selectedBull = newCattle
      },
    [SET_ALL_BULLS](state, payload) {
        state.allBulls = payload
    },
    [GET_ALL_BULLS](state, payload){
        state.allBulls = payload
    },



    //MUTATIONS FOR ADDING, SETTING AND GETTING CALVES
    [ADD_CALF](state, newCalf){
        state.allCalves.push(newCalf)
    },

    [SET_SELECTED_CALF](state, newCalf) {
        state.selectedCalf = newCalf
      },
    [SET_ALL_CALVES](state, payload) {
        state.allCalves = payload
    },
    [GET_ALL_CALVES](state, payload){
        state.allCalves = payload
    },


        //MUTATIONS FOR SETTING AND GETTING WEANERS

        [SET_SELECTED_NEW_CALF](state, newCalf) {
            state.selectedNewCalf = newCalf
          },
        [SET_ALL_NEW_CALVES](state, payload) {
            state.allNewCalves = payload
        },
        [GET_ALL_NEW_CALVES](state, payload){
            state.allNewCalves = payload
        },


    //MUTATIONS FOR SETTING AND GETTING WEANERS

    [SET_SELECTED_WEANER](state, newCalf) {
        state.selectedWeaner = newCalf
      },
    [SET_ALL_WEANERS](state, payload) {
        state.allWeaners = payload
    },
    [GET_ALL_WEANERS](state, payload){
        state.allWeaners = payload
    },

    //MUTATIONS FOR SETTING AND GETTING YEARLINGS

    [SET_SELECTED_YEARLING](state, newCalf) {
        state.selectedYearling = newCalf
      },
    [SET_ALL_YEARLINGS](state, payload) {
        state.allYearlings = payload
    },
    [GET_ALL_YEARLINGS](state, payload){
        state.allYearlings = payload
    },


    //MUTATIONS FOR SETTING AND GETTING BULLING HEIFERS

    [SET_SELECTED_BULLING_HEIFER](state, newCalf) {
        state.selectedBullingHeifer = newCalf
      },
    [SET_ALL_BULLING_HEIFERS](state, payload) {
        state.allBullingHeifers = payload
    },
    [GET_ALL_BULLING_HEIFERS](state, payload){
        state.allBullingHeifers = payload
    },

     //MUTATIONS FOR ADDING, SETTING AND GETTING DMRs
     [ADD_DMR](state, newDMR){
        state.allDMRs.push(newDMR)
    },

    [SET_SELECTED_DMR](state, newDMR) {
        state.selectedDMR = newDMR
      },
    [SET_ALL_DMRS](state, payload) {
        state.allDMRs = payload
    },
    [GET_ALL_DMRS](state, payload){
        state.allDMRs = payload
    },

    [GET_TOTAL_DMRS](state, payload){
      state.totalDMRs = payload
  },
}

export const actions = {

    async load({ commit }) {
        try {
            commit(SET_LOADING, true)
           const newCattleLoad= await api.get(`/cattle/AllCattle`)

           const newCalfLoad= await api.get(`/cattle/AllCalves`)

           const newDMRLoad= await api.get(`/cattle/AllDMRs`)

           // await dispatch('getInactivePolicies')
            console.log(newCattleLoad.data)
             commit(SET_ALL_CATTLE, newCattleLoad.data);

             console.log(newCalfLoad.data)
             commit(SET_ALL_CALVES, newCalfLoad.data);

             console.log(newDMRLoad.data)
             commit(SET_ALL_DMRS, newDMRLoad.data);
            //   ...getters.allPolicies,
            //   ...getters.inactivePolicies,
            commit(SET_LOADING, false);
            
        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },
 //GET ALL CATTLE
    async getAllCattle({ commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: allCattle} = await api.get(`/cattle/allCattle`)

        
            
         
        //    console.log(allCattle);

        //    console.log(allCattle.data[0]._id)


           const cattleLength = allCattle.data.length;

           console.log(cattleLength);
           
             //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
           const filteredCattle = allCattle.data.filter( c => 
            c.createdBy === this.$auth.user.email
           );

            //-----------------FOR LOOP TO CALCULATE THE CURRENT AGE OF EACH COW-------------//
        
            for (let i = 0; i< filteredCattle.length; i++) {
            
            
                console.log(filteredCattle[i].cattleDateOfBirth)
     
                var userinput = filteredCattle[i].cattleDateOfBirth;
                var dob = new Date(userinput);
                
                //check user provide input or not
                // if(userinput==null || userinput==''){
                //   console.log ("**Choose a date please!");  
                //  // return false; 
                // } 
            
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
             var stage = "";
            // var stageString= "";
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
        
            stage = {
                years: yearAge,
                months: monthAge,
                days: dateAge
                };
            
            if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
            ageString = age.years + " years, " + age.months + " months, and " + age.days + " days old. ";
            
            else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
            ageString = "Only " + age.days + " days old. ";
            //when current month and date is same as birth date and month
            else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
            ageString = age.years +  " years old. Happy Birthday.";
        
            else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
            ageString = age.years + " years and " + age.months + " months old. ";
        
        
            else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
            ageString = age.months + " months and " + age.days + " days old.";
        
        
            else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
            ageString = age.months + " months and " + age.days + " days old.";
        
            else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
            ageString = age.years + " years, and " + age.days + " days old. ";
        
            else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
            ageString = age.months + " months old. ";
            //when current date is same as dob(date of birth)
            else ageString = "First day in the herd."; 
            
            //display the calculated age
          //  console.log(ageString); 
            age = ageString

            filteredCattle[i].cattleAge = ageString;

            }

            const filteredCattleByCattleStatus = filteredCattle.filter( csc => 
                csc.cattleStatus === "Under Treatment"
               );
     

           const filteredCattleByMale = filteredCattle.filter( mc => 
            mc.cattleSex === "Male" && mc.cattleStatus !== "Under Treatment"
           );

           const filteredCattleByFemale = filteredCattle.filter( fc => 
            fc.cattleSex === "Female" && fc.cattleStatus !== "Under Treatment"
           );
 
            
          //  console.log(filteredCattleByMale);
          //  console.log(filteredCattleByFemale);
            

           console.log(filteredCattle.length);

           let totalCattleWeight = 0;
           

          for (let i = 0; i < filteredCattle.length; i++) {

            for (let i = 0; i < filteredCattle.length; i++) {

               totalCattleWeight += parseInt(filteredCattle[i].cattleWeight);
            } 
             
              
          }

          console.log(totalCattleWeight);  

           console.log(filteredCattleByMale.length);

           console.log(filteredCattleByFemale.length);


           

           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_CATTLE, filteredCattle);

           commit(GET_ALL_BULLS, filteredCattleByMale);

           commit(GET_ALL_COWS, filteredCattleByFemale);

           commit(GET_ALL_CATTLE_UNDER_TREATMENT, filteredCattleByCattleStatus);
            
           
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    //ADD NEW TASK TO ALL CATTLE
    async addNewCattle({ state, commit}){
        try {
            commit(SET_LOADING, true);

            const newCattle = cloneDeep(state.cattleForm);
            newCattle.createdBy = this.$auth.user.email;
            
            newCattle.cattleDateOfBirth = newCattle.cattleDateOfBirth.toLocaleDateString();
            newCattle.datePurchased = newCattle.datePurchased.toLocaleDateString();
            
           console.log(newCattle);

           console.log( newCattle.datePurchased);
           console.log(newCattle.cattleDateOfBirth);
           
            const response = await api.post(`/cattle/addNewCattle`, newCattle);

            console.log(response.data);

            commit(ADD_CATTLE, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    

  async  selectCattle({ commit }, newCattle) {
        try {

            const {data: allDMRs} = await api.get(`/cattle/AllDMRs`)
          //  console.log(allDMRs);
             

            const specialfilteredDMRs = allDMRs.data.filter( dmr => 
                dmr.createdBy === this.$auth.user.email && dmr.earTagID === newCattle.earTagID
               );
    
               let sum = 0;
    
               for (let i = 0; i < specialfilteredDMRs.length; i++) {
                  
                   sum += specialfilteredDMRs[i].DailyMilkingYield;
               }
              
             
    
              
              
            //  console.log(sum);
              newCattle.totalDMR = sum;

            commit(SET_SELECTED_CATTLE, newCattle)
            // console.log(newCattle._id)
            // console.log(newCattle.earTagID)
            // console.log(newCattle)

        } catch (error) {
            console.log('Error')
        }
        
      },


    //   ----------------------------C A L V E S-----------------------------------------

    async getAllCalves({ commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: allCalves} = await api.get(`/cattle/allCalves`)

         
           console.log(allCalves);

         //  console.log(allCalves.data[0]._id)

           


         //  const calvesLength = allCalves.data.length;

          // console.log(calvesLength);
           
             //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
           const filteredCalves = allCalves.data.filter( c => 
            c.createdBy === this.$auth.user.email
           );

           //-----------------FOR LOOP TO CALCULATE THE CURRENT AGE OF EACH COW-------------//
        
           for (let i = 0; i< filteredCalves.length; i++) {
            
            
            console.log(filteredCalves[i].calfDateOfBirth)
 
            var userinput = filteredCalves[i].calfDateOfBirth;
            var dob = new Date(userinput);
            
            //check user provide input or not
            // if(userinput==null || userinput==''){
            //   console.log ("**Choose a date please!");  
            //  // return false; 
            // } 
        
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
         var stage = "";
         var stageString= "";
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
    
        stage = {
            years: yearAge,
            months: monthAge,
            days: dateAge
            };
        
        if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
        ageString = age.years + " years, " + age.months + " months, and " + age.days + " days old. ";
        
        else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
        ageString = "Only " + age.days + " days old. ";
        //when current month and date is same as birth date and month
        else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
        ageString = age.years +  " years old. Happy Birthday.";
    
        else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
        ageString = age.years + " years and " + age.months + " months old. ";
    
    
        else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
        ageString = age.months + " months and " + age.days + " days old.";
    
    
        else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
        ageString = age.months + " months and " + age.days + " days old.";
    
        else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
        ageString = age.years + " years, and " + age.days + " days old. ";
    
        else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
        ageString = age.months + " months old. ";
        //when current date is same as dob(date of birth)
        else ageString = "First day in the herd."; 
        
        //display the calculated age
      //  console.log(ageString); 
        age = ageString
        //----------------------------------------- P R O D U C T I O N  S T A G E-------------------------------------------------------//
         
        if ( (stage.years > 0) && (stage.months > 0) && (stage.days > 0) )
        stageString = "Bulling Heifer Stage";
        else if ( (stage.years == 0) && (stage.months == 0) && (stage.days > 0) )
        stageString = "Calf Stage";
        //when current month and date is same as birth date and month
        else if ( (stage.years > 0) && (stage.months == 0) && (stage.days == 0) )
        stageString = "Now a Bulling Heifer";
        else if ( (stage.years > 0) && (stage.months > 0) && (stage.days == 0) )
        stageString = "Bulling Heifer Stage";
    
    
        else if ( (stage.years == 0) && (stage.months >= 0) && (stage.months <= 2) && (stage.days >= 0) )
        stageString = "Calf Stage";
    
        else if ( (stage.years == 0) && (stage.months >= 3) && (stage.months <= 6) && (stage.days >= 0) )
        stageString = "Weaner Stage";
    
        else if ( (stage.years == 0) && (stage.months >= 6) && (stage.months <= 13) && (stage.days >= 0) )
        stageString = "Yearling Stage";
    
        else if ( (stage.years == 0) && (stage.months >= 13) && (stage.days >= 0) )
        stageString = "Bulling Heifer Stage";
    
        else if ( (stage.years > 0) && (stage.months == 0) && (stage.days >= 0) )
        stageString = "Bulling Heifer Stage";
    
        else if ( (stage.years == 0) && (stage.months >= 0) && (stage.months <= 2) && (stage.days >= 0) )
        stageString = "Calf Stage";
        //when current date is same as dob(date of birth)
        else stageString = "First day in the herd."; 
      //  console.log(stageString); 
 
    //    console.log(ageString);

        filteredCalves[i].age = ageString
     //   console.log(filteredCalves[i].age);

        filteredCalves[i].stage = stageString 
     //   console.log(filteredCalves[i].stage);

           }
 

           const filteredCalvesByMale = allCalves.data.filter( mbc => 
            mbc.calfSex === "Male" && mbc.createdBy === this.$auth.user.email
           );

           const filteredCalvesByFemale = allCalves.data.filter( fbc => 
            fbc.calfSex === "Female" &&  fbc.createdBy === this.$auth.user.email
           );


        //    ------------------P R O D U C T I O N     S T A G E     F I L T E R S ----------------------------------//
            
           const filteredCalvesByCalfStage = filteredCalves.filter( fbs => 
            fbs.stage === "Calf Stage" && (fbs.calfSex === "Female" || fbs.calfSex === "Male") && fbs.calfStatus !== "Under Treatment"
           );

           const filteredCalvesByWeanerStage = filteredCalves.filter( fbs => 
            fbs.stage === "Weaner Stage" && (fbs.calfSex === "Female" || fbs.calfSex === "Male") && fbs.calfStatus !== "Under Treatment"
           );

           const filteredCalvesByYearlingStage = filteredCalves.filter( fbs => 
            fbs.stage === "Yearling Stage" && (fbs.calfSex === "Female" || fbs.calfSex === "Male") && fbs.calfStatus !== "Under Treatment"
           );

           const filteredCalvesByBullingHeiferStage = filteredCalves.filter( fbs => 
            fbs.stage === "Bulling Heifer Stage" && (fbs.calfSex === "Female" || fbs.calfSex === "Male") && fbs.calfStatus !== "Under Treatment"
           );

           const filteredCalvesByCalfStatus = filteredCalves.filter( csc => 
            csc.calfStatus === "Under Treatment"
           );
           console.log(filteredCalvesByCalfStatus); 
           console.log(filteredCalvesByCalfStage);
            console.log(filteredCalvesByWeanerStage);
            console.log(filteredCalvesByYearlingStage);
            console.log(filteredCalvesByBullingHeiferStage);
           
            console.log(filteredCalves.length);

            console.log(filteredCalvesByMale.length);

            console.log(filteredCalvesByFemale.length);


           

           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_CALVES, filteredCalves);

            commit(GET_ALL_CALVES_UNDER_TREATMENT, filteredCalvesByCalfStatus);
           
           commit(GET_ALL_NEW_CALVES, filteredCalvesByCalfStage);

           commit(GET_ALL_WEANERS, filteredCalvesByWeanerStage);

           commit(GET_ALL_YEARLINGS, filteredCalvesByYearlingStage);

           commit(GET_ALL_BULLING_HEIFERS, filteredCalvesByBullingHeiferStage);
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    //ADD NEW TASK TO ALL CATTLE
    async addNewCalf({ state, commit}){
        try {
            commit(SET_LOADING, true);

            const newCalf = cloneDeep(state.calfForm);
            newCalf.createdBy = this.$auth.user.email;

            newCalf.calfDateOfBirth = newCalf.calfDateOfBirth.toLocaleDateString();

        //    ----------------------------------------------------------------------------  //

        var userinput = newCalf.calfDateOfBirth;
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
     var stageString= "";
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
    ageString = age.years + " years, " + age.months + " months, and " + age.days + " days old. ";
    
    else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
    ageString = "Only " + age.days + " days old. ";
    //when current month and date is same as birth date and month
    else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
    ageString = age.years +  " years old. Happy Birthday.";

    else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
    ageString = age.years + " years and " + age.months + " months old. ";


    else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
    ageString = age.months + " months and " + age.days + " days old.";


    else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
    ageString = age.months + " months and " + age.days + " days old.";

    else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
    ageString = age.years + " years, and " + age.days + " days old. ";

    else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
    ageString = age.months + " months old. ";
    //when current date is same as dob(date of birth)
    else ageString = "Welcome to Earth! <br> It's first day on Earth."; 
    
    //display the calculated age
  
    
 
    newCalf.age = ageString
    //----------------------------------------- P R O D U C T I O N  S T A G E-------------------------------------------------------//
     
    if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
    stageString = "Bulling Heifer Stage";
    else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
    stageString = "Still a Calf";
    //when current month and date is same as birth date and month
    else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
    stageString = "Now a Bulling Heifer";
    else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
    stageString = "Bulling Heifer Stage";


    else if ( (age.years == 0) && (age.months >= 0) && (age.months <= 2) && (age.days >= 0) )
    stageString = "Calf Stage";

    else if ( (age.years == 0) && (age.months >= 2) && (age.months <= 6) && (age.days >= 0) )
    stageString = "Weaner Stage";

    else if ( (age.years == 0) && (age.months >= 6) && (age.months <= 13) && (age.days >= 0) )
    stageString = "Yearling Stage";

    else if ( (age.years == 0) && (age.months >= 13) && (age.days >= 0) )
    stageString = "Bulling Heifer Stage";

    else if ( (age.years > 0) && (age.months == 0) && (age.days >= 0) )
    stageString = "Bulling Heifer Stage";

    else if ( (age.years == 0) && (age.months >= 0) && (age.months <= 2) && (age.days == 0) )
    stageString = "Calf Stage";
    //when current date is same as dob(date of birth)
    else stageString = "Welcome to Earth! <br> It's first day on Earth!"; 
    
      console.log(newCalf.stage)
      newCalf.stage = stageString;


        console.log(newCalf._id)
        console.log(newCalf.calfDateOfBirth)
        console.log(newCalf.age)


    //  ---------------------------------------------------------------------------------------------  //
           console.log(newCalf);

           
           console.log(newCalf.calfDateOfBirth);
           
            const response = await api.post(`/cattle/addNewCalf`, newCalf);

            console.log(response.data);

            commit(ADD_CALF, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    

    selectCalf({ commit }, newCalf) {
        try {
          //  const {data: allCalf} = await api.get(`/cattle/AllCalf`)

          //  console.log(allCalf);

          

            commit(SET_SELECTED_CALF, newCalf)

        var userinput = newCalf.calfDateOfBirth;
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
    console.log(now)
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
        var stageString= "";
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
    ageString = age.years + " years, " + age.months + " months, and " + age.days + " days old. ";
    else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
    ageString = "Only " + age.days + " days old. ";
    //when current month and date is same as birth date and month
    else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
    ageString = age.years +  " years old. Happy Birthday.";

    else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
    ageString = age.years + " years and " + age.months + " months old. ";


    else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
    ageString = age.months + " months and " + age.days + " days old.";


    else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
    ageString = age.months + " months and " + age.days + " days old.";

    else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
    ageString = age.years + " years, and " + age.days + " days old. ";

    else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
    ageString = age.months + " months old. ";
    //when current date is same as dob(date of birth)
    else ageString = "Welcome to Earth! <br> It's first day on Earth!"; 
    
    //display the calculated age
    console.log(ageString); 
    newCalf.age = ageString
    //----------------------------------------- P R O D U C T I O N  S T A G E-------------------------------------------------------//
        
    if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
    stageString = "Bulling Heifer Stage";
    else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
    stageString = "Still a Calf";
    //when current month and date is same as birth date and month
    else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
    stageString = "Now a Bulling Heifer";
    else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
    stageString = "Bulling Heifer Stage";


    else if ( (age.years == 0) && (age.months >= 0) && (age.months <= 2) && (age.days > 0) )
    stageString = "Calf Stage";

    else if ( (age.years == 0) && (age.months >= 2) && (age.months <= 6) && (age.days > 0) )
    stageString = "Weaner Stage";

    else if ( (age.years == 0) && (age.months >= 6) && (age.months <= 13) && (age.days > 0) )
    stageString = "Yearling Stage";

    else if ( (age.years == 0) && (age.months >= 13) && (age.days > 0) )
    stageString = "Bulling Heifer Stage";

    else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
    stageString = "Bulling Heifer Stage";

    else if ( (age.years == 0) && (age.months >= 0) && (age.months <= 2) && (age.days == 0) )
    stageString = "Calf Stage";
    //when current date is same as dob(date of birth)
    else stageString = "Welcome to Earth! <br> It's first day on Earth!"; 
    
    console.log(allCalves.data[i].calfDateOfBirth)

        console.log(newCalf._id)
        console.log(newCalf.calfDateOfBirth)
            console.log(newCalf.age)
        } catch (error) {
            console.log('Error')
        }
        
      },


       //GET ALL CATTLE
    async getAllDMRs({ commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: allDMRs} = await api.get(`/cattle/allDMRs`)


          let totalCount = 0;

           console.log(allDMRs);

        //   console.log(allDMRs.data[0].earTagID);

       //    console.log(allDMRs.data[100].dailyEarnings)

        //    for (let i = 80; i < allDMRs.data.length; i++) {
               
        //       totalCount += allDMRs.data[i].dailyEarnings;
              
             
        //    }
          
        //    console.log(totalCount);
        

        //    console.log((allDMRs.data[0].firstMilking).toFixed(2));


        //    const dmrLength = allDMRs.data.length;

        //    console.log(dmrLength);
           
             //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
           const filteredDMRs = allDMRs.data.filter( dmr => 
            dmr.createdBy === this.$auth.user.email 
            
           );

          //  var startDate = new Date("7/1/2022");
          //   var endDate = new Date("7/16/2022");

          //   var resultProductData = product_data.filter(a => {
          //     var date = new Date(a.ProductHits);
          //     return (date >= startDate && date <= endDate);
          //   });
          //   console.log(resultProductData)


          

         //-----------------------------------CALCULATE TOTAL MILK YIELD BY DATE-----------------------------//
      const filteredDmrByDate = filteredDMRs.filter( t => 
       t.milkingDate > "7/1/2022" && t.milkingDate < "7/19/2022"
      );
     

       console.log(filteredDmrByDate[0].DailyMilkingYield)
       
       let sum = 0;

       for (let i = 0; i < filteredDmrByDate.length; i++) {
          
           sum += filteredDmrByDate[i].DailyMilkingYield;
       }
     
      console.log(sum);


           const specialfilteredDMRs = allDMRs.data.filter( dmr => 
            dmr.createdBy === this.$auth.user.email && dmr.earTagID === 'FG-1000-P'
           );

          


           let total=0;
         


                for (let i = 0; i < specialfilteredDMRs.length; i++) {

                     total += specialfilteredDMRs[i].DailyMilkingYield;

                    // totalEarnings += specialfilteredDMRs[i].dailyEarnings;
                    
                }

                let totalEarnings = 0;

                for (let i = 0; i < specialfilteredDMRs.length; i++) {
                    if (allDMRs.data[i].earTagID === 'WP-3008-200-N') {
                      
                     totalEarnings += specialfilteredDMRs[i].dailyEarnings;
     
                    }
                    
                }
     
         //       console.log(totalEarnings.toFixed(2));


        

          //      console.log(specialfilteredDMRs); 
                
         //       console.log(total.toFixed(1));

               
            

            


           

           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_DMRS, filteredDMRs);
            
           
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },


          async addMilkingByDate({state, commit}){
            try {

              commit(SET_LOADING, true)

              const newFBD = state.milkingFormByDate;

              newFBD.milkingStartDate = newFBD.milkingStartDate;
              newFBD.milkingEndDate = newFBD.milkingEndDate;

              console.log(newFBD.milkingStartDate);
              console.log(newFBD.milkingEndDate);

              const {data: response} = await api.post(`/cattle/allDMRsByDate`, newFBD);

              console.log(response.data);

          //      //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
          //      const filteredDMRs = allDMRs.data.filter( dmr => 
          //       dmr.createdBy === this.$auth.user.email 
                
          //      );

          //     //-----------------------------------CALCULATE TOTAL MILK YIELD BY DATE-----------------------------//
          //  const filteredDmrByDate = filteredDMRs.filter( t => 
          //   t.milkingDate > "7/15/2022" && t.milkingDate < "7/19/2022"
          //  );
          

          //   console.log(filteredDmrByDate[0].DailyMilkingYield)
            
          //   let sum = 0;

          //   for (let i = 0; i < filteredDmrByDate.length; i++) {
               
          //       sum += filteredDmrByDate[i].DailyMilkingYield;
          //   }
          
          //  console.log(sum);

          //  const totalFilteredMilking = sum
//----------------------------------------------------------------------------------------------------//

          //     //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_TOTAL_DMRS, response.data);

          //  console.log(totalFilteredMilking);
            
           
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);
              
            } catch (error) {
              
            }
          },

   
          //GET TOTAL DMRs PER 
          async getTotalDMRs({ commit }){
            try {
                //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
                commit(SET_LOADING, true)
    
               
                //API REQUEST IS MADE AND RESULT IS STORED IN CONST
               const {data: allDMRs} = await api.get(`/cattle/AllDMRs`)
    
    
              var totalCount = 0;
    
               console.log(allDMRs);
    
               console.log(allDMRs.data[0].earTagID);
    
               for (let i = 0; i < allDMRs.length; ++i) {
                   
                  totalCount = totalCount + i;;
                  
                 
               }
              
               console.log(totalCount);
            
    
               console.log((allDMRs.data[0].firstMilking).toFixed(2));
    
    
               const dmrLength = allDMRs.data.length;
    
               console.log(dmrLength);
               
                 //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
               const filteredDMRs = allDMRs.data.filter( dmr => 
                dmr.createdBy === this.$auth.user.email 
                
               );
    
    
              


               const specialfilteredDMRs = allDMRs.data.filter( dmr => 
                dmr.createdBy === this.$auth.user.email && dmr.earTagID === 'FG-1000-P'
               );
    
    
    
    
               let total=0;
             
    
    
                    for (let i = 0; i < specialfilteredDMRs.length; i++) {
    
                         total += specialfilteredDMRs[i].DailyMilkingYield;
    
                        // totalEarnings += specialfilteredDMRs[i].dailyEarnings;
                        
                    }
    
                    let totalEarnings = 0;
    
                    for (let i = 0; i < specialfilteredDMRs.length; i++) {
                        if (allDMRs.data[i].earTagID === 'WP-3008-200-N') {
                          
                         totalEarnings += specialfilteredDMRs[i].dailyEarnings;
         
                        }
                        
                    }
         
                    console.log(totalEarnings.toFixed(2));
    
    
            
    
                    console.log(specialfilteredDMRs); 
                    
                    console.log(total.toFixed(1));
    
                   
                
    
                
    
    
               
    
               //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
               commit(GET_ALL_DMRS, filteredDMRs);
                
               
               //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
               commit(SET_LOADING, false);
    
            } catch (error) {
                commit(SET_LOADING, false);
                this.$log.error(error.message)
            }
        },
    


    //ADD NEW TASK TO ALL CATTLE
    async addNewDMR({ state, commit}){
        try {
            commit(SET_LOADING, true);

            const newDMR= cloneDeep(state.milkingForm);
            newDMR.createdBy = this.$auth.user.email;
            newDMR.milkOwner = newDMR.earTagID;
            newDMR.firstMilking = parseInt(newDMR.firstMilking);
            newDMR.secondMilking = parseInt(newDMR.secondMilking);
            newDMR.thirdMilking = parseInt(newDMR.thirdMilking);
            newDMR.milkingDate = newDMR.milkingDate.toLocaleDateString();
            newDMR.totalDMR = 0;

            
           

           console.log(newDMR);

           
           
            const response = await api.post(`/cattle/addNewDMR`, newDMR);

            console.log(response.data);

            commit(ADD_DMR, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    

   async selectDMR({ commit }, newDMR) {
        try {
            
         
           const {data: allDMRs} = await api.get(`/cattle/AllDMRs`)
           console.log(allDMRs);
            
           
           const specialfilteredDMRs = allDMRs.data.filter( dmr => 
            dmr.createdBy === this.$auth.user.email && dmr.earTagID === newDMR.earTagID
           );

           let sum = 0;

           for (let i = 0; i < specialfilteredDMRs.length; i++) {
              
               sum += specialfilteredDMRs[i].DailyMilkingYield;
           }
          
         

          
          
          console.log(sum);
          newDMR.totalDMR = sum;

            commit(SET_SELECTED_DMR, newDMR)
            console.log(newDMR);
            console.log(newDMR._id);
            console.log(newDMR.earTagID);
            console.log(newDMR.dailyEarnings)
            
            console.log(specialfilteredDMRs)

        } catch (error) {
            console.log('Error')
        }
        
      },
      
      
      async getTotalMikingRecords({ commit}){
            try {
                commit(SET_LOADING, true);

                const {data: cows} = await api.get(`/cattle/AllCattle`)

          

                console.log(cows);

                
                const {data: allDMRs} = await api.get(`/cattle/AllDMRs`)
    
    
                console.log(allDMRs);




                     let total = cows.map((cow) => {
                         return {
                           cow: cow,
                           milking: allDMRs.filter((milk) => milk.cowEarTag === cow.earTag),
                         };
                       });
                    
                       console.log(total);



                  commit(SET_LOADING,false);

            } catch (error) {
                
            }          
      },
      async putInTreatment({ state, commit }, newTask) {
        try {
          commit(SET_LOADING, true) 
            const newCattle = state.selectedCattle
       //  const newTask = rootGetters['finance/selectedPermitApplication'] 
          console.log(newCattle._id)

          const {data: putResponse} = await api.put(`/cattle/putInTreatment/${newCattle._id}`, {newCattle, cattleStatus: "Under Treatment"} )

          commit(PUT_IN_TREATMENT, putResponse)

          console.log(putResponse.data);
         
          commit(SET_LOADING, false)
        } catch (error) {
          commit(SET_LOADING, false)
          throw error
        }
      },

      async markAsTreated({ state, commit }, newTask) {
        try {
          commit(SET_LOADING, true) 
            const newCattle = state.selectedCattle
       //  const newTask = rootGetters['finance/selectedPermitApplication'] 
          console.log(newCattle._id)

          const {data: putResponse} = await api.put(`/cattle/markAsTreated/${newCattle._id}`, {newCattle, cattleStatus: "Treated"} )

          commit(PUT_IN_TREATMENT, putResponse)

          console.log(putResponse.data);
         
          commit(SET_LOADING, false)
        } catch (error) {
          commit(SET_LOADING, false)
          throw error
        }
      },

      async putCalfInTreatment({ state, commit }, newTask) {
        try {
          commit(SET_LOADING, true) 
            const newCalf = state.selectedCalf
       //  const newTask = rootGetters['finance/selectedPermitApplication'] 
          console.log(newCalf._id)

          const {data: putResponse} = await api.put(`/cattle/putCalfInTreatment/${newCalf._id}`, {newCalf, calfStatus: "Under Treatment"} )

          commit(PUT_CALF_IN_TREATMENT, putResponse)

          console.log(putResponse.data);
         
          commit(SET_LOADING, false)
        } catch (error) {
          commit(SET_LOADING, false)
          throw error
        }
      },

      async markCalfAsTreated({ state, commit }, newTask) {
        try {
          commit(SET_LOADING, true) 
            const newCalf = state.selectedCalf
       //  const newTask = rootGetters['finance/selectedPermitApplication'] 
          console.log(newCalf._id)

          const {data: putResponse} = await api.put(`/cattle/markCalfAsTreated/${newCalf._id}`, {newCalf, calfStatus: "Treated"} )

          commit(PUT_CALF_IN_TREATMENT, putResponse)

          console.log(putResponse.data);
         
          commit(SET_LOADING, false)
        } catch (error) {
          commit(SET_LOADING, false)
          throw error
        }
      },



}


  
    
