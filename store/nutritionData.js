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
        GET_ALL_OTHER_NUTRITION_RECORDS

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
        allNutritionOtherRecords:[],    

       
        

        
    nutritionForm:{
        nutritionConsultingPerson:null,
        nutritionOtherConsultingPerson:null,
        nutritionClientName:null,
        nutritionClientPhoneNumber:null,
        nutritionClientLocation:null,
        nutritionClientTown:null,
        nutritionCategory:null,
        nutritionOtherCategory:null,
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

        allNutritionOtherRecords(state){
            return state.allNutritionOtherRecords
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

            
        [GET_ALL_OTHER_NUTRITION_RECORDS](state, payload){
            state.allNutritionOtherRecords = payload
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


               
            const option = loggedInUser.role;

            switch (option) {
             case 'Admin':
                 commit(GET_ALL_NUTRITION_RECORDS, response.data);
                 break;
 
             case 'Manager':
                 commit(GET_ALL_NUTRITION_RECORDS, response.data);
             break;
            
             default:
                 const customeUserRecords = response.data.filter( cur=>
                     cur.createdBy === this.$auth.user.email
                           )
 
                       console.log(customeUserRecords);
                       console.log(customeUserRecords.length)
                       commit(GET_ALL_NUTRITION_RECORDS, customeUserRecords);
 
                 break;
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
    
                 newFilterRecord.startDate = newFilterRecord.startDate.toLocaleDateString('en-US');
    
                 newFilterRecord.endDate = newFilterRecord.endDate.toLocaleDateString('en-US');
    
                 console.log(newFilterRecord.startDate);
                 console.log(newFilterRecord.endDate);
                
               
                //API REQUEST IS MADE AND RESULT IS STORED IN CONST
               const {data: response} = await api.get(`/nutrition/allNutritionRecords`)


               
            const option = loggedInUser.role;

            switch (option) {
             case 'Admin':
                

                       let cattleRecords = response.data.filter( a=>
                        a.nutritionCategory ==='Cattle'
                       )
                
                       console.log(cattleRecords.length)
                
                        let goatRecords = response.data.filter( b=>
                         b.nutritionCategory ==='Goats'
                        )
                
                        console.log(goatRecords.length)
                
                        let sheepRecords = response.data.filter( c=>
                         c.nutritionCategory ==='Sheep'
                        )
                
                        let pigRecords = response.data.filter( d=>
                         d.nutritionCategory ==='Pigs'
                        )
                
                        let poultryRecords = response.data.filter( d=>
                            d.nutritionCategory ==='Poultry'
                           )
                
                        let dogsAndCatsRecords = response.data.filter( e=>
                         e.nutritionCategory ==='Dogs & Cats'
                        )
                
                
                        let rabbitRecords = response.data.filter( f=>
                         f.nutritionCategory ==='Rabbits'
                        )
                
                        let wildlifeOrExoticsRecords = response.data.filter( g=>
                         g.nutritionCategory ==='Wildlife Or Exotics'
                        )
                
                       
                        let horseRecords = response.data.filter( h=>
                         h.nutritionCategory ==='Horses'
                        )
    
    
                        let otherNutritionRecords = response.data.filter( i=>
                            i.nutritionCategory ==='Other'
                           )
                
                       
                
                //   // -------------------------------END OF FILTERING BY CATEGORY----------------------//
                
                
                
                
                //    //--------FILTER CATEGORIES BY DATE AND SUMMATION OF EACH CATEGORY------------------//
                          let filteredCattleRecords = cattleRecords.filter( at => 
                         new Date(at.date) >= new Date(newFilterRecord.startDate) && new Date(at.date) <= new Date(newFilterRecord.endDate)
                         );
                
                
                
                         let filteredGoatRecords = goatRecords.filter( bt => 
                             new Date(bt.date) >= new Date(newFilterRecord.startDate) && new Date(bt.date) <= new Date(newFilterRecord.endDate)
                             );
                
                         let filteredSheepRecords = sheepRecords.filter( ct => 
                         new Date(ct.date) >= new Date(newFilterRecord.startDate) && new Date(ct.date) <= new Date(newFilterRecord.endDate)
                         );
                
                         let filteredPigRecords = pigRecords.filter( dt => 
                         new Date(dt.date) >= new Date(newFilterRecord.startDate) && new Date(dt.date) <= new Date(newFilterRecord.endDate)
                         );
                
                         let filteredPoultryRecords = poultryRecords.filter( et => 
                         new Date(et.date) >= new Date(newFilterRecord.startDate) && new Date(et.date) <= new Date(newFilterRecord.endDate)
                         );
                
                         let filteredDogsAndCatsRecords= dogsAndCatsRecords.filter( ft => 
                         new Date(ft.date) >= new Date(newFilterRecord.startDate) && new Date(ft.date) <= new Date(newFilterRecord.endDate)
                         );
                
                         let filteredRabbitRecords = rabbitRecords.filter( gt => 
                         new Date(gt.date) >= new Date(newFilterRecord.startDate) && new Date(gt.date) <= new Date(newFilterRecord.endDate)
                         );
                
                         let filteredWildlifeOrExoticsRecords = wildlifeOrExoticsRecords.filter( ht => 
                             new Date(ht.date) >= new Date(newFilterRecord.startDate) && new Date(ht.date) <= new Date(newFilterRecord.endDate)
                             );
                
                         let filteredHorseRecords = horseRecords.filter( it => 
                         new Date(it.date) >= new Date(newFilterRecord.startDate) && new Date(it.date) <= new Date(newFilterRecord.endDate)
                         );
    
    
                         let filteredOtherRecords = otherNutritionRecords.filter( it => 
                            new Date(it.date) >= new Date(newFilterRecord.startDate) && new Date(it.date) <= new Date(newFilterRecord.endDate)
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
    
                         console.log(filteredOtherRecords.length);
                
                        
                        
                
                //            console.log(response.data);
                        
                
                
                           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
                        //   commit(GET_ALL_Nutrition_RECORDS, response.data);
                
                           commit(GET_FILTERED_NUTRITION_START_TIME, new Date(newFilterRecord.startDate));
                
                           commit(GET_FILTERED_NUTRITION_END_TIME, new Date(newFilterRecord.endDate));
                
                          commit(GET_ALL_NUTRITION_CATTLE_RECORDS, filteredCattleRecords.length);
                
                           commit(GET_ALL_NUTRITION_GOATS_RECORDS, filteredGoatRecords.length);
                
                            commit(GET_ALL_NUTRITION_SHEEP_RECORDS, filteredSheepRecords.length);
                
                           commit(GET_ALL_NUTRITION_PIGS_RECORDS, filteredPigRecords.length);
                
                           commit(GET_ALL_NUTRITION_POULTRY_RECORDS, filteredPoultryRecords.length);
                
                           commit(GET_ALL_NUTRITION_DOGS_AND_CATS_RECORDS, filteredDogsAndCatsRecords.length);
                
                           commit(GET_ALL_NUTRITION_RABBITS_RECORDS, filteredRabbitRecords.length);
                
                           commit(GET_ALL_NUTRITION_WILDLIFE_OR_EXOTICS_RECORDS, filteredWildlifeOrExoticsRecords.length);
                
                           commit(GET_ALL_NUTRITION_HORSES_RECORDS, filteredHorseRecords.length);
    
                           commit(GET_ALL_OTHER_NUTRITION_RECORDS, filteredOtherRecords.length);
                
                 break;
 
             case 'Manager':
                 cattleRecords = response.data.filter( a=>
                    a.nutritionCategory ==='Cattle'
                   )
            
                   console.log(cattleRecords.length)
            
                     goatRecords = response.data.filter( b=>
                     b.nutritionCategory ==='Goats'
                    )
            
                    console.log(goatRecords.length)
            
                     sheepRecords = response.data.filter( c=>
                     c.nutritionCategory ==='Sheep'
                    )
            
                     pigRecords = response.data.filter( d=>
                     d.nutritionCategory ==='Pigs'
                    )
            
                     poultryRecords = response.data.filter( d=>
                        d.nutritionCategory ==='Poultry'
                       )
            
                     dogsAndCatsRecords = response.data.filter( e=>
                     e.nutritionCategory ==='Dogs & Cats'
                    )
            
            
                     rabbitRecords = response.data.filter( f=>
                     f.nutritionCategory ==='Rabbits'
                    )
            
                     wildlifeOrExoticsRecords = response.data.filter( g=>
                     g.nutritionCategory ==='Wildlife Or Exotics'
                    )
            
                   
                     horseRecords = response.data.filter( h=>
                     h.nutritionCategory ==='Horses'
                    )


                     otherNutritionRecords = response.data.filter( i=>
                        i.nutritionCategory ==='Other'
                       )
            
                   
            
            //   // -------------------------------END OF FILTERING BY CATEGORY----------------------//
            
            
            
            
            //    //--------FILTER CATEGORIES BY DATE AND SUMMATION OF EACH CATEGORY------------------//
                       filteredCattleRecords = cattleRecords.filter( at => 
                     new Date(at.date) >= new Date(newFilterRecord.startDate) && new Date(at.date) <= new Date(newFilterRecord.endDate)
                     );
            
            
            
                      filteredGoatRecords = goatRecords.filter( bt => 
                         new Date(bt.date) >= new Date(newFilterRecord.startDate) && new Date(bt.date) <= new Date(newFilterRecord.endDate)
                         );
            
                      filteredSheepRecords = sheepRecords.filter( ct => 
                     new Date(ct.date) >= new Date(newFilterRecord.startDate) && new Date(ct.date) <= new Date(newFilterRecord.endDate)
                     );
            
                      filteredPigRecords = pigRecords.filter( dt => 
                     new Date(dt.date) >= new Date(newFilterRecord.startDate) && new Date(dt.date) <= new Date(newFilterRecord.endDate)
                     );
            
                      filteredPoultryRecords = poultryRecords.filter( et => 
                     new Date(et.date) >= new Date(newFilterRecord.startDate) && new Date(et.date) <= new Date(newFilterRecord.endDate)
                     );
            
                      filteredDogsAndCatsRecords= dogsAndCatsRecords.filter( ft => 
                     new Date(ft.date) >= new Date(newFilterRecord.startDate) && new Date(ft.date) <= new Date(newFilterRecord.endDate)
                     );
            
                      filteredRabbitRecords = rabbitRecords.filter( gt => 
                     new Date(gt.date) >= new Date(newFilterRecord.startDate) && new Date(gt.date) <= new Date(newFilterRecord.endDate)
                     );
            
                      filteredWildlifeOrExoticsRecords = wildlifeOrExoticsRecords.filter( ht => 
                         new Date(ht.date) >= new Date(newFilterRecord.startDate) && new Date(ht.date) <= new Date(newFilterRecord.endDate)
                         );
            
                      filteredHorseRecords = horseRecords.filter( it => 
                     new Date(it.date) >= new Date(newFilterRecord.startDate) && new Date(it.date) <= new Date(newFilterRecord.endDate)
                     );


                      filteredOtherRecords = otherNutritionRecords.filter( it => 
                        new Date(it.date) >= new Date(newFilterRecord.startDate) && new Date(it.date) <= new Date(newFilterRecord.endDate)
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

                     console.log(filteredOtherRecords.length);
            
                    
                    
            
            //            console.log(response.data);
                    
            
            
                       //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
                    //   commit(GET_ALL_Nutrition_RECORDS, response.data);
            
                       commit(GET_FILTERED_NUTRITION_START_TIME, new Date(newFilterRecord.startDate));
            
                       commit(GET_FILTERED_NUTRITION_END_TIME, new Date(newFilterRecord.endDate));
            
                      commit(GET_ALL_NUTRITION_CATTLE_RECORDS, filteredCattleRecords.length);
            
                       commit(GET_ALL_NUTRITION_GOATS_RECORDS, filteredGoatRecords.length);
            
                        commit(GET_ALL_NUTRITION_SHEEP_RECORDS, filteredSheepRecords.length);
            
                       commit(GET_ALL_NUTRITION_PIGS_RECORDS, filteredPigRecords.length);
            
                       commit(GET_ALL_NUTRITION_POULTRY_RECORDS, filteredPoultryRecords.length);
            
                       commit(GET_ALL_NUTRITION_DOGS_AND_CATS_RECORDS, filteredDogsAndCatsRecords.length);
            
                       commit(GET_ALL_NUTRITION_RABBITS_RECORDS, filteredRabbitRecords.length);
            
                       commit(GET_ALL_NUTRITION_WILDLIFE_OR_EXOTICS_RECORDS, filteredWildlifeOrExoticsRecords.length);
            
                       commit(GET_ALL_NUTRITION_HORSES_RECORDS, filteredHorseRecords.length);

                       commit(GET_ALL_OTHER_NUTRITION_RECORDS, filteredOtherRecords.length);
           
             break;
            
             default:
                 let customeUserRecords = response.data.filter( cur=>
                     cur.createdBy === this.$auth.user.email
                           )
 
                       console.log(customeUserRecords);
                       console.log(customeUserRecords.length)
                
                        cattleRecords = customeUserRecords.filter( a=>
                        a.nutritionCategory ==='Cattle'
                       )
                
                       console.log(cattleRecords.length)
                
                         goatRecords = customeUserRecords.filter( b=>
                         b.nutritionCategory ==='Goats'
                        )
                
                        console.log(goatRecords.length)
                
                         sheepRecords = customeUserRecords.filter( c=>
                         c.nutritionCategory ==='Sheep'
                        )
                
                         pigRecords = customeUserRecords.filter( d=>
                         d.nutritionCategory ==='Pigs'
                        )
                
                         poultryRecords = customeUserRecords.filter( d=>
                            d.nutritionCategory ==='Poultry'
                           )
                
                         dogsAndCatsRecords = customeUserRecords.filter( e=>
                         e.nutritionCategory ==='Dogs & Cats'
                        )
                
                
                         rabbitRecords = customeUserRecords.filter( f=>
                         f.nutritionCategory ==='Rabbits'
                        )
                
                         wildlifeOrExoticsRecords = customeUserRecords.filter( g=>
                         g.nutritionCategory ==='Wildlife Or Exotics'
                        )
                
                       
                         horseRecords = customeUserRecords.filter( h=>
                         h.nutritionCategory ==='Horses'
                        )
    
    
                         otherNutritionRecords = customeUserRecords.filter( i=>
                            i.nutritionCategory ==='Other'
                           )
                
                       
                
                //   // -------------------------------END OF FILTERING BY CATEGORY----------------------//
                
                
                
                
                //    //--------FILTER CATEGORIES BY DATE AND SUMMATION OF EACH CATEGORY------------------//
                           filteredCattleRecords = cattleRecords.filter( at => 
                         new Date(at.date) >= new Date(newFilterRecord.startDate) && new Date(at.date) <= new Date(newFilterRecord.endDate)
                         );
                
                
                
                          filteredGoatRecords = goatRecords.filter( bt => 
                             new Date(bt.date) >= new Date(newFilterRecord.startDate) && new Date(bt.date) <= new Date(newFilterRecord.endDate)
                             );
                
                          filteredSheepRecords = sheepRecords.filter( ct => 
                         new Date(ct.date) >= new Date(newFilterRecord.startDate) && new Date(ct.date) <= new Date(newFilterRecord.endDate)
                         );
                
                          filteredPigRecords = pigRecords.filter( dt => 
                         new Date(dt.date) >= new Date(newFilterRecord.startDate) && new Date(dt.date) <= new Date(newFilterRecord.endDate)
                         );
                
                          filteredPoultryRecords = poultryRecords.filter( et => 
                         new Date(et.date) >= new Date(newFilterRecord.startDate) && new Date(et.date) <= new Date(newFilterRecord.endDate)
                         );
                
                          filteredDogsAndCatsRecords= dogsAndCatsRecords.filter( ft => 
                         new Date(ft.date) >= new Date(newFilterRecord.startDate) && new Date(ft.date) <= new Date(newFilterRecord.endDate)
                         );
                
                          filteredRabbitRecords = rabbitRecords.filter( gt => 
                         new Date(gt.date) >= new Date(newFilterRecord.startDate) && new Date(gt.date) <= new Date(newFilterRecord.endDate)
                         );
                
                          filteredWildlifeOrExoticsRecords = wildlifeOrExoticsRecords.filter( ht => 
                             new Date(ht.date) >= new Date(newFilterRecord.startDate) && new Date(ht.date) <= new Date(newFilterRecord.endDate)
                             );
                
                          filteredHorseRecords = horseRecords.filter( it => 
                         new Date(it.date) >= new Date(newFilterRecord.startDate) && new Date(it.date) <= new Date(newFilterRecord.endDate)
                         );
    
    
                          filteredOtherRecords = otherNutritionRecords.filter( it => 
                            new Date(it.date) >= new Date(newFilterRecord.startDate) && new Date(it.date) <= new Date(newFilterRecord.endDate)
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
    
                         console.log(filteredOtherRecords.length);
                
                        
                        
                
                //            console.log(response.data);
                        
                
                
                           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
                        //   commit(GET_ALL_Nutrition_RECORDS, response.data);
                
                           commit(GET_FILTERED_NUTRITION_START_TIME, new Date(newFilterRecord.startDate));
                
                           commit(GET_FILTERED_NUTRITION_END_TIME, new Date(newFilterRecord.endDate));
                
                          commit(GET_ALL_NUTRITION_CATTLE_RECORDS, filteredCattleRecords.length);
                
                           commit(GET_ALL_NUTRITION_GOATS_RECORDS, filteredGoatRecords.length);
                
                            commit(GET_ALL_NUTRITION_SHEEP_RECORDS, filteredSheepRecords.length);
                
                           commit(GET_ALL_NUTRITION_PIGS_RECORDS, filteredPigRecords.length);
                
                           commit(GET_ALL_NUTRITION_POULTRY_RECORDS, filteredPoultryRecords.length);
                
                           commit(GET_ALL_NUTRITION_DOGS_AND_CATS_RECORDS, filteredDogsAndCatsRecords.length);
                
                           commit(GET_ALL_NUTRITION_RABBITS_RECORDS, filteredRabbitRecords.length);
                
                           commit(GET_ALL_NUTRITION_WILDLIFE_OR_EXOTICS_RECORDS, filteredWildlifeOrExoticsRecords.length);
                
                           commit(GET_ALL_NUTRITION_HORSES_RECORDS, filteredHorseRecords.length);
    
                           commit(GET_ALL_OTHER_NUTRITION_RECORDS, filteredOtherRecords.length);
               
 
                 break;
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
    