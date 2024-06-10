<template>
    <div class="loader">
     
      <div class="spinner">
        <!-- You can use an SVG spinner here -->
        <!-- Here's an example of a simple SVG spinner: -->
        <svg class="spinner-icon" width="50" height="50" viewBox="0 0 40 40">
          <circle class="spinner-path" cx="20" cy="20" r="15" />
        </svg>

        <svg class="spinner-icon" width="20" height="20" viewBox="0 0 40 40">
          <circle class="spinner-path" cx="20" cy="20" r="15" />
        </svg>

        

        
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoadingScreen',
  };
  </script>
  
  <style scoped>
  /* CSS to style the loading screen */
  .loader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 10%;
    height: 20%;
    background-color: rgba(200, 243, 236, 0.9);
    z-index: 9999;
  }
  
  .loading-text {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .spinner {
    width: 50px;
    height: 50px;
  }
  
  .spinner-icon {
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  