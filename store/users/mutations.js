export default {

  setUser (state, user) {
    state.user = user
  },

  resetUser (state) {
    state.user = {}
  },

  setUsers (state, data) {
    state.users = data
  },

  addUser (state, user) {
    state.users.push(user)
  },

  updateUser (state, data) {
    const user = state.users.find(user => user.id === data.id)

    user.name     = data.name
    user.username = data.username
    user.website  = data.website
    user.email    = data.email
    user.phone    = data.phone
  },

  destroyUser (state, user) {
    const index = state.users.indexOf(user)
    state.users.splice(index, 1)
  }

}
