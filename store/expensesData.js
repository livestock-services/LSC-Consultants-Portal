import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { ADD_EXPENSE,

    SET_ALL_EXPENSES, 
    GET_ALL_EXPENSES, 
    SET_LOADING,
    SET_SELECTED_EXPENSE 
   } from '@/helpers/mutation-types'

export const state = () => ({

    loading: false,
    allExpenses:[],
   
    selectedExpense: null,

    expensesForm: {
      
    expensesItem:null,
    expensesCost:null,
    expensesDate:null,
    createdBy:null
         
                },

})

    


export const getters = {
    getField,

    loading(state) {
        return state.loading
    },
    selectedExpense(state) {
        return state.selectedExpense
      },

    allExpenses(state){
        return state.allExpenses
    },
    
  

}


export const mutations = {

    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  

    //MUTATIONS FOR ADDING, SETTING AND GETTING expenseS
    [ADD_EXPENSE](state, newExpense){
        state.allExpenses.push(newExpense)
    },

   

    [SET_SELECTED_EXPENSE](state, newExpense) {
        state.selectedExpense = newExpense
      },
    [SET_ALL_EXPENSES](state, payload) {
        state.allExpenses = payload
    },
    [GET_ALL_EXPENSES](state, payload){
        state.allExpenses = payload
    },

 

}

export const actions = {

    async load({ commit }) {
        try {
            commit(SET_LOADING, true)
           const newLoad= await api.get(`/expenses/allExpenses`)

           if (newLoad.data.createdBy === this.$auth.user.email){

            console.log(newLoad);
          }

           // await dispatch('getInactivePolicies')
        console.log(newLoad.data)
             commit(SET_ALL_EXPENSES, newLoad.data);
            //   ...getters.allPolicies,
            //   ...getters.inactivePolicies,
            commit(SET_LOADING, false);
            
        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },
 //GET ALL expenseS
    async getAllExpenses({ commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: allExpenses} = await api.get(`/expenses/allExpenses`)

           const { data:fetchUsers } = await api.get(`/auth/allUsers`)
            
          
           

           console.log(allExpenses.data);
           console.log(fetchUsers.data)
         

           //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
           const filteredExpenses = allExpenses.data.filter( t => 
           t.createdBy === this.$auth.user.email
          );


          console.log(filteredExpenses);




           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_EXPENSES, filteredExpenses);

       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    //ADD NEW expense TO ALL expenseS
    async addNewExpense({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newExpense = cloneDeep(state.expensesForm);

            newExpense.expensesDate = newExpense.expensesDate.toLocaleDateString();

            newExpense.createdBy = this.$auth.user.email;
           
           console.log(newExpense);

           
            const response = await api.post(`/expenses/addNewExpense`, newExpense);

            console.log(response.data);

            commit(ADD_EXPENSE, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    

    selectExpense({ commit }, newExpense) {
        try {
            commit(SET_SELECTED_EXPENSE, newExpense)
            console.log(newExpense._id)
        } catch (error) {
            console.log('Error')
        }
        
      },

}


  
    
