<template>
    <div>
      <div class="card p-5 mr-5">
          <div class="card-body">
              <b-field grouped group-multiline>
        <b-select v-model="perPage">
          <option
            v-for="(option, index) in pageOptions"
            :key="index"
            :value="option"
          >
            {{ option }} entries
          </option>
        </b-select>
  
       <div class="buttons">
          <b-tooltip label="Add details of new tasks here" type="is-dark">
          <b-button class="mx-2" icon-left="plus" type="is-success" @click="addNewTask">Add New Record</b-button>
          </b-tooltip>
  
           <b-tooltip label="Refresh" type="is-dark">
           <b-button class="mx-2" icon-left="refresh" type="is-info" @click="refresh">Refresh</b-button>
           </b-tooltip>
        </div>
  
        
      </b-field>
      <b-table
        :data="tableData"
        :loading="loading"
        :paginated="isPaginated"
        :per-page="perPage"
        :current-page.sync="currentPage"
        :pagination-position="paginationPosition"
        :default-sort-direction="defaultSortDirection"
        mobile-cards
        default-sort="selectPriority"
        aria-next-label="Next Page"
        aria-previous-label="Previous Page"
        aria-page-label="Page"
        aria-current-label="Current Page"
      >
         <b-table-column
          v-slot="props"
          field="taskDescription"
          label="Client Name"
          searchable
          
        >
        <span class="tag tasks">  {{ props.row.taskDescription }} </span>
         
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>
  
       <b-table-column
          v-slot="props"
          field="selectPriority"
          label="Category"
          searchable
        >
  
        <span
            :class="[
              'tag',
              {
                'is-danger ': props.row.selectPriority ===  'High',
              },
  
              {
                'is-warning  ' : props.row.selectPriority ===  'Medium',
              },
  
              {
                'is-success ': props.row.selectPriority === 'Low',
              },
            ]"
            >  {{ props.row.selectPriority }} </span
          >
         
        </b-table-column>
        
         
  
  
          <b-table-column v-slot="props" field="date" label="Date" sortable>
  
           <span
            :class="[
              'tag',
            
  
              {
                'is-warning  ' : props.row.status ===  'Pending',
              },
  
              {
                'is-success ': props.row.status === 'Completed',
              },
            ]"
            > {{ props.row.status}}</span>
  
        </b-table-column> 
  
        
  
  
        
       <b-table-column v-slot="props" label="Options">
          <span class="buttons">
            <b-tooltip label="View more details about this task" type="is-dark" position="is-left">
            <b-button
              type="is-secondary-outline"
              icon-left="eye-check"
              @click="captureReceipt(props.row)"
              class="preview"
              ></b-button>
  
            </b-tooltip>
          </span>
        </b-table-column>
  
        
                  
  
        
  
  
        <template #empty>
  
          <b-tooltip  label="Once freshed, your details will appear here" type="is-dark">
          <h4 class="is-size-4 text-center has-text-centered">No Vet Data yet. &#x1F4DA;. Click the <span class="tag is-info"> refresh button</span> right above</h4>
          </b-tooltip>
  
        </template>
      </b-table>
          </div>
      </div>
    </div>
  
    
  </template>
  
  
  <script>
  import { mapActions, mapGetters } from 'vuex'
  import VetModal from '~/components/modals/Vet Modal/vet-modal.vue'
  import VetSnapshotModal from '~/components/modals/Vet Modal/vet-snapshot-modal.vue'
  export default {
    name: 'UnreceiptedDebitsTable',
  
    data() {  
    
      
      return {
  
        isPaginated: true,
        currentPage: 1,
        perPage: 10,
        pageOptions: [5, 10, 25, 50, 100],
        paginationPosition: 'bottom',
        defaultSortDirection: 'asc',
        sortIcon: 'arrow-up',
        sortIconSize: 'is-small',
      }
    },
  
  
    computed: {
      
      ...mapGetters('taskData', {
          loading: 'loading',
          tasks: 'allTasks',
        }),
      
       isEmpty() {
       return this.tasks.length === 0
       },
  
      
  
      isNames() {
        return this.names
      },
      
      tableData() {
        return this.isEmpty ? [] : this.tasks
      },
    },
  
    async created() {
    // await this.load()
     this.selectTask(this.tasks[0])
    },
  
    
  
    methods: {
     
  
       ...mapActions('taskData', ['addNewTask','getAllTasks', 'load', 'selectTask']),
  
       async refresh(){
      //  this.isLoading = true
        await this.getAllTasks();
     //   this.isLoading = false
   
      },
  
  
      captureReceipt(task) {
        this.selectTask(task)
        setTimeout(() => {
          this.$buefy.modal.open({
            parent: this,
            component: VetSnapshotModal,
            hasModalCard: true,
            trapFocus: true,
            canCancel: ['x'],
            destroyOnHide: true,
            customClass: '',
            onCancel: () => {
              this.$buefy.toast.open({
                message: `Snapshot closed`,
                duration: 5000,
                position: 'is-top',
                type: 'is-info',
              })
            },
          })
        }, 300)
      },
  
       addNewTask() {
        
        setTimeout(() => {
          this.$buefy.modal.open({
            parent: this,
            component: VetModal,
            hasModalCard: true,
            trapFocus: true,
            canCancel: ['x'],
            destroyOnHide: true,
            customClass: '',
            onCancel: () => {
              this.$buefy.toast.open({
                message: `Task Snapshot closed!`,
                duration: 5000,
                position: 'is-top',
                type: 'is-info',
              })
            },
          })
        }, 300)
      },
    }
  
   
  
    
  }
  
    
  </script>
  
  <style scoped>
  .grid {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
  }
  
  .tasks{
    background-color: rgb(247, 204, 179);
  }
  
  .assignedTo{
    background-color: rgb(94, 241, 222);
  }
  
  .is-proc{
   background-color: rgb(78, 159, 252);
   color: aliceblue;
  }
  
  .preview{
    background-color: rgb(177, 219, 243);
  }
  
  .content-area {
    grid-column: 2/3;
  }
  
  .text-center{
    margin-left: 100px;
  }
  </style>
  