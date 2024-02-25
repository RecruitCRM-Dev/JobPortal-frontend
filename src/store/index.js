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
      console.log(state.user)
    }
  },

  actions: {
    //   async tryLogIn(context) {
    //     try {
    //       const res = await axios.get('/api/user')
    //       context.commit('setUser', res.data)
    //     } catch (err) {
    //       console.log(err)
    //     }
    //   },
    async login(context, payload) {
      const email = payload.email
      const password = payload.password
      const userRole = payload.role
      const res = null

      axios.defaults.withCredentials = true
      axios.defaults.withXSRFToken = true
      try {
        if (userRole === 'candidate') {
          res = await axios.post('/api/login/user', {
            email: email,
            password: password
          })
        } else if (userRole === 'employer') {
          res = await axios.post('/api/login/employer', {
            //TODO
            email: email,
            password: password
          })
        }
        context.commit('setUser', res.data.user)
        return 'Logged In Successfully'
      } catch (err) {
        console.log(err)
        return err.response.error
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
        context.commit('setUser', res.data.user)
        localStorage.setItem('access-token', res.data.access_token)
        return 'Registered Successfully'
      } catch (err) {
        console.log(err)
        return err.response.error
      }
    },

    async logout(context) {
      try {
        await axios.post('/api/logout')
        context.commit('setUser', null)
        return 'Logged Out Successfully'
      } catch (err) {
        console.log(err)
        return 'Unable to logout'
      }
    }
  }
})

export default store
