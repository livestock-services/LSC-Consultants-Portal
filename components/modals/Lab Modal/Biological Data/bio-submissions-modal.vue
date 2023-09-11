<template>
    <div class="modal-card ">
      <header class="modal-card-head">
        <h3 class="modal-card-title">Bio Submission Snapshot</h3>
       
        <button type="button" class="delete" @click="close"></button>
      </header>
      <section class="modal-card-body has-background-white">
        <!-- Modal Content -->
        <div>
         <b-form v-model="bioSubmissionsForm" class="form">
  
       
          <div class="logo-container">
        <img class="logo" src="@/assets/images/LSC.jpg" style="height: auto; width: 5rem;" alt="Company Logo" />
      </div>
            
  
            <h4> <span class="is-blue">Client Name</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="text" v-model="clientName" placeholder="Client Name..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Client Address</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="address" v-model="clientAddress" placeholder="Client Address..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Client Email</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="email" v-model="clientEmail" placeholder="Client Email..."></b-input>
              </div>
  
            </div>

            <h4> <span class="is-blue">Client Contact No.</span></h4>
            <div class="columns">
  
              
              <div  class="column is-three-quarters">
              
              <b-input type="number" v-model="clientContactNumber" placeholder="Client Contact No..."></b-input>
              </div>
  
            </div>

            


            <h4> <span class="is-blue"> Examination Requested</span></h4>
  
            <div class="columns">
              <div class="column">
                <h5 class="my-2">PARASITOLOGY</h5>
                <ul>
                  <li>
                    <b-checkbox v-model="checkboxGroup" type="is-success"  native-value="Haemoparasite Examination (HPE), Code 4740">Haemoparasite Examination (HPE), Code 4740</b-checkbox>
                    <label v-if="checkboxGroup.includes('Haemoparasite Examination (HPE), Code 4740')">No. of Tests: <input type="number" v-model="testCountHPE"></label>
                  </li>
                  <li>
                    <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Fecal Egg Counts (FEC), Code 4745">Fecal Egg Counts (FEC), Code 4745</b-checkbox>
                    <label v-if="checkboxGroup.includes('Fecal Egg Counts (FEC), Code 4745')">No. of Tests: <input type="number" v-model="testCountFEC"></label>
                  </li>
                  <li>
                    <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Helminth Identification (HI), Code 8000">Helminth Identification (HI), Code 8000</b-checkbox>
                    <label v-if="checkboxGroup.includes('Helminth Identification (HI), Code 8000')">No. of Tests: <input type="number" v-model="testCountHI"></label>
                  </li>
                  <li>
                    <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Mites Identification (MI), Code 8001">Mites Identification (MI), Code 8001</b-checkbox>
                    <label  v-if="checkboxGroup.includes('Mites Identification (MI), Code 8001')" >No. of Tests: <input type="number" v-model="testCountMI"></label>
                  </li>
                </ul>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <h5 class="my-2">SEROLOGY</h5>
                <ul>
                  <li>
                    <b-checkbox v-model="checkboxGroup" type="is-success" native-value="ELISA Test (ET) IBV, MG, IBD, NDV, NDV-F (Code 4875)">ELISA Test (ET) IBV, MG, IBD, NDV, NDV-F (Code 4875)</b-checkbox>
                    <label v-if="checkboxGroup.includes('ELISA Test (ET) IBV, MG, IBD, NDV, NDV-F (Code 4875)')">No. of Tests: <input type="number" v-model="testCountET"></label>
                  </li>
                  <li>
                    <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Rose Bengal Test (RBT), Code 6783">Rose Bengal Test (RBT), Code 6783</b-checkbox>
                    <label v-if="checkboxGroup.includes('Rose Bengal Test (RBT), Code 6783')">No. of Tests: <input type="number" v-model="testCountRBT"></label>
                  </li>
                  <li>
                    <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Brucellosis (Confirmation), Code 8994">Brucellosis (Confirmation), Code 8994</b-checkbox>
                    <label v-if="checkboxGroup.includes('Brucellosis (Confirmation), Code 8994')">No. of Tests: <input type="number" v-model="testCountBrucellosis"></label>
                  </li>
                  <li>
                    <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Chlamydia, Code 8995">Chlamydia, Code 8995</b-checkbox>
                    <label v-if="checkboxGroup.includes('Chlamydia, Code 8995')">No. of Tests: <input type="number" v-model="testCountChlamydia"></label>
                  </li>
                  <li>
                    <b-checkbox v-model="checkboxGroup" type="is-success" native-value="ProFlok (ELISA), Code 8996">ProFlok (ELISA), Code 8996</b-checkbox>
                    <label v-if="checkboxGroup.includes('ProFlok (ELISA), Code 8996')">No. of Tests: <input type="number" v-model="testCountProFlok"></label>
                  </li>
                </ul>
              </div>
            </div>




              <div class="columns">
                <div class="column">
         
                      <h5 class="my-2">HEMATOLOGY</h5>
                      <ul>
                        <li>
                          <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Full Blood Count (FBC), Code 4743">Full Blood Count (FBC), Code 4743</b-checkbox>
                          <label v-if="checkboxGroup.includes('Full Blood Count (FBC), Code 4743')">No. of Tests: <input type="number" v-model="testCountFBC"></label>
                        </li>
                        <li>
                          <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Packed Cell Volume (PCV), Code 4744">Packed Cell Volume (PCV), Code 4744</b-checkbox>
                          <label v-if="checkboxGroup.includes('Packed Cell Volume (PCV), Code 4744')">No. of Tests: <input type="number" v-model="testCountPCV"></label>
                        </li>
                        
                      </ul>                

                 </div>
               
              </div>


              <div class="columns">
                <div class="column">
         
                      <h5 class="my-2">CLINICAL BIOCHEMISTRY</h5>
                      <ul>
                        <li>
                          <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Comprehensive Diagnostic Profile (CDP), Code 7992">Comprehensive Diagnostic Profile (CDP), Code 7992</b-checkbox>
                          <label v-if="checkboxGroup.includes('Comprehensive Diagnostic Profile (CDP), Code 7992')">No. of Tests: <input type="number" v-model="testCountCDP"></label>
                        </li>
                        <li>
                          <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Urine Test (UT), Code 7995">Urine Test (UT), Code 7995</b-checkbox>
                          <label v-if="checkboxGroup.includes('Urine Test (UT), Code 7995')">No. of Tests: <input type="number" v-model="testCountUT"></label>
                        </li>
                        
                      </ul>                

                 </div>
               
              </div>




              <div class="columns">
                <div class="column">
         
                      <h5 class="my-2">MICROBIOLOGY</h5>
                      <ul>
                        <li>
                          <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Culture, Code 4746">Culture, Code 4746</b-checkbox>
                          <label v-if="checkboxGroup.includes('Culture, Code 4746')">No. of Tests: <input type="number" v-model="testCountCulture"></label>
                        </li>
                        <li>
                          <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Culture & Sensitivity (CS), Code 4748">Culture & Sensitivity (CS), Code 4748</b-checkbox>
                          <label v-if="checkboxGroup.includes('Culture & Sensitivity (CS), Code 4748')">No. of Tests: <input type="number" v-model="testCountCS"></label>
                        </li>
                        <li>
                          <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Bacterial Colony Count (BCC), Code 8002">Bacterial Colony Count (BCC), Code 8002</b-checkbox>
                          <label v-if="checkboxGroup.includes('Bacterial Colony Count (BCC), Code 8002')">No. of Tests: <input type="number" v-model="testCountBCC"></label>
                        </li>
                       
                      </ul>                

                 </div>
               
              </div>


              <div class="columns">
                <div class="column">
         
                      <h5 class="my-2">CYTOLOGY</h5>
                      <ul>
                        <li>
                          <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Brain Crush Smear (BCS), Code 4741">Brain Crush Smear (BCS), Code 4741</b-checkbox>
                          <label v-if="checkboxGroup.includes('Brain Crush Smear (BCS), Code 4741')">No. of Tests: <input type="number" v-model="testCountBCS"></label>
                        </li>
                        <li>
                          <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Impression Smear (IS), Code 4742">Impression Smear (IS), Code 4742</b-checkbox>
                          <label v-if="checkboxGroup.includes('Impression Smear (IS), Code 4742')">No. of Tests: <input type="number" v-model="testCountIS"></label>
                        </li>
                        

                      </ul>                

                 </div>
               
              </div>


              <div class="columns">
                <div class="column">
         
                      <h5 class="my-2">REPRODUCTION</h5>
                      <ul>
                        <li>
                          <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Rapid Visual Pregnancy Test (RVPT), Code 6367">Rapid Visual Pregnancy Test (RVPT), Code 6367</b-checkbox>
                          <label v-if="checkboxGroup.includes('Rapid Visual Pregnancy Test (RVPT), Code 6367')">No. of Tests: <input type="number" v-model="testCountRVPT"></label>
                        </li>
                        <li>
                          <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Semen Testing (ST), Code 7989">Semen Testing (ST), Code 7989</b-checkbox>
                          <label v-if="checkboxGroup.includes('Semen Testing (ST), Code 7989')">No. of Tests: <input type="number" v-model="testCountST"></label>
                        </li>
                        

                      </ul>                

                 </div>
               
              </div>


              <div class="columns">
                <div class="column">
         
                      <h5 class="my-2">ANIMAL FEED</h5>
                      <ul>
                        <li>
                          <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Feed Testing (FT) NIR Complete, Code 7988">Feed Testing (FT) NIR Complete, Code 7988</b-checkbox>
                          <label v-if="checkboxGroup.includes('Feed Testing (FT) NIR Complete, Code 7988')">No. of Tests: <input type="number" v-model="testCountFT"></label>
                        </li>
                       
                        

                      </ul>                

                 </div>
               
              </div>


             
              <div class="columns">
                <div class="column">
                  <h5 class="my-2">POSTMORTEM (NECROPSY)</h5>
                  <ul>
                    <li>
                      <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Layers (Code 7999)">Layers (Code 7999)</b-checkbox>
                      <label v-if="checkboxGroup.includes('Layers (Code 7999)')">No. of Tests: <input type="number" v-model="testCountLayers"></label>
                    </li>
                    <li>
                      <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Bovine (Code 4758)">Bovine (Code 4758)</b-checkbox>
                      <label v-if="checkboxGroup.includes('Bovine (Code 4758)')">No. of Tests: <input type="number" v-model="testCountBovine"></label>
                    </li>
                    <li>
                      <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Small stock (Code 4760)">Small stock (Code 4760)</b-checkbox>
                      <label v-if="checkboxGroup.includes('Small stock (Code 4760)')">No. of Tests: <input type="number" v-model="testCountSmallStock"></label>
                    </li>
                    <li>
                      <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Broilers (Code 4762)">Broilers (Code 4762)</b-checkbox>
                      <label v-if="checkboxGroup.includes('Broilers (Code 4762)')">No. of Tests: <input type="number" v-model="testCountBroilers"></label>
                    </li>
                    <li>
                      <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Pig (Code 4764)">Pig (Code 4764)</b-checkbox>
                      <label v-if="checkboxGroup.includes('Pig (Code 4764)')">No. of Tests: <input type="number" v-model="testCountPig"></label>
                    </li>
                    <li>
                      <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Free range (Code 6784)">Free range (Code 6784)</b-checkbox>
                      <label v-if="checkboxGroup.includes('Free range (Code 6784)')">No. of Tests: <input type="number" v-model="testCountFreeRange"></label>
                    </li>
                  </ul>
                </div>
              </div>


              <div class="columns">
                <div class="column">
         
                      <h5 class="my-2">OTHER SERVICES</h5>
                      <ul>
                        <li>
                          <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Farm Sample Collection, Code 4755">Farm Sample Collection, Code 4755</b-checkbox>
                          <label v-if="checkboxGroup.includes('Farm Sample Collection, Code 4755')">No. of Tests: <input type="number" v-model="testCountFarmSample"></label>
                        </li>
                        <li>
                          <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Disposables, Code 8873">Disposables, Code 8873 </b-checkbox>
                          <label v-if="checkboxGroup.includes('Disposables, Code 8873')">No. of Tests: <input type="number" v-model="testCountDisposables"></label>
                        </li>
                        

                      </ul>                

                 </div>
               
              </div>



        

              <div class="content">
          <b>Selection:</b>

          <p>Client Name: {{ clientName }}</p>

          <p>Address: {{ clientAddress }}</p>

          <p>Email: {{ clientEmail }}</p>

          <p>Contact No: {{ clientContactNumber }}</p>

          <p>Examination(s) Requested:
             <ul>
            <li v-for="(checkboxValue, checkboxIndex) in checkboxGroup" :key="checkboxIndex">
             
              
            {{ checkboxValue }}
             
            </li>
          </ul>

     


       
          
          </p>
              
          <h4>Test Count</h4>
          <ul>
            <li v-for="(checkboxValue, checkboxIndex) in checkboxGroup" :key="checkboxIndex">
              <!-- Parasitology -->
              <p v-if="checkboxValue.includes('Haemoparasite Examination (HPE), Code 4740')">
                No. of Tests (HPE): {{ testCountHPE }}
              </p>

              <p v-if="checkboxValue.includes('Fecal Egg Counts (FEC), Code 4745')">
                No. of Tests (FEC): {{ testCountFEC }}
              </p>

              <p v-if="checkboxValue.includes('Helminth Identification (HI), Code 8000')">
                No. of Tests (HI): {{ testCountHI }}
              </p>

              <p v-if="checkboxValue.includes('Mites Identification (MI), Code 8001')">
                No. of Tests (MI): {{ testCountMI }}
              </p>

              <!-- Serology -->
              <p v-if="checkboxValue.includes('ELISA Test (ET) IBV, MG, IBD, NDV, NDV-F (Code 4875')">
                No. of Tests (ET): {{ testCountET }}
              </p>

              <p v-if="checkboxValue.includes('Rose Bengal Test (RBT), Code 6783')">
                No. of Tests (RBT): {{ testCountRBT }}
              </p>

              <p v-if="checkboxValue.includes('Brucellosis (Confirmation), Code 8994')">
                No. of Tests (Brucellosis): {{ testCountBrucellosis }}
              </p>

              <p v-if="checkboxValue.includes('Chlamydia, Code 8995')">
                No. of Tests (Chlamydia): {{ testCountChlamydia }}
              </p>

              <p v-if="checkboxValue.includes('ProFlok (ELISA), Code 8996')">
                No. of Tests (ProFlok): {{ testCountProFlok }}
              </p>

              <!-- Hematology -->
              <p v-if="checkboxValue.includes('Full Blood Count (FBC), Code 4743')">
                No. of Tests (FBC): {{ testCountFBC }}
              </p>

              <p v-if="checkboxValue.includes('Packed Cell Volume (PCV), Code 4744')">
                No. of Tests (PCV): {{ testCountPCV }}
              </p>

              <!-- Clinical Biochemistry -->
              <p v-if="checkboxValue.includes('Comprehensive Diagnostic Profile (CDP), Code 7992')">
                No. of Tests (CDP): {{ testCountCDP }}
              </p>

              <p v-if="checkboxValue.includes('Urine Test (UT), Code 7995')">
                No. of Tests (UT): {{ testCountUT }}
              </p>

              <!-- Microbiology -->
              <p v-if="checkboxValue.includes('Culture, Code 4746')">
                No. of Tests (Culture): {{ testCountCulture }}
              </p>

              <p v-if="checkboxValue.includes('Culture & Sensitivity (CS), Code 4748')">
                No. of Tests (CS): {{ testCountCS }}
              </p>

              <p v-if="checkboxValue.includes('Bacterial Colony Count (BCC), Code 8002')">
                No. of Tests (BCC): {{ testCountBCC }}
              </p>

              <!-- Cytology -->
              <p v-if="checkboxValue.includes('Brain Crush Smear (BCS), Code 4741')">
                No. of Tests (BCS): {{ testCountBCS }}
              </p>

              <p v-if="checkboxValue.includes('Impression Smear (IS), Code 4742')">
                No. of Tests (IS): {{ testCountIS }}
              </p>

              <!-- Reproduction -->
              <p v-if="checkboxValue.includes('Rapid Visual Pregnancy Test (RVPT), Code 6367')">
                No. of Tests (RVPT): {{ testCountRVPT }}
              </p>

              <p v-if="checkboxValue.includes('Semen Testing (ST), Code 7989')">
                No. of Tests (ST): {{ testCountST }}
              </p>

              <!-- Animal Feed -->
              <p v-if="checkboxValue.includes('Feed Testing (FT) NIR Complete, Code 7988')">
                No. of Tests (FT): {{ testCountFT }}
              </p>

              <!-- Postmortem (Necropsy) -->
              <p v-if="checkboxValue.includes('Layers (Code 7999)')">
                No. of Tests (Layers): {{ testCountLayers }}
              </p>

              <p v-if="checkboxValue.includes('Bovine (Code 4758)')">
                No. of Tests (Bovine): {{ testCountBovine }}
              </p>

              <p v-if="checkboxValue.includes('Small stock (Code 4760)')">
                No. of Tests (Small stock): {{ testCountSmallStock }}
              </p>

              <p v-if="checkboxValue.includes('Broilers (Code 4762)')">
                No. of Tests (Broilers): {{ testCountBroilers }}
              </p>

              <p v-if="checkboxValue.includes('Pig (Code 4764)')">
                No. of Tests (Pig): {{ testCountPig }}
              </p>

              <p v-if="checkboxValue.includes('Free range (Code 6784)')">
                No. of Tests (Free range): {{ testCountFreeRange }}
              </p>

              <!-- Other Services -->
              <p v-if="checkboxValue.includes('Farm Sample Collection, Code 4755')">
                No. of Tests (Farm Sample Collection): {{ testCountFarmSample }}
              </p>

              <p v-if="checkboxValue.includes('Disposables, Code 8873')">
                No. of Tests (Disposables): {{ testCountDisposables }}
              </p>
            </li>
          </ul>
        </div>

    

    


  
  
         <b-button @click="onSubmit" type="is-info">Add </b-button>

         <b-button @click="addItemsToList" type="is-warning">Add Items to List </b-button>


       
  
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

