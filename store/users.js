/* eslint-disable prettier/prettier */
import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'
import {    SET_LOADING,
            SET_USERS,
            ADD_NEW_USER,
            GET_ALL_USERS, 
            SET_CURRENT_USER,
            SET_LOGGED_IN_USER,
            SET_SELECTED_USER, 

            //------ROLES-------//
            MAKE_ADMIN_USER,
            MAKE_MANAGER_USER,
            MAKE_VET_USER,
            MAKE_AGRO_USER,
            MAKE_LAB_USER,
            MAKE_NUTRITION_USER,
            MAKE_AI_USER,
            MAKE_ROTO_USER,
            MAKE_FENCE_USER,
            MAKE_FISH_USER,
            //================//
            SET_ALL_PAID_USERS, 
            GET_ALL_PAID_USERS, 
            SET_SELECTED_PAID_USER,

            SET_ALL_PENDING_USERS, 
            GET_ALL_PENDING_USERS, 
            SET_SELECTED_PENDING_USER,
        } 
        
        from '@/helpers/mutation-types'


// import { _ } from 'lodash'
export const state = () => ({
    loading: false,
    all: [],
    users: [],
    paidUsers:[],
    pendingUsers:[],
    user:null,
    loggedInUser:null,
    selectedUser:null,

    userForm: {
        name:null,
        email: null,
        password: null,
        
      },

      userLoginForm: {
        
        email: null,
        password: null,
        
      },

    
})

export const getters = {
    getField,

    loading(state) {
        return state.loading
    },

    allUsers(state) {
        return state.users
    },

    paidUsers(state){
        return state.paidUsers
    },

    pendingUsers(state){
        return state.pendingUsers
    },
    

     currentUser(state) {
        return state.user
    },

    loggedInUser(state) {
        return state.loggedInUser
    },
    selectedUser(state) {
        return state.selectedUser
      },
}

export const mutations = {
    updateField,

    [GET_ALL_USERS](state, payload) {
        state.users = payload
    },


    [SET_USERS](state, payload) {
        state.users = payload
    },
    [SET_CURRENT_USER](state, selectedUser) {
        state.user = selectedUser
    },

    [SET_LOGGED_IN_USER](state, newLoggedInUser) {
        state.loggedInUser = newLoggedInUser
        
    },
    

    
    [SET_SELECTED_USER](state, registeredUser) {
        state.selectedUser = registeredUser
      },

    [SET_LOADING](state, payload) {
        state.loading = payload
    },

    [ADD_NEW_USER](state, registeredUser) {
        state.users.push (registeredUser)
    },


    //-----------------------------------------------------MUTATIONS FOR ROLE CHANGES----------------------------------//
        [MAKE_ADMIN_USER](state, putResponse) {
        state.selectedUser = putResponse
        state.selectedUser.role = "Admin"
        },

        [MAKE_MANAGER_USER](state, putResponse) {
        state.selectedUser = putResponse
        state.selectedUser.role = "Manager"
        },

        [MAKE_VET_USER](state, putResponse) {
        state.selectedUser = putResponse
        state.selectedUser.role = "Vet Consultant"
        },

        [MAKE_AGRO_USER](state, putResponse) {
        state.selectedUser = putResponse
        state.selectedUser.role = "Agro Consultant"
        },

        [MAKE_LAB_USER](state, putResponse) {
        state.selectedUser = putResponse
        state.selectedUser.role = "Lab Consultant"
        },

        [MAKE_NUTRITION_USER](state, putResponse) {
        state.selectedUser = putResponse
        state.selectedUser.role = "Nutrition Consultant"
        },

        [MAKE_AI_USER](state, putResponse) {
        state.selectedUser = putResponse
        state.selectedUser.role = "AI Consultant"
        },

        [MAKE_ROTO_USER](state, putResponse) {
        state.selectedUser = putResponse
        state.selectedUser.role = "Irrigation Consultant"
        },

        [MAKE_FENCE_USER](state, putResponse) {
        state.selectedUser = putResponse
        state.selectedUser.role = "Fence Consultant"
        },

        [MAKE_FISH_USER](state, putResponse) {
        state.selectedUser = putResponse
        state.selectedUser.role = "Fish Consultant"
        },
    

    //----------------------PAID USERS-------------------------------//
    [SET_SELECTED_PAID_USER](state, payload) {
        state.selectedUser = payload
    },

    [GET_ALL_PAID_USERS](state, payload) {
        state.paidUsers = payload
    },

    [SET_ALL_PAID_USERS](state, payload) {
        state.paidUsers = payload
    },


    //--------------------PENDING USERS--------------------//

    [SET_SELECTED_PENDING_USER](state, payload) {
        state.selectedUser = payload
    },

    [GET_ALL_PENDING_USERS](state, payload) {
        state.pendingUsers = payload
    },

    [SET_ALL_PENDING_USERS](state, payload) {
        state.pendingUsers = payload
    },

}

