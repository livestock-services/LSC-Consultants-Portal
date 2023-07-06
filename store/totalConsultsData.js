import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { 
       
        
        GET_ALL_TOTAL_CONSULTS_RECORDS,
        GET_ALL_FILTERED_TOTAL_CONSULTS_RECORDS,

        GET_FILTERED_TOTAL_CONSULTS_START_TIME,
        GET_FILTERED_TOTAL_CONSULTS_END_TIME,

        GET_ALL_FILTERED_TOTAL_AGRO_RECORDS,
        GET_ALL_FILTERED_TOTAL_BEEF_AI_RECORDS,
        GET_ALL_FILTERED_TOTAL_FENCE_RECORDS,
        GET_ALL_FILTERED_TOTAL_FISH_RECORDS,
        GET_ALL_FILTERED_TOTAL_IRRIGATION_RECORDS,
        GET_ALL_FILTERED_TOTAL_NUTRITION_RECORDS,
        GET_ALL_FILTERED_TOTAL_PIG_AI_RECORDS,
        GET_ALL_FILTERED_TOTAL_PUMP_RECORDS,
        GET_ALL_FILTERED_TOTAL_VET_RECORDS,
        GET_ALL_FILTERED_TOTAL_POST_MORTEMS_RECORDS,
       
        
        
        SET_LOADING,
        
        // GET_ALL_TOTAL_CONSULTS_CONSULTS_RECORDS,
        // GET_ALL_TOTAL_CONSULTS_SALES_RECORDS,
        
       
       
    } from '@/helpers/mutation-types'



export const state = () => ({

    loading: false,
    filteredTotalConsultsStartTime:[],
    filteredTotalConsultsEndTime:[],

    allTotalConsultsRecords:[],
    allFilteredTotalConsultsRecords:[],

    allFilteredTotalAgroRecords:[],

    allFilteredTotalBeefAIRecords:[],

    allFilteredTotalFenceRecords:[],

    allFilteredTotalFishRecords:[],

    allFilteredTotalIrrigationRecords:[],


    allFilteredTotalNutritionRecords:[],

    allFilteredTotalPigAIRecords:[],

    allFilteredTotalWaterPumpRecords:[],

    allFilteredTotalVetRecords:[],

    allFilteredTotalPostMortemsRecords:[],



    totalConsultsFilterForm:{
        startDate:null,
        endDate:null
    }

})

    


export const getters = {
    getField,

    loading(state) {
        return state.loading
    },
    

      filteredTotalConsultsStartTime(state){
        return state.filteredTotalConsultsStartTime
      },

      filteredTotalConsultsEndTime(state){
        return state.filteredTotalConsultsEndTime
      },
      //---------------------AGRO CONSULTS GETTERS--------------------------------------------//

    allTotalConsultsRecords(state){
        return state.allTotalConsultsRecords
    },

    allFilteredTotalConsultsRecords(state){
        return state.allFilteredTotalConsultsRecords
    },


    allFilteredTotalAgroRecords(state){
        return state.allFilteredTotalAgroRecords
    },

    allFilteredTotalBeefAIRecords(state){
        return state.allFilteredTotalBeefAIRecords
    },

    allFilteredTotalFenceRecords(state){
        return state.allFilteredTotalFenceRecords
    },

    allFilteredTotalFishRecords(state){
        return state.allFilteredTotalFishRecords
    },

    allFilteredTotalIrrigationRecords(state){
        return state.allFilteredTotalIrrigationRecords
    },

    allFilteredTotalNutritionRecords(state){
        return state.allFilteredTotalNutritionRecords
    },

    allFilteredTotalPigAIRecords(state){
        return state.allFilteredTotalPigAIRecords
    },

    allFilteredTotalPostMortemsRecords(state){
        return state.allFilteredTotalPostMortemsRecords
    },

    allFilteredTotalWaterPumpRecords(state){
        return state.allFilteredTotalWaterPumpRecords
    },

    allFilteredTotalVetRecords(state){
        return state.allFilteredTotalVetRecords
    },

    
        
  //----------------------------------------END OF AGRO SECTION----------------------------------------//

}


