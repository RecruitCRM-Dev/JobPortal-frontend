import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state() {
    return {
      user: null
    }
  },

  getters: {
    isLoggedIn(state) {
      return state.user !== null
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
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
          res = await axios.post('/api/login/user', {
            email: email,
            password: password
          })

          console.log('hello')
        } else if (userRole === 'employer') {
          res = await axios.post('/api/login/employer', {
            //TODO
            email: email,
            password: password
          })
        }

        console.log(res)
        context.commit('setUser', res.data.data.user)
        localStorage.setItem('access-token', res.data.data.token)
        return 'Logged In Successfully'
      } catch (error) {
        throw error
      }
    },
    async register(context, payload) {
      const name = payload.name
      const email = payload.email
      const password = payload.password

      axios.defaults.withCredentials = true
      axios.defaults.withXSRFToken = true
      try {
        const res = await axios.post('/api/register/user', {
          name: name,
          email: email,
          password: password,
          password_confirmation: password
        })
        context.commit('setUser', res.data.data.user)
        localStorage.setItem('access-token', res.data.data.token)
        return 'Registered Successfully'
      } catch (error) {
        throw error
      }
    },

    async logout(context) {
      try {
        await axios.post('/api/logout/user')
        localStorage.clear()
        context.commit('setUser', null)
        return 'Logged Out Successfully'
      } catch (error) {
        throw error
      }
    }
  }
})

export default store
