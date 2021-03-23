export default {

    async fetchUsers({ commit }) {
        await this.$axios
            .get('/users')
            .then(respond => {
                if(respond.status === 200) {
                    commit('setUsers', respond.data);
                }
            })
            .catch(error => {
                commit('common/setError', error.message, { root: true });
            });
    },

    async storeUser({ commit }, data) {
        await this.$axios
            .post('/users', data)
            .then(respond => {
                if(respond.status === 201) {
                    commit('addUser', respond.data);
                }
            })
            .catch(error => {
                commit('common/setError', error.message, { root: true });
            });
    },

    async updateUser({ commit }, user) {
        await this.$axios
            .patch(`/users/${user.id}`, user)
            .then(respond => {
                if(respond.status === 200) {
                    commit('updateUser', respond.data);
                }
            })
            .catch(error => {
                commit('common/setError', error.message, { root: true });
            });
    },

    async destroyUser({ state, commit }) {
        await this.$axios
            .delete(`/users/${state.user.id}`)
            .then(respond => {
                if(respond.status === 200) {
                    commit('destroyUser', state.user);
                }
            })
            .catch(error => {
                commit('common/setError', error.message, { root: true });
            });
    },

};
