import { createStore } from 'vuex'
import axios from 'axios'

import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const store = createStore({
  state() {
    return {
      user: null,
      role: null,
      jobFilters: null,
      token: null
    }
  },

  getters: {
    isLoggedIn(state) {
      return state.user !== null
    },
    User(state) {
      return state.user
    },
    isRole(state){
      return state.role
    },
    jobFilters(state){
      return state.jobFilters
    },
    Token(state){
      return state.token
    }
  },

  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setRole(state, role){
      state.role = role
    },
    setJobFilters(state, filters){
      state.jobFilters = filters
    },
    setToken(state, token){
      state.token = token
    }
  },

  actions: {
    async tryLogIn(context) {
      try {
        if (localStorage.getItem('access-token')) {
          const res = await axios.get('/api/user', {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('access-token')
            }
          })

          // console.log(res.data.data.user)
          context.commit('setUser', res.data.data.user)
        }
      } catch (err) {
        console.log(err)
      }
    },

    async login(context, payload) {
      const email = payload.email
      const password = payload.password
      const userRole = payload.role
      let res = null

      axios.defaults.withCredentials = true
      axios.defaults.withXSRFToken = true
      try {
        if (userRole === 'candidate') {
          res = await axios.post('/api/user/login', {
            email: email,
            password: password
          })

          context.commit('setRole', 'candidate')
        } else if (userRole === 'employer') {
          res = await axios.post('/api/employer/login', {
            //TODO
            email: email,
            password: password
          })
          // console.log(res)
          context.commit('setRole', 'employer')
        }
        context.commit('setUser', res.data.data.user)
        context.commit('setToken', res.data.data.token)
        localStorage.setItem('access-token', res.data.data.token)
        return 'Logged In Successfully'
      } catch (error) {
        throw error
      }
    },
    async candidateRegister(context, payload) {
      const name = payload.name
      const email = payload.email
      const password = payload.password

      axios.defaults.withCredentials = true
      axios.defaults.withXSRFToken = true
      try {
        const res = await axios.post('/api/user/register', {
          name: name,
          email: email,
          password: password,
          password_confirmation: password
        })
        context.commit('setUser', res.data.data.user)
        context.commit('setRole', 'candidate')
        context.commit('setToken', res.data.data.token)
        localStorage.setItem('access-token', res.data.data.token)
        return 'Registered Successfully'
      } catch (error) {
        throw error
      }
    },

    async employerRegister(context, payload) {
      const name = payload.name
      const email = payload.email
      const password = payload.password

      axios.defaults.withCredentials = true
      axios.defaults.withXSRFToken = true
      try {
        const res = await axios.post('/api/employer/register', {
          name: name,
          email: email,
          password: password,
          password_confirmation: password
        })
        context.commit('setUser', res.data.data.user)
        context.commit('setRole', 'employer')
        context.commit('setToken', res.data.data.token)
        localStorage.setItem('access-token', res.data.data.token)
        return 'Registered Successfully'
      } catch (error) {
        throw error
      }
    },

    async logout(context) {
      try {
        const userRole = context.state.role
        if(userRole === 'employer'){
          await axios.post('/api/employer/logout')
        }
        localStorage.clear()
        context.commit('setUser', null)
        context.commit('setRole', null)
        context.commit('setToken', null)
        return 'Logged Out Successfully'
      } catch (error) {
        throw error
      }
    },
  },
  plugins: [vuexLocal.plugin]
})

export default store
