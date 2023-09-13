<template>
    <div class="modal-card ">
      <header class="modal-card-head">
        <h3 class="modal-card-title">Bio Submission Snapshot</h3>
       
        <button type="button" class="delete" @click="close"></button>
      </header>
      <section class="modal-card-body has-background-white">
        <!-- Modal Content -->
        <div>
         <b-form class="form">
  
            <div class="columns">
             <div  class="column is-half">
              
              <p >
               <span class="tag earTagID "> Client Name: {{ bioSub.clientName}} </span>
               
               
              </p>

              <p >
               <span class="tag earTagID "> Submission No: {{ bioSub.bioSubmissionNumber}} </span>
               
               
              </p>

              <p >
               <span class="tag earTagID "> Address: {{ bioSub.clientAddress}} </span>
               
               
              </p>

              <p >
               <span class="tag earTagID "> Contact No: {{ bioSub.clientContactNumber}} </span>
               
               
              </p>

              <p >
               <span class="tag earTagID "> Date Submitted: {{ bioSub.dateSubmitted}} </span>
               
               
              </p>

              <h5>Examination(s) Requested:</h5>
              <p >
                <span >
                  <ul>
                  <li class="tag earTagID " v-for="(exam, index) in bioSub.examsRequested" :key="index">
                    {{ exam }}
                  </li>
                </ul>
                </span>
               
              </p>
  
               <!-- <b-input v-model="earTagID" class="toggle"></b-input> -->
             </div>
           </div>

           
  
     
  
         <bio-submissions-template/>
          
           
  
         
  
         </b-form>


        
  
        </div>
      </section>
      <footer class="modal-card-foot">
         <b-button label="Close" @click="close" />
  
  
       
      </footer>
    </div>
  </template>
  
  <script>
   import { ref, onMounted } from 'vue';
  import { PDFDocument, rgb } from 'pdf-lib';
   import { mapActions, mapGetters } from 'vuex'
  import { computed } from 'vue';
import bioSubmissionsTemplate from '~/components/PDF Templates/bio-submissions-template.vue';
  
  export default {
  components: { bioSubmissionsTemplate },
    name: 'BioSubmissionSnapshotModal',


     data() {
        
      return {
       
        isFullPage: true,
  
        
       
      }
    },
  
    computed: {
       ...mapGetters('labData', {
        bioSub: 'selectedBioSubmissionRecord',
        agroLoading: 'loading',
      }),
  
      loading() {
        return this.agroLoading 
      },
  
    },
  
    mounted() {
        onMounted(async () => {
    const pdfBytes = await generatePDF();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    pdfUrl.value = URL.createObjectURL(blob);
    generateAndDownloadPDF();
  });

    },
  
  
  
    methods: {
      ...mapActions('labData', ['load', 'selectBioSubmissionRecord']),
        
      async  generatePDF() {
  // Create a new PDF document
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 400]); // Specify page size (width x height)
  var SignedInUser = computed(()=>this.bioSub)
  // Draw text on the page
  page.drawText(`${SignedInUser}`, {
    x: 50,
    y: 350,
    size: 30,
    color: rgb(0, 0, 0), // Text color (black)
  });

  // Serialize the PDF to bytes
  const pdfBytes = await pdfDoc.save();

  // Create a Blob from the PDF bytes
  const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });

  // Create a URL for the Blob
  const pdfUrl = URL.createObjectURL(pdfBlob);

  // Optionally, open the PDF in a new tab or trigger a download
  window.open(pdfUrl, '_blank'); // Open in a new tab
  // or
  // const link = document.createElement('a');
  // link.href = pdfUrl;
  // link.download = 'my_document.pdf';
  // link.click();
},


  async generateAndDownloadPDF() {
   
    const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([400, 400]);
      const pdfUrl = ref('');

      // Get the dynamic data from Vuex
      const dynamicText = this.dynamicData; // Replace with your actual data retrieval logic

      // Draw the dynamic text on the PDF page
      page.drawText(`Dynamic Text: ${dynamicText}`, {
        x: 50,
        y: 350,
        size: 30,
        color: rgb(0, 0, 0),
      });

    const pdfBytes = await pdfDoc.save();
   const blob = new Blob([pdfBytes], { type: 'application/pdf' });
   const url = URL.createObjectURL(blob);
   pdfUrl.value = url;
 },

 
      
  
      async onSubmit() {
         await this.putagroInTreatment();
        const msg = await Promise.resolve('Operation successful')
        this.$buefy.toast.open({
          message: msg, // 'Operation successful',
          duration: 5000,
          position: 'is-top',
          type: 'is-info',
        })
        this.$parent.close()
      },
  
       async onTreated() {
        
        await this.markagroAsTreated();
         const msg = await Promise.resolve('Operation successful')
       
        this.$buefy.toast.open({
          message: msg, // 'Operation successful',
          duration: 5000,
          position: 'is-top',
          type: 'is-info',
        })
        this.$parent.close()
      },
  
  
   inagro(){
    console.log("Preggo!")
  },
  
   onMortality(){
    console.log("Pegged!")
  },
  
      close() {
        this.$buefy.toast.open({
          message: 'Lab Snapshot closed.',
          duration: 2000,
          position: 'is-top',
          type: 'is-warning ',
        })
        this.$parent.close()
      },
    },
  }
  </script>
  
  <style scoped>
  .modal-width-auto {
    width: auto;
  }
  
  .age{
    background-color: rgb(217, 219, 250);
  }
  
  .earTagID{
    background-color: rgb(157, 248, 236);
  }
  
  .breed{
    background-color: rgb(196, 252, 170);
  }
  
  .is-blue{
    color: rgb(0, 118, 228);
  font-family:'Times New Roman', Times, serif;
    font-size: 1.2rem;
    
  }
  
  p{
    font-size: 1.5rem;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  </style>
  