export const actions = {

    async getAllUsers({  commit }) {
        try {
            commit(SET_LOADING, true)


            const { data:fetchUsers } = await api.get(`/auth/allUsers`)

            console.log(fetchUsers.data)

            commit(GET_ALL_USERS, fetchUsers.data);

            console.log(this.$auth.user.email);

           

            for (let i = 0; i <= fetchUsers.data.length; i++) {
                
                let userEmail = fetchUsers.data[i].email;
                let loggedInPerson = {}

                if ((this.$auth.user.email == userEmail && fetchUsers.data[i].role === "Admin") || (this.$auth.user.email == userEmail && fetchUsers.data[i].role !== "Admin")) {
                  //  console.log(fetchUsers.data[i].name + "is" +"" +"an" +""+ "admin");
                   loggedInPerson = fetchUsers.data[i];

                    var newLoggedInUser = loggedInPerson;
                    console.log(newLoggedInUser)
                    commit(SET_LOGGED_IN_USER, newLoggedInUser )

                    console.log(newLoggedInUser);
                } else {
                   console.log("Well that didn't work!")
                }
                
            }


         //  console.log(fetchUsers.data.role.billingCycle)
            
            // const specialfilteredUSERS = fetchUsers.data.filter( usr => 
            //      usr.billingCycle === 'Monthly'
            //    );

            //    const pendingUsers = fetchUsers.data.filter( peu => 
            //     peu.paymentStatus === 'Pending'
            //   );

            //   const paidUsers = fetchUsers.data.filter( pau => 
            //     pau.paymentStatus === 'Paid'
            //   );


            //    console.log(specialfilteredUSERS);
            //    console.log(pendingUsers);
            //    console.log(paidUsers)

          //  commit(SET_USERS, fetchUsers.data);

            

            // commit(GET_ALL_PAID_USERS, paidUsers);

            commit(SET_LOADING, false)
   
        } catch (error) {
            commit(SET_LOADING, false)
          //  //throw error
        }
    },

    async getUser({state, commit }) {
        try {
            commit(SET_LOADING, true)

             const selectedUser = state.user
            // //  const newPA = rootGetters['finance/selectedPermitApplication'] 
            //    console.log(selectedUser)


            const fetchUser = await api.get(`/auth/User/${selectedUser.userID}`)
            console.log(fetchUser.data)

            commit(SET_CURRENT_USER, fetchUser.data)
            commit(SET_LOADING, false)

        } catch (error) {
            commit(SET_LOADING, false)
          //  //throw error
        }
    },

     //ADD NEW TASK TO ALL TASKS
     async addNewUser({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const registeredUser = cloneDeep(state.userForm);

           // newTask.createdBy = this.$auth.user.email;
           
           console.log (registeredUser);

           
            const response = await api.post(`/auth/register`, registeredUser);

            console.log(response.data);

            commit(ADD_NEW_USER, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error('Cannot Create New User. Check Your Details.');
        }
    },


     //ADD NEW TASK TO ALL TASKS
     async loginUser({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const loginUser = cloneDeep(state.userLoginForm);

           // newTask.createdBy = this.$auth.user.email;
           
           console.log (loginUser);

           
            const response = await api.post(`/auth/login`, loginUser);

            console.log(response.data);

            console.log(response.data.role);

            // commit(LOGIN_USER, response.data);
            
            // commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error('Cannot Create New User. Check Your Details.');
        }
    },


     selectUser ({ commit }, selectedUser) {
         try {
            
             commit(SET_CURRENT_USER, selectedUser)
             console.log(selectedUser._id)
             console.log(selectedUser.role)

         } catch (error) {
             console.log('Error')
         }
        
       },

       
   async makeAdminUser({ state, commit }) {
    try {
        commit(SET_LOADING, true) 
        var date = new Date();
       

    const newUser = state.user
        

       console.log(newUser)

      const {data: putResponse} = await api.put(`/auth/activateUser/${newUser._id}`, {newUser, role: "Admin" } )
      
       commit(MAKE_ADMIN_USER, putResponse)

        console.log(newUser.data);
       
        commit(SET_LOADING, false)
      } catch (error) {
        commit(SET_LOADING, false)
        //throw error
      }
       
      },

      async makeManagerUser({ state, commit }) {
        try {
            commit(SET_LOADING, true) 
            var date = new Date();
           
    
        const newUser = state.user
            
    
           console.log(newUser)
    
          const {data: putResponse} = await api.put(`/auth/activateUser/${newUser._id}`, {newUser, role: "Manager" } )
          
           commit(MAKE_MANAGER_USER, putResponse)
    
            console.log(newUser.data);
           
            commit(SET_LOADING, false)
          } catch (error) {
            commit(SET_LOADING, false)
            //throw error
          }
           
          },

      async makeVetUser({ state, commit }) {
        try {
            commit(SET_LOADING, true) 
            var date = new Date();
           
            const newUser = state.user
        

            console.log(newUser)
     
           const {data: putResponse} = await api.put(`/auth/activateUser/${newUser._id}`, {newUser, role: "Vet Consultant" } )
          
           commit(MAKE_VET_USER, putResponse)
    
            console.log(newUser.data);
           
            commit(SET_LOADING, false)
          } catch (error) {
            commit(SET_LOADING, false)
            //throw error
          }
           
          },

          async makeAgroUser({ state, commit }) {
            try {
                commit(SET_LOADING, true) 
                var date = new Date();
               
        
            const newUser = state.user
                
        
               console.log(newUser)
        
             const {data: putResponse} = await api.put(`/auth/activateUser/${newUser._id}`, {newUser, role: "Agro Consultant" } )
              
               commit(MAKE_AGRO_USER, putResponse)
        
                console.log(newUser.data);
               
                commit(SET_LOADING, false)
              } catch (error) {
                commit(SET_LOADING, false)
                //throw error
              }
               
              },

              async makeLabUser({ state, commit }) {
                try {
                    commit(SET_LOADING, true) 
                    var date = new Date();
                   
            
                const newUser = state.user
                    
            
                   console.log(newUser)
            
                   const {data: putResponse} = await api.put(`/auth/activateUser/${newUser._id}`, {newUser, role: "Lab Consultant" } )
                  
                   commit(MAKE_LAB_USER, putResponse)
            
                    console.log(newUser.data);
                   
                    commit(SET_LOADING, false)
                  } catch (error) {
                    commit(SET_LOADING, false)
                    //throw error
                  }
                   
                  },

                  async makeNutritionUser({ state, commit }) {
                    try {
                        commit(SET_LOADING, true) 
                        var date = new Date();
                       
                
                    const newUser = state.user
                        
                
                       console.log(newUser)
                
                       const {data: putResponse} = await api.put(`/auth/activateUser/${newUser._id}`, {newUser, role: "Nutrition Consultant" } )
                      
                       commit(MAKE_NUTRITION_USER, putResponse)
                
                        console.log(newUser.data);
                       
                        commit(SET_LOADING, false)
                      } catch (error) {
                        commit(SET_LOADING, false)
                        //throw error
                      }
                       
                      },

                      async makeAIUser({ state, commit }) {
                        try {
                            commit(SET_LOADING, true) 
                            var date = new Date();
                           
                    
                        const newUser = state.user
                            
                    
                           console.log(newUser)
                    
                           const {data: putResponse} = await api.put(`/auth/activateUser/${newUser._id}`, {newUser, role: "AI Consultant" } )
                          
                           commit(MAKE_AI_USER, putResponse)
                    
                            console.log(newUser.data);
                           
                            commit(SET_LOADING, false)
                          } catch (error) {
                            commit(SET_LOADING, false)
                            //throw error
                          }
                           
                          },

                          async makeRotoUser({ state, commit }) {
                            try {
                                commit(SET_LOADING, true) 
                                var date = new Date();
                               
                        
                            const newUser = state.user
                                
                        
                               console.log(newUser)
                        
                              const {data: putResponse} = await api.put(`/auth/activateUser/${newUser._id}`, {newUser, role: "Irrigation Consultant" } )
                              
                               commit(MAKE_ROTO_USER, putResponse)
                        
                                console.log(newUser.data);
                               
                                commit(SET_LOADING, false)
                              } catch (error) {
                                commit(SET_LOADING, false)
                                //throw error
                              }
                               
                              },

                              async makeFenceUser({ state, commit }) {
                                try {
                                    commit(SET_LOADING, true) 
                                    var date = new Date();
                                   
                            
                                const newUser = state.user
                                    
                            
                                   console.log(newUser)
                            
                                   const {data: putResponse} = await api.put(`/auth/activateUser/${newUser._id}`, {newUser, role: "Fence Consultant" } )
                                  
                                   commit(MAKE_FENCE_USER, putResponse)
                            
                                    console.log(newUser.data);
                                   
                                    commit(SET_LOADING, false)
                                  } catch (error) {
                                    commit(SET_LOADING, false)
                                    //throw error
                                  }
                                   
                                  },

                                  async makeFishUser({ state, commit }) {
                                    try {
                                        commit(SET_LOADING, true) 
                                        var date = new Date();
                                       
                                
                                    const newUser = state.user
                                        
                                
                                       console.log(newUser)
                                
                                       const {data: putResponse} = await api.put(`/auth/activateUser/${newUser._id}`, {newUser, role: "Fish Consultant" } )
                                      
                                       commit(MAKE_FISH_USER, putResponse)
                                
                                        console.log(newUser.data);
                                       
                                        commit(SET_LOADING, false)
                                      } catch (error) {
                                        commit(SET_LOADING, false)
                                        //throw error
                                      }
                                       
                                      },

                                     

     
    
}