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


            <h4><span class="is-blue"> Report to be sent via </span></h4>

              <div class="columns">
                <div class="column is-three-quarters">
                  <b-select
                    type="text"
                    v-model="reportSentVia"
                    placeholder="--select option--"
                  >
                    <option value="Email">Email</option>
                    <option value="Posting">Posting</option>
                    <option value="Client to pick up">Client to pick up</option>
                  </b-select>
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

              <h4><span class="is-blue"> Animal Location </span></h4>

                <div class="columns">
                <b-field class="column is-three-quarters">
                    <b-input
                    type="text"
                    v-model="animalLocation"
                    placeholder="enter location here..."
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

                <h4> <span class="is-blue"> Animal Type </span></h4>
  
  <div class="columns">
    
    

    <div  class="column is-three-quarters">
    
      <b-select
      v-model="animalType"
        placeholder="-- Select an option --"
      >
        <option value="CATTLE">CATTLE</option>
        <option value="HORSE">HORSE</option>
        <option value="ELEPHANT">ELEPHANT</option>
        <option value="CANNINE">CANNINE</option>
        <option value="CAT">CAT</option>
        <option value="GOAT">GOAT</option>
        <option value="SHEEP">SHEEP</option>
        <option value="AVIAN">AVIAN</option>
        <option value="POULTRY">POULTRY</option>
        <option value="OTHER">OTHER</option>
       
       

        
      </b-select>

    </div>
  </div>


  <div v-if="animalType === 'OTHER'">
    <h7> <span class="is-blue mt-2">Other(If Animal type is not on list)</span></h7>

  <div class="columns">
    
    

    <div  class="column is-three-quarters">

      
      <b-input type="text" v-model="otherAnimalType" placeholder="sample type..."></b-input>

    </div>
  </div>
  </div>
  


 <h4> <span class="is-blue"> Breed </span></h4>

  <div class="columns">
    
    

    <div  class="column is-three-quarters">
    
    <b-input type="text" v-model="breed" placeholder="Breed..."></b-input>
    </div>
  </div>

  <h4> <span class="is-blue"> Age </span></h4>

  <div class="columns">
      
      

      <div  class="column is-three-quarters">
      
      <b-input type="text" v-model="age" placeholder="enter age here..."></b-input>
      </div>
  </div>


  <h4> <span class="is-blue"> Sex </span></h4>
  
  <div class="columns">
    <b-field class="column is-full">
      <b-select
        v-model="sex"
        placeholder="-- Select an option --"
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        
      </b-select>
    </b-field>
  </div>


  <h4> <span class="is-blue"> Sample Condition on Receipt </span></h4>
  
  <div class="columns">
    <b-field class="column is-full">
      <b-select
        v-model="sampleGoodOnReceipt"
        placeholder="-- Select an option --"
      >
        <option value="Good">Good</option>
        <option value="Satisfactory">Satisfactory</option>
        <option value="Bad">Bad</option>
        
      </b-select>
    </b-field>
  </div>
  

  <h4> <span class="is-blue"> Date Sample Collected </span></h4>
  
  <div class="columns">

  <div  class="column is-three-quarters">
  
  <b-datepicker v-model="dateSampleCollected" placeholder="--select date--"></b-datepicker>
  </div>
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



  <h4> <span class="is-blue"> Test Requested </span></h4>
  
  <div class="columns">
    <b-field class="column is-three-quarters">
      <b-input type="text" v-model="testRequested" placeholder="test requested..."></b-input>
    </b-field>
  </div>



  <h4> <span class="is-blue"> Comments </span></h4>
  
  <div class="columns">
      
      

      <div  class="column is-three-quarters">
      
      <b-input type="text" v-model="comments" placeholder="Comments/Remarks..."></b-input>
      </div>
  </div>


  <h4> <span class="is-blue"> Lab Findings </span></h4>
  
  <div class="columns">
      
      

      <div  class="column is-three-quarters">
      
      <b-input type="text" v-model="labFindings" placeholder="Lab findings..."></b-input>
      </div>
  </div>



              <div class="columns">
                <div class="column">
                  <h5 class="my-2">Sample Type</h5>
                  
                  <ul>
                    <li>
                    <b-checkbox v-model="checkboxGroup2" type="is-success" native-value="FECAL">FECAL</b-checkbox>
                    <label v-if="checkboxGroup2.includes('FECAL')">
                   No. of samples: <input v-model="fecalInput" type="number" placeholder="Enter FECAL value">
                    </label>
                    </li>

                    <li>
                    <b-checkbox v-model="checkboxGroup2" type="is-success" native-value="SERUM">SERUM</b-checkbox>
                    <label v-if="checkboxGroup2.includes('SERUM')">
                   No. of samples: <input v-model="serumInput" type="number" placeholder="Enter SERUM value">
                    </label>
                    </li>

                    <li>
                    <b-checkbox v-model="checkboxGroup2" type="is-success" native-value="SEMEN">SEMEN</b-checkbox>
                    <label v-if="checkboxGroup2.includes('SEMEN')">
                   No. of samples: <input v-model="semenInput" type="number" placeholder="Enter SEMEN value">
                    </label>
                    </li>

                    <li>
                    <b-checkbox v-model="checkboxGroup2" type="is-success" native-value="LIVER">LIVER</b-checkbox>
                    <label v-if="checkboxGroup2.includes('LIVER')">
                   No. of samples: <input v-model="liverInput" type="number" placeholder="Enter LIVER value">
                    </label>
                    </li>

                    <li>
                    <b-checkbox v-model="checkboxGroup2" type="is-success" native-value="SWABS">SWABS</b-checkbox>
                    <label v-if="checkboxGroup2.includes('SWABS')">
                   No. of samples: <input v-model="swabsInput" type="number" placeholder="Enter SWABS value">
                    </label>
                    </li>

                    <li>
                    <b-checkbox v-model="checkboxGroup2" type="is-success" native-value="SKIN SCRAPINGS">SKIN SCRAPINGS</b-checkbox>
                    <label v-if="checkboxGroup2.includes('SKIN SCRAPINGS')">
                   No. of samples: <input v-model="skinScrapingsInput" type="number" placeholder="Enter SKIN SCRAPINGS value">
                    </label>
                    </li>

                    <li>
                    <b-checkbox v-model="checkboxGroup2" type="is-success" native-value="URINE">URINE</b-checkbox>
                    <label v-if="checkboxGroup2.includes('URINE')">
                   No. of samples: <input v-model="urineInput" type="number" placeholder="Enter URINE value">
                    </label>
                    </li>

                    <li>
                    <b-checkbox v-model="checkboxGroup2" type="is-success" native-value="EAR SWABS">EAR SWABS</b-checkbox>
                    <label v-if="checkboxGroup2.includes('EAR SWABS')">
                   No. of samples: <input v-model="earSwabsInput" type="number" placeholder="Enter EAR SWABS value">
                    </label>
                    </li>

                    <li>
                    <b-checkbox v-model="checkboxGroup2" type="is-success" native-value="MILK">MILK</b-checkbox>
                    <label v-if="checkboxGroup2.includes('MILK')">
                   No. of samples: <input v-model="milkInput" type="number" placeholder="Enter MILK value">
                    </label>
                    </li>

                    <li>
                    <b-checkbox v-model="checkboxGroup2" type="is-success" native-value="IMPRESSION SMEAR">IMPRESSION SMEAR</b-checkbox>
                    <label v-if="checkboxGroup2.includes('IMPRESSION SMEAR')">
                   No. of samples: <input v-model="impressionSmearInput" type="number" placeholder="Enter IMPRESSION SMEAR value">
                    </label>
                    </li>

                    <li>
                    <b-checkbox v-model="checkboxGroup2" type="is-success" native-value="LYMPHNODE SMEAR">LYMPHNODE SMEAR</b-checkbox>
                    <label v-if="checkboxGroup2.includes('LYMPHNODE SMEAR')">
                   No. of samples: <input v-model="lymphnodeSmearInput" type="number" placeholder="Enter LYMPHNODE SMEAR value">
                    </label>
                    </li>

                    <li>
                    <b-checkbox v-model="checkboxGroup2" type="is-success" native-value="BRAIN CRUSH SMEAR">BRAIN CRUSH SMEAR</b-checkbox>
                    <label v-if="checkboxGroup2.includes('BRAIN CRUSH SMEAR')">
                   No. of samples: <input v-model="brainCrushSmearInput" type="number" placeholder="Enter BRAIN CRUSH SMEAR value">
                    </label>
                    </li>

                    <li>
                    <b-checkbox v-model="checkboxGroup2" type="is-success" native-value="WHOLE BLOOD">WHOLE BLOOD</b-checkbox>
                    <label v-if="checkboxGroup2.includes('WHOLE BLOOD')">
                   No. of samples: <input v-model="wholeBloodInput" type="number" placeholder="Enter WHOLE BLOOD value">
                    </label>
                    </li>

                    <li>
                    <b-checkbox v-model="checkboxGroup2" type="is-success" native-value="PLASMA">PLASMA</b-checkbox>
                    <label v-if="checkboxGroup2.includes('PLASMA')">
                   No. of samples: <input v-model="plasmaInput" type="number" placeholder="Enter PLASMA value">
                    </label>
                    </li>

                    <li>
                    <b-checkbox v-model="checkboxGroup2" type="is-success" native-value="BLOOD SMEAR">BLOOD SMEAR</b-checkbox>
                    <label v-if="checkboxGroup2.includes('BLOOD SMEAR')">
                   No. of samples: <input v-model="bloodSmearInput" type="number" placeholder="Enter BLOOD SMEAR value">
                    </label>
                    </li>


                    <li>
                    <b-checkbox v-model="checkboxGroup2" type="is-success" native-value="BIOPSY">BIOPSY</b-checkbox>
                    <label v-if="checkboxGroup2.includes('BIOPSY')">
                   No. of samples: <input v-model="biopsyInput" type="number" placeholder="Enter BIOPSY value">
                    </label>
                    </li>

                    <li>
                    <b-checkbox v-model="checkboxGroup2" type="is-success" native-value="CARCASS">CARCASS</b-checkbox>
                    <label v-if="checkboxGroup2.includes('CARCASS')">
                   No. of samples: <input v-model="carcassInput" type="number" placeholder="Enter CARCASS value">
                    </label>
                    </li>

                    <li>
                    <b-checkbox v-model="checkboxGroup2" type="is-success" native-value="ABORTED/FETAL">ABORTED/FETAL</b-checkbox>
                    <label v-if="checkboxGroup2.includes('ABORTED/FETAL')">
                   No. of samples: <input v-model="abortedFetalInput" type="number" placeholder="Enter ABORTED/FETAL value">
                    </label>
                    </li>

                    <li>
                    <b-checkbox v-model="checkboxGroup2" type="is-success" native-value="TISSUE/ORGAN">TISSUE/ORGAN</b-checkbox>
                    <label v-if="checkboxGroup2.includes('TISSUE/ORGAN')">
                   No. of samples: <input v-model="tissueOrganInput" type="number" placeholder="Enter TISSUE/ORGAN value">
                    </label>
                    </li>

                    <li>
                    <b-checkbox v-model="checkboxGroup2" type="is-success" native-value="FEED (SPECIFY)">FEED (SPECIFY)</b-checkbox>
                    <label v-if="checkboxGroup2.includes('FEED (SPECIFY)')">
                   No. of samples: <input v-model="feedSpecifyInput" type="number" placeholder="Enter FEED (SPECIFY) value">
                    </label>
                    </li>

                    <li>
                    <b-checkbox v-model="checkboxGroup2" type="is-success" native-value="OTHER">OTHER</b-checkbox>
                    <label v-if="checkboxGroup2.includes('OTHER')">
                   No. of samples: <input v-model="otherInput" type="number" placeholder="Enter OTHER value">
                    </label>
                    </li>
                  </ul>



                </div>
              </div>
            


            <h4> <span class="is-blue"> Examination Requested</span></h4>
  
            <div class="columns">
              <div class="column">
                <h5 class="my-2">PARASITOLOGY</h5>
                <ul>
                  <li>
                    <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Haemoparasite Examination (Code 4740)">Haemoparasite Examination (HPE), Code 4740</b-checkbox>
                    <label v-if="checkboxGroup.includes('Haemoparasite Examination (Code 4740)')">No. of Tests: <input type="number" v-model="testCountHPE"></label>
                  </li>
                  <li>
                    <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Fecal Egg Counts (Code 4745)">Fecal Egg Counts (FEC), Code 4745</b-checkbox>
                    <label v-if="checkboxGroup.includes('Fecal Egg Counts (Code 4745)')">No. of Tests: <input type="number" v-model="testCountFEC"></label>
                  </li>
                  <li>
                    <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Helminth Identification (Code 8000)">Helminth Identification (HI), Code 8000</b-checkbox>
                    <label v-if="checkboxGroup.includes('Helminth Identification (Code 8000)')">No. of Tests: <input type="number" v-model="testCountHI"></label>
                  </li>
                  <li>
                    <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Mites Identification (Code 8001)">Mites Identification (MI), Code 8001</b-checkbox>
                    <label v-if="checkboxGroup.includes('Mites Identification (Code 8001)')">No. of Tests: <input type="number" v-model="testCountMI"></label>
                  </li>
                </ul>
              </div>
            </div>

