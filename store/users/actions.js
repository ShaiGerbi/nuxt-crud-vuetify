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


};
