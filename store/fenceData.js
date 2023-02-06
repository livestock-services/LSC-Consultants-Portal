import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { 
        ADD_FENCE_RECORD,
        
        GET_ALL_FENCE_RECORDS,
        GET_ALL_FILTERED_FENCE_RECORDS,

        GET_FILTERED_FENCE_START_TIME,
        GET_FILTERED_FENCE_END_TIME,
        
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

    // allFenceConsultsRecords:[],
    // allFenceSalesRecords:[],
    

    fenceForm:{
        fenceClientName:null,
        fenceClientPhoneNumber:null,
        fenceClientLocation:null,
        // FenceCategory:null,
        date:new Date()
       // createdBy:null
        
    },

    fenceFilterForm:{
        startDate:null,
        endDate:null
    }

})

    


export const getters = {
    getField,

    loading(state) {
        return state.loading
    },
    

      filteredFenceStartTime(state){
        return state.filteredFenceStartTime
      },

      filteredFenceEndTime(state){
        return state.filteredFenceEndTime
      },
      //---------------------AGRO CONSULTS GETTERS--------------------------------------------//

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
    async getAllFenceRecords({ state,commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/fence/allFenceRecords`)

        //const { data:fetchUsers } = await api.get(`/auth/allUsers`)

   
           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_FENCE_RECORDS, response.data);

       
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

     async getFilteredFenceRecords({ state,commit }){
         try {
           //---  ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
             commit(SET_LOADING, true)

              const newFilterRecord = cloneDeep(state.fenceFilterForm);

              newFilterRecord.startDate = newFilterRecord.startDate.toLocaleDateString('en-GB');

              newFilterRecord.endDate = newFilterRecord.endDate.toLocaleDateString('en-GB');

              console.log(newFilterRecord.startDate);
              console.log(newFilterRecord.endDate);
            
           
          //---   API REQUEST IS MADE AND RESULT IS STORED IN CONST
            const {data: response} = await api.get(`/fence/allFenceRecords`)

         //   const { data:fetchUsers } = await api.get(`/auth/allUsers`)
        
       //  --------------------ALL Fence RECORDS FILTERED BY CATEGORY -------------------------------- //
        // const FenceConsultsRecords = response.data.filter( a=>
        //  a.FenceCategory ==='Consultation'
        // )

        // const FenceSalesRecords = response.data.filter( b=>
        //  b.FenceCategory ==='Sales'
        // )

   // -------------------------------END OF FILTERING BY CATEGORY----------------------//




 //   --------FILTER CATEGORIES BY DATE AND SUMMATION OF EACH CATEGORY------------------//
          const filteredFenceConsultsRecords = response.data.filter( at => 
         at.date >= newFilterRecord.startDate && at.date <= newFilterRecord.endDate
         );

        //  const filteredFenceSalesRecordsRecords = FenceSalesRecords.filter( bt => 
        //      bt.date >= newFilterRecord.startDate && bt.date <= newFilterRecord.endDate
        //      );

       
        
         console.log(filteredFenceConsultsRecords.length);

      //   console.log(filteredFenceSalesRecordsRecords.length);


            console.log(response.data);

          //  RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
          //  commit(GET_ALL_FENCE_RECORDS, response.data);

            commit(GET_FILTERED_FENCE_START_TIME, newFilterRecord.startDate);

            commit(GET_FILTERED_FENCE_END_TIME, newFilterRecord.endDate);

            commit(GET_ALL_FILTERED_FENCE_RECORDS, filteredFenceConsultsRecords.length);

         //   commit(GET_ALL_FENCE_SALES_RECORDS, filteredFenceSalesRecordsRecords.length);

       
//            //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
//            commit(SET_LOADING, false);

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



        //    // newFenceRecord.createdBy = 'kondwanim@livestock.co.zm'
        //    console.log(newFenceRecord.date);
           
           console.log(newFenceRecord);

           
            const response = await api.post(`/fence/addNewFenceRecord`, newFenceRecord);

            console.log(response.data);

            commit(ADD_FENCE_RECORD, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    

    
        
      

  

}


  
    
