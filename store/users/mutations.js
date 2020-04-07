export default {

    setUser(state, user) {
        state.user = user;
    },

    resetUser(state) {
        state.user = {};
    },

    setUsers(state, data) {
        state.users = data;
    },


    addUser(state, user) {
        state.users.push(user);
    },

};
