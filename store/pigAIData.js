import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { 
        ADD_PIG_AI_RECORD,
        
        GET_ALL_PIG_AI_RECORDS,
        GET_ALL_FILTERED_PIG_AI_RECORDS,

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

    allPigAIRecords:[],
    allFilteredPigAIRecords:[],

    // allPigAIConsultsRecords:[],
    // allPigAISalesRecords:[],
    

    pigAIForm:{
        pigAIClientName:null,
        pigAIClientPhoneNumber:null,
        pigAIClientLocation:null,
        // pigAICategory:null,
        date:new Date()
       // createdBy:null
        
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
    async getAllPigAIRecords({ state,commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/ai/pigs/allPigAIRecords`)

        //const { data:fetchUsers } = await api.get(`/auth/allUsers`)

   
           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_PIG_AI_RECORDS, response.data);

       
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

     async getFilteredPigAIRecords({ state,commit }){
         try {
           //---  ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
             commit(SET_LOADING, true)

              const newFilterRecord = cloneDeep(state.pigAIFilterForm);

              newFilterRecord.startDate = newFilterRecord.startDate.toLocaleDateString('en-GB');

              newFilterRecord.endDate = newFilterRecord.endDate.toLocaleDateString('en-GB');

              console.log(newFilterRecord.startDate);
              console.log(newFilterRecord.endDate);
            
           
          //---   API REQUEST IS MADE AND RESULT IS STORED IN CONST
            const {data: response} = await api.get(`/ai/pigs/allPigAIRecords`)

         //   const { data:fetchUsers } = await api.get(`/auth/allUsers`)
        
       //  --------------------ALL PIGAI RECORDS FILTERED BY CATEGORY -------------------------------- //
        // const pigAIConsultsRecords = response.data.filter( a=>
        //  a.pigAICategory ==='Consultation'
        // )

        // const PIGAISalesRecords = response.data.filter( b=>
        //  b.PIGAICategory ==='Sales'
        // )

   // -------------------------------END OF FILTERING BY CATEGORY----------------------//




 //   --------FILTER CATEGORIES BY DATE AND SUMMATION OF EACH CATEGORY------------------//
          const filteredPigAIConsultsRecords = response.data.filter( at => 
         at.date >= newFilterRecord.startDate && at.date <= newFilterRecord.endDate
         );

        //  const filteredPIGAISalesRecordsRecords = PIGAISalesRecords.filter( bt => 
        //      bt.date >= newFilterRecord.startDate && bt.date <= newFilterRecord.endDate
        //      );

       
        
         console.log(filteredPigAIConsultsRecords.length);

      //   console.log(filteredPIGAISalesRecordsRecords.length);


            console.log(response.data);

          //  RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
          //  commit(GET_ALL_PIG_AI_RECORDS, response.data);

            commit(GET_FILTERED_PIG_AI_START_TIME, newFilterRecord.startDate);

            commit(GET_FILTERED_PIG_AI_END_TIME, newFilterRecord.endDate);

            commit(GET_ALL_FILTERED_PIG_AI_RECORDS, filteredPigAIConsultsRecords.length);

         //   commit(GET_ALL_PIG_AI_SALES_RECORDS, filteredPIGAISalesRecordsRecords.length);

       
//            //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
//            commit(SET_LOADING, false);

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

    

    
        
      

  

}


  
    
