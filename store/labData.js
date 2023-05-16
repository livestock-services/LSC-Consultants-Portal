import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { 
        ADD_ID_TO_USED_IDS,
        REMOVE_ID_FROM_AVAILABLE_IDS,
        ADD_SAMPLE_INFORMATION_RECORD,
        
        GET_ALL_SAMPLE_INFORMATION_RECORDS,
        GET_ALL_FILTERED_SAMPLE_INFORMATION_RECORDS,

        GET_FILTERED_SAMPLE_INFORMATION_START_TIME,
        GET_FILTERED_SAMPLE_INFORMATION_END_TIME,

        ADD_SUBMISSIONS_RECORD,

        GET_ALL_SUBMISSIONS_RECORDS,
        GET_ALL_FILTERED_SUBMISSIONS_RECORDS,

        GET_FILTERED_SUBMISSIONS_START_TIME,
        GET_FILTERED_SUBMISSIONS_END_TIME,


        ADD_BIO_SUBMISSIONS_RECORD,

        GET_ALL_BIO_SUBMISSIONS_RECORDS,
        GET_ALL_FILTERED_BIO_SUBMISSIONS_RECORDS,

        GET_FILTERED_BIO_SUBMISSIONS_START_TIME,
        GET_FILTERED_BIO_SUBMISSIONS_END_TIME,


        ADD_FEED_SUBMISSIONS_RECORD,

        GET_ALL_FEED_SUBMISSIONS_RECORDS,
        GET_ALL_FILTERED_FEED_SUBMISSIONS_RECORDS,

        GET_FILTERED_FEED_SUBMISSIONS_START_TIME,
        GET_FILTERED_FEED_SUBMISSIONS_END_TIME,



        ADD_NO_3_MEAL_RECORD,
        GET_ALL_NO_3_MEAL_RECORDS,

        ADD_FF_RECORD,
        GET_ALL_FF_RECORDS,

        ADD_SE_RECORD,
        GET_ALL_SE_RECORDS,

        ADD_ME_RECORD,
        GET_ALL_ME_RECORDS,

        ADD_SUNFLOWER_CAKE_SC_RECORD,
        GET_ALL_SUNFLOWER_CAKE_SC_RECORDS,



        
        SET_LOADING,
        
        // GET_ALL_SAMPLE_INFORMATION_CONSULTS_RECORDS,
        // GET_ALL_SAMPLE_INFORMATION_SALES_RECORDS,
        
       
       
    } from '@/helpers/mutation-types'

