<template>
  <div>

   
    <b-tabs v-model="activeTab">


            <b-tab-item label="Tasks">
                <TasksTable/>
            </b-tab-item>

        </b-tabs>

  </div>
</template>

<script>
import TasksTable from '~/components/tables/tasks-table.vue'
import CattleTable from '~/components/tables/cattle-table.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  components: { TasksTable, CattleTable },

  data(){
    return{
      activeTab: 0,
      showBooks: false
    }
  },

  computed: {
     ...mapGetters('users', {
        loading: 'loading',
         Users: 'allUsers',
    }),
  },

  async created() {

//     function showNotifications(){
//    const notification = new Notification("Your Tasks Section", {
//        body: "This section helps create tasks, set priority level and assign tasks to people.",
//        icon: "http://localhost:3000/assets/litmas3.png",
       

//    }); 
// }

// if (Notification.permission === "granted") {
//     showNotifications();
// } else if(Notification.permission !== "denied") {
//     Notification.requestPermission().then(permission =>{
//         if (permission === "granted") {
//             showNotifications();
//         }
      
//     })
// }
  },

    methods:{
     ...mapActions('users', ['getAllUsers']),
  }

}
</script>

<style>

</style>