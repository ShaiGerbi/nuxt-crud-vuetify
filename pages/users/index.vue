<template>
    <div>

        <user-form @ok="submitUser" @cancel="cancelFormDialog" @deleteUser="deleteUser" :show="dialogs.form" :loading="loading.form"></user-form>
        <user-delete @ok="destroyUser" @cancel="cancelDeleteDialog" :show="dialogs.delete" :loading="loading.delete"></user-delete>

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
    import User from '@/models/User';

    export default {

        mounted() {
            User.api().fetchAll();
        },


        data() {
            return {
                dialogs: {
                    form: false,
                    delete: false,
                },

                loading: {
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
                return User.all();
            }
        },


        methods: {

            submitUser(user) {
                if(user.id) {
                    this.updateUser(user);
                }
                else {
                    this.storeUser(user);
                }
            },


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
                this.startFormLoading();
                this.$store.dispatch('users/storeUser', data).then(() => {
                    this.endFormLoading();
                    this.closeFormDialog();
                    this.$store.commit('users/resetUser');
                });
            },

            updateUser(user) {
                this.startFormLoading();
                this.$store.dispatch('users/updateUser', user).then(() => {
                    this.endFormLoading();
                    this.closeFormDialog();
                    this.$store.commit('users/resetUser');
                });
            },

            destroyUser() {
                this.startDeleteLoading();
                this.$store.dispatch('users/destroyUser').then(() => {
                    this.endDeleteLoading();
                    this.closeDeleteDialog();
                    this.closeFormDialog();
                    this.$store.commit('users/resetUser');
                });
            },


            cancelFormDialog() {
                this.closeFormDialog();
                this.endFormLoading();
                this.$store.commit('users/resetUser');
            },

            cancelDeleteDialog() {
                this.closeDeleteDialog();
                this.endDeleteLoading();
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


            startFormLoading() {
                this.loading.form = true;
            },

            endFormLoading() {
                this.loading.form = false;
            },


            startDeleteLoading() {
                this.loading.delete = true;
            },

            endDeleteLoading() {
                this.loading.delete = false;
            },

        },

    }
</script>
