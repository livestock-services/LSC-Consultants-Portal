import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { ADD_MORTALITY,  
    SET_ALL_MORTALITIES, 
    GET_ALL_MORTALITIES,  
    SET_LOADING,
    SET_SELECTED_MORTALITY 
   } from '@/helpers/mutation-types'

export const state = () => ({

    loading: false,
    allMortalities:[],
   
    selectedMortality: null,

    mortalitiesForm: {
        earTagID:null,
        causeOfDeath:null,
        dateOfDeath:null,
        mortalityRemarks:null,
        createdBy:null        
   
 },

})

    


export const getters = {
    getField,

    loading(state) {
        return state.loading
    },
    selectedMortality(state) {
        return state.selectedMortality
      },

    allMortalities(state){
        return state.allMortalities
    },
    
  

}


export const mutations = {

    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  

    //MUTATIONS FOR ADDING, SETTING AND GETTING MortalitiesS
    [ADD_MORTALITY](state, newMortality){
        state.allMortalities.push(newMortality)
    },


    [SET_SELECTED_MORTALITY](state, newMortality) {
        state.selectedMortality = newMortality
      },
    [SET_ALL_MORTALITIES](state, payload) {
        state.allMortalities = payload
    },
    [GET_ALL_MORTALITIES](state, payload){
        state.allMortalities = payload
    },

}

export const actions = {

    async load({ commit }) {
        try {
            commit(SET_LOADING, true)
           const newLoad= await api.get(`/mortalities/allMortalities`)

           if (newLoad.data.createdBy === this.$auth.user.email){

            console.log(newLoad);
          }

           // await dispatch('getInactivePolicies')
        console.log(newLoad.data)
             commit(SET_ALL_MORTALITIES, newLoad.data);
            //   ...getters.allPolicies,
            //   ...getters.inactivePolicies,
            commit(SET_LOADING, false);
            
        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },
 //GET ALL MortalitiesS
    async getAllMortalities({ commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: allMortalities} = await api.get(`/mortalities/allMortalities`)

           const { data:fetchUsers } = await api.get(`/auth/allUsers`)
            
          
           

           console.log(allMortalities.data);
           console.log(fetchUsers.data)
         

           //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
           const filteredMortalities = allMortalities.data.filter( t => 
           t.createdBy === this.$auth.user.email
          );


          console.log(filteredMortalities);




           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_MORTALITIES, filteredMortalities);

       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    //ADD NEW Mortalities TO ALL MortalitiesS
    async addNewMortality({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newMortality = cloneDeep(state.mortalitiesForm);

            newMortality.createdBy = this.$auth.user.email;
            newMortality.dateOfDeath = newMortality.dateOfDeath.toLocaleDateString()
           
           console.log(newMortality);

           
            const response = await api.post(`/mortalities/addNewMortality`, newMortality);

            console.log(response.data);

            commit(ADD_MORTALITY, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    

    selectMortality({ commit }, newMortality) {
        try {
            commit(SET_SELECTED_MORTALITY, newMortality)
            console.log(newMortality._id)
        } catch (error) {
            console.log('Error')
        }
        
      },

}


  
    
