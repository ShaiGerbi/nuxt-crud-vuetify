<template>
    <div>

        <user-form @ok="storeUser" @cancel="closeFormDialog" @deleteUser="openDeleteDialog" :show="dialogs.form" mode="edit"></user-form>
        <user-delete @ok="destroyUser" @cancel="closeDeleteDialog" :show="dialogs.delete"></user-delete>

        <v-btn @click="openFormDialog" color="red" dark fab fixed bottom right>
            <v-icon>mdi-plus</v-icon>
        </v-btn>

    </div>
</template>

<script>
    import UserForm from '@/components/UserForm';
    import UserDelete from '@/components/UserDelete';

    export default {

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

        methods: {

            storeUser(event) {
                this.closeFormDialog();
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
