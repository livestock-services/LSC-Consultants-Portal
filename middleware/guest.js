export default function ({ $auth, store, redirect }) {
  // If user is authenticated

  const protectedRoutes = {
    '/customers': ['Admin', 'Manager'],
    
    // Add more routes and corresponding roles as needed
  };

  if (store.state.auth.loggedInUser === 'Admin' || store.state.auth.loggedInUser === 'Manager') {
    return redirect('/customers')
  }

  
  if (store.state.auth.loggedInUser === 'Admin' || store.state.auth.loggedInUser === 'Manager' || store.state.auth.loggedInUser === 'Agro Consultant') {
    return redirect('/agro')
  }

  if (store.state.auth.currentUser) {
   
      return redirect('/')
    }

    else{
      return redirect('/auth/login')
    }
  
  }
