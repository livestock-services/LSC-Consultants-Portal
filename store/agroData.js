import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { 
        ADD_AGRO_RECORD,
        SET_ALL_AGRO_RECORDS, 
        GET_ALL_AGRO_RECORDS, 
        SET_LOADING,
        SET_SELECTED_AGRO_RECORD 
    } from '@/helpers/mutation-types'

export const state = () => ({

    loading: false,
    allAgroRecords:[],
   
    selectedAgroRecord: null,

    agroForm:{
        clientName:null,
        clientNumber:null,
        selectCategory:null,
        createdBy:null
        
    },

})

    


export const getters = {
    getField,

    loading(state) {
        return state.loading
    },
    selectedAgroRecord(state) {
        return state.selectedAgroRecord
      },

    allAgroRecords(state){
        return state.allAgroRecords
    },
    
  

}


export const mutations = {

    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  

    //MUTATIONS FOR ADDING, SETTING AND GETTING AgroRecordS
    [ADD_AGRO_RECORD](state, newAgroRecord){
        state.allAgroRecords.push(newAgroRecord)
    },

    [SET_SELECTED_AGRO_RECORD](state, newAgroRecord) {
        state.selectedAgroRecord = newAgroRecord
      },
    [SET_ALL_AGRO_RECORDS](state, payload) {
        state.allAgroRecords = payload
    },
    [GET_ALL_AGRO_RECORDS](state, payload){
        state.allAgroRecords = payload
    },

   
       
}

export const actions = {

    async load({ commit }) {
        try {
            commit(SET_LOADING, true)
           const newLoad= await api.get(`/AgroRecords/allAgroRecords`)

           if (newLoad.data.createdBy === this.$auth.user.email){

            console.log(newLoad);
          }

           // await dispatch('getInactivePolicies')
        console.log(newLoad.data)
             commit(SET_ALL_AGRO_RECORDS, newLoad.data);
            //   ...getters.allPolicies,
            //   ...getters.inactivePolicies,
            commit(SET_LOADING, false);
            
        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },
 //GET ALL AgroRecordS
    async getAllAgroRecords({ commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: allAgroRecords} = await api.get(`/AgroRecords/allAgroRecords`)

           const { data:fetchUsers } = await api.get(`/auth/allUsers`)
            
          
           

           console.log(allAgroRecords.data);
           console.log(fetchUsers.data)
         

           //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
           const filteredAgroRecords = allAgroRecords.data.filter( t => 
           t.createdBy === this.$auth.user.email
          );


          console.log(filteredAgroRecords);




           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_AGRO_RECORDS, filteredAgroRecords);

       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    //ADD NEW AgroRecord TO ALL AgroRecordS
    async addNewAgroRecord({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newAgroRecord = cloneDeep(state.agroForm);

            newAgroRecord.createdBy = this.$auth.user.email;
           
           
           console.log(newAgroRecord);

           
            const response = await api.post(`/AgroRecords/addNewAgroRecord`, newAgroRecord);

            console.log(response.data);

            commit(ADD_AGRO_RECORD, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    

    selectAgroRecord({ commit }, newAgroRecord) {
        try {
            commit(SET_SELECTED_AGRO_RECORD, newAgroRecord)
            console.log(newAgroRecord._id)
        } catch (error) {
            console.log('Error')
        }
        
      },

  

}


  
    