export const state = () => ({

    loading: false,
    filteredSampleInformationStartTime:[],
    filteredSampleInformationEndTime:[],

    allSampleInformationRecords:[],
    allFilteredSampleInformationRecords:[],


    filteredSubmissionsStartTime:[],
    filteredSubmissionsEndTime:[],

    allSubmissionsRecords:[],
    allFilteredSubmissionsRecords:[],


    allBioSubmissionsRecords:[],
    allFilteredBioSubmissionsRecords:[],

    allFeedSubmissionsRecords:[],
    allFilteredFeedSubmissionsRecords:[],


    allNMRecords:[],
    allFFRecords:[],
    allSERecords:[],
    allMERecords:[],
    allSCRecords:[],

    availableIds: [],

    usedIds:[],


    // allSAMPLE_INFORMATIONConsultsRecords:[],
    // allSAMPLE_INFORMATIONSalesRecords:[],
    

    sampleInfoForm:{
        
        submissionNumber:null,
        sampleID:null,
        sampleType:null,
        animalType:null,
        otherSampleType:null,
        otherAnimalType:null,
        breed:null,
        age:null,
        sex:null,
        sampleGoodOnReceipt:null,
        dateSampleCollected:null,
        testRequested:null,
        comments:null,
        labFindings:null,
        createdBy:null
        
    },

    submissionsForm:{
        submissionsNumber: null,
        clientName: null,
        consultingVet: null,
        vetPhoneNumber: null,
        dateReceived: null,
        timeReceived: null,
        receivedBy: null,
        submittedBy: null,
        reportName: null,
        address: null,
        telPhoneNumber: null,
        email: null,
        reportSentVia: null,
        siteLocation:null,
        blood:null,
        plasma:null,
        serum:null,
        bloodSmear:null,
        impressionSmear:null,
        lymphnodeSmear:null,
        brainCrushSmear:null,
        urine:null,
        faecal:null,
        milk:null,
        semen:null,
        trachealWashing:null,
        swab:null,
        skinScraping:null,
        abortedOrFetal:null,
        tissueOrOrgan:null,
        biopsy:null,
        carcass:null,
        other:null,
        totalNumberOfSamplesSubmitted:null,
        totalNumberOfSamplesRejected:null,
        presentingProblems:null,
        exmainationRequested:null,
        testUrgency:null,
        submissionStatus:null,
        invoiceNumber:null,
        createdBy:null

    },

    bioSubmissionsForm:{
      
        clientName:null,
        // dateSubmitted:null,
        // timeStamp:null,
        createdBy:null
    },


    
    feedSubmissionsForm:{
        
        feedClientName:null,
        feedDescription:null,
        typeOfSample:null,
        // dateSubmitted:null,
        // timeStamp:null,
        createdBy:null
    },

    nmFeedSubmissionsForm:{
        nmDateOfSampleCollected:null,

        nmTimeOfReceipt:null,

        nmSubmissionNumber:null,

        nmSupplierName:null, 

        nmNRC:null,

        nmVehicleRegNumber:null,

        nmTelNumber:null, 

        nmEmail:null, 

        nmSampleID:null,

        nmTypeOfSample:null,

        nmSiteLocation:null, 

        nmNumberOfBagsPerTonnage:null,

        nmNumberOfBagsSampled:null,

        nmColor:null,

        nmSmell:null,

        nmTexture:null,

        nmForeignBodies:null,

        nmWeevilsOrInsects:null, 

        nmBranContent:null,

        nmGritContent:null,

        nmPowderContent:null,

        nmOther:null,

        nmMoisture:null,

        nmTechnician:null,

        nmQualitativeScore:null,

        nmFinalVerdict:null,

        nmReasonForVerdict:null,

        nmOtherReason:null, 

        nmNumberOfBagsOrTonnageSelected:null,

        nmNumberOfBagsOrTonnageRejected:null,

        createdBy:null
       
    },

    ffFeedSubmissionsForm: {
        
        ffDateReceived:null,

        ffReceivedBy:null ,

        ffTimeOfReceipt:null,

        ffSubmissionNumber:null ,

        ffSupplierName:null, 

        ffNRC:null,

        ffTelNumber:null, 

        ffDescription:null,

        ffSiteLocation:null, 

        ffSampleID:null,

        ffSamplePackaging:null,

        ffSampleLabelling:null,

        ffSampleCondition:null,

        ffTestRequested:null,

        ffColor:null,

        ffSmell:null,

        ffTexture:null,

        ffForeignBodies:null,

        ffOther:null,

        ffQualitativeScore:null ,

        ffAntiTrypsinTest:null ,

        ffMoisture:null,

        ffProtein:null,

        ffFat:null,

        ffFibre:null, 

        ffAsh:null,

        ffNutritionistComment:null,

        ffSecondComment:null,

        createdBy:null
   

      
    },

    seFeedSubmissionsForm: {
        
        seDateReceived:null,

        seReceivedBy:null ,

        seTimeOfReceipt:null,

        seSubmissionNumber:null ,

        seSupplierName:null, 

        seNRC:null,

        seTelNumber:null, 

        seDescription:null,

        seSiteLocation:null, 

        seSampleID:null,

        seSamplePackaging:null,

        seSampleLabelling:null,

        seSampleCondition:null,

        seTestRequested:null,

        seColor:null,

        seSmell:null,

        seTexture:null,

        seForeignBodies:null,

        seOther:null,

        seQualitativeScore:null ,

        seAntiTrypsinTest:null ,

        seMoisture:null,

        seProtein:null,

        seFat:null,

        seFibre:null, 

        seAsh:null,

        seNutritionistComment:null,

        seSecondComment:null,

        createdBy:null
   

      
    },

    meFeedSubmissionsForm: {
        
        meDateReceived:null,

        meReceivedBy:null ,

        meTimeOfReceipt:null,

        meSubmissionNumber:null ,

        meSupplierName:null, 

        meNRC:null,

        meTelNumber:null, 

        meDescription:null,

        meSiteLocation:null, 

        meSampleID:null,

        meSamplePackaging:null,

        meSampleLabelling:null,

        meSampleCondition:null,

        meTestRequested:null,

        meColor:null,

        meSmell:null,

        meTexture:null,

        meForeignBodies:null,

        meOther:null,

        meQualitativeScore:null ,

        meAntiTrypsinTest:null ,

        meMoisture:null,

        meProtein:null,

        meFat:null,

        meFibre:null, 

        meAsh:null,

        meNutritionistComment:null,

        meSecondComment:null,

        createdBy:null
   

       
    },

    scFeedSubmissionsForm: {
        
        scDateOfSampleCollected:null,
    
        scTimeOfReceipt:null,
 
        scSubmissionNumber:null,

        scSupplierName:null, 

        scNRC:null,

        scVehicleRegNumber:null,

        scTelNumber:null, 

        scEmail:null, 

        scSampleID:null,

        scTypeOfSample:null,

        scSiteLocation:null, 

        scNumberOfBagsPerTonnage:null,

        scNumberOfBagsSampled:null,

        scColor:null,

        scSmell:null,

        scTexture:null,

        scForeignBodies:null,

        scWeevilsOrInsects:null, 

        scBranContent:null,

        scGritContent:null,

        scPowderContent:null,

        scOther:null,

        scMoisture:null,

        scTechnician:null,

        scQualitativeScore:null,

        scFinalVerdict:null,

        scReasonForVerdict:null,

        scOtherReason:null, 

        scNumberOfBagsOrTonnageSelected:null,

        scNumberOfBagsOrTonnageRejected:null,

        createdBy:null



},


    sampleInfoFilterForm:{
        startDate:null,
        endDate:null
    },

    submissionsFilterForm:{
        startDate:null,
        endDate:null
    }

})

    


