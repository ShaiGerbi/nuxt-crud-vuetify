<template>
    <v-dialog v-model="show" max-width="600px" persistent>
        <v-card>

            <v-card-title>
                <span class="headline">{{ user.id ? 'Edit User' : 'Create User' }}</span>
            </v-card-title>

            <v-card-text>
                <v-container>

                    <v-row>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field v-model="user.name" label="Name*" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field v-model="user.username" label="Username*" required></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <v-text-field v-model="user.website" label="Website"></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field v-model="user.email" label="Email*" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field v-model="user.phone" label="Phone"></v-text-field>
                        </v-col>
                    </v-row>

                </v-container>
                <small>*indicates required field</small>
            </v-card-text>

            <v-card-actions>
                <v-btn v-if="user.id" @click="deleteUser" color="red" dark text>Delete</v-btn>
                <v-spacer></v-spacer>
                <v-btn @click="cancel" text>Cancel</v-btn>
                <v-btn @click.stop="ok" :loading="loading" color="primary">{{ user.id ? 'Update' : 'Create' }}</v-btn>
            </v-card-actions>

        </v-card>
    </v-dialog>
</template>

<script>
    export default {

        props: {
            show: {
                type: Boolean,
                required: false,
                default: false,
            },

            loading: {
                type: Boolean,
                required: false,
                default: false,
            },
        },


        computed: {
            user() {
                return {...this.$store.getters['users/getUser']};
            },
        },


        methods: {
            cancel() {
                this.$emit('cancel');
            },

            ok() {
                this.$emit('ok', this.user);
            },

            deleteUser() {
                this.$emit('deleteUser');
            },

        },

    }
</script>