<!-- Repeat the same pattern for other sections -->

<!-- SEROLOGY -->
<div class="columns">
  <div class="column">
    <h5 class="my-2">SEROLOGY</h5>
    <ul>
      <li>
        <b-checkbox v-model="checkboxGroup" type="is-success" native-value="ELISA Test (Code 4875)">ELISA Test (ET) IBV, MG, IBD, NDV, NDV-F (Code 4875)</b-checkbox>
        <label v-if="checkboxGroup.includes('ELISA Test (Code 4875)')">No. of Tests: <input type="number" v-model="testCountET"></label>
      </li>
      <li>
        <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Rose Bengal Test (Code 6783)">Rose Bengal Test (RBT), Code 6783</b-checkbox>
        <label v-if="checkboxGroup.includes('Rose Bengal Test (Code 6783)')">No. of Tests: <input type="number" v-model="testCountRBT"></label>
      </li>
      <li>
        <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Brucellosis (Code 8994)">Brucellosis (Confirmation), Code 8994</b-checkbox>
        <label v-if="checkboxGroup.includes('Brucellosis (Code 8994)')">No. of Tests: <input type="number" v-model="testCountBrucellosis"></label>
      </li>
      <li>
        <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Chlamydia (Code 8995)">Chlamydia, Code 8995</b-checkbox>
        <label v-if="checkboxGroup.includes('Chlamydia (Code 8995)')">No. of Tests: <input type="number" v-model="testCountChlamydia"></label>
      </li>
      <li>
        <b-checkbox v-model="checkboxGroup" type="is-success" native-value="ProFlok (Code 8996)">ProFlok (ELISA), Code 8996</b-checkbox>
        <label v-if="checkboxGroup.includes('ProFlok (Code 8996)')">No. of Tests: <input type="number" v-model="testCountProFlok"></label>
      </li>
    </ul>
  </div>
