import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { 
        ADD_WATER_PUMP_RECORD,
        
        GET_ALL_WATER_PUMP_RECORDS,
        GET_ALL_FILTERED_WATER_PUMP_RECORDS,

        GET_FILTERED_WATER_PUMP_START_TIME,
        GET_FILTERED_WATER_PUMP_END_TIME,
        
        SET_LOADING,
        
        // GET_ALL_WATER_PUMP_CONSULTS_RECORDS,
        // GET_ALL_WATER_PUMP_SALES_RECORDS,
        
       
       
    } from '@/helpers/mutation-types'

export const state = () => ({

    loading: false,
    filteredWaterPumpStartTime:[],
    filteredWaterPumpEndTime:[],

    allWaterPumpRecords:[],
    allFilteredWaterPumpRecords:[],

    // allWaterPumpConsultsRecords:[],
    // allWaterPumpSalesRecords:[],
    

    waterPumpForm:{
        waterPumpClientName:null,
        waterPumpClientPhoneNumber:null,
        waterPumpClientLocation:null,
        waterPumpClientTown:null,
        waterPumpClientComments:null,
        // WaterPumpCategory:null,
        date:new Date()
       // createdBy:null
        
    },

   waterPumpFilterForm:{
        startDate:null,
        endDate:null
    }

})

    


export const getters = {
    getField,

    loading(state) {
        return state.loading
    },
    

      filteredWaterPumpStartTime(state){
        return state.filteredWaterPumpStartTime
      },

      filteredWaterPumpEndTime(state){
        return state.filteredWaterPumpEndTime
      },
      //---------------------AGRO CONSULTS GETTERS--------------------------------------------//

    allWaterPumpRecords(state){
        return state.allWaterPumpRecords
    },

    allFilteredWaterPumpRecords(state){
        return state.allFilteredWaterPumpRecords
    },

    
        
  //----------------------------------------END OF AGRO SECTION----------------------------------------//

}


export const mutations = {

    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  

    //MUTATIONS FOR ADDING, SETTING AND GETTING AgroRecordS
    [ADD_WATER_PUMP_RECORD](state, newWaterPumpRecord){
        state.allWaterPumpRecords.push(newWaterPumpRecord)
    },

   
  

    [GET_FILTERED_WATER_PUMP_START_TIME](state, payload){
        state.filteredWaterPumpStartTime= payload
    },

    [GET_FILTERED_WATER_PUMP_END_TIME](state, payload){
        state.filteredWaterPumpEndTime= payload
    },

    //------------------------------------AGRO MUTATIONS---------------------------------------------//
    [GET_ALL_WATER_PUMP_RECORDS](state, payload){
        state.allWaterPumpRecords = payload
    },

    [GET_ALL_FILTERED_WATER_PUMP_RECORDS](state, payload){
        state.allFilteredWaterPumpRecords = payload
    },



    

    // [GET_ALL_WATER_PUMP_CONSULTS_RECORDS](state, payload){
    //     state.allWaterPumpConsultsRecords = payload
    // },

    // [GET_ALL_WATER_PUMP_SALES_RECORDS](state, payload){
    //     state.allWaterPumpSalesRecords = payload
    // },


   

    //------------------------------------------------------------------------------------//

   
       
}

export const actions = {

    
 //GET ALL AgroRecordS
    async getAllWaterPumpRecords({ state,commit,rootState,rootGetters }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

          const users =  rootGetters['users/allUsers']

          const loggedInUser = rootGetters['users/loggedInUser']

        

           let userEmail = loggedInUser.email;
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/waterPump/allWaterPumpRecords`)

           if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Admin" )) ){
            if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Manager" )) ){

                const customeUserRecords = response.data.filter( cur=>
                    cur.createdBy === this.$auth.user.email
                          )

                          commit(GET_ALL_WATER_PUMP_RECORDS, customeUserRecords);

            }
        }

        else{

            commit(GET_ALL_WATER_PUMP_RECORDS, response.data);

        }

   
           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           
       
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

     async getFilteredWaterPumpRecords({ state,commit,rootState,rootGetters }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

          const users =  rootGetters['users/allUsers']

          const loggedInUser = rootGetters['users/loggedInUser']

        

           let userEmail = loggedInUser.email;

              const newFilterRecord = cloneDeep(state.waterPumpFilterForm);

              newFilterRecord.startDate = newFilterRecord.startDate.toLocaleDateString();

              newFilterRecord.endDate = newFilterRecord.endDate.toLocaleDateString();

              console.log(newFilterRecord.startDate);
              console.log(newFilterRecord.endDate);
            
           
          //---   API REQUEST IS MADE AND RESULT IS STORED IN CONST
            const {data: response} = await api.get(`/waterPump/allWaterPumpRecords`)

            if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Admin" )) ){
                if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Manager" )) ){
    
                    const customeUserRecords = response.data.filter( cur=>
                        cur.createdBy === this.$auth.user.email
                              )

                              const filteredWaterPumpConsultsRecords = customeUserRecords.filter( at => 
                                at.date >= newFilterRecord.startDate && at.date <= newFilterRecord.endDate
                                );
                       
                            
                       
                              
                               
                                console.log(filteredWaterPumpConsultsRecords.length);
                       
                             //   console.log(filteredWaterPumpSalesRecordsRecords.length);
                       
                       
                                   console.log(customeUserRecords);
                       
                                 //  RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
                                 //  commit(GET_ALL_WATER_PUMP_RECORDS, response.data);
                       
                                   commit(GET_FILTERED_WATER_PUMP_START_TIME, newFilterRecord.startDate);
                       
                                   commit(GET_FILTERED_WATER_PUMP_END_TIME, newFilterRecord.endDate);
                       
                                   commit(GET_ALL_FILTERED_WATER_PUMP_RECORDS, filteredWaterPumpConsultsRecords.length);
                       

                    }
                }


                else{

                    const filteredWaterPumpConsultsRecords = response.data.filter( bt => 
                        bt.date >= newFilterRecord.startDate && bt.date <= newFilterRecord.endDate
                        );
               
                      
                       
                        console.log(filteredWaterPumpConsultsRecords.length);
               
                   
               
                           commit(GET_FILTERED_WATER_PUMP_START_TIME, newFilterRecord.startDate);
               
                           commit(GET_FILTERED_WATER_PUMP_END_TIME, newFilterRecord.endDate);
               
                           commit(GET_ALL_FILTERED_WATER_PUMP_RECORDS, filteredWaterPumpConsultsRecords.length);
               
                       
                }
          

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    //ADD NEW WaterPumpRecord TO ALL WaterPumpRecordS
    async addNewWaterPumpRecord({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newWaterPumpRecord = cloneDeep(state.waterPumpForm);

        //     newWaterPumpRecord.date = state.WaterPumpForm.date.toLocaleDateString();



         newWaterPumpRecord.createdBy = this.$auth.user.email;
        //    console.log(newWaterPumpRecord.date);
           
           console.log(newWaterPumpRecord);

           
            const response = await api.post(`/waterPump/addNewWaterPumpRecord`, newWaterPumpRecord);

            console.log(response.data);

            commit(ADD_WATER_PUMP_RECORD, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    

    
        
      

  

}


  
    
