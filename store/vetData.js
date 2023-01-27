import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { 
        ADD_VET_RECORD,
        ADD_NEW_POST_MORTEM_RECORD,
        SET_ALL_VET_RECORDS, 
        GET_ALL_VET_RECORDS, 
        SET_LOADING,
        SET_SELECTED_VET_RECORD,

        GET_FILTERED_VET_START_TIME,
        GET_FILTERED_VET_END_TIME,
        GET_ALL_CATTLE_RECORDS,
        GET_ALL_GOATS_RECORDS ,
        GET_ALL_SHEEP_RECORDS ,
        GET_ALL_PIGS_RECORDS ,
        GET_ALL_POULTRY_RECORDS, 
        GET_ALL_DOGS_AND_CATS_RECORDS ,
        GET_ALL_RABBITS_RECORDS,
        GET_ALL_WILDLIFE_OR_EXOTICS_RECORDS,
        GET_ALL_HORSES_RECORDS,
        
        
        GET_ALL_POST_MORTEM_RECORDS,


        SET_ALL_CATTLE_RECORDS,
        SET_ALL_GOATS_RECORDS,
        SET_ALL_SHEEP_RECORDS,
        SET_ALL_PIGS_RECORDS,
        SET_ALL_POULTRY_RECORDS,
        SET_ALL_DOGS_AND_CATS_RECORDS,
        SET_ALL_RABBITS_RECORDS ,
        SET_ALL_WILDLIFE_OR_EXOTICS_RECORDS,
        SET_ALL_HORSES_RECORDS,


        SET_ALL_POST_MORTEM_RECORDS,


    //----------VILLAGE CHICKEN DISEASES------------------------
        GET_FILTERED_VET_PM_START_TIME,
        GET_FILTERED_VET_PM_END_TIME,


        GET_ALL_IL_RECORDS,
        GET_ALL_NEWCASTLE_RECORDS,
        GET_ALL_GUMBORO_RECORDS,
        GET_ALL_COCCIDIOSIS_RECORDS,
        GET_ALL_FOWL_POX_RECORDS, 
        GET_ALL_EGG_PERITONITIS_RECORDS ,
        GET_ALL_ECTOPARASITES_RECORDS,
        GET_ALL_HELMINTHIASIS_RECORDS,
        GET_ALL_MYCOPLASMOSIS_RECORDS,
        GET_ALL_SNAKE_BITE_RECORDS,
        GET_ALL_COLIBACILLOSIS_RECORDS,
        GET_ALL_CHRONIC_INFECTIOUS_BRONCHY_RECORDS,


        SET_ALL_IL_RECORDS,
        SET_ALL_NEWCASTLE_RECORDS,
        SET_ALL_GUMBORO_RECORDS,
        SET_ALL_COCCIDIOSIS_RECORDS,
        SET_ALL_FOWL_POX_RECORDS, 
        SET_ALL_EGG_PERITONITIS_RECORDS ,
        SET_ALL_ECTOPARASITES_RECORDS,
        SET_ALL_HELMINTHIASIS_RECORDS,
        SET_ALL_MYCOPLASMOSIS_RECORDS,
        SET_ALL_SNAKE_BITE_RECORDS,
        SET_ALL_COLIBACILLOSIS_RECORDS,
        SET_ALL_CHRONIC_INFECTIOUS_BRONCHY_RECORDS,
       

    } from '@/helpers/mutation-types'