export const getters = {
    getField,

    allAvailableIDs(state){
        return state.availableIds
    },

    allUsedIDs(state){
        return state.usedIds
    },

    loading(state) {
        return state.loading
    },
    

      filteredSampleInformationStartTime(state){
        return state.filteredSampleInformationStartTime
      },

      filteredSampleInformationEndTime(state){
        return state.filteredSampleInformationEndTime
      },


      
    filteredSubmissionStartTime(state){
        return state.filteredSubmissionStartTime
    },

    filteredSubmissionEndTime(state){
        return state.filteredSubmissionEndTime
    },

      //---------------------SAMPLE INFO GETTERS--------------------------------------------//

    allSampleInformationRecords(state){
        return state.allSampleInformationRecords
    },

    allFilteredSampleInformationRecords(state){
        return state.allFilteredSampleInformationRecords
    },


   

    
        
  //----------------------------------------END OF SAMPLE INFO SECTION----------------------------------------//




    //---------------------SUBMISSIONS GETTERS--------------------------------------------//

    allSubmissionsRecords(state){
        return state.allSubmissionsRecords
    },

    allFilteredSubmissionsRecords(state){
        return state.allFilteredSubmissionsRecords
    },



     //---------------------RECEIVING, BIO SUBMISSIONS GETTERS--------------------------------------------//

     allBioSubmissionsRecords(state){
        return state.allBioSubmissionsRecords
    },

    allFilteredBioSubmissionsRecords(state){
        return state.allFilteredBioSubmissionsRecords
    },

    //---------------------RECEIVING, FEED SUBMISSIONS GETTERS--------------------------------------------//

    allFeedSubmissionsRecords(state){
        return state.allFeedSubmissionsRecords
    },

    allFilteredFeedSubmissionsRecords(state){
        return state.allFilteredFeedSubmissionsRecords
    },

    //----------------------------NO. 3 MEAL GETTER------------------------------------------------------------------//
    allNMRecords(state){
        return state.allNMRecords
    },

     //----------------------------SOYA FF GETTER------------------------------------------------------------------//
     allFFRecords(state){
        return state.allFFRecords
    },

     //----------------------------SOYA SE GETTER------------------------------------------------------------------//
     allSERecords(state){
        return state.allSERecords
    },


     //----------------------------SOYA ME GETTER------------------------------------------------------------------//
     allMERecords(state){
        return state.allMERecords
    },

     //----------------------------SUNFLOWER CAKE SC GETTER------------------------------------------------------------------//
     allSCRecords(state){
        return state.allSCRecords
    },




}


export const mutations = {

    updateField,

    [ADD_ID_TO_USED_IDS](state,loading){
        state.usedIds.push(newID)
    },

    [REMOVE_ID_FROM_AVAILABLE_IDS](state,loading){
        state.availableIds.shift(usedID)
    },

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  

    //MUTATIONS FOR ADDING, SETTING AND GETTING AgroRecordS
    [ADD_SAMPLE_INFORMATION_RECORD](state, newSampleInformationRecord){
        state.allSampleInformationRecords.push(newSampleInformationRecord)
    },

   
  

    [GET_FILTERED_SAMPLE_INFORMATION_START_TIME](state, payload){
        state.filteredSampleInformationStartTime= payload
    },

    [GET_FILTERED_SAMPLE_INFORMATION_END_TIME](state, payload){
        state.filteredSampleInformationEndTime= payload
    },

    //------------------------------------AGRO MUTATIONS---------------------------------------------//
    [GET_ALL_SAMPLE_INFORMATION_RECORDS](state, payload){
        state.allSampleInformationRecords = payload
    },

    [GET_ALL_FILTERED_SAMPLE_INFORMATION_RECORDS](state, payload){
        state.allFilteredSampleInformationRecords = payload
    },


    //------------------------------------------------------------------------------------//



    //MUTATIONS FOR ADDING, SETTING AND GETTING AgroRecordS
    [ADD_SUBMISSIONS_RECORD](state, newSubmissionsRecord){
        state.allSubmissionsRecords.push(newSubmissionsRecord)
    },

   
  

    [GET_FILTERED_SUBMISSIONS_START_TIME](state, payload){
        state.filteredSubmissionsStartTime= payload
    },

    [GET_FILTERED_SUBMISSIONS_END_TIME](state, payload){
        state.filteredSubmissionsEndTime= payload
    },

    //------------------------------------AGRO MUTATIONS---------------------------------------------//
    [GET_ALL_SUBMISSIONS_RECORDS](state, payload){
        state.allSubmissionsRecords = payload
    },

    [GET_ALL_FILTERED_SUBMISSIONS_RECORDS](state, payload){
        state.allFilteredSubmissionsRecords = payload
    },


    //------------------------------------------------------------------------------------//

   
      //MUTATIONS FOR ADDING, SETTING AND GETTING LAB SUBMISSIONS
      [ADD_BIO_SUBMISSIONS_RECORD](state, newBioSubmissionsRecord){
        state.allBioSubmissionsRecords.push(newBioSubmissionsRecord)
    },

   
  

    [GET_FILTERED_BIO_SUBMISSIONS_START_TIME](state, payload){
        state.filteredBioSubmissionsStartTime= payload
    },

    [GET_FILTERED_BIO_SUBMISSIONS_END_TIME](state, payload){
        state.filteredBioSubmissionsEndTime= payload
    },

    //------------------------------------LAB SUBMISSIONS MUTATIONS---------------------------------------------//
    [GET_ALL_BIO_SUBMISSIONS_RECORDS](state, payload){
        state.allBioSubmissionsRecords = payload
    },

    [GET_ALL_FILTERED_BIO_SUBMISSIONS_RECORDS](state, payload){
        state.allFilteredBioSubmissionsRecords = payload
    },


    //------------------------------------------------------------------------------------//



     //MUTATIONS FOR ADDING, SETTING AND GETTING FEED SUBMISSIONS
     [ADD_FEED_SUBMISSIONS_RECORD](state, newFeedSubmissionsRecord){
        state.allFeedSubmissionsRecords.push(newFeedSubmissionsRecord)
    },

   
  

    [GET_FILTERED_FEED_SUBMISSIONS_START_TIME](state, payload){
        state.filteredFeedSubmissionsStartTime= payload
    },

    [GET_FILTERED_FEED_SUBMISSIONS_END_TIME](state, payload){
        state.filteredFeedSubmissionsEndTime= payload
    },

    //------------------------------------LAB SUBMISSIONS MUTATIONS---------------------------------------------//
    [GET_ALL_FEED_SUBMISSIONS_RECORDS](state, payload){
        state.allFeedSubmissionsRecords = payload
    },

    [GET_ALL_FILTERED_FEED_SUBMISSIONS_RECORDS](state, payload){
        state.allFilteredFeedSubmissionsRecords = payload
    },


    //------------------------------------------------------------------------------------//

    //------------------------------------No.3 MEAL MUTATIONS---------------------------------------------//

    [ADD_NO_3_MEAL_RECORD](state, newNMRecord){
        state.allNMRecords.push(newNMRecord)
    },

    [GET_ALL_NO_3_MEAL_RECORDS](state, payload){
        state.allNMRecords = payload
    },

    //------------------------------------------------------------------------------------//

     //------------------------------------SOYA FF MUTATIONS---------------------------------------------//

     [ADD_FF_RECORD](state, newFFRecord){
        state.allFFRecords.push(newFFRecord)
    },

    [GET_ALL_FF_RECORDS](state, payload){
        state.allFFRecords = payload
    },

    //------------------------------------------------------------------------------------//

     //------------------------------------SOYA SE MUTATIONS---------------------------------------------//

     

     [ADD_SE_RECORD](state, newSERecord){
        state.allSERecords.push(newSERecord)
    },

    [GET_ALL_SE_RECORDS](state, payload){
        state.allSERecords = payload
    },

    //------------------------------------------------------------------------------------//

     //------------------------------------SOYA ME MUTATIONS---------------------------------------------//

     [ADD_ME_RECORD](state, newMERecord){
        state.allMERecords.push(newMERecord)
    },

    [GET_ALL_ME_RECORDS](state, payload){
        state.allMERecords = payload
    },

    //------------------------------------------------------------------------------------//


     //------------------------------------SUNFLOWER CAKE SC MUTATIONS---------------------------------------------//

     [ADD_SUNFLOWER_CAKE_SC_RECORD](state, newSCRecord){
        state.allSCRecords.push(newSCRecord)
    },

    [GET_ALL_SUNFLOWER_CAKE_SC_RECORDS](state, payload){
        state.allSCRecords = payload
    },

    //------------------------------------------------------------------------------------//

       
}

