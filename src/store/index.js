import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {id: 1, name:"Guilherme", number:"9170193", password:"1234"},
      {id: 2, name:"Gustavo", number:"9170196", password:"1234"}    
    ],
    loggedUserId: 0,
  },
  mutations: {
    USER_LOGGED_IN(state,id){
      state.loggedUserId = id;
    },
    USER_LOGGED_OUT(state){
      state.loggedUserId = 0;
    }
  },
  getters:{
    getUserByNumber: state => number =>{
      /*for (let i = 0; i < state.users.length; i++) {
        const userNumber = state.users[i].number;
        if (userNumber === number) {
          return state.users[i]
        }
      }*/
      return state.users.find(user => user.number === number)
      
    },
    getUsers: state =>{
      return state.users
    },
    getLoggedUserId: state=>{
      return state.loggedUserId
    }
  }
})