export const state = () => ({

    loading: false,
    filteredStartTime:[],
    filteredEndTime:[],
    allVetRecords:[],
    allCattleRecords:[],
    allGoatRecords:[],
    allSheepRecords:[],
    allPigRecords:[],
    allPoultryRecords:[],
    allDogsAndCatsRecords:[],
    allRabbitRecords:[],
    allWildlifeOrExoticsRecords:[],
    allHorseRecords:[],
    allPostMortemRecords:[],


    //--------------VILLAGE CHICKEN DISEASES-----------------------------//
    allILRecords:[],
    allNewcastleRecords:[],
    allGumboroRecords:[],
    allCoccidiosisRecords:[],
    allFowlPoxRecords:[],
    allEggPeritonitisRecords:[],
    allEctoParasitesRecords:[],
    allHelminthiasisRecords:[],
    allMycoPlasmosisRecords:[],
    allSnakeBitesRecords:[],
    allColibacillosisRecords:[],
    allChronicInfectiousBronchyRecords:[],


    selectedVetRecord: null,

    vetForm:{
        vetClientName:null,
        vetClientPhoneNumber:null,
        vetClientLocation:null,
        vetCategory:null,
       
        
    },

    vetPostMortemForm:{

        vetPostMortemClientName:null,
        vetPostMortemClientPhoneNumber:null,
        vetPostMortemClientLocation:null,
        vetPostMortemCategory:null,
        vetPostMortemDiseases:null,
       
        
    },


    vetFilterForm:{
        startDate:null,
        endDate:null
    },


    villageChickenPostMortemFilterForm:{
        startDate:null,
        endDate:null
    }


   

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

    filteredStartTime(state){
        return state.filteredStartTime
      },

      filteredEndTime(state){
        return state.filteredEndTime
      },

    
    allCattleRecords(state){
        return state.allCattleRecords
    },

    allGoatRecords(state){
        return state.allGoatRecords
    },

    allSheepRecords(state){
        return state.allSheepRecords
    },

    allPigRecords(state){
        return state.allPigRecords
    },

    allPoultryRecords(state){
        return state.allPoultryRecords
    },

    allDogsAndCatsRecords(state){
        return state.allDogsAndCatsRecords
    },

    allRabbitRecords(state){
        return state.allRabbitRecords
    },

    allWildlifeOrExoticsRecords(state){
        return state.allWildlifeOrExoticsRecords
    },

    allHorseRecords(state){
        return state.allHorseRecords
    },


    //---------------------------POST MORTEM GETTERS----------------//

    allPostMortemRecords(state){
        return state.allPostMortemRecords
    },

    //----------------------------VILLAGE CHICKENS DISEASES----------------//

    allILRecords(state){
        return state.allILRecords
    },

    allNewcastleRecords(state){
        return state.allNewcastleRecords
    },

    allGumboroRecords(state){
        return state.allGumboroRecords
    },

    allCoccidiosisRecords(state){
        return state.allCoccidiosisRecords
    },

    allFowlPoxRecords(state){
        return state.allFowlPoxRecords
    },

    allEggPeritonitis(state){
        return state.allEggPeritonitisRecords
    },

    allEctoParasites(state){
        return state.allEctoParasitesRecords
    },



    allHelminthiasisRecords(state){
        return state.allHelminthiasisRecords
    },

    allMycoPlasmosisRecords(state){
        return state.allMycoPlasmosisRecords
    },

    allSnakeBitesRecords(state){
        return state.allSnakeBitesRecords
    },

    allColibacillosisRecords(state){
        return state.allColibacillosisRecords
    },

    allChronicInfectiousBronchyRecords(state){
        return state.allChronicInfectiousBronchyRecords
    },

    //--------------------------------END OF VILLAGE SECTION -----------------------------//
    
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

    [ADD_NEW_POST_MORTEM_RECORD](state, newPostMortemRecord){
        state.allPostMortemRecords.push(newPostMortemRecord)
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


    //---------------------------GETTERS------------------------------//

    
    [GET_FILTERED_VET_START_TIME](state, payload){
        state.filteredStartTime= payload
    },

    [GET_FILTERED_VET_END_TIME](state, payload){
        state.filteredEndTime= payload
    },


    [GET_ALL_CATTLE_RECORDS](state, payload){
        state.allCattleRecords = payload
    },

    [GET_ALL_GOATS_RECORDS](state, payload){
        state.allGoatRecords = payload
    },

    [GET_ALL_SHEEP_RECORDS](state, payload){
        state.allSheepRecords = payload
    },

    [GET_ALL_PIGS_RECORDS](state, payload){
        state.allPigRecords = payload
    },

    [GET_ALL_POULTRY_RECORDS](state, payload){
        state.allPoultryRecords = payload
    },

    [GET_ALL_DOGS_AND_CATS_RECORDS](state, payload){
        state.allDogsAndCatsRecords = payload
    },

    [GET_ALL_RABBITS_RECORDS](state, payload){
        state.allRabbitRecords = payload
    },

    [GET_ALL_WILDLIFE_OR_EXOTICS_RECORDS](state, payload){
        state.allWildlifeOrExoticsRecords = payload
    },

    [GET_ALL_HORSES_RECORDS](state, payload){
        state.allHorseRecords = payload
    },


    //===========================POST MORTEMS=====================================//
    [GET_ALL_POST_MORTEM_RECORDS](state, payload){
        state.allPostMortemRecords = payload
    },
    //------------------------------------END OF GETTERES----------------------------------------//



    //----------------------------------SETTERS-------------------------------------------------//
    [SET_ALL_CATTLE_RECORDS](state, payload){
        state.allCattleRecords = payload
    },

    [SET_ALL_GOATS_RECORDS](state, payload){
        state.allGoatRecords = payload
    },

    [SET_ALL_SHEEP_RECORDS](state, payload){
        state.allSheepRecords = payload
    },

    [SET_ALL_PIGS_RECORDS](state, payload){
        state.allPigRecords = payload
    },

    [SET_ALL_POULTRY_RECORDS](state, payload){
        state.allPoultryRecords = payload
    },

    [SET_ALL_DOGS_AND_CATS_RECORDS](state, payload){
        state.allDogsAndCatsRecords = payload
    },

    [SET_ALL_RABBITS_RECORDS](state, payload){
        state.allRabbitRecords = payload
    },

    [SET_ALL_WILDLIFE_OR_EXOTICS_RECORDS](state, payload){
        state.allWildlifeOrExoticsRecords = payload
    },

    [SET_ALL_HORSES_RECORDS](state, payload){
        state.allHorseRecords = payload
    },
   //------------------------------------END OF SETTERS----------------------------------------//
    
   
       //-----------------------------POST MORTEMS---------------------------------//
    [SET_ALL_POST_MORTEM_RECORDS](state, payload){
        state.allPostMortemRecords = payload
    },


      //-----------------------------VILLAGE CHICKEN DISEASES---------------------------------//
    [GET_ALL_IL_RECORDS](state, payload){
        state.allILRecords = payload
    },

    [GET_ALL_NEWCASTLE_RECORDS](state, payload){
        state.allNewcastleRecords = payload
    },

    [GET_ALL_GUMBORO_RECORDS](state, payload){
        state.allGumboroRecords = payload
    },

    [GET_ALL_COCCIDIOSIS_RECORDS](state, payload){
        state.allCoccidiosisRecords = payload
    },

    [GET_ALL_FOWL_POX_RECORDS](state, payload){
        state.allFowlPoxRecords = payload
    },

    [GET_ALL_EGG_PERITONITIS_RECORDS](state, payload){
        state.allEggPeritonitisRecords = payload
    },

    [GET_ALL_ECTOPARASITES_RECORDS](state, payload){
        state.allEctoParasitesRecords = payload
    },

    [GET_ALL_HELMINTHIASIS_RECORDS](state, payload){
        state.allHelminthiasisRecords = payload
    },

    [GET_ALL_MYCOPLASMOSIS_RECORDS](state, payload){
        state.allMycoPlasmosisRecords = payload
    },

    [GET_ALL_SNAKE_BITE_RECORDS](state, payload){
        state.allSnakeBitesRecords = payload
    },

    [GET_ALL_COLIBACILLOSIS_RECORDS](state, payload){
        state.allColibacillosisRecords = payload
    },

    [GET_ALL_CHRONIC_INFECTIOUS_BRONCHY_RECORDS](state, payload){
        state.allChronicInfectiousBronchyRecords = payload
    },
  
}

export const actions = {

   
    async load({ commit }) {
        try {
            commit(SET_LOADING, true)
           const newLoad= await api.get(`/vetRecords/allVetRecords`)

        //    if (newLoad.data.createdBy === this.$auth.user.email){

        //     console.log(newLoad);
        //   }

        //    // await dispatch('getInactivePolicies')
        // console.log(newLoad.data)
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
           const {data: response} = await api.get(`/vet/allVetRecords`)

        //   const { data:fetchUsers } = await api.get(`/auth/allUsers`)
            
          
           

           console.log(response.data);
       

           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_VET_RECORDS, response.data);

       
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


            const newVetRecord = cloneDeep(state.vetForm);

         //   newVetRecord.createdBy = this.$auth.user.email;
           
           
           console.log(newVetRecord);

           
            const response = await api.post(`/vet/addNewVetRecord`, newVetRecord);

            console.log(response.data);

            commit(ADD_VET_RECORD, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    async getFilteredVetRecords({ state,commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

             const newFilterRecord = cloneDeep(state.vetFilterForm);

             newFilterRecord.startDate = newFilterRecord.startDate.toLocaleDateString('en-GB');

             newFilterRecord.endDate = newFilterRecord.endDate.toLocaleDateString('en-GB');

             console.log(newFilterRecord.startDate);
             console.log(newFilterRecord.endDate);
            
           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/vet/allVetRecords`)

           console.log(response.data)

       //    const { data:fetchUsers } = await api.get(`/auth/allUsers`)
        
    //    //--------------------ALL AGRO RECORDS FILTERED BY CATEGORY --------------------------------// 
       const cattleRecords = response.data.filter( a=>
        a.vetCategory ==='Cattle'
       )

       console.log(cattleRecords.length)

        const goatRecords = response.data.filter( b=>
         b.vetCategory ==='Goats'
        )

        console.log(goatRecords.length)

        const sheepRecords = response.data.filter( c=>
         c.vetCategory ==='Sheep'
        )

        const pigRecords = response.data.filter( d=>
         d.vetCategory ==='Pigs'
        )

        const poultryRecords = response.data.filter( d=>
            d.vetCategory ==='Poultry'
           )

        const dogsAndCatsRecords = response.data.filter( e=>
         e.vetCategory ==='Dogs & Cats'
        )


        const rabbitRecords = response.data.filter( f=>
         f.vetCategory ==='Rabbits'
        )

        const wildlifeOrExoticsRecords = response.data.filter( g=>
         g.vetCategory ==='Wildlife Or Exotics'
        )

       
        const horseRecords = response.data.filter( h=>
         h.vetCategory ==='Horses'
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
        //   commit(GET_ALL_VET_RECORDS, response.data);

           commit(GET_FILTERED_VET_START_TIME, newFilterRecord.startDate);

           commit(GET_FILTERED_VET_END_TIME, newFilterRecord.endDate);

          commit(GET_ALL_CATTLE_RECORDS, filteredCattleRecords.length);

           commit(GET_ALL_GOATS_RECORDS, filteredGoatRecords.length);

            commit(GET_ALL_SHEEP_RECORDS, filteredSheepRecords.length);

           commit(GET_ALL_PIGS_RECORDS, filteredPigRecords.length);

         commit(GET_ALL_POULTRY_RECORDS, filteredPoultryRecords.length);

           commit(GET_ALL_DOGS_AND_CATS_RECORDS, filteredDogsAndCatsRecords.length);

           commit(GET_ALL_RABBITS_RECORDS, filteredRabbitRecords.length);

           commit(GET_ALL_WILDLIFE_OR_EXOTICS_RECORDS, filteredWildlifeOrExoticsRecords.length);

           commit(GET_ALL_HORSES_RECORDS, filteredHorseRecords.length);

           

       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
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

  

      //-------------------------------POST MORTEMS-------------------------------------//

      async getAllPostMortemRecords({ commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/vet/allPostMortems`)

        //   const { data:fetchUsers } = await api.get(`/auth/allUsers`)
            
          
           

           console.log(response.data);
       

           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_POST_MORTEM_RECORDS, response.data);

       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    //ADD NEW VetRecord TO ALL VetRecordS
    async addNewPostMortemRecord({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newVetRecord = cloneDeep(state.vetPostMortemForm);

         //   newVetRecord.createdBy = this.$auth.user.email;
           
           
           console.log(newVetRecord);

           
            const response = await api.post(`/vet/addNewPostMortem`, newVetRecord);

            console.log(response.data);

            commit(ADD_NEW_POST_MORTEM_RECORD, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },


    async getFilteredVillageChickenPMRecords({ state,commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

             const newFilterRecord = cloneDeep(state.villageChickenPostMortemFilterForm);

             newFilterRecord.startDate = newFilterRecord.startDate.toLocaleDateString('en-GB');

             newFilterRecord.endDate = newFilterRecord.endDate.toLocaleDateString('en-GB');

             console.log(newFilterRecord.startDate);
             console.log(newFilterRecord.endDate);
            
           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/vet/allPostMortems`)

           console.log(response.data)

       //    const { data:fetchUsers } = await api.get(`/auth/allUsers`)
        
    //    //--------------------ALL AGRO RECORDS FILTERED BY CATEGORY --------------------------------// 
       const villageChickenPostMortemRecords = response.data.filter( a=>
        a.vetPostMortemCategory ==='Village Chicken'
       )

       console.log(villageChickenPostMortemRecords.length);

       const infectiousLaryRecords = response.data.filter( a=>
        a.vetPostMortemCategory ==='Village Chicken' && a.vetPostMortemDiseases === 'Infectious Laryngotracheitis'
       )

       const newCastleRecords = response.data.filter( a=>
        a.vetPostMortemCategory ==='Village Chicken' && a.vetPostMortemDiseases === 'Newcastle'
       )

       const gumboroRecords = response.data.filter( a=>
        a.vetPostMortemCategory ==='Village Chicken' && a.vetPostMortemDiseases === 'Gumboro'
       )

       const coccidiosisRecords = response.data.filter( a=>
        a.vetPostMortemCategory ==='Village Chicken' && a.vetPostMortemDiseases === 'Coccidiosis'
       )

       const fowlPoxRecords = response.data.filter( a=>
        a.vetPostMortemCategory ==='Village Chicken' && a.vetPostMortemDiseases === 'Fowl Pox'
       )

       const eggPeritonitisRecords = response.data.filter( a=>
        a.vetPostMortemCategory ==='Village Chicken' && a.vetPostMortemDiseases === 'Egg Peritonitis'
       )

       const ectoParasitesRecords = response.data.filter( a=>
        a.vetPostMortemCategory ==='Village Chicken' && a.vetPostMortemDiseases === 'Ectoparasites'
       )

       const helminthiasisRecords = response.data.filter( a=>
        a.vetPostMortemCategory ==='Village Chicken' && a.vetPostMortemDiseases === 'Helminthiasis'
       )

       const mycoPlasmosisRecords = response.data.filter( a=>
        a.vetPostMortemCategory ==='Village Chicken' && a.vetPostMortemDiseases === 'Mycoplasmosis'
       )

       const snakeBiteRecords = response.data.filter( a=>
        a.vetPostMortemCategory ==='Village Chicken' && a.vetPostMortemDiseases === 'Snake Bites'
       )

       const colibacillosisRecords = response.data.filter( a=>
        a.vetPostMortemCategory ==='Village Chicken' && a.vetPostMortemDiseases === 'Colibacillosis'
       )

       const chronicInfectiousBronchyRecords = response.data.filter( a=>
        a.vetPostMortemCategory ==='Village Chicken' && a.vetPostMortemDiseases === 'Chronic Infectious Bronchitis'
       )
       
         const filteredILRecords = infectiousLaryRecords.filter( ct => 
         ct.date >= newFilterRecord.startDate && ct.date <= newFilterRecord.endDate
         );

        const filteredNewcastleRecords = newCastleRecords.filter( ct => 
        ct.date >= newFilterRecord.startDate && ct.date <= newFilterRecord.endDate
        );

        const filteredGumboroRecords = gumboroRecords.filter( ct => 
        ct.date >= newFilterRecord.startDate && ct.date <= newFilterRecord.endDate
        );

        const filteredCoccidiosisecords = coccidiosisRecords.filter( ct => 
        ct.date >= newFilterRecord.startDate && ct.date <= newFilterRecord.endDate
        );

        const filteredFowlPoxRecords = fowlPoxRecords.filter( ct => 
        ct.date >= newFilterRecord.startDate && ct.date <= newFilterRecord.endDate
        );

        const filteredEggPeritonitisRecords = eggPeritonitisRecords.filter( ct => 
        ct.date >= newFilterRecord.startDate && ct.date <= newFilterRecord.endDate
        );

        const filteredEctoParasitesRecords = ectoParasitesRecords.filter( ct => 
            ct.date >= newFilterRecord.startDate && ct.date <= newFilterRecord.endDate
            );
    
        const filteredHelminthiasisRecords = helminthiasisRecords.filter( ct => 
        ct.date >= newFilterRecord.startDate && ct.date <= newFilterRecord.endDate
        );

        const filteredMycoplasmosisRecords = mycoPlasmosisRecords.filter( ct => 
        ct.date >= newFilterRecord.startDate && ct.date <= newFilterRecord.endDate
        );

        const filteredSnakeBiteRecords = snakeBiteRecords.filter( ct => 
        ct.date >= newFilterRecord.startDate && ct.date <= newFilterRecord.endDate
        );

        const filteredColibacillosisRecords = coccidiosisRecords.filter( ct => 
        ct.date >= newFilterRecord.startDate && ct.date <= newFilterRecord.endDate
        );

        const filteredChronicInfectiousBronchyRecords = chronicInfectiousBronchyRecords.filter( ct => 
        ct.date >= newFilterRecord.startDate && ct.date <= newFilterRecord.endDate
        );
    

       
            

       
           commit(GET_FILTERED_VET_PM_START_TIME, newFilterRecord.startDate);

           commit(GET_FILTERED_VET_PM_END_TIME, newFilterRecord.endDate);

           commit(GET_ALL_IL_RECORDS, filteredILRecords.length);

           commit(GET_ALL_NEWCASTLE_RECORDS, filteredNewcastleRecords.length);

           commit(GET_ALL_GUMBORO_RECORDS, filteredGumboroRecords.length);

           commit(GET_ALL_COCCIDIOSIS_RECORDS, filteredCoccidiosisecords.length);

           commit(GET_ALL_FOWL_POX_RECORDS, filteredFowlPoxRecords.length);

           commit(GET_ALL_EGG_PERITONITIS_RECORDS, filteredEggPeritonitisRecords.length);

           commit(GET_ALL_ECTOPARASITES_RECORDS, filteredEctoParasitesRecords.length);

           commit(GET_ALL_HELMINTHIASIS_RECORDS, filteredHelminthiasisRecords.length);

           commit(GET_ALL_MYCOPLASMOSIS_RECORDS, filteredMycoplasmosisRecords.length);

           commit(GET_ALL_SNAKE_BITE_RECORDS, filteredSnakeBiteRecords.length);

           commit(GET_ALL_COLIBACILLOSIS_RECORDS, filteredColibacillosisRecords.length);

           commit(GET_ALL_CHRONIC_INFECTIOUS_BRONCHY_RECORDS, filteredChronicInfectiousBronchyRecords.length);

          

       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },


    async getFilteredBroilerPMRecords({ state,commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

             const newFilterRecord = cloneDeep(state.villageChickenPostMortemFilterForm);

             newFilterRecord.startDate = newFilterRecord.startDate.toLocaleDateString('en-GB');

             newFilterRecord.endDate = newFilterRecord.endDate.toLocaleDateString('en-GB');

             console.log(newFilterRecord.startDate);
             console.log(newFilterRecord.endDate);
            
           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/vet/allPostMortems`)

           console.log(response.data)

       //    const { data:fetchUsers } = await api.get(`/auth/allUsers`)
        
    //    //--------------------ALL AGRO RECORDS FILTERED BY CATEGORY --------------------------------// 
       const villageChickenPostMortemRecords = response.data.filter( a=>
        a.vetPostMortemCategory ==='Village Chicken'
       )

       console.log(villageChickenPostMortemRecords.length);


       const broilerRecords = response.data.filter( b=>
        b.vetPostMortemCategory ==='Broilers'
       )

       const layerRecords = response.data.filter( c=>
        c.vetPostMortemCategory ==='Layers'
       )

       const pigRecords = response.data.filter( d=>
        d.vetCategory ==='Pigs'
       )

        const goatRecords = response.data.filter( e=>
         e.vetCategory ==='Goats'
        )



        const quailRecords = response.data.filter( f=>
            f.vetCategory ==='Quails'
            )

       
        const rabbitRecords = response.data.filter( g=>
         g.vetCategory ==='Rabbits'
        )

        const cattleRecords = response.data.filter( h=>
         h.vetCategory ==='Cattle'
        )

       

//   // -------------------------------END OF FILTERING BY CATEGORY----------------------//




//    //--------FILTER CATEGORIES BY DATE AND SUMMATION OF EACH CATEGORY------------------//
          const filteredCattleRecords = cattleRecords.filter( at => 
         at.date >= newFilterRecord.startDate && at.date <= newFilterRecord.endDate
         );



         const filteredGoatRecords = goatRecords.filter( bt => 
             bt.date >= newFilterRecord.startDate && bt.date <= newFilterRecord.endDate
             );

         const filteredVCPMRecords = villageChickenPostMortemRecords.filter( ct => 
         ct.date >= newFilterRecord.startDate && ct.date <= newFilterRecord.endDate
         );

         const filteredPigRecords = pigRecords.filter( dt => 
         dt.date >= newFilterRecord.startDate && dt.date <= newFilterRecord.endDate
         );

         const filteredBroilerRecords = broilerRecords.filter( et => 
         et.date >= newFilterRecord.startDate && et.date <= newFilterRecord.endDate
         );

         const filteredLayerRecords= layerRecords.filter( ft => 
         ft.date >= newFilterRecord.startDate && ft.date <= newFilterRecord.endDate
         );

         const filteredRabbitRecords = rabbitRecords.filter( gt => 
         gt.date >= newFilterRecord.startDate && gt.date <= newFilterRecord.endDate
         );

         const filteredQuailRecords = quailRecords.filter( ht => 
             ht.date >= newFilterRecord.startDate && ht.date <= newFilterRecord.endDate
             );

     
       
        
        
            console.log(filteredCattleRecords.length);

            console.log(filteredGoatRecords.length);

            console.log(filteredVCPMRecords.length);

            console.log(filteredPigRecords.length);

            console.log(filteredBroilerRecords.length);

            console.log(filteredLayerRecords.length);

            console.log(filteredRabbitRecords.length);

            console.log(filteredQuailRecords.length);

         

        
        

//            console.log(response.data);
        


           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
        //   commit(GET_ALL_VET_RECORDS, response.data);

           commit(GET_FILTERED_VET_START_TIME, newFilterRecord.startDate);

           commit(GET_FILTERED_VET_END_TIME, newFilterRecord.endDate);

          commit(GET_ALL_CATTLE_RECORDS, filteredCattleRecords.length);

           commit(GET_ALL_GOATS_RECORDS, filteredGoatRecords.length);

            commit(GET_ALL_SHEEP_RECORDS, filteredSheepRecords.length);

           commit(GET_ALL_PIGS_RECORDS, filteredPigRecords.length);

         commit(GET_ALL_POULTRY_RECORDS, filteredPoultryRecords.length);

           commit(GET_ALL_DOGS_AND_CATS_RECORDS, filteredDogsAndCatsRecords.length);

           commit(GET_ALL_RABBITS_RECORDS, filteredRabbitRecords.length);

           commit(GET_ALL_WILDLIFE_OR_EXOTICS_RECORDS, filteredWildlifeOrExoticsRecords.length);

           commit(GET_ALL_HORSES_RECORDS, filteredHorseRecords.length);

           

       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },




}


  
    
