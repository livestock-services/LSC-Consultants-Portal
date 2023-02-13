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

       //==============================================================================//


        //-----------------PIG DISEASES---------------------------------//
        GET_FILTERED_PIG_PM_START_TIME,
        GET_FILTERED_PIG_PM_END_TIME,

        GET_ALL_PIG_MYCOPLASMOSIS_RECORDS,
        GET_ALL_PIG_PNEUMONIA_RECORDS,
        GET_ALL_PIG_CLOSTRIDIAL_INFECTION_RECORDS,
        GET_ALL_PIG_ENTERITIS_RECORDS,
  
       //==============================================================================//
        
        //-----------------GOAT DISEASES---------------------------------//
         GET_FILTERED_GOAT_PM_START_TIME,
         GET_FILTERED_GOAT_PM_END_TIME,

         GET_ALL_GOAT_HELMINTHIASIS_RECORDS,
         GET_ALL_GOAT_HEARTWATER_RECORDS,
         GET_ALL_GOAT_TRAUMA_RECORDS,
         GET_ALL_GOAT_HEMONCHOSIS_RECORDS,

         //==============================================================================//


        //-----------------QUAIL DISEASES---------------------------------//
        GET_FILTERED_QUAIL_PM_START_TIME,
        GET_FILTERED_QUAIL_PM_END_TIME,

        GET_ALL_QUAIL_COLIBACILLOSIS_RECORDS,
        GET_ALL_QUAIL_SALMONELLOSIS_RECORDS,
     

        //==============================================================================//

        //-----------------RABBIT DISEASES---------------------------------//
        GET_FILTERED_RABBIT_PM_START_TIME,
        GET_FILTERED_RABBIT_PM_END_TIME,

        GET_ALL_RABBIT_COCCIDIOSIS_RECORDS,
        GET_ALL_RABBIT_BACTERIAL_INFECTION_RECORDS,
       

        //==============================================================================//


        //-----------------CATTLE DISEASES---------------------------------//
        GET_FILTERED_CATTLE_PM_START_TIME,
        GET_FILTERED_CATTLE_PM_END_TIME,

        GET_ALL_CATTLE_ANAPLASMOSIS_RECORDS ,
      

        //==============================================================================//
     
     


    

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
        //=---------------------------------------------------------------------------//



        //-----------------------------PIG DISEASES-----------------------------------//
        filteredPigPMStartTime:[],
        filteredPigPMEndTime:[],

        allPigMycoPlasmosisRecords:[],
        allPigPneumoniaRecords:[],
        allPigClostridialInfectionRecords:[],
        allPigEnteritisRecords:[],


        //---------------------------------------------------------------------------//


        //-----------------------------GOAT DISEASES-----------------------------------//
        filteredGoatPMStartTime:[],
        filteredGoatPMEndTime:[],

        allGoatHelminthiasisRecords:[],
        allGoatHeartWaterRecords:[],
        allGoatTraumaRecords:[],
        allGoatHemonchosisRecords:[],


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
     

        //---------------------------------------------------------------------------//



            //-----------------------------RABBIT DISEASES-----------------------------------//
            filteredRabbitPMStartTime:[],
            filteredRabbitPMEndTime:[],

            allRabbitCoccidiosisRecords:[],
            allRabbitBacterialInfectionRecords:[],
       

            //---------------------------------------------------------------------------//


            //-----------------------------CATTLE DISEASES-----------------------------------//
            filteredCattlePMStartTime:[],
            filteredCattlePMEndTime:[],

            allCattleAnaplasmosisRecords:[],
           

            //---------------------------------------------------------------------------//



    selectedVetRecord: null,

    vetForm:{
        vetClientName:null,
        vetClientPhoneNumber:null,
        vetClientLocation:null,
        vetCategory:null,
        vetComments:null,
        createdBy:null
        
    },

    vetPostMortemForm:{

        vetPostMortemClientName:null,
        vetPostMortemClientPhoneNumber:null,
        vetPostMortemClientLocation:null,
        vetPostMortemCategory:null,
        vetPostMortemDiseases:null,
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


    //------------------------------END OF BROILER SECTION----------------------------//


    //-------------------------------BROILER CHICKEN GETTERS--------------------------------------//
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

   

    //-------------------------END OF CATTLE SECTION--------------------------------//
  
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

           if(this.$auth.user.email !== 'kondwani1mwale@gmail.com' ){
            const customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )
                      console.log(customeUserRecords);
                      commit(GET_ALL_VET_RECORDS, customeUserRecords);
           }


           else{
            console.log(response.data);
       

            //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
            commit(GET_ALL_VET_RECORDS, response.data);
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

           if(this.$auth.user.email !== 'kondwani1mwale@gmail.com' ){
            const customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )
                      console.log(customeUserRecords);
                     
                      const cattleRecords = customeUserRecords.filter( a=>
                        a.vetCategory ==='Cattle'
                       )
                
                       console.log(cattleRecords.length)
                
                        const goatRecords = customeUserRecords.filter( b=>
                         b.vetCategory ==='Goats'
                        )
                
                        console.log(goatRecords.length)
                
                        const sheepRecords = customeUserRecords.filter( c=>
                         c.vetCategory ==='Sheep'
                        )
                
                        const pigRecords = customeUserRecords.filter( d=>
                         d.vetCategory ==='Pigs'
                        )
                
                        const poultryRecords = customeUserRecords.filter( d=>
                            d.vetCategory ==='Poultry'
                           )
                
                        const dogsAndCatsRecords = customeUserRecords.filter( e=>
                         e.vetCategory ==='Dogs & Cats'
                        )
                
                
                        const rabbitRecords = customeUserRecords.filter( f=>
                         f.vetCategory ==='Rabbits'
                        )
                
                        const wildlifeOrExoticsRecords = customeUserRecords.filter( g=>
                         g.vetCategory ==='Wildlife Or Exotics'
                        )
                
                       
                        const horseRecords = customeUserRecords.filter( h=>
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
                
                           
                
                       
                       



           }


           else{
            console.log(response.data);
       
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

           if(this.$auth.user.email !== 'kondwani1mwale@gmail.com' ){
            const customeUserPMRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )
                      console.log(customeUserPMRecords);
                      commit(GET_ALL_POST_MORTEM_RECORDS, customeUserPMRecords);
           }


           else{
            console.log(response.data);
       

            //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
            commit(GET_ALL_POST_MORTEM_RECORDS, response.data);
           }
       
          
           

           console.log(response.data);
       

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

           if(this.$auth.user.email !== 'kondwani1mwale@gmail.com' ){
            const customeUserPMRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )
                      console.log(customeUserPMRecords);
                     
                      const villageChickenPostMortemRecords = customeUserPMRecords.filter( a=>
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
                
                
           }


           else{
           
            
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

           
           if(this.$auth.user.email !== 'kondwani1mwale@gmail.com' ){
            const customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )
                      const broilerChickenPostMortemRecords = customeUserRecords.filter( a=>
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
               
                         
                         
               
           }


           else{
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
       
                 
                 
       
           }
       
        
        //--------------------ALL AGRO RECORDS FILTERED BY CATEGORY --------------------------------// 
       
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },


    async getFilteredLayerChickenPMRecords({ state,commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

             const newPostMortemFilterRecord = cloneDeep(state.layerChickenPostMortemFilterForm);

             newPostMortemFilterRecord.startDate = newPostMortemFilterRecord.startDate.toLocaleDateString('en-GB');

             newPostMortemFilterRecord.endDate = newPostMortemFilterRecord.endDate.toLocaleDateString('en-GB');

             console.log(newPostMortemFilterRecord.startDate);
             console.log(newPostMortemFilterRecord.endDate);
            
           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/vet/allPostMortems`)

           if(this.$auth.user.email !== 'kondwani1mwale@gmail.com' ){
            const customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )
                      
                      const layerChickenPostMortemRecords = customeUserRecords.filter( a=>
                        a.vetPostMortemCategory ==='Layers'
                      )
               
                      console.log(layerChickenPostMortemRecords.length);
               
                      const fattyLiveHSRecords = layerChickenPostMortemRecords.filter( af=>
                       af.vetPostMortemDiseases === 'Fatty Liver HS'
                      )
               
                      console.log(fattyLiveHSRecords.length)
               
                      const layerNewCastleRecords = layerChickenPostMortemRecords.filter( bf=>
                        bf.vetPostMortemDiseases === 'Newcastle'
                      )
               
                      console.log(layerNewCastleRecords.length)
               
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
               
                     
                      
                          const filteredFattyLiverHSRecords = fattyLiveHSRecords.filter( atf => 
                          atf.date >= newPostMortemFilterRecord.startDate && atf.date <= newPostMortemFilterRecord.endDate
                          );
               
                          console.log(filteredFattyLiverHSRecords.length)
               
                             const filteredNewCastleRecords = layerNewCastleRecords.filter( btf => 
                             btf.date >= newPostMortemFilterRecord.startDate && btf.date <= newPostMortemFilterRecord.endDate
                             );
               
                           //  console.log(filteredNewCastleRecords)
               
                             const filteredGumboroRecords = layerGumboroRecords.filter( ctf => 
                             ctf.date >= newPostMortemFilterRecord.startDate && ctf.date <= newPostMortemFilterRecord.endDate
                             );
               
                              const filteredLayerCoccidiosisRecords = layerCoccidiosisRecords.filter( dtf => 
                              dtf.date >= newPostMortemFilterRecord.startDate && dtf.date <= newPostMortemFilterRecord.endDate
                              );
               
                              const filteredHelminthiasisRecords = layerHelminthiasisRecords.filter( etf => 
                              etf.date >= newPostMortemFilterRecord.startDate && etf.date <= newPostMortemFilterRecord.endDate
                              );
               
                            const filteredInfectiousBronchyRecords = layerInfectiousBronchyRecords.filter( ftf => 
                            ftf.date >= newPostMortemFilterRecord.startDate && ftf.date <= newPostMortemFilterRecord.endDate
                            );
               
                             const filteredEggPeritonitisRecords = layerEggPeritonitisRecords.filter( gtf => 
                                 gtf.date >= newPostMortemFilterRecord.startDate && gtf.date <= newPostMortemFilterRecord.endDate
                                 );
                   
                       
               
                              const filteredCalciumDeficiencyRecords = layerCalciumDeficiencyRecords.filter( ht => 
                              ht.date >= newPostMortemFilterRecord.startDate && ht.date <= newPostMortemFilterRecord.endDate
                              );
               
                             const filteredLaryngotracheitisRecords = laryngotracheitisRecords.filter( it => 
                             it.date >= newPostMortemFilterRecord.startDate && it.date <= newPostMortemFilterRecord.endDate
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
               
                       
           }


           else{
           
            const layerChickenPostMortemRecords = response.data.filter( a=>
                a.vetPostMortemCategory ==='Layers'
              )
       
              console.log(layerChickenPostMortemRecords.length);
       
              const fattyLiveHSRecords = layerChickenPostMortemRecords.filter( af=>
               af.vetPostMortemDiseases === 'Fatty Liver HS'
              )
       
              console.log(fattyLiveHSRecords.length)
       
              const layerNewCastleRecords = layerChickenPostMortemRecords.filter( bf=>
                bf.vetPostMortemDiseases === 'Newcastle'
              )
       
              console.log(layerNewCastleRecords.length)
       
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
       
             
              
                  const filteredFattyLiverHSRecords = fattyLiveHSRecords.filter( atf => 
                  atf.date >= newPostMortemFilterRecord.startDate && atf.date <= newPostMortemFilterRecord.endDate
                  );
       
                  console.log(filteredFattyLiverHSRecords.length)
       
                     const filteredNewCastleRecords = layerNewCastleRecords.filter( btf => 
                     btf.date >= newPostMortemFilterRecord.startDate && btf.date <= newPostMortemFilterRecord.endDate
                     );
       
                   //  console.log(filteredNewCastleRecords)
       
                     const filteredGumboroRecords = layerGumboroRecords.filter( ctf => 
                     ctf.date >= newPostMortemFilterRecord.startDate && ctf.date <= newPostMortemFilterRecord.endDate
                     );
       
                      const filteredLayerCoccidiosisRecords = layerCoccidiosisRecords.filter( dtf => 
                      dtf.date >= newPostMortemFilterRecord.startDate && dtf.date <= newPostMortemFilterRecord.endDate
                      );
       
                      const filteredHelminthiasisRecords = layerHelminthiasisRecords.filter( etf => 
                      etf.date >= newPostMortemFilterRecord.startDate && etf.date <= newPostMortemFilterRecord.endDate
                      );
       
                    const filteredInfectiousBronchyRecords = layerInfectiousBronchyRecords.filter( ftf => 
                    ftf.date >= newPostMortemFilterRecord.startDate && ftf.date <= newPostMortemFilterRecord.endDate
                    );
       
                     const filteredEggPeritonitisRecords = layerEggPeritonitisRecords.filter( gtf => 
                         gtf.date >= newPostMortemFilterRecord.startDate && gtf.date <= newPostMortemFilterRecord.endDate
                         );
           
               
       
                      const filteredCalciumDeficiencyRecords = layerCalciumDeficiencyRecords.filter( ht => 
                      ht.date >= newPostMortemFilterRecord.startDate && ht.date <= newPostMortemFilterRecord.endDate
                      );
       
                     const filteredLaryngotracheitisRecords = laryngotracheitisRecords.filter( it => 
                     it.date >= newPostMortemFilterRecord.startDate && it.date <= newPostMortemFilterRecord.endDate
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
       
               
           }
       
        
        //--------------------ALL AGRO RECORDS FILTERED BY CATEGORY --------------------------------// 
         
          
          

       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },


    
    async getFilteredPigPMRecords({ state,commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

             const newPostMortemFilterRecord = cloneDeep(state.pigPostMortemFilterForm);

             newPostMortemFilterRecord.startDate = newPostMortemFilterRecord.startDate.toLocaleDateString('en-GB');

             newPostMortemFilterRecord.endDate = newPostMortemFilterRecord.endDate.toLocaleDateString('en-GB');

             console.log(newPostMortemFilterRecord.startDate);
             console.log(newPostMortemFilterRecord.endDate);
            
           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/vet/allPostMortems`)

           if(this.$auth.user.email !== 'kondwani1mwale@gmail.com' ){
            const customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )
                      const pigPostMortemRecords = customeUserRecords.filter( a=>
                        a.vetPostMortemCategory ==='Pigs'
                      )
               
                      console.log(pigPostMortemRecords.length);
               
                      const mycoPlasmosisRecords = pigPostMortemRecords.filter( ap=>
                       ap.vetPostMortemDiseases === 'Mycoplasmosis'
                      )
               
                      console.log(mycoPlasmosisRecords.length)
               
                      const pneumoniaRecords = pigPostMortemRecords.filter( bp=>
                        bp.vetPostMortemDiseases === 'Pneumonia'
                      )
               
                      console.log(pneumoniaRecords.length)
               
                       const clostridialInfectionRecords = pigPostMortemRecords.filter( cp=>
                         cp.vetPostMortemDiseases === 'Clostridial Infection'
                       )
               
                       const enteritisRecords = pigPostMortemRecords.filter( dp=>
                         dp.vetPostMortemDiseases === 'Enteritis'
                       )
               
                     
                      
                          const filteredMycoPlasmosisRecords = mycoPlasmosisRecords.filter( atp => 
                          atp.date >= newPostMortemFilterRecord.startDate && atp.date <= newPostMortemFilterRecord.endDate
                          );
               
                          console.log(filteredMycoPlasmosisRecords.length)
               
                             const filteredPneumoniaRecords = pneumoniaRecords.filter( btp => 
                             btp.date >= newPostMortemFilterRecord.startDate && btp.date <= newPostMortemFilterRecord.endDate
                             );
               
                            console.log(filteredPneumoniaRecords.length)
               
                             const filteredClostridialInfectionRecords = clostridialInfectionRecords.filter( ctp => 
                             ctp.date >= newPostMortemFilterRecord.startDate && ctp.date <= newPostMortemFilterRecord.endDate
                             );
               
                              const filteredEnteritisRecords = enteritisRecords.filter( dtp => 
                              dtp.date >= newPostMortemFilterRecord.startDate && dtp.date <= newPostMortemFilterRecord.endDate
                              );
               
                         
                      
                           
               
                      
                           commit(GET_FILTERED_PIG_PM_START_TIME, newPostMortemFilterRecord.startDate);
               
                           commit(GET_FILTERED_PIG_PM_END_TIME, newPostMortemFilterRecord.endDate);
               
               
                            commit(GET_ALL_PIG_MYCOPLASMOSIS_RECORDS, filteredMycoPlasmosisRecords.length); 
               
                            commit(GET_ALL_PIG_PNEUMONIA_RECORDS, filteredPneumoniaRecords.length);
               
                            commit(GET_ALL_PIG_CLOSTRIDIAL_INFECTION_RECORDS, filteredClostridialInfectionRecords.length);
               
                           commit(GET_ALL_PIG_ENTERITIS_RECORDS, filteredEnteritisRecords.length);
               
           }


           else{
            const pigPostMortemRecords = response.data.filter( a=>
                a.vetPostMortemCategory ==='Pigs'
              )
       
              console.log(pigPostMortemRecords.length);
       
              const mycoPlasmosisRecords = pigPostMortemRecords.filter( ap=>
               ap.vetPostMortemDiseases === 'Mycoplasmosis'
              )
       
              console.log(mycoPlasmosisRecords.length)
       
              const pneumoniaRecords = pigPostMortemRecords.filter( bp=>
                bp.vetPostMortemDiseases === 'Pneumonia'
              )
       
              console.log(pneumoniaRecords.length)
       
               const clostridialInfectionRecords = pigPostMortemRecords.filter( cp=>
                 cp.vetPostMortemDiseases === 'Clostridial Infection'
               )
       
               const enteritisRecords = pigPostMortemRecords.filter( dp=>
                 dp.vetPostMortemDiseases === 'Enteritis'
               )
       
             
              
                  const filteredMycoPlasmosisRecords = mycoPlasmosisRecords.filter( atp => 
                  atp.date >= newPostMortemFilterRecord.startDate && atp.date <= newPostMortemFilterRecord.endDate
                  );
       
                  console.log(filteredMycoPlasmosisRecords.length)
       
                     const filteredPneumoniaRecords = pneumoniaRecords.filter( btp => 
                     btp.date >= newPostMortemFilterRecord.startDate && btp.date <= newPostMortemFilterRecord.endDate
                     );
       
                    console.log(filteredPneumoniaRecords.length)
       
                     const filteredClostridialInfectionRecords = clostridialInfectionRecords.filter( ctp => 
                     ctp.date >= newPostMortemFilterRecord.startDate && ctp.date <= newPostMortemFilterRecord.endDate
                     );
       
                      const filteredEnteritisRecords = enteritisRecords.filter( dtp => 
                      dtp.date >= newPostMortemFilterRecord.startDate && dtp.date <= newPostMortemFilterRecord.endDate
                      );
       
                 
              
                   
       
              
                   commit(GET_FILTERED_PIG_PM_START_TIME, newPostMortemFilterRecord.startDate);
       
                   commit(GET_FILTERED_PIG_PM_END_TIME, newPostMortemFilterRecord.endDate);
       
       
                    commit(GET_ALL_PIG_MYCOPLASMOSIS_RECORDS, filteredMycoPlasmosisRecords.length); 
       
                    commit(GET_ALL_PIG_PNEUMONIA_RECORDS, filteredPneumoniaRecords.length);
       
                    commit(GET_ALL_PIG_CLOSTRIDIAL_INFECTION_RECORDS, filteredClostridialInfectionRecords.length);
       
                   commit(GET_ALL_PIG_ENTERITIS_RECORDS, filteredEnteritisRecords.length);
       
           }
       
        //--------------------ALL AGRO RECORDS FILTERED BY CATEGORY --------------------------------// 
        
               
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    async getFilteredGoatPMRecords({ state,commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

             const newPostMortemFilterRecord = cloneDeep(state.goatPostMortemFilterForm);

             newPostMortemFilterRecord.startDate = newPostMortemFilterRecord.startDate.toLocaleDateString('en-GB');

             newPostMortemFilterRecord.endDate = newPostMortemFilterRecord.endDate.toLocaleDateString('en-GB');

             console.log(newPostMortemFilterRecord.startDate);
             console.log(newPostMortemFilterRecord.endDate);
            
           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/vet/allPostMortems`)
           if(this.$auth.user.email !== 'kondwani1mwale@gmail.com' ){
            const customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )
                      const goatPostMortemRecords = customeUserRecords.filter( g=>
                        g.vetPostMortemCategory ==='Goats'
                      )
               
                      console.log(goatPostMortemRecords.length);
               
                      const helminthiasisRecords = goatPostMortemRecords.filter( ag=>
                       ag.vetPostMortemDiseases === 'Helminthiasis'
                      )
               
                      console.log(helminthiasisRecords.length)
               
                      const heartWaterRecords = goatPostMortemRecords.filter( bg=>
                        bg.vetPostMortemDiseases === 'Heartwater'
                      )
               
                      
               
                       const traumaRecords = goatPostMortemRecords.filter( cg=>
                         cg.vetPostMortemDiseases === 'Trauma'
                       )
               
                       const hemonchosisRecords = goatPostMortemRecords.filter( dg=>
                         dg.vetPostMortemDiseases === 'Hemonchosis'
                       )
               
                     
                      
                          const filteredHelminthiasisRecords = helminthiasisRecords.filter( atg => 
                          atg.date >= newPostMortemFilterRecord.startDate && atg.date <= newPostMortemFilterRecord.endDate
                          );
               
                          console.log(filteredHelminthiasisRecords.length)
               
                             const filteredHeartWaterRecords = heartWaterRecords.filter( btg => 
                             btg.date >= newPostMortemFilterRecord.startDate && btg.date <= newPostMortemFilterRecord.endDate
                             );
               
                            console.log(filteredHeartWaterRecords.length)
               
                             const filteredTraumaRecords = traumaRecords.filter( ctg => 
                             ctg.date >= newPostMortemFilterRecord.startDate && ctg.date <= newPostMortemFilterRecord.endDate
                             );
               
                              const filteredHemonchosisRecords = hemonchosisRecords.filter( dtg => 
                              dtg.date >= newPostMortemFilterRecord.startDate && dtg.date <= newPostMortemFilterRecord.endDate
                              );
               
                         
                      
                           
               
                      
                           commit(GET_FILTERED_GOAT_PM_START_TIME, newPostMortemFilterRecord.startDate);
               
                           commit(GET_FILTERED_GOAT_PM_END_TIME, newPostMortemFilterRecord.endDate);
               
               
                            commit(GET_ALL_GOAT_HELMINTHIASIS_RECORDS, filteredHelminthiasisRecords.length); 
               
                            commit(GET_ALL_GOAT_HEARTWATER_RECORDS, filteredHeartWaterRecords.length);
               
                            commit(GET_ALL_GOAT_TRAUMA_RECORDS, filteredTraumaRecords.length);
               
                           commit(GET_ALL_GOAT_HEMONCHOSIS_RECORDS, filteredHemonchosisRecords.length);
               
           }


           else{
            const goatPostMortemRecords = response.data.filter( g=>
                g.vetPostMortemCategory ==='Goats'
              )
       
              console.log(goatPostMortemRecords.length);
       
              const helminthiasisRecords = goatPostMortemRecords.filter( ag=>
               ag.vetPostMortemDiseases === 'Helminthiasis'
              )
       
              console.log(helminthiasisRecords.length)
       
              const heartWaterRecords = goatPostMortemRecords.filter( bg=>
                bg.vetPostMortemDiseases === 'Heartwater'
              )
       
              
       
               const traumaRecords = goatPostMortemRecords.filter( cg=>
                 cg.vetPostMortemDiseases === 'Trauma'
               )
       
               const hemonchosisRecords = goatPostMortemRecords.filter( dg=>
                 dg.vetPostMortemDiseases === 'Hemonchosis'
               )
       
             
              
                  const filteredHelminthiasisRecords = helminthiasisRecords.filter( atg => 
                  atg.date >= newPostMortemFilterRecord.startDate && atg.date <= newPostMortemFilterRecord.endDate
                  );
       
                  console.log(filteredHelminthiasisRecords.length)
       
                     const filteredHeartWaterRecords = heartWaterRecords.filter( btg => 
                     btg.date >= newPostMortemFilterRecord.startDate && btg.date <= newPostMortemFilterRecord.endDate
                     );
       
                    console.log(filteredHeartWaterRecords.length)
       
                     const filteredTraumaRecords = traumaRecords.filter( ctg => 
                     ctg.date >= newPostMortemFilterRecord.startDate && ctg.date <= newPostMortemFilterRecord.endDate
                     );
       
                      const filteredHemonchosisRecords = hemonchosisRecords.filter( dtg => 
                      dtg.date >= newPostMortemFilterRecord.startDate && dtg.date <= newPostMortemFilterRecord.endDate
                      );
       
                 
              
                   
       
              
                   commit(GET_FILTERED_GOAT_PM_START_TIME, newPostMortemFilterRecord.startDate);
       
                   commit(GET_FILTERED_GOAT_PM_END_TIME, newPostMortemFilterRecord.endDate);
       
       
                    commit(GET_ALL_GOAT_HELMINTHIASIS_RECORDS, filteredHelminthiasisRecords.length); 
       
                    commit(GET_ALL_GOAT_HEARTWATER_RECORDS, filteredHeartWaterRecords.length);
       
                    commit(GET_ALL_GOAT_TRAUMA_RECORDS, filteredTraumaRecords.length);
       
                   commit(GET_ALL_GOAT_HEMONCHOSIS_RECORDS, filteredHemonchosisRecords.length);
       
           }
       
        //--------------------ALL AGRO RECORDS FILTERED BY CATEGORY --------------------------------// 
       
               
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    async getFilteredQuailPMRecords({ state,commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

             const newPostMortemFilterRecord = cloneDeep(state.quailPostMortemFilterForm);

             newPostMortemFilterRecord.startDate = newPostMortemFilterRecord.startDate.toLocaleDateString('en-GB');

             newPostMortemFilterRecord.endDate = newPostMortemFilterRecord.endDate.toLocaleDateString('en-GB');

             console.log(newPostMortemFilterRecord.startDate);
             console.log(newPostMortemFilterRecord.endDate);
            
           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/vet/allPostMortems`)

           if(this.$auth.user.email !== 'kondwani1mwale@gmail.com' ){
            const customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )
                      const quailPostMortemRecords = customeUserRecords.filter( q=>
                        q.vetPostMortemCategory ==='Quails'
                      )
               
                      console.log(quailPostMortemRecords.length);
               
                      const colibacillosisRecords = quailPostMortemRecords.filter( aq=>
                       aq.vetPostMortemDiseases === 'Colibacillosis'
                      )
               
                      console.log(colibacillosisRecords.length)
               
                      const salmonellosisRecords = quailPostMortemRecords.filter( bq=>
                        bq.vetPostMortemDiseases === 'Salmonellosis'
                      )
               
                      
                      
                          const filteredColibacillosisRecords = colibacillosisRecords.filter( atq => 
                          atq.date >= newPostMortemFilterRecord.startDate && atq.date <= newPostMortemFilterRecord.endDate
                          );
               
                          console.log(filteredColibacillosisRecords.length)
               
                             const filteredSalmonellosisRecords = salmonellosisRecords.filter( btq => 
                             btq.date >= newPostMortemFilterRecord.startDate && btq.date <= newPostMortemFilterRecord.endDate
                             );
               
                            console.log(filteredSalmonellosisRecords.length)
               
                        
                      
                           commit(GET_FILTERED_QUAIL_PM_START_TIME, newPostMortemFilterRecord.startDate);
               
                           commit(GET_FILTERED_QUAIL_PM_END_TIME, newPostMortemFilterRecord.endDate);
               
               
                            commit(GET_ALL_QUAIL_COLIBACILLOSIS_RECORDS, filteredColibacillosisRecords.length); 
               
                            commit(GET_ALL_QUAIL_SALMONELLOSIS_RECORDS, filteredSalmonellosisRecords.length);
               
           }


           else{
            const quailPostMortemRecords = response.data.filter( q=>
                q.vetPostMortemCategory ==='Quails'
              )
       
              console.log(quailPostMortemRecords.length);
       
              const colibacillosisRecords = quailPostMortemRecords.filter( aq=>
               aq.vetPostMortemDiseases === 'Colibacillosis'
              )
       
              console.log(colibacillosisRecords.length)
       
              const salmonellosisRecords = quailPostMortemRecords.filter( bq=>
                bq.vetPostMortemDiseases === 'Salmonellosis'
              )
       
              
              
                  const filteredColibacillosisRecords = colibacillosisRecords.filter( atq => 
                  atq.date >= newPostMortemFilterRecord.startDate && atq.date <= newPostMortemFilterRecord.endDate
                  );
       
                  console.log(filteredColibacillosisRecords.length)
       
                     const filteredSalmonellosisRecords = salmonellosisRecords.filter( btq => 
                     btq.date >= newPostMortemFilterRecord.startDate && btq.date <= newPostMortemFilterRecord.endDate
                     );
       
                    console.log(filteredSalmonellosisRecords.length)
       
                
              
                   commit(GET_FILTERED_QUAIL_PM_START_TIME, newPostMortemFilterRecord.startDate);
       
                   commit(GET_FILTERED_QUAIL_PM_END_TIME, newPostMortemFilterRecord.endDate);
       
       
                    commit(GET_ALL_QUAIL_COLIBACILLOSIS_RECORDS, filteredColibacillosisRecords.length); 
       
                    commit(GET_ALL_QUAIL_SALMONELLOSIS_RECORDS, filteredSalmonellosisRecords.length);
       
           }
       
        
        //--------------------ALL AGRO RECORDS FILTERED BY CATEGORY --------------------------------// 
       
             
               
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    async getFilteredRabbitPMRecords({ state,commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

             const newPostMortemFilterRecord = cloneDeep(state.rabbitPostMortemFilterForm);

             newPostMortemFilterRecord.startDate = newPostMortemFilterRecord.startDate.toLocaleDateString('en-GB');

             newPostMortemFilterRecord.endDate = newPostMortemFilterRecord.endDate.toLocaleDateString('en-GB');

             console.log(newPostMortemFilterRecord.startDate);
             console.log(newPostMortemFilterRecord.endDate);
            
           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/vet/allPostMortems`)

           if(this.$auth.user.email !== 'kondwani1mwale@gmail.com' ){
            const customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )
                      const rabbitPostMortemRecords = customeUserRecords.filter( r=>
                        r.vetPostMortemCategory ==='Rabbits'
                      )
               
                      console.log(rabbitPostMortemRecords.length);
               
                      const coccidiosisRecords = rabbitPostMortemRecords.filter( aq=>
                       aq.vetPostMortemDiseases === 'Coccidiosis'
                      )
               
                      console.log(coccidiosisRecords.length)
               
                      const bacterialInfectionRecords = rabbitPostMortemRecords.filter( bq=>
                        bq.vetPostMortemDiseases === 'Bacterial Infection'
                      )
               
                      
                      
                          const filteredCoccidiosisRecords =coccidiosisRecords.filter( atq => 
                          atq.date >= newPostMortemFilterRecord.startDate && atq.date <= newPostMortemFilterRecord.endDate
                          );
               
                          console.log(filteredCoccidiosisRecords.length)
               
                             const filteredBacterialInfectionRecords = bacterialInfectionRecords.filter( btq => 
                             btq.date >= newPostMortemFilterRecord.startDate && btq.date <= newPostMortemFilterRecord.endDate
                             );
               
                            console.log(filteredBacterialInfectionRecords.length)
               
                        
                      
                           commit(GET_FILTERED_RABBIT_PM_START_TIME, newPostMortemFilterRecord.startDate);
               
                           commit(GET_FILTERED_RABBIT_PM_END_TIME, newPostMortemFilterRecord.endDate);
               
               
                            commit(GET_ALL_RABBIT_COCCIDIOSIS_RECORDS, filteredCoccidiosisRecords.length); 
               
                            commit(GET_ALL_RABBIT_BACTERIAL_INFECTION_RECORDS, filteredBacterialInfectionRecords.length);
               
               
           }


           else{
            const rabbitPostMortemRecords = response.data.filter( r=>
                r.vetPostMortemCategory ==='Rabbits'
              )
       
              console.log(rabbitPostMortemRecords.length);
       
              const coccidiosisRecords = rabbitPostMortemRecords.filter( aq=>
               aq.vetPostMortemDiseases === 'Coccidiosis'
              )
       
              console.log(coccidiosisRecords.length)
       
              const bacterialInfectionRecords = rabbitPostMortemRecords.filter( bq=>
                bq.vetPostMortemDiseases === 'Bacterial Infection'
              )
       
              
              
                  const filteredCoccidiosisRecords =coccidiosisRecords.filter( atq => 
                  atq.date >= newPostMortemFilterRecord.startDate && atq.date <= newPostMortemFilterRecord.endDate
                  );
       
                  console.log(filteredCoccidiosisRecords.length)
       
                     const filteredBacterialInfectionRecords = bacterialInfectionRecords.filter( btq => 
                     btq.date >= newPostMortemFilterRecord.startDate && btq.date <= newPostMortemFilterRecord.endDate
                     );
       
                    console.log(filteredBacterialInfectionRecords.length)
       
                
              
                   commit(GET_FILTERED_RABBIT_PM_START_TIME, newPostMortemFilterRecord.startDate);
       
                   commit(GET_FILTERED_RABBIT_PM_END_TIME, newPostMortemFilterRecord.endDate);
       
       
                    commit(GET_ALL_RABBIT_COCCIDIOSIS_RECORDS, filteredCoccidiosisRecords.length); 
       
                    commit(GET_ALL_RABBIT_BACTERIAL_INFECTION_RECORDS, filteredBacterialInfectionRecords.length);
       
       
           }
       
        
        //--------------------ALL AGRO RECORDS FILTERED BY CATEGORY --------------------------------// 
                    
               
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    async getFilteredCattlePMRecords({ state,commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

             const newPostMortemFilterRecord = cloneDeep(state.cattlePostMortemFilterForm);

             newPostMortemFilterRecord.startDate = newPostMortemFilterRecord.startDate.toLocaleDateString('en-GB');

             newPostMortemFilterRecord.endDate = newPostMortemFilterRecord.endDate.toLocaleDateString('en-GB');

             console.log(newPostMortemFilterRecord.startDate);
             console.log(newPostMortemFilterRecord.endDate);
            
           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/vet/allPostMortems`)

           if(this.$auth.user.email !== 'kondwani1mwale@gmail.com' ){
            const customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )
                      const cattlePostMortemRecords = customeUserRecords.filter( c=>
                        c.vetPostMortemCategory ==='Cattle'
                      )
               
                      console.log(cattlePostMortemRecords.length);
               
                      const anaPlasmosisRecords = cattlePostMortemRecords.filter( ac=>
                       ac.vetPostMortemDiseases === 'Anaplasmosis'
                      )
               
                      console.log(anaPlasmosisRecords.length)
               
                 
                      
                      
                          const filteredAnaPlasmosisRecords =anaPlasmosisRecords.filter( atq => 
                          atq.date >= newPostMortemFilterRecord.startDate && atq.date <= newPostMortemFilterRecord.endDate
                          );
               
                          console.log(filteredAnaPlasmosisRecords.length)
               
                      
                           commit(GET_FILTERED_CATTLE_PM_START_TIME, newPostMortemFilterRecord.startDate);
               
                           commit(GET_FILTERED_CATTLE_PM_END_TIME, newPostMortemFilterRecord.endDate);
               
               
                            commit(GET_ALL_CATTLE_ANAPLASMOSIS_RECORDS, filteredAnaPlasmosisRecords.length); 
               
                       
                       
           }


           else{
            const cattlePostMortemRecords = response.data.filter( c=>
                c.vetPostMortemCategory ==='Cattle'
              )
       
              console.log(cattlePostMortemRecords.length);
       
              const anaPlasmosisRecords = cattlePostMortemRecords.filter( ac=>
               ac.vetPostMortemDiseases === 'Anaplasmosis'
              )
       
              console.log(anaPlasmosisRecords.length)
       
         
              
              
                  const filteredAnaPlasmosisRecords =anaPlasmosisRecords.filter( atq => 
                  atq.date >= newPostMortemFilterRecord.startDate && atq.date <= newPostMortemFilterRecord.endDate
                  );
       
                  console.log(filteredAnaPlasmosisRecords.length)
       
              
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





   



}


  
    
