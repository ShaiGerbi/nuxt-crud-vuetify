export default {

    async fetchUsers({ commit }) {
        await this.$axios
            .get('/users')
            .then(respond => {
                if(respond.status === 200) {
                    commit('setUsers', respond.data);
                }
            })
            .catch(error => console.log(error));
    },

    async storeUser({ commit }, data) {
        await this.$axios
            .post('/users', data)
            .then(respond => {
                if(respond.status === 201) {
                    commit('addUser', respond.data);
                }
            })
            .catch(error => console.log(error));
    },

    async updateUser({ commit }, user) {
        await this.$axios
            .patch(`/users/${user.id}`, user)
            .then(respond => {
                if(respond.status === 200) {
                    commit('updateUser', respond.data);
                }
            })
            .catch(error => console.log(error));
    },

    async destroyUser({ state, commit }) {
        await this.$axios
            .delete(`/users/${state.user.id}`)
            .then(respond => {
                if(respond.status === 200) {
                    commit('destroyUser', state.user);
                }
            })
            .catch(error => console.log(error))
    },

};
