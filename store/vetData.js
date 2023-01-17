import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { 
        ADD_VET_RECORD,
        SET_ALL_VET_RECORDS, 
        GET_ALL_VET_RECORDS, 
        SET_LOADING,
        SET_SELECTED_VET_RECORD 
    } from '@/helpers/mutation-types'

export const state = () => ({

    loading: false,
    allVetRecords:[],
   
    selectedVetRecord: null,

    vetForm:{
        vetClientName:null,
        vetClientNumber:null,
        selectVetCategory:null,
        createdBy:null
        
    },

    consults:[
        {
            client:'Kondwani Banda',
            number:'0978453291',
            category:'pigs',
            date:'1/03/2023'
        },
        {
            client:'Karen Banda',
            number:'0978453291',
            category:'rabbits',
            date:'1/04/2023'
        },
        {
            client:'Linda Banda',
            number:'0978453291',
            category:'cattle',
            date:'1/04/2023'
        },
        {
            client:'Mary Phiri',
            number:'0978453220',
            category:'pigs',
            date:'1/06/2023'
        },
        {
            client:'Temwani Banda',
            number:'0966453291',
            category:'sheep',
            date:'1/05/2023'
        },
        {
            client:'Kondwani Banda',
            number:'0978453291',
            category:'sheep',
            date:'1/10/2023'
        },
        {
            client:'Kondwani Banda',
            number:'0978453291',
            category:'sheep',
            date:'1/13/2023'
        }
    ]

})

    


export const getters = {
    getField,

    loading(state) {
        return state.loading
    },
    selectedVetRecord(state) {
        return state.selectedVetRecord
      },

    allVetRecords(state){
        return state.allVetRecords
    },
    
  

}


export const mutations = {

    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  

    //MUTATIONS FOR ADDING, SETTING AND GETTING VetRecordS
    [ADD_VET_RECORD](state, newVetRecord){
        state.allVetRecords.push(newVetRecord)
    },

    [SET_SELECTED_VET_RECORD](state, newVetRecord) {
        state.selectedVetRecord = newVetRecord
      },
    [SET_ALL_VET_RECORDS](state, payload) {
        state.allVetRecords = payload
    },
    [GET_ALL_VET_RECORDS](state, payload){
        state.allVetRecords = payload
    },

   
       
}

export const actions = {

    async filter({ commit }){
        try {
            commit(SET_LOADING, true)
            const allConsults = state.consults;
            
            console.log(allConsults)

            

            const filteredConsults = allConsults.data.filter( c => 
                c.date <= '1/03/2023' && c.date >= '1/08/2023'
               );

               console.log(filteredConsults)

        } catch (error) {
            
        }
    },

    async load({ commit }) {
        try {
            commit(SET_LOADING, true)
           const newLoad= await api.get(`/vetRecords/allVetRecords`)

           if (newLoad.data.createdBy === this.$auth.user.email){

            console.log(newLoad);
          }

           // await dispatch('getInactivePolicies')
        console.log(newLoad.data)
             commit(SET_ALL_VET_RECORDS, newLoad.data);
            //   ...getters.allPolicies,
            //   ...getters.inactivePolicies,
            commit(SET_LOADING, false);
            
        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },
 //GET ALL VetRecordS
    async getAllVetRecords({ commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: allVetRecords} = await api.get(`/vetRecords/allVetRecords`)

           const { data:fetchUsers } = await api.get(`/auth/allUsers`)
            
          
           

           console.log(allVetRecords.data);
           console.log(fetchUsers.data)
         

           //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
           const filteredVetRecords = allVetRecords.data.filter( t => 
           t.createdBy === this.$auth.user.email
          );


          console.log(filteredVetRecords);




           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_VET_RECORDS, filteredVetRecords);

       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    //ADD NEW VetRecord TO ALL VetRecordS
    async addNewVetRecord({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newVetRecord = cloneDeep(state.VetForm);

            newVetRecord.createdBy = this.$auth.user.email;
           
           
           console.log(newVetRecord);

           
            const response = await api.post(`/vetRecords/addNewVetRecord`, newVetRecord);

            console.log(response.data);

            commit(ADD_VET_RECORD, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    

    selectVetRecord({ commit }, newVetRecord) {
        try {
            commit(SET_SELECTED_VET_RECORD, newVetRecord)
            console.log(newVetRecord._id)
        } catch (error) {
            console.log('Error')
        }
        
      },

  

}


  
    
