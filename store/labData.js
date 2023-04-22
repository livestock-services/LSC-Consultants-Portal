import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { 
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


    // allSAMPLE_INFORMATIONConsultsRecords:[],
    // allSAMPLE_INFORMATIONSalesRecords:[],
    

    sampleInfoForm:{
        
        submissionNumber:null,
        sampleID:null,
        sampleType:null,
        animalType:null,
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
        bioSubmissionNumber:null,
        clientName:null,
        dateSubmitted:null,
        timeStamp:null,
    },


    
    feedSubmissionsForm:{
        feedSubmissionNumber:null,
        feedClientName:null,
        feedDescription:null,
        typeOfSample:null,
        dateSubmitted:null,
        timeStamp:null,
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

        nmOtherReasomn:null, 

        nmNumberOfBagsOrTonnageSelected:null,

        nmNumberOfBagsOrTonnageRejected:null
       
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



}


export const mutations = {

    updateField,

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


            const newBioSubmissionsRecord = cloneDeep(state.bioSubmissionsForm);

           newBioSubmissionsRecord.dateSubmitted = state.bioSubmissionsForm.dateSubmitted.toLocaleDateString('en-US');

           newBioSubmissionsRecord.timeStamp = state.bioSubmissionsForm.timeStamp.toLocaleTimeString();



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

            newFeedSubmissionsRecord.dateSubmitted = state.feedSubmissionsForm.dateSubmitted.toLocaleDateString('en-US');

            newFeedSubmissionsRecord.timeStamp = state.feedSubmissionsForm.timeStamp.toLocaleTimeString();
 
 


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

    

    
        
      

  

}


  
    
