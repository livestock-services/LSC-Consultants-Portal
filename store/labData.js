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
        dateTimeReceived: null,
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
        invoiceNumber:null

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
        return state.allfilteredSampleInformationRecords
    },

    
        
  //----------------------------------------END OF SAMPLE INFO SECTION----------------------------------------//




    //---------------------SUBMISSIONS GETTERS--------------------------------------------//

    allSubmissionsRecords(state){
        return state.allSubmissionsRecords
    },

    allFilteredSubmissionsRecords(state){
        return state.allfilteredSubmissionsRecords
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

   
       
}

export const actions = {

    
 //GET ALL AgroRecordS
    async getAllSampleInformationRecords({ state,commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/lab/sampleInfo/allSampleInformationRecords`)

        //const { data:fetchUsers } = await api.get(`/auth/allUsers`)

   
           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_SAMPLE_INFORMATION_RECORDS, response.data);

       
       
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

        //const { data:fetchUsers } = await api.get(`/auth/allUsers`)

   
           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_SUBMISSIONS_RECORDS, response.data);

       
       
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

    

    
        
      

  

}


  
    
