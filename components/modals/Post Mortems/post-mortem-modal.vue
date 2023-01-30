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
                 
                </b-select>
              </b-field>

            </div>

            <h4><span class="is-blue"> Select a disease</span></h4>
            <div class="columns">
                <b-field class="column is-full">
            <b-select v-model="vetPostMortemDiseases" placeholder="Select a disease" icon="book">
                
                <optgroup label="Village Chickens">
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

                <optgroup label="Broilers">
                    
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

                <optgroup label="Layers">
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

                <optgroup label="Pigs">
                    <option value="Mycoplasmosis">Mycoplasmosis</option>
                    <option value="Pneumonia">Pneumonia</option>
                    <option value="Clostridial Infection">Clostridial Infection</option>
                    <option value="Enteritis">Enteritis</option>
                   
                    
                </optgroup>

                <optgroup label="Goats">
                    <option value="Helminthiasis">Helminthiasis</option>
                    <option value="Heartwater">Heartwater</option>
                    <option value="Trauma">Trauma</option>
                    <option value="Hemonchosis">Hemonchosis</option>
                   
                    
                </optgroup>

                <optgroup label="Quails">
                    <option value="Colibacillosis">Colibacillosis</option>
                    <option value="Salmonellosis">Salmonellosis</option>
                     
                </optgroup>

                <optgroup label="Rabbits">
                    <option value="Coccidiosis">Coccidiosis</option>
                    <option value="Bacterial Infection">Bacterial Infection</option>
                    
                </optgroup>

                <optgroup label="Cattle">
                    
                    <option value="Anaplasmosis">Anaplasmosis</option>
                   
                </optgroup>
            </b-select>
        </b-field>

            </div>
  
            <div class="card my-4">
              <div class="summary-content">
                <h2 class="tag is-info is-light mx-4 mb-4 summary">Summary</h2>
  
                <p class="mx-4 cat">Client Name : {{ vetPostMortemClientName }}</p>
  
                <p class="mx-4 cat">Client Number : {{ vetPostMortemClientPhoneNumber }}</p>
  
                <p class="mx-4 cat">Client Location : {{ vetPostMortemClientLocation }}</p>
  
                <p class="mx-4 cat">
                  Category Selected : {{ vetPostMortemCategory }}
                </p>

                <p class="mx-4 cat">
                  Associated Disease Selected :  {{ vetPostMortemDiseases }}
                </p>

               
              </div>
            </div>
  
            <b-button @click="onSubmit" type="is-info">Add </b-button>

            <b-button @click="clearVetPMForm" type="is-warning">Clear Form </b-button>
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
  export default {
    name: "PostMortemModal",
  
    data() {
      return {
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
        vetPostMortemForm: {

          vetPostMortemClientName: null,
  
          vetPostMortemClientPhoneNumber: null,
  
          vetPostMortemClientLocation:null,
  
          vetPostMortemCategory: null,

          vetPostMortemDiseases: null,
        },
      };
    },
  
    computed: {
      ...mapFields("vetData", [
        "vetPostMortemForm",
        "vetPostMortemForm.vetPostMortemClientName",
        "vetPostMortemForm.vetPostMortemClientPhoneNumber",
        "vetPostMortemForm.vetPostMortemClientLocation",
        "vetPostMortemForm.vetPostMortemCategory",
        "vetPostMortemForm.vetPostMortemDiseases",
      ]),
  
      ...mapGetters("vetData", {
        task: "selectedVetRecord",
        taskLoading: "loading",
      }),
    },
  
    // },
  
    mounted() {},
  
    methods: {
      ...mapActions("vetData", ["addNewPostMortemRecord", "getAllPostMortemRecords", "load"]),
  
      loading() {
        return this.vetLoading;
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
        
            vetPostMortemClientName:null,
            vetPostMortemClientPhoneNumber:null,
            vetPostMortemClientLocation:null,
            vetPostMortemCategory:null,
            vetPostMortemDiseases:null,
            
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
  