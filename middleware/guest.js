export default function ({ $auth, store, redirect }) {
  // If user is authenticated
  if (store.state.auth.currentUser) {
   
      return redirect('/')
    }

    else{
      return redirect('/auth/login')
    }
  
  }
