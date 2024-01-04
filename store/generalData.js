import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { 
        ADD_GENERAL_RECORD,
        
        GET_ALL_GENERAL_RECORDS,
        GET_ALL_FILTERED_GENERAL_RECORDS,
        SET_SELECTED_GENERAL_RECORD,
        GET_FILTERED_GENERAL_START_TIME,
        GET_FILTERED_GENERAL_END_TIME,
        
        SET_LOADING,
        
        // GET_ALL_GENERAL_CONSULTS_RECORDS,
        // GET_ALL_GENERAL_SALES_RECORDS,
        
       
       
    } from '@/helpers/mutation-types'

export const state = () => ({

    loading: false,
    filteredGeneralStartTime:[],
    filteredGeneralEndTime:[],

    allGeneralRecords:[],
    allFilteredGeneralRecords:[],
    selectedGeneralRecord:null,
    // allGeneralConsultsRecords:[],
    // allGeneralSalesRecords:[],
    

    generalForm:{
        
        generalClientName:null,
        generalClientPhoneNumber:null,
        generalClientLocation:null,
        generalClientTown:null,
        generalContactPoint:null,
        generalClientComments:null,
        // GeneralCategory:null,
        date:new Date()
       // createdBy:null
        
    },

    generalFilterForm:{
        startDate:null,
        endDate:null
    }

})

export const getters = {
    getField,

    loading(state) {
        return state.loading
    },
    
    selectedGeneralRecord(state) {
        return state.selectedGeneralRecord
      },


      filteredGeneralStartTime(state){
        return state.filteredGeneralStartTime
      },

      filteredGeneralEndTime(state){
        return state.filteredGeneralEndTime
      },
      //---------------------AGRO CONSULTS GETTERS--------------------------------------------//

    allGeneralRecords(state){
        return state.allGeneralRecords
    },

    allFilteredGeneralRecords(state){
        return state.allFilteredGeneralRecords
    },

    
        
  //----------------------------------------END OF AGRO SECTION----------------------------------------//

}


export const mutations = {

    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  

    //MUTATIONS FOR ADDING, SETTING AND GETTING GeneralRecordS
    [ADD_GENERAL_RECORD](state, newGeneralRecord){
        state.allGeneralRecords.push(newGeneralRecord)
    },

   
    [SET_SELECTED_GENERAL_RECORD](state, newGeneralRecord) {
        state.selectedGeneralRecord = newGeneralRecord
      },

    [GET_FILTERED_GENERAL_START_TIME](state, payload){
        state.filteredGeneralStartTime= payload
    },

    [GET_FILTERED_GENERAL_END_TIME](state, payload){
        state.filteredGeneralEndTime= payload
    },

    //------------------------------------AGRO MUTATIONS---------------------------------------------//
    [GET_ALL_GENERAL_RECORDS](state, payload){
        state.allGeneralRecords = payload
    },

    [GET_ALL_FILTERED_GENERAL_RECORDS](state, payload){
        state.allFilteredGeneralRecords = payload
    },



    

    // [GET_ALL_GENERAL_CONSULTS_RECORDS](state, payload){
    //     state.allGeneralConsultsRecords = payload
    // },

    // [GET_ALL_GENERAL_SALES_RECORDS](state, payload){
    //     state.allGeneralSalesRecords = payload
    // },


   

    //------------------------------------------------------------------------------------//

   
       
}

