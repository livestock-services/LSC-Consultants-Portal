<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <h3 class="modal-card-title">Vet Snapshot</h3>

      <button type="button" class="delete" @click="close"></button>
    </header>
    <section class="modal-card-body has-background-white">
      <!-- Modal Content -->
      <div>
        <b-form v-model="vetForm" class="form">
          <h4><span class="is-blue"> Client Name</span></h4>

          <div class="columns">
            <div class="column is-three-quarters">
              <b-input
                type="text"
                v-model="vetClientName"
                placeholder="Client name"
              ></b-input>
            </div>
          </div>

          <h4><span class="is-blue"> Contact Number</span></h4>

          <div class="columns">
            <div class="column is-three-quarters">
              <b-input
                type="number"
                v-model="vetClientPhoneNumber"
                placeholder="Enter phone no. here..."
              ></b-input>
            </div>
          </div>

          <h4><span class="is-blue"> Town</span></h4>

          <div class="columns">
            <div class="column is-three-quarters">
              <b-input
                type="text"
                v-model="vetClientTown"
                placeholder="Enter town here..."
              ></b-input>
            </div>
          </div>

          <h4><span class="is-blue"> Location</span></h4>

          <div class="columns">
            <div class="column is-three-quarters">
              <b-input
                type="text"
                v-model="vetClientLocation"
                placeholder="Enter address here..."
              ></b-input>
            </div>
          </div>

         


          <h4><span class="is-blue"> Select Category</span></h4>

          <div class="columns">
            <b-field class="column is-full">
              <b-select
                v-model="vetCategory"
                placeholder="Select a Category"
              >
                <option value=" Dairy"> Dairy</option>
                <option value=" Beef"> Beef</option>
                <option value="Goats">Goats</option>
                <option value="Sheep">Sheep</option>
                <option value="Pigs">Pigs</option>
                <option value=" Broiler"> Broiler</option>
                <option value=" Layer"> Layer</option>
                <option value=" Village Chicken"> Village Chicken</option>
                <option value=" Quail"> Quail</option>
                <option value="Dogs & Cats">Dogs & Cats</option>
                <option value="Rabbits">Rabbits</option>
                <option value="Wildlife Or Exotics">Wildlife Or Exotics</option>
                <option value="Horses">Horses</option>
                <option value="Other">Other</option>
              </b-select>
            </b-field>
          </div>

          <div v-if="vetCategory === 'Other'">
            <h4><span class="is-blue">Other(if not among the options above)</span></h4>

            <div class="columns">
              <div class="column is-three-quarters">
                <b-input
                  type="text"
                  v-model="vetOther"
                  placeholder="Comments/Remarks"
                ></b-input>
              </div>
            </div>
          </div>

          <h4><span class="is-blue"> Comments/Remarks</span></h4>

          <div class="columns">
            <div class="column is-three-quarters">
              <b-input
                type="text"
                v-model="vetComments"
                placeholder="Comments/Remarks"
              ></b-input>
            </div>
          </div>

          <div class="card my-4">
            <div class="summary-content">
              <h2 class="tag is-info is-light mx-4 mb-4 summary">Summary</h2>

              <p class="mx-4 cat">Client Name : {{ vetClientName }}</p>

              <p class="mx-4 cat">Client Number : {{ vetClientPhoneNumber }}</p>

              <p class="mx-4 cat">Client Location : {{ vetClientLocation }}</p>

              <p class="mx-4 cat">Client Location : {{ vetClientTown }}</p>

              <p class="mx-4 cat">
                Category Selected : {{ vetCategory }}
              </p>

              <p class="mx-4 cat">
                Category Selected(Other) : {{ vetOther }}
              </p>
              <p class="mx-4 cat">Comments/Remarks : {{ vetComments }}</p>

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
export default {
  name: "VetModal",

  data() {
    return {
    

      isFullPage: true,
      
    };
  },

  computed: {
    ...mapFields("vetData", [
      "vetForm",
      "vetForm.vetClientName",
      "vetForm.vetClientPhoneNumber",
      "vetForm.vetClientLocation",
      "vetForm.vetClientTown",
      "vetForm.vetCategory",
      "vetForm.vetOther",
      "vetForm.vetComments",
    ]),

    ...mapGetters("vetData", {
      task: "selectedVetRecord",
      taskLoading: "loading",
    }),
  },

  // },

  mounted() {},

  methods: {
    ...mapActions("vetData", ["addNewVetRecord", "getAllVetRecords", "load"]),

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
          await this.addNewVetRecord();

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
        message: "Vet Snapshot closed.",
        duration: 2000,
        position: "is-bottom",
        type: "is-warning ",
      });
      this.$parent.close();
    },

    clearForm() {
      this.vetForm = {
      
      vetClientName:null,
      vetClientPhoneNumber:null,
      vetClientLocation:null,
      vetClientTown:null,
      vetCategory:null,
      vetOther:null,
      vetComments:null

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
