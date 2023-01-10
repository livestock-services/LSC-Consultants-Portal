<template>
  <div>
    <div class="card mobile-cards p-5 mr-8">
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

        <!-- <b-tooltip label="Add details of each cow here" type="is-dark">
           <b-button class="mx-2" icon-left="plus-circle" type="is-success" @click="addNewCattle">Add New Cattle</b-button>
        </b-tooltip> -->
       
        

          <b-tooltip label="Refresh" type="is-dark">
             <b-button class="mx-2" icon-left="refresh" type="is-info"  @click="refresh">Refresh</b-button>
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
  
       <!-- :sticky-header="stickyHeaders" -->

        <b-table-column
        v-slot="props"
        field="cattleBreed"
        label="Ear Tag ID"
        searchable
        
      >
      
      <span class="tag earTagID ">  {{ props.row.earTagID }} </span>

       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>
    
       <b-table-column
        v-slot="props"
        field="cattleBreed"
        label="Breed"
        sortable
        
      >
      
       <span class="tag breed "> {{ props.row.cattleBreed }} </span>

       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>




      <!-- <b-table-column
        v-slot="props"
        field="dateOfBirth"
        label="D.O.B"
        sortable
      >
       <span class="tag  is-light">  {{ props.row.cattleDateOfBirth }} </span>
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="datePurchased"
        label="Date Purchased"
        sortable
      >
        <span class="tag  is-light"> {{ props.row.datePurchased }} </span>
      </b-table-column> -->

       <b-table-column
        v-slot="props"
        field="age"
        label="Age"
        sortable
      >
        <span class="tag  is-light"> {{ props.row.cattleAge }} </span>
      </b-table-column>


      <b-table-column
        v-slot="props"
        field="cattleSex"
        label="Sex"
         sortable
      >
        <span
          :class="[
            'tag',
            {
              'is-info ': props.row.cattleSex === 'Male'
            },

       
            {
              'pink' : props.row.cattleSex === 'Female' ,
            },

           
          ]"
          >  {{ props.row.cattleSex }} </span>
      </b-table-column>

      <!-- <b-table-column
        v-slot="props"
        field="cattleWeight"
        label=" Weight (KG)"
        sortable
      >
        <span class="tag is-primary is-light"> {{ props.row.cattleWeight }} Kg</span> 
      </b-table-column> -->

      <!-- <b-table-column
        v-slot="props"
        field="supplierName"
        label="Supplier"
        sortable
      >
       {{ props.row.supplierName }} 
      </b-table-column> -->

       <!-- <b-table-column
        v-slot="props"
        field="supplierName"
        label="Total Cumulative Milking Yield"
        sortable
      >
       <span class="tag is-primary ">  {{ props.row.totalDMR }} </span>
      </b-table-column> -->

    
        <b-table-column
        v-slot="props"
        field="earTagColor"
        label="Ear Tag "
        searchable
      >

      <span
          :class="[
            'tag',
            {
              'is-danger ': props.row.earTagColor ===  'Red',
            },

            {
              'is-info ': props.row.earTagColor ===  'Blue',
            },
            {
              'is-warning  ' : props.row.earTagColor ===  'Yellow',
            },

            {
              'is-primary  ' : props.row.earTagColor ===  'Purple',
            },

            {
              'is-success ': props.row.earTagColor === 'Green' || props.row.earTagColor === 'green',
            },
          ]"
          >  {{ props.row.earTagColor }} </span
        >
       
      </b-table-column>

     <b-table-column
        v-slot="props"
        field="cattleStatus"
        label="Status"
        searchable
      >

      <span
          :class="[
            'tag',
            {
              'is-danger is-light': props.row.cattleStatus ===  'Culled',
            },

            {
              'is-warning is-light ' : props.row.cattleStatus ===  'Under Treatment' ,
            },

            {
              'is-primary is-light ' : props.row.cattleStatus ===  'Calfing' || props.row.cattleStatus === 'Calving' ,
            },

            {
              'is-success is-light': props.row.cattleStatus === 'Treated' || props.row.cattleStatus === 'Healthy',
            },
          ]"
          >  {{ props.row.cattleStatus }} </span
        >
       
      </b-table-column>
      
      
     <b-table-column v-slot="props" label="Options">
        <span class="buttons">
         
          <b-tooltip label="View more details about this cow" type="is-dark" position="is-left">
          <b-button
            type="is-secondary-outline"
            icon-left="eye-check"
            @click="captureReceipt(props.row)"
            class="preview"
            ></b-button
          >
          </b-tooltip>
          
        </span>

        
      </b-table-column>

       <!-- <b-table-column v-slot="props" label="">
        <span class="buttons">
          
          <b-tooltip label="Delete" type="is-dark">
          <b-button
            type="is-secondary-outline "
            icon-left="delete"
            @click="captureReceipt(props.row)"
            class="del"
            ></b-button
          >
          </b-tooltip>

          
        </span>
      </b-table-column> -->

      


      
                

      


      <template #empty>
       
       <b-tooltip  label="Once freshed, your details will appear here" type="is-dark">
          <h4 class="is-size-4 text-center has-text-centered">No Cattle Data yet. &#x1F4DA;. Click the <span class="tag is-info"> refresh button</span> right above</h4>
       </b-tooltip>
      </template>
    </b-table>
        </div>
    </div>
  </div>

  
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
import CattleModal from '~/components/modals/Cattle Modal/cattle-modal.vue'
import CattleSnapshotModal from '~/components/modals/Cattle Modal/cattle-snapshot-modal.vue'
export default {
  name: 'UnreceiptedDebitsTable',

  data() {  
  
    
    return {
       stickyHeaders: true,
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
    
    ...mapGetters('cattleData', {
        loading: 'loading',
        cattles: 'allBulls',
      }),
    
     isEmpty() {
     return this.cattles.length === 0
     },

    

    isNames() {
      return this.names
    },
    
    tableData() {
      return this.isEmpty ? [] : this.cattles
    },
  },

  async created() {
  // await this.load()
   this.selectCattle(this.cattles[0])



  },

  

  methods: {
   

     ...mapActions('cattleData', ['addNewCattle','getAllCattle', 'load', 'selectCattle']),

     async refresh(){
    //  this.isLoading = true
      await this.getAllCattle();
   //   this.isLoading = false
 
    },


    captureReceipt(cattle) {
      this.selectCattle(cattle)
      setTimeout(() => {
        this.$buefy.modal.open({
          parent: this,
          component: CattleSnapshotModal,
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

     addNewCattle() {
      
      setTimeout(() => {
        this.$buefy.modal.open({
          parent: this,
          component: CattleModal,
          hasModalCard: true,
          trapFocus: true,
          canCancel: ['x'],
          destroyOnHide: true,
          customClass: '',
          onCancel: () => {
            this.$buefy.toast.open({
              message: `Cattle Snapshot closed!`,
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

.is-proc{
 background-color: rgb(78, 159, 252);
 color: aliceblue;
}

.preview{
  background-color: rgb(177, 219, 243);
}

.earTagID{
  background-color: rgb(157, 248, 236);
}
.breed{
  background-color: rgb(196, 252, 170);
}
.pink{
  background-color: pink;
}
.del{
  background-color: rgb(214, 145, 145);
}

.content-area {
  grid-column: 2/3;
}

.text-center{
  margin-left: 100px;
}
</style>
