<template>
    <div>
     
      <b-button class="mx-4" icon-left="adobe" icon-right="export"  type="is-danger " @click="generatePDF">PDF</b-button>

    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import jsPDF from 'jspdf';
  import logoImage from '~/assets/images/LSC2.png';

  import { mapActions, mapGetters } from 'vuex'
  
  export default {

    data(){
      var SignedInUser = computed(()=>this.user)
      return{
        SignedInUser
      }
    },
    
    computed: {
        ...mapGetters('labData', {
        bioSub: 'selectedBioSubmissionRecord',
        agroLoading: 'loading',
      }),

      ...mapGetters('users', {
          loading: 'loading',
          users: 'allUsers',
          user:'loggedInUser',

          
        }),
    },


    methods: {
      generatePDF() {
        const doc = new jsPDF();

        // Set the page dimensions and margins
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = 5; // Adjust margin as needed
      
        // Draw a border around the page
        doc.rect(margin, margin, pageWidth - 2 * margin, pageHeight - 2 * margin);

        doc.setFont("times");
        const examsRequestedString = this.bioSub.examsRequested;
        const samplesRequestedString = this.bioSub.samplesRequested; // Convert array to a comma-separated string
        const labPerson = this.bioSub.receivedBy;

        console.log(labPerson)
         

        const listItems = [
          "Haemoparasite Examination (Code 4740)",
          "Fecal Egg Counts (Code 4745)",
          "Helminth Identification (Code 8000)",
          "Mites Identification (Code 8001)",
          "ELISA Test (Code 4875)",
          "Rose Bengal Test (Code 6783)",
          "Brucellosis (Code 8994)",
          "Chlamydia (Code 8995)",
          "ProFlok (Code 8996)",
          "Full Blood Count (Code 4743)",
          "Packed Cell Volume (Code 4744)",
          "Comprehensive Diagnostic Profile (Code 7992)",
          "Urine Test (Code 7995)",
          "Culture (Code 4746)",
          "Culture & Sensitivity (Code 4748)",
          "Bacterial Colony Count (Code 8002)",
          "Brain Crush Smear (Code 4741)",
          "Impression Smear (Code 4742)",
          "Rapid Visual Pregnancy Test (Code 6367)",
          "Semen Testing (Code 7989)",
          "Feed Testing (Code 7988)",
          "Layers (Code 7999)",
          "Bovine (Code 4758)",
          "Small stock (Code 4760)",
          "Broilers (Code 4762)",
          "Pig (Code 4764)",
          "Free range (Code 6784)",
          "Farm Sample Collection (Code 4755)",
          "Disposables (Code 8873)"
        ];

       const sampleItems= [
         'FECAL', 'SERUM', 'SEMEN', 'LIVER', 'SWABS', 'SKIN SCRAPINGS','URINE',
        'EAR SWABS', 'MILK', 'IMPRESSION SMEAR','LYMPHNODE SMEAR','BRAIN CRUSH SMEAR',
        'WHOLE BLOOD','PLASMA','BLOOD SMEAR', 'BIOPSY','CARCASS',
        'ABORTED/FETAL','TISSUE/ORGAN','FEED(SPECIFY)', 'OTHER'
      ];

      var sampleCounts = [
      this.bioSub.fecalInput,
      this.bioSub.serumInput,
      this.bioSub.semenInput,
      this.bioSub.liverInput,
      this.bioSub.swabsInput,
      this.bioSub.skinScrapingsInput,
      this.bioSub.urineInput,
      this.bioSub.earSwabsInput,
      this.bioSub.milkInput,
      this.bioSub.impressionSmearInput,
      this.bioSub.lymphnodeSmearInput,
      this.bioSub.brainCrushSmearInput,
      this.bioSub.wholeBloodInput,
      this.bioSub.plasmaInput,
      this.bioSub.bloodSmearInput,
      this.bioSub.biopsyInput,
      this.bioSub.carcassInput,
      this.bioSub.abortedFetalInput,
      this.bioSub.tissueOrganInput,
      this.bioSub.feedSpecifyInput,
      this.bioSub.otherInput
      ];



        var testCounts = [
          this.bioSub.testCountHPE,
          this.bioSub.testCountFEC,
          this.bioSub.testCountHI,
          this.bioSub.testCountMI,
          this.bioSub.testCountET,
          this.bioSub.testCountRBT,
          this.bioSub.testCountBrucellosis,
          this.bioSub.testCountChlamydia,
          this.bioSub.testCountProFlok,
          this.bioSub.testCountFBC,
          this.bioSub.testCountPCV,
          this.bioSub.testCountCDP,
          this.bioSub.testCountUT,
          this.bioSub.testCountCulture,
          this.bioSub.testCountCS,
          this.bioSub.testCountBCC,
          this.bioSub.testCountBCS,
          this.bioSub.testCountIS,
          this.bioSub.testCountRVPT,
          this.bioSub.testCountST,
          this.bioSub.testCountFT,
          this.bioSub.testCountLayers,
          this.bioSub.testCountBovine,
          this.bioSub.testCountSmallStock,
          this.bioSub.testCountBroilers,
          this.bioSub.testCountPig,
          this.bioSub.testCountFreeRange,
          this.bioSub.testCountFarmSample,
          this.bioSub.testCountDisposables,
        ];


          const currentDate = new Date();  
          const year = currentDate.getFullYear();
          
          var startY = 104;
          var startZ = 205;
          var fontSize = 9;
          var font = doc.getFont("times"); // Times New Roman
          
          

        doc.addImage(logoImage, 'PNG', 10,10,35,35);

        
        doc.setFontSize(14); 
      
      
        doc.text('LIVESTOCK SERVICES COOPERATIVE SOCIETY', 65,20);

        doc.setFontSize(12); 
      
        doc.text('DEPARTMENT OF LABORATORY AND DIAGNOSTICS', 65,27);

        doc.setFontSize(12); 
      
        doc.text('Submission/Request Form', 65,35);
       
        doc.setFontSize(10)
        doc.text(`Client Name:${this.bioSub.clientName}`, 10, 45);  doc.text(`Sample(s) Received By:${labPerson}`, 110, 45);

         doc.text(`Bio Submission No:B/${year}/${this.bioSub.bioSubmissionNumber}`, 10, 50);  doc.text(`Sample(s) Submitted By:${this.bioSub.submittedBy}`, 110, 50);

         doc.text(`Address:${this.bioSub.clientAddress}`, 10, 55);  doc.text(`Test Urgency:${ this.bioSub.testUrgency}`, 110, 55);


         doc.text(`Contact No:${this.bioSub.clientContactNumber}`, 10, 60);   doc.text(`Total No. Examinations Requested:${examsRequestedString.length}`, 110, 60);

         doc.text(`Email:${this.bioSub.clientEmail}`, 10, 65);  doc.text(`Total No. Samples:${samplesRequestedString.length}`, 110, 65);

         doc.text(`Date Received:${this.bioSub.dateSubmitted}`, 10, 70); doc.text(`Total No. Samples Submitted:${this.bioSub.totalNumberOfSamplesSubmitted}`, 110, 70);

         doc.text(`Time Received:${this.bioSub.timeStamp}`, 10, 75);  doc.text(`Total No. Samples Rejected:${this.bioSub.totalNumberOfSamplesRejected}`, 110, 75);

         doc.text(`Results via:${this.bioSub.reportSentVia}`, 10, 80);

         doc.text(`Consulting Veterinarian:${this.bioSub.consultingVet}`, 10, 85);

         doc.text(`Presenting Problems:${this.bioSub.presentingProblems}`, 10, 90);

         doc.setFont('times','italics','bold')

      
         doc.setFont("bold");
         let x = 10;
         let y = 95;

         doc.setFontSize(10); 
         doc.text('EXAMINATIONS(S) REQUESTED',10, 98); 
         doc.text('SAMPLE(S) SUBMITTED',110, 98); 
       //  const textWidth = doc.getStringUnitWidth("Examination(s) Requested:") * fontSize / doc.internal.scaleFactor;
         
         // Set the line width for the underline
         //doc.setLineWidth(0.5);
         // Draw an underline below the text
        //doc.line(x, y + 2, x + textWidth, y + 2);

       //  const testCountString = this.bioSub.examsRequested.join(', '); // Convert array to a comma-separated string
       if (examsRequestedString !== null) {
          for (var i = 0; i < listItems.length; i++) {

            var total = (i + 1)
            var listItem = total + ". " + examsRequestedString[i];
            var totalItems =[]

            for (let j = 0; j < listItems.length; j++) {
              var element = listItems[j];
              var listItemCount =  testCounts[j];

               

              if (listItem.includes(element)) {

               
                totalItems.push(total);
               console.log(`${listItem}, No. Of Tests: ${listItemCount} is equal at position ${j}`);
                doc.setFontSize(fontSize);
            doc.text(`${listItem}, No. Of Tests: ${listItemCount}`, 10, startY + (i * 5)); // Adjust the y-coordinate to control the spacing between items
              }else{
                console.log("Value are not equal")
              }
              
            }

            
            console.log(examsRequestedString.length)
            console.log(testCounts[i])

            
           
           
          }

          
        } else {
         // doc.text('Test(s) Requested:', 10, 105);
        }


        if (samplesRequestedString !== null) {
          for (var i = 0; i < sampleItems.length; i++) {

            var total = (i + 1)
            var sampleItem = total + ". " + samplesRequestedString[i];
            var totalSampleItems =[]

            for (let j = 0; j < sampleItems.length; j++) {
              var sampleElement = sampleItems[j];
              var sampleItemCount =  sampleCounts[j];

               

              if (sampleItem.includes(sampleElement)) {

               
                totalSampleItems.push(total);
               console.log(`${sampleItem}, No. Of Samples: ${sampleItemCount} is equal at position ${j}`);
                doc.setFontSize(fontSize);
            doc.text(`${sampleItem}, No. Of Samples: ${sampleItemCount}`, 110, startY + (i * 5)); // Adjust the y-coordinate to control the spacing between items
              }else{
                console.log("Value are not equal")
              }
              
            }

            
            console.log(samplesRequestedString.length)
            console.log(sampleCounts[i])

            
           
           
          }

          
        } else {
         // doc.text('Test(s) Requested:', 10, 105);
        }



       




     
        doc.text('Invoice Number:___________________________', 10, 255);

        doc.text('Customer Account No:___________________________', 10, 260);

        doc.text('Total Amount Paid (ZMK):___________________________', 10, 265);

        doc.text('Payment Verified By:___________________________', 10, 270);

       

        doc.setFontSize(7);
        doc.text('Printed from the Consultants & Laboratory Assistive Information Management System (CLAIMS)', 10, 285);

        doc.setFontSize(7);
        doc.text(`Date printed: ${currentDate}`, 10, 290);
        

      
        // Define the watermark content and styling
         

   


              
      //  

        
  
        // Customize the PDF layout as needed
  
        // Trigger PDF download
        doc.save(`Submission/Request Form for ${this.bioSub.clientName}.pdf`);
      },
    },
  };
  </script>
  