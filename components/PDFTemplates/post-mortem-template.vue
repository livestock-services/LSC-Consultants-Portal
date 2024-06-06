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
      var Users = computed(()=>this.users)
      return{
        SignedInUser,
        Users
      }
    },
    
    computed: {
        ...mapGetters('vetData', {
        vetPM:'selectedPostMortemRecord',
        vetLoading:'loading',
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
        var allUsers = this.users;
        var vetConsultingPerson = this.vetPM.createdBy;
        let vetCon = "";
        // Draw a border around the page
        doc.rect(margin, margin, pageWidth - 2 * margin, pageHeight - 2 * margin);

        doc.setFont("times");
       // Convert array to a comma-separated string
      

        

        

          const currentDate = new Date();  
          const year = currentDate.getFullYear();
          
          var startY = 104;
          var startZ = 205;
          var fontSize = 9;
          var font = doc.getFont("times"); // Times New Roman
          
          

        doc.addImage(logoImage, 'PNG', 10,10,35,35);

        
        doc.setFontSize(20); 
      
      
        doc.text('LIVESTOCK SERVICES COOPERATIVE SOCIETY', 45,20);

        doc.setFontSize(18); 
      
        doc.text('DEPARTMENT OF VETERINARY SERVICES', 45,30);

        doc.setFontSize(16); 
      
        doc.text('Post Mortem Report', 90,40);
       
        doc.setFontSize(14)
        doc.text(`Client Name: ${this.vetPM.vetPostMortemClientName}`, 10, 60);  

         doc.text(`Contact No: ${this.vetPM.vetPostMortemClientPhoneNumber}`, 10, 70);  

         doc.text(`Town: ${this.vetPM.vetPostMortemClientTown}`, 10, 80);  

         doc.text(`Location: ${this.vetPM.vetPostMortemClientLocation}`, 10, 90);  

        
         if (this.vetPM.vetPostMortemCategory !== 'Other') {
          doc.text(`Animal Category: ${this.vetPM.vetPostMortemCategory}`, 10, 100); 
         }
          


         if (this.vetPM.vetPostMortemCategory === 'Other') {
          doc.text(`Animal Category: ${this.vetPM.vetPostMortemOtherCategory}`, 10, 100); 
         }

          
         if (this.vetPM.vetPostMortemDiseases !== 'Other Disease') {
             
         if (this.vetPM.vetPostMortemDiseases !== null) {
          doc.text(`Disease/Cause Of Death: ${this.vetPM.vetPostMortemDiseases}`, 10, 110); 
         }
        }

         if (this.vetPM.vetPostMortemDiseases === 'Other Disease' || this.vetPM.vetPostMortemDiseases === null) {
          doc.text(`Disease/Cause Of Death: ${this.vetPM.vetPostMortemOtherDiseases}`, 10, 110); 
         }

         
        


        

         doc.text(`Date: ${this.vetPM.date}`, 10, 120);  

         function drawMultilineText(text, x, y, lineHeight) {
          const lines = doc.splitTextToSize(text, pageWidth - 5 * margin);
          for (let i = 0; i < lines.length; i++) {
            doc.text(lines[i], x, y + i * lineHeight);
          }
        }

        doc.setFontSize(14);
        doc.text(`History:`, 10, 130);
        doc.setFontSize(12); 
        doc.text(`${this.vetPM.vetPMHistory}`, 10, 135);



        doc.setFontSize(14);
        doc.text(`Post Mortem Findings:`, 10, 155);
        doc.setFontSize(12);
        doc.text(` ${this.vetPM.vetPMFindings}`, 10, 160); 



        doc.setFontSize(14);
        doc.text(`Tentative Diagnosis:`, 10, 180);
        doc.setFontSize(12);
        doc.text(`${this.vetPM.vetPMTentativeDiagnosis}`, 10, 185);



        doc.setFontSize(14);
        doc.text(`Recommended Treatment:`, 10, 205);
        doc.setFontSize(12);
        doc.text(`${this.vetPM.vetPMRecommendedTreatment}`, 10, 210); 


        doc.setFontSize(14);
        doc.text(`Comments/Remarks/Prescription:`, 10, 230);
        doc.setFontSize(12);
        drawMultilineText(` ${this.vetPM.vetPMComments}`, 10, 235, 8);

        // doc.text(`Comments/Remarks/Prescription:${this.vet.vetComments}`, 10, 155);

        

         doc.setFont('times','italics','bold')

        for (let i = 0; i < allUsers.length; i++) {

          if (allUsers[i].email === vetConsultingPerson) {
              console.log(allUsers[i].name)
              vetCon = allUsers[i].name

          } else {
            console.log("BOOKIE!")
          }
      
          
        }
         doc.setFontSize(14);
        doc.text(`Consulted By: Dr. ${vetCon}`, 10, 275);
       

        doc.setFontSize(9);
        doc.text('Printed from the Consultants & Laboratory Assistive Information Management System (CLAIMS)', 10, 285);

        doc.setFontSize(9);
        doc.text(`Date printed: ${currentDate}`, 10, 290);
        

      
        // Define the watermark content and styling
         

   


              
      //  

        
  
        // Customize the PDF layout as needed
  
        // Trigger PDF download
        doc.save(`Consultation for ${this.vetPM.vetPostMortemClientName}.pdf`);
      },
    },
  };
  </script>
    