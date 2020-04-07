export default {

    setUsers(state, data) {
        state.users = data;
    },


    addUser(state, user) {
        state.users.push(user);
    },

};
