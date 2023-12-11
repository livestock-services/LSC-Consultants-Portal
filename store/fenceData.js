import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { 
        ADD_FENCE_RECORD,
        
        GET_ALL_FENCE_RECORDS,
        GET_ALL_FILTERED_FENCE_RECORDS,

        GET_FILTERED_FENCE_START_TIME,
        GET_FILTERED_FENCE_END_TIME,
        SET_SELECTED_FENCE_RECORD,
        SET_LOADING,
        
        // GET_ALL_FENCE_CONSULTS_RECORDS,
        // GET_ALL_FENCE_SALES_RECORDS,
        
       
       
    } from '@/helpers/mutation-types'

export const state = () => ({

    loading: false,
    filteredFenceStartTime:[],
    filteredFenceEndTime:[],

    allFenceRecords:[],
    allFilteredFenceRecords:[],
    selectedFenceRecord:null,
    // allFenceConsultsRecords:[],
    // allFenceSalesRecords:[],
    

    fenceForm:{
        fenceConsultingPerson:null,
        fenceOtherConsultingPerson:null,
        fenceClientName:null,
        fenceClientPhoneNumber:null,
        fenceClientLocation:null,
        fenceClientTown:null,
        fenceClientComments:null,
        // FenceCategory:null,
        date:new Date()
       // createdBy:null
        
    },

    fenceFilterForm:{
        startDate:null,
        endDate:null
    },

    

})

    


export const getters = {
    getField,

    loading(state) {
        return state.loading
    },
    selectedFenceRecord(state) {
        return state.selectedFenceRecord
      },


      filteredFenceStartTime(state){
        return state.filteredFenceStartTime
      },

      filteredFenceEndTime(state){
        return state.filteredFenceEndTime
      },
      //---------------------Fence CONSULTS GETTERS--------------------------------------------//

    allFenceRecords(state){
        return state.allFenceRecords
    },

    allFilteredFenceRecords(state){
        return state.allFilteredFenceRecords
    },

    
        
  //----------------------------------------END OF AGRO SECTION----------------------------------------//

}


export const mutations = {

    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  

    //MUTATIONS FOR ADDING, SETTING AND GETTING AgroRecordS
    [ADD_FENCE_RECORD](state, newFenceRecord){
        state.allFenceRecords.push(newFenceRecord)
    },

   
    [SET_SELECTED_FENCE_RECORD](state, newFenceRecord) {
        state.selectedFenceRecord = newFenceRecord
      },

    [GET_FILTERED_FENCE_START_TIME](state, payload){
        state.filteredFenceStartTime= payload
    },

    [GET_FILTERED_FENCE_END_TIME](state, payload){
        state.filteredFenceEndTime= payload
    },

    //------------------------------------AGRO MUTATIONS---------------------------------------------//
    [GET_ALL_FENCE_RECORDS](state, payload){
        state.allFenceRecords = payload
    },

    [GET_ALL_FILTERED_FENCE_RECORDS](state, payload){
        state.allFilteredFenceRecords = payload
    },



    

    // [GET_ALL_FENCE_CONSULTS_RECORDS](state, payload){
    //     state.allFenceConsultsRecords = payload
    // },

    // [GET_ALL_FENCE_SALES_RECORDS](state, payload){
    //     state.allFenceSalesRecords = payload
    // },


   

    //------------------------------------------------------------------------------------//

   
       
}

