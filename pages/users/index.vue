<template>
    <div>

        <user-form @ok="storeUser" @cancel="closeFormDialog" @deleteUser="openDeleteDialog" :show="dialogs.form" mode="edit"></user-form>
        <user-delete @ok="destroyUser" @cancel="closeDeleteDialog" :show="dialogs.delete"></user-delete>

        <v-btn @click="openFormDialog" color="red" dark fab fixed bottom right>
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


            storeUser(data) {
                this.$store.dispatch('users/storeUser', data).then(() => {
                    this.closeFormDialog();
                });
            },


            openFormDialog() {
                this.dialogs.form = true;
            },

            closeFormDialog() {
                this.dialogs.form = false;
            },


            destroyUser() {
                this.closeDeleteDialog();
                this.closeFormDialog();
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
