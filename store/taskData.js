import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { ADD_TASK,

    SET_ALL_TASKS, 
    GET_ALL_TASKS, 
    SET_LOADING,
    SET_SELECTED_TASK,
    COMPLETE_TASK 
   } from '@/helpers/mutation-types'

export const state = () => ({

    loading: false,
    allTasks:[],
    customerTasks: [],
    selectedTask: null,

    taskForm:{
        taskDescription:null,
        selectPriority:null,
        assignTask:null,
        dateAssigned:null,
        dueDate:null,
        createdBy:null
        
    },

})

    


export const getters = {
    getField,

    loading(state) {
        return state.loading
    },
    selectedTask(state) {
        return state.selectedTask
      },

    allTasks(state){
        return state.allTasks
    },
    
  

}


export const mutations = {

    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  

    //MUTATIONS FOR ADDING, SETTING AND GETTING TASKS
    [ADD_TASK](state, newTask){
        state.allTasks.push(newTask)
    },

    [SET_SELECTED_TASK](state, newTask) {
        state.selectedTask = newTask
      },
    [SET_ALL_TASKS](state, payload) {
        state.allTasks = payload
    },
    [GET_ALL_TASKS](state, payload){
        state.allTasks = payload
    },

    [COMPLETE_TASK](state, putResponse) {
        state.selectedTask = putResponse
        state.selectedTask.status = "Approved"
        }
       
}

export const actions = {

    async load({ commit }) {
        try {
            commit(SET_LOADING, true)
           const newLoad= await api.get(`/tasks/allTasks`)

           if (newLoad.data.createdBy === this.$auth.user.email){

            console.log(newLoad);
          }

           // await dispatch('getInactivePolicies')
        console.log(newLoad.data)
             commit(SET_ALL_TASKS, newLoad.data);
            //   ...getters.allPolicies,
            //   ...getters.inactivePolicies,
            commit(SET_LOADING, false);
            
        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },
 //GET ALL TASKS
    async getAllTasks({ commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: allTasks} = await api.get(`/tasks/allTasks`)

           const { data:fetchUsers } = await api.get(`/auth/allUsers`)
            
          
           

           console.log(allTasks.data);
           console.log(fetchUsers.data)
         

           //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
           const filteredTasks = allTasks.data.filter( t => 
           t.createdBy === this.$auth.user.email
          );


          console.log(filteredTasks);




           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_TASKS, filteredTasks);

       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    //ADD NEW TASK TO ALL TASKS
    async addNewTask({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newTask = cloneDeep(state.taskForm);

            newTask.createdBy = this.$auth.user.email;
            newTask.dateAssigned = newTask.dateAssigned.toLocaleDateString();
            newTask.dueDate = newTask.dueDate.toLocaleDateString();
           
           console.log(newTask);

           
            const response = await api.post(`/tasks/addNewTask`, newTask);

            console.log(response.data);

            commit(ADD_TASK, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    

    selectTask({ commit }, newTask) {
        try {
            commit(SET_SELECTED_TASK, newTask)
            console.log(newTask._id)
        } catch (error) {
            console.log('Error')
        }
        
      },

            //APPROVE A PERMIT APPLCATION
    async completeTask({ state, commit }, newTask) {
        try {
          commit(SET_LOADING, true) 
            const newTask = state.selectedTask
       //  const newTask = rootGetters['finance/selectedPermitApplication'] 
          console.log(newTask._id)

         const {data: putResponse} = await api.put(`/tasks/completeTask/${newTask._id}`, {newTask, status: "Completed"} )
        
         commit(COMPLETE_TASK, putResponse)

          console.log(putResponse.data);
         
          commit(SET_LOADING, false)
        } catch (error) {
          commit(SET_LOADING, false)
          throw error
        }
      },


}


  
    
