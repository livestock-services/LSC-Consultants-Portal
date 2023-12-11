import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { 
        ADD_BEEF_AI_RECORD,
        
      GET_ALL_BEEF_AI_RECORDS,
        
        GET_FILTERED_BEEF_AI_START_TIME,
        GET_FILTERED_BEEF_AI_END_TIME,
        SET_SELECTED_BEEF_AI_RECORD,
        SET_LOADING,
        
        GET_ALL_BEEF_AI_DAIRY_RECORDS,
        GET_ALL_BEEF_AI_BEEF_RECORDS,
        GET_ALL_BEEF_AI_GOAT_RECORDS,
        GET_ALL_BEEF_AI_PIG_RECORDS,
        GET_ALL_BEEF_AI_OTHER_RECORDS,


        
       
       
    } from '@/helpers/mutation-types'

export const state = () => ({

    loading: false,

    filteredBeefAIStartTime:[],
    filteredBeefAIEndTime:[],
    allBeefAIRecords:[],

    selectedBeefAIRecord:null,
    allBeefAIDairyRecords:[],
    allBeefAIBeefRecords:[],
    allBeefAIGoatRecords:[],
    allBeefAIPigRecords:[],
    allBeefAIOtherRecords:[],
 
    

    beefAIForm:{
        beefAIConsultingPerson:null,
        beefAIOtherConsultingPerson:null,
        beefAIClientName:null,
        beefAIClientPhoneNumber:null,
        beefAIClientLocation:null,
        beefAIClientTown:null,
        beefAIClientComments:null,
        beefAICategory:null,
        beefAIOtherCategory:null,
        date:new Date(),
        createdBy:null
        
    },

    beefAIFilterForm:{
        startDate:null,
        endDate:null
    }

})

    


export const getters = {
    getField,

    loading(state) {
        return state.loading
    },
    
    selectedBeefAIRecord(state) {
        return state.selectedBeefAIRecord
      },

      filteredBeefAIStartTime(state){
        return state.filteredBeefAIStartTime
      },

      filteredBeefAIEndTime(state){
        return state.filteredBeefAIEndTime
      },
      //---------------------AGRO CONSULTS GETTERS--------------------------------------------//

    allBeefAIRecords(state){
        return state.allBeefAIRecords
    },

    allBeefAIDairyRecords(state){
        return state.allBeefAIDairyRecords
    },

    allBeefAIBeefRecords(state){
        return state.allBeefAIBeefRecords
    },

    allBeefAIGoatRecords(state){
        return state.allBeefAIGoatRecords
    },

    allBeefAIPigRecords(state){
        return state.allBeefAIPigRecords
    },

    allBeefAIOtherRecords(state){
        return state.allBeefAIOtherRecords
    },

   

        
  //----------------------------------------END OF AGRO SECTION----------------------------------------//

}


export const mutations = {

    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  

    //MUTATIONS FOR ADDING, SETTING AND GETTING AgroRecordS
    [ADD_BEEF_AI_RECORD](state, newBeefAIRecord){
        state.allBeefAIRecords.push(newBeefAIRecord)
    },

    [SET_SELECTED_BEEF_AI_RECORD](state, newBeefAIRecord) {
        state.selectedBeefAIRecord = newBeefAIRecord
      },
  

    [GET_FILTERED_BEEF_AI_START_TIME](state, payload){
        state.filteredBeefAIStartTime= payload
    },

    [GET_FILTERED_BEEF_AI_END_TIME](state, payload){
        state.filteredBeefAIEndTime = payload
    },

    //------------------------------------AGRO MUTATIONS---------------------------------------------//
    [GET_ALL_BEEF_AI_RECORDS](state, payload){
        state.allBeefAIRecords = payload
    },


    

    [GET_ALL_BEEF_AI_DAIRY_RECORDS](state, payload){
        state.allBeefAIDairyRecords = payload
    },

    [GET_ALL_BEEF_AI_BEEF_RECORDS](state, payload){
        state.allBeefAIBeefRecords = payload
    },

    
    [GET_ALL_BEEF_AI_GOAT_RECORDS](state, payload){
        state.allBeefAIGoatRecords = payload
    },

    [GET_ALL_BEEF_AI_PIG_RECORDS](state, payload){
        state.allBeefAIPigRecords = payload
    },

    
    [GET_ALL_BEEF_AI_OTHER_RECORDS](state, payload){
        state.allBeefAIOtherRecords = payload
    },

  

   

    //------------------------------------------------------------------------------------//

   
       
}

