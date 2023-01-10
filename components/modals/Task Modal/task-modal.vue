<template>
  <div class="modal-card ">
    <header class="modal-card-head">
      <h3 class="modal-card-title">Task Snapshot</h3>
     
      <button type="button" class="delete" @click="close"></button>
    </header>
    <section class="modal-card-body has-background-white">
      <!-- Modal Content -->
      <div>
       <b-form v-model="taskForm" class="form">

         <h4> <span class="is-blue"> Enter Your Task Description</span></h4>

         <div class="columns">
            
           <div  class="column is-three-quarters">
            
           <b-input type="text" v-model="taskDescription" placeholder="task description"></b-input>
           </div>
         </div>

            <h4> <span class="is-blue"> Set Priority</span></h4>

         <div class="columns">
          
           <b-field  class="column is-full">
             
           <b-select :disabled="!taskDescription" v-model="selectPriority" placeholder="Select a Priority">
             <option value="High">High</option>
             <option value="Medium">Medium</option>
             <option value="Low">Low</option>
           </b-select>
           </b-field>
         </div>

        <h4> <span class="is-blue">  Assign Task To</span></h4>
        <div class="columns">
          
           <div  class="column is-three-quarters">
              
            <b-input type="text" :disabled="!selectPriority" v-model="assignTask" placeholder="assigned to"></b-input>
           </div>
         </div>

         <h4> <span class="is-blue">Date Assigned</span></h4>
          <div class="columns">
            
           <div  class="column is-three-quarters">
                
            <b-field label="">
            <b-datepicker
            :disabled="!assignTask"
                placeholder="Click to select..."
                v-model="dateAssigned"
                >
            </b-datepicker>
          </b-field>

           
           </div>
         </div>


          
           <h4> <span class="is-blue">Due Date</span></h4>
          <div class="columns">
            
           <div  class="column is-three-quarters">
                
            <b-field label="">
            <b-datepicker
            :disabled="!dateAssigned"
                placeholder="Click to select..."
                v-model="dueDate"
                >
            </b-datepicker>
          </b-field>

           
           </div>
         </div>


         
        <div :disabled="!dueDate" class=" card my-4">
             
           <div class=" summary-content">
             <h2 class="tag is-info is-light mb-4 summary">Summary</h2>
              <p class="yellow">Before adding your data, <br> confirm correct entries using the summary below </p>

            
        
            <p>Task Description : {{taskDescription}}</p>
            <p>Select Priority :  {{selectPriority}}</p>
            <p>Assign Task:  {{assignTask}}</p>
            <p>Date Assigned:  {{dateAssigned }}</p>
            <p>Due Date:  {{dueDate }}</p>
         
           </div>
         </div>



       <b-button :disabled="!assignTask" @click="onSubmit" type="is-info">Add </b-button>

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

import { mapActions, mapGetters } from 'vuex'
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'TaskModal',

   data() {
    return {
      isFullPage: true,
      taskForm: {
      
              taskDescription:null,
              selectPriority:null,
              assignTask:null,
              dateAssigned:null,
              dueDate:null         
        
      },
     
    }
  },

   computed: {

      ...mapFields('taskData', [
      'taskForm',
      'taskForm.taskDescription',
      'taskForm.selectPriority',
      'taskForm.assignTask',
      'taskForm.dateAssigned',
      'taskForm.dueDate'  
      
      
  ]),

      ...mapGetters('taskData', {
       task: 'selectedTask',
      taskLoading: 'loading',
    }),

   },

   

  // },

  mounted() {},

  

  methods: {
      ...mapActions('taskData', ['addNewTask','getAllTasks', 'load']),

   loading() {
      return this.taskLoading 
    },


    async onSubmit() {

       await this.$buefy.dialog.confirm({
        title: 'Add New Task Data',
        message: 'Proceed to add new entry?',
        cancelText: 'Cancel',
        confirmText: 'Yes, entries are correct',
        type: 'is-warning is-light',
        hasIcon: true,
        onConfirm: async () => {
          
         await this.addNewTask();

          this.$buefy.toast.open({
            duration: 3000,
            message: 'Task data Successfully Added!',
            position: 'is-top',
            type: 'is-info is-light',
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
        message: 'Task Snapshot closed.',
        duration: 2000,
        position: 'is-bottom',
        type: 'is-warning ',
      })
      this.$parent.close()
    },

    clearForm() {

     this.taskForm = {
      
              taskDescription:null,
              selectPriority:null,
              assignTask:null,
              dateAssigned:null,
              dueDate:null         
        
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
  font-size: 1.1rem;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
