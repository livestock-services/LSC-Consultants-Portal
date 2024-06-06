<template>
    <div class="modal-card">
      <header class="modal-card-head">
        <h3 class="modal-card-title">Nutrition Snapshot</h3>
  
        <button type="button" class="delete" @click="close"></button>
      </header>
      <section class="modal-card-body has-background-white">
        <!-- Modal Content -->
        <div>
          <b-form v-model="nutritionForm" class="form">

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


            <h4><span class="is-blue"> Client Name</span></h4>
  
            <div class="columns">
              <div class="column is-three-quarters">
                <b-input
                  type="text"
                  v-model="nutritionClientName"
                  placeholder="Client name"
                ></b-input>
              </div>
            </div>
  
            <h4><span class="is-blue"> Contact Number</span></h4>
  
            <div class="columns">
              <div class="column is-three-quarters">
                <b-input
                  type="number"
                  v-model="nutritionClientPhoneNumber"
                  placeholder="Enter phone no. here..."
                ></b-input>
              </div>
            </div>

            <h4><span class="is-blue"> Town</span></h4>
  
            <div class="columns">
              <div class="column is-three-quarters">
                <b-input
                  type="text"
                  v-model="nutritionClientTown"
                  placeholder="Enter town here..."
                ></b-input>
              </div>
            </div>
  
            <h4><span class="is-blue"> Location</span></h4>
  
            <div class="columns">
              <div class="column is-three-quarters">
                <b-input
                  type="text"
                  v-model="nutritionClientLocation"
                  placeholder="Enter address here..."
                ></b-input>
              </div>
            </div>

            <div v-if="SignedInUser.role !== 'Nutrition Consultant'">

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
        v-model="nutritionConsultingPerson"
        placeholder="Consulting Person"
      >
    <option value="Mataa Sitwala ">Mataa Sitwala</option>
    <option value="Dorothy Mukela ">Dorothy Mukela</option>
    <option value="Inonge Chama ">Inonge Chama</option>
    <option value="Other">Other</option>
    
    </b-select>
    </div>

  </div>

  <div v-if="nutritionConsultingPerson === 'Other'" >
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
        v-model="nutritionOtherConsultingPerson"
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
                  v-model="nutritionCategory"
                  placeholder="Select a Category"
                >
                  <option value="Cattle">Cattle</option>
                  <option value="Goats">Goats</option>
                  <option value="Sheep">Sheep</option>
                  <option value="Pigs">Pigs</option>
                  <option value="Poultry">Poultry</option>
                  <option value="Dogs & Cats">Dogs & Cats</option>
                  <option value="Rabbits">Rabbits</option>
                  <option value="Wildlife Or Exotics">Wildlife Or Exotics</option>
                  <option value="Horses">Horses</option>
                  <option value="Other">Other</option>
                </b-select>
              </b-field>
            </div>


           <div v-if="nutritionCategory === 'Other'">
            <h4><span class="is-blue"> Other (if not among the options above)</span></h4>
              
              <div class="columns">
                <div class="column is-three-quarters">
                  <b-input
                    type="text"
                    v-model="nutritionOtherCategory" 
                    placeholder="Other"
                  ></b-input>
                </div>
              </div>
           </div>


              <h4><span class="is-blue"> Comments/Remarks</span></h4>

              <div class="columns">
              <div class="column is-three-quarters">
              <b-input
              type="text"
              v-model="nutritionClientComments"
              placeholder="Comments/Remarks..."
              ></b-input>
              </div>
              </div>
  
            <div class="card my-4">
              <div class="summary-content">
                <h2 class="tag is-info is-light mx-4 mb-4 summary">Summary</h2>

                <div>
              <p v-if="SignedInUser !== 'Nutrition Consultant' && nutritionConsultingPerson !== 'Other'" class="mx-4 cat">Consulting Person : {{ nutritionConsultingPerson }}</p>

              <p v-if="SignedInUser !== 'Nutrition Consultant' && nutritionConsultingPerson === 'Other'" class="mx-4 cat">Consulting Person(If not on list) : {{ nutritionOtherConsultingPerson }}</p>
             </div>
  
                <p class="mx-4 cat">Client Name : {{ nutritionClientName }}</p>
  
                <p class="mx-4 cat">Client Number : {{ nutritionClientPhoneNumber }}</p>
  
                <p class="mx-4 cat">Client Location : {{ nutritionClientLocation }}</p>

                <p class="mx-4 cat">Client Town Location : {{ nutritionClientTown }}</p>

                <p class="mx-4 cat">Comments/Remarks : {{ nutritionClientComments }}</p>
  
                <p v-if="nutritionCategory !== 'Other'" class="mx-4 cat">
                  Category Selected : {{ nutritionCategory }}
                </p>

                <p v-if="nutritionCategory === 'Other'" class="mx-4 cat">
                  Category Selected (Other) : {{ nutritionOtherCategory }}
                </p>

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
  import { computed } from 'vue';
  import { mapFields } from "vuex-map-fields";
  export default {
    name: "NutritionModal",
  
    data() {
      var SignedInUser = computed(()=>this.user)
      return {
        SignedInUser,
        data: [
          "Cattle",
          "Goats",
          "Sheep",
          "Pigs",
          "Poultry",
          "Dogs & Cats",
          "Rabbits",
          "Wildlife Or Exotics",
          "Horses",
        ],
  
        isFullPage: true,
        
      };
    },
  
    computed: {
      ...mapFields("nutritionData", [
        "nutritionForm",
        "nutritionForm.nutritionConsultingPerson",
        "nutritionForm.nutritionOtherConsultingPerson",
        "nutritionForm.nutritionClientName",
        "nutritionForm.nutritionClientPhoneNumber",
        "nutritionForm.nutritionClientLocation",
        "nutritionForm.nutritionClientTown",
        "nutritionForm.nutritionCategory",
        "nutritionForm.nutritionOtherCategory",
        "nutritionForm.nutritionClientComments",
        
      ]),
  
      ...mapGetters("nutritionData", {
        task: "selectednutritionRecord",
        clients:'allNutritionRecords',
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
      ...mapActions("nutritionData", ["addNewNutritionRecord", "getAllNutritionRecords", "load"]),
  
      loading() {
        return this.nutritionLoading;
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
    const clientData = this.clients.find(client => client.nutritionClientPhoneNumber === this.searchClientPhoneNumber);

    if (clientData) {
      this.nutritionClientName = clientData.nutritionClientName;
      this.nutritionClientPhoneNumber = clientData.nutritionClientPhoneNumber;
      this.nutritionClientLocation = clientData.nutritionClientLocation;
      this.nutritionClientTown = clientData.nutritionClientTown;
      // Clear other fields if needed
      this.nutritionCategory = '';
      this.nutritionOther = '';
      this.nutritionComments = '';
    } else {
      // Handle case when client is not found
      this.showAlert('The client being searched for was not found. Please enter their details manually.');

      this.nutritionClientName = '';
      this.nutritionClientPhoneNumber = this.searchClientPhoneNumber;
      this.nutritionClientLocation = '';
      this.nutritionClientTown = '';
      // Clear other fields if needed
      this.nutritionCategory = '';
      this.nutritionOther = '';
      this.nutritionComments = '';
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
            await this.addNewNutritionRecord();
  
            this.$buefy.toast.open({
              duration: 3000,
              message: "New Record Successfully Added!",
              position: "is-top",
              type: "is-success is-light",
            });
            this.clearForm();
          
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
          message: "nutrition Snapshot closed.",
          duration: 2000,
          position: "is-bottom",
          type: "is-warning ",
        });
        this.$parent.close();
      },
  
      clearForm() {
        this.nutritionForm = {
        
        nutritionConsultingPerson:null,
        nutritionOtherConsultingPerson:null,
        nutritionClientName:null,
        nutritionClientPhoneNumber:null,
        nutritionClientLocation:null,
        nutritionClientTown:null,
        nutritionCategory:null,
        nutritionClientComments:null

  
        }
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
  