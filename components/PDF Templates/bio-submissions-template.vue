<template>
    <div>
      <h1>Data from Database</h1>
      <pre>{{ bioSub }}</pre>
      <button @click="generatePDF">Generate PDF</button>
    </div>
  </template>
  
  <script>
  import jsPDF from 'jspdf';
  import logoImage from '~/assets/images/LSC2.png';

  import { mapActions, mapGetters } from 'vuex'
  
  export default {
    
    computed: {
        ...mapGetters('labData', {
        bioSub: 'selectedBioSubmissionRecord',
        agroLoading: 'loading',
      }),
    },


    methods: {
      generatePDF() {
        const doc = new jsPDF();
        const examsRequestedString = this.bioSub.examsRequested; // Convert array to a comma-separated string

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
          var startY = 105;
          var startZ = 205;
          var fontSize = 11;
          var font = doc.getFont("times"); // Times New Roman
          

        doc.addImage(logoImage, 'PNG', 10,5,35,35);

        
        doc.setFontSize(14); 
      
      
        doc.text('LIVESTOCK SERVICES COOPERATIVE SOCIETY', 65,20);

        doc.setFontSize(12); 
      
        doc.text('DEPARTMENT OF LABORATORY AND DIAGNOSTICS', 65,27);

        doc.setFontSize(12); 
      
        doc.text('Submission/Request Form', 65,35);
       
        
        doc.text('Client Name:', 10, 60);  doc.text((this.bioSub.clientName), 35, 60);

         doc.text('Bio Submission No:', 10, 70);  doc.text('B/'+`${year}`+'/'+ (this.bioSub.bioSubmissionNumber), 50, 70);

         doc.text('Date Submitted:', 10, 80);  doc.text((this.bioSub.dateSubmitted), 42, 80);

         doc.text('Time Stamp:', 10, 90);  doc.text((this.bioSub.timeStamp), 35, 90);

         doc.text('Test(s) Requested:',10, 100); 

       //  const testCountString = this.bioSub.examsRequested.join(', '); // Convert array to a comma-separated string
       if (examsRequestedString !== null) {
          for (var i = 0; i < listItems.length; i++) {
            var listItem = (i + 1) + ". " + examsRequestedString[i];
           

            for (let j = 0; j < listItems.length; j++) {
              var element = listItems[j];
              var listItemCount =  testCounts[j];

              if (listItem.includes(element)) {
               console.log(`${listItem}, No. Of Tests: ${listItemCount}`);
                doc.setFontSize(fontSize);
            doc.text(`${listItem}, No. Of Tests: ${listItemCount}`, 10, startY + (i * 7)); // Adjust the y-coordinate to control the spacing between items
              }else{
                console.log("Value are not equal")
              }
              
            }

            console.log(listItem)
            console.log(testCounts[i])

            if ((listItemCount !== null && listItemCount !== undefined) ) {
              
             
              
            }

           
           
          }

          
        } else {
         // doc.text('Test(s) Requested:', 10, 105);
        }



       




     
        doc.text('Invoice Number:___________________________', 10, 265);




              
      //  

        
  
        // Customize the PDF layout as needed
  
        // Trigger PDF download
        doc.save(`Submission/Request Form for ${this.bioSub.clientName}.pdf`);
      },
    },
  };
  </script>
  