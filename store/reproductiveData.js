import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { ADD_REPRODUCTIVE_RECORD,
   
    SET_ALL_REPRODUCTIVE_RECORDS, 
    GET_ALL_REPRODUCTIVE_RECORDS,  
    SET_LOADING,
    SET_SELECTED_REPRODUCTIVE_RECORD 
   } from '@/helpers/mutation-types'

export const state = () => ({

    loading: false,
    allReproductives:[],
  
    selectedReproductive: null,

    reproductiveForm: {
      
        earTagID:null,
        ageAtFirstCalving:null,
        numberOfServicesPerInsemination:null,         
        calvingInterval:null,
        calvingEaseIndex:null,
        abortionsPerLifecycle:null,
        createdBy:null
},

})

    


export const getters = {
    getField,

    loading(state) {
        return state.loading
    },
    selectedReproductive(state) {
        return state.selectedReproductive
      },

    allReproductives(state){
        return state.allReproductives
    },
    


}


export const mutations = {

    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  

    //MUTATIONS FOR ADDING, SETTING AND GETTING ReproductiveS
    [ADD_REPRODUCTIVE_RECORD](state, newReproductive){
        state.allReproductives.push(newReproductive)
    },

  
    [SET_SELECTED_REPRODUCTIVE_RECORD](state, newReproductive) {
        state.selectedReproductive = newReproductive
      },
    [SET_ALL_REPRODUCTIVE_RECORDS](state, payload) {
        state.allReproductives = payload
    },
    [GET_ALL_REPRODUCTIVE_RECORDS](state, payload){
        state.allReproductives = payload
    },

}

export const actions = {

    async load({ commit }) {
        try {
            commit(SET_LOADING, true)
           const newLoad= await api.get(`/reproductiveRecords/allReproductiveRecords`)

           if (newLoad.data.createdBy === this.$auth.user.email){

            console.log(newLoad);
          }

           // await dispatch('getInactivePolicies')
        console.log(newLoad.data)
             commit(SET_ALL_REPRODUCTIVE_RECORDS, newLoad.data);
            //   ...getters.allPolicies,
            //   ...getters.inactivePolicies,
            commit(SET_LOADING, false);
            
        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },
 //GET ALL ReproductiveS
    async getAllReproductives({ commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: allReproductives} = await api.get(`/reproductiveRecords/allReproductiveRecords`)

           const { data:fetchUsers } = await api.get(`/auth/allUsers`)
            
          
           

           console.log(allReproductives.data);
           console.log(fetchUsers.data)
         

           //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
           const filteredReproductives = allReproductives.data.filter( t => 
           t.createdBy === this.$auth.user.email
          );


          console.log(filteredReproductives);




           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_REPRODUCTIVE_RECORDS, filteredReproductives);

       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    //ADD NEW Reproductive TO ALL ReproductiveS
    async addNewReproductive({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newReproductive = cloneDeep(state.reproductiveForm);
           newReproductive.numberOfServicesPerInsemination = parseInt(newReproductive.numberOfServicesPerInsemination)
           newReproductive.abortionsPerLifecycle = parseInt(newReproductive.abortionsPerLifecycle)

            newReproductive.createdBy = this.$auth.user.email;
           
           console.log(newReproductive);

           
            const response = await api.post(`/reproductiveRecords/addNewReproductiveRecord`, newReproductive);

            console.log(response.data);

            commit(ADD_REPRODUCTIVE_RECORD, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    

    selectReproductive({ commit }, newReproductive) {
        try {
            commit(SET_SELECTED_REPRODUCTIVE_RECORD, newReproductive)
            console.log(newReproductive._id)
        } catch (error) {
            console.log('Error')
        }
        
      },

}


  
    
