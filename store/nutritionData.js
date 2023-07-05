import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { 
        ADD_NUTRITION_RECORD,
        
        SET_ALL_NUTRITION_RECORDS, 
        GET_ALL_NUTRITION_RECORDS, 
        SET_LOADING,
        SET_SELECTED_NUTRITION_RECORD,

        GET_FILTERED_NUTRITION_START_TIME,
        GET_FILTERED_NUTRITION_END_TIME,
      

        GET_ALL_NUTRITION_CATTLE_RECORDS,
        GET_ALL_NUTRITION_GOATS_RECORDS ,
        GET_ALL_NUTRITION_SHEEP_RECORDS ,
        GET_ALL_NUTRITION_PIGS_RECORDS ,
        GET_ALL_NUTRITION_POULTRY_RECORDS, 
        GET_ALL_NUTRITION_DOGS_AND_CATS_RECORDS ,
        GET_ALL_NUTRITION_RABBITS_RECORDS,
        GET_ALL_NUTRITION_WILDLIFE_OR_EXOTICS_RECORDS,
        GET_ALL_NUTRITION_HORSES_RECORDS,

    } from '@/helpers/mutation-types'



    export const state = () => ({

        loading: false,
        filteredStartTime:[],
        filteredEndTime:[],
        selectedNutritionRecord: null,
        allNutritionRecords:[],
        allNutritionCattleRecords:[],
        allNutritionGoatRecords:[],
        allNutritionSheepRecords:[],
        allNutritionPigRecords:[],
        allNutritionPoultryRecords:[],
        allNutritionDogsAndCatsRecords:[],
        allNutritionRabbitRecords:[],
        allNutritionWildlifeOrExoticsRecords:[],
        allNutritionHorseRecords:[],
       
        

        
    nutritionForm:{
        nutritionClientName:null,
        nutritionClientPhoneNumber:null,
        nutritionClientLocation:null,
        nutritionClientTown:null,
        nutritionCategory:null,
        nutritionClientComments:null,
       
        
    },

    nutritionFilterForm:{
        startDate:null,
        endDate:null
    },



    })


    export const getters = {
        getField,
    
        loading(state) {
            return state.loading
        },
        selectedNutritionRecord(state) {
            return state.selectedNutritionRecord
          },
    
        allNutritionRecords(state){
            return state.allNutritionRecords
        },
    
        filteredStartTime(state){
            return state.filteredStartTime
          },
    
          filteredEndTime(state){
            return state.filteredEndTime
          },
    
        
        allNutritionCattleRecords(state){
            return state.allNutritionCattleRecords
        },
    
        allNutritionGoatRecords(state){
            return state.allNutritionGoatRecords
        },
    
        allNutritionSheepRecords(state){
            return state.allNutritionSheepRecords
        },
    
        allNutritionPigRecords(state){
            return state.allNutritionPigRecords
        },
    
        allNutritionPoultryRecords(state){
            return state.allNutritionPoultryRecords
        },
    
        allNutritionDogsAndCatsRecords(state){
            return state.allNutritionDogsAndCatsRecords
        },
    
        allNutritionRabbitRecords(state){
            return state.allNutritionRabbitRecords
        },
    
        allNutritionWildlifeOrExoticsRecords(state){
            return state.allNutritionWildlifeOrExoticsRecords
        },
    
        allNutritionHorseRecords(state){
            return state.allNutritionHorseRecords
        },
    }
    
    export const mutations = {

        updateField,
    
        [SET_LOADING](state, loading) {
            state.loading = loading
        },  
    
        //MUTATIONS FOR ADDING, SETTING AND GETTING NutritionRecordS
        [ADD_NUTRITION_RECORD](state, newNutritionRecord){
            state.allNutritionRecords.push(newNutritionRecord)
        },
    
     
        [SET_SELECTED_NUTRITION_RECORD](state, newNutritionRecord) {
            state.selectedNutritionRecord = newNutritionRecord
          },
        [SET_ALL_NUTRITION_RECORDS](state, payload) {
            state.allNutritionRecords = payload
        },
        [GET_ALL_NUTRITION_RECORDS](state, payload){
            state.allNutritionRecords = payload
        },
    
    
        //---------------------------GETTERS------------------------------//
    
        
        [GET_FILTERED_NUTRITION_START_TIME](state, payload){
            state.filteredStartTime= payload
        },
    
        [GET_FILTERED_NUTRITION_END_TIME](state, payload){
            state.filteredEndTime= payload
        },
    
    
        [GET_ALL_NUTRITION_CATTLE_RECORDS](state, payload){
            state.allNutritionCattleRecords = payload
        },
    
        [GET_ALL_NUTRITION_GOATS_RECORDS](state, payload){
            state.allNutritionGoatRecords = payload
        },
    
        [GET_ALL_NUTRITION_SHEEP_RECORDS](state, payload){
            state.allNutritionSheepRecords = payload
        },
    
        [GET_ALL_NUTRITION_PIGS_RECORDS](state, payload){
            state.allNutritionPigRecords = payload
        },
    
        [GET_ALL_NUTRITION_POULTRY_RECORDS](state, payload){
            state.allNutritionPoultryRecords = payload
        },
    
        [GET_ALL_NUTRITION_DOGS_AND_CATS_RECORDS](state, payload){
            state.allNutritionDogsAndCatsRecords = payload
        },
    
        [GET_ALL_NUTRITION_RABBITS_RECORDS](state, payload){
            state.allNutritionRabbitRecords = payload
        },
    
        [GET_ALL_NUTRITION_WILDLIFE_OR_EXOTICS_RECORDS](state, payload){
            state.allNutritionWildlifeOrExoticsRecords = payload
        },
    
        [GET_ALL_NUTRITION_HORSES_RECORDS](state, payload){
            state.allNutritionHorseRecords = payload
        },
    
    }

    export const actions = {

   
     
     //GET ALL NUTRITION RECORDS
        async getAllNutritionRecords({ state,commit,rootState,rootGetters }){
            try {
                //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
                commit(SET_LOADING, true)
    
              const users =  rootGetters['users/allUsers']
    
              const loggedInUser = rootGetters['users/loggedInUser']
    
            
    
               let userEmail = loggedInUser.email;
               
                //API REQUEST IS MADE AND RESULT IS STORED IN CONST
               const {data: response} = await api.get(`/nutrition/allNutritionRecords`)
    
               if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Admin" )) ){
                if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Manager" )) ){
                const customeUserRecords = response.data.filter( cur=>
                    cur.createdBy === this.$auth.user.email
                          )
                          commit(GET_ALL_NUTRITION_RECORDS, customeUserRecords);
                }
            }
                
             else{

                commit(GET_ALL_NUTRITION_RECORDS, response.data);
             } 
               
    
              
    
               commit(SET_LOADING, false);
    
            } catch (error) {
                commit(SET_LOADING, false);
                this.$log.error(error.message)
            }
        },
    
        //ADD NEW NutritionRecord TO ALL NutritionRecordS
        async addNewNutritionRecord({ state, commit}){
            try {
                commit(SET_LOADING, true);
    
    
                const newNutritionRecord = cloneDeep(state.nutritionForm);
    
                newNutritionRecord.createdBy = this.$auth.user.email;
               
               
               console.log(newNutritionRecord);
    
               
                const response = await api.post(`/nutrition/addNewNutritionRecord`, newNutritionRecord);
    
                console.log(response.data);
    
                commit(ADD_NUTRITION_RECORD, response.data);
                
                commit(SET_LOADING, false);
    
            } catch (error) {
                commit(SET_LOADING, false);
                this.log.error(error.message);
            }
        },
    
        async getFilteredNutritionRecords({ state,commit,rootState,rootGetters }){
            try {
                //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
                commit(SET_LOADING, true)
    
              const users =  rootGetters['users/allUsers']
    
              const loggedInUser = rootGetters['users/loggedInUser']
    
            
    
               let userEmail = loggedInUser.email;
    
                 const newFilterRecord = cloneDeep(state.nutritionFilterForm);
    
                 newFilterRecord.startDate = newFilterRecord.startDate.toLocaleDateString();
    
                 newFilterRecord.endDate = newFilterRecord.endDate.toLocaleDateString();
    
                 console.log(newFilterRecord.startDate);
                 console.log(newFilterRecord.endDate);
                
               
                //API REQUEST IS MADE AND RESULT IS STORED IN CONST
               const {data: response} = await api.get(`/nutrition/allNutritionRecords`)
    
               if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Admin" )) ){
                if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Manager" )) ){
                const customeUserRecords = response.data.filter( cur=>
                    cur.createdBy === this.$auth.user.email
                          )

                          const cattleRecords = customeUserRecords.filter( a=>
                            a.nutritionCategory ==='Cattle'
                           )
                    
                           console.log(cattleRecords.length)
                    
                            const goatRecords = customeUserRecords.filter( b=>
                             b.nutritionCategory ==='Goats'
                            )
                    
                            console.log(goatRecords.length)
                    
                            const sheepRecords = customeUserRecords.filter( c=>
                             c.nutritionCategory ==='Sheep'
                            )
                    
                            const pigRecords = customeUserRecords.filter( d=>
                             d.nutritionCategory ==='Pigs'
                            )
                    
                            const poultryRecords = customeUserRecords.filter( d=>
                                d.nutritionCategory ==='Poultry'
                               )
                    
                            const dogsAndCatsRecords = customeUserRecords.filter( e=>
                             e.nutritionCategory ==='Dogs & Cats'
                            )
                    
                    
                            const rabbitRecords = customeUserRecords.filter( f=>
                             f.nutritionCategory ==='Rabbits'
                            )
                    
                            const wildlifeOrExoticsRecords = customeUserRecords.filter( g=>
                             g.nutritionCategory ==='Wildlife Or Exotics'
                            )
                    
                           
                            const horseRecords = customeUserRecords.filter( h=>
                             h.nutritionCategory ==='Horses'
                            )
                    
                           
                    
                    //   // -------------------------------END OF FILTERING BY CATEGORY----------------------//
                    
                    
                    
                    
                    //    //--------FILTER CATEGORIES BY DATE AND SUMMATION OF EACH CATEGORY------------------//
                              const filteredCattleRecords = cattleRecords.filter( at => 
                             at.date >= newFilterRecord.startDate && at.date <= newFilterRecord.endDate
                             );
                    
                    
                    
                             const filteredGoatRecords = goatRecords.filter( bt => 
                                 bt.date >= newFilterRecord.startDate && bt.date <= newFilterRecord.endDate
                                 );
                    
                             const filteredSheepRecords = sheepRecords.filter( ct => 
                             ct.date >= newFilterRecord.startDate && ct.date <= newFilterRecord.endDate
                             );
                    
                             const filteredPigRecords = pigRecords.filter( dt => 
                             dt.date >= newFilterRecord.startDate && dt.date <= newFilterRecord.endDate
                             );
                    
                             const filteredPoultryRecords = poultryRecords.filter( et => 
                             et.date >= newFilterRecord.startDate && et.date <= newFilterRecord.endDate
                             );
                    
                             const filteredDogsAndCatsRecords= dogsAndCatsRecords.filter( ft => 
                             ft.date >= newFilterRecord.startDate && ft.date <= newFilterRecord.endDate
                             );
                    
                             const filteredRabbitRecords = rabbitRecords.filter( gt => 
                             gt.date >= newFilterRecord.startDate && gt.date <= newFilterRecord.endDate
                             );
                    
                             const filteredWildlifeOrExoticsRecords = wildlifeOrExoticsRecords.filter( ht => 
                                 ht.date >= newFilterRecord.startDate && ht.date <= newFilterRecord.endDate
                                 );
                    
                             const filteredHorseRecords = horseRecords.filter( it => 
                             it.date >= newFilterRecord.startDate && it.date <= newFilterRecord.endDate
                             );
                    
                           
                            
                            
                            console.log(filteredCattleRecords.length);
                    
                            
                            
                    
                            console.log(filteredGoatRecords.length);
                    
                            console.log(filteredSheepRecords.length);
                    
                             console.log(filteredPigRecords.length);
                    
                           console.log(filteredPoultryRecords.length);
                    
                             console.log(filteredDogsAndCatsRecords.length);
                    
                             console.log(filteredRabbitRecords.length);
                    
                             console.log(filteredWildlifeOrExoticsRecords.length);
                    
                             console.log(filteredHorseRecords.length);
                    
                            
                            
                    
                    //            console.log(response.data);
                            
                    
                    
                               //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
                            //   commit(GET_ALL_Nutrition_RECORDS, response.data);
                    
                               commit(GET_FILTERED_NUTRITION_START_TIME, newFilterRecord.startDate);
                    
                               commit(GET_FILTERED_NUTRITION_END_TIME, newFilterRecord.endDate);
                    
                              commit(GET_ALL_NUTRITION_CATTLE_RECORDS, filteredCattleRecords.length);
                    
                               commit(GET_ALL_NUTRITION_GOATS_RECORDS, filteredGoatRecords.length);
                    
                                commit(GET_ALL_NUTRITION_SHEEP_RECORDS, filteredSheepRecords.length);
                    
                               commit(GET_ALL_NUTRITION_PIGS_RECORDS, filteredPigRecords.length);
                    
                               commit(GET_ALL_NUTRITION_POULTRY_RECORDS, filteredPoultryRecords.length);
                    
                               commit(GET_ALL_NUTRITION_DOGS_AND_CATS_RECORDS, filteredDogsAndCatsRecords.length);
                    
                               commit(GET_ALL_NUTRITION_RABBITS_RECORDS, filteredRabbitRecords.length);
                    
                               commit(GET_ALL_NUTRITION_WILDLIFE_OR_EXOTICS_RECORDS, filteredWildlifeOrExoticsRecords.length);
                    
                               commit(GET_ALL_NUTRITION_HORSES_RECORDS, filteredHorseRecords.length);
                    
                }
            }

            else{

                const cattleRecords = response.data.filter( a=>
                    a.nutritionCategory ==='Cattle'
                   )
            
                   console.log(cattleRecords.length)
            
                    const goatRecords = response.data.filter( b=>
                     b.nutritionCategory ==='Goats'
                    )
            
                    console.log(goatRecords.length)
            
                    const sheepRecords = response.data.filter( c=>
                     c.nutritionCategory ==='Sheep'
                    )
            
                    const pigRecords = response.data.filter( d=>
                     d.nutritionCategory ==='Pigs'
                    )
            
                    const poultryRecords = response.data.filter( d=>
                        d.nutritionCategory ==='Poultry'
                       )
            
                    const dogsAndCatsRecords = response.data.filter( e=>
                     e.nutritionCategory ==='Dogs & Cats'
                    )
            
            
                    const rabbitRecords = response.data.filter( f=>
                     f.nutritionCategory ==='Rabbits'
                    )
            
                    const wildlifeOrExoticsRecords = response.data.filter( g=>
                     g.nutritionCategory ==='Wildlife Or Exotics'
                    )
            
                   
                    const horseRecords = response.data.filter( h=>
                     h.nutritionCategory ==='Horses'
                    )
            
                   
            
            //   // -------------------------------END OF FILTERING BY CATEGORY----------------------//
            
            
            
            
            //    //--------FILTER CATEGORIES BY DATE AND SUMMATION OF EACH CATEGORY------------------//
                      const filteredCattleRecords = cattleRecords.filter( at => 
                     at.date >= newFilterRecord.startDate && at.date <= newFilterRecord.endDate
                     );
            
            
            
                     const filteredGoatRecords = goatRecords.filter( bt => 
                         bt.date >= newFilterRecord.startDate && bt.date <= newFilterRecord.endDate
                         );
            
                     const filteredSheepRecords = sheepRecords.filter( ct => 
                     ct.date >= newFilterRecord.startDate && ct.date <= newFilterRecord.endDate
                     );
            
                     const filteredPigRecords = pigRecords.filter( dt => 
                     dt.date >= newFilterRecord.startDate && dt.date <= newFilterRecord.endDate
                     );
            
                     const filteredPoultryRecords = poultryRecords.filter( et => 
                     et.date >= newFilterRecord.startDate && et.date <= newFilterRecord.endDate
                     );
            
                     const filteredDogsAndCatsRecords= dogsAndCatsRecords.filter( ft => 
                     ft.date >= newFilterRecord.startDate && ft.date <= newFilterRecord.endDate
                     );
            
                     const filteredRabbitRecords = rabbitRecords.filter( gt => 
                     gt.date >= newFilterRecord.startDate && gt.date <= newFilterRecord.endDate
                     );
            
                     const filteredWildlifeOrExoticsRecords = wildlifeOrExoticsRecords.filter( ht => 
                         ht.date >= newFilterRecord.startDate && ht.date <= newFilterRecord.endDate
                         );
            
                     const filteredHorseRecords = horseRecords.filter( it => 
                     it.date >= newFilterRecord.startDate && it.date <= newFilterRecord.endDate
                     );
            
                   
                    
                    
                    console.log(filteredCattleRecords.length);
            
                    
                    
            
                    console.log(filteredGoatRecords.length);
            
                    console.log(filteredSheepRecords.length);
            
                     console.log(filteredPigRecords.length);
            
                   console.log(filteredPoultryRecords.length);
            
                     console.log(filteredDogsAndCatsRecords.length);
            
                     console.log(filteredRabbitRecords.length);
            
                     console.log(filteredWildlifeOrExoticsRecords.length);
            
                     console.log(filteredHorseRecords.length);
            
                    
                    
            
            //            console.log(response.data);
                    
            
            
                       //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
                    //   commit(GET_ALL_Nutrition_RECORDS, response.data);
            
                       commit(GET_FILTERED_NUTRITION_START_TIME, newFilterRecord.startDate);
            
                       commit(GET_FILTERED_NUTRITION_END_TIME, newFilterRecord.endDate);
            
                      commit(GET_ALL_NUTRITION_CATTLE_RECORDS, filteredCattleRecords.length);
            
                       commit(GET_ALL_NUTRITION_GOATS_RECORDS, filteredGoatRecords.length);
            
                        commit(GET_ALL_NUTRITION_SHEEP_RECORDS, filteredSheepRecords.length);
            
                       commit(GET_ALL_NUTRITION_PIGS_RECORDS, filteredPigRecords.length);
            
                       commit(GET_ALL_NUTRITION_POULTRY_RECORDS, filteredPoultryRecords.length);
            
                       commit(GET_ALL_NUTRITION_DOGS_AND_CATS_RECORDS, filteredDogsAndCatsRecords.length);
            
                       commit(GET_ALL_NUTRITION_RABBITS_RECORDS, filteredRabbitRecords.length);
            
                       commit(GET_ALL_NUTRITION_WILDLIFE_OR_EXOTICS_RECORDS, filteredWildlifeOrExoticsRecords.length);
            
                       commit(GET_ALL_NUTRITION_HORSES_RECORDS, filteredHorseRecords.length);
            }
               commit(SET_LOADING, false);
    
            } catch (error) {
                commit(SET_LOADING, false);
                this.$log.error(error.message)
            }
        },
    
        selectNutritionRecord({ commit }, newNutritionRecord) {
            try {
                commit(SET_SELECTED_NUTRITION_RECORD, newNutritionRecord)
                console.log(newNutritionRecord._id)
            } catch (error) {
                console.log('Error')
            }
            
          },
        }    
    