<template>
    <v-dialog v-model="show" max-width="600px" persistent>
        <v-card>

            <v-card-title>
                <span class="headline">{{ mode === 'edit' ? 'Edit User' : 'Create User' }}</span>
            </v-card-title>

            <v-card-text>
                <v-container>

                    <v-row>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field v-model="form.name" label="Name*" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field v-model="form.username" label="Username*" required></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <v-text-field v-model="form.website" label="Website"></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field v-model="form.email" label="Email*" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field v-model="form.phone" label="Phone"></v-text-field>
                        </v-col>
                    </v-row>

                </v-container>
                <small>*indicates required field</small>
            </v-card-text>

            <v-card-actions>
                <v-btn v-if="mode === 'edit'" @click="deleteUser" color="red" dark text>Delete</v-btn>
                <v-spacer></v-spacer>
                <v-btn @click="cancel" text>Cancel</v-btn>
                <v-btn @click.stop="ok" color="primary">{{ mode === 'edit' ? 'Update' : 'Create' }}</v-btn>
            </v-card-actions>

        </v-card>
    </v-dialog>
</template>

<script>
    export default {

        data() {
            return {
                form: {
                    name: '',
                    username: '',
                    website: '',
                    email: '',
                    phone: '',
                },
            }
        },

        props: {
            mode: {
                type: String,
                required: true,
                default: 'create',
                validator: (value) => {
                    return ['create', 'edit',].indexOf(value) !== -1;
                },
            },
            show: {
                required: true,
                default: false,
            },
        },

        methods: {
            cancel() {
                this.$emit('cancel');
                this.resetForm();
            },

            ok() {
                this.$emit('ok', this.form);
                this.resetForm();
            },

            deleteUser() {
                this.$emit('deleteUser');
                this.resetForm();
            },

            resetForm() {
                this.form = {};
            },
        },

    }
</script>
