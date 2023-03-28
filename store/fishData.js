import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { 
        ADD_FISH_RECORD,
        
        GET_ALL_FISH_RECORDS,
        GET_ALL_FILTERED_FISH_RECORDS,

        GET_FILTERED_FISH_START_TIME,
        GET_FILTERED_FISH_END_TIME,
        
        SET_LOADING,
        
        // GET_ALL_FISH_CONSULTS_RECORDS,
        // GET_ALL_FISH_SALES_RECORDS,
        
       
       
    } from '@/helpers/mutation-types'

export const state = () => ({

    loading: false,
    filteredFishStartTime:[],
    filteredFishEndTime:[],

    allFishRecords:[],
    allFilteredFishRecords:[],

    // allFishConsultsRecords:[],
    // allFishSalesRecords:[],
    

    fishForm:{
        fishClientName:null,
        fishClientPhoneNumber:null,
        fishClientLocation:null,
        fishClientTown:null,
        fishClientComments:null,
        // FishCategory:null,
        date:new Date()
       // createdBy:null
        
    },

    fishFilterForm:{
        startDate:null,
        endDate:null
    }

})

    


export const getters = {
    getField,

    loading(state) {
        return state.loading
    },
    

      filteredFishStartTime(state){
        return state.filteredFishStartTime
      },

      filteredFishEndTime(state){
        return state.filteredFishEndTime
      },
      //---------------------AGRO CONSULTS GETTERS--------------------------------------------//

    allFishRecords(state){
        return state.allFishRecords
    },

    allFilteredFishRecords(state){
        return state.allFilteredFishRecords
    },

    
        
  //----------------------------------------END OF AGRO SECTION----------------------------------------//

}


export const mutations = {

    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  

    //MUTATIONS FOR ADDING, SETTING AND GETTING AgroRecordS
    [ADD_FISH_RECORD](state, newFishRecord){
        state.allFishRecords.push(newFishRecord)
    },

   
  

    [GET_FILTERED_FISH_START_TIME](state, payload){
        state.filteredFishStartTime= payload
    },

    [GET_FILTERED_FISH_END_TIME](state, payload){
        state.filteredFishEndTime= payload
    },

    //------------------------------------AGRO MUTATIONS---------------------------------------------//
    [GET_ALL_FISH_RECORDS](state, payload){
        state.allFishRecords = payload
    },

    [GET_ALL_FILTERED_FISH_RECORDS](state, payload){
        state.allFilteredFishRecords = payload
    },



    

    // [GET_ALL_FISH_CONSULTS_RECORDS](state, payload){
    //     state.allFishConsultsRecords = payload
    // },

    // [GET_ALL_FISH_SALES_RECORDS](state, payload){
    //     state.allFishSalesRecords = payload
    // },


   

    //------------------------------------------------------------------------------------//

   
       
}

export const actions = {

    
 //GET ALL AgroRecordS
    async getAllFishRecords({ state,commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/fish/allFishRecords`)

        //const { data:fetchUsers } = await api.get(`/auth/allUsers`)

   
           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_FISH_RECORDS, response.data);

       
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

     async getFilteredFishRecords({ state,commit }){
         try {
           //---  ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
             commit(SET_LOADING, true)

              const newFilterRecord = cloneDeep(state.fishFilterForm);

              newFilterRecord.startDate = newFilterRecord.startDate.toLocaleDateString();

              newFilterRecord.endDate = newFilterRecord.endDate.toLocaleDateString();

              console.log(newFilterRecord.startDate);
              console.log(newFilterRecord.endDate);
            
           
          //---   API REQUEST IS MADE AND RESULT IS STORED IN CONST
            const {data: response} = await api.get(`/fish/allFishRecords`)

         //   const { data:fetchUsers } = await api.get(`/auth/allUsers`)
        
       //  --------------------ALL Fish RECORDS FILTERED BY CATEGORY -------------------------------- //
        // const FishConsultsRecords = response.data.filter( a=>
        //  a.FishCategory ==='Consultation'
        // )

        // const FishSalesRecords = response.data.filter( b=>
        //  b.FishCategory ==='Sales'
        // )

   // -------------------------------END OF FILTERING BY CATEGORY----------------------//




 //   --------FILTER CATEGORIES BY DATE AND SUMMATION OF EACH CATEGORY------------------//
          const filteredFishConsultsRecords = response.data.filter( at => 
         at.date >= newFilterRecord.startDate && at.date <= newFilterRecord.endDate
         );

        //  const filteredFishSalesRecordsRecords = FishSalesRecords.filter( bt => 
        //      bt.date >= newFilterRecord.startDate && bt.date <= newFilterRecord.endDate
        //      );

       
        
         console.log(filteredFishConsultsRecords.length);

      //   console.log(filteredFishSalesRecordsRecords.length);


            console.log(response.data);

          //  RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
          //  commit(GET_ALL_FISH_RECORDS, response.data);

            commit(GET_FILTERED_FISH_START_TIME, newFilterRecord.startDate);

            commit(GET_FILTERED_FISH_END_TIME, newFilterRecord.endDate);

            commit(GET_ALL_FILTERED_FISH_RECORDS, filteredFishConsultsRecords.length);

         //   commit(GET_ALL_FISH_SALES_RECORDS, filteredFishSalesRecordsRecords.length);

       
//            //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
//            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    //ADD NEW FishRecord TO ALL FishRecordS
    async addNewFishRecord({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newFishRecord = cloneDeep(state.fishForm);

        //     newFishRecord.date = state.FishForm.date.toLocaleDateString();



        //    // newFishRecord.createdBy = 'kondwanim@livestock.co.zm'
        //    console.log(newFishRecord.date);
           
           console.log(newFishRecord);

           
            const response = await api.post(`/fish/addNewFishRecord`, newFishRecord);

            console.log(response.data);

            commit(ADD_FISH_RECORD, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    

    
        
      

  

}


  
    