export const mutations = {

    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  


  

    [GET_FILTERED_TOTAL_CONSULTS_START_TIME](state, payload){
        state.filteredTotalConsultsStartTime= payload
    },

    [GET_FILTERED_TOTAL_CONSULTS_END_TIME](state, payload){
        state.filteredTotalConsultsEndTime= payload
    },

    //------------------------------------AGRO MUTATIONS---------------------------------------------//
    [GET_ALL_TOTAL_CONSULTS_RECORDS](state, payload){
        state.allTotalConsultsRecords = payload
    },

    [GET_ALL_FILTERED_TOTAL_CONSULTS_RECORDS](state, payload){
        state.allFilteredTotalConsultsRecords = payload
    },

    [GET_ALL_FILTERED_TOTAL_AGRO_RECORDS](state, payload){
        state.allFilteredTotalAgroRecords = payload
    },

    [GET_ALL_FILTERED_TOTAL_BEEF_AI_RECORDS](state, payload){
        state.allFilteredTotalBeefAIRecords = payload
    },

    [GET_ALL_FILTERED_TOTAL_FENCE_RECORDS](state, payload){
        state.allFilteredTotalFenceRecords = payload
    },

    [GET_ALL_FILTERED_TOTAL_FISH_RECORDS](state, payload){
        state.allFilteredTotalFishRecords = payload
    },

    [GET_ALL_FILTERED_TOTAL_IRRIGATION_RECORDS](state, payload){
        state.allFilteredTotalIrrigationRecords = payload
    },

    [GET_ALL_FILTERED_TOTAL_NUTRITION_RECORDS](state, payload){
        state.allFilteredTotalNutritionRecords = payload
    },

    [GET_ALL_FILTERED_TOTAL_PIG_AI_RECORDS](state, payload){
        state.allFilteredTotalPigAIRecords = payload
    },

    [GET_ALL_FILTERED_TOTAL_PUMP_RECORDS](state, payload){
        state.allFilteredTotalWaterPumpRecords = payload
    },

    [GET_ALL_FILTERED_TOTAL_VET_RECORDS](state, payload){
        state.allFilteredTotalVetRecords = payload
    },

    [GET_ALL_FILTERED_TOTAL_POST_MORTEMS_RECORDS](state, payload){
        state.allFilteredTotalPostMortemsRecords = payload
    },



 
   

    //------------------------------------------------------------------------------------//

   
       
}