</div>

<!-- HEMATOLOGY -->
<div class="columns">
  <div class="column">
    <h5 class="my-2">HEMATOLOGY</h5>
    <ul>
      <li>
        <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Full Blood Count (Code 4743)">Full Blood Count (FBC), Code 4743</b-checkbox>
        <label v-if="checkboxGroup.includes('Full Blood Count (Code 4743)')">No. of Tests: <input type="number" v-model="testCountFBC"></label>
      </li>
      <li>
        <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Packed Cell Volume (Code 4744)">Packed Cell Volume (PCV), Code 4744</b-checkbox>
        <label v-if="checkboxGroup.includes('Packed Cell Volume (Code 4744)')">No. of Tests: <input type="number" v-model="testCountPCV"></label>
      </li>
      <!-- Add more items for the HEMATOLOGY section if needed -->
    </ul>
  </div>
</div>

<!-- CLINICAL BIOCHEMISTRY -->
<div class="columns">
  <div class="column">
    <h5 class="my-2">CLINICAL BIOCHEMISTRY</h5>
    <ul>
      <li>
        <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Comprehensive Diagnostic Profile (Code 7992)">Comprehensive Diagnostic Profile (CDP), Code 7992</b-checkbox>
        <label v-if="checkboxGroup.includes('Comprehensive Diagnostic Profile (Code 7992)')">No. of Tests: <input type="number" v-model="testCountCDP"></label>
      </li>
      <li>
        <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Urine Test (Code 7995)">Urine Test (UT), Code 7995</b-checkbox>
        <label v-if="checkboxGroup.includes('Urine Test (Code 7995)')">No. of Tests: <input type="number" v-model="testCountUT"></label>
      </li>
     </ul>
  </div>
