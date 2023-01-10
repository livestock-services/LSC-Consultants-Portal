import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { ADD_TREATMENT,
    
    SET_ALL_TREATMENTS, 
    GET_ALL_TREATMENTS,
   
    SET_LOADING,
    SET_SELECTED_TREATMENT 
   } from '@/helpers/mutation-types'

export const state = () => ({

    loading: false,
    allTreatments:[],
    selectedTreatment: null,

    treatmentForm: {
      
        earTagID:null,
        symptomsDisplayed:null,
        diagnosis:null,
        drugsAdministered:null,
        treatmentRemarks:null,
        withdrawalPeriod:null ,
        createdBy:null        
   
 },

})

    


export const getters = {
    getField,

    loading(state) {
        return state.loading
    },
    selectedTreatment(state) {
        return state.selectedTreatment
      },

    allTreatments(state){
        return state.allTreatments
    },
    
  

}


export const mutations = {

    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  

    //MUTATIONS FOR ADDING, SETTING AND GETTING TreatmentS
    [ADD_TREATMENT](state, newTreatment){
        state.allTreatments.push(newTreatment)
    },

   
    [SET_SELECTED_TREATMENT](state, newTreatment) {
        state.selectedTreatment = newTreatment
      },
    [SET_ALL_TREATMENTS](state, payload) {
        state.allTreatments = payload
    },
    [GET_ALL_TREATMENTS](state, payload){
        state.allTreatments = payload
    },

  
  

}

export const actions = {

    async load({ commit }) {
        try {
            commit(SET_LOADING, true)
           const newLoad= await api.get(`/treatments/AllTreatments`)

           if (newLoad.data.createdBy === this.$auth.user.email){

            console.log(newLoad);
          }

           // await dispatch('getInactivePolicies')
        console.log(newLoad.data)
             commit(SET_ALL_TREATMENTS, newLoad.data);
            //   ...getters.allPolicies,
            //   ...getters.inactivePolicies,
            commit(SET_LOADING, false);
            
        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },
 //GET ALL TreatmentS
    async getAllTreatments({ commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: allTreatments} = await api.get(`/treatments/AllTreatments`)

           const { data:fetchUsers } = await api.get(`/auth/allUsers`)
            
            const {data: allCattle} = await api.get(`/cattle/allCattle`)

            const filteredCattle = allCattle.data.filter( c => 
            c.createdBy === this.$auth.user.email
            );

        //    const filteredEarTags = filteredCattle.filter( cr => 
        //     cr.earTagID === newTreatment.earTagID
        //    );

        //    console.log(filteredEarTags);
           

           console.log(allTreatments.data);
           console.log(fetchUsers.data)
         

           //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
           const filteredTreatments = allTreatments.data.filter( t => 
           t.createdBy === this.$auth.user.email
          );

          const filteredTreatmentsByEarTag = allTreatments.data.filter( t => 
            t.earTagID === allCattle.data.earTagID
           );
 


          console.log(filteredTreatments);
          console.log(filteredTreatmentsByEarTag);




           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_TREATMENTS, filteredTreatments);

       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    //ADD NEW Treatment TO ALL TreatmentS
    async addNewTreatment({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newTreatment = cloneDeep(state.treatmentForm);

            newTreatment.createdBy = this.$auth.user.email;
            
           console.log(newTreatment);

          



            const response = await api.post(`/treatments/addNewTreatment`, newTreatment);

            

            console.log(response.data);

            console.log(response.data);

            commit(ADD_TREATMENT, response.data);
           
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    

    selectTreatment({ commit }, newTreatment) {
        try {
            commit(SET_SELECTED_TREATMENT, newTreatment)
            console.log(newTreatment._id)
        } catch (error) {
            console.log('Error')
        }
        
      },

     

}


  
    
