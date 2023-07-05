import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { 
        ADD_FISH_RECORD,
        
        GET_ALL_FISH_RECORDS,
        GET_ALL_FILTERED_FISH_RECORDS,

        GET_FILTERED_FISH_START_TIME,
        GET_FILTERED_FISH_END_TIME,
        
        SET_LOADING,
        
        // GET_ALL_FISH_CONSULTS_RECORDS,
        // GET_ALL_FISH_SALES_RECORDS,
        
       
       
    } from '@/helpers/mutation-types'

export const state = () => ({

    loading: false,
    filteredFishStartTime:[],
    filteredFishEndTime:[],

    allFishRecords:[],
    allFilteredFishRecords:[],

    // allFishConsultsRecords:[],
    // allFishSalesRecords:[],
    

    fishForm:{
        fishClientName:null,
        fishClientPhoneNumber:null,
        fishClientLocation:null,
        fishClientTown:null,
        fishClientComments:null,
        // FishCategory:null,
        date:new Date()
       // createdBy:null
        
    },

    fishFilterForm:{
        startDate:null,
        endDate:null
    }

})

    


export const getters = {
    getField,

    loading(state) {
        return state.loading
    },
    

      filteredFishStartTime(state){
        return state.filteredFishStartTime
      },

      filteredFishEndTime(state){
        return state.filteredFishEndTime
      },
      //---------------------AGRO CONSULTS GETTERS--------------------------------------------//

    allFishRecords(state){
        return state.allFishRecords
    },

    allFilteredFishRecords(state){
        return state.allFilteredFishRecords
    },

    
        
  //----------------------------------------END OF AGRO SECTION----------------------------------------//

}


export const mutations = {

    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  

    //MUTATIONS FOR ADDING, SETTING AND GETTING AgroRecordS
    [ADD_FISH_RECORD](state, newFishRecord){
        state.allFishRecords.push(newFishRecord)
    },

   
  

    [GET_FILTERED_FISH_START_TIME](state, payload){
        state.filteredFishStartTime= payload
    },

    [GET_FILTERED_FISH_END_TIME](state, payload){
        state.filteredFishEndTime= payload
    },

    //------------------------------------AGRO MUTATIONS---------------------------------------------//
    [GET_ALL_FISH_RECORDS](state, payload){
        state.allFishRecords = payload
    },

    [GET_ALL_FILTERED_FISH_RECORDS](state, payload){
        state.allFilteredFishRecords = payload
    },



    

    // [GET_ALL_FISH_CONSULTS_RECORDS](state, payload){
    //     state.allFishConsultsRecords = payload
    // },

    // [GET_ALL_FISH_SALES_RECORDS](state, payload){
    //     state.allFishSalesRecords = payload
    // },


   

    //------------------------------------------------------------------------------------//

   
       
}

export const actions = {

    
 //GET ALL AgroRecordS
    async getAllFishRecords({ state,commit,rootState,rootGetters }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

          const users =  rootGetters['users/allUsers']

          const loggedInUser = rootGetters['users/loggedInUser']

         // console.log(users);
         // console.log(loggedInUser)

           let userEmail = loggedInUser.email;

           const {data: response} = await api.get(`/fish/allFishRecords`)

        
           if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Admin" )) ){
            if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Manager" )) ){

                const customeUserRecords = response.data.filter( cur=>
                    cur.createdBy === this.$auth.user.email
                          )

                          commit(GET_ALL_FISH_RECORDS, customeUserRecords);

            }
        }

        else{

             //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_FISH_RECORDS, response.data);

        }
   
          

       
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

     async getFilteredFishRecords({ state,commit,rootState,rootGetters }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

          const users =  rootGetters['users/allUsers']

          const loggedInUser = rootGetters['users/loggedInUser']

         // console.log(users);
         // console.log(loggedInUser)

           let userEmail = loggedInUser.email;

              const newFilterRecord = cloneDeep(state.fishFilterForm);

            var  startDate = newFilterRecord.startDate.toLocaleDateString();

             var endDate = newFilterRecord.endDate.toLocaleDateString();

              console.log(startDate);
              console.log(endDate);
            
           
          //---   API REQUEST IS MADE AND RESULT IS STORED IN CONST
            const {data: response} = await api.get(`/fish/allFishRecords`)

             
           if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Admin" )) ){
            if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Manager" )) ){
            const customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )
                    

                      const filteredFishConsultsRecords = customeUserRecords.filter( at => 
                        at.date >= startDate && at.date <= endDate
                        );

                     

                        console.log(filteredFishConsultsRecords);
               
               
                           commit(GET_FILTERED_FISH_START_TIME, startDate);
               
                           commit(GET_FILTERED_FISH_END_TIME, endDate);
               
                           commit(GET_ALL_FILTERED_FISH_RECORDS, filteredFishConsultsRecords.length);
               
            }
        }

        else{

            const filteredFishConsultsRecords = response.data.filter( at => 
                at.date >= newFilterRecord.startDate && at.date <= newFilterRecord.endDate
                );
       
       
                   commit(GET_FILTERED_FISH_START_TIME, newFilterRecord.startDate);
       
                   commit(GET_FILTERED_FISH_END_TIME, newFilterRecord.endDate);
       
                   commit(GET_ALL_FILTERED_FISH_RECORDS, filteredFishConsultsRecords.length);

        }




 
        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    //ADD NEW FishRecord TO ALL FishRecordS
    async addNewFishRecord({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newFishRecord = cloneDeep(state.fishForm);

        //     newFishRecord.date = state.FishForm.date.toLocaleDateString();



         newFishRecord.createdBy = this.$auth.user.email;
        //    console.log(newFishRecord.date);
           
           console.log(newFishRecord);

           
            const response = await api.post(`/fish/addNewFishRecord`, newFishRecord);

            console.log(response.data);

            commit(ADD_FISH_RECORD, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    

    
        
      

  

}


  
    