export const actions = {



     async getFilteredTotalConsultsRecords({ state,commit }){
         try {
           //---  ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
             commit(SET_LOADING, true)

              const newFilterRecord = cloneDeep(state.totalConsultsFilterForm);

              newFilterRecord.startDate = newFilterRecord.startDate.toLocaleDateString('en-US');

              newFilterRecord.endDate = newFilterRecord.endDate.toLocaleDateString('en-US');

              console.log(newFilterRecord.startDate);
              console.log(newFilterRecord.endDate);
            
           
          //---   API REQUEST IS MADE AND RESULT IS STORED IN CONST
            let {data: agro} = await api.get(`/agro/allAgroRecords`)

            const {data: beefAI} = await api.get(`/ai/beef/allBeefAIRecords`)

            const {data: fence} = await api.get(`/fence/allFenceRecords`)

            const {data: fish} = await api.get(`/fish/allFishRecords`)

            const {data: irrigation} = await api.get(`/irrigation/allIrrigationRecords`)

            const {data: nutrition} = await api.get(`/nutrition/allNutritionRecords`)

            const {data: pigAI} = await api.get(`/ai/pigs/allPigAIRecords`)

            const {data: pump} = await api.get(`/waterPump/allWaterPumpRecords`)

            const {data: postMortems} = await api.get(`/vet/allPostMortems`)

            const {data: vet } = await api.get(`/vet/allVetRecords`)

        

   // -------------------------------END OF FILTERING BY CATEGORY----------------------//




 //   --------FILTER CATEGORIES BY DATE AND SUMMATION OF EACH CATEGORY------------------//
        const filteredTotalAgroConsultsRecords = agro.data.filter( at => 
        new Date(at.date) >= new Date(newFilterRecord.startDate) && new Date(at.date) <= new Date(newFilterRecord.endDate)
         );
        
         console.log(filteredTotalAgroConsultsRecords)
        

     

        const filteredTotalBeefAIConsultsRecords = beefAI.data.filter( bt => 
        new Date(bt.date) >= new Date(newFilterRecord.startDate) && new Date(bt.date) <= new Date(newFilterRecord.endDate)
        );

        const filteredTotalFenceConsultsRecords = fence.data.filter( ct => 
        new Date(ct.date) >= new Date(newFilterRecord.startDate) && new Date(ct.date) <= new Date(newFilterRecord.endDate)
        );

        const filteredTotalFishConsultsRecords = fish.data.filter( dt => 
        new Date(dt.date) >= new Date(newFilterRecord.startDate) && new Date(dt.date) <= new Date(newFilterRecord.endDate)
        );

        const filteredTotalIrrigationConsultsRecords = irrigation.data.filter( et => 
        new Date(et.date) >= new Date(newFilterRecord.startDate) && new Date(et.date) <= new Date(newFilterRecord.endDate)
        );

        const filteredTotalNutritionConsultsRecords = nutrition.data.filter( ft => 
        new Date(ft.date) >= new Date(newFilterRecord.startDate) && new Date(ft.date) <= new Date(newFilterRecord.endDate)
        );
        console.log(filteredTotalNutritionConsultsRecords);

        const filteredTotalPigAIConsultsRecords = pigAI.data.filter( gt => 
        new Date(gt.date) >= new Date(newFilterRecord.startDate) && new Date(gt.date) <= new Date(newFilterRecord.endDate)
        );

        const filteredTotalPumpConsultsRecords = pump.data.filter( ht => 
        new Date(ht.date) >= new Date(newFilterRecord.startDate) && new Date(ht.date) <= new Date(newFilterRecord.endDate)
        );

        const filteredTotalVetConsultsRecords = vet.data.filter( it => 
        new Date(it.date) >= new Date(newFilterRecord.startDate) && new Date(it.date) <= new Date(newFilterRecord.endDate)
        );

        const filteredTotalPostMortemsRecords = postMortems.data.filter( jt => 
        new Date(jt.date) >= new Date(newFilterRecord.startDate) && new Date(jt.date) <= new Date(newFilterRecord.endDate)
        );

       
        
         console.log(filteredTotalAgroConsultsRecords.length);

         console.log(filteredTotalBeefAIConsultsRecords.length);
        
         console.log(filteredTotalFenceConsultsRecords.length);

         console.log(filteredTotalFishConsultsRecords.length);

         console.log(filteredTotalIrrigationConsultsRecords.length);

         console.log(filteredTotalNutritionConsultsRecords.length);

         console.log(filteredTotalPigAIConsultsRecords.length);

         console.log(filteredTotalPostMortemsRecords.length);

         console.log(filteredTotalPumpConsultsRecords.length);

         console.log(filteredTotalVetConsultsRecords.length);


         const finalTotalConsults = filteredTotalAgroConsultsRecords.length +
                                    filteredTotalBeefAIConsultsRecords.length+
                                    filteredTotalFenceConsultsRecords.length+
                                    filteredTotalFishConsultsRecords.length +
                                    filteredTotalIrrigationConsultsRecords.length +
                                    filteredTotalNutritionConsultsRecords.length +
                                    filteredTotalPigAIConsultsRecords.length + 
                                    filteredTotalPostMortemsRecords.length +
                                    filteredTotalPumpConsultsRecords.length +
                                    filteredTotalVetConsultsRecords.length

             console.log(finalTotalConsults)

            

          //  RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
          //  commit(GET_ALL_TOTAL_CONSULTS_RECORDS, response.data);

            commit(GET_FILTERED_TOTAL_CONSULTS_START_TIME, newFilterRecord.startDate);

            commit(GET_FILTERED_TOTAL_CONSULTS_END_TIME, newFilterRecord.endDate);

            commit(GET_ALL_FILTERED_TOTAL_CONSULTS_RECORDS, finalTotalConsults);




            commit(GET_ALL_FILTERED_TOTAL_AGRO_RECORDS, filteredTotalAgroConsultsRecords.length);


            commit(GET_ALL_FILTERED_TOTAL_BEEF_AI_RECORDS, filteredTotalBeefAIConsultsRecords.length);


            commit(GET_ALL_FILTERED_TOTAL_FENCE_RECORDS, filteredTotalFenceConsultsRecords.length);


            commit(GET_ALL_FILTERED_TOTAL_FISH_RECORDS, filteredTotalFishConsultsRecords.length);


            commit(GET_ALL_FILTERED_TOTAL_IRRIGATION_RECORDS, filteredTotalIrrigationConsultsRecords.length);


            commit(GET_ALL_FILTERED_TOTAL_NUTRITION_RECORDS, filteredTotalNutritionConsultsRecords.length);

            
            commit(GET_ALL_FILTERED_TOTAL_PIG_AI_RECORDS, filteredTotalPigAIConsultsRecords.length);


            commit(GET_ALL_FILTERED_TOTAL_POST_MORTEMS_RECORDS, filteredTotalPostMortemsRecords.length);


            commit(GET_ALL_FILTERED_TOTAL_PUMP_RECORDS, filteredTotalPumpConsultsRecords.length);


            commit(GET_ALL_FILTERED_TOTAL_VET_RECORDS, filteredTotalVetConsultsRecords.length);

           

       
//            //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
//            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },



}


  
    
