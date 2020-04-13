<template>
    <v-dialog v-model="show" max-width="600px" persistent>
        <validation-observer ref="observer" v-slot="{ handleSubmit, reset }">
            <v-card>

                <v-card-title>
                    <span class="headline">{{ user.id ? 'Edit User' : 'Create User' }}</span>
                </v-card-title>

                <v-card-text>
                    <v-container>

                        <v-row>
                            <v-col cols="12" sm="6" md="6">
                                <validation-provider v-slot="{ errors }" rules="required" name="name">
                                    <v-text-field v-model="user.name" :error-messages="errors" label="Name*" required></v-text-field>
                                </validation-provider>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <validation-provider v-slot="{ errors }" rules="required" name="username">
                                    <v-text-field v-model="user.username" :error-messages="errors" label="Username*" required></v-text-field>
                                </validation-provider>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <validation-provider v-slot="{ errors }" rules="" name="website">
                                    <v-text-field v-model="user.website" :error-messages="errors" label="Website"></v-text-field>
                                </validation-provider>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" sm="6" md="6">
                                <validation-provider v-slot="{ errors }" rules="required|email" name="email">
                                    <v-text-field v-model="user.email" :error-messages="errors" label="Email*" required></v-text-field>
                                </validation-provider>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <validation-provider v-slot="{ errors }" rules="" name="phone">
                                    <v-text-field v-model="user.phone" :error-messages="errors" label="Phone"></v-text-field>
                                </validation-provider>
                            </v-col>
                        </v-row>

                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>

                <v-card-actions>
                    <v-btn v-if="user.id" @click="deleteUser" color="red" dark text>Delete</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn @click="reset(cancel)" text>Cancel</v-btn>
                    <v-btn @click.stop="handleSubmit(ok)" :loading="loading" color="primary">{{ user.id ? 'Update' : 'Create' }}</v-btn>
                </v-card-actions>

            </v-card>
        </validation-observer>
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