export const actions = {

    
 //GET ALL AgroRecordS
    async getAllBeefAIRecords({ state,commit,rootState,rootGetters }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

          const users =  rootGetters['users/allUsers']

          const loggedInUser = rootGetters['users/loggedInUser']

         // console.log(users);
         // console.log(loggedInUser)

           let userEmail = loggedInUser.email;
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/ai/beef/allBeefAIRecords`)

           if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Admin" )) ){
            if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Manager" )) ){
            const customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )

                     // console.log(customeUserRecords);
                      commit(GET_ALL_BEEF_AI_RECORDS, customeUserRecords);

            }
        }


        
        else{
           // console.log(response.data);
       

            //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
            commit(GET_ALL_BEEF_AI_RECORDS, response.data);
           }
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    async getFilteredBeefAIRecords({ state,commit,rootState,rootGetters }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

          const users =  rootGetters['users/allUsers']

          const loggedInUser = rootGetters['users/loggedInUser']

         // console.log(users);
         // console.log(loggedInUser)

           let userEmail = loggedInUser.email;
             const newFilterRecord = cloneDeep(state.beefAIFilterForm);

             newFilterRecord.startDate = newFilterRecord.startDate.toLocaleDateString('en-US');

             newFilterRecord.endDate = newFilterRecord.endDate.toLocaleDateString('en-US');

            // console.log(newFilterRecord.startDate);
            // console.log(newFilterRecord.endDate);
            
           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/ai/beef/allBeefAIRecords`)

           if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Admin" )) ){
            if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Manager" )) ){
            const customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )

                     // console.log(customeUserRecords);
                     

                      const beefAIDairyRecords =customeUserRecords.filter( a=>
                        a.beefAICategory ==='Dairy'
                       )
               
                       const beefAIBeefRecords =customeUserRecords.filter( b=>
                        b.beefAICategory ==='Beef'
                       )

                       const beefAIGoatRecords =customeUserRecords.filter( a=>
                        a.beefAICategory ==='Goat'
                       )
               
                       const beefAIPigRecords =customeUserRecords.filter( b=>
                        b.beefAICategory ==='Pig'
                       )

                       const beefAIOtherRecords =customeUserRecords.filter( a=>
                        a.beefAICategory ==='Other'
                       )
               
               
                 // -------------------------------END OF FILTERING BY CATEGORY----------------------//
               
               
               
               
                  //--------FILTER CATEGORIES BY DATE AND SUMMATION OF EACH CATEGORY------------------//
                        const filteredBeefAIDairyRecords = beefAIDairyRecords.filter( at => 
                       new Date(at.date) >= new Date(newFilterRecord.startDate) && new Date(at.date) <= new Date(newFilterRecord.endDate)
                       );
               
                       const filteredBeefAIBeefRecords = beefAIBeefRecords.filter( bt => 
                           new Date(bt.date) >= new Date(newFilterRecord.startDate) && new Date(bt.date) <= new Date(newFilterRecord.endDate)
                           );


                        const filteredBeefAIGoatRecords = beefAIGoatRecords.filter( at => 
                            new Date(at.date) >= new Date(newFilterRecord.startDate) && new Date(at.date) <= new Date(newFilterRecord.endDate)
                            );
                    
                        const filteredBeefAIPigRecords = beefAIPigRecords.filter( bt => 
                                new Date(bt.date) >= new Date(newFilterRecord.startDate) && new Date(bt.date) <= new Date(newFilterRecord.endDate)
                                );

                        const filteredBeefAIOtherRecords = beefAIOtherRecords.filter( bt => 
                                    new Date(bt.date) >= new Date(newFilterRecord.startDate) && new Date(bt.date) <= new Date(newFilterRecord.endDate)
                                );



               
                      
                       
                     // console.log(filteredBeefAIConsultsRecords.length);
               
                     // console.log(filteredBeefAISalesRecords.length);
               
               
                       //  // console.log(response.data);
               
                          //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
                          commit(GET_ALL_BEEF_AI_RECORDS, customeUserRecords);
               
                          commit(GET_FILTERED_BEEF_AI_START_TIME, newFilterRecord.startDate);
               
                          commit(GET_FILTERED_BEEF_AI_END_TIME, newFilterRecord.endDate);
               
                          commit(GET_ALL_BEEF_AI_DAIRY_RECORDS, filteredBeefAIDairyRecords.length);
               
                          commit(GET_ALL_BEEF_AI_BEEF_RECORDS, filteredBeefAIBeefRecords.length);
                          
                          commit(GET_ALL_BEEF_AI_GOAT_RECORDS, filteredBeefAIGoatRecords.length);
               
                          commit(GET_ALL_BEEF_AI_PIG_RECORDS, filteredBeefAIPigRecords.length);

                          commit(GET_ALL_BEEF_AI_OTHER_RECORDS, filteredBeefAIOtherRecords.length);
               
               

            }
        }


        
        else{
            const beefAIDairyRecords =customeUserRecords.filter( a=>
                a.beefAICategory ==='Dairy'
               )
       
               const beefAIBeefRecords =customeUserRecords.filter( b=>
                b.beefAICategory ==='Beef'
               )

               const beefAIGoatRecords =customeUserRecords.filter( a=>
                a.beefAICategory ==='Goat'
               )
       
               const beefAIPigRecords =customeUserRecords.filter( b=>
                b.beefAICategory ==='Pig'
               )

               const beefAIOtherRecords =customeUserRecords.filter( a=>
                a.beefAICategory ==='Other'
               )
       
         // -------------------------------END OF FILTERING BY CATEGORY----------------------//
       
       
       
       
        //--------FILTER CATEGORIES BY DATE AND SUMMATION OF EACH CATEGORY------------------//
        const filteredBeefAIDairyRecords = beefAIDairyRecords.filter( at => 
            new Date(at.date) >= new Date(newFilterRecord.startDate) && new Date(at.date) <= new Date(newFilterRecord.endDate)
            );
    
            const filteredBeefAIBeefRecords = beefAIBeefRecords.filter( bt => 
                new Date(bt.date) >= new Date(newFilterRecord.startDate) && new Date(bt.date) <= new Date(newFilterRecord.endDate)
                );


             const filteredBeefAIGoatRecords = beefAIGoatRecords.filter( at => 
                 new Date(at.date) >= new Date(newFilterRecord.startDate) && new Date(at.date) <= new Date(newFilterRecord.endDate)
                 );
         
             const filteredBeefAIPigRecords = beefAIPigRecords.filter( bt => 
                     new Date(bt.date) >= new Date(newFilterRecord.startDate) && new Date(bt.date) <= new Date(newFilterRecord.endDate)
                     );

             const filteredBeefAIOtherRecords = beefAIOtherRecords.filter( bt => 
                         new Date(bt.date) >= new Date(newFilterRecord.startDate) && new Date(bt.date) <= new Date(newFilterRecord.endDate)
                     );

              
               
             // console.log(filteredBeefAIConsultsRecords.length);
       
             // console.log(filteredBeefAISalesRecords.length);
       
       
               //  // console.log(response.data);
       
                  //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
                    commit(GET_ALL_BEEF_AI_RECORDS, response.data);
        
                    commit(GET_FILTERED_BEEF_AI_START_TIME, newFilterRecord.startDate);
               
                    commit(GET_FILTERED_BEEF_AI_END_TIME, newFilterRecord.endDate);
        
                    commit(GET_ALL_BEEF_AI_DAIRY_RECORDS, filteredBeefAIDairyRecords.length);
        
                    commit(GET_ALL_BEEF_AI_BEEF_RECORDS, filteredBeefAIBeefRecords.length);
                    
                    commit(GET_ALL_BEEF_AI_GOAT_RECORDS, filteredBeefAIGoatRecords.length);
        
                    commit(GET_ALL_BEEF_AI_PIG_RECORDS, filteredBeefAIPigRecords.length);

                    commit(GET_ALL_BEEF_AI_OTHER_RECORDS, filteredBeefAIOtherRecords.length);
              
                  //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
                  
           }
       
           commit(SET_LOADING, false);
       //    const { data:fetchUsers } = await api.get(`/auth/allUsers`)
        
    //    //--------------------ALL BeefAI RECORDS FILTERED BY CATEGORY --------------------------------// 
       

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    //ADD NEW BeefAIRecord TO ALL BeefAIRecordS
    async addNewBeefAIRecord({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newBeefAIRecord = cloneDeep(state.beefAIForm);

        //     newBeefAIRecord.date = state.BeefAIForm.date.toLocaleDateString();

        newBeefAIRecord.createdBy = this.$auth.user.email;

        //    // newBeefAIRecord.createdBy = 'kondwanim@livestock.co.zm'
        //   // console.log(newBeefAIRecord.date);
           
          // console.log(newBeefAIRecord);

           
            const response = await api.post(`/ai/beef/addNewBeefAIRecord`, newBeefAIRecord);

           // console.log(response.data);

            commit(ADD_BEEF_AI_RECORD, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    
    selectBeefAIRecord({ commit }, newBeefAIRecord) {
        try {
            commit(SET_SELECTED_BEEF_AI_RECORD, newBeefAIRecord)
            console.log(newBeefAIRecord._id)
        } catch (error) {
            console.log('Error')
        }
        
      },
    
        
      

  

}


  
    