</div>

<!-- MICROBIOLOGY -->
<div class="columns">
  <div class="column">
    <h5 class="my-2">MICROBIOLOGY</h5>
    <ul>
      <li>
        <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Culture (Code 4746)">Culture, Code 4746</b-checkbox>
        <label v-if="checkboxGroup.includes('Culture (Code 4746)')">No. of Tests: <input type="number" v-model="testCountCulture"></label>
      </li>
      <li>
        <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Culture & Sensitivity (Code 4748)">Culture & Sensitivity (CS), Code 4748</b-checkbox>
        <label v-if="checkboxGroup.includes('Culture & Sensitivity (Code 4748)')">No. of Tests: <input type="number" v-model="testCountCS"></label>
      </li>
      <li>
        <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Bacterial Colony Count (Code 8002)">Bacterial Colony Count (BCC), Code 8002</b-checkbox>
        <label v-if="checkboxGroup.includes('Bacterial Colony Count (Code 8002)')">No. of Tests: <input type="number" v-model="testCountBCC"></label>
      </li>
      <!-- Add more items for the MICROBIOLOGY section if needed -->
    </ul>
  </div>
</div>

<!-- CYTOLOGY -->
<div class="columns">
  <div class="column">
    <h5 class="my-2">CYTOLOGY</h5>
    <ul>
      <li>
        <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Brain Crush Smear (Code 4741)">Brain Crush Smear (BCS), Code 4741</b-checkbox>
        <label v-if="checkboxGroup.includes('Brain Crush Smear (Code 4741)')">No. of Tests: <input type="number" v-model="testCountBCS"></label>
      </li>
      <li>
        <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Impression Smear (Code 4742)">Impression Smear (IS), Code 4742</b-checkbox>
        <label v-if="checkboxGroup.includes('Impression Smear (Code 4742)')">No. of Tests: <input type="number" v-model="testCountIS"></label>
      </li>
      <!-- Add more items for the CYTOLOGY section if needed -->
    </ul>
  </div>