export const actions = {

    
 //GET ALL GeneralRecordS
    async getAllGeneralRecords({ state,commit,rootState,rootGetters }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

          const users =  rootGetters['users/allUsers']

          const loggedInUser = rootGetters['users/loggedInUser']

         // console.log(users);
         // console.log(loggedInUser)

           let userEmail = loggedInUser.email;

           const {data: response} = await api.get(`/general/allGeneralRecords`)


           
           const option = loggedInUser.role;

           switch (option) {
            case 'Admin':
                commit(GET_ALL_GENERAL_RECORDS, response.data);
                break;  

            case 'Manager':
                commit(GET_ALL_GENERAL_RECORDS, response.data);
            break;
           
            default:
                const customeUserRecords = response.data.filter( cur=>
                    cur.createdBy === this.$auth.user.email
                          )

                      console.log(customeUserRecords);
                      console.log(customeUserRecords.length)
                      commit(GET_ALL_GENERAL_RECORDS, customeUserRecords);

                break;
           }

        
         
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

     async getFilteredGeneralRecords({ state,commit,rootState,rootGetters }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

          const users =  rootGetters['users/allUsers']

          const loggedInUser = rootGetters['users/loggedInUser']

         // console.log(users);
         // console.log(loggedInUser)

           let userEmail = loggedInUser.email;

              const newFilterRecord = cloneDeep(state.generalFilterForm);

            var  startDate = newFilterRecord.startDate.toLocaleDateString('en-US');

             var endDate = newFilterRecord.endDate.toLocaleDateString('en-US');

              console.log(startDate);
              console.log(endDate);
            
           
          //---   API REQUEST IS MADE AND RESULT IS STORED IN CONST
            const {data: response} = await api.get(`/general/allGeneralRecords`)


            
            const option = loggedInUser.role;

           switch (option) {
            case 'Admin':
                 let filteredGeneralConsultsRecords = response.data.filter( at => 
                        new Date(at.date) >= new Date(startDate) && new Date(at.date) <= new Date(endDate)
                        );

                     

                        console.log(filteredGeneralConsultsRecords);
               
               
                           commit(GET_FILTERED_GENERAL_START_TIME, startDate);
               
                           commit(GET_FILTERED_GENERAL_END_TIME, endDate);
               
                           commit(GET_ALL_FILTERED_GENERAL_RECORDS, filteredGeneralConsultsRecords.length);
                break;

            case 'Manager':
                  filteredGeneralConsultsRecords = response.data.filter( at => 
                        new Date(at.date) >= new Date(startDate) && new Date(at.date) <= new Date(endDate)
                        );

                     

                        console.log(filteredGeneralConsultsRecords);
               
               
                           commit(GET_FILTERED_GENERAL_START_TIME, startDate);
               
                           commit(GET_FILTERED_GENERAL_END_TIME, endDate);
               
                           commit(GET_ALL_FILTERED_GENERAL_RECORDS, filteredGeneralConsultsRecords.length);
            break;
           
            default:

            let customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )

                 filteredGeneralConsultsRecords = customeUserRecords.filter( at => 
                    new Date(at.date) >= new Date(newFilterRecord.startDate) && new Date(at.date) <= new Date(newFilterRecord.endDate)
                    );
           
           
                       commit(GET_FILTERED_GENERAL_START_TIME, newFilterRecord.startDate);
           
                       commit(GET_FILTERED_GENERAL_END_TIME, newFilterRecord.endDate);
           
                       commit(GET_ALL_FILTERED_GENERAL_RECORDS, filteredGeneralConsultsRecords.length);
                break;
           }

             
          

 
        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    //ADD NEW GeneralRecord TO ALL GeneralRecordS
    async addNewGeneralRecord({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newGeneralRecord = cloneDeep(state.generalForm);

        //     newGeneralRecord.date = state.GeneralForm.date.toLocaleDateString();



         newGeneralRecord.createdBy = this.$auth.user.email;
        //    console.log(newGeneralRecord.date);
           
           console.log(newGeneralRecord);

           
            const response = await api.post(`/general/addNewGeneralRecord`, newGeneralRecord);

            console.log(response.data);

            commit(ADD_GENERAL_RECORD, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    

    selectGeneralRecord({ commit }, newGeneralRecord) {
        try {
            commit(SET_SELECTED_GENERAL_RECORD, newGeneralRecord)
            console.log(newGeneralRecord._id)
        } catch (error) {
            console.log('Error')
        }
        
      },
        
      

  

}
