import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { ADD_SALE,

    SET_ALL_SALES, 
    GET_ALL_SALES, 
    SET_LOADING,
    SET_SELECTED_SALE 
   } from '@/helpers/mutation-types'

export const state = () => ({

    loading: false,
    allSales:[],
   
    selectedSale: null,

    salesForm: {
      
    totalAmountInLitres:null,
    sellingPrice:null,
    sellingDate:null,
    createdBy:null
         
                },

})

    


export const getters = {
    getField,

    loading(state) {
        return state.loading
    },
    selectedSale(state) {
        return state.selectedSale
      },

    allSales(state){
        return state.allSales
    },
    
  

}


export const mutations = {

    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  

    //MUTATIONS FOR ADDING, SETTING AND GETTING SaleS
    [ADD_SALE](state, newSale){
        state.allSales.push(newSale)
    },

   

    [SET_SELECTED_SALE](state, newSale) {
        state.selectedSale = newSale
      },
    [SET_ALL_SALES](state, payload) {
        state.allSales = payload
    },
    [GET_ALL_SALES](state, payload){
        state.allSales = payload
    },

 

}

export const actions = {

    async load({ commit }) {
        try {
            commit(SET_LOADING, true)
           const newLoad= await api.get(`/sales/AllSales`)

           if (newLoad.data.createdBy === this.$auth.user.email){

            console.log(newLoad);
          }

           // await dispatch('getInactivePolicies')
        console.log(newLoad.data)
             commit(SET_ALL_SALES, newLoad.data);
            //   ...getters.allPolicies,
            //   ...getters.inactivePolicies,
            commit(SET_LOADING, false);
            
        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },
 //GET ALL SaleS
    async getAllSales({ commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: allSales} = await api.get(`/sales/allSales`)

           const { data:fetchUsers } = await api.get(`/auth/allUsers`)
            
          
           

           console.log(allSales.data);
           console.log(fetchUsers.data)
         

           //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
           const filteredSales = allSales.data.filter( t => 
           t.createdBy === this.$auth.user.email
          );

         


          console.log(filteredSales);
          console.log(filteredSales);




           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_SALES, filteredSales);

       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    //ADD NEW Sale TO ALL SaleS
    async addNewSale({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newSale = cloneDeep(state.salesForm);

            newSale.sellingDate = newSale.sellingDate.toLocaleDateString();

            newSale.createdBy = this.$auth.user.email;
           
           console.log(newSale);

           
            const response = await api.post(`/sales/addNewSale`, newSale);

            console.log(response.data);

            commit(ADD_SALE, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    

    selectSale({ commit }, newSale) {
        try {
            commit(SET_SELECTED_SALE, newSale)
            console.log(newSale._id)
        } catch (error) {
            console.log('Error')
        }
        
      },

}


  
    