</div>

<!-- REPRODUCTION -->
<div class="columns">
  <div class="column">
    <h5 class="my-2">REPRODUCTION</h5>
    <ul>
      <li>
        <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Rapid Visual Pregnancy Test (Code 6367)">Rapid Visual Pregnancy Test (RVPT), Code 6367</b-checkbox>
        <label v-if="checkboxGroup.includes('Rapid Visual Pregnancy Test (Code 6367)')">No. of Tests: <input type="number" v-model="testCountRVPT"></label>
      </li>
      <li>
        <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Semen Testing (Code 7989)">Semen Testing (ST), Code 7989</b-checkbox>
        <label v-if="checkboxGroup.includes('Semen Testing (Code 7989)')">No. of Tests: <input type="number" v-model="testCountST"></label>
      </li>
      <!-- Add more items for the REPRODUCTION section if needed -->
    </ul>
  </div>
</div>

<!-- ANIMAL FEED -->
<div class="columns">
  <div class="column">
    <h5 class="my-2">ANIMAL FEED</h5>
    <ul>
      <li>
        <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Feed Testing (Code 7988)">Feed Testing (FT) NIR Complete, Code 7988</b-checkbox>
        <label v-if="checkboxGroup.includes('Feed Testing (Code 7988)')">No. of Tests: <input type="number" v-model="testCountFT"></label>
      </li>
      <!-- Add more items for the ANIMAL FEED section if needed -->
    </ul>
  </div>
</div>

<!-- POSTMORTEM (NECROPSY) -->
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

<!-- OTHER SERVICES -->
<div class="columns">
  <div class="column">
    <h5 class="my-2">OTHER SERVICES</h5>
    <ul>
      <li>
        <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Farm Sample Collection (Code 4755)">Farm Sample Collection, Code 4755</b-checkbox>
        <label v-if="checkboxGroup.includes('Farm Sample Collection (Code 4755)')">No. of Tests: <input type="number" v-model="testCountFarmSample"></label>
      </li>
      <li>
        <b-checkbox v-model="checkboxGroup" type="is-success" native-value="Disposables (Code 8873)">Disposables, Code 8873 </b-checkbox>
        <label v-if="checkboxGroup.includes('Disposables (Code 8873)')">No. of Tests: <input type="number" v-model="testCountDisposables"></label>
      </li>
      <!-- Add more items for the OTHER SERVICES section if needed -->
    </ul>
  </div>
