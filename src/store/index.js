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
    points: [],
    /*interestPoints: [
      {id: 1, name:"Torre dos Clérigos", city:"Porto", desc:"Vista da cidade em torre barroca"},
      {id: 2, name:"Livraria Lello", city:"Porto", desc:"Livraria ornada com escadaria vermelha"},
      {id: 3, name:"Ponte D.Luís", city:"Porto", desc:"Ponte icónica de metal sobre o Douro"}
    ]*/
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
    getLoggedUsername: state=>{
      let name = ""
      const id = state.loggedUserId;
      for (let i = 0; i < state.users.length; i++) {
        if (id === state.users.id) {
          name = state.users[i].name
        }
      }
      return name
    }
  }
})
