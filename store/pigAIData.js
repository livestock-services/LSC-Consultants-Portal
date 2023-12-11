import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { 
        ADD_PIG_AI_RECORD,
        
        GET_ALL_PIG_AI_RECORDS,
        GET_ALL_FILTERED_PIG_AI_RECORDS,
        SET_SELECTED_PIG_AI_RECORD,
        GET_FILTERED_PIG_AI_START_TIME,
        GET_FILTERED_PIG_AI_END_TIME,
        
        SET_LOADING,
        
        // GET_ALL_PIG_AI_CONSULTS_RECORDS,
        // GET_ALL_PIG_AI_SALES_RECORDS,
        
       
       
    } from '@/helpers/mutation-types'

export const state = () => ({

    loading: false,
    filteredPigAIStartTime:[],
    filteredPigAIEndTime:[],
    selectedPigAIRecord:null,
    allPigAIRecords:[],
    allFilteredPigAIRecords:[],

    // allPigAIConsultsRecords:[],
    // allPigAISalesRecords:[],
    

    pigAIForm:{
        pigAIClientName:null,
        pigAIClientPhoneNumber:null,
        pigAIClientLocation:null,
        pigAIClientTown:null,
        pigAIClientComments:null,
        // pigAICategory:null,
        date:new Date(),
        createdBy:null
        
    },

    pigAIFilterForm:{
        startDate:null,
        endDate:null
    }

})

    


export const getters = {
    getField,

    loading(state) {
        return state.loading
    },
    
    selectedPigAIRecord(state) {
        return state.selectedPigAIRecord
      },
      filteredPigAIStartTime(state){
        return state.filteredPigAIStartTime
      },

      filteredPigAIEndTime(state){
        return state.filteredPigAIEndTime
      },
      //---------------------AGRO CONSULTS GETTERS--------------------------------------------//

    allPigAIRecords(state){
        return state.allPigAIRecords
    },

    allFilteredPigAIRecords(state){
        return state.allFilteredPigAIRecords
    },

    
        
  //----------------------------------------END OF AGRO SECTION----------------------------------------//

}


export const mutations = {

    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  

    //MUTATIONS FOR ADDING, SETTING AND GETTING AgroRecordS
    [ADD_PIG_AI_RECORD](state, newPigAIRecord){
        state.allPigAIRecords.push(newPigAIRecord)
    },

   
    [SET_SELECTED_PIG_AI_RECORD](state, newPigAIRecord) {
        state.selectedPigAIRecord = newPigAIRecord
      },
  

    [GET_FILTERED_PIG_AI_START_TIME](state, payload){
        state.filteredPigAIStartTime= payload
    },

    [GET_FILTERED_PIG_AI_END_TIME](state, payload){
        state.filteredPigAIEndTime= payload
    },

    //------------------------------------AGRO MUTATIONS---------------------------------------------//
    [GET_ALL_PIG_AI_RECORDS](state, payload){
        state.allPigAIRecords = payload
    },

    [GET_ALL_FILTERED_PIG_AI_RECORDS](state, payload){
        state.allFilteredPigAIRecords = payload
    },



    

    // [GET_ALL_PIG_AI_CONSULTS_RECORDS](state, payload){
    //     state.allPIGAIConsultsRecords = payload
    // },

    // [GET_ALL_PIG_AI_SALES_RECORDS](state, payload){
    //     state.allPIGAISalesRecords = payload
    // },


   

    //------------------------------------------------------------------------------------//

   
       
}

export const actions = {

    
 //GET ALL AgroRecordS
    async getAllPigAIRecords({ state,commit,rootState,rootGetters }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

          const users =  rootGetters['users/allUsers']

          const loggedInUser = rootGetters['users/loggedInUser']

         // console.log(users);
         // console.log(loggedInUser)

           let userEmail = loggedInUser.email;

            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/ai/pigs/allPigAIRecords`)

           if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Admin" )) ){
            if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Manager" )) ){

                const customeUserRecords = response.data.filter( cur=>
                    cur.createdBy === this.$auth.user.email
                          )

                          commit(GET_ALL_PIG_AI_RECORDS, customeUserRecords);

            }
        }

        else{

             //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_PIG_AI_RECORDS, response.data);

        }

           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

     async getFilteredPigAIRecords({ state,commit,rootState,rootGetters }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

          const users =  rootGetters['users/allUsers']

          const loggedInUser = rootGetters['users/loggedInUser']

        

           let userEmail = loggedInUser.email;

              const newFilterRecord = cloneDeep(state.pigAIFilterForm);

              newFilterRecord.startDate = newFilterRecord.startDate.toLocaleDateString('en-US');

              newFilterRecord.endDate = newFilterRecord.endDate.toLocaleDateString('en-US');

              console.log(newFilterRecord.startDate);
              console.log(newFilterRecord.endDate);
            
           
          //---   API REQUEST IS MADE AND RESULT IS STORED IN CONST
            const {data: response} = await api.get(`/ai/pigs/allPigAIRecords`)

            if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Admin" )) ){
                if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Manager" )) ){
                const customeUserRecords = response.data.filter( cur=>
                    cur.createdBy === this.$auth.user.email
                          )

                          const filteredPigAIConsultsRecords = customeUserRecords.filter( at => 
                            new Date(at.date) >= new Date(newFilterRecord.startDate) && new Date(at.date) <= new Date(newFilterRecord.endDate)
                            );
                   
                         
                          
                           
                            console.log(filteredPigAIConsultsRecords.length);
                   
                         
                   
                   
                               console.log(customeUserRecords);
                                         
                   
                               commit(GET_FILTERED_PIG_AI_START_TIME, newFilterRecord.startDate);
                   
                               commit(GET_FILTERED_PIG_AI_END_TIME, newFilterRecord.endDate);
                   
                               commit(GET_ALL_FILTERED_PIG_AI_RECORDS, filteredPigAIConsultsRecords.length);
                   
                }
            }
        
            else{

                const filteredPigAIConsultsRecords = response.data.filter( at => 
                    new Date(at.date) >= new Date(newFilterRecord.startDate) && new Date(at.date) <= new Date(newFilterRecord.endDate)
                    );
           
                 
           
                  
                   
                    console.log(filteredPigAIConsultsRecords.length);
           
               
           
           
                       console.log(response.data);
           
                    
           
                       commit(GET_FILTERED_PIG_AI_START_TIME, newFilterRecord.startDate);
           
                       commit(GET_FILTERED_PIG_AI_END_TIME, newFilterRecord.endDate);
           
                       commit(GET_ALL_FILTERED_PIG_AI_RECORDS, filteredPigAIConsultsRecords.length);
           
            }


   
        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    //ADD NEW PIGAIRecord TO ALL PIGAIRecordS
    async addNewPigAIRecord({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newPigAIRecord = cloneDeep(state.pigAIForm);

        //     newPIGAIRecord.date = state.PIGAIForm.date.toLocaleDateString();

        newPigAIRecord.createdBy = this.$auth.user.email;

        //    // newPIGAIRecord.createdBy = 'kondwanim@livestock.co.zm'
        //    console.log(newPIGAIRecord.date);
           
           console.log(newPigAIRecord);

           
            const response = await api.post(`/ai/pigs/addNewPigAIRecord`, newPigAIRecord);

            console.log(response.data);

            commit(ADD_PIG_AI_RECORD, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    

    selectPigAIRecord({ commit }, newPigAIRecord) {
        try {
            commit(SET_SELECTED_PIG_AI_RECORD, newPigAIRecord)
            console.log(newPigAIRecord._id)
        } catch (error) {
            console.log('Error')
        }
        
      },
        
      

  

}


  
    