</div>




        

              <div class="content">
          <b>Selection:</b>

          <p>Client Name: {{ clientName }}</p>

          <p>Address: {{ clientAddress }}</p>

          <p>Email: {{ clientEmail }}</p>

          <p>Contact No: {{ clientContactNumber }}</p>

          <p> Submitted By : {{ submittedBy }} </p>

          <p>Test Urgency: {{ testUrgency }}</p>

          <p>Report Sent Via: {{ reportSentVia }}</p>

          <p>Animal Location : {{ animalLocation }}</p>

          <p>Consulting Veterinarian : {{ consultingVet }}</p>

          <p>Sample Type :  {{animalType}}</p> 
 
          <p v-if="animalType === 'OTHER'">Other(Sample Type) :  {{otherSampleType}}</p> 

          <p v-if="animalType === 'OTHER'">Other(Animal Type):  {{otherAnimalType}}</p> 

          <p>breed :  {{breed}}</p>

          <p>Age :  {{age}}</p>
          
          <p>Sex:  {{sex}}</p>

          <p> Sample Good on Receipt :  {{sampleGoodOnReceipt}}</p>

          <p>Date Sample Collected :  {{dateSampleCollected}}</p> 

          <p>Total no. samples submitted: {{ totalNumberOfSamplesSubmitted }}</p>

          <p>Total no. samples rejected: {{ totalNumberOfSamplesRejected }}</p>

          <p>Presenting Problems : {{ presentingProblems }}</p>

          <p>Test Requested :  {{testRequested}}</p>

          <p>Comments :  {{comments}}</p>

          <p>Lab Findings :  {{labFindings}}</p>


          <p>Sample Type: 
            <ul>
            <li v-for="(checkboxValue2, checkboxIndex2) in checkboxGroup2" :key="checkboxIndex2">
             
              
            {{ checkboxValue2 }}


            
             
            </li>
          </ul>
          </p>

          <p>Examination(s) Requested:
             <ul>
            <li v-for="(checkboxValue, checkboxIndex) in checkboxGroup" :key="checkboxIndex">
             
              
            {{ checkboxValue }}
             
            </li>
          </ul>

     


       
          
          </p>


          <h4>No. of Samples</h4>
          <ul>
              <li v-for="(checkboxValue2, checkboxIndex2) in checkboxGroup2" :key="checkboxIndex2">
            
            <p v-if="checkboxValue2.includes('FECAL')">
              No. of Samples(FECAL): {{ fecalInput }}
            </p>

            <p v-if="checkboxValue2.includes('SERUM')">
              No. of Samples(SERUM): {{ serumInput }}
            </p>

            <p v-if="checkboxValue2.includes('SEMEN')">
              No. of Samples(SEMEN): {{ semenInput }} 
            </p>

            <p v-if="checkboxValue2.includes('LIVER')">
              No. of Samples(LIVER): {{ liverInput }}
            </p>

            <p v-if="checkboxValue2.includes('SWABS')">
              No. of Samples(SWABS): {{ swabsInput }}
            </p>

            <p v-if="checkboxValue2.includes('SKIN SCRAPINGS')">
              No. of Samples(SKIN SCRAPINGS): {{ skinScrapingsInput }}
            </p>

            <p v-if="checkboxValue2.includes('URINE')">
              No. of Samples(URINE): {{ urineInput }}
            </p>

            <p v-if="checkboxValue2.includes('EAR SWABS')">
              No. of Samples(EAR SWABS): {{ earSwabsInput }}
            </p>

            <p v-if="checkboxValue2.includes('MILK')">
              No. of Samples(MILK): {{ milkInput }}
            </p>

            <p v-if="checkboxValue2.includes('IMPRESSION SMEAR')">
              No. of Samples(IMPRESSION SMEAR): {{ impressionSmearInput }}
            </p>

            <p v-if="checkboxValue2.includes('LYMPHNODE SMEAR')">
              No. of Samples(LYMPHNODE SMEAR): {{ lymphnodeSmearInput }}
            </p>

            <p v-if="checkboxValue2.includes('BRAIN CRUSH SMEAR')">
              No. of Samples(BRAIN CRUSH SMEAR): {{ brainCrushSmearInput }}
            </p>

            <p v-if="checkboxValue2.includes('WHOLE BLOOD')">
              No. of Samples(WHOLE BLOOD): {{ wholeBloodInput }}
            </p>

            <p v-if="checkboxValue2.includes('PLASMA')">
              No. of Samples(PLASMA): {{ plasmaInput }}
            </p>

            <p v-if="checkboxValue2.includes('BLOOD SMEAR')">
              No. of Samples(BLOOD SMEAR): {{ bloodSmearInput }}
            </p>

            <p v-if="checkboxValue2.includes('BIOPSY')">
              No. of Samples(BIOPSY): {{ biopsyInput }}
            </p>

            <p v-if="checkboxValue2.includes('CARCASS')">
              No. of Samples(CARCASS): {{ carcassInput }}
            </p>

            <p v-if="checkboxValue2.includes('ABORTED/FETAL')">
              No. of Samples(ABORTED/FETAL): {{ abortedFetalInput }}
            </p>

            <p v-if="checkboxValue2.includes('TISSUE/ORGAN')">
              No. of Samples(TISSUE/ORGAN): {{ tissueOrganInput }}
            </p>

            <p v-if="checkboxValue2.includes('FEED(SPECIFY)')">
              No. of Samples(FEED(SPECIFY)): {{ feedSpecifyInput }}
            </p>

            <p v-if="checkboxValue2.includes('OTHER')">
              No. of Samples(OTHER): {{ otherInput }}
            </p>
          </li>
          </ul>
              



          
          <h4>Test Count</h4>
          <ul>
  <li v-for="(checkboxValue, checkboxIndex) in checkboxGroup" :key="checkboxIndex">
    <!-- Parasitology -->
    <p v-if="checkboxValue.includes('Haemoparasite Examination (Code 4740)')">
      No. of Tests (HPE): {{ testCountHPE }}
    </p>

    <p v-if="checkboxValue.includes('Fecal Egg Counts (Code 4745)')">
      No. of Tests (FEC): {{ testCountFEC }}
    </p>

    <p v-if="checkboxValue.includes('Helminth Identification (Code 8000)')">
      No. of Tests (HI): {{ testCountHI }}
    </p>

    <p v-if="checkboxValue.includes('Mites Identification (Code 8001)')">
      No. of Tests (MI): {{ testCountMI }}
    </p>

    <!-- Serology -->
    <p v-if="checkboxValue.includes('ELISA Test (Code 4875)')">
      No. of Tests (ET): {{ testCountET }}
    </p>

    <p v-if="checkboxValue.includes('Rose Bengal Test (Code 6783)')">
      No. of Tests (RBT): {{ testCountRBT }}
    </p>

    <p v-if="checkboxValue.includes('Brucellosis (Code 8994)')">
      No. of Tests (Brucellosis): {{ testCountBrucellosis }}
    </p>

    <p v-if="checkboxValue.includes('Chlamydia (Code 8995)')">
      No. of Tests (Chlamydia): {{ testCountChlamydia }}
    </p>

    <p v-if="checkboxValue.includes('ProFlok (Code 8996)')">
      No. of Tests (ProFlok): {{ testCountProFlok }}
    </p>

    <!-- Hematology -->
    <p v-if="checkboxValue.includes('Full Blood Count (Code 4743)')">
      No. of Tests (FBC): {{ testCountFBC }}
    </p>

    <p v-if="checkboxValue.includes('Packed Cell Volume (Code 4744)')">
      No. of Tests (PCV): {{ testCountPCV }}
    </p>

    <!-- Clinical Biochemistry -->
    <p v-if="checkboxValue.includes('Comprehensive Diagnostic Profile (Code 7992)')">
      No. of Tests (CDP): {{ testCountCDP }}
    </p>

    <p v-if="checkboxValue.includes('Urine Test (Code 7995)')">
      No. of Tests (UT): {{ testCountUT }}
    </p>

    <!-- Microbiology -->
    <p v-if="checkboxValue.includes('Culture (Code 4746)')">
      No. of Tests (Culture): {{ testCountCulture }}
    </p>

    <p v-if="checkboxValue.includes('Culture & Sensitivity (Code 4748)')">
      No. of Tests (CS): {{ testCountCS }}
    </p>

    <p v-if="checkboxValue.includes('Bacterial Colony Count (Code 8002)')">
      No. of Tests (BCC): {{ testCountBCC }}
    </p>

    <!-- Cytology -->
    <p v-if="checkboxValue.includes('Brain Crush Smear (Code 4741)')">
      No. of Tests (BCS): {{ testCountBCS }}
    </p>

    <p v-if="checkboxValue.includes('Impression Smear (Code 4742)')">
      No. of Tests (IS): {{ testCountIS }}
    </p>

    <!-- Reproduction -->
    <p v-if="checkboxValue.includes('Rapid Visual Pregnancy Test (Code 6367)')">
      No. of Tests (RVPT): {{ testCountRVPT }}
    </p>

    <p v-if="checkboxValue.includes('Semen Testing (Code 7989)')">
      No. of Tests (ST): {{ testCountST }}
    </p>

    <!-- Animal Feed -->
    <p v-if="checkboxValue.includes('Feed Testing (Code 7988)')">
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
    <p v-if="checkboxValue.includes('Farm Sample Collection (Code 4755)')">
      No. of Tests (Farm Sample Collection): {{ testCountFarmSample }}
    </p>

    <p v-if="checkboxValue.includes('Disposables (Code 8873)')">
      No. of Tests (Disposables): {{ testCountDisposables }}
    </p>
  </li>
