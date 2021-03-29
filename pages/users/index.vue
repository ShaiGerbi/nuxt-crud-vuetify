<template>
    <div>

        <user-form @ok="submitUser" @cancel="cancelFormDialog" @deleteUser="deleteUser" :show="dialogs.form" :loading="loadingForm"></user-form>
        <user-delete @ok="destroyUser" @cancel="cancelDeleteDialog" :show="dialogs.delete" :loading="loadingDelete"></user-delete>

        <v-btn @click="createUser" color="red" dark fab fixed bottom right>
            <v-icon>mdi-plus</v-icon>
        </v-btn>

        <v-card class="mx-auto">
            <v-skeleton-loader :loading="loadingData" type="list-item@5" class="mx-auto">
                <v-list>

                    <v-list-item @click="editUser(user)" v-for="user in users" :key="user.id">
                        <v-list-item-content>
                            <v-list-item-title v-text="user.username"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item v-if="!users.length">
                        <v-list-item-content>
                            <v-list-item-title v-text="$t('errors.no data found')" class="text-center"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                </v-list>
            </v-skeleton-loader>
        </v-card>

    </div>
</template>

<script>
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


        computed: {
            users() {
                return this.$store.getters['users/getUsers'];
            },

            loadingData() {
                return this.$store.getters['common/getLoadingData'];
            },

            loadingForm() {
                return this.$store.getters['common/getLoadingForm'];
            },

            loadingDelete() {
                return this.$store.getters['common/getLoadingDelete'];
            },
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
                this.$store.dispatch('users/storeUser', data).then(() => {
                    this.closeFormDialog();
                    this.$store.commit('users/resetUser');
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


            cancelFormDialog() {
                this.closeFormDialog();
                this.$store.commit('users/resetUser');
            },

            cancelDeleteDialog() {
                this.closeDeleteDialog();
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