export const actions = {

    
 //GET ALL AgroRecordS
    async getAllSampleInformationRecords({ state,commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/lab/sampleInfo/allSampleInformationRecords`)

           if(this.$auth.user.email !== 'kondwani1mwale@gmail.com' ){
            const customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )

                      console.log(customeUserRecords);
                      commit(GET_ALL_SAMPLE_INFORMATION_RECORDS, customeUserRecords);

            }

            else{

                commit(GET_ALL_SAMPLE_INFORMATION_RECORDS, response.data);

            }
   
           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           

       
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

     async getFilteredSampleInformationRecords({ state,commit }){
         try {
           //---  ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
             commit(SET_LOADING, true)

              const newFilterRecord = cloneDeep(state.sampleInfoFilterForm);

              newFilterRecord.startDate = newFilterRecord.startDate.toLocaleDateString('en-US');

              newFilterRecord.endDate = newFilterRecord.endDate.toLocaleDateString('en-US');

              console.log(newFilterRecord.startDate);
              console.log(newFilterRecord.endDate);
            
           
          //---   API REQUEST IS MADE AND RESULT IS STORED IN CONST
            const {data: response} = await api.get(`/lab/sampleInfo/allSampleInformationRecords`)

         //   const { data:fetchUsers } = await api.get(`/auth/allUsers`)
        
       //  --------------------ALL SAMPLE_INFORMATION RECORDS FILTERED BY CATEGORY -------------------------------- //
        // const SAMPLE_INFORMATIONConsultsRecords = response.data.filter( a=>
        //  a.SAMPLE_INFORMATIONCategory ==='Consultation'
        // )

        // const SAMPLE_INFORMATIONSalesRecords = response.data.filter( b=>
        //  b.SAMPLE_INFORMATIONCategory ==='Sales'
        // )

   // -------------------------------END OF FILTERING BY CATEGORY----------------------//




 //   --------FILTER CATEGORIES BY DATE AND SUMMATION OF EACH CATEGORY------------------//
          const filteredSampleInformationRecords = response.data.filter( at => 
         at.date >= newFilterRecord.startDate && at.date <= newFilterRecord.endDate
         );

        //  const filteredSampleInformationSalesRecordsRecords = SAMPLE_INFORMATIONSalesRecords.filter( bt => 
        //      bt.date >= newFilterRecord.startDate && bt.date <= newFilterRecord.endDate
        //      );

       
        
         console.log(filteredSampleInformationRecords.length);

      //   console.log(filteredSampleInformationSalesRecordsRecords.length);


            console.log(response.data);

          //  RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
          //  commit(GET_ALL_SAMPLE_INFORMATION_RECORDS, response.data);

            commit(GET_FILTERED_SAMPLE_INFORMATION_START_TIME, newFilterRecord.startDate);

            commit(GET_FILTERED_SAMPLE_INFORMATION_END_TIME, newFilterRecord.endDate);

            commit(GET_ALL_FILTERED_SAMPLE_INFORMATION_RECORDS, filteredSampleInformationRecords.length);

         //   commit(GET_ALL_SAMPLE_INFORMATION_SALES_RECORDS, filteredSAMPLE_INFORMATIONSalesRecordsRecords.length);

       
//            //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
//            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    //ADD NEW SAMPLE_INFORMATIONRecord TO ALL SAMPLE_INFORMATIONRecordS
    async addNewSampleInformationRecord({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newSampleInformationRecord = cloneDeep(state.sampleInfoForm);

           newSampleInformationRecord.dateSampleCollected = state.sampleInfoForm.dateSampleCollected.toLocaleDateString('en-US');



         newSampleInformationRecord.createdBy = this.$auth.user.email;

        //    console.log(newSampleInformationRecord.date);
           
           console.log(newSampleInformationRecord);

           
            const response = await api.post(`/lab/sampleInfo/addNewSampleInformationRecord`, newSampleInformationRecord);

            console.log(response.data);

            commit(ADD_SAMPLE_INFORMATION_RECORD, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },
    

    //-------------------------------------------------------------SUBMISSIONS RECORDS----------------------------------------------------------------------------------------//

    async getAllSubmissionsRecords({ state,commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

          

            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/lab/submissions/allSubmissionsRecords`)

           if(this.$auth.user.email !== 'kondwani1mwale@gmail.com' ){
            const customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )

                      console.log(customeUserRecords);
                      commit(GET_ALL_SUBMISSIONS_RECORDS, customeUserRecords);

            }

            else{

                commit(GET_ALL_SUBMISSIONS_RECORDS, response.data);

            }

   
           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           

       
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

     async getFilteredSubmissionsRecords({ state,commit }){
         try {
           //---  ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
             commit(SET_LOADING, true)

              const newFilterRecord = cloneDeep(state.submissionsFilterForm);

              newFilterRecord.startDate = newFilterRecord.startDate.toLocaleDateString('en-US');

              newFilterRecord.endDate = newFilterRecord.endDate.toLocaleDateString('en-US');

              console.log(newFilterRecord.startDate);
              console.log(newFilterRecord.endDate);
            
           
          //---   API REQUEST IS MADE AND RESULT IS STORED IN CONST
            const {data: response} = await api.get(`/lab/submissions/allSubmissionsRecords`)

         //   const { data:fetchUsers } = await api.get(`/auth/allUsers`)
        
       //  --------------------ALL SUBMISSIONS RECORDS FILTERED BY CATEGORY -------------------------------- //
        // const SUBMISSIONSConsultsRecords = response.data.filter( a=>
        //  a.SUBMISSIONSCategory ==='Consultation'
        // )

        // const SUBMISSIONSSalesRecords = response.data.filter( b=>
        //  b.SUBMISSIONSCategory ==='Sales'
        // )

   // -------------------------------END OF FILTERING BY CATEGORY----------------------//




 //   --------FILTER CATEGORIES BY DATE AND SUMMATION OF EACH CATEGORY------------------//
          const filteredSubmissionsRecords = response.data.filter( at => 
         at.date >= newFilterRecord.startDate && at.date <= newFilterRecord.endDate
         );

        //  const filteredSubmissionsSalesRecordsRecords = SUBMISSIONSSalesRecords.filter( bt => 
        //      bt.date >= newFilterRecord.startDate && bt.date <= newFilterRecord.endDate
        //      );

       
        
         console.log(filteredSubmissionsRecords.length);

      //   console.log(filteredSubmissionsSalesRecordsRecords.length);


            console.log(response.data);

          //  RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
          //  commit(GET_ALL_SUBMISSIONS_RECORDS, response.data);

            commit(GET_FILTERED_SUBMISSIONS_START_TIME, newFilterRecord.startDate);

            commit(GET_FILTERED_SUBMISSIONS_END_TIME, newFilterRecord.endDate);

            commit(GET_ALL_FILTERED_SUBMISSIONS_RECORDS, filteredSubmissionsRecords.length);

         //   commit(GET_ALL_SUBMISSIONS_SALES_RECORDS, filteredSUBMISSIONSSalesRecordsRecords.length);

       
//            //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
//            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    //ADD NEW SUBMISSIONSRecord TO ALL SUBMISSIONSRecordS
    async addNewSubmissionsRecord({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newSubmissionsRecord = cloneDeep(state.submissionsForm);

           //newSubmissionsRecord.dateTimeReceived = state.submissionsForm.dateTimeReceived.toLocaleDateString('en-US');



         newSubmissionsRecord.createdBy = this.$auth.user.email;

        //    console.log(newSubmissionsRecord.date);
           
           console.log(newSubmissionsRecord);

           
            const response = await api.post(`/lab/submissions/addNewSubmissionsRecord`, newSubmissionsRecord);

            console.log(response.data);

            commit(ADD_SUBMISSIONS_RECORD, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },



     //-------------------------------------------------------------SUBMISSIONS RECORDS----------------------------------------------------------------------------------------//

     async getAllBioSubmissionsRecords({ state,commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

      

            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/lab/bioSubmissions/allBioSubmissions`)

           if(this.$auth.user.email !== 'kondwani1mwale@gmail.com' ){
            const customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )

                      console.log(customeUserRecords);
                      commit(GET_ALL_BIO_SUBMISSIONS_RECORDS, customeUserRecords);

            }

            else{

                commit(GET_ALL_BIO_SUBMISSIONS_RECORDS, response.data);

            }

   
           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           

       
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

     async getFilteredBioSubmissionsRecords({ state,commit }){
         try {
           //---  ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
             commit(SET_LOADING, true)

              const newFilterRecord = cloneDeep(state.BiosubmissionsFilterForm);

              newFilterRecord.startDate = newFilterRecord.startDate.toLocaleDateString('en-US');

              newFilterRecord.endDate = newFilterRecord.endDate.toLocaleDateString('en-US');

              console.log(newFilterRecord.startDate);
              console.log(newFilterRecord.endDate);
            
           
          //---   API REQUEST IS MADE AND RESULT IS STORED IN CONST
            const {data: response} = await api.get(`/lab/bioSubmissions/allBioSubmissionsRecords`)

         //   const { data:fetchUsers } = await api.get(`/auth/allUsers`)
        
       //  --------------------ALL BioSUBMISSIONS RECORDS FILTERED BY CATEGORY -------------------------------- //
        // const BioSUBMISSIONSConsultsRecords = response.data.filter( a=>
        //  a.BioSUBMISSIONSCategory ==='Consultation'
        // )

        // const BioSUBMISSIONSSalesRecords = response.data.filter( b=>
        //  b.BioSUBMISSIONSCategory ==='Sales'
        // )

   // -------------------------------END OF FILTERING BY CATEGORY----------------------//




 //   --------FILTER CATEGORIES BY DATE AND SUMMATION OF EACH CATEGORY------------------//
          const filteredBioSubmissionsRecords = response.data.filter( at => 
         at.date >= newFilterRecord.startDate && at.date <= newFilterRecord.endDate
         );

        //  const filteredBioSubmissionsSalesRecordsRecords = BioSUBMISSIONSSalesRecords.filter( bt => 
        //      bt.date >= newFilterRecord.startDate && bt.date <= newFilterRecord.endDate
        //      );

       
        
         console.log(filteredBioSubmissionsRecords.length);

      //   console.log(filteredBioSubmissionsSalesRecordsRecords.length);


            console.log(response.data);

          //  RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
          //  commit(GET_ALL_BioSUBMISSIONS_RECORDS, response.data);

            commit(GET_FILTERED_BIO_SUBMISSIONS_START_TIME, newFilterRecord.startDate);

            commit(GET_FILTERED_BIO_SUBMISSIONS_END_TIME, newFilterRecord.endDate);

            commit(GET_ALL_FILTERED_BIO_SUBMISSIONS_RECORDS, filteredBioSubmissionsRecords.length);

         //   commit(GET_ALL_BioSUBMISSIONS_SALES_RECORDS, filteredBioSUBMISSIONSSalesRecordsRecords.length);

       
//            //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
//            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    //ADD NEW BioSUBMISSIONSRecord TO ALL BioSUBMISSIONSRecordS
    async addNewBioSubmissionsRecord({ state, commit}){
        try {
            commit(SET_LOADING, true);

            var nextId = 1

            

            const newBioSubmissionsRecord = cloneDeep(state.bioSubmissionsForm);

           
        //    newBioSubmissionsRecord.dateSubmitted = state.bioSubmissionsForm.dateSubmitted.toLocaleDateString('en-US');

        //    newBioSubmissionsRecord.timeStamp = state.bioSubmissionsForm.timeStamp.toLocaleTimeString();



         newBioSubmissionsRecord.createdBy = this.$auth.user.email;

        //    console.log(newBioSubmissionsRecord.date);
           
           console.log(newBioSubmissionsRecord);

           
            const response = await api.post(`/lab/bioSubmissions/addNewBioSubmission`, newBioSubmissionsRecord);

            console.log(response.data);

            commit(ADD_BIO_SUBMISSIONS_RECORD, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },




     //------------------------------------------------------------- FEED SUBMISSIONS RECORDS----------------------------------------------------------------------------------------//

     async getAllFeedSubmissionsRecords({ state,commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/lab/feedSubmissions/allFeedSubmissions`)

           if(this.$auth.user.email !== 'kondwani1mwale@gmail.com' ){
            const customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )

                      console.log(customeUserRecords);
                      commit(GET_ALL_FEED_SUBMISSIONS_RECORDS, customeUserRecords);

            }

            else{

                commit(GET_ALL_FEED_SUBMISSIONS_RECORDS, response.data);

            }

   
           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           

       
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

     async getFilteredFeedSubmissionsRecords({ state,commit }){
         try {
           //---  ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
             commit(SET_LOADING, true)

              const newFilterRecord = cloneDeep(state.feedSubmissionsFilterForm);

              newFilterRecord.startDate = newFilterRecord.startDate.toLocaleDateString('en-US');

              newFilterRecord.endDate = newFilterRecord.endDate.toLocaleDateString('en-US');

              console.log(newFilterRecord.startDate);
              console.log(newFilterRecord.endDate);
            
           
          //---   API REQUEST IS MADE AND RESULT IS STORED IN CONST
            const {data: response} = await api.get(`/lab/feedSubmissions/allFeedSubmissionsRecords`)

         //   const { data:fetchUsers } = await api.get(`/auth/allUsers`)
        
       //  --------------------ALL FeedSUBMISSIONS RECORDS FILTERED BY CATEGORY -------------------------------- //
        // const FeedSUBMISSIONSConsultsRecords = response.data.filter( a=>
        //  a.FeedSUBMISSIONSCategory ==='Consultation'
        // )

        // const FeedSUBMISSIONSSalesRecords = response.data.filter( b=>
        //  b.FeedSUBMISSIONSCategory ==='Sales'
        // )

   // -------------------------------END OF FILTERING BY CATEGORY----------------------//




 //   --------FILTER CATEGORIES BY DATE AND SUMMATION OF EACH CATEGORY------------------//
          const filteredFeedSubmissionsRecords = response.data.filter( at => 
         at.date >= newFilterRecord.startDate && at.date <= newFilterRecord.endDate
         );

        //  const filteredFeedSubmissionsSalesRecordsRecords = FeedSUBMISSIONSSalesRecords.filter( bt => 
        //      bt.date >= newFilterRecord.startDate && bt.date <= newFilterRecord.endDate
        //      );

       
        
         console.log(filteredFeedSubmissionsRecords.length);

      //   console.log(filteredFeedSubmissionsSalesRecordsRecords.length);


            console.log(response.data);

          //  RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
          //  commit(GET_ALL_FeedSUBMISSIONS_RECORDS, response.data);

            commit(GET_FILTERED_FEED_SUBMISSIONS_START_TIME, newFilterRecord.startDate);

            commit(GET_FILTERED_FEED_SUBMISSIONS_END_TIME, newFilterRecord.endDate);

            commit(GET_ALL_FILTERED_FEED_SUBMISSIONS_RECORDS, filteredFeedSubmissionsRecords.length);

         //   commit(GET_ALL_FeedSUBMISSIONS_SALES_RECORDS, filteredFeedSUBMISSIONSSalesRecordsRecords.length);

       
//            //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
//            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    //ADD NEW FeedSUBMISSIONSRecord TO ALL FeedSUBMISSIONSRecordS
    async addNewFeedSubmissionsRecord({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newFeedSubmissionsRecord = cloneDeep(state.feedSubmissionsForm);

            // newFeedSubmissionsRecord.dateSubmitted = state.feedSubmissionsForm.dateSubmitted.toLocaleDateString('en-US');

            // newFeedSubmissionsRecord.timeStamp = state.feedSubmissionsForm.timeStamp.toLocaleTimeString();
 
 


         newFeedSubmissionsRecord.createdBy = this.$auth.user.email;

        //    console.log(newFeedSubmissionsRecord.date);
           
           console.log(newFeedSubmissionsRecord);

           
            const response = await api.post(`/lab/feedSubmissions/addNewFeedSubmission`, newFeedSubmissionsRecord);

            console.log(response.data);

            commit(ADD_FEED_SUBMISSIONS_RECORD, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    

     //-------------------------------------ACTIONS FOR NO.3 MEAL-----------------------------------------------------------------------//
     async addNewNMRecord({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newNMRecord = cloneDeep(state.nmFeedSubmissionsForm);

           newNMRecord.nmDateOfSampleCollected = state.nmFeedSubmissionsForm.nmDateOfSampleCollected.toLocaleDateString('en-US');
           
           newNMRecord.nmTimeOfReceipt = state.nmFeedSubmissionsForm.nmTimeOfReceipt.toLocaleTimeString();


         newNMRecord.createdBy = this.$auth.user.email;

        //    console.log(newNMRecord.date);
           
           console.log(newNMRecord);

           
            const response = await api.post(`/lab/feedData/addNewNM`, newNMRecord);

            console.log(response.data);

            commit(ADD_NO_3_MEAL_RECORD, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },
    

    //-----------------------------------------------------------------------------------------------------------------------------------------------------//

    async getAllNMRecords({ state,commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

            var BioSubmissionIDs =20;

            var BSIDs = [];

            for (let i = 0; i < BioSubmissionIDs; i++) {

                BSIDs += i;

                 
                
            }

           console.log(BSIDs);


           
            

            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/lab/feedData/NM`)

           if(this.$auth.user.email !== 'kondwani1mwale@gmail.com' ){
            const customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )

                      console.log(customeUserRecords);
                      commit(GET_ALL_NO_3_MEAL_RECORDS, customeUserRecords);

            }

            else{

                commit(GET_ALL_NO_3_MEAL_RECORDS, response.data);

            }

   
           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           

       
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },
    
    //-----------------------------------------------------------------------------------------------------------------------------------------------------//
    //-----------------------------------------------------------------------------------------------------------------------------------------------------//    



       //-------------------------------------ACTIONS FOR SOYA FF-----------------------------------------------------------------------//
       async addNewFFRecord({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newFFRecord = cloneDeep(state.ffFeedSubmissionsForm);

           newFFRecord.ffDateReceived = state.ffFeedSubmissionsForm.ffDateReceived.toLocaleDateString('en-US');
           newFFRecord.ffTimeOfReceipt = state.ffFeedSubmissionsForm.ffTimeOfReceipt.toLocaleTimeString();


         newFFRecord.createdBy = this.$auth.user.email;

        //    console.log(newFFRecord.date);
           
           console.log(newFFRecord);

           
            const response = await api.post(`/lab/feedData/addNewFF`, newFFRecord);

            console.log(response.data);

            commit(ADD_FF_RECORD, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },
    

    //-----------------------------------------------------------------------------------------------------------------------------------------------------//

    async getAllFFRecords({ state,commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/lab/feedData/FF`)

           if(this.$auth.user.email !== 'kondwani1mwale@gmail.com' ){
            const customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )

                      console.log(customeUserRecords);
                      commit(GET_ALL_FF_RECORDS, customeUserRecords);

            }

            else{

                commit(GET_ALL_FF_RECORDS, response.data);

            }

   
           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           

       
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },
    
    //-----------------------------------------------------------------------------------------------------------------------------------------------------//
    //-----------------------------------------------------------------------------------------------------------------------------------------------------//   

  




       //-------------------------------------ACTIONS FOR SOYA SE-----------------------------------------------------------------------//
       async addNewSERecord({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newSERecord = cloneDeep(state.seFeedSubmissionsForm);

           newSERecord.seDateReceived = state.seFeedSubmissionsForm.seDateReceived.toLocaleDateString('en-US');
           newSERecord.seTimeOfReceipt = state.seFeedSubmissionsForm.seTimeOfReceipt.toLocaleTimeString();


         newSERecord.createdBy = this.$auth.user.email;

        //    console.log(newSERecord.date);
           
           console.log(newSERecord);

           
            const response = await api.post(`/lab/feedData/addNewSE`, newSERecord);

            console.log(response.data);

            commit(ADD_SE_RECORD, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    //-----------------------------------------------------------------------------------------------------------------------------------------------------//

    async getAllSERecords({ state,commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/lab/feedData/SE`)

           if(this.$auth.user.email !== 'kondwani1mwale@gmail.com' ){
            const customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )

                      console.log(customeUserRecords);
                      commit(GET_ALL_SE_RECORDS, customeUserRecords);

            }

            else{

                commit(GET_ALL_SE_RECORDS, response.data);

            }

   
           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES ESEECTIVE
           

       
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },
    
    //-----------------------------------------------------------------------------------------------------------------------------------------------------//
    //-----------------------------------------------------------------------------------------------------------------------------------------------------//   

    

    //-------------------------------------ACTIONS FOR SOYA ME-----------------------------------------------------------------------//
    async addNewMERecord({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newMERecord = cloneDeep(state.meFeedSubmissionsForm);

           newMERecord.meDateReceived = state.meFeedSubmissionsForm.meDateReceived.toLocaleDateString('en-US');



         newMERecord.createdBy = this.$auth.user.email;

        //    console.log(newSERecord.date);
           
           console.log(newMERecord);

           
            const response = await api.post(`/lab/feedData/addNewME`, newMERecord);

            console.log(response.data);

            commit(ADD_ME_RECORD, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },
    

    //-----------------------------------------------------------------------------------------------------------------------------------------------------//

    async getAllMERecords({ state,commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/lab/feedData/ME`)

           if(this.$auth.user.email !== 'kondwani1mwale@gmail.com' ){
            const customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )

                      console.log(customeUserRecords);
                      commit(GET_ALL_ME_RECORDS, customeUserRecords);

            }

            else{

                commit(GET_ALL_ME_RECORDS, response.data);

            }

   
           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           

       
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },
    
    //-----------------------------------------------------------------------------------------------------------------------------------------------------//
    //-----------------------------------------------------------------------------------------------------------------------------------------------------//   




     //-------------------------------------ACTIONS FOR SOYA ME-----------------------------------------------------------------------//
     async addNewSCRecord({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newSCRecord = cloneDeep(state.scFeedSubmissionsForm);

           newSCRecord.scDateOfSampleCollected = state.scFeedSubmissionsForm.scDateOfSampleCollected.toLocaleDateString('en-US');

           newSCRecord.scTimeOfReceipt = state.scFeedSubmissionsForm.scTimeOfReceipt.toLocaleTimeString();


         newSCRecord.createdBy = this.$auth.user.email;

        //    console.log(newSERecord.date);
           
           console.log(newSCRecord);

           
            const response = await api.post(`/lab/feedData/addNewSC`, newSCRecord);

            console.log(response.data);

            commit(ADD_SUNFLOWER_CAKE_SC_RECORD, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },
    

    //-----------------------------------------------------------------------------------------------------------------------------------------------------//

    async getAllSCRecords({ state,commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/lab/feedData/SC`)

           if(this.$auth.user.email !== 'kondwani1mwale@gmail.com' ){
            const customeUserRecords = response.data.filter( cur=>
                cur.createdBy === this.$auth.user.email
                      )

                      console.log(customeUserRecords);
                      commit(GET_ALL_SUNFLOWER_CAKE_SC_RECORDS, customeUserRecords);

            }

            else{

                commit(GET_ALL_SUNFLOWER_CAKE_SC_RECORDS, response.data);

            }

   
           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EscECTIVE
           

       
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },
    
    //-----------------------------------------------------------------------------------------------------------------------------------------------------//
    //-----------------------------------------------------------------------------------------------------------------------------------------------------//   

    findNextAvailableId(usedIds) {
        for (var i = 1; i <= 10; i++) {
          if (usedIds.indexOf(i) === -1) {
            return i;
          }
        }
        // Return null if all IDs are used
        return null;
      }



}


  
    