</script>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { PDFDocument, rgb } from 'pdf-lib';
import { mapActions, mapGetters } from 'vuex'
  import { mapFields } from 'vuex-map-fields'
  export default {
    name: 'BioSubmissionModal',

    
  
     data() {

   

      return {
        checkboxGroup: [],
        data:[
              
               'Consultations',
               'Sales'
        ],

       
  
  
        isFullPage: true,
        // fenceForm: {
        
        //         clientName:null,
               
        //         clientPhoneNumber:null,
  
        //         fenceCategory:null,
           
          
        // },
       
      }
    },
  
     computed: {
      
        ...mapFields('labData', [

        'bioSubmissionsForm',

        
    'bioSubmissionsForm.clientName',
    'bioSubmissionsForm.clientAddress',
    'bioSubmissionsForm.clientEmail',
    'bioSubmissionsForm.clientContactNumber',
  
    'bioSubmissionsForm.testCountHPE',
    'bioSubmissionsForm.testCountFEC',
    'bioSubmissionsForm.testCountHI',
    'bioSubmissionsForm.testCountMI',
    'bioSubmissionsForm.testCountET',
    'bioSubmissionsForm.testCountRBT',
    'bioSubmissionsForm.testCountBrucellosis',
    'bioSubmissionsForm.testCountChlamydia',
    'bioSubmissionsForm.testCountProFlok',
    'bioSubmissionsForm.testCountFBC',
    'bioSubmissionsForm.testCountPCV',
    'bioSubmissionsForm.testCountCDP',
    'bioSubmissionsForm.testCountUT',
    'bioSubmissionsForm.testCountCulture',
    'bioSubmissionsForm.testCountCS',
    'bioSubmissionsForm.testCountBCC',
    'bioSubmissionsForm.testCountBCS',
    'bioSubmissionsForm.testCountIS',
    'bioSubmissionsForm.testCountRVPT',
    'bioSubmissionsForm.testCountST',
    'bioSubmissionsForm.testCountFT',
    'bioSubmissionsForm.testCountLayers',
    'bioSubmissionsForm.testCountBovine',
    'bioSubmissionsForm.testCountSmallStock',
    'bioSubmissionsForm.testCountBroilers',
    'bioSubmissionsForm.testCountPig',
    'bioSubmissionsForm.testCountFreeRange',
    'bioSubmissionsForm.testCountFarmSample',
    'bioSubmissionsForm.testCountDisposables',

      
        
              
      
        
    ]),


      ...mapFields('labData',{
    
           examsRequested:'bioSubmissionsForm.checkboxGroup',
       
      }),
  
        ...mapGetters('labData', {
         sampleInfo: 'selectedSampleInformationRecord',
        sampleLoading: 'loading',
        bioSubs:'allBioSubmissionNumbers',

        bioSubmissionsCheckboxGroup: {
    get() {
      // Return the value of bioSubmissionsForm.checkboxGroup
      return this.bioSubmissionsForm.checkboxGroup;
    },
    set(value) {
      // Set the value of bioSubmissionsForm.checkboxGroup
      this.bioSubmissionsForm.checkboxGroup = value;
      console.log(value)
    },
  },
      }),
  
     },
  
     
  
    // },
  
    mounted() {
      let checkboxGroup = this.checkboxGroup;
        console.log(checkboxGroup);
    },

  
    
  
    
  
    methods: {
      
        ...mapActions('labData', ['addNewBioSubmissionsRecord','getAllBioSubmissionsRecords', 'updateDataArray', 'load']),
  
     loading() {
        return this.sampleInfoLoading 

      },


      async addItemsToList(){
        let checkboxGroup = this.checkboxGroup;
        console.log(checkboxGroup);

        for (let i = 0; i < checkboxGroup.length; i++) {
          const element = checkboxGroup[i];
          const checkboxValue =[];

          checkboxValue.push(element)
          console.log(element);
          
        }
      },

      
      async generatePDF() {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([400, 400]);

      page.drawText('Hello, PDF!', {
      x: 50,
      y: 350,
      size: 30,
      color: rgb(0, 0, 0),
      });

      const pdfBytes = await pdfDoc.save();
      return pdfBytes;
      },


      async generateAndDownloadPDF() {
      const pdfBytes = await generatePDF();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      pdfUrl.value = url;
    },

  
      async onSubmit() {
  
         await this.$buefy.dialog.confirm({
          title: 'Add New Record',
          message: 'Proceed to add new entry?',
          cancelText: 'Cancel',
          confirmText: 'Yes, entries are correct',
          type: 'is-success is-light',
          hasIcon: true,
          onConfirm: async () => {

            const newDataArray = this.checkboxGroup;
            await this.updateDataArray(newDataArray);

           await this.addNewBioSubmissionsRecord();
  
            this.$buefy.toast.open({
              duration: 3000,
              message: 'New Record Successfully Added!',
              position: 'is-top',
              type: 'is-success',
            })
             this.clearForm();
            showNotifications();
            this.$parent.close()
          },
        })
     
  
              function showNotifications(){
     const notification = new Notification("Task data added.", {
         body: "Be sure to check your sales data periodically.",
         icon: '@/assets/pug3.jpg'
     }); 
  
        
          }
  
      },
  
      close() {
        this.$buefy.toast.open({
          message: 'Bio Submissions Snapshot closed.',
          duration: 2000,
          position: 'is-bottom',
          type: 'is-warning ',
        })
        this.$parent.close()
      },
  
      clearForm() {
  
       this.bioSubmissionsForm = {
        
        clientName: null,
        clientAddress: null,
        clientEmail: null,
        clientContactNumber: null,
        checkboxValue: null,
        testCountHPE: null,
        testCountFEC: null,
        testCountHI: null,
        testCountMI: null,
        testCountET: null,
        testCountRBT: null,
        testCountBrucellosis: null,
        testCountChlamydia: null,
        testCountProFlok: null,
        testCountFBC: null,
        testCountPCV: null,
        testCountCDP: null,
        testCountUT: null,
        testCountCulture: null,
        testCountCS: null,
        testCountBCC: null,
        testCountBCS: null,
        testCountIS: null,
        testCountRVPT: null,
        testCountST: null,
        testCountFT: null,
        testCountLayers: null,
        testCountBovine: null,
        testCountSmallStock: null,
        testCountBroilers: null,
        testCountPig: null,
        testCountFreeRange: null,
        testCountFarmSample: null,
        testCountDisposables: null,
       
  
          
        }
        
      }
    },
  
    
  }
  </script>
  
  <style scoped>
  .modal-width-auto {
    width: auto;
  }
  
  .yellow{
    color: rgb(193, 108, 28);
  }
  .summary{
    font-size: 1.6rem;
  }
  .summary-content p{
    margin-top: 12px;
    margin-bottom: 12px;
  }
  
  .summary-content {
    padding-bottom: 10px;
  }
  
  
  .is-blue{
    color: rgb(0, 118, 228);
  font-family:'Times New Roman', Times, serif;
    font-size: 1.2rem;
    
  }
  
  p{ 
    font-size: 1.0rem;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  
  .cat{
    font-weight: normal;
  }
  </style>
  