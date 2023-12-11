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

        GET_ALL_CATTLE_DAIRY_RECORDS,
        GET_ALL_CATTLE_BEEF_RECORDS,

        GET_ALL_GOATS_RECORDS ,
        GET_ALL_SHEEP_RECORDS ,
        GET_ALL_PIGS_RECORDS ,

        GET_ALL_POULTRY_BROILER_RECORDS,
        GET_ALL_POULTRY_LAYER_RECORDS,
        GET_ALL_POULTRY_QUAIL_RECORDS,
        GET_ALL_POULTRY_VILLAGE_RECORDS,

        GET_ALL_DOGS_AND_CATS_RECORDS ,
        GET_ALL_RABBITS_RECORDS,
        GET_ALL_WILDLIFE_OR_EXOTICS_RECORDS,
        GET_ALL_HORSES_RECORDS,
        GET_ALL_OTHER_RECORDS,
        
        
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
        SET_SELECTED_POST_MORTEM_RECORD,

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
        GET_ALL_OTHER_VILLAGE_CHICKEN_DISEASE_RECORDS,


        //==============================================================================//
   
        
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
         GET_ALL_BROILER_OTHER_RECORDS,

        
         //----------LAYER CHICKEN DISEASES------------------------
        GET_FILTERED_LAYER_PM_START_TIME,
        GET_FILTERED_LAYER_PM_END_TIME,


        
        GET_ALL_LAYER_NEWCASTLE_RECORDS,
        GET_ALL_LAYER_GUMBORO_RECORDS,
        GET_ALL_LAYER_FATTY_LIVER_HS_RECORDS,
        GET_ALL_LAYER_EGG_PERITONITIS_RECORDS, 
        GET_ALL_LAYER_COCCIDIOSIS_RECORDS,
        GET_ALL_LAYER_INFECTIOUS_BRONCHITIS_RECORDS,
        GET_ALL_LAYER_HELMINTHIASIS_RECORDS,
        GET_ALL_LAYER_LARYNGOTRACHEITIS_RECORDS,
        GET_ALL_LAYER_CALCIUM_DEFICIENCY_RECORDS,
        GET_ALL_LAYER_OTHER_RECORDS,

       //==============================================================================//


        //-----------------PIG DISEASES---------------------------------//
        GET_FILTERED_PIG_PM_START_TIME,
        GET_FILTERED_PIG_PM_END_TIME,

        GET_ALL_PIG_MYCOPLASMOSIS_RECORDS,
        GET_ALL_PIG_PNEUMONIA_RECORDS,
        GET_ALL_PIG_CLOSTRIDIAL_INFECTION_RECORDS,
        GET_ALL_PIG_ENTERITIS_RECORDS,
        GET_ALL_PIG_OTHER_RECORDS,
  
       //==============================================================================//
        
        //-----------------GOAT DISEASES---------------------------------//
         GET_FILTERED_GOAT_PM_START_TIME,
         GET_FILTERED_GOAT_PM_END_TIME,

         GET_ALL_GOAT_HELMINTHIASIS_RECORDS,
         GET_ALL_GOAT_HEARTWATER_RECORDS,
         GET_ALL_GOAT_TRAUMA_RECORDS,
         GET_ALL_GOAT_HEMONCHOSIS_RECORDS,
         GET_ALL_GOAT_OTHER_RECORDS,

         //==============================================================================//


        //-----------------QUAIL DISEASES---------------------------------//
        GET_FILTERED_QUAIL_PM_START_TIME,
        GET_FILTERED_QUAIL_PM_END_TIME,

        GET_ALL_QUAIL_COLIBACILLOSIS_RECORDS,
        GET_ALL_QUAIL_SALMONELLOSIS_RECORDS,
        GET_ALL_QUAIL_OTHER_RECORDS,
     

        //==============================================================================//

        //-----------------RABBIT DISEASES---------------------------------//
        GET_FILTERED_RABBIT_PM_START_TIME,
        GET_FILTERED_RABBIT_PM_END_TIME,

        GET_ALL_RABBIT_COCCIDIOSIS_RECORDS,
        GET_ALL_RABBIT_BACTERIAL_INFECTION_RECORDS,
        GET_ALL_RABBIT_OTHER_RECORDS,
       

        //==============================================================================//


        //-----------------CATTLE DISEASES---------------------------------//
        GET_FILTERED_CATTLE_PM_START_TIME,
        GET_FILTERED_CATTLE_PM_END_TIME,

        GET_ALL_CATTLE_ANAPLASMOSIS_RECORDS ,
        GET_ALL_CATTLE_OTHER_RECORDS,
      

        //==============================================================================//
     
     


    

    } from '@/helpers/mutation-types'
import { Date } from 'core-js'


