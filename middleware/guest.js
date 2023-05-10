export default function ({ $auth, store, redirect }) {
  // If user is authenticated
  if (store.state.auth.currentUser) {
    if(store.state.auth.currentUser.role === 'admin'){
 
      console.log('admin')
      return redirect('/')
    }

    else{
      return redirect('/auth/login')
    }
  
  }
}