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

};
