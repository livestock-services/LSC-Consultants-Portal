<template>
    <div>
      <b-tabs v-model="activeTab">
              
              <b-tab-item label="Users">
                   <b-tabs>
                  
                    <b-tab-item label="All Users" >
                        <CustomersTable/>
                    </b-tab-item>
                 </b-tabs>
              </b-tab-item>
  
          </b-tabs>
  
          
    </div>
  </template>
  
  <script>
  import CustomersTable from '~/components/tables/Users/customers-table.vue'
  
  export default {
    components: {  CustomersTable },
  
    data(){
      return{
        activeTab: 0,
        showBooks: false
      }
    }
  
  }
  </script>
  
  <style>
  
  </style>