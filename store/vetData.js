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
   
        
         //----------BROILER CHICKEN DISEASES------------------------
         GET_FILTERED_BROILER_PM_START_TIME,
         GET_FILTERED_BROILER_PM_END_TIME,
 
 
        
         GET_ALL_BROILER_NEWCASTLE_RECORDS,
         GET_ALL_BROILER_GUMBORO_RECORDS,
         GET_ALL_BROILER_COLIBACILLOSIS_RECORDS,
         GET_ALL_BROILER_HEAT_STRESS_RECORDS, 
         GET_ALL_BROILER_COCCIDIOSIS_RECORDS,
         GET_ALL_BROILER_INFECTIOUS_CORYZA_RECORDS,
         GET_ALL_BROILER_CHRONIC_RESP_DISEASE_RECORDS,
         GET_ALL_BROILER_ASCITES_RECORDS,
         GET_ALL_BROILER_TRAUMA_RECORDS,
        
 
         
    

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
    filteredPMStartTime:[],
    filteredPMEndTime:[],
    allILRecords:[],
    allNewcastleRecords:[],
    allGumboroRecords:[],
    allCoccidiosisRecords:[],
    allFowlPoxRecords:[],
    allEggPeritonitisRecords:[],
    allEctoParasitesRecords:[],
    allHelminthiasisRecords:[],
    allMycoPlasmosisRecords:[],
    allSnakeBiteRecords:[],
    allColibacillosisRecords:[],
    allChronicInfectiousBronchyRecords:[],

    //-----------------------------------------------------------------------------//


    //-----------------------BROILER CHICKEN DISEASES---------------------------//
    filteredBroilerPMStartTime:[],
    filteredBroilerPMEndTime:[],

    allBroilerGumboroRecords:[],
    allBroilerNewCastleRecords:[],
    allBroilerColibacillosisRecords:[],
    allBroilerHeatStressRecords:[],
    allBroilerCoccidiosisRecords:[],
    allBroilerInfectiousCoryzaRecords:[],
    allBroilerChronicRespDiseaseRecords:[],
    allBroilerAscitesRecords:[],
    allBroilerTraumaRecords:[],
    //=---------------------------------------------------------------------------//



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
    },

    broilerChickenPostMortemFilterForm:{
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

    filteredPMStartTime(state){
        return state.filteredPMStartTime
      },

      filteredPMEndTime(state){
        return state.filteredPMEndTime
      },


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

    allEggPeritonitisRecords(state){
        return state.allEggPeritonitisRecords
    },

    allEctoParasitesRecords(state){
        return state.allEctoParasitesRecords
    },



    allHelminthiasisRecords(state){
        return state.allHelminthiasisRecords
    },

    allMycoPlasmosisRecords(state){
        return state.allMycoPlasmosisRecords
    },

    allSnakeBiteRecords(state){
        return state.allSnakeBiteRecords
    },

    allColibacillosisRecords(state){
        return state.allColibacillosisRecords
    },

    allChronicInfectiousBronchyRecords(state){
        return state.allChronicInfectiousBronchyRecords
    },

    //--------------------------------END OF VILLAGE CHICKEN SECTION -----------------------------//








    //-------------------------------BROILER CHICKEN GETTERS--------------------------------------//
     filteredBroilerPMStartTime(state){
        return state.filteredBroilerPMStartTime
      },

      filteredBroilerPMEndTime(state){
        return state.filteredBroilerPMEndTime
      },


    allBroilerGumboroRecords(state){
        return state.allBroilerGumboroRecords
    },

    allBroilerNewCastleRecords(state){
        return state.allBroilerNewCastleRecords
    },

   
    allBroilerColibacillosisRecords(state){
        return state.allBroilerColibacillosisRecords
    },

    allBroilerHeatStressRecords(state){
        return state.allBroilerHeatStressRecords
    },

    allBroilerCoccidiosisRecords(state){
        return state.allBroilerCoccidiosisRecords
    },

    allBroilerInfectiousCoryzaRecords(state){
        return state.allBroilerInfectiousCoryzaRecords
    },

    allBroilerChronicRespDiseaseRecords(state){
        return state.allBroilerChronicRespDiseaseRecords
    },

    allBroilerAscitesRecords(state){
        return state.allBroilerAscitesRecords
    },

    allBroilerTraumaRecords(state){
        return state.allBroilerTraumaRecords
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
    
    [GET_FILTERED_VET_PM_START_TIME](state, payload){
        state.filteredPMStartTime= payload
    },

    [GET_FILTERED_VET_PM_END_TIME](state, payload){
        state.filteredPMEndTime= payload
    },
    
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
        state.allSnakeBiteRecords = payload
    },

    [GET_ALL_COLIBACILLOSIS_RECORDS](state, payload){
        state.allColibacillosisRecords = payload
    },

    [GET_ALL_CHRONIC_INFECTIOUS_BRONCHY_RECORDS](state, payload){
        state.allChronicInfectiousBronchyRecords = payload
    },


    //=---------------------------VILLAGE CHICKEN SETTERS---------------------------//
    
    [SET_ALL_IL_RECORDS](state, payload){
        state.allILRecords = payload
    },

    [SET_ALL_NEWCASTLE_RECORDS](state, payload){
        state.allNewcastleRecords = payload
    },

    [SET_ALL_GUMBORO_RECORDS](state, payload){
        state.allGumboroRecords = payload
    },

    [SET_ALL_COCCIDIOSIS_RECORDS](state, payload){
        state.allCoccidiosisRecords = payload
    },

    [SET_ALL_FOWL_POX_RECORDS](state, payload){
        state.allFowlPoxRecords = payload
    },

    [SET_ALL_EGG_PERITONITIS_RECORDS](state, payload){
        state.allEggPeritonitisRecords = payload
    },

    [SET_ALL_ECTOPARASITES_RECORDS](state, payload){
        state.allEctoParasitesRecords = payload
    },

    [SET_ALL_HELMINTHIASIS_RECORDS](state, payload){
        state.allHelminthiasisRecords = payload
    },

    [SET_ALL_MYCOPLASMOSIS_RECORDS](state, payload){
        state.allMycoPlasmosisRecords = payload
    },

    [SET_ALL_SNAKE_BITE_RECORDS](state, payload){
        state.allSnakeBiteRecords = payload
    },

    [SET_ALL_COLIBACILLOSIS_RECORDS](state, payload){
        state.allColibacillosisRecords = payload
    },

    [SET_ALL_CHRONIC_INFECTIOUS_BRONCHY_RECORDS](state, payload){
        state.allChronicInfectiousBronchyRecords = payload
    },





    //-------------------------BROILER CHICKEN MUTATIONS----------------------------//

    [GET_FILTERED_BROILER_PM_START_TIME](state, payload){
        state.filteredBroilerPMStartTime= payload
    },

    [GET_FILTERED_BROILER_PM_END_TIME](state, payload){
        state.filteredBroilerPMEndTime= payload
    },


    [GET_ALL_BROILER_GUMBORO_RECORDS](state, payload){
        state.allBroilerGumboroRecords = payload
    },



    [GET_ALL_BROILER_NEWCASTLE_RECORDS](state, payload){
        state.allBroilerNewCastleRecords = payload
    },


    
    [GET_ALL_BROILER_COLIBACILLOSIS_RECORDS](state, payload){
        state.allBroilerColibacillosisRecords = payload
    },

    [GET_ALL_BROILER_HEAT_STRESS_RECORDS](state, payload){
        state.allBroilerHeatStressRecords = payload
    },

    [GET_ALL_BROILER_COCCIDIOSIS_RECORDS](state, payload){
        state.allBroilerCoccidiosisRecords = payload
    },

    [GET_ALL_BROILER_INFECTIOUS_CORYZA_RECORDS](state, payload){
        state.allBroilerInfectiousCoryzaRecords = payload
    },

    [GET_ALL_BROILER_CHRONIC_RESP_DISEASE_RECORDS](state, payload){
        state.allBroilerChronicRespDiseaseRecords = payload
    },

    [GET_ALL_BROILER_ASCITES_RECORDS](state, payload){
        state.allBroilerAscitesRecords = payload
    },

    [GET_ALL_BROILER_TRAUMA_RECORDS](state, payload){
        state.allBroilerTraumaRecords = payload
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

             const newPostMortemFilterRecord = cloneDeep(state.villageChickenPostMortemFilterForm);

             newPostMortemFilterRecord.startDate = newPostMortemFilterRecord.startDate.toLocaleDateString('en-GB');

             newPostMortemFilterRecord.endDate = newPostMortemFilterRecord.endDate.toLocaleDateString('en-GB');

             console.log(newPostMortemFilterRecord.startDate);
             console.log(newPostMortemFilterRecord.endDate);
            
           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/vet/allPostMortems`)

           console.log(response.data)

       //    const { data:fetchUsers } = await api.get(`/auth/allUsers`)
        
    //    //--------------------ALL AGRO RECORDS FILTERED BY CATEGORY --------------------------------// 
       const villageChickenPostMortemRecords = response.data.filter( a=>
        a.vetPostMortemCategory ==='Village Chicken'
       )

       console.log(villageChickenPostMortemRecords.length);

       const infectiousLaryRecords = villageChickenPostMortemRecords.filter( a=>
        a.vetPostMortemCategory ==='Village Chicken' && a.vetPostMortemDiseases === 'Infectious Laryngotracheitis'
       )

       console.log(infectiousLaryRecords.length)

       const newCastleRecords = villageChickenPostMortemRecords.filter( a=>
        a.vetPostMortemCategory ==='Village Chicken' && a.vetPostMortemDiseases === 'Newcastle'
       )

       const gumboroRecords = villageChickenPostMortemRecords.filter( a=>
        a.vetPostMortemCategory ==='Village Chicken' && a.vetPostMortemDiseases === 'Gumboro'
       )

       const coccidiosisRecords = villageChickenPostMortemRecords.filter( a=>
        a.vetPostMortemCategory ==='Village Chicken' && a.vetPostMortemDiseases === 'Coccidiosis'
       )

       const fowlPoxRecords = villageChickenPostMortemRecords.filter( a=>
        a.vetPostMortemCategory ==='Village Chicken' && a.vetPostMortemDiseases === 'Fowl Pox'
       )

       const eggPeritonitisRecords = villageChickenPostMortemRecords.filter( a=>
        a.vetPostMortemCategory ==='Village Chicken' && a.vetPostMortemDiseases === 'Egg Peritonitis'
       )

       const ectoParasitesRecords = villageChickenPostMortemRecords.filter( a=>
        a.vetPostMortemCategory ==='Village Chicken' && a.vetPostMortemDiseases === 'Ectoparasites'
       )

       const helminthiasisRecords = villageChickenPostMortemRecords.filter( a=>
        a.vetPostMortemCategory ==='Village Chicken' && a.vetPostMortemDiseases === 'Helminthiasis'
       )

       const mycoPlasmosisRecords = villageChickenPostMortemRecords.filter( a=>
        a.vetPostMortemCategory ==='Village Chicken' && a.vetPostMortemDiseases === 'Mycoplasmosis'
       )

       const snakeBiteRecords = villageChickenPostMortemRecords.filter( a=>
        a.vetPostMortemCategory ==='Village Chicken' && a.vetPostMortemDiseases === 'Snake Bites'
       )

       const colibacillosisRecords = villageChickenPostMortemRecords.filter( a=>
        a.vetPostMortemCategory ==='Village Chicken' && a.vetPostMortemDiseases === 'Colibacillosis'
       )

       const chronicInfectiousBronchyRecords = villageChickenPostMortemRecords.filter( a=>
        a.vetPostMortemCategory ==='Village Chicken' && a.vetPostMortemDiseases === 'Chronic Infectious Bronchitis'
       )
       
         const filteredILRecords = infectiousLaryRecords.filter( ct => 
         ct.date >= newPostMortemFilterRecord.startDate && ct.date <= newPostMortemFilterRecord.endDate
         );

         console.log(filteredILRecords.length)

         const filteredNewcastleRecords = newCastleRecords.filter( ct => 
         ct.date >= newPostMortemFilterRecord.startDate && ct.date <= newPostMortemFilterRecord.endDate
         );

         const filteredGumboroRecords = gumboroRecords.filter( ct => 
         ct.date >= newPostMortemFilterRecord.startDate && ct.date <= newPostMortemFilterRecord.endDate
         );

         const filteredCoccidiosisecords = coccidiosisRecords.filter( ct => 
         ct.date >= newPostMortemFilterRecord.startDate && ct.date <= newPostMortemFilterRecord.endDate
         );

         const filteredFowlPoxRecords = fowlPoxRecords.filter( ct => 
         ct.date >= newPostMortemFilterRecord.startDate && ct.date <= newPostMortemFilterRecord.endDate
         );

         const filteredEggPeritonitisRecords = eggPeritonitisRecords.filter( ct => 
         ct.date >= newPostMortemFilterRecord.startDate && ct.date <= newPostMortemFilterRecord.endDate
         );

         const filteredEctoParasitesRecords = ectoParasitesRecords.filter( ct => 
             ct.date >= newPostMortemFilterRecord.startDate && ct.date <= newPostMortemFilterRecord.endDate
             );
    
         const filteredHelminthiasisRecords = helminthiasisRecords.filter( ct => 
         ct.date >= newPostMortemFilterRecord.startDate && ct.date <= newPostMortemFilterRecord.endDate
         );

         const filteredMycoplasmosisRecords = mycoPlasmosisRecords.filter( ct => 
         ct.date >= newPostMortemFilterRecord.startDate && ct.date <= newPostMortemFilterRecord.endDate
         );

         const filteredSnakeBiteRecords = snakeBiteRecords.filter( ct => 
         ct.date >= newPostMortemFilterRecord.startDate && ct.date <= newPostMortemFilterRecord.endDate
         );

         const filteredColibacillosisRecords = colibacillosisRecords.filter( ct => 
         ct.date >= newPostMortemFilterRecord.startDate && ct.date <= newPostMortemFilterRecord.endDate
         );

         const filteredChronicInfectiousBronchyRecords = chronicInfectiousBronchyRecords.filter( ct => 
         ct.date >= newPostMortemFilterRecord.startDate && ct.date <= newPostMortemFilterRecord.endDate
         );
    

       
            

       
           commit(GET_FILTERED_VET_PM_START_TIME, newPostMortemFilterRecord.startDate);

           commit(GET_FILTERED_VET_PM_END_TIME, newPostMortemFilterRecord.endDate);

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


    async getFilteredBroilerChickenPMRecords({ state,commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

             const newPostMortemFilterRecord = cloneDeep(state.broilerChickenPostMortemFilterForm);

             newPostMortemFilterRecord.startDate = newPostMortemFilterRecord.startDate.toLocaleDateString('en-GB');

             newPostMortemFilterRecord.endDate = newPostMortemFilterRecord.endDate.toLocaleDateString('en-GB');

             console.log(newPostMortemFilterRecord.startDate);
             console.log(newPostMortemFilterRecord.endDate);
            
           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/vet/allPostMortems`)

           console.log(response.data)

       //    const { data:fetchUsers } = await api.get(`/auth/allUsers`)
        
        //--------------------ALL AGRO RECORDS FILTERED BY CATEGORY --------------------------------// 
        const broilerChickenPostMortemRecords = response.data.filter( a=>
         a.vetPostMortemCategory ==='Broilers'
       )

       console.log(broilerChickenPostMortemRecords.length);

       const heatStressRecords = broilerChickenPostMortemRecords.filter( af=>
        af.vetPostMortemDiseases === 'Heat Stress'
       )

       console.log(heatStressRecords.length)

       const broilerNewCastleRecords = broilerChickenPostMortemRecords.filter( bf=>
         bf.vetPostMortemDiseases === 'Newcastle'
       )

       console.log(broilerNewCastleRecords.length)

        const broilerCoccidiosisRecords = broilerChickenPostMortemRecords.filter( c=>
          c.vetPostMortemDiseases === 'Coccidiosis'
        )

        const infectiousCoryzaRecords = broilerChickenPostMortemRecords.filter( d=>
          d.vetPostMortemDiseases === 'Infectious Coryza'
        )

        const chronicRespDiseaseRecords = broilerChickenPostMortemRecords.filter( e=>
          e.vetPostMortemDiseases === 'Chronic Respiratory Disease'
        )

        const ascitesRecords = broilerChickenPostMortemRecords.filter( f=>
          f.vetPostMortemDiseases === 'Ascites'
        )

        const broilerColibacillosisRecords = broilerChickenPostMortemRecords.filter( g=>
          g.vetPostMortemDiseases === 'Colibacillosis'
        )

        const traumaRecords = broilerChickenPostMortemRecords.filter( h=>
          h.vetPostMortemDiseases === 'Trauma'
        )

        const broilerGumboroRecords = broilerChickenPostMortemRecords.filter( i=>
          i.vetPostMortemDiseases === 'Gumboro'
        )

      
       
           const filteredHeatStressRecords = heatStressRecords.filter( atf => 
           atf.date >= newPostMortemFilterRecord.startDate && atf.date <= newPostMortemFilterRecord.endDate
           );

           console.log(filteredHeatStressRecords.length)

             const filteredNewCastleRecords = broilerNewCastleRecords.filter( btf => 
             btf.date >= newPostMortemFilterRecord.startDate && btf.date <= newPostMortemFilterRecord.endDate
             );

             console.log(filteredNewCastleRecords)

             const filteredGumboroRecords = broilerGumboroRecords.filter( ct => 
             ct.date >= newPostMortemFilterRecord.startDate && ct.date <= newPostMortemFilterRecord.endDate
             );

              const filteredCoccidiosisecords = broilerCoccidiosisRecords.filter( dt => 
              dt.date >= newPostMortemFilterRecord.startDate && dt.date <= newPostMortemFilterRecord.endDate
              );

              const filteredInfectiousCoryzaRecords = infectiousCoryzaRecords.filter( et => 
              et.date >= newPostMortemFilterRecord.startDate && et.date <= newPostMortemFilterRecord.endDate
              );

             const filteredChronicRespDiseaseRecords = chronicRespDiseaseRecords.filter( ft => 
             ft.date >= newPostMortemFilterRecord.startDate && ft.date <= newPostMortemFilterRecord.endDate
             );

             const filteredAscitesRecords = ascitesRecords.filter( gt => 
                 gt.date >= newPostMortemFilterRecord.startDate && gt.date <= newPostMortemFilterRecord.endDate
                 );
    
        

              const filteredColibacillosisRecords = broilerColibacillosisRecords.filter( ht => 
              ht.date >= newPostMortemFilterRecord.startDate && ht.date <= newPostMortemFilterRecord.endDate
              );

             const filteredTraumaRecords = traumaRecords.filter( it => 
             it.date >= newPostMortemFilterRecord.startDate && it.date <= newPostMortemFilterRecord.endDate
             );
    

       
            

       
            commit(GET_FILTERED_BROILER_PM_START_TIME, newPostMortemFilterRecord.startDate);

            commit(GET_FILTERED_BROILER_PM_END_TIME, newPostMortemFilterRecord.endDate);

            commit(GET_ALL_BROILER_GUMBORO_RECORDS, filteredGumboroRecords.length);

            commit(GET_ALL_BROILER_NEWCASTLE_RECORDS, filteredNewCastleRecords.length);

            commit(GET_ALL_BROILER_HEAT_STRESS_RECORDS, filteredHeatStressRecords.length);

            commit(GET_ALL_BROILER_COCCIDIOSIS_RECORDS, filteredCoccidiosisecords.length);

            commit(GET_ALL_BROILER_INFECTIOUS_CORYZA_RECORDS, filteredInfectiousCoryzaRecords.length);

            commit(GET_ALL_BROILER_CHRONIC_RESP_DISEASE_RECORDS, filteredChronicRespDiseaseRecords.length);

            commit(GET_ALL_BROILER_ASCITES_RECORDS, filteredAscitesRecords.length);

            commit(GET_ALL_BROILER_TRAUMA_RECORDS, filteredTraumaRecords.length);

            commit(GET_ALL_BROILER_COLIBACILLOSIS_RECORDS, filteredColibacillosisRecords.length);

          
          

       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },



   



}


  
    
