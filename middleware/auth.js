export default function ({ route, store, redirect }) {
  // If the user is not authenticated
  
  if (!store.state.auth.currentUser) {
    return redirect('/auth/login')
  }
}