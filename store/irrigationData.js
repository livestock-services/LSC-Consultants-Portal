import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { 
        ADD_IRRIGATION_RECORD,
        
        GET_ALL_IRRIGATION_RECORDS,
        GET_ALL_FILTERED_IRRIGATION_RECORDS,
        SET_SELECTED_IRRIGATION_RECORD,
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

    selectedIrrigationRecord:null,
    allIrrigationRecords:[],
    allFilteredIrrigationRecords:[],

    // allirrigationConsultsRecords:[],
    // allirrigationSalesRecords:[],
    

    irrigationForm:{
        irrigationConsultingPerson:null,
        irrigationOtherConsultingPerson:null,
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
    

    selectedIrrigationRecord(state) {
        return state.selectedIrrigationRecord
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

    [SET_SELECTED_IRRIGATION_RECORD](state, newIrrigationRecord) {
        state.selectedIrrigationRecord = newIrrigationRecord
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


           
           const option = loggedInUser.role;

           switch (option) {
            case 'Admin':
                 commit(GET_ALL_IRRIGATION_RECORDS, response.data);
                break;

            case 'Manager':
                 commit(GET_ALL_IRRIGATION_RECORDS, response.data);
            break;
           
            default:
                const customeUserRecords = response.data.filter( cur=>
                    cur.createdBy === this.$auth.user.email
                          )

                      console.log(customeUserRecords);
                      console.log(customeUserRecords.length)
                      commit(GET_ALL_IRRIGATION_RECORDS, customeUserRecords);

                break;
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

              newFilterRecord.startDate = newFilterRecord.startDate.toLocaleDateString('en-US');

              newFilterRecord.endDate = newFilterRecord.endDate.toLocaleDateString('en-US');

              console.log(newFilterRecord.startDate);
              console.log(newFilterRecord.endDate);
            
           
          //---   API REQUEST IS MADE AND RESULT IS STORED IN CONST
            const {data: response} = await api.get(`/irrigation/allIrrigationRecords`)

            
            const option = loggedInUser.role;

           switch (option) {
            case 'Admin':

                let filteredIrrigationConsultsRecords = response.data.filter( at => 
                    new Date(at.date) >= new Date(newFilterRecord.startDate) && new Date(at.date) <= new Date(newFilterRecord.endDate)
                    );
           
                  
                       commit(GET_FILTERED_IRRIGATION_START_TIME, newFilterRecord.startDate);
           
                       commit(GET_FILTERED_IRRIGATION_END_TIME, newFilterRecord.endDate);
           
                       commit(GET_ALL_FILTERED_IRRIGATION_RECORDS, filteredIrrigationConsultsRecords.length);
                break;

            case 'Manager':
                 filteredIrrigationConsultsRecords = response.data.filter( at => 
                    new Date(at.date) >= new Date(newFilterRecord.startDate) && new Date(at.date) <= new Date(newFilterRecord.endDate)
                    );
           
                  
                       commit(GET_FILTERED_IRRIGATION_START_TIME, newFilterRecord.startDate);
           
                       commit(GET_FILTERED_IRRIGATION_END_TIME, newFilterRecord.endDate);
           
                       commit(GET_ALL_FILTERED_IRRIGATION_RECORDS, filteredIrrigationConsultsRecords.length);
            break;
           
            default:
                let customeUserRecords = response.data.filter( cur=>
                    cur.createdBy === this.$auth.user.email
                          )

                      console.log(customeUserRecords);
                      console.log(customeUserRecords.length)

                       filteredIrrigationConsultsRecords = customeUserRecords.filter( at => 
                        new Date(at.date) >= new Date(newFilterRecord.startDate) && new Date(at.date) <= new Date(newFilterRecord.endDate)
                        );
               
                      
                           commit(GET_FILTERED_IRRIGATION_START_TIME, newFilterRecord.startDate);
               
                           commit(GET_FILTERED_IRRIGATION_END_TIME, newFilterRecord.endDate);
               
                           commit(GET_ALL_FILTERED_IRRIGATION_RECORDS, filteredIrrigationConsultsRecords.length);

                break;
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

    

    selectIrrigationRecord({ commit }, newIrrigationRecord) {
        try {
            commit(SET_SELECTED_IRRIGATION_RECORD, newIrrigationRecord)
            console.log(newIrrigationRecord._id)
        } catch (error) {
            console.log('Error')
        }
        
      },
        
      

  

}


  
    
