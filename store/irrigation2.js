import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { 
        ADD_IRRIGATION_RECORD,
        
        GET_ALL_IRRIGATION_RECORDS,
        GET_ALL_FILTERED_IRRIGATION_RECORDS,

        GET_FILTERED_IRRIGATION_START_TIME,
        GET_FILTERED_IRRIGATION_END_TIME,
        
        SET_LOADING,
        
        // GET_ALL_IRRIGATION_CONSULTS_RECORDS,
        // GET_ALL_IRRIGATION_SALES_RECORDS,
        
       
       
    } from '@/helpers/mutation-types'

export const state = () => ({

    loading: false,
    filteredIrrigationStartTime:[],
    filteredIrrigationEndTime:[],

    allIrrigationRecords:[],
    allFilteredIrrigationRecords:[],

    // allirrigationConsultsRecords:[],
    // allirrigationSalesRecords:[],
    

    irrigationForm:{
        irrigationClientName:null,
        irrigationClientPhoneNumber:null,
        irrigationClientLocation:null,
        irrigationClientTown:null,
        irrigationClientComments:null,
        // IRRIGATIONCategory:null,
        date:new Date()
       // createdBy:null
        
    },

    irrigationFilterForm:{
        startDate:null,
        endDate:null
    }

})

    


export const getters = {
    getField,

    loading(state) {
        return state.loading
    },
    

      filteredIrrigationStartTime(state){
        return state.filteredIrrigationStartTime
      },

      filteredIrrigationEndTime(state){
        return state.filteredIrrigationEndTime
      },
      //---------------------AGRO CONSULTS GETTERS--------------------------------------------//

    allIrrigationRecords(state){
        return state.allIrrigationRecords
    },

    allFilteredIrrigationRecords(state){
        return state.allFilteredIrrigationRecords
    },

    
        
  //----------------------------------------END OF AGRO SECTION----------------------------------------//

}


export const mutations = {

    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  

    //MUTATIONS FOR ADDING, SETTING AND GETTING AgroRecordS
    [ADD_IRRIGATION_RECORD](state, newIrrigationRecord){
        state.allIrrigationRecords.push(newIrrigationRecord)
    },

   
  

    [GET_FILTERED_IRRIGATION_START_TIME](state, payload){
        state.filteredIrrigationStartTime= payload
    },

    [GET_FILTERED_IRRIGATION_END_TIME](state, payload){
        state.filteredIrrigationEndTime= payload
    },

    //------------------------------------AGRO MUTATIONS---------------------------------------------//
    [GET_ALL_IRRIGATION_RECORDS](state, payload){
        state.allIrrigationRecords = payload
    },

    [GET_ALL_FILTERED_IRRIGATION_RECORDS](state, payload){
        state.allFilteredIrrigationRecords = payload
    },




   

    //------------------------------------------------------------------------------------//

   
       
}

export const actions = {

    
 //GET ALL AgroRecordS
    async getAllIrrigationRecords({ state,commit,rootState,rootGetters }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

          const users =  rootGetters['users/allUsers']

          const loggedInUser = rootGetters['users/loggedInUser']

        

           let userEmail = loggedInUser.email;
           const {data: response} = await api.get(`/irrigation/allIrrigationRecords`)

        
           if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Admin" )) ){
            if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Manager" )) ){

                const customeUserRecords = response.data.filter( cur=>
                    cur.createdBy === this.$auth.user.email
                          )

                          commit(GET_ALL_IRRIGATION_RECORDS, customeUserRecords);

            }
        }

        else{
   
           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_IRRIGATION_RECORDS, response.data);

        }
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

     async getFilteredIrrigationRecords({ state,commit,rootState,rootGetters }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

          const users =  rootGetters['users/allUsers']

          const loggedInUser = rootGetters['users/loggedInUser']

        

           let userEmail = loggedInUser.email;

              const newFilterRecord = cloneDeep(state.irrigationFilterForm);

              newFilterRecord.startDate = newFilterRecord.startDate.toLocaleDateString();

              newFilterRecord.endDate = newFilterRecord.endDate.toLocaleDateString();

              console.log(newFilterRecord.startDate);
              console.log(newFilterRecord.endDate);
            
           
          //---   API REQUEST IS MADE AND RESULT IS STORED IN CONST
            const {data: response} = await api.get(`/irrigation/allIrrigationRecords`)

            if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Admin" )) ){
                if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Manager" )) ){
                const customeUserRecords = response.data.filter( cur=>
                    cur.createdBy === this.$auth.user.email
                          )

                          const filteredIrrigationConsultsRecords = customeUserRecords.filter( at => 
                            at.date >= newFilterRecord.startDate && at.date <= newFilterRecord.endDate
                            );
                   
                          
                               commit(GET_FILTERED_IRRIGATION_START_TIME, newFilterRecord.startDate);
                   
                               commit(GET_FILTERED_IRRIGATION_END_TIME, newFilterRecord.endDate);
                   
                               commit(GET_ALL_FILTERED_IRRIGATION_RECORDS, filteredIrrigationConsultsRecords.length);
                }
            }
    


            else{
                const filteredIrrigationConsultsRecords = response.data.filter( at => 
                    at.date >= newFilterRecord.startDate && at.date <= newFilterRecord.endDate
                    );
           
                  
                       commit(GET_FILTERED_IRRIGATION_START_TIME, newFilterRecord.startDate);
           
                       commit(GET_FILTERED_IRRIGATION_END_TIME, newFilterRecord.endDate);
           
                       commit(GET_ALL_FILTERED_IRRIGATION_RECORDS, filteredIrrigationConsultsRecords.length);
            }
         

         
        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    //ADD NEW IRRIGATIONRecord TO ALL IRRIGATIONRecordS
    async addNewIrrigationRecord({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newIrrigationRecord = cloneDeep(state.irrigationForm);

        //     newIrrigationRecord.date = state.IrrigationForm.date.toLocaleDateString();



         newIrrigationRecord.createdBy = this.$auth.user.email;
     
           
           console.log(newIrrigationRecord);

           
            const response = await api.post(`/irrigation/addNewIrrigationRecord`, newIrrigationRecord);

            console.log(response.data);

            commit(ADD_IRRIGATION_RECORD, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    

    
        
      

  

}


  
    
