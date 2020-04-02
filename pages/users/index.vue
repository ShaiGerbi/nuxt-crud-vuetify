<template>
    <div>

        <user-form @ok="storeUser" @cancel="closeFormDialog" @deleteUser="openDeleteDialog" :show="dialogs.form" mode="edit"></user-form>
        <user-delete @ok="destroyUser" @cancel="closeDeleteDialog" :show="dialogs.delete"></user-delete>

        <v-btn @click="openFormDialog" color="red" dark fab fixed bottom right>
            <v-icon>mdi-plus</v-icon>
        </v-btn>


        <v-card class="mx-auto">
            <v-list>
                <v-list-item @click="" v-for="user in users" :key="user.id">
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

        data() {
            return {
                dialogs: {
                    form: false,
                    delete: false,
                },

                users: [
                    { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", phone: "1-770-736-8031 x56442", },
                    { id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv", phone: "010-692-6593 x09125", },
                    { id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net", phone: "1-463-123-4447", },
                    { id: 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org", phone: "493-170-9623 x156", },
                    { id: 5, name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca", phone: "(254)954-1289", },
                    { id: 6, name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info", phone: "1-477-935-8478 x6430", },
                    { id: 7, name: "Kurtis Weissnat", username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz", phone: "210.067.6132", },
                    { id: 8, name: "Nicholas Runolfsdottir V", username: "Maxime_Nienow", email: "Sherwood@rosamond.me", phone: "586.493.6943 x140", },
                    { id: 9, name: "Glenna Reichert", username: "Delphine", email: "Chaim_McDermott@dana.io", },
                    { id: 10, name: "Clementina DuBuque", username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz", },
                ],
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
