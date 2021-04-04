export default {

  async fetchUsers ({ commit }) {
    commit('common/setLoadingData', true, { root: true })
    await this.$axios
      .get('/users')
      .then((respond) => {
        if (respond.status === 200) {
          commit('setUsers', respond.data)
        }
      })
      .catch((error) => {
        commit('common/setError', error.message, { root: true })
      })
      .then(() => {
        commit('common/setLoadingData', false, { root: true })
      })
  },

  async storeUser ({ commit }, data) {
    commit('common/setLoadingDialog', true, { root: true })
    await this.$axios
      .post('/users', data)
      .then((respond) => {
        if (respond.status === 201) {
          commit('addUser', respond.data)
        }
      })
      .catch((error) => {
        commit('common/setError', error.message, { root: true })
      })
      .then(() => {
        commit('common/setLoadingDialog', false, { root: true })
      })
  },

  async updateUser ({ commit }, user) {
    commit('common/setLoadingDialog', true, { root: true })
    await this.$axios
      .patch(`/users/${user.id}`, user)
      .then((respond) => {
        if (respond.status === 200) {
          commit('updateUser', respond.data)
        }
      })
      .catch((error) => {
        commit('common/setError', error.message, { root: true })
      })
      .then(() => {
        commit('common/setLoadingDialog', false, { root: true })
      })
  },

  async destroyUser ({ state, commit }) {
    commit('common/setLoadingDelete', true, { root: true })
    await this.$axios
      .delete(`/users/${state.user.id}`)
      .then((respond) => {
        if (respond.status === 200) {
          commit('destroyUser', state.user)
        }
      })
      .catch((error) => {
        commit('common/setError', error.message, { root: true })
      })
      .then(() => {
        commit('common/setLoadingDelete', false, { root: true })
      })
  }

}