export const actions = {

    
 //GET ALL AgroRecordS
    async getAllFenceRecords({ state,commit,rootState,rootGetters }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

          const users =  rootGetters['users/allUsers']

          const loggedInUser = rootGetters['users/loggedInUser']

         // console.log(users);
         // console.log(loggedInUser)

           let userEmail = loggedInUser.email;
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/fence/allFenceRecords`)


           
           const option = loggedInUser.role;

           switch (option) {
            case 'Admin':
               commit(GET_ALL_FENCE_RECORDS, response.data);
                break;

            case 'Manager':
               commit(GET_ALL_FENCE_RECORDS, response.data);
            break;
           
            default:
                const customeUserRecords = response.data.filter( cur=>
                    cur.createdBy === this.$auth.user.email
                          )

                      console.log(customeUserRecords);
                      console.log(customeUserRecords.length)
                      commit(GET_ALL_FENCE_RECORDS, customeUserRecords);

                break;
           }



           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

     async getFilteredFenceRecords({ state,commit,rootState,rootGetters }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

          const users =  rootGetters['users/allUsers']

          const loggedInUser = rootGetters['users/loggedInUser']

         // console.log(users);
         // console.log(loggedInUser)

           let userEmail = loggedInUser.email;

              const newFilterRecord = cloneDeep(state.fenceFilterForm);

              newFilterRecord.startDate = newFilterRecord.startDate.toLocaleDateString('en-US');

              newFilterRecord.endDate = newFilterRecord.endDate.toLocaleDateString('en-US');

            //   console.log(newFilterRecord.startDate.toLocaleDateString('en-US'));
            //  console.log(newFilterRecord.endDate.toLocaleDateString('en-US'));

             console.log(newFilterRecord.startDate);
             console.log(newFilterRecord.endDate);
            
           
          //---   API REQUEST IS MADE AND RESULT IS STORED IN CONST
            const {data: response} = await api.get(`/fence/allFenceRecords`)


            
            const option = loggedInUser.role;

           switch (option) {
            case 'Admin':
                let filteredFenceConsultsRecords = response.data.filter( at => 
                new Date(at.date) >= new Date(newFilterRecord.startDate) && new Date(at.date) <= new Date(newFilterRecord.endDate)
                );
       
              
       
                   commit(GET_FILTERED_FENCE_START_TIME, newFilterRecord.startDate);
       
                   commit(GET_FILTERED_FENCE_END_TIME, newFilterRecord.endDate);
       
                   commit(GET_ALL_FILTERED_FENCE_RECORDS, filteredFenceConsultsRecords.length);
                break;

            case 'Manager':
                
                 filteredFenceConsultsRecords = response.data.filter( at => 
                new Date(at.date) >= new Date(newFilterRecord.startDate) && new Date(at.date) <= new Date(newFilterRecord.endDate)
                );
       
              
       
                   commit(GET_FILTERED_FENCE_START_TIME, newFilterRecord.startDate);
       
                   commit(GET_FILTERED_FENCE_END_TIME, newFilterRecord.endDate);
       
                   commit(GET_ALL_FILTERED_FENCE_RECORDS, filteredFenceConsultsRecords.length);
            break;
           
            default:
                let customeUserRecords = response.data.filter( cur=>
                    cur.createdBy === this.$auth.user.email
                          )
    
                     
    
                         filteredFenceConsultsRecords = customeUserRecords.filter(at => 
                          new Date(at.date) >= new Date(newFilterRecord.startDate)  && new Date(at.date) <= new Date(newFilterRecord.endDate)
                          );
                          
    
                           
                           
                               commit(GET_FILTERED_FENCE_START_TIME, newFilterRecord.startDate);
                   
                               commit(GET_FILTERED_FENCE_END_TIME, newFilterRecord.endDate);
                   
                               commit(GET_ALL_FILTERED_FENCE_RECORDS, filteredFenceConsultsRecords.length);

                break;
           }

          
        
        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    //ADD NEW FenceRecord TO ALL FenceRecordS
    async addNewFenceRecord({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newFenceRecord = cloneDeep(state.fenceForm);

        //     newFenceRecord.date = state.FenceForm.date.toLocaleDateString();



         newFenceRecord.createdBy = this.$auth.user.email;
       
           
            const response = await api.post(`/fence/addNewFenceRecord`, newFenceRecord);

           // console.log(response.data);

            commit(ADD_FENCE_RECORD, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    selectFenceRecord({ commit }, newFenceRecord) {
        try {
            commit(SET_SELECTED_FENCE_RECORD, newFenceRecord)
            console.log(newFenceRecord._id)
        } catch (error) {
            console.log('Error')
        }
        
      },

    

    
        
      

  

}


  
    