</ul>

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

        sampleType: '',
        
      checkboxGroup2: [], // Selected checkboxes
      sampleOptions: [
         'FECAL', 'SERUM', 'SEMEN', 'LIVER', 'SWABS', 'SKIN SCRAPINGS','URINE',
        'EAR SWABS', 'MILK', 'IMPRESSION SMEAR','LYMPHNODE SMEAR','BRAIN CRUSH SMEAR',
        'WHOLE BLOOD','PLASMA','BLOOD SMEAR', 'BIOPSY','CARCASS',
        'ABORTED/FETAL','TISSUE/ORGAN','FEED(SPECIFY)', 'OTHER'
      ],
      testCounts: {} // Store test counts for each sample typefor each sample type

      
       
      }
    },
  
     computed: {
      
        ...mapFields('labData', [

        'bioSubmissionsForm',

        
    'bioSubmissionsForm.clientName',
    'bioSubmissionsForm.clientAddress',
    'bioSubmissionsForm.clientEmail',
    'bioSubmissionsForm.clientContactNumber',
    'bioSubmissionsForm.testUrgency',
    'bioSubmissionsForm.submittedBy',
    'bioSubmissionsForm.reportSentVia',
    'bioSubmissionsForm.consultingVet',
    'bioSubmissionsForm.vetPhoneNumber',
    'bioSubmissionsForm.animalLocation',
    'bioSubmissionsForm.animalType',
    'bioSubmissionsForm.otherSampleType',
    'bioSubmissionsForm.otherAnimalType',
    'bioSubmissionsForm.breed',
    'bioSubmissionsForm.age',
    'bioSubmissionsForm.sex',
    'bioSubmissionsForm.sampleGoodOnReceipt',
    'bioSubmissionsForm.dateSampleCollected',
    'bioSubmissionsForm.totalNumberOfSamplesSubmitted',
    'bioSubmissionsForm.totalNumberOfSamplesRejected',
    'bioSubmissionsForm.presentingProblems',
    'bioSubmissionsForm.testRequested',
    'bioSubmissionsForm.comments',
    'bioSubmissionsForm.labFindings',
    'bioSubmissionsForm.fecalInput',
    'bioSubmissionsForm.serumInput',
    'bioSubmissionsForm.semenInput',
    'bioSubmissionsForm.liverInput',
    'bioSubmissionsForm.swabsInput',
    'bioSubmissionsForm.skinScrapingsInput',
    'bioSubmissionsForm.urineInput',
    'bioSubmissionsForm.earSwabsInput',
    'bioSubmissionsForm.milkInput',
    'bioSubmissionsForm.impressionSmearInput',
    'bioSubmissionsForm.lymphnodeSmearInput',
    'bioSubmissionsForm.brainCrushSmearInput',
    'bioSubmissionsForm.wholeBloodInput',
    'bioSubmissionsForm.plasmaInput',
    'bioSubmissionsForm.bloodSmearInput',
    'bioSubmissionsForm.biopsyInput',
    'bioSubmissionsForm.carcassInput',
    'bioSubmissionsForm.abortedFetalInput',
    'bioSubmissionsForm.tissueOrganInput',
    'bioSubmissionsForm.feedSpecifyInput',
    'bioSubmissionsForm.otherInput',
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
           samplesRequested:'bioSubmissionsForm.checkboxGroup2',
       
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

  bioSubmissionsCheckboxGroup2: {
    get() {
      // Return the value of bioSubmissionsForm.checkboxGroup
      return this.bioSubmissionsForm.checkboxGroup2;
    },
    set(value) {
      // Set the value of bioSubmissionsForm.checkboxGroup
      this.bioSubmissionsForm.checkboxGroup2 = value;
      console.log(value)
    },
  },
      }),
  
     },
  
     
  
    // },
  
    mounted() {
      let checkboxGroup = this.checkboxGroup;
        console.log(checkboxGroup);

        let checkboxGroup2 = this.checkboxGroup2;
        console.log(checkboxGroup2);
    },

  
    
  
    
  
    methods: {
      
        ...mapActions('labData', ['addNewBioSubmissionsRecord','getAllBioSubmissionsRecords', 'updateDataArray','updateSamplesDataArray', 'load']),
  
     loading() {
        return this.sampleInfoLoading 

      },

      getTestCount(sampleType) {
      // Get the test count for a specific sample type
      return this.testCounts[sampleType] || '';
    },


      async addItemsToList(){
        let checkboxGroup = this.checkboxGroup;
        let checkboxGroup2 = this.checkboxGroup2;
        console.log(checkboxGroup);
        console.log(checkboxGroup2);

        for (let i = 0; i < checkboxGroup.length; i++) {
          const element = checkboxGroup[i];
          const checkboxValue =[];

          checkboxValue.push(element)
          console.log(element);
          
        }

        for (let i = 0; i < checkboxGroup2.length; i++) {
          const element = checkboxGroup2[i];
          const checkboxValue2 =[];

          checkboxValue2.push(element)
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

            const newSamplesDataArray = this.checkboxGroup2;
            await this.updateSamplesDataArray(newSamplesDataArray);

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
        testUrgency:null,
        submittedBy: null,
        vetPhoneNumber: null,
        reportSentVia: null,
        animalLocation:null,
        testUrgency:null,
        animalType:null,
        otherSampleType:null,
        otherAnimalType:null,
        breed:null,
        age:null,
        sex:null,
        sampleGoodOnReceipt:null,
        dateSampleCollected:null,
        totalNumberOfSamplesSubmitted:null,
        totalNumberOfSamplesRejected:null,
        presentingProblems:null,
        testRequested:null,
        comments:null,
        labFindings:null,
        fecalInput: null,
        serumInput: null,
        semenInput: null,
        liverInput: null,
        swabsInput: null,
        skinScrapingsInput: null,
        urineInput: null,
        earSwabsInput: null,
        milkInput: null,
        impressionSmearInput: null,
        lymphnodeSmearInput: null,
        brainCrushSmearInput: null,
        wholeBloodInput: null,
        plasmaInput: null,
        bloodSmearInput: null,
        biopsyInput: null,
        carcassInput: null,
        abortedFetalInput: null,
        tissueOrganInput: null,
        feedSpecifyInput: null,
        otherInput: null,
        examsRequested:[],
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
        createdBy:null,
        receivedBy:null
          
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
  