export default function ({ $auth, store, redirect }) {
  // If user is authenticated
  if (store.state.auth.currentUser) {
    if($auth.hasScope('admin')){
 
      console.log('admin')
      return redirect('/')
    }
  
  }
}