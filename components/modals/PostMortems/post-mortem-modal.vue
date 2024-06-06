<template>
    <div class="modal-card">
      <header class="modal-card-head">
        <h3 class="modal-card-title">Post Mortems Snapshot</h3>
  
        <button type="button" class="delete" @click="close"></button>
      </header>
      <section class="modal-card-body has-background-white">
        <!-- Modal Content -->
        <div>
          <b-form v-model="vetPostMortemForm" class="form">

            <h4><span class="is-blue">Search Client by Contact Number</span></h4>
              <div class="columns">
                <div class="column is-three-quarters">
                  <b-input
                    type="number"
                    v-model="searchClientPhoneNumber"
                    placeholder="Enter phone no. to search..."
                  ></b-input>
                </div>
                <div class="column">
                  <b-button @click="searchClient" type="is-info">Search</b-button>
                </div>
              </div>

 

            <div :disabled="!searchClientPhoneNumber">

              <h4><span class="is-blue"> Client Name</span></h4>
  
            <div class="columns">
              <div class="column is-three-quarters">
                <b-input
                  type="text"
                  v-model="vetPostMortemClientName"
                  placeholder="Client name"
                ></b-input>
              </div>
            </div>
  
            <h4><span class="is-blue"> Contact Number</span></h4>
  
            <div class="columns">
              <div class="column is-three-quarters">
                <b-input
                  type="number"
                  v-model="vetPostMortemClientPhoneNumber"
                  placeholder="Enter phone no. here..."
                ></b-input>
              </div>
            </div>

            <h4><span class="is-blue"> Town </span></h4>
  
            <div class="columns">
              <div class="column is-three-quarters">
                <b-input
                  type="text"
                  v-model="vetPostMortemClientTown"
                  placeholder="Enter town here..."
                ></b-input>
              </div>
            </div>
  
            <h4><span class="is-blue"> Location</span></h4>
  
            <div class="columns">
              <div class="column is-three-quarters">
                <b-input
                  type="text"
                  v-model="vetPostMortemClientLocation"
                  placeholder="Enter address here..."
                ></b-input>
              </div>
            </div>


            <div v-if="SignedInUser.role === 'Vet Online Consultant' || SignedInUser.role === 'Agro Online Consultant'">
                 
                 <h4> <b-tooltip 
                   label="This is the source of contact between the consultant and the client ie. WhatsApp, Phone Calls etc" 
                   multilined 
                   type="is-dark"
                   position="is-right mt-4">
                     <span class="is-blue"> Contact Point</span>
                   
                   </b-tooltip> </h4>
     
                     <div class="columns">
                       <div class="column is-three-quarters">
                         <b-select
                           type="text"
                           v-model="vetPostMortemContactPoint"
                           placeholder="--Select Contact Point--"
                         >
                       <option value=" WhatsApp "> WhatsApp</option>
                       <option value=" Phone Call "> Phone Call</option>
       
                       </b-select>
                       </div>
     
                     </div>
                </div>



            <div v-if="SignedInUser.role !== 'Vet Consultant'">

              <h4> <b-tooltip 
              label="This is the designated consultant who may not be 
              physically available for a consultation, but can do
              so via phone call, WhatsApp, email etc " 
              multilined 
              type="is-dark"
              position="is-right mt-4">
              <span class="is-blue"> Consulting Person</span>

              </b-tooltip> </h4>

              <div class="columns">
              <div class="column is-three-quarters">
              <b-select
              type="text"
              v-model="vetPostMortemConsultingPerson"
              placeholder="Client name"
              >
              <option value=" Moonde Mapepula "> Moonde Mapepula</option>
              <option value=" David Chanda "> David Chanda</option>
              <option value=" Lonica Moya "> Lonica Moya</option>
              <option value=" Nchimunya Siamulonga "> Nchimunya Siamulonga</option>
              <option value=" Vigirio Mutemwa "> Vigirio Mutemwa</option>
              <option value=" Yenesha Namenda "> Yenesha Namenda</option>
              <option value="Augustine Nkhata ">Augustine Nkhata</option>
              <option value="James Chanda">James Chanda</option>
              <option value="Christabel Chanda">Christabel Chanda</option>
              <option value="Edna Malawo">Edna Malawo</option>
              <option value="Mbao Limande">Mbao Limande</option>
              <option value="Mwaka M. Chilanga">Mwaka M. Chilanga</option>
              <option value="Other">Other</option>

              </b-select>
              </div>

              </div>

              <div v-if="vetPostMortemConsultingPerson === 'Other'" >
              <h4> <b-tooltip 
              label="This is the designated consultant who may not be 
              physically available for a consultation, but can do
              so via phone call, WhatsApp, email etc " 
              multilined 
              type="is-dark"
              position="is-right mt-4">
                <span class="is-blue"> Consulting Person(if not on list)</span>

                </b-tooltip> </h4>
              <div class="columns">
              <div class="column is-three-quarters">
              <b-input
                type="text"
                v-model="vetPostMortemOtherConsultingPerson"
                placeholder="Consulting Person"
              />


              </div>
              </div>
              </div>

              </div>

           


            <h4><span class="is-blue"> Select Category</span></h4>
  
            <div class="columns">
              <b-field class="column is-full">
                <b-select
                  v-model="vetPostMortemCategory"
                  placeholder="Select a Category"
                >
                  <option value="Village Chicken">Village Chicken</option>
                  <option value="Broilers">Broilers</option>
                  <option value="Layers">Layers</option>
                  <option value="Pigs">Pigs</option>
                  <option value="Goats">Goats</option>
                  <option value="Quails">Quails</option>
                  <option value="Rabbits">Rabbits</option>
                  <option value="Cattle">Cattle</option>
                  <option value="Other">Other</option>
                </b-select>
              </b-field>

            </div>

           

           <div v-if="vetPostMortemCategory !=='Other'">
            <h4><span class="is-blue"> Select a disease</span></h4>
            <div class="columns">
                <b-field class="column is-full">
            <b-select  v-model="vetPostMortemDiseases" placeholder="Select a disease" icon="book">
                
                <optgroup v-if="vetPostMortemCategory=== 'Village Chicken'" label="Village Chickens">
                    <option value="Infectious Laryngotracheitis">Infectious Laryngotracheitis</option>
                    <option value="Newcastle">Newcastle</option>
                    <option value="Gumboro">Gumboro</option>
                    <option value="Coccidiosis">Coccidiosis</option>
                    <option value="Fowl Pox">Fowl Pox</option>
                    <option value="Egg Peritonitis">Egg Peritonitis</option>
                    <option value="Ectoparasites">Ectoparasites</option>
                    <option value="Helminthiasis">Helminthiasis</option>
                    <option value="Mycoplasmosis">Mycoplasmosis</option>
                    <option value="Snake Bite">Snake Bite</option>
                    <option value="Colibacillosis">Colibacillosis</option>
                    <option value="Chronic Infectious Bronchitis">Chronic Infectious Bronchitis</option>
                    
                </optgroup>

                <optgroup v-if="vetPostMortemCategory=== 'Broilers'" label="Broilers">
                    
                    <option value="Gumboro">Gumboro</option>
                    <option value="Newcastle">Newcastle</option>
                    <option value="Colibacillosis">Colibacillosis</option>
                    <option value="Heat Stress">Heat Stress</option>
                    <option value="Coccidiosis">Coccidiosis</option>
                    <option value="Infectious Coryza">Infectious Coryza</option>
                    <option value="Chronic Respiratory Disease">Chronic Respiratory Disease</option>
                    <option value="Ascites">Ascites</option>
                    <option value="Trauma">Trauma</option>
                    
                </optgroup>

                <optgroup v-if="vetPostMortemCategory=== 'Layers'" label="Layers">
                    <option value="Fatty Liver HS">Fatty Liver HS</option>  
                    <option value="Coccidiosis">Coccidiosis</option>
                    <option value="Egg Peritonitis">Egg Peritonitis</option>
                    <option value="Laryngotracheitis">Laryngotracheitis</option>
                    <option value="Newcastle">Newcastle</option>
                    <option value="Helminthiasis">Helminthiasis</option>
                    <option value="Infectious Bronchitis">Infectious Bronchitis</option> 
                    <option value="Gumboro">Gumboro</option>
                    <option value="Calcium Deficiency">Calcium Deficiency</option>
                    
                </optgroup>

                <optgroup v-if="vetPostMortemCategory=== 'Pigs'" label="Pigs">
                    <option value="Mycoplasmosis">Mycoplasmosis</option>
                    <option value="Pneumonia">Pneumonia</option>
                    <option value="Clostridial Infection">Clostridial Infection</option>
                    <option value="Enteritis">Enteritis</option>
                   
                    
                </optgroup>

                <optgroup v-if="vetPostMortemCategory=== 'Goats'" label="Goats">
                    <option value="Helminthiasis">Helminthiasis</option>
                    <option value="Heartwater">Heartwater</option>
                    <option value="Trauma">Trauma</option>
                    <option value="Hemonchosis">Hemonchosis</option>
                   
                    
                </optgroup>

                <optgroup v-if="vetPostMortemCategory=== 'Quails'" label="Quails">
                    <option value="Colibacillosis">Colibacillosis</option>
                    <option value="Salmonellosis">Salmonellosis</option>
                     
                </optgroup>

                <optgroup v-if="vetPostMortemCategory=== 'Rabbits'" label="Rabbits">
                    <option value="Coccidiosis">Coccidiosis</option>
                    <option value="Bacterial Infection">Bacterial Infection</option>
                    
                </optgroup>

                <optgroup v-if="vetPostMortemCategory=== 'Cattle'" label="Cattle">
                    
                    <option value="Anaplasmosis">Anaplasmosis</option>
                   
                </optgroup>

                <optgroup  label="Other">
                    
                    <option value="Other Disease">Other Disease</option>
                   
                </optgroup>

            </b-select>
        </b-field>

            </div>
           </div>

            <div  v-if="vetPostMortemCategory ==='Other'">
              <h4><span class="is-blue"> Other (if not among the options above)</span></h4>
  
              <div class="columns">
                <div class="column is-three-quarters">
                  <b-input
                    type="text"
                    v-model="vetPostMortemOtherCategory" 
                    placeholder="Other"
                  ></b-input>
                </div>
              </div>
            </div>

              <div v-if="vetPostMortemCategory ==='Other' || vetPostMortemDiseases === 'Other Disease'">
                <h4><span class="is-blue"> Other Disease(if not among the options above)</span></h4>
  
                  <div  class="columns">
                    <div class="column is-three-quarters">
                      <b-input
                        type="text"
                        v-model="vetPostMortemOtherDiseases" 
                        placeholder="Other"
                      ></b-input>
                    </div>
                  </div>
              </div>

             <b-tooltip label="This is the historical data provided by the client during the consultation" multilined type="is-dark" position="is-right"> 
              <h4><span class="is-blue"> History</span></h4>
            </b-tooltip>
              
              <div class="columns">
                <div class="column is-full">
                  <b-input
                    maxlength="1000"
                    type="textarea"
                    v-model="vetPMHistory" 
                    placeholder="History"
                  ></b-input>
                </div>
              </div>
             

              <b-tooltip label="These are the findings after performing a post mortem. This will most likely be related to historical data provided by the client during an earlier consultation" multilined type="is-dark" position="is-right"> 
              <h4><span class="is-blue"> Post Mortem Findings</span></h4>
            </b-tooltip>
              
              <div class="columns">
                <div class="column is-full">
                  <b-input
                    maxlength="1000"
                    type="textarea"
                    v-model="vetPMFindings" 
                    placeholder="Post Mortem Findings"
                  ></b-input>
                </div>
              </div>

             
              

              <b-tooltip label="A tentative diagnosis refers to a preliminary or provisional identification
                                of a medical condition or disorder based on initial assessment and clinical information.
                                It is not a definitive or final diagnosis but serves as an initial step in the diagnostic process." 
                          multilined 
                          type="is-dark"
                          position="is-right"> 
              <h4><span class="is-blue"> Tentative Diagnosis</span></h4>
            </b-tooltip>
              
              <div class="columns">
                <div class="column is-full">
                  <b-input
                    maxlength="1000"
                    type="textarea"
                    v-model="vetPMTentativeDiagnosis" 
                    placeholder="Tentative Diagnosis"
                  ></b-input>
                </div>
              </div>


              <b-tooltip label="This is the recommended treatment given by the consulting veterinarian.
                                Treatment plans depend on the specific diagnosis, severity of the condition, and other individual factors. " 
                          multilined 
                          type="is-dark"
                          position="is-right"> 
              <h4><span class="is-blue"> Recommended Treatment</span></h4>
            </b-tooltip>
              
              <div class="columns">
                <div class="column is-full">
                  <b-input
                    maxlength="1000"
                    type="textarea"
                    v-model="vetPMRecommendedTreatment" 
                    placeholder="Recommended Treatment"
                  ></b-input>
                </div>
              </div>
           


            <h4><span class="is-blue"> Comments/Remarks</span></h4>
  
            <div class="columns">
              <div class="column is-full">
                <b-input
                   maxlength="1000"
                  type="textarea"
                  v-model="vetPMComments" 
                  placeholder="Comments/Remarks"
                ></b-input>
              </div>
            </div>

             
  
            <div class="card my-4">
              <div class="summary-content">
                <h2 class="tag is-info is-light mx-4 mb-4 summary">Summary</h2>

                <div>
              <p v-if="SignedInUser !== 'Vet Consultant' && vetPostMortemConsultingPerson !== 'Other'" class="mx-4 cat">Consulting Person : {{ vetPostMortemConsultingPerson }}</p>

              <p v-if="SignedInUser !== 'Vet Consultant' && vetPostMortemConsultingPerson === 'Other'" class="mx-4 cat">Consulting Person(If not on list) : {{ vetPostMortemOtherConsultingPerson }}</p>
             </div>
  
                <p class="mx-4 cat">Client Name : {{ vetPostMortemClientName }}</p>
  
                <p class="mx-4 cat">Client Number : {{ vetPostMortemClientPhoneNumber }}</p>
  
                <p class="mx-4 cat">Client Location : {{ vetPostMortemClientLocation }}</p>

                <p class="mx-4 cat">Client Town Location : {{ vetPostMortemClientTown }}</p>
  
                <p class="mx-4 cat">
                  Category Selected : {{ vetPostMortemCategory }}
                </p>

                <p class="mx-4 cat">
                  Associated Disease Selected :  {{ vetPostMortemDiseases }}
                </p>

                <p class="mx-4 cat">
                  Category Selected (Other) : {{ vetPostMortemOtherCategory }}
                </p>

                

                <p class="mx-4 cat">
                  Associated Disease Selected (other) :  {{ vetPostMortemOtherDiseases }}
                </p>

                <p class="mx-4 cat">History : {{ vetPMHistory }}</p>

                <p class="mx-4 cat">Post Mortem Findings : {{ vetPMFindings }}</p>

                <p class="mx-4 cat">Tentative Diagnosis : {{ vetPMTentativeDiagnosis }}</p>

                <p class="mx-4 cat">Recommended Treatment : {{ vetPMRecommendedTreatment }}</p>
                
                <p class="mx-4 cat">Comments/Remarks : {{ vetPMComments }}</p>
               
              </div>
            </div>
            </div>
  
            <b-button @click="onSubmit" type="is-info">Add </b-button>

          
          </b-form>
        </div>
      </section>
      <footer class="modal-card-foot">
        <b-button label="Close" @click="close" />
        <!-- <b-button
          label="Submit"
          type="is-primary"
          icon-left="account"
          @click="onSubmit"
        /> -->
      </footer>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from "vuex";
  import { mapFields } from "vuex-map-fields";
  import { computed } from 'vue';
  export default {
    name: "PostMortemModal",
  
    data() {
      var SignedInUser = computed(()=>this.user)
      return {
        SignedInUser,
        data: [
          "Cattle",
          "Broilers",
          "Layers",
          "Pigs",
          "Goats",
          "Quails",
          "Rabbits",
          "Cattle",
        ],  
  
        isFullPage: true,
     
      };
    },
  
    computed: {
      ...mapFields("vetData", [
        "vetPostMortemForm",
        "vetPostMortemForm.vetPostMortemConsultingPerson",
        "vetPostMortemForm.vetPostMortemOtherConsultingPerson",
        "vetPostMortemForm.vetPostMortemClientName",
        "vetPostMortemForm.vetPostMortemClientPhoneNumber",
        "vetPostMortemForm.vetPostMortemClientLocation",
        "vetPostMortemForm.vetPostMortemClientTown",
        "vetPostMortemForm.vetPostMortemContactPoint",
        "vetPostMortemForm.vetPostMortemCategory",
        "vetPostMortemForm.vetPostMortemOtherCategory",
        "vetPostMortemForm.vetPostMortemDiseases",
        "vetPostMortemForm.vetPostMortemOtherDiseases",
        "vetPostMortemForm.vetPMComments",
        "vetPostMortemForm.vetPMHistory",  // New field
        "vetPostMortemForm.vetPMFindings", // New field
        "vetPostMortemForm.vetPMTentativeDiagnosis", // New field
        "vetPostMortemForm.vetPMRecommendedTreatment", // New field
      ]),
  
      ...mapGetters("vetData", {
        task: "selectedVetRecord",
        clients: 'allPostMortemRecords',
        taskLoading: "loading",
      }),

      ...mapGetters('users', {
          loading: 'loading',
          users: 'allUsers',
          user:'loggedInUser',

          
        }),
    },
  
    // },
  
    mounted() {},
  
    methods: {
      ...mapActions("vetData", ["addNewPostMortemRecord", "getAllPostMortemRecords", "load"]),
  
      loading() {
        return this.vetLoading;
      },

      showAlert(message) {
      this.$buefy.dialog.alert({
      title: 'According to my records,',
      message: message,
      type: 'is-info',
      position: 'is-top',
      hasIcon: true, // Add this line
      icon: 'magnify',
      
    });
  },

    async searchClient() {
    // Assuming you have a Vuex getter named 'getClientByPhoneNumber'
    const clientData = this.clients.find(client => client.vetPostMortemClientPhoneNumber === this.searchClientPhoneNumber);

    if (clientData) {
  this.vetPostMortemClientName = clientData.vetPostMortemClientName;
  this.vetPostMortemClientPhoneNumber = clientData.vetPostMortemClientPhoneNumber;
  this.vetPostMortemClientLocation = clientData.vetPostMortemClientLocation;
  this.vetPostMortemClientTown = clientData.vetPostMortemClientTown;
  this.vetPostMortemContactPoint = clientData.vetPostMortemContactPoint;
  
  // Clear other fields if needed
  this.vetPostMortemCategory = '';
  this.vetPostMortemOther = '';
  this.vetPostMortemComments = '';
  // Add the new fields here
  this.vetPMHistory = '';
  this.vetPMFindings = '';
  this.vetPMTentativeDiagnosis = '';
  this.vetPMRecommendedTreatment = '';

} else {
  // Handle case when client is not found
  this.showAlert('The client being searched for was not found. Please enter their details manually.');

  this.vetPostMortemClientName = '';
  this.vetPostMortemClientPhoneNumber = this.searchClientPhoneNumber;
  this.vetPostMortemClientLocation = '';
  this.vetPostMortemClientTown = '';
  this.vetPostMortemContactPoint = '';
  
  // Clear other fields if needed
  this.vetPostMortemCategory = '';
  this.vetPostMortemOther = '';
  this.vetPostMortemComments = '';
  // Add the new fields here as well
  this.vetPMHistory = '';
  this.vetPMFindings = '';
  this.vetPMTentativeDiagnosis = '';
  this.vetPMRecommendedTreatment = '';
}

  },
  
  
      async onSubmit() {
        await this.$buefy.dialog.confirm({
          title: "Add New Record",
          message: "Proceed to add new entry?",
          cancelText: "Cancel",
          confirmText: "Yes, entries are correct",
          type: "is-success is-light",
          hasIcon: true,
          onConfirm: async () => {
            await this.addNewPostMortemRecord();
  
            this.$buefy.toast.open({
              duration: 3000,
              message: "New Record Successfully Added!",
              position: "is-top",
              type: "is-success is-light",
            });
            this.clearVetPMForm();
          
            this.$parent.close();
          },
        });
  
        // function showNotifications() {
        //   const notification = new Notification("Task data added.", {
        //     body: "Be sure to check your sales data periodically.",
        //     icon: "@/assets/pug3.jpg",
        //   });
        // }
      },



  
      close() {
        this.$buefy.toast.open({
          message: "Vet Port Mortem Snapshot closed.",
          duration: 2000,
          position: "is-bottom",
          type: "is-warning ",
        });
        this.$parent.close();
      },
  
      clearVetPMForm() {
        this.vetPostMortemForm = {
          vetPostMortemConsultingPerson: null,
          vetPostMortemOtherConsultingPerson: null,
          vetPostMortemClientName: null,
          vetPostMortemClientPhoneNumber: null,
          vetPostMortemClientLocation: null,
          vetPostMortemClientTown: null,
          vetPostMortemContactPoint:null,
          vetPostMortemCategory: null,
          vetPostMortemOtherCategory: null,  // Add new field
          vetPostMortemDiseases: null,
          vetPostMortemOtherDiseases: null,  // Add new field
          vetPMComments: null,
          vetPMHistory: null,  // Add new field
          vetPMFindings: null,  // Add new field
          vetPMTentativeDiagnosis: null,  // Add new field
          vetPMRecommendedTreatment: null,  // Add new field
       };
},

    },
  };
  </script>
  
  <style scoped>
  .modal-width-auto {
    width: auto;
  }
  
  .yellow {
    color: rgb(193, 108, 28);
  }
  .summary {
    font-size: 1.6rem;
  }
  .summary-content p {
    margin-top: 12px;
    margin-bottom: 12px;
  }
  
  .summary-content {
    padding-bottom: 10px;
  }
  
  .is-blue {
    color: rgb(0, 118, 228);
    font-family: "Times New Roman", Times, serif;
    font-size: 1.2rem;
  }
  
  p {
    font-size: 1rem;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  
  .cat {
    font-weight: normal;
  }
  </style>
  