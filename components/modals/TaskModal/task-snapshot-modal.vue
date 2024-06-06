<template>
  <div class="modal-card ">
    <header class="modal-card-head">
      <h3 class="modal-card-title">TaskSnapshot</h3>
     
      <button type="button" class="delete" @click="close"></button>
    </header>
    <section class="modal-card-body has-background-white">
      <!-- Modal Content -->
      <div>
       <b-form class="form">
         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue">  Task Description</span></h4>
            <p >
            <span class="tag tasks">  {{task.taskDescription}} </span>
              
            </p>
           </div>
         </div>

         <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue">  Priority</span></h4>
            <p  placeholder="Supplier Name">
              <span
          :class="[
            'tag',
            {
              'is-danger ':task.selectPriority ===  'High',
            },

            {
              'is-warning  ' :task.selectPriority ===  'Medium',
            },

            {
              'is-success ':task.selectPriority === 'Low',
            },
          ]"
          > {{task.selectPriority}} </span>
            </p>
           </div>
         </div>

        <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue"> Assigned To</span></h4>
            <p  placeholder="Assigned To">
             <span class="tag assignedTo">  {{task.assignTask}} </span>
            </p>
           </div>
         </div>

         <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue"> Date Assigned</span></h4>
            <p  placeholder="Date">
             <span class="tag is-info is-light">  {{task.dateAssigned}} </span>
            </p>
           </div>
         </div>

         <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue"> Due Date</span></h4>
            <p  placeholder="Date">
             <span class="tag is-danger is-light">  {{task.dueDate}} </span>
            </p>
           </div>
         </div>


          <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue">Status</span></h4>
            <p  placeholder="Assigned To">
            <span
          :class="[
            'tag',
            

            {
              'is-warning  ' :task.status ===  'Pending',
            },

            {
              'is-success ':task.status === 'Completed',
            },
          ]"
          >  {{task.status}} </span>
            </p>
           </div>
         </div>

       

       </b-form>

      </div>
    </section>
    <footer class="modal-card-foot">
      <b-button label="Close" @click="close" />
       <b-button
        label="Mark as Completed"
        type="is-info"
        icon-left="check"
        @click="onSubmit"
      /> 
    </footer>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'TaskSnapshotModal',

   data() {
    return {
      isFullPage: true,
      taskForm: {
      
              taskDescription:null,
              selectPriority:null,
              assignTask:null         
        
      },
     
    }
  },

  computed: {
     ...mapGetters('taskData', {
      task: 'selectedTask',
      taskLoading: 'loading',
    }),

    loading() {
      return this.taskLoading 
    },

  },

  mounted() {},

  

  methods: {
    ...mapActions('taskData', ['load', 'selectTask', 'completeTask']),

    async onSubmit() {
  
      await this.completeTask();

      const msg = await Promise.resolve('Task Completed!')
      this.$buefy.toast.open({
        message: msg, // 'Operation successful',
        duration: 5000,
        position: 'is-top',
        type: 'is-info',
      })
      this.$parent.close()
   
    },

    close() {
      this.$buefy.toast.open({
        message: 'Task Snapshot closed.',
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

.tasks{
  background-color: rgb(247, 204, 179);
}

.assignedTo{
  background-color: rgb(94, 241, 222);
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