export const state = () => ({

    loading: false,
    filteredStartTime:[],
    filteredEndTime:[],
    allVetRecords:[],

    allCattleDairyRecords:[],
    allCattleBeefRecords:[],

    allGoatRecords:[],
    allSheepRecords:[],
    allPigRecords:[],

    allPoultryBroilerRecords:[],
    allPoultryLayerRecords:[],
    allPoultryQuailRecords:[],
    allPoultryVillageRecords:[],

    allDogsAndCatsRecords:[],
    allRabbitRecords:[],
    allWildlifeOrExoticsRecords:[],
    allHorseRecords:[],
    allOtherVetRecords:[],
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
    allOtherVillageChickenDiseaseRecords:[],

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
    allOtherBroilerDiseaseRecords:[],
    //=---------------------------------------------------------------------------//


        //-----------------------LAYER CHICKEN DISEASES---------------------------//
        filteredLayerPMStartTime:[],
        filteredLayerPMEndTime:[],
    
        allLayerGumboroRecords:[],
        allLayerNewCastleRecords:[],
        allLayerEggPeritonitisRecords:[],
        allLayerFattyLiverHSRecords:[],
        allLayerCoccidiosisRecords:[],
        allLayerInfectiousBronchitisRecords:[],
        allLayerLaryngotracheitisRecords:[],
        allLayerCalciumDeficiencyRecords:[],
        allLayerHelminthiasisRecords:[],
        allOtherLayerDiseaseRecords:[],
        //=---------------------------------------------------------------------------//



        //-----------------------------PIG DISEASES-----------------------------------//
        filteredPigPMStartTime:[],
        filteredPigPMEndTime:[],

        allPigMycoPlasmosisRecords:[],
        allPigPneumoniaRecords:[],
        allPigClostridialInfectionRecords:[],
        allPigEnteritisRecords:[],
        allOtherPigDiseaseRecords:[],


        //---------------------------------------------------------------------------//


        //-----------------------------GOAT DISEASES-----------------------------------//
        filteredGoatPMStartTime:[],
        filteredGoatPMEndTime:[],

        allGoatHelminthiasisRecords:[],
        allGoatHeartWaterRecords:[],
        allGoatTraumaRecords:[],
        allGoatHemonchosisRecords:[],
        allOtherGoatDiseaseRecords:[],


        //---------------------------------------------------------------------------//



           //-----------------------------GOAT DISEASES-----------------------------------//
           filteredGoatPMStartTime:[],
           filteredGoatPMEndTime:[],
   
           allGoatHelminthiasisRecords:[],
           allGoatHeartWaterRecords:[],
           allGoatTraumaRecords:[],
           allGoatHemonchosisRecords:[],
   
   
           //---------------------------------------------------------------------------//

           

        //-----------------------------QUAIL DISEASES-----------------------------------//
        filteredQuailPMStartTime:[],
        filteredQuailPMEndTime:[],

        allQuailColibacillosisRecords:[],
        allQuailSalmonellosisRecords:[],
        allOtherQuailDiseaseRecords:[],
     

        //---------------------------------------------------------------------------//



            //-----------------------------RABBIT DISEASES-----------------------------------//
            filteredRabbitPMStartTime:[],
            filteredRabbitPMEndTime:[],

            allRabbitCoccidiosisRecords:[],
            allRabbitBacterialInfectionRecords:[],
            allOtherRabbitDiseaseRecords:[],
       

            //---------------------------------------------------------------------------//


            //-----------------------------CATTLE DISEASES-----------------------------------//
            filteredCattlePMStartTime:[],
            filteredCattlePMEndTime:[],

            allCattleAnaplasmosisRecords:[],
            allOtherCattleDiseaseRecords:[],
           

            //---------------------------------------------------------------------------//



    selectedVetRecord: null,
    selectedPostMortemRecord: null,

    vetForm:{
        vetConsultingPerson:null,
        vetOtherConsultingPerson:null,
        vetClientName:null,
        vetClientPhoneNumber:null,
        vetClientLocation:null,
        vetClientTown:null,
        vetCategory:null,
        vetOther:null,
        vetComments:null,
        createdBy:null
        
    },

    vetPostMortemForm:{
        vetPostMortemConsultingPerson:null,
        vetPostMortemOtherConsultingPerson:null,
        vetPostMortemClientName:null,
        vetPostMortemClientPhoneNumber:null,
        vetPostMortemClientLocation:null,
        vetPostMortemClientTown:null,
        vetPostMortemCategory:null,
        vetPostMortemOtherCategory:null,
        vetPostMortemDiseases:null,
        vetPostMortemOtherDiseases:null,
        vetPMComments:null,
        createdBy:null
       
        
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
    },


    layerChickenPostMortemFilterForm:{
        startDate:null,
        endDate:null
    },

    pigPostMortemFilterForm:{
        startDate:null,
        endDate:null
    },

    goatPostMortemFilterForm:{
        startDate:null,
        endDate:null
    },

    quailPostMortemFilterForm:{
        startDate:null,
        endDate:null
    },

    rabbitPostMortemFilterForm:{
        startDate:null,
        endDate:null
    },

    cattlePostMortemFilterForm:{
        startDate:null,
        endDate:null
    },








   

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

    
    allCattleDairyRecords(state){
        return state.allCattleDairyRecords
    },

    allCattleBeefRecords(state){
      return state.allCattleBeefRecords
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

    allPoultryBroilerRecords(state){
        return state.allPoultryBroilerRecords
    },

    allPoultryLayerRecords(state){
      return state.allPoultryLayerRecords
      },

      allPoultryQuailRecords(state){
        return state.allPoultryQuailRecords
    },

    allPoultryVillageRecords(state){
      return state.allPoultryVillageRecords
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

    allOtherVetRecords(state){
      return state.allOtherVetRecords
  },


    //---------------------------POST MORTEM GETTERS----------------//

    allPostMortemRecords(state){
        return state.allPostMortemRecords
    },

    selectedPostMortemRecord(state) {
      return state.selectedPostMortemRecord
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

    allOtherVillageChickenDiseaseRecords(state){
      return state.allOtherVillageChickenDiseaseRecords
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

    allOtherBroilerDiseaseRecords(state){
      return state.allOtherBroilerDiseaseRecords
  },


    //------------------------------END OF BROILER SECTION----------------------------//


    //-------------------------------LAYER CHICKEN GETTERS--------------------------------------//
    filteredLayerPMStartTime(state){
        return state.filteredLayerPMStartTime
      },

      filteredLayerPMEndTime(state){
        return state.filteredLayerPMEndTime
      },


    allLayerGumboroRecords(state){
        return state.allLayerGumboroRecords
    },

    allLayerNewCastleRecords(state){
        return state.allLayerNewCastleRecords
    },

   
     allLayerFattyLiverHSRecords(state){
        return state.allLayerFattyLiverHSRecords
    },

    allLayerEggPeritonitisRecords(state){
        return state.allLayerEggPeritonitisRecords
    },

    allLayerCoccidiosisRecords(state){
        return state.allLayerCoccidiosisRecords
    },

    allLayerHelminthiasisRecords(state){
        return state.allLayerHelminthiasisRecords
    },

    allLayerInfectiousBronchitisRecords(state){
        return state.allLayerInfectiousBronchitisRecords
    },

    allLayerCalciumDeficiencyRecords(state){
        return state.allLayerCalciumDeficiencyRecords
    },

    allLayerLaryngotracheitisRecords(state){
        return state.allLayerLaryngotracheitisRecords
    },

    allOtherLayerDiseaseRecords(state){
      return state.allOtherLayerDiseaseRecords
  },

    //-----------------------END OF LAYER SECTION---------------------------------//

    //-------------------------PIG DISEASES SECTION---------------------------------------//
    filteredPigPMStartTime(state){
        return state.filteredPigPMStartTime
      },

      filteredPigPMEndTime(state){
        return state.filteredPigPMEndTime
      },

    
    
    allPigMycoPlasmosisRecords(state){
        return state.allPigMycoPlasmosisRecords
    },

    allPigPneumoniaRecords(state){
        return state.allPigPneumoniaRecords
    },

    allPigClostridialInfectionRecords(state){
        return state.allPigClostridialInfectionRecords
    },

    allPigEnteritisRecords(state){
        return state.allPigEnteritisRecords
    },

    allOtherPigDiseaseRecords(state){
      return state.allOtherPigDiseaseRecords
  },
    //----------------------------END OF PIG SECTION-------------------------------------//


     //-------------------------GOAT DISEASES SECTION---------------------------------------//
     filteredGoatPMStartTime(state){
        return state.filteredGoatPMStartTime
      },

      filteredGoatPMEndTime(state){
        return state.filteredGoatPMEndTime
      },

    
    
    allGoatHelminthiasisRecords(state){
        return state.allGoatHelminthiasisRecords
    },

    allGoatHeartWaterRecords(state){
        return state.allGoatHeartWaterRecords
    },

    allGoatTraumaRecords(state){
        return state.allGoatTraumaRecords
    },

    allGoatHemonchosisRecords(state){
        return state.allGoatHemonchosisRecords
    },

    allOtherGoatDiseaseRecords(state){
      return state.allOtherGoatDiseaseRecords
  },

    //----------------------------END OF GOAT SECTION-------------------------------------//


         //-------------------------QUAIL DISEASES SECTION---------------------------------------//
         filteredQuailPMStartTime(state){
            return state.filteredQuailPMStartTime
          },
    
          filteredQuailPMEndTime(state){
            return state.filteredQuailPMEndTime
          },
    
        
        
        allQuailColibacillosisRecords(state){
            return state.allQuailColibacillosisRecords
        },
    
        allQuailSalmonellosisRecords(state){
            return state.allQuailSalmonellosisRecords
        },

        allOtherQuailDiseaseRecords(state){
          return state.allOtherQuailDiseaseRecords
      },
    
        //----------------------------END OF QUAIL SECTION-------------------------------------//



        //-------------------------RABBIT DISEASES SECTION---------------------------------------//
        filteredRabbitPMStartTime(state){
            return state.filteredRabbitPMStartTime
        },

        filteredRabbitPMEndTime(state){
            return state.filteredRabbitPMEndTime
        },

        
        
        allRabbitCoccidiosisRecords(state){
            return state.allRabbitCoccidiosisRecords
        },

        allRabbitBacterialInfectionRecords(state){
            return state.allRabbitBacterialInfectionRecords
        },

        allOtherRabbitDiseaseRecords(state){
          return state.allOtherRabbitDiseaseRecords
      },

      
        //----------------------------END OF RABBIT SECTION-------------------------------------//



         //-------------------------CATTLE DISEASES SECTION---------------------------------------//
         filteredCattlePMStartTime(state){
            return state.filteredCattlePMStartTime
          },
    
          filteredCattlePMEndTime(state){
            return state.filteredCattlePMEndTime
          },
    
        
        
        allCattleAnaplasmosisRecords(state){
            return state.allCattleAnaplasmosisRecords
        },

        allOtherCattleDiseaseRecords(state){
          return state.allOtherCattleDiseaseRecords
      },
    
        
        //----------------------------END OF Cattle SECTION-------------------------------------//

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


    [GET_ALL_CATTLE_DAIRY_RECORDS](state, payload){
        state.allCattleDairyRecords = payload
    },

    [GET_ALL_CATTLE_BEEF_RECORDS](state, payload){
      state.allCattleBeefRecords = payload
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

    [GET_ALL_POULTRY_BROILER_RECORDS](state, payload){
        state.allPoultryBroilerRecords = payload
    },

    [GET_ALL_POULTRY_LAYER_RECORDS](state, payload){
      state.allPoultryLayerRecords = payload
    },

    [GET_ALL_POULTRY_QUAIL_RECORDS](state, payload){
      state.allPoultryQuailRecords = payload
    },

    [GET_ALL_POULTRY_VILLAGE_RECORDS](state, payload){
      state.allPoultryVillageRecords = payload
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

    [GET_ALL_OTHER_RECORDS](state, payload){
      state.allOtherVetRecords = payload
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

    [SET_SELECTED_POST_MORTEM_RECORD](state, newPostMortemRecord) {
      state.selectedPostMortemRecord = newPostMortemRecord
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

    [GET_ALL_OTHER_VILLAGE_CHICKEN_DISEASE_RECORDS](state, payload){
      state.allOtherVillageChickenDiseaseRecords = payload
     },


    // //=---------------------------VILLAGE CHICKEN SETTERS---------------------------//
    
    // [SET_ALL_IL_RECORDS](state, payload){
    //     state.allILRecords = payload
    // },

    // [SET_ALL_NEWCASTLE_RECORDS](state, payload){
    //     state.allNewcastleRecords = payload
    // },

    // [SET_ALL_GUMBORO_RECORDS](state, payload){
    //     state.allGumboroRecords = payload
    // },

    // [SET_ALL_COCCIDIOSIS_RECORDS](state, payload){
    //     state.allCoccidiosisRecords = payload
    // },

    // [SET_ALL_FOWL_POX_RECORDS](state, payload){
    //     state.allFowlPoxRecords = payload
    // },

    // [SET_ALL_EGG_PERITONITIS_RECORDS](state, payload){
    //     state.allEggPeritonitisRecords = payload
    // },

    // [SET_ALL_ECTOPARASITES_RECORDS](state, payload){
    //     state.allEctoParasitesRecords = payload
    // },

    // [SET_ALL_HELMINTHIASIS_RECORDS](state, payload){
    //     state.allHelminthiasisRecords = payload
    // },

    // [SET_ALL_MYCOPLASMOSIS_RECORDS](state, payload){
    //     state.allMycoPlasmosisRecords = payload
    // },

    // [SET_ALL_SNAKE_BITE_RECORDS](state, payload){
    //     state.allSnakeBiteRecords = payload
    // },

    // [SET_ALL_COLIBACILLOSIS_RECORDS](state, payload){
    //     state.allColibacillosisRecords = payload
    // },

    // [SET_ALL_CHRONIC_INFECTIOUS_BRONCHY_RECORDS](state, payload){
    //     state.allChronicInfectiousBronchyRecords = payload
    // },

    // [SET_ALL_OTHER_VILLAGE_CHICKEN_DISEASE_RECORDS](state, payload){
    //   state.allOtherVillageChickenDiseaseRecords = payload
    //  },





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

    [GET_ALL_BROILER_OTHER_RECORDS](state, payload){
      state.allOtherBroilerDiseaseRecords = payload
  },
  

    //--------------------------END OF BROILER SECTION-------------------------------//




     //-------------------------LAYER CHICKEN MUTATIONS----------------------------//

     [GET_FILTERED_LAYER_PM_START_TIME](state, payload){
        state.filteredLayerPMStartTime= payload
    },

    [GET_FILTERED_LAYER_PM_END_TIME](state, payload){
        state.filteredLayerPMEndTime= payload
    },


    [GET_ALL_LAYER_GUMBORO_RECORDS](state, payload){
        state.allLayerGumboroRecords = payload
    },



    [GET_ALL_LAYER_NEWCASTLE_RECORDS](state, payload){
        state.allLayerNewCastleRecords = payload
    },


    
    [GET_ALL_LAYER_EGG_PERITONITIS_RECORDS](state, payload){
        state.allLayerEggPeritonitisRecords = payload
    },

    [GET_ALL_LAYER_LARYNGOTRACHEITIS_RECORDS](state, payload){
        state.allLayerLaryngotracheitisRecords = payload
    },

    [GET_ALL_LAYER_COCCIDIOSIS_RECORDS](state, payload){
        state.allLayerCoccidiosisRecords = payload
    },

    [GET_ALL_LAYER_HELMINTHIASIS_RECORDS](state, payload){
        state.allLayerHelminthiasisRecords = payload
    },

    [GET_ALL_LAYER_INFECTIOUS_BRONCHITIS_RECORDS](state, payload){
        state.allLayerInfectiousBronchitisRecords = payload
    },

    [GET_ALL_LAYER_FATTY_LIVER_HS_RECORDS](state, payload){
        state.allLayerFattyLiverHSRecords = payload
    },

    [GET_ALL_LAYER_CALCIUM_DEFICIENCY_RECORDS](state, payload){
        state.allLayerCalciumDeficiencyRecords = payload
    },

    [GET_ALL_LAYER_OTHER_RECORDS](state, payload){
      state.allOtherLayerDiseaseRecords = payload
  },

    //---------------------------END OF LAYERS SECTION------------------------//


    //---------------------------PIG DISEASES MUTATIONS-----------------------//
    [GET_FILTERED_PIG_PM_START_TIME](state, payload){
        state.filteredPigPMStartTime= payload
    },

    [GET_FILTERED_PIG_PM_END_TIME](state, payload){
        state.filteredPigPMEndTime= payload
    },


    
    [GET_ALL_PIG_MYCOPLASMOSIS_RECORDS](state, payload){
        state.allPigMycoPlasmosisRecords= payload
    },

    [GET_ALL_PIG_PNEUMONIA_RECORDS](state, payload){
        state.allPigPneumoniaRecords = payload
    },

    [GET_ALL_PIG_CLOSTRIDIAL_INFECTION_RECORDS](state, payload){
        state.allPigClostridialInfectionRecords = payload
    },

    [GET_ALL_PIG_ENTERITIS_RECORDS](state, payload){
        state.allPigEnteritisRecords = payload
    },

    [GET_ALL_PIG_OTHER_RECORDS](state, payload){
      state.allOtherPigDiseaseRecords = payload
  },

    //-------------------------END OF PIG SECTION-----------------------------===//


      //---------------------------GOAT DISEASES MUTATIONS-----------------------//
      [GET_FILTERED_GOAT_PM_START_TIME](state, payload){
        state.filteredGoatPMStartTime= payload
    },

    [GET_FILTERED_GOAT_PM_END_TIME](state, payload){
        state.filteredGoatPMEndTime= payload
    },


    
    [GET_ALL_GOAT_HELMINTHIASIS_RECORDS](state, payload){
        state.allGoatHelminthiasisRecords= payload
    },

    [GET_ALL_GOAT_HEARTWATER_RECORDS](state, payload){
        state.allGoatHeartWaterRecords = payload
    },

    [GET_ALL_GOAT_TRAUMA_RECORDS](state, payload){
        state.allGoatTraumaRecords = payload
    },

    [GET_ALL_GOAT_HEMONCHOSIS_RECORDS](state, payload){
        state.allGoatHemonchosisRecords = payload
    },

    [GET_ALL_GOAT_OTHER_RECORDS](state, payload){
      state.allOtherGoatDiseaseRecords = payload
  },

    //-------------------------END OF GOAT SECTION--------------------------------//


      //---------------------------QUAIL DISEASES MUTATIONS-----------------------//
      [GET_FILTERED_QUAIL_PM_START_TIME](state, payload){
        state.filteredQuailPMStartTime= payload
    },

    [GET_FILTERED_QUAIL_PM_END_TIME](state, payload){
        state.filteredQuailPMEndTime= payload
    },


    
    [GET_ALL_QUAIL_COLIBACILLOSIS_RECORDS](state, payload){
        state.allQuailColibacillosisRecords= payload
    },

    [GET_ALL_QUAIL_SALMONELLOSIS_RECORDS](state, payload){
        state.allQuailSalmonellosisRecords = payload
    },

    [GET_ALL_QUAIL_OTHER_RECORDS](state, payload){
      state.allOtherQuailDiseaseRecords = payload
  },

    //-------------------------END OF QUAIL SECTION--------------------------------//



      //---------------------------RABBIT DISEASES MUTATIONS-----------------------//
      [GET_FILTERED_RABBIT_PM_START_TIME](state, payload){
        state.filteredRabbitPMStartTime= payload
    },

    [GET_FILTERED_RABBIT_PM_END_TIME](state, payload){
        state.filteredRabbitPMEndTime= payload
    },


    
    [GET_ALL_RABBIT_COCCIDIOSIS_RECORDS](state, payload){
        state.allRabbitCoccidiosisRecords= payload
    },

    [GET_ALL_RABBIT_BACTERIAL_INFECTION_RECORDS](state, payload){
        state.allRabbitBacterialInfectionRecords = payload
    },

    [GET_ALL_RABBIT_OTHER_RECORDS](state, payload){
      state.allOtherRabbitDiseaseRecords = payload
  },


    //-------------------------END OF RABBIT SECTION--------------------------------//



      //---------------------------CATTLE DISEASES MUTATIONS-----------------------//
      [GET_FILTERED_CATTLE_PM_START_TIME](state, payload){
        state.filteredCattlePMStartTime= payload
    },

    [GET_FILTERED_CATTLE_PM_END_TIME](state, payload){
        state.filteredCattlePMEndTime= payload
    },


    
    [GET_ALL_CATTLE_ANAPLASMOSIS_RECORDS](state, payload){
        state.allCattleAnaplasmosisRecords= payload
    },

    [GET_ALL_CATTLE_OTHER_RECORDS](state, payload){
      state.allOtherCattleDiseaseRecords = payload
  },

   

    //-------------------------END OF CATTLE SECTION--------------------------------//
  
}

export const actions = {

   
    async load({ commit }) {
        try {
            commit(SET_LOADING, true)
           const newLoad= await api.get(`/vetRecords/allVetRecords`)

        //    if (newLoad.data.createdBy === this.$auth.user.email){

        //    // console.log(newLoad);
        //   }

        //    // await dispatch('getInactivePolicies')
        //// console.log(newLoad.data)
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
    async getAllVetRecords({ state,commit,rootState,rootGetters }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

          const users =  rootGetters['users/allUsers']

          const loggedInUser = rootGetters['users/loggedInUser']

         // console.log(users);
         // console.log(loggedInUser)

           let userEmail = loggedInUser.email;
           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/vet/allVetRecords`)

           

          
           
           
           
           const option = loggedInUser.role;

           switch (option) {
            case 'Admin':
              commit(GET_ALL_VET_RECORDS, response.data);
                break;

            case 'Manager':
              commit(GET_ALL_VET_RECORDS, response.data);
            break;
           
            default:
                const customeUserRecords = response.data.filter( cur=>
                    cur.createdBy === this.$auth.user.email
                          )

                      console.log(customeUserRecords);
                      console.log(customeUserRecords.length)
                      commit(GET_ALL_VET_RECORDS, customeUserRecords);
                break;
           }
           

           

       
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
            newVetRecord.createdBy = this.$auth.user.email;

            //initial non-formatted entires
            const str1 = newVetRecord.vetClientName;
            const location1 = newVetRecord.vetClientLocation;
            const town1 = newVetRecord.vetClientTown;
            const comments1 = newVetRecord.vetComments;


            //arrays for each entry
            const arr = str1.split(" ");
            const location1Arr = location1.split(" ");
            const town1Arr = town1.split(" ");
            const comments1Arr = comments1.split(" ");



//loop through each element of the array and capitalize the first letter.


            for (var i = 0; i < arr.length; i++) {
                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

            }

            
            for (var i = 0; i < location1Arr.length; i++) {
                location1Arr[i] = location1Arr[i].charAt(0).toUpperCase() + location1Arr[i].slice(1);

            }

            for (var i = 0; i < town1Arr.length; i++) {
                town1Arr[i] = town1Arr[i].charAt(0).toUpperCase() + town1Arr[i].slice(1);

            }

            for (var i = 0; i < comments1Arr.length; i++) {
                comments1Arr[i] = comments1Arr[i].charAt(0).toUpperCase() + comments1Arr[i].slice(1);

            }



            //Join all the elements of the array back into a string 
            //using a blankspace as a separator 
            const str2 = arr.join(" ");
           // console.log(str2);

            const location2 = location1Arr.join(" ");
           // console.log(location2);

            const town2 = town1Arr.join(" ");
           // console.log(town2);

            const comments2 = comments1Arr.join(" ");
           // console.log(comments2);

            

           // console.log(newVetRecord.vetClientName)

            //----------------------New Formatted entries---------------------------//
            newVetRecord.vetClientName = str2;
            newVetRecord.vetClientLocation = location2;
            newVetRecord.vetClientTown = town2;
            newVetRecord.vetComments = comments2;
            
           
           
          // console.log(newVetRecord);

           
            const response = await api.post(`/vet/addNewVetRecord`, newVetRecord);

           // console.log(response.data);

            commit(ADD_VET_RECORD, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    async getFilteredVetRecords({ state,commit,rootState,rootGetters }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

          const users =  rootGetters['users/allUsers']

          const loggedInUser = rootGetters['users/loggedInUser']

         // console.log(users);
         // console.log(loggedInUser)

           let userEmail = loggedInUser.email;

             const newFilterRecord = cloneDeep(state.vetFilterForm);

             newFilterRecord.startDate = newFilterRecord.startDate.toLocaleDateString('en-US');

             newFilterRecord.endDate = newFilterRecord.endDate.toLocaleDateString('en-US');

           // console.log(newFilterRecord.startDate);
           // console.log(newFilterRecord.endDate);

           // let newDate =  new Date().toLocaleDateString();

           // console.log(newDate)
          


            const compareDates = (d1, d2) => {
                let date1 = new Date(d1).getTime();
                let date2 = new Date(d2).getTime();
              
                if (date1 < date2) {
                 // console.log(`${d1} is less than ${d2}`);
                } else if (date1 > date2) {
                 // console.log(`${d1} is greater than ${d2}`);
                } else {
                 // console.log(`Both dates are equal`);
                }
              };


              compareDates("03/10/2023", "03/17/2023");

             



           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/vet/allVetRecords`)


          // console.log(response.data)

          const option = loggedInUser.role;

          switch (option) {
            case 'Admin':
                            
                     let cattleDairyRecords = response.data.filter( a=>
                        a.vetCategory ==='Dairy'
                       )

                      let cattleBeefRecords = response.data.filter( xab=>
                        xab.vetCategory ==='Beef'
                       )
                
                      // console.log(cattleRecords.length)
                
                       let goatRecords = response.data.filter( b=>
                         b.vetCategory ==='Goats'
                        )
                
                       // console.log(goatRecords.length)
                
                       let sheepRecords = response.data.filter( c=>
                         c.vetCategory ==='Sheep'
                        )
                
                       let pigRecords = response.data.filter( d=>
                         d.vetCategory ==='Pigs'
                        )
                
                       let poultryBroilerRecords = response.data.filter( eb=>
                        eb.vetCategory ==='Broiler'
                        )

                       let poultryLayerRecords = response.data.filter( el=>
                        el.vetCategory ==='Layer'
                        )

                       let poultryQuailRecords = response.data.filter( eq=>
                          eq.vetCategory ==='Quail'
                          )
  
                         let poultryVillageRecords = response.data.filter( ev=>
                          ev.vetCategory ==='Village Chicken'
                          )
                
                       let dogsAndCatsRecords = response.data.filter( f=>
                         f.vetCategory ==='Dogs & Cats'
                        )
                
                
                       let rabbitRecords = response.data.filter( g=>
                         g.vetCategory ==='Rabbits'
                        )
                
                       let wildlifeOrExoticsRecords = response.data.filter( h=>
                         h.vetCategory ==='Wildlife Or Exotics'
                        )
                
                       
                       let horseRecords = response.data.filter(i=>
                         i.vetCategory ==='Horses'
                        )

                       let otherRecords = response.data.filter(j=>
                          j.vetCategory ==='Other'
                         )
                
                       
                
                
                
                //    //--------FILTER CATEGORIES BY DATE AND SUMMATION OF EACH CATEGORY------------------//
                         let filteredCattleDairyRecords = cattleDairyRecords.filter(at =>
                            new Date(at.date) >= new Date(newFilterRecord.startDate) && new Date(at.date) <= new Date(newFilterRecord.endDate)
                          );

                         let filteredCattleBeefRecords = cattleBeefRecords.filter(atb =>
                            new Date(atb.date) >= new Date(newFilterRecord.startDate) && new Date(atb.date) <= new Date(newFilterRecord.endDate)
                          );
                          


                            console.log(filteredCattleDairyRecords.length);

                
                        let filteredGoatRecords = goatRecords.filter( bt => 
                            new Date(bt.date) >= new Date(newFilterRecord.startDate) && new Date(bt.date) <= new Date(newFilterRecord.endDate)
                             );
                
                        let filteredSheepRecords = sheepRecords.filter( ct => 
                         new Date(ct.date) >= new Date(newFilterRecord.startDate) && new Date(ct.date) <= new Date(newFilterRecord.endDate)
                         );
                
                        let filteredPigRecords = pigRecords.filter( dt => 
                         new Date(dt.date) >= new Date(newFilterRecord.startDate) && new Date(dt.date) <= new Date(newFilterRecord.endDate)
                         );
                
                        let filteredPoultryBroilerRecords = poultryBroilerRecords.filter( etb => 
                         new Date(etb.date) >= new Date(newFilterRecord.startDate) && new Date(etb.date) <= new Date(newFilterRecord.endDate)
                         );

                        let filteredPoultryLayerRecords = poultryLayerRecords.filter( etl => 
                          new Date(etl.date) >= new Date(newFilterRecord.startDate) && new Date(etl.date) <= new Date(newFilterRecord.endDate)
                          );

                         let filteredPoultryQuailRecords = poultryQuailRecords.filter( etq => 
                            new Date(etq.date) >= new Date(newFilterRecord.startDate) && new Date(etq.date) <= new Date(newFilterRecord.endDate)
                          );

                         let filteredPoultryVillageRecords = poultryVillageRecords.filter( etv => 
                            new Date(etv.date) >= new Date(newFilterRecord.startDate) && new Date(etv.date) <= new Date(newFilterRecord.endDate)
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

                        let filteredOtherRecords = otherRecords.filter( jt => 
                          new Date(jt.date) >= new Date(newFilterRecord.startDate) && new Date(jt.date) <= new Date(newFilterRecord.endDate)
                          );
                
                       
                        
                       
                           commit(GET_FILTERED_VET_START_TIME, newFilterRecord.startDate);
                
                           commit(GET_FILTERED_VET_END_TIME, newFilterRecord.endDate);
                           
                
                          commit(GET_ALL_CATTLE_DAIRY_RECORDS, filteredCattleDairyRecords.length);

                          commit(GET_ALL_CATTLE_BEEF_RECORDS, filteredCattleBeefRecords.length);

                
                           commit(GET_ALL_GOATS_RECORDS, filteredGoatRecords.length);
                
                            commit(GET_ALL_SHEEP_RECORDS, filteredSheepRecords.length);
                
                           commit(GET_ALL_PIGS_RECORDS, filteredPigRecords.length);

                
                          commit(GET_ALL_POULTRY_BROILER_RECORDS, filteredPoultryBroilerRecords.length);

                          commit(GET_ALL_POULTRY_LAYER_RECORDS, filteredPoultryLayerRecords.length);

                          commit(GET_ALL_POULTRY_QUAIL_RECORDS, filteredPoultryQuailRecords.length);

                          commit(GET_ALL_POULTRY_VILLAGE_RECORDS, filteredPoultryVillageRecords.length);

                         


                
                           commit(GET_ALL_DOGS_AND_CATS_RECORDS, filteredDogsAndCatsRecords.length);
                
                           commit(GET_ALL_RABBITS_RECORDS, filteredRabbitRecords.length);
                
                           commit(GET_ALL_WILDLIFE_OR_EXOTICS_RECORDS, filteredWildlifeOrExoticsRecords.length);
                
                           commit(GET_ALL_HORSES_RECORDS, filteredHorseRecords.length);

                           commit(GET_ALL_OTHER_RECORDS, filteredOtherRecords.length);
                
                break;

            case 'Manager':

               cattleDairyRecords = response.data.filter( am=>
                am.vetCategory ==='Dairy'
               )

               console.log(cattleDairyRecords);

                cattleBeefRecords = response.data.filter( xabm=>
                xabm.vetCategory ==='Beef'
               )
        
              // console.log(cattleRecords.length)
        
                 goatRecords = response.data.filter( bm=>
                 bm.vetCategory ==='Goats'
                )
        
               // console.log(goatRecords.length)
        
                 sheepRecords = response.data.filter( cm=>
                 cm.vetCategory ==='Sheep'
                )
        
                 pigRecords = response.data.filter( dm=>
                 dm.vetCategory ==='Pigs'
                )
        
                 poultryBroilerRecords = response.data.filter( ebm=>
                ebm.vetCategory ==='Broiler'
                )

                 poultryLayerRecords = response.data.filter( elm=>
                elm.vetCategory ==='Layer'
                )

                 poultryQuailRecords = response.data.filter( eqm=>
                  eqm.vetCategory ==='Quail'
                  )

                   poultryVillageRecords = response.data.filter( evm=>
                  evm.vetCategory ==='Village Chicken'
                  )
        
                 dogsAndCatsRecords = response.data.filter( fm=>
                 fm.vetCategory ==='Dogs & Cats'
                )
        
        
                 rabbitRecords = response.data.filter( gm=>
                 gm.vetCategory ==='Rabbits'
                )
        
                 wildlifeOrExoticsRecords = response.data.filter( hm=>
                 hm.vetCategory ==='Wildlife Or Exotics'
                )
        
               
                 horseRecords = response.data.filter(im=>
                 im.vetCategory ==='Horses'
                )

                 otherRecords = response.data.filter(jm=>
                  jm.vetCategory ==='Other'
                 )
        
               
        
        
        
        //    //--------FILTER CATEGORIES BY DATE AND SUMMATION OF EACH CATEGORY------------------//
                   filteredCattleDairyRecords = cattleDairyRecords.filter(at =>
                    new Date(at.date) >= new Date(newFilterRecord.startDate) && new Date(at.date) <= new Date(newFilterRecord.endDate)
                  );

                   filteredCattleBeefRecords = cattleBeefRecords.filter(atb =>
                    new Date(atb.date) >= new Date(newFilterRecord.startDate) && new Date(atb.date) <= new Date(newFilterRecord.endDate)
                  );
                  


                    console.log(filteredCattleDairyRecords.length);

        
                  filteredGoatRecords = goatRecords.filter( bt => 
                    new Date(bt.date) >= new Date(newFilterRecord.startDate) && new Date(bt.date) <= new Date(newFilterRecord.endDate)
                     );
        
                  filteredSheepRecords = sheepRecords.filter( ct => 
                 new Date(ct.date) >= new Date(newFilterRecord.startDate) && new Date(ct.date) <= new Date(newFilterRecord.endDate)
                 );
        
                  filteredPigRecords = pigRecords.filter( dt => 
                 new Date(dt.date) >= new Date(newFilterRecord.startDate) && new Date(dt.date) <= new Date(newFilterRecord.endDate)
                 );
        
                  filteredPoultryBroilerRecords = poultryBroilerRecords.filter( etb => 
                 new Date(etb.date) >= new Date(newFilterRecord.startDate) && new Date(etb.date) <= new Date(newFilterRecord.endDate)
                 );

                  filteredPoultryLayerRecords = poultryLayerRecords.filter( etl => 
                  new Date(etl.date) >= new Date(newFilterRecord.startDate) && new Date(etl.date) <= new Date(newFilterRecord.endDate)
                  );

                   filteredPoultryQuailRecords = poultryQuailRecords.filter( etq => 
                    new Date(etq.date) >= new Date(newFilterRecord.startDate) && new Date(etq.date) <= new Date(newFilterRecord.endDate)
                  );

                   filteredPoultryVillageRecords = poultryVillageRecords.filter( etv => 
                    new Date(etv.date) >= new Date(newFilterRecord.startDate) && new Date(etv.date) <= new Date(newFilterRecord.endDate)
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

                  filteredOtherRecords = otherRecords.filter( jt => 
                  new Date(jt.date) >= new Date(newFilterRecord.startDate) && new Date(jt.date) <= new Date(newFilterRecord.endDate)
                  );
        
               
                
               
                   commit(GET_FILTERED_VET_START_TIME, newFilterRecord.startDate);
        
                   commit(GET_FILTERED_VET_END_TIME, newFilterRecord.endDate);
                   
        
                  commit(GET_ALL_CATTLE_DAIRY_RECORDS, filteredCattleDairyRecords.length);

                  commit(GET_ALL_CATTLE_BEEF_RECORDS, filteredCattleBeefRecords.length);

        
                   commit(GET_ALL_GOATS_RECORDS, filteredGoatRecords.length);
        
                    commit(GET_ALL_SHEEP_RECORDS, filteredSheepRecords.length);
        
                   commit(GET_ALL_PIGS_RECORDS, filteredPigRecords.length);

        
                  commit(GET_ALL_POULTRY_BROILER_RECORDS, filteredPoultryBroilerRecords.length);

                  commit(GET_ALL_POULTRY_LAYER_RECORDS, filteredPoultryLayerRecords.length);

                  commit(GET_ALL_POULTRY_QUAIL_RECORDS, filteredPoultryQuailRecords.length);

                  commit(GET_ALL_POULTRY_VILLAGE_RECORDS, filteredPoultryVillageRecords.length);

                 


        
                   commit(GET_ALL_DOGS_AND_CATS_RECORDS, filteredDogsAndCatsRecords.length);
        
                   commit(GET_ALL_RABBITS_RECORDS, filteredRabbitRecords.length);
        
                   commit(GET_ALL_WILDLIFE_OR_EXOTICS_RECORDS, filteredWildlifeOrExoticsRecords.length);
        
                   commit(GET_ALL_HORSES_RECORDS, filteredHorseRecords.length);

                   commit(GET_ALL_OTHER_RECORDS, filteredOtherRecords.length);
            break;
           
            default:

           let customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )


                      cattleDairyRecords = customeUserRecords.filter( a=>
                        a.vetCategory ==='Dairy'
                       )
        
                        cattleBeefRecords = customeUserRecords.filter( xab=>
                        xab.vetCategory ==='Beef'
                       )
                
                      // console.log(cattleRecords.length)
                
                         goatRecords = customeUserRecords.filter( b=>
                         b.vetCategory ==='Goats'
                        )
                
                       // console.log(goatRecords.length)
                
                         sheepRecords = customeUserRecords.filter( c=>
                         c.vetCategory ==='Sheep'
                        )
                
                         pigRecords = customeUserRecords.filter( d=>
                         d.vetCategory ==='Pigs'
                        )
                
                         poultryBroilerRecords = customeUserRecords.filter( eb=>
                        eb.vetCategory ==='Broiler'
                        )
        
                         poultryLayerRecords = customeUserRecords.filter( el=>
                        el.vetCategory ==='Layer'
                        )
        
                         poultryQuailRecords = customeUserRecords.filter( eq=>
                          eq.vetCategory ==='Quail'
                          )
        
                           poultryVillageRecords = customeUserRecords.filter( ev=>
                          ev.vetCategory ==='Village Chicken'
                          )
                
                         dogsAndCatsRecords = customeUserRecords.filter( f=>
                         f.vetCategory ==='Dogs & Cats'
                        )
                
                
                         rabbitRecords = customeUserRecords.filter( g=>
                         g.vetCategory ==='Rabbits'
                        )
                
                         wildlifeOrExoticsRecords = customeUserRecords.filter( h=>
                         h.vetCategory ==='Wildlife Or Exotics'
                        )
                
                       
                         horseRecords = customeUserRecords.filter(i=>
                         i.vetCategory ==='Horses'
                        )
        
                         otherRecords = customeUserRecords.filter(j=>
                          j.vetCategory ==='Other'
                         )
                
                       
                
                
                
                //    //--------FILTER CATEGORIES BY DATE AND SUMMATION OF EACH CATEGORY------------------//
                           filteredCattleDairyRecords = cattleDairyRecords.filter(at =>
                            new Date(at.date) >= new Date(newFilterRecord.startDate) && new Date(at.date) <= new Date(newFilterRecord.endDate)
                          );
        
                           filteredCattleBeefRecords = cattleBeefRecords.filter(atb =>
                            new Date(atb.date) >= new Date(newFilterRecord.startDate) && new Date(atb.date) <= new Date(newFilterRecord.endDate)
                          );
                          
        
        
                            console.log(filteredCattleDairyRecords.length);
        
                
                          filteredGoatRecords = goatRecords.filter( bt => 
                            new Date(bt.date) >= new Date(newFilterRecord.startDate) && new Date(bt.date) <= new Date(newFilterRecord.endDate)
                             );
                
                          filteredSheepRecords = sheepRecords.filter( ct => 
                         new Date(ct.date) >= new Date(newFilterRecord.startDate) && new Date(ct.date) <= new Date(newFilterRecord.endDate)
                         );
                
                          filteredPigRecords = pigRecords.filter( dt => 
                         new Date(dt.date) >= new Date(newFilterRecord.startDate) && new Date(dt.date) <= new Date(newFilterRecord.endDate)
                         );
                
                          filteredPoultryBroilerRecords = poultryBroilerRecords.filter( etb => 
                         new Date(etb.date) >= new Date(newFilterRecord.startDate) && new Date(etb.date) <= new Date(newFilterRecord.endDate)
                         );
        
                          filteredPoultryLayerRecords = poultryLayerRecords.filter( etl => 
                          new Date(etl.date) >= new Date(newFilterRecord.startDate) && new Date(etl.date) <= new Date(newFilterRecord.endDate)
                          );
        
                           filteredPoultryQuailRecords = poultryQuailRecords.filter( etq => 
                            new Date(etq.date) >= new Date(newFilterRecord.startDate) && new Date(etq.date) <= new Date(newFilterRecord.endDate)
                          );
        
                           filteredPoultryVillageRecords = poultryVillageRecords.filter( etv => 
                            new Date(etv.date) >= new Date(newFilterRecord.startDate) && new Date(etv.date) <= new Date(newFilterRecord.endDate)
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
        
                          filteredOtherRecords = otherRecords.filter( jt => 
                          new Date(jt.date) >= new Date(newFilterRecord.startDate) && new Date(jt.date) <= new Date(newFilterRecord.endDate)
                          );
                
                       
                        
                       
                           commit(GET_FILTERED_VET_START_TIME, newFilterRecord.startDate);
                
                           commit(GET_FILTERED_VET_END_TIME, newFilterRecord.endDate);
                           
                
                          commit(GET_ALL_CATTLE_DAIRY_RECORDS, filteredCattleDairyRecords.length);
        
                          commit(GET_ALL_CATTLE_BEEF_RECORDS, filteredCattleBeefRecords.length);
        
                
                           commit(GET_ALL_GOATS_RECORDS, filteredGoatRecords.length);
                
                            commit(GET_ALL_SHEEP_RECORDS, filteredSheepRecords.length);
                
                           commit(GET_ALL_PIGS_RECORDS, filteredPigRecords.length);
        
                
                          commit(GET_ALL_POULTRY_BROILER_RECORDS, filteredPoultryBroilerRecords.length);
        
                          commit(GET_ALL_POULTRY_LAYER_RECORDS, filteredPoultryLayerRecords.length);
        
                          commit(GET_ALL_POULTRY_QUAIL_RECORDS, filteredPoultryQuailRecords.length);
        
                          commit(GET_ALL_POULTRY_VILLAGE_RECORDS, filteredPoultryVillageRecords.length);
        
                         
        
        
                
                           commit(GET_ALL_DOGS_AND_CATS_RECORDS, filteredDogsAndCatsRecords.length);
                
                           commit(GET_ALL_RABBITS_RECORDS, filteredRabbitRecords.length);
                
                           commit(GET_ALL_WILDLIFE_OR_EXOTICS_RECORDS, filteredWildlifeOrExoticsRecords.length);
                
                           commit(GET_ALL_HORSES_RECORDS, filteredHorseRecords.length);
        
                           commit(GET_ALL_OTHER_RECORDS, filteredOtherRecords.length);


                break;
           }

        



        
    //    //--------------------ALL AGRO RECORDS FILTERED BY CATEGORY --------------------------------// 
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
           // console.log(newVetRecord._id)
        } catch (error) {
           // console.log('Error')
        }
        
      },

  

      //-------------------------------POST MORTEMS-------------------------------------//

      async getAllPostMortemRecords({ state,commit,rootState,rootGetters }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

          const users =  rootGetters['users/allUsers']

          const loggedInUser = rootGetters['users/loggedInUser']

         // console.log(users);
         // console.log(loggedInUser)

           let userEmail = loggedInUser.email;

           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/vet/allPostMortems`)

           if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Admin" )) ){
            if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Manager" )) ){

            const customeUserPMRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )
                     // console.log(customeUserPMRecords);
                      commit(GET_ALL_POST_MORTEM_RECORDS, customeUserPMRecords);
           }

        }


           else{
           // console.log(response.data);
       

            //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
            commit(GET_ALL_POST_MORTEM_RECORDS, response.data);
           }
       
          
           

          // console.log(response.data);
       

           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
          

       
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

            newVetRecord.createdBy = this.$auth.user.email;
            
           
            const str1 = newVetRecord.vetPostMortemClientName;
            const location1 = newVetRecord.vetPostMortemClientLocation;
            const town1 = newVetRecord.vetPostMortemClientTown;
            const comments1 = newVetRecord.vetPMComments;


            //arrays for each entry
            const arr = str1.split(" ");
            const location1Arr = location1.split(" ");
            const town1Arr = town1.split(" ");
            const comments1Arr = comments1.split(" ");



//loop through each element of the array and capitalize the first letter.


            for (var i = 0; i < arr.length; i++) {
                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

            }

            
            for (var i = 0; i < location1Arr.length; i++) {
                location1Arr[i] = location1Arr[i].charAt(0).toUpperCase() + location1Arr[i].slice(1);

            }

            for (var i = 0; i < town1Arr.length; i++) {
                town1Arr[i] = town1Arr[i].charAt(0).toUpperCase() + town1Arr[i].slice(1);

            }

            for (var i = 0; i < comments1Arr.length; i++) {
                comments1Arr[i] = comments1Arr[i].charAt(0).toUpperCase() + comments1Arr[i].slice(1);

            }



            //Join all the elements of the array back into a string 
            //using a blankspace as a separator 
            const str2 = arr.join(" ");
           // console.log(str2);

            const location2 = location1Arr.join(" ");
           // console.log(location2);

            const town2 = town1Arr.join(" ");
           // console.log(town2);

            const comments2 = comments1Arr.join(" ");
           // console.log(comments2);

            

           // console.log(newVetRecord.vetPostMortemClientName)

            //----------------------New Formatted entries---------------------------//
            newVetRecord.vetPostMortemClientName = str2;
            newVetRecord.vetPostMortemClientLocation = location2;
            newVetRecord.vetPostMortemClientTown = town2;
            newVetRecord.vetPMComments = comments2;
            

           
            const response = await api.post(`/vet/addNewPostMortem`, newVetRecord);

           // console.log(response.data);

            commit(ADD_NEW_POST_MORTEM_RECORD, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },


    async getFilteredVillageChickenPMRecords({ state,commit,rootState,rootGetters }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

          const users =  rootGetters['users/allUsers']

          const loggedInUser = rootGetters['users/loggedInUser']

         // console.log(users);
         // console.log(loggedInUser)

           let userEmail = loggedInUser.email;

             const newPostMortemFilterRecord = cloneDeep(state.villageChickenPostMortemFilterForm);

             newPostMortemFilterRecord.startDate = newPostMortemFilterRecord.startDate.toLocaleDateString('en-US');

             newPostMortemFilterRecord.endDate = newPostMortemFilterRecord.endDate.toLocaleDateString('en-US');

            // console.log(newPostMortemFilterRecord.startDate);
            // console.log(newPostMortemFilterRecord.endDate);
            
           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/vet/allPostMortems`)

          // console.log(response.data)

           if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Admin" )) ){
            if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Manager" )) ){
            const customeUserPMRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )
                     // console.log(customeUserPMRecords);
                     
                      const villageChickenPostMortemRecords = customeUserPMRecords.filter( a=>
                        a.vetPostMortemCategory ==='Village Chicken'
                       )
                
                      // console.log(villageChickenPostMortemRecords.length);
                
                       const infectiousLaryRecords = villageChickenPostMortemRecords.filter( a=>
                        a.vetPostMortemCategory ==='Village Chicken' && a.vetPostMortemDiseases === 'Infectious Laryngotracheitis'
                       )
                
                      // console.log(infectiousLaryRecords.length)
                
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

                       const otherVillageChickenRecords = villageChickenPostMortemRecords.filter( a=>
                        a.vetPostMortemCategory ==='Village Chicken' && a.vetPostMortemDiseases === 'Other Disease'
                       )

                       console.log(otherVillageChickenRecords)


                       
                         const filteredILRecords = infectiousLaryRecords.filter( ct => 
                         ct.date >= newPostMortemFilterRecord.startDate && ct.date <= newPostMortemFilterRecord.endDate
                         );
                
                        
                
                         const filteredNewcastleRecords = newCastleRecords.filter( ct => 
                         new Date(ct.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ct.date) <= new Date(newPostMortemFilterRecord.endDate)
                         );
                
                         const filteredGumboroRecords = gumboroRecords.filter( ct => 
                         new Date(ct.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ct.date) <= new Date(newPostMortemFilterRecord.endDate)
                         );
                
                         const filteredCoccidiosisecords = coccidiosisRecords.filter( ct => 
                         new Date(ct.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ct.date) <= new Date(newPostMortemFilterRecord.endDate)
                         );
                
                         const filteredFowlPoxRecords = fowlPoxRecords.filter( ct => 
                         new Date(ct.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ct.date) <= new Date(newPostMortemFilterRecord.endDate)
                         );
                
                         const filteredEggPeritonitisRecords = eggPeritonitisRecords.filter( ct => 
                         new Date(ct.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ct.date) <= new Date(newPostMortemFilterRecord.endDate)
                         );
                
                         const filteredEctoParasitesRecords = ectoParasitesRecords.filter( ct => 
                             new Date(ct.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ct.date) <= new Date(newPostMortemFilterRecord.endDate)
                             );
                    
                         const filteredHelminthiasisRecords = helminthiasisRecords.filter( ct => 
                         new Date(ct.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ct.date) <= new Date(newPostMortemFilterRecord.endDate)
                         );
                
                         const filteredMycoplasmosisRecords = mycoPlasmosisRecords.filter( ct => 
                         new Date(ct.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ct.date) <= new Date(newPostMortemFilterRecord.endDate)
                         );
                
                         const filteredSnakeBiteRecords = snakeBiteRecords.filter( ct => 
                         new Date(ct.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ct.date) <= new Date(newPostMortemFilterRecord.endDate)
                         );
                
                         const filteredColibacillosisRecords = colibacillosisRecords.filter( ct => 
                         new Date(ct.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ct.date) <= new Date(newPostMortemFilterRecord.endDate)
                         );
                
                         const filteredChronicInfectiousBronchyRecords = chronicInfectiousBronchyRecords.filter( ct => 
                         new Date(ct.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ct.date) <= new Date(newPostMortemFilterRecord.endDate)
                         );
                    
                          
                         const filteredOtherVillageChickenDiseaseRecords = otherVillageChickenRecords.filter( ct => 
                          new Date(ct.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ct.date) <= new Date(newPostMortemFilterRecord.endDate)
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


                            commit(GET_ALL_OTHER_VILLAGE_CHICKEN_DISEASE_RECORDS, filteredOtherVillageChickenDiseaseRecords.length);
                
                
           }

        }


           else{
           
            
            const villageChickenPostMortemRecords = response.data.filter( a=>
                a.vetPostMortemCategory ==='Village Chicken'
               )
        
              // console.log(villageChickenPostMortemRecords.length);
        
               const infectiousLaryRecords = villageChickenPostMortemRecords.filter( a=>
                a.vetPostMortemCategory ==='Village Chicken' && a.vetPostMortemDiseases === 'Infectious Laryngotracheitis'
               )
        
              // console.log(infectiousLaryRecords.length)
        
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

               const otherVillageChickenRecords = villageChickenPostMortemRecords.filter( a=>
                a.vetPostMortemCategory ==='Village Chicken' && a.vetPostMortemDiseases === 'Other Disease'
               )

               console.log(otherVillageChickenRecords);
               
                 const filteredILRecords = infectiousLaryRecords.filter( ct => 
                 ct.date >= newPostMortemFilterRecord.startDate && ct.date <= newPostMortemFilterRecord.endDate
                 );
        
                // console.log(filteredILRecords.length)
        
                 const filteredNewcastleRecords = newCastleRecords.filter( ct => 
                 new Date(ct.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ct.date) <= new Date(newPostMortemFilterRecord.endDate)
                 );
        
                 const filteredGumboroRecords = gumboroRecords.filter( ct => 
                 new Date(ct.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ct.date) <= new Date(newPostMortemFilterRecord.endDate)
                 );
        
                 const filteredCoccidiosisecords = coccidiosisRecords.filter( ct => 
                 new Date(ct.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ct.date) <= new Date(newPostMortemFilterRecord.endDate)
                 );
        
                 const filteredFowlPoxRecords = fowlPoxRecords.filter( ct => 
                 new Date(ct.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ct.date) <= new Date(newPostMortemFilterRecord.endDate)
                 );
        
                 const filteredEggPeritonitisRecords = eggPeritonitisRecords.filter( ct => 
                 new Date(ct.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ct.date) <= new Date(newPostMortemFilterRecord.endDate)
                 );
        
                 const filteredEctoParasitesRecords = ectoParasitesRecords.filter( ct => 
                     new Date(ct.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ct.date) <= new Date(newPostMortemFilterRecord.endDate)
                     );
            
                 const filteredHelminthiasisRecords = helminthiasisRecords.filter( ct => 
                 new Date(ct.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ct.date) <= new Date(newPostMortemFilterRecord.endDate)
                 );
        
                 const filteredMycoplasmosisRecords = mycoPlasmosisRecords.filter( ct => 
                 new Date(ct.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ct.date) <= new Date(newPostMortemFilterRecord.endDate)
                 );
        
                 const filteredSnakeBiteRecords = snakeBiteRecords.filter( ct => 
                 new Date(ct.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ct.date) <= new Date(newPostMortemFilterRecord.endDate)
                 );
        
                 const filteredColibacillosisRecords = colibacillosisRecords.filter( ct => 
                 new Date(ct.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ct.date) <= new Date(newPostMortemFilterRecord.endDate)
                 );
        
                 const filteredChronicInfectiousBronchyRecords = chronicInfectiousBronchyRecords.filter( ct => 
                 new Date(ct.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ct.date) <= new Date(newPostMortemFilterRecord.endDate)
                 );

                 const filteredOtherVillageChickenDiseaseRecords = otherVillageChickenRecords.filter( ct => 
                  new Date(ct.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ct.date) <= new Date(newPostMortemFilterRecord.endDate)
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

                    
                    commit(GET_ALL_OTHER_VILLAGE_CHICKEN_DISEASE_RECORDS, filteredOtherVillageChickenDiseaseRecords.length);
        
        

           }


       //    const { data:fetchUsers } = await api.get(`/auth/allUsers`)
        
    //    //--------------------ALL AGRO RECORDS FILTERED BY CATEGORY --------------------------------// 
                

       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },


    async getFilteredBroilerChickenPMRecords({ state,commit,rootState,rootGetters }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

          const users =  rootGetters['users/allUsers']

          const loggedInUser = rootGetters['users/loggedInUser']

         // console.log(users);
         // console.log(loggedInUser)

           let userEmail = loggedInUser.email;

             const newPostMortemFilterRecord = cloneDeep(state.broilerChickenPostMortemFilterForm);

             newPostMortemFilterRecord.startDate = newPostMortemFilterRecord.startDate.toLocaleDateString('en-US');

             newPostMortemFilterRecord.endDate = newPostMortemFilterRecord.endDate.toLocaleDateString('en-US');

            // console.log(newPostMortemFilterRecord.startDate);
            // console.log(newPostMortemFilterRecord.endDate);
            
           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/vet/allPostMortems`)

           
           if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Admin" )) ){
            if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Manager" )) ){
            const customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )
                      const broilerChickenPostMortemRecords = customeUserRecords.filter( a=>
                        a.vetPostMortemCategory ==='Broilers'
                      )
               
                     // console.log(broilerChickenPostMortemRecords.length);
               
                      const heatStressRecords = broilerChickenPostMortemRecords.filter( af=>
                       af.vetPostMortemDiseases === 'Heat Stress'
                      )
               
                     // console.log(heatStressRecords.length)
               
                      const broilerNewCastleRecords = broilerChickenPostMortemRecords.filter( bf=>
                        bf.vetPostMortemDiseases === 'Newcastle'
                      )
               
                     // console.log(broilerNewCastleRecords.length)
               
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

                       const broilerOtherDiseaseRecords = broilerChickenPostMortemRecords.filter( j=>
                        j.vetPostMortemDiseases === 'Other Disease'
                      )
               
                     
                      
                          const filteredHeatStressRecords = heatStressRecords.filter( atf => 
                          new Date(atf.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(atf.date) <= new Date(newPostMortemFilterRecord.endDate)
                          );
               
                         // console.log(filteredHeatStressRecords.length)
               
                            const filteredNewCastleRecords = broilerNewCastleRecords.filter( btf => 
                            new Date(btf.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(btf.date) <= new Date(newPostMortemFilterRecord.endDate)
                            );
               
                           // console.log(filteredNewCastleRecords)
               
                            const filteredGumboroRecords = broilerGumboroRecords.filter( ct => 
                            new Date(ct.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ct.date) <= new Date(newPostMortemFilterRecord.endDate)
                            );
               
                             const filteredCoccidiosisecords = broilerCoccidiosisRecords.filter( dt => 
                             new Date(dt.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(dt.date) <= new Date(newPostMortemFilterRecord.endDate)
                             );
               
                             const filteredInfectiousCoryzaRecords = infectiousCoryzaRecords.filter( et => 
                             new Date(et.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(et.date) <= new Date(newPostMortemFilterRecord.endDate)
                             );
               
                            const filteredChronicRespDiseaseRecords = chronicRespDiseaseRecords.filter( ft => 
                            new Date(ft.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ft.date) <= new Date(newPostMortemFilterRecord.endDate)
                            );
               
                            const filteredAscitesRecords = ascitesRecords.filter( gt => 
                                new Date(gt.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(gt.date) <= new Date(newPostMortemFilterRecord.endDate)
                                );
                   
                       
               
                             const filteredColibacillosisRecords = broilerColibacillosisRecords.filter( ht => 
                             new Date(ht.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ht.date) <= new Date(newPostMortemFilterRecord.endDate)
                             );
               
                            const filteredTraumaRecords = traumaRecords.filter( it => 
                            new Date(it.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(it.date) <= new Date(newPostMortemFilterRecord.endDate)
                            );


                            const filteredOtherBroilerRecords = broilerOtherDiseaseRecords.filter( jt => 
                              new Date(jt.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(jt.date) <= new Date(newPostMortemFilterRecord.endDate)
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

                           commit(GET_ALL_BROILER_OTHER_RECORDS, filteredOtherBroilerRecords.length);
               
                         
                         
               
           }

        }


           else{
            const broilerChickenPostMortemRecords = response.data.filter( a=>
                a.vetPostMortemCategory ==='Broilers'
              )
       
             // console.log(broilerChickenPostMortemRecords.length);
       
              const heatStressRecords = broilerChickenPostMortemRecords.filter( af=>
               af.vetPostMortemDiseases === 'Heat Stress'
              )
       
             // console.log(heatStressRecords.length)
       
              const broilerNewCastleRecords = broilerChickenPostMortemRecords.filter( bf=>
                bf.vetPostMortemDiseases === 'Newcastle'
              )
       
             // console.log(broilerNewCastleRecords.length)
       
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

               const broilerOtherDiseaseRecords = broilerChickenPostMortemRecords.filter( j=>
                j.vetPostMortemDiseases === 'Other Disease'
              )
       
             
              
                  const filteredHeatStressRecords = heatStressRecords.filter( atf => 
                  new Date(atf.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(atf.date) <= new Date(newPostMortemFilterRecord.endDate)
                  );
       
                 // console.log(filteredHeatStressRecords.length)
       
                    const filteredNewCastleRecords = broilerNewCastleRecords.filter( btf => 
                    new Date(btf.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(btf.date) <= new Date(newPostMortemFilterRecord.endDate)
                    );
       
                   // console.log(filteredNewCastleRecords)
       
                    const filteredGumboroRecords = broilerGumboroRecords.filter( ct => 
                    new Date(ct.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ct.date) <= new Date(newPostMortemFilterRecord.endDate)
                    );
       
                     const filteredCoccidiosisecords = broilerCoccidiosisRecords.filter( dt => 
                     new Date(dt.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(dt.date) <= new Date(newPostMortemFilterRecord.endDate)
                     );
       
                     const filteredInfectiousCoryzaRecords = infectiousCoryzaRecords.filter( et => 
                     new Date(et.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(et.date) <= new Date(newPostMortemFilterRecord.endDate)
                     );
       
                    const filteredChronicRespDiseaseRecords = chronicRespDiseaseRecords.filter( ft => 
                    new Date(ft.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ft.date) <= new Date(newPostMortemFilterRecord.endDate)
                    );
       
                    const filteredAscitesRecords = ascitesRecords.filter( gt => 
                        new Date(gt.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(gt.date) <= new Date(newPostMortemFilterRecord.endDate)
                        );
           
               
       
                     const filteredColibacillosisRecords = broilerColibacillosisRecords.filter( ht => 
                     new Date(ht.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ht.date) <= new Date(newPostMortemFilterRecord.endDate)
                     );
       
                    const filteredTraumaRecords = traumaRecords.filter( it => 
                    new Date(it.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(it.date) <= new Date(newPostMortemFilterRecord.endDate)
                    );

                    const filteredOtherBroilerRecords = broilerOtherDiseaseRecords.filter( jt => 
                      new Date(jt.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(jt.date) <= new Date(newPostMortemFilterRecord.endDate)
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

                   commit(GET_ALL_BROILER_OTHER_RECORDS, filteredOtherBroilerRecords.length);
       
                 
                 
       
           }
       
        
        //--------------------ALL AGRO RECORDS FILTERED BY CATEGORY --------------------------------// 
       
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },


    async getFilteredLayerChickenPMRecords({ state,commit,rootState,rootGetters }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

          const users =  rootGetters['users/allUsers']

          const loggedInUser = rootGetters['users/loggedInUser']

         // console.log(users);
         // console.log(loggedInUser)

           let userEmail = loggedInUser.email;

             const newPostMortemFilterRecord = cloneDeep(state.layerChickenPostMortemFilterForm);

             newPostMortemFilterRecord.startDate = newPostMortemFilterRecord.startDate.toLocaleDateString('en-US');

             newPostMortemFilterRecord.endDate = newPostMortemFilterRecord.endDate.toLocaleDateString('en-US');

            // console.log(newPostMortemFilterRecord.startDate);
            // console.log(newPostMortemFilterRecord.endDate);
            
           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/vet/allPostMortems`)

           if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Admin" )) ){
            if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Manager" )) ){
            const customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )
                      
                      const layerChickenPostMortemRecords = customeUserRecords.filter( a=>
                        a.vetPostMortemCategory ==='Layers'
                      )
               
                     // console.log(layerChickenPostMortemRecords.length);
               
                      const fattyLiveHSRecords = layerChickenPostMortemRecords.filter( af=>
                       af.vetPostMortemDiseases === 'Fatty Liver HS'
                      )
               
                     // console.log(fattyLiveHSRecords.length)
               
                      const layerNewCastleRecords = layerChickenPostMortemRecords.filter( bf=>
                        bf.vetPostMortemDiseases === 'Newcastle'
                      )
               
                     // console.log(layerNewCastleRecords.length)
               
                       const layerCoccidiosisRecords = layerChickenPostMortemRecords.filter( c=>
                         c.vetPostMortemDiseases === 'Coccidiosis'
                       )
               
                       const laryngotracheitisRecords = layerChickenPostMortemRecords.filter( d=>
                         d.vetPostMortemDiseases === 'Laryngotracheitis'
                       )
               
                       const layerEggPeritonitisRecords = layerChickenPostMortemRecords.filter( e=>
                         e.vetPostMortemDiseases === 'Egg Peritonitis'
                       )
               
                       const layerHelminthiasisRecords = layerChickenPostMortemRecords.filter( f=>
                         f.vetPostMortemDiseases === 'Helminthiasis'
                       )
               
                       const layerInfectiousBronchyRecords = layerChickenPostMortemRecords.filter( g=>
                         g.vetPostMortemDiseases === 'Infectious Bronchitis'
                       )
               
                       const layerCalciumDeficiencyRecords = layerChickenPostMortemRecords.filter( h=>
                         h.vetPostMortemDiseases === 'Calcium Deficiency'
                       )
               
                       const layerGumboroRecords = layerChickenPostMortemRecords.filter( i=>
                         i.vetPostMortemDiseases === 'Gumboro'
                       )

                       const layerOtherRecords = layerChickenPostMortemRecords.filter( i=>
                        i.vetPostMortemDiseases === 'Other Disease'
                      )
               
                     
                      
                          const filteredFattyLiverHSRecords = fattyLiveHSRecords.filter( atf => 
                          new Date(atf.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(atf.date) <= new Date(newPostMortemFilterRecord.endDate)
                          );
               
                         // console.log(filteredFattyLiverHSRecords.length)
               
                             const filteredNewCastleRecords = layerNewCastleRecords.filter( btf => 
                             new Date(btf.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(btf.date) <= new Date(newPostMortemFilterRecord.endDate)
                             );
               
                           // // console.log(filteredNewCastleRecords)
               
                             const filteredGumboroRecords = layerGumboroRecords.filter( ctf => 
                             new Date(ctf.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ctf.date) <= new Date(newPostMortemFilterRecord.endDate)
                             );
               
                              const filteredLayerCoccidiosisRecords = layerCoccidiosisRecords.filter( dtf => 
                              new Date(dtf.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(dtf.date) <= new Date(newPostMortemFilterRecord.endDate)
                              );
               
                              const filteredHelminthiasisRecords = layerHelminthiasisRecords.filter( etf => 
                              new Date(etf.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(etf.date) <= new Date(newPostMortemFilterRecord.endDate)
                              );
               
                            const filteredInfectiousBronchyRecords = layerInfectiousBronchyRecords.filter( ftf => 
                            new Date(ftf.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ftf.date) <= new Date(newPostMortemFilterRecord.endDate)
                            );
               
                             const filteredEggPeritonitisRecords = layerEggPeritonitisRecords.filter( gtf => 
                                 new Date(gtf.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(gtf.date) <= new Date(newPostMortemFilterRecord.endDate)
                                 );
                   
                       
               
                              const filteredCalciumDeficiencyRecords = layerCalciumDeficiencyRecords.filter( ht => 
                              new Date(ht.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ht.date) <= new Date(newPostMortemFilterRecord.endDate)
                              );
               
                             const filteredLaryngotracheitisRecords = laryngotracheitisRecords.filter( it => 
                             new Date(it.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(it.date) <= new Date(newPostMortemFilterRecord.endDate)
                             );

                             const filteredOtherLayerDiseaseRecords = layerOtherRecords.filter( Jt => 
                              new Date(Jt.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(Jt.date) <= new Date(newPostMortemFilterRecord.endDate)
                              );
                   
               
                      
                           
               
                      
                           commit(GET_FILTERED_LAYER_PM_START_TIME, newPostMortemFilterRecord.startDate);
               
                           commit(GET_FILTERED_LAYER_PM_END_TIME, newPostMortemFilterRecord.endDate);
               
               
                            commit(GET_ALL_LAYER_FATTY_LIVER_HS_RECORDS, filteredFattyLiverHSRecords.length); 
               
                            commit(GET_ALL_LAYER_GUMBORO_RECORDS, filteredGumboroRecords.length);
               
                            commit(GET_ALL_LAYER_NEWCASTLE_RECORDS, filteredNewCastleRecords.length);
               
                            commit(GET_ALL_LAYER_EGG_PERITONITIS_RECORDS, filteredEggPeritonitisRecords.length);
               
                            commit(GET_ALL_LAYER_COCCIDIOSIS_RECORDS, filteredLayerCoccidiosisRecords.length);
               
                            commit(GET_ALL_LAYER_LARYNGOTRACHEITIS_RECORDS, filteredLaryngotracheitisRecords.length);
               
                            commit(GET_ALL_LAYER_HELMINTHIASIS_RECORDS, filteredHelminthiasisRecords.length);
               
                            commit(GET_ALL_LAYER_INFECTIOUS_BRONCHITIS_RECORDS, filteredInfectiousBronchyRecords.length);
               
                            commit(GET_ALL_LAYER_CALCIUM_DEFICIENCY_RECORDS, filteredCalciumDeficiencyRecords.length);

                            commit(GET_ALL_LAYER_OTHER_RECORDS, filteredOtherLayerDiseaseRecords.length);
               
                       
           }

        }


           else{
           
            const layerChickenPostMortemRecords = response.data.filter( a=>
                a.vetPostMortemCategory ==='Layers'
              )
       
             // console.log(layerChickenPostMortemRecords.length);
       
              const fattyLiveHSRecords = layerChickenPostMortemRecords.filter( af=>
               af.vetPostMortemDiseases === 'Fatty Liver HS'
              )
       
             // console.log(fattyLiveHSRecords.length)
       
              const layerNewCastleRecords = layerChickenPostMortemRecords.filter( bf=>
                bf.vetPostMortemDiseases === 'Newcastle'
              )
       
             // console.log(layerNewCastleRecords.length)
       
               const layerCoccidiosisRecords = layerChickenPostMortemRecords.filter( c=>
                 c.vetPostMortemDiseases === 'Coccidiosis'
               )
       
               const laryngotracheitisRecords = layerChickenPostMortemRecords.filter( d=>
                 d.vetPostMortemDiseases === 'Laryngotracheitis'
               )
       
               const layerEggPeritonitisRecords = layerChickenPostMortemRecords.filter( e=>
                 e.vetPostMortemDiseases === 'Egg Peritonitis'
               )
       
               const layerHelminthiasisRecords = layerChickenPostMortemRecords.filter( f=>
                 f.vetPostMortemDiseases === 'Helminthiasis'
               )
       
               const layerInfectiousBronchyRecords = layerChickenPostMortemRecords.filter( g=>
                 g.vetPostMortemDiseases === 'Infectious Bronchitis'
               )
       
               const layerCalciumDeficiencyRecords = layerChickenPostMortemRecords.filter( h=>
                 h.vetPostMortemDiseases === 'Calcium Deficiency'
               )
       
               const layerGumboroRecords = layerChickenPostMortemRecords.filter( i=>
                 i.vetPostMortemDiseases === 'Gumboro'
               )

               const layerOtherRecords = layerChickenPostMortemRecords.filter( i=>
                i.vetPostMortemDiseases === 'Other Disease'
              )
       
             
              
                  const filteredFattyLiverHSRecords = fattyLiveHSRecords.filter( atf => 
                  new Date(atf.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(atf.date) <= new Date(newPostMortemFilterRecord.endDate)
                  );
       
                 // console.log(filteredFattyLiverHSRecords.length)
       
                     const filteredNewCastleRecords = layerNewCastleRecords.filter( btf => 
                     new Date(btf.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(btf.date) <= new Date(newPostMortemFilterRecord.endDate)
                     );
       
                   // // console.log(filteredNewCastleRecords)
       
                     const filteredGumboroRecords = layerGumboroRecords.filter( ctf => 
                     new Date(ctf.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ctf.date) <= new Date(newPostMortemFilterRecord.endDate)
                     );
       
                      const filteredLayerCoccidiosisRecords = layerCoccidiosisRecords.filter( dtf => 
                      new Date(dtf.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(dtf.date) <= new Date(newPostMortemFilterRecord.endDate)
                      );
       
                      const filteredHelminthiasisRecords = layerHelminthiasisRecords.filter( etf => 
                      new Date(etf.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(etf.date) <= new Date(newPostMortemFilterRecord.endDate)
                      );
       
                    const filteredInfectiousBronchyRecords = layerInfectiousBronchyRecords.filter( ftf => 
                    new Date(ftf.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ftf.date) <= new Date(newPostMortemFilterRecord.endDate)
                    );
       
                     const filteredEggPeritonitisRecords = layerEggPeritonitisRecords.filter( gtf => 
                         new Date(gtf.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(gtf.date) <= new Date(newPostMortemFilterRecord.endDate)
                         );
           
               
       
                      const filteredCalciumDeficiencyRecords = layerCalciumDeficiencyRecords.filter( ht => 
                      new Date(ht.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ht.date) <= new Date(newPostMortemFilterRecord.endDate)
                      );
       
                     const filteredLaryngotracheitisRecords = laryngotracheitisRecords.filter( it => 
                     new Date(it.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(it.date) <= new Date(newPostMortemFilterRecord.endDate)
                     );

                     const filteredOtherLayerDiseaseRecords = layerOtherRecords.filter( Jt => 
                      new Date(Jt.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(Jt.date) <= new Date(newPostMortemFilterRecord.endDate)
                      );
           
       
              
                   
       
              
                   commit(GET_FILTERED_LAYER_PM_START_TIME, newPostMortemFilterRecord.startDate);
       
                   commit(GET_FILTERED_LAYER_PM_END_TIME, newPostMortemFilterRecord.endDate);
       
       
                    commit(GET_ALL_LAYER_FATTY_LIVER_HS_RECORDS, filteredFattyLiverHSRecords.length); 
       
                    commit(GET_ALL_LAYER_GUMBORO_RECORDS, filteredGumboroRecords.length);
       
                    commit(GET_ALL_LAYER_NEWCASTLE_RECORDS, filteredNewCastleRecords.length);
       
                    commit(GET_ALL_LAYER_EGG_PERITONITIS_RECORDS, filteredEggPeritonitisRecords.length);
       
                    commit(GET_ALL_LAYER_COCCIDIOSIS_RECORDS, filteredLayerCoccidiosisRecords.length);
       
                    commit(GET_ALL_LAYER_LARYNGOTRACHEITIS_RECORDS, filteredLaryngotracheitisRecords.length);
       
                    commit(GET_ALL_LAYER_HELMINTHIASIS_RECORDS, filteredHelminthiasisRecords.length);
       
                    commit(GET_ALL_LAYER_INFECTIOUS_BRONCHITIS_RECORDS, filteredInfectiousBronchyRecords.length);
       
                    commit(GET_ALL_LAYER_CALCIUM_DEFICIENCY_RECORDS, filteredCalciumDeficiencyRecords.length);

                    
                    commit(GET_ALL_LAYER_OTHER_RECORDS, filteredOtherLayerDiseaseRecords.length);
       
               
           }
       
        
        //--------------------ALL AGRO RECORDS FILTERED BY CATEGORY --------------------------------// 
         
          
          

       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },


    
    async getFilteredPigPMRecords({ state,commit,rootState,rootGetters }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

          const users =  rootGetters['users/allUsers']

          const loggedInUser = rootGetters['users/loggedInUser']

         // console.log(users);
         // console.log(loggedInUser)

           let userEmail = loggedInUser.email;

             const newPostMortemFilterRecord = cloneDeep(state.pigPostMortemFilterForm);

             newPostMortemFilterRecord.startDate = newPostMortemFilterRecord.startDate.toLocaleDateString('en-US');

             newPostMortemFilterRecord.endDate = newPostMortemFilterRecord.endDate.toLocaleDateString('en-US');

            // console.log(newPostMortemFilterRecord.startDate);
            // console.log(newPostMortemFilterRecord.endDate);
            
           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/vet/allPostMortems`)

           if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Admin" )) ){
            if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Manager" )) ){
            const customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )
                      const pigPostMortemRecords = customeUserRecords.filter( a=>
                        a.vetPostMortemCategory ==='Pigs'
                      )
               
                     // console.log(pigPostMortemRecords.length);
               
                      const mycoPlasmosisRecords = pigPostMortemRecords.filter( ap=>
                       ap.vetPostMortemDiseases === 'Mycoplasmosis'
                      )
               
                     // console.log(mycoPlasmosisRecords.length)
               
                      const pneumoniaRecords = pigPostMortemRecords.filter( bp=>
                        bp.vetPostMortemDiseases === 'Pneumonia'
                      )
               
                     // console.log(pneumoniaRecords.length)
               
                       const clostridialInfectionRecords = pigPostMortemRecords.filter( cp=>
                         cp.vetPostMortemDiseases === 'Clostridial Infection'
                       )
               
                       const enteritisRecords = pigPostMortemRecords.filter( dp=>
                         dp.vetPostMortemDiseases === 'Enteritis'
                       )

                       const otherPigRecords = pigPostMortemRecords.filter( ep=>
                        ep.vetPostMortemDiseases === 'Other Disease'
                      )
               
                     
                      
                          const filteredMycoPlasmosisRecords = mycoPlasmosisRecords.filter( atp => 
                          new Date(atp.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(atp.date) <= new Date(newPostMortemFilterRecord.endDate)
                          );
               
                         // console.log(filteredMycoPlasmosisRecords.length)
               
                             const filteredPneumoniaRecords = pneumoniaRecords.filter( btp => 
                             new Date(btp.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(btp.date) <= new Date(newPostMortemFilterRecord.endDate)
                             );
               
                           // console.log(filteredPneumoniaRecords.length)
               
                             const filteredClostridialInfectionRecords = clostridialInfectionRecords.filter( ctp => 
                             new Date(ctp.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ctp.date) <= new Date(newPostMortemFilterRecord.endDate)
                             );
               
                              const filteredEnteritisRecords = enteritisRecords.filter( dtp => 
                              new Date(dtp.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(dtp.date) <= new Date(newPostMortemFilterRecord.endDate)
                              );

                              const filteredOtherPigRecords = otherPigRecords.filter( etp => 
                                new Date(etp.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(etp.date) <= new Date(newPostMortemFilterRecord.endDate)
                                );
               
                         
                      
                           
               
                      
                           commit(GET_FILTERED_PIG_PM_START_TIME, newPostMortemFilterRecord.startDate);
               
                           commit(GET_FILTERED_PIG_PM_END_TIME, newPostMortemFilterRecord.endDate);
               
               
                            commit(GET_ALL_PIG_MYCOPLASMOSIS_RECORDS, filteredMycoPlasmosisRecords.length); 
               
                            commit(GET_ALL_PIG_PNEUMONIA_RECORDS, filteredPneumoniaRecords.length);
               
                            commit(GET_ALL_PIG_CLOSTRIDIAL_INFECTION_RECORDS, filteredClostridialInfectionRecords.length);
               
                           commit(GET_ALL_PIG_ENTERITIS_RECORDS, filteredEnteritisRecords.length);

                           commit(GET_ALL_PIG_OTHER_RECORDS, filteredOtherPigRecords.length)
               
           }

        }


           else{
            const pigPostMortemRecords = response.data.filter( a=>
                a.vetPostMortemCategory ==='Pigs'
              )
       
             // console.log(pigPostMortemRecords.length);
       
              const mycoPlasmosisRecords = pigPostMortemRecords.filter( ap=>
               ap.vetPostMortemDiseases === 'Mycoplasmosis'
              )
       
             // console.log(mycoPlasmosisRecords.length)
       
              const pneumoniaRecords = pigPostMortemRecords.filter( bp=>
                bp.vetPostMortemDiseases === 'Pneumonia'
              )
       
             // console.log(pneumoniaRecords.length)
       
               const clostridialInfectionRecords = pigPostMortemRecords.filter( cp=>
                 cp.vetPostMortemDiseases === 'Clostridial Infection'
               )
       
               const enteritisRecords = pigPostMortemRecords.filter( dp=>
                 dp.vetPostMortemDiseases === 'Enteritis'
               )

               
               const otherPigRecords = pigPostMortemRecords.filter( ep=>
                ep.vetPostMortemDiseases === 'Other Disease'
              )
       
             
              
                  const filteredMycoPlasmosisRecords = mycoPlasmosisRecords.filter( atp => 
                  new Date(atp.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(atp.date) <= new Date(newPostMortemFilterRecord.endDate)
                  );
       
                 // console.log(filteredMycoPlasmosisRecords.length)
       
                     const filteredPneumoniaRecords = pneumoniaRecords.filter( btp => 
                     new Date(btp.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(btp.date) <= new Date(newPostMortemFilterRecord.endDate)
                     );
       
                   // console.log(filteredPneumoniaRecords.length)
       
                     const filteredClostridialInfectionRecords = clostridialInfectionRecords.filter( ctp => 
                     new Date(ctp.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ctp.date) <= new Date(newPostMortemFilterRecord.endDate)
                     );
       
                      const filteredEnteritisRecords = enteritisRecords.filter( dtp => 
                      new Date(dtp.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(dtp.date) <= new Date(newPostMortemFilterRecord.endDate)
                      );
                      
                      const filteredOtherPigRecords = otherPigRecords.filter( etp => 
                        new Date(etp.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(etp.date) <= new Date(newPostMortemFilterRecord.endDate)
                        );
                 
              
                   
       
              
                   commit(GET_FILTERED_PIG_PM_START_TIME, newPostMortemFilterRecord.startDate);
       
                   commit(GET_FILTERED_PIG_PM_END_TIME, newPostMortemFilterRecord.endDate);
       
       
                    commit(GET_ALL_PIG_MYCOPLASMOSIS_RECORDS, filteredMycoPlasmosisRecords.length); 
       
                    commit(GET_ALL_PIG_PNEUMONIA_RECORDS, filteredPneumoniaRecords.length);
       
                    commit(GET_ALL_PIG_CLOSTRIDIAL_INFECTION_RECORDS, filteredClostridialInfectionRecords.length);
       
                   commit(GET_ALL_PIG_ENTERITIS_RECORDS, filteredEnteritisRecords.length);

                   
                   commit(GET_ALL_PIG_OTHER_RECORDS, filteredOtherPigRecords.length)
       
           }
       
        //--------------------ALL AGRO RECORDS FILTERED BY CATEGORY --------------------------------// 
        
               
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    async getFilteredGoatPMRecords({ state,commit,rootState,rootGetters }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

          const users =  rootGetters['users/allUsers']

          const loggedInUser = rootGetters['users/loggedInUser']

         // console.log(users);
         // console.log(loggedInUser)

           let userEmail = loggedInUser.email;

             const newPostMortemFilterRecord = cloneDeep(state.goatPostMortemFilterForm);

             newPostMortemFilterRecord.startDate = newPostMortemFilterRecord.startDate.toLocaleDateString('en-US');

             newPostMortemFilterRecord.endDate = newPostMortemFilterRecord.endDate.toLocaleDateString('en-US');

            // console.log(newPostMortemFilterRecord.startDate);
            // console.log(newPostMortemFilterRecord.endDate);
            
           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/vet/allPostMortems`)
           if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Admin" )) ){
            if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Manager" )) ){
            const customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )
                      const goatPostMortemRecords = customeUserRecords.filter( g=>
                        g.vetPostMortemCategory ==='Goats'
                      )
               
                     // console.log(goatPostMortemRecords.length);
               
                      const helminthiasisRecords = goatPostMortemRecords.filter( ag=>
                       ag.vetPostMortemDiseases === 'Helminthiasis'
                      )
               
                     // console.log(helminthiasisRecords.length)
               
                      const heartWaterRecords = goatPostMortemRecords.filter( bg=>
                        bg.vetPostMortemDiseases === 'Heartwater'
                      )
               
                      
               
                       const traumaRecords = goatPostMortemRecords.filter( cg=>
                         cg.vetPostMortemDiseases === 'Trauma'
                       )
               
                       const hemonchosisRecords = goatPostMortemRecords.filter( dg=>
                         dg.vetPostMortemDiseases === 'Hemonchosis'
                       )

                       const otherGoatDiseaseRecords = goatPostMortemRecords.filter( eg=>
                        eg.vetPostMortemDiseases === 'Other Disease'
                      )
               
                     
                      
                          const filteredHelminthiasisRecords = helminthiasisRecords.filter( atg => 
                          new Date(atg.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(atg.date) <= new Date(newPostMortemFilterRecord.endDate)
                          );
               
                         // console.log(filteredHelminthiasisRecords.length)
               
                             const filteredHeartWaterRecords = heartWaterRecords.filter( btg => 
                             new Date(btg.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(btg.date) <= new Date(newPostMortemFilterRecord.endDate)
                             );
               
                           // console.log(filteredHeartWaterRecords.length)
               
                             const filteredTraumaRecords = traumaRecords.filter( ctg => 
                             new Date(ctg.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ctg.date) <= new Date(newPostMortemFilterRecord.endDate)
                             );
               
                              const filteredHemonchosisRecords = hemonchosisRecords.filter( dtg => 
                              new Date(dtg.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(dtg.date) <= new Date(newPostMortemFilterRecord.endDate)
                              );
               
                         
                            const filteredOtherGoatDiseaseRecords = otherGoatDiseaseRecords.filter( etg => 
                              new Date(etg.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(etg.date) <= new Date(newPostMortemFilterRecord.endDate)
                              );
                 
                           
               
                      
                           commit(GET_FILTERED_GOAT_PM_START_TIME, newPostMortemFilterRecord.startDate);
               
                           commit(GET_FILTERED_GOAT_PM_END_TIME, newPostMortemFilterRecord.endDate);
               
               
                            commit(GET_ALL_GOAT_HELMINTHIASIS_RECORDS, filteredHelminthiasisRecords.length); 
               
                            commit(GET_ALL_GOAT_HEARTWATER_RECORDS, filteredHeartWaterRecords.length);
               
                            commit(GET_ALL_GOAT_TRAUMA_RECORDS, filteredTraumaRecords.length);
               
                           commit(GET_ALL_GOAT_HEMONCHOSIS_RECORDS, filteredHemonchosisRecords.length);

                           commit(GET_ALL_GOAT_OTHER_RECORDS, filteredOtherGoatDiseaseRecords.length)
               
           }

        }


           else{
            const goatPostMortemRecords = response.data.filter( g=>
                g.vetPostMortemCategory ==='Goats'
              )
       
             // console.log(goatPostMortemRecords.length);
       
              const helminthiasisRecords = goatPostMortemRecords.filter( ag=>
               ag.vetPostMortemDiseases === 'Helminthiasis'
              )
       
             // console.log(helminthiasisRecords.length)
       
              const heartWaterRecords = goatPostMortemRecords.filter( bg=>
                bg.vetPostMortemDiseases === 'Heartwater'
              )
       
              
       
               const traumaRecords = goatPostMortemRecords.filter( cg=>
                 cg.vetPostMortemDiseases === 'Trauma'
               )
       
               const hemonchosisRecords = goatPostMortemRecords.filter( dg=>
                 dg.vetPostMortemDiseases === 'Hemonchosis'
               )

               const otherGoatDiseaseRecords = goatPostMortemRecords.filter( eg=>
                eg.vetPostMortemDiseases === 'Other Disease'
              )
       
             
              
                  const filteredHelminthiasisRecords = helminthiasisRecords.filter( atg => 
                  new Date(atg.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(atg.date) <= new Date(newPostMortemFilterRecord.endDate)
                  );
       
                 // console.log(filteredHelminthiasisRecords.length)
       
                     const filteredHeartWaterRecords = heartWaterRecords.filter( btg => 
                     new Date(btg.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(btg.date) <= new Date(newPostMortemFilterRecord.endDate)
                     );
       
                   // console.log(filteredHeartWaterRecords.length)
       
                     const filteredTraumaRecords = traumaRecords.filter( ctg => 
                     new Date(ctg.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ctg.date) <= new Date(newPostMortemFilterRecord.endDate)
                     );
       
                      const filteredHemonchosisRecords = hemonchosisRecords.filter( dtg => 
                      new Date(dtg.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(dtg.date) <= new Date(newPostMortemFilterRecord.endDate)
                      );

                      const filteredOtherGoatDiseaseRecords = otherGoatDiseaseRecords.filter( etg => 
                        new Date(etg.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(etg.date) <= new Date(newPostMortemFilterRecord.endDate)
                        );
       
                 
              
                   
       
              
                   commit(GET_FILTERED_GOAT_PM_START_TIME, newPostMortemFilterRecord.startDate);
       
                   commit(GET_FILTERED_GOAT_PM_END_TIME, newPostMortemFilterRecord.endDate);
       
       
                    commit(GET_ALL_GOAT_HELMINTHIASIS_RECORDS, filteredHelminthiasisRecords.length); 
       
                    commit(GET_ALL_GOAT_HEARTWATER_RECORDS, filteredHeartWaterRecords.length);
       
                    commit(GET_ALL_GOAT_TRAUMA_RECORDS, filteredTraumaRecords.length);
       
                   commit(GET_ALL_GOAT_HEMONCHOSIS_RECORDS, filteredHemonchosisRecords.length);

                   commit(GET_ALL_GOAT_OTHER_RECORDS, filteredOtherGoatDiseaseRecords.length);

       
           }
       
        //--------------------ALL AGRO RECORDS FILTERED BY CATEGORY --------------------------------// 
       
               
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    async getFilteredQuailPMRecords({ state,commit,rootState,rootGetters }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

          const users =  rootGetters['users/allUsers']

          const loggedInUser = rootGetters['users/loggedInUser']

         // console.log(users);
         // console.log(loggedInUser)

           let userEmail = loggedInUser.email;

             const newPostMortemFilterRecord = cloneDeep(state.quailPostMortemFilterForm);

             newPostMortemFilterRecord.startDate = newPostMortemFilterRecord.startDate.toLocaleDateString('en-US');

             newPostMortemFilterRecord.endDate = newPostMortemFilterRecord.endDate.toLocaleDateString('en-US');

            // console.log(newPostMortemFilterRecord.startDate);
            // console.log(newPostMortemFilterRecord.endDate);
            
           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/vet/allPostMortems`)

           if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Admin" )) ){
            if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Manager" )) ){
            const customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )
                      const quailPostMortemRecords = customeUserRecords.filter( q=>
                        q.vetPostMortemCategory ==='Quails'
                      )
               
                     // console.log(quailPostMortemRecords.length);
               
                      const colibacillosisRecords = quailPostMortemRecords.filter( aq=>
                       aq.vetPostMortemDiseases === 'Colibacillosis'
                      )
               
                     // console.log(colibacillosisRecords.length)
               
                      const salmonellosisRecords = quailPostMortemRecords.filter( bq=>
                        bq.vetPostMortemDiseases === 'Salmonellosis'
                      )

                      const otherQuailDiseaseRecords = quailPostMortemRecords.filter( cq=>
                        cq.vetPostMortemDiseases === 'Other Disease'
                      )
               
                      
                      
                          const filteredColibacillosisRecords = colibacillosisRecords.filter( atq => 
                          new Date(atq.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(atq.date) <= new Date(newPostMortemFilterRecord.endDate)
                          );
               
                         // console.log(filteredColibacillosisRecords.length)
               
                             const filteredSalmonellosisRecords = salmonellosisRecords.filter( btq => 
                             new Date(btq.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(btq.date) <= new Date(newPostMortemFilterRecord.endDate)
                             );


                             const filteredOtherQuailDiseaseRecords = otherQuailDiseaseRecords.filter( ctq => 
                              new Date(ctq.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ctq.date) <= new Date(newPostMortemFilterRecord.endDate)
                              );
               
                           // console.log(filteredSalmonellosisRecords.length)
               
                        
                      
                           commit(GET_FILTERED_QUAIL_PM_START_TIME, newPostMortemFilterRecord.startDate);
               
                           commit(GET_FILTERED_QUAIL_PM_END_TIME, newPostMortemFilterRecord.endDate);
               
               
                            commit(GET_ALL_QUAIL_COLIBACILLOSIS_RECORDS, filteredColibacillosisRecords.length); 
               
                            commit(GET_ALL_QUAIL_SALMONELLOSIS_RECORDS, filteredSalmonellosisRecords.length);

                            commit(GET_ALL_QUAIL_OTHER_RECORDS, filteredOtherQuailDiseaseRecords.length)
               
           }

        }


           else{
            const quailPostMortemRecords = response.data.filter( q=>
                q.vetPostMortemCategory ==='Quails'
              )
       
             // console.log(quailPostMortemRecords.length);
       
              const colibacillosisRecords = quailPostMortemRecords.filter( aq=>
               aq.vetPostMortemDiseases === 'Colibacillosis'
              )
       
             // console.log(colibacillosisRecords.length)
       
              const salmonellosisRecords = quailPostMortemRecords.filter( bq=>
                bq.vetPostMortemDiseases === 'Salmonellosis' 
              )

              const otherQuailDiseaseRecords = quailPostMortemRecords.filter( cq=>
                cq.vetPostMortemDiseases === 'Other Disease'
              )
       
              
              
                  const filteredColibacillosisRecords = colibacillosisRecords.filter( atq => 
                  new Date(atq.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(atq.date) <= new Date(newPostMortemFilterRecord.endDate)
                  );
       
                 // console.log(filteredColibacillosisRecords.length)
       
                     const filteredSalmonellosisRecords = salmonellosisRecords.filter( btq => 
                     new Date(btq.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(btq.date) <= new Date(newPostMortemFilterRecord.endDate)
                     );

                     const filteredOtherQuailDiseaseRecords = otherQuailDiseaseRecords.filter( ctq => 
                      new Date(ctq.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ctq.date) <= new Date(newPostMortemFilterRecord.endDate)
                      );
       
                   // console.log(filteredSalmonellosisRecords.length)
       
                
              
                   commit(GET_FILTERED_QUAIL_PM_START_TIME, newPostMortemFilterRecord.startDate);
       
                   commit(GET_FILTERED_QUAIL_PM_END_TIME, newPostMortemFilterRecord.endDate);
       
       
                    commit(GET_ALL_QUAIL_COLIBACILLOSIS_RECORDS, filteredColibacillosisRecords.length); 
       
                    commit(GET_ALL_QUAIL_SALMONELLOSIS_RECORDS, filteredSalmonellosisRecords.length);

                    commit(GET_ALL_QUAIL_OTHER_RECORDS, filteredOtherQuailDiseaseRecords.length);
       
           }
       
        
        //--------------------ALL AGRO RECORDS FILTERED BY CATEGORY --------------------------------// 
       
             
               
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    async getFilteredRabbitPMRecords({ state,commit,rootState,rootGetters }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

          const users =  rootGetters['users/allUsers']

          const loggedInUser = rootGetters['users/loggedInUser']

         // console.log(users);
         // console.log(loggedInUser)

           let userEmail = loggedInUser.email;
             const newPostMortemFilterRecord = cloneDeep(state.rabbitPostMortemFilterForm);

             newPostMortemFilterRecord.startDate = newPostMortemFilterRecord.startDate.toLocaleDateString('en-US');

             newPostMortemFilterRecord.endDate = newPostMortemFilterRecord.endDate.toLocaleDateString('en-US');

            // console.log(newPostMortemFilterRecord.startDate);
            // console.log(newPostMortemFilterRecord.endDate);
            
           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/vet/allPostMortems`)

           if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Admin" )) ){
            if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Manager" )) ){
            const customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )
                      const rabbitPostMortemRecords = customeUserRecords.filter( r=>
                        r.vetPostMortemCategory ==='Rabbits'
                      )
               
                     // console.log(rabbitPostMortemRecords.length);
               
                      const coccidiosisRecords = rabbitPostMortemRecords.filter( aq=>
                       aq.vetPostMortemDiseases === 'Coccidiosis'
                      )
               
                     // console.log(coccidiosisRecords.length)
               
                      const bacterialInfectionRecords = rabbitPostMortemRecords.filter( bq=>
                        bq.vetPostMortemDiseases === 'Bacterial Infection'
                      )


                      const otherRabbitDiseaseRecords = rabbitPostMortemRecords.filter( cq=>
                        cq.vetPostMortemDiseases === 'Other Disease'
                      )
               
                      
                      
                          const filteredCoccidiosisRecords =coccidiosisRecords.filter( atq => 
                          new Date(atq.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(atq.date) <= new Date(newPostMortemFilterRecord.endDate)
                          );
               
                      //   // console.log(filteredCoccidiosisRecords.length)
               
                             const filteredBacterialInfectionRecords = bacterialInfectionRecords.filter( btq => 
                             new Date(btq.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(btq.date) <= new Date(newPostMortemFilterRecord.endDate)
                             );

                             const filteredOtherRabbitDiseaseRecords = otherRabbitDiseaseRecords.filter( ctq => 
                              new Date(ctq.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ctq.date) <= new Date(newPostMortemFilterRecord.endDate)
                              );
               
                    //       // console.log(filteredBacterialInfectionRecords.length)
               
                        
                      
                           commit(GET_FILTERED_RABBIT_PM_START_TIME, newPostMortemFilterRecord.startDate);
               
                           commit(GET_FILTERED_RABBIT_PM_END_TIME, newPostMortemFilterRecord.endDate);
               
               
                            commit(GET_ALL_RABBIT_COCCIDIOSIS_RECORDS, filteredCoccidiosisRecords.length); 
               
                            commit(GET_ALL_RABBIT_BACTERIAL_INFECTION_RECORDS, filteredBacterialInfectionRecords.length);

                            commit(GET_ALL_RABBIT_OTHER_RECORDS, filteredOtherRabbitDiseaseRecords.length);
               
               
           }

        }


           else{
            const rabbitPostMortemRecords = response.data.filter( r=>
                r.vetPostMortemCategory ==='Rabbits'
              )
       
          //   // console.log(rabbitPostMortemRecords.length);
       
              const coccidiosisRecords = rabbitPostMortemRecords.filter( aq=>
               aq.vetPostMortemDiseases === 'Coccidiosis'
              )
       //
             // console.log(coccidiosisRecords.length)
       
              const bacterialInfectionRecords = rabbitPostMortemRecords.filter( bq=>
                bq.vetPostMortemDiseases === 'Bacterial Infection'
              )

              const otherRabbitDiseaseRecords = rabbitPostMortemRecords.filter( cq=>
                cq.vetPostMortemDiseases === 'Other Disease'
              )
       
              
              
                  const filteredCoccidiosisRecords =coccidiosisRecords.filter( atq => 
                  new Date(atq.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(atq.date) <= new Date(newPostMortemFilterRecord.endDate)
                  );
       
            //     // console.log(filteredCoccidiosisRecords.length)
       
                     const filteredBacterialInfectionRecords = bacterialInfectionRecords.filter( btq => 
                     new Date(btq.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(btq.date) <= new Date(newPostMortemFilterRecord.endDate)
                     );

                     const filteredOtherRabbitDiseaseRecords = otherRabbitDiseaseRecords.filter( ctq => 
                      new Date(ctq.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(ctq.date) <= new Date(newPostMortemFilterRecord.endDate)
                      );
       
                //   // console.log(filteredBacterialInfectionRecords.length)
       
                
              
                   commit(GET_FILTERED_RABBIT_PM_START_TIME, newPostMortemFilterRecord.startDate);
       
                   commit(GET_FILTERED_RABBIT_PM_END_TIME, newPostMortemFilterRecord.endDate);
       
       
                    commit(GET_ALL_RABBIT_COCCIDIOSIS_RECORDS, filteredCoccidiosisRecords.length); 
       
                    commit(GET_ALL_RABBIT_BACTERIAL_INFECTION_RECORDS, filteredBacterialInfectionRecords.length);

                    commit(GET_ALL_RABBIT_OTHER_RECORDS, filteredOtherRabbitDiseaseRecords.length);
       
       
           }
       
        
        //--------------------ALL AGRO RECORDS FILTERED BY CATEGORY --------------------------------// 
                    
               
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    async getFilteredCattlePMRecords({ state,commit,rootState,rootGetters }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

          const users =  rootGetters['users/allUsers']

          const loggedInUser = rootGetters['users/loggedInUser']

         // console.log(users);
         // console.log(loggedInUser)

           let userEmail = loggedInUser.email;

             const newPostMortemFilterRecord = cloneDeep(state.cattlePostMortemFilterForm);

             newPostMortemFilterRecord.startDate = newPostMortemFilterRecord.startDate.toLocaleDateString('en-US');

             newPostMortemFilterRecord.endDate = newPostMortemFilterRecord.endDate.toLocaleDateString('en-US');

            // // console.log(newPostMortemFilterRecord.startDate);
            // // console.log(newPostMortemFilterRecord.endDate);
            
           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/vet/allPostMortems`)

           if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Admin" )) ){
            if( (this.$auth.user.email === userEmail && (loggedInUser.role !== "Manager" )) ){
            const customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )
                      const cattlePostMortemRecords = customeUserRecords.filter( c=>
                        c.vetPostMortemCategory ==='Cattle'
                      )
               
                   //  // console.log(cattlePostMortemRecords.length);
               
                      const anaPlasmosisRecords = cattlePostMortemRecords.filter( ac=>
                       ac.vetPostMortemDiseases === 'Anaplasmosis'
                      )

                      const otherCattleDiseaseRecords = cattlePostMortemRecords.filter( bc=>
                        bc.vetPostMortemDiseases === 'Other Disease'
                       )
               
                 //    // console.log(anaPlasmosisRecords.length)
               
                 
                      
                      
                          const filteredAnaPlasmosisRecords =anaPlasmosisRecords.filter( atq => 
                          new Date(atq.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(atq.date) <= new Date(newPostMortemFilterRecord.endDate)
                          );

                          const filteredOtherCattleDiseaseRecords =otherCattleDiseaseRecords.filter( btq => 
                            new Date(btq.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(btq.date) <= new Date(newPostMortemFilterRecord.endDate)
                            );
               
                       //  // console.log(filteredAnaPlasmosisRecords.length)
               
                      
                           commit(GET_FILTERED_CATTLE_PM_START_TIME, newPostMortemFilterRecord.startDate);
               
                           commit(GET_FILTERED_CATTLE_PM_END_TIME, newPostMortemFilterRecord.endDate);
               
               
                            commit(GET_ALL_CATTLE_ANAPLASMOSIS_RECORDS, filteredAnaPlasmosisRecords.length); 

                            commit(GET_ALL_CATTLE_OTHER_RECORDS, filteredOtherCattleDiseaseRecords.length);
               
                       
                       
           }

        }


           else{
            const cattlePostMortemRecords = response.data.filter( c=>
                c.vetPostMortemCategory ==='Cattle'
              )
       
             //// console.log(cattlePostMortemRecords.length);
       
              const anaPlasmosisRecords = cattlePostMortemRecords.filter( ac=>
               ac.vetPostMortemDiseases === 'Anaplasmosis'
              )
       
             // console.log(anaPlasmosisRecords.length)
       
         
              
              
                  const filteredAnaPlasmosisRecords =anaPlasmosisRecords.filter( atq => 
                  new Date(atq.date) >= new Date(newPostMortemFilterRecord.startDate) && new Date(atq.date) <= new Date(newPostMortemFilterRecord.endDate)
                  );
       
                // // console.log(filteredAnaPlasmosisRecords.length)
       
              
                   commit(GET_FILTERED_CATTLE_PM_START_TIME, newPostMortemFilterRecord.startDate);
       
                   commit(GET_FILTERED_CATTLE_PM_END_TIME, newPostMortemFilterRecord.endDate);
       
       
                    commit(GET_ALL_CATTLE_ANAPLASMOSIS_RECORDS, filteredAnaPlasmosisRecords.length); 
       
               
               
           }
       

        
        //--------------------ALL AGRO RECORDS FILTERED BY CATEGORY --------------------------------// 
             
               
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },



    selectPostMortemRecord({ commit }, newPostMortemRecord) {
      try {
          commit(SET_SELECTED_POST_MORTEM_RECORD, newPostMortemRecord)
         // console.log(newVetRecord._id)
      } catch (error) {
         // console.log('Error')
      }
      
    },

   



}


  
    
