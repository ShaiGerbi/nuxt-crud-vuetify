<template>
    <v-dialog v-model="show" max-width="290" persistent>
        <v-card>

            <v-card-title class="headline">
                Are you sure?
            </v-card-title>

            <v-card-text>
                The deletion is permanent.
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="cancel" text>Cancel</v-btn>
                <v-btn @click.stop="ok" color="red" text>Delete</v-btn>
            </v-card-actions>

        </v-card>
    </v-dialog>
</template>

<script>
    export default {

        props: {
            show: {
                required: true,
                default: false,
            },
        },

        methods: {
            cancel() {
                this.$emit('cancel');
            },

            ok() {
                this.$emit('ok');
            },
        },

    }
</script>
