<template>
    <div>

        <user-form @ok="storeUser" @cancel="closeFormDialog" @deleteUser="deleteUser" :show="dialogs.form"></user-form>
        <user-delete @ok="destroyUser" @cancel="closeDeleteDialog" :show="dialogs.delete"></user-delete>

        <v-btn @click="createUser" color="red" dark fab fixed bottom right>
            <v-icon>mdi-plus</v-icon>
        </v-btn>


        <v-card class="mx-auto">
            <v-list>
                <v-list-item @click="editUser(user)" v-for="user in users" :key="user.id">
                    <v-list-item-content>
                        <v-list-item-title v-text="user.username"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>


    </div>
</template>

<script>
    import UserForm from '@/components/UserForm';
    import UserDelete from '@/components/UserDelete';

    export default {

        mounted() {
            this.$store.dispatch('users/fetchUsers').then(() => {
            });
        },


        data() {
            return {
                dialogs: {
                    form: false,
                    delete: false,
                },
            }
        },


        components: {
            UserForm, UserDelete,
        },


        computed: {
            users() {
                return this.$store.getters['users/getUsers'];
            }
        },


        methods: {

            createUser() {
                this.openFormDialog();
            },

            editUser(user) {
                this.$store.commit('users/setUser', user);
                this.openFormDialog();
            },

            deleteUser() {
                this.openDeleteDialog();
            },


            storeUser(data) {
                this.$store.dispatch('users/storeUser', data).then(() => {
                    this.closeFormDialog();
                });
            },

            updateUser(user) {
                this.$store.dispatch('users/updateUser', user).then(() => {
                    this.closeFormDialog();
                    this.$store.commit('users/resetUser');
                });
            },

            destroyUser() {
                this.$store.dispatch('users/destroyUser').then(() => {
                    this.closeDeleteDialog();
                    this.closeFormDialog();
                    this.$store.commit('users/resetUser');
                });
            },


            openFormDialog() {
                this.dialogs.form = true;
            },

            closeFormDialog() {
                this.dialogs.form = false;
            },


            openDeleteDialog() {
                this.dialogs.delete = true;
            },

            closeDeleteDialog() {
                this.dialogs.delete = false;
            },

        },

    }
</script>
