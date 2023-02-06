import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { 
        ADD_BEEF_AI_RECORD,
        
      GET_ALL_BEEF_AI_RECORDS,
        
        GET_FILTERED_BEEF_AI_START_TIME,
        GET_FILTERED_BEEF_AI_END_TIME,
        
        SET_LOADING,
        
        GET_ALL_BEEF_AI_CONSULTS_RECORDS,
        GET_ALL_BEEF_AI_SALES_RECORDS,
        
       
       
    } from '@/helpers/mutation-types'

export const state = () => ({

    loading: false,

    filteredBeefAIStartTime:[],
    filteredBeefAIEndTime:[],
    allBeefAIRecords:[],

    allBeefAIConsultationRecords:[],
    allBeefAISalesRecords:[],
    

    beefAIForm:{
        beefAIClientName:null,
        beefAIClientPhoneNumber:null,
        beefAIClientLocation:null,
        beefAICategory:null,
        date:new Date()
       // createdBy:null
        
    },

    beefAIFilterForm:{
        startDate:null,
        endDate:null
    }

})

    


export const getters = {
    getField,

    loading(state) {
        return state.loading
    },
    

      filteredBeefAIStartTime(state){
        return state.filteredBeefAIStartTime
      },

      filteredBeefAIEndTime(state){
        return state.filteredBeefAIEndTime
      },
      //---------------------AGRO CONSULTS GETTERS--------------------------------------------//

    allBeefAIRecords(state){
        return state.allBeefAIRecords
    },

    allBeefAIConsultationRecords(state){
        return state.allBeefAIConsultationRecords
    },

    allBeefAISalesRecords(state){
        return state.allBeefAISalesRecords
    },

        
  //----------------------------------------END OF AGRO SECTION----------------------------------------//

}


export const mutations = {

    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  

    //MUTATIONS FOR ADDING, SETTING AND GETTING AgroRecordS
    [ADD_BEEF_AI_RECORD](state, newBeefAIRecord){
        state.allBeefAIRecords.push(newBeefAIRecord)
    },

   
  

    [GET_FILTERED_BEEF_AI_START_TIME](state, payload){
        state.filteredBeefAIStartTime= payload
    },

    [GET_FILTERED_BEEF_AI_END_TIME](state, payload){
        state.filteredBeefAIEndTime = payload
    },

    //------------------------------------AGRO MUTATIONS---------------------------------------------//
    [GET_ALL_BEEF_AI_RECORDS](state, payload){
        state.allBeefAIRecords = payload
    },


    

    [GET_ALL_BEEF_AI_CONSULTS_RECORDS](state, payload){
        state.allBeefAIConsultationRecords = payload
    },

    [GET_ALL_BEEF_AI_SALES_RECORDS](state, payload){
        state.allBeefAISalesRecords = payload
    },


   

    //------------------------------------------------------------------------------------//

   
       
}

export const actions = {

    
 //GET ALL AgroRecordS
    async getAllBeefAIRecords({ state,commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/ai/beef/allBeefAIRecords`)

        //const { data:fetchUsers } = await api.get(`/auth/allUsers`)
        
           console.log(response.data);
   
           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_BEEF_AI_RECORDS, response.data);

       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    async getFilteredBeefAIRecords({ state,commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

             const newFilterRecord = cloneDeep(state.beefAIFilterForm);

             newFilterRecord.startDate = newFilterRecord.startDate.toLocaleDateString('en-GB');

             newFilterRecord.endDate = newFilterRecord.endDate.toLocaleDateString('en-GB');

             console.log(newFilterRecord.startDate);
             console.log(newFilterRecord.endDate);
            
           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/ai/beef/allBeefAIRecords`)

           console.log(response.data)

       //    const { data:fetchUsers } = await api.get(`/auth/allUsers`)
        
    //    //--------------------ALL BeefAI RECORDS FILTERED BY CATEGORY --------------------------------// 
        const beefAIConsultsRecords = response.data.filter( a=>
         a.beefAICategory ==='Consultation'
        )

        const beefAISalesRecords = response.data.filter( b=>
         b.beefAICategory ==='Sales'
        )

  // -------------------------------END OF FILTERING BY CATEGORY----------------------//




   //--------FILTER CATEGORIES BY DATE AND SUMMATION OF EACH CATEGORY------------------//
         const filteredBeefAIConsultsRecords = beefAIConsultsRecords.filter( at => 
        at.date >= newFilterRecord.startDate && at.date <= newFilterRecord.endDate
        );

        const filteredBeefAISalesRecords = beefAISalesRecords.filter( bt => 
            bt.date >= newFilterRecord.startDate && bt.date <= newFilterRecord.endDate
            );

       
        
       console.log(filteredBeefAIConsultsRecords.length);

       console.log(filteredBeefAISalesRecords.length);


        //   console.log(response.data);

           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_BEEF_AI_RECORDS, response.data);

           commit(GET_FILTERED_BEEF_AI_START_TIME, newFilterRecord.startDate);

           commit(GET_FILTERED_BEEF_AI_END_TIME, newFilterRecord.endDate);

           commit(GET_ALL_BEEF_AI_CONSULTS_RECORDS, filteredBeefAIConsultsRecords.length);

           commit(GET_ALL_BEEF_AI_SALES_RECORDS, filteredBeefAISalesRecords.length);

       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    //ADD NEW BeefAIRecord TO ALL BeefAIRecordS
    async addNewBeefAIRecord({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newBeefAIRecord = cloneDeep(state.beefAIForm);

        //     newBeefAIRecord.date = state.BeefAIForm.date.toLocaleDateString();



        //    // newBeefAIRecord.createdBy = 'kondwanim@livestock.co.zm'
        //    console.log(newBeefAIRecord.date);
           
           console.log(newBeefAIRecord);

           
            const response = await api.post(`/ai/beef/addNewBeefAIRecord`, newBeefAIRecord);

            console.log(response.data);

            commit(ADD_BEEF_AI_RECORD, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    

    
        
      

  

}


  
    
