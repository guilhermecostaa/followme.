import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    loggedUserId: 0,
    points: [],
    interestPoints: []
  },
  mutations: {
    USER_LOGGED_IN(state,id){
      state.loggedUserId = id;
    },
    USER_LOGGED_OUT(state){
      state.loggedUserId = 0;
    },
    ADD_POINT(state,point){
      state.points.push(point)
    },
    SET_USERS(state,users){
      state.users = users
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
    },
    getUserById: state=>id=>{
      return state.users.find(user=>user.id === id)
    },
    getPoints: state=>{
      return state.points
    },
    getInterestPoints: state=>{
      return state.interestPoints
    },
    getPointsLastId: state=>{
      let lastId = 1
      state.points.forEach(point => {
        if(point.id > lastId) {
          lastId = point.id
        }
      })
      return lastId
    },
    getLoggedUsernameById: state=>id=>{
      let name = ""
      for (let i = 0; i < state.users.length; i++) {
        if (id === state.users.id) {
          name = state.users[i].name
        }
      }
      return name
    },
    getUserTypeById: state=>id=>{
      let type = ""
      for (let i = 0; i < state.users.length; i++) {
        if (id === state.users.id) {
          type = state.users[i].userType
        }
      }
      return type
    },
  }
})
