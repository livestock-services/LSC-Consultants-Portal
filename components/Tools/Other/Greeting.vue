<template>
    <div>
      <span class="greeting">
        
         
        
        <i v-if="this.greeting === 'Good Morning,'" class="mdi mdi-weather-sunset-up" ></i>
    
        <i v-if="this.greeting === 'Good Afternoon,'" class="mdi mdi-weather-sunset" ></i>
    
        <i v-if="this.greeting === 'Good Evening,'" class="mdi mdi-moon-waning-crescent" ></i>
        
        {{ greeting }} 

        
    
    </span>
    
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        greeting: ''
      };
    },
    mounted() {
      this.setGreeting();
    },
    methods: {
      setGreeting() {
        const hour = new Date().getHours();
  
        if (hour >= 5 && hour < 12) {
          this.greeting = 'Good Morning,';
        } else if (hour >= 12 && hour < 18) {
          this.greeting = 'Good Afternoon,';
        } else {
          this.greeting = 'Good Evening,';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .greeting {
    font-size: 20px;
    color: #333;
  }
  </style>
  