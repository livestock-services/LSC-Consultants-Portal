<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <h3 class="modal-card-title">Submissions Snapshot</h3>

      <button type="button" class="delete" @click="close"></button>
    </header>
    <section class="modal-card-body has-background-white">
      <!-- Modal Content -->
      <div>
        <b-form v-model="submissionsForm" class="form">
          <h4><span class="is-blue"> Submission No.</span></h4>

          <div class="columns">
            <div class="column is-three-quarters">
              <b-input
                type="text"
                v-model="submissionsNumber"
                placeholder="submission no..."
              ></b-input>
            </div>
          </div>

          <h4><span class="is-blue">Client Name</span></h4>
          <div class="columns">
            <div class="column is-three-quarters">
              <b-input
                type="text"
                v-model="clientName"
                placeholder="client name..."
              ></b-input>
            </div>
          </div>

          <h4><span class="is-blue"> Consulting Veterinarian</span></h4>

          <div class="columns">
            <div class="column is-three-quarters">
              <b-input
                type="text"
                v-model="consultingVet"
                placeholder="consulting veterinarian..."
              ></b-input>
            </div>
          </div>

          <h4><span class="is-blue"> Tel No. (For The Vet) </span></h4>

          <div class="columns">
            <div class="column is-three-quarters">
              <b-input
                type="number"
                v-model="vetPhoneNumber"
                placeholder="Phone No..."
              ></b-input>
            </div>
          </div>

          <h4> <span class="is-blue"> Date Submitted </span></h4>
            
            <div class="columns">
      
            <div  class="column is-three-quarters">
            
                <b-datepicker
                v-model="dateSubmitted"
                placeholder="--select date--">
                </b-datepicker>

            </div>
            </div>


          <h4><span class="is-blue"> Time Submitted</span></h4>

          <div class="columns">
            <div class="column is-three-quarters">
                <b-field label="Select time">
                    <b-timepicker
                        v-model="timeSubmitted"
                        placeholder="Click to select..."
                        :min-time="minTime"
                        :max-time="maxTime">
                    </b-timepicker>
                </b-field>
            </div>
          </div>

          <h4><span class="is-blue"> Received By </span></h4>

          <div class="columns">
            <div class="column is-three-quarters">
              <b-input
                type="text"
                v-model="receivedBy"
                placeholder="enter name here..."
              ></b-input>
            </div>
          </div>

          <h4><span class="is-blue"> Submitted By </span></h4>

          <div class="columns">
            <b-field class="column is-three-quarters">
              <b-input
                type="text"
                v-model="submittedBy"
                placeholder="enter name here..."
              >
              </b-input>
            </b-field>
          </div>

          <h4><span class="is-blue"> Report Name </span></h4>

          <div class="columns">
            <b-field class="column is-three-quarters">
              <b-input
                type="text"
                v-model="reportName"
                placeholder="enter name here..."
              >
              </b-input>
            </b-field>
          </div>

          <h4><span class="is-blue"> Address </span></h4>

          <div class="columns">
            <b-field class="column is-three-quarters">
              <b-input
                type="text"
                v-model="address"
                placeholder="enter address here..."
              >
              </b-input>
            </b-field>
          </div>

          <h4><span class="is-blue"> Tel No. </span></h4>

          <div class="columns">
            <div class="column is-three-quarters">
              <b-input
                type="number"
                v-model="telPhoneNumber"
                placeholder="Phone No..."
              ></b-input>
            </div>
          </div>

          <h4><span class="is-blue"> Email </span></h4>

          <div class="columns">
            <div class="column is-three-quarters">
              <b-input
                type="email"
                v-model="email"
                placeholder="enter email address here..."
              ></b-input>
            </div>
          </div>

          <h4><span class="is-blue"> Report to be sent via </span></h4>

          <div class="columns">
            <div class="column is-three-quarters">
              <b-select
                type="text"
                v-model="reportSentVia"
                placeholder="--select option--"
              >
                <option value="Email">Email</option>
                <option value="Client to pick up">Client to pick up</option>
              </b-select>
            </div>
          </div>

          <h4><span class="is-blue"> Site/Farm Location </span></h4>

            <div class="columns">
            <b-field class="column is-three-quarters">
                <b-input
                type="text"
                v-model="siteLocation"
                placeholder="enter location here..."
                >
                </b-input>
            </b-field>
            </div>


            <h4><span class="is-blue"> Blood </span></h4>

            <div class="columns">
            <b-field class="column is-three-quarters">
                <b-input
                type="text"
                v-model="blood"
                placeholder="enter here..."
                >
                </b-input>
            </b-field>
            </div>


            <h4><span class="is-blue"> Plasma </span></h4>

            <div class="columns">
            <b-field class="column is-three-quarters">
                <b-input
                type="text"
                v-model="plasma"
                placeholder="enter here..."
                >
                </b-input>
            </b-field>
            </div>


            <h4><span class="is-blue"> Serum </span></h4>

            <div class="columns">
            <b-field class="column is-three-quarters">
                <b-input
                type="text"
                v-model="serum"
                placeholder="enter here..."
                >
                </b-input>
            </b-field>
            </div>

            <h4><span class="is-blue"> Blood Smear </span></h4>

            <div class="columns">
            <b-field class="column is-three-quarters">
                <b-input
                type="text"
                v-model="bloodSmear"
                placeholder="enter here..."
                >
                </b-input>
            </b-field>
            </div>


            <h4><span class="is-blue"> Impression Smear </span></h4>

            <div class="columns">
            <b-field class="column is-three-quarters">
                <b-input
                type="text"
                v-model="impressionSmear"
                placeholder="enter here..."
                >
                </b-input>
            </b-field>
            </div>


            <h4><span class="is-blue"> Lymphnode Smear </span></h4>

            <div class="columns">
            <b-field class="column is-three-quarters">
                <b-input
                type="text"
                v-model="lymphnodeSmear"
                placeholder="enter here..."
                >
                </b-input>
            </b-field>
            </div>


            <h4><span class="is-blue"> Brain Crush Smear </span></h4>

            <div class="columns">
            <b-field class="column is-three-quarters">
                <b-input
                type="text"
                v-model="brainCrushSmear"
                placeholder="enter here..."
                >
                </b-input>
            </b-field>
            </div>


            <h4><span class="is-blue"> Urine </span></h4>

            <div class="columns">
            <b-field class="column is-three-quarters">
                <b-input
                type="text"
                v-model="urine"
                placeholder="enter here..."
                >
                </b-input>
            </b-field>
            </div>


            <h4><span class="is-blue"> Faecal </span></h4>

            <div class="columns">
            <b-field class="column is-three-quarters">
                <b-input
                type="text"
                v-model="faecal"
                placeholder="enter here..."
                >
                </b-input>
            </b-field>
            </div>


            <h4><span class="is-blue"> Milk </span></h4>

            <div class="columns">
            <b-field class="column is-three-quarters">
                <b-input
                type="text"
                v-model="milk"
                placeholder="enter here..."
                >
                </b-input>
            </b-field>
            </div>



            <h4><span class="is-blue"> Semen </span></h4>

            <div class="columns">
            <b-field class="column is-three-quarters">
                <b-input
                type="text"
                v-model="semen"
                placeholder="enter here..."
                >
                </b-input>
            </b-field>
            </div>


            <h4><span class="is-blue"> Tracheal Washing </span></h4>

            <div class="columns">
            <b-field class="column is-three-quarters">
                <b-input
                type="text"
                v-model="trachealWashing"
                placeholder="enter here..."
                >
                </b-input>
            </b-field>
            </div>


            <h4><span class="is-blue"> Swab </span></h4>

            <div class="columns">
            <b-field class="column is-three-quarters">
                <b-input
                type="text"
                v-model="swab"
                placeholder="enter here..."
                >
                </b-input>
            </b-field>
            </div>

            <h4><span class="is-blue"> Skin Scraping </span></h4>

            <div class="columns">
            <b-field class="column is-three-quarters">
                <b-input
                type="text"
                v-model="skinScraping"
                placeholder="enter here..."
                >
                </b-input>
            </b-field>
            </div>


            <h4><span class="is-blue"> Aborted/Fetal </span></h4>

            <div class="columns">
            <b-field class="column is-three-quarters">
                <b-input
                type="text"
                v-model="abortedOrFetal"
                placeholder="enter here..."
                >
                </b-input>
            </b-field>
            </div>


            <h4><span class="is-blue"> Tissue/Organ </span></h4>

            <div class="columns">
            <b-field class="column is-three-quarters">
                <b-input
                type="text"
                v-model="tissueOrOrgan"
                placeholder="enter here..."
                >
                </b-input>
            </b-field>
            </div>

            <h4><span class="is-blue"> Biopsy </span></h4>

            <div class="columns">
            <b-field class="column is-three-quarters">
                <b-input
                type="text"
                v-model="biopsy"
                placeholder="enter here..."
                >
                </b-input>
            </b-field>
            </div>


            <h4><span class="is-blue"> Carcass </span></h4>

            <div class="columns">
            <b-field class="column is-three-quarters">
                <b-input
                type="text"
                v-model="carcass"
                placeholder="enter here..."
                >
                </b-input>
            </b-field>
            </div>


            <h4><span class="is-blue"> Other </span></h4>

            <div class="columns">
            <b-field class="column is-three-quarters">
                <b-input
                type="text"
                v-model="other"
                placeholder="enter here..."
                >
                </b-input>
            </b-field>
            </div>



            <h4><span class="is-blue"> Total number of samples submitted </span></h4>

            <div class="columns">
            <b-field class="column is-three-quarters">
                <b-input
                type="text"
                v-model="totalNumberOfSamplesSubmitted"
                placeholder="enter here..."
                >
                </b-input>
            </b-field>
            </div>


            <h4><span class="is-blue"> Total number of samples rejected </span></h4>

            <div class="columns">
            <b-field class="column is-three-quarters">
                <b-input
                type="text"
                v-model="totalNumberOfSamplesRejected"
                placeholder="enter here..."
                >
                </b-input>
            </b-field>
            </div>


            <h4><span class="is-blue"> Presenting Problem(s) </span></h4>

            <div class="columns">
            <b-field class="column is-three-quarters">
                <b-input
                type="text"
                v-model="presentingProblems"
                placeholder="enter here..."
                >
                </b-input>
            </b-field>
            </div>


            <h4><span class="is-blue"> Examination Requested </span></h4>

            <div class="columns">
            <b-field class="column is-three-quarters">
                <b-input
                type="text"
                v-model="exmainationRequested"
                placeholder="enter here..."
                >
                </b-input>
            </b-field>
            </div>


            <h4><span class="is-blue"> Test Urgency </span></h4>

            <div class="columns">
            <b-field class="column is-three-quarters">
                <b-select
                
                v-model="testUrgency"
                placeholder="--select option--"
                >
                <option value="Urgent">Urgent</option>
                <option value="Routine">Routine</option>

                </b-select>
            </b-field>
            </div>


            <h4><span class="is-blue"> Status </span></h4>

            <div class="columns">
            <b-field class="column is-three-quarters">
                <b-select
                
                v-model="submissionStatus"
                placeholder="--select option--"
                >
                <option value="Pending">Pending</option>
                <option value="Dispatched">Dispatched</option>

                </b-select>
            </b-field>
            </div>


            <h4><span class="is-blue"> Invoice Number</span></h4>

            <div class="columns">
            <b-field class="column is-three-quarters">
                <b-input
                type="text"
                v-model="invoiceNumber"
                placeholder="enter here..."
                >
                </b-input>
            </b-field>
            </div>


          <div class="card my-4">
            <div class="summary-content">
              <h2 class="tag is-info is-light mx-4 mb-4 summary">Summary</h2>

              <p class="mx-4 cat">Submission No: {{ submissionsNumber }}</p>

              <p class="mx-4 cat">Client Name : {{ clientName }}</p>

              <p class="mx-4 cat">Consulting Veterinarian : {{ consultingVet }}</p>

              <p class="mx-4 cat">Tel No.(For The Vet) : {{ vetPhoneNumber }}</p>

              <p class="mx-4 cat">Date Submitted: {{ dateSubmitted }}</p>

              <p class="mx-4 cat">Time Submitted: {{ timeSubmitted }}</p>


              <p class="mx-4 cat">Received By: {{ receivedBy }}</p>

              <p class="mx-4 cat"> Submitted By : {{ submittedBy }} </p>

              <p class="mx-4 cat"> Report Name : {{ reportName }}</p>

              <p class="mx-4 cat">Address : {{ address }}</p>

              <p class="mx-4 cat">Tel No. : {{ telPhoneNumber }}</p>

              <p class="mx-4 cat">Email : {{ email }}</p>

              <p class="mx-4 cat">Report Sent Via: {{ reportSentVia }}</p>

              <p class="mx-4 cat">Site/Farm Location : {{ siteLocation }}</p>

              <p class="mx-4 cat">Blood : {{ blood }}</p>

              <p class="mx-4 cat">Plasma : {{ plasma }}</p>

              <p class="mx-4 cat">Serum : {{ serum }}</p>

              <p class="mx-4 cat">Blood Smear : {{ bloodSmear }}</p>

              <p class="mx-4 cat">Impression Smear : {{ impressionSmear }}</p>

              <p class="mx-4 cat">Lymphnode Smear : {{ lymphnodeSmear }}</p>

              <p class="mx-4 cat">Brain Crush Smear : {{ brainCrushSmear }}</p>


              <p class="mx-4 cat">Urine: {{ urine }}</p>

              <p class="mx-4 cat">Faecal: {{ faecal }}</p>

              <p class="mx-4 cat"> Milk : {{ milk }} </p>

              <p class="mx-4 cat"> Semen : {{ semen }}</p>

              <p class="mx-4 cat">Tracheal Washing : {{ trachealWashing }}</p>

              <p class="mx-4 cat">Swab : {{ swab }}</p>

              <p class="mx-4 cat">Skin Scraping : {{ skinScraping }}</p>


              <p class="mx-4 cat">Aborted/Fetal: {{ abortedOrFetal }}</p>

              <p class="mx-4 cat">Tissue/Organ: {{ tissueOrOrgan }}</p>

              <p class="mx-4 cat"> Biopsy : {{ biopsy }} </p>

              <p class="mx-4 cat">Carcass : {{carcass }}</p>

              <p class="mx-4 cat">Other : {{ other }}</p>

              <p class="mx-4 cat">Swab : {{ swab }}</p>

              <p class="mx-4 cat">Total no. samples submitted: {{ totalNumberOfSamplesSubmitted }}</p>

              <p class="mx-4 cat">Total no. samples rejected: {{ totalNumberOfSamplesRejected }}</p>

              <p class="mx-4 cat">Presenting Problems : {{ presentingProblems }}</p>

              <p class="mx-4 cat">Examination Requested: {{ exmainationRequested }}</p>

              <p class="mx-4 cat">Test Urgency: {{ testUrgency }}</p>

              <p class="mx-4 cat">Status: {{ submissionStatus }}</p>

              <p class="mx-4 cat">Invoice Number : {{ invoiceNumber }}</p>


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
  name: "SubmissionsModal",

  data() {
    return {

      data: ["Consultations", "Sales"],

      isFullPage: true,
      // fenceForm: {

      //         clientName:null,

      //         clientPhoneNumber:null,

      //         fenceCategory:null,

      // },
    };
  },

  computed: {
    ...mapFields("labData", [
      "submissionsForm",

      "submissionsForm.submissionsNumber",
      "submissionsForm.clientName",
      "submissionsForm.consultingVet",
      "submissionsForm.vetPhoneNumber",
      "submissionsForm.dateSubmitted",
      "submissionsForm.timeSubmitted",
      "submissionsForm.receivedBy",
      "submissionsForm.submittedBy",
      "submissionsForm.reportName",
      "submissionsForm.address",
      "submissionsForm.telPhoneNumber",
      "submissionsForm.email",
      "submissionsForm.reportSentVia",

      "submissionsForm.siteLocation",
      "submissionsForm.blood",
      "submissionsForm.plasma",
      "submissionsForm.serum",
      "submissionsForm.bloodSmear",
      "submissionsForm.impressionSmear",
      "submissionsForm.lymphnodeSmear",
      "submissionsForm.brainCrushSmear",
      "submissionsForm.urine",
      "submissionsForm.faecal",
      "submissionsForm.milk",
      "submissionsForm.semen",


      "submissionsForm.trachealWashing",
      "submissionsForm.swab",
      "submissionsForm.skinScraping",
      "submissionsForm.abortedOrFetal",
      "submissionsForm.tissueOrOrgan",
      "submissionsForm.biopsy",
      "submissionsForm.carcass",
      "submissionsForm.other",
      "submissionsForm.totalNumberOfSamplesSubmitted",
      "submissionsForm.totalNumberOfSamplesRejected",
      "submissionsForm.presentingProblems",
      "submissionsForm.examinationRequested",
      "submissionsForm.testUrgency",
      "submissionsForm.submissionStatus",
      "submissionsForm.invoiceNumber"


      
    ]),

    ...mapGetters("labData", {
      submission: "selectedSubmissionsRecord",
      submissionLoading: "loading",
    }),
  },

  // },

  mounted() {},

  methods: {
    ...mapActions("labData", [
      "addNewSubmissionsRecord",
      "getAllSubmissionsRecords",
      "load",
    ]),

    loading() {
      return this.submissionsLoading;
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
          await this.addNewSubmissionsRecord();

          this.$buefy.toast.open({
            duration: 3000,
            message: "New Record Successfully Added!",
            position: "is-top",
            type: "is-success",
          });
          this.clearForm();
          showNotifications();
          this.$parent.close();
        },
      });

      function showNotifications() {
        const notification = new Notification("Task data added.", {
          body: "Be sure to check your sales data periodically.",
          icon: "@/assets/pug3.jpg",
        });
      }
    },

    close() {
      this.$buefy.toast.open({
        message: "pig Snapshot closed.",
        duration: 2000,
        position: "is-bottom",
        type: "is-warning ",
      });
      this.$parent.close();
    },

    clearForm() {
      this.submissionsForm = {
        submissionsNumber: null,
        clientName: null,
        consultingVet: null,
        vetPhoneNumber: null,
        dateSubmitted: null,
        timeSubmitted: null,
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
