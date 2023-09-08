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
       

        doc.addImage(logoImage, 'PNG', 10,5,35,35);

        doc.setFontSize(14); 
        doc.text('LIVESTOCK SERVICES COOPERATIVE SOCIETY', 65,20);

        doc.setFontSize(12); 
        doc.text('DEPARTMENT OF LABORATORY AND DIAGNOSTICS', 65,30);

        doc.setFontSize(12); 
        doc.text('Submission/Request Form', 65,45);
       
        
        doc.text('Client Name:', 10, 60);  doc.text(JSON.stringify(this.bioSub.clientName), 35, 60);

         doc.text('Bio Submission No:', 10, 70);  doc.text(JSON.stringify(this.bioSub.bioSubmissionNumber), 50, 70);

         doc.text('Date Submitted:', 10, 80);  doc.text(JSON.stringify(this.bioSub.dateSubmitted), 42, 80);

         doc.text('Time Stamp:', 10, 90);  doc.text(JSON.stringify(this.bioSub.timeStamp), 35, 90);

        
  
        // Customize the PDF layout as needed
  
        // Trigger PDF download
        doc.save('my_pdf_document.pdf');
      },
    },
  };
  </script>
  