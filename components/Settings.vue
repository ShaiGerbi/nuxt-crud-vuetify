<template>
    <v-dialog v-model="show" max-width="290" persistent>
        <v-card>

            <v-card-title class="headline">
                Settings
            </v-card-title>

            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-select :items="languages" item-text="language" item-value="code" v-model="settings.language" label="Languages"></v-select>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="cancel" text>Cancel</v-btn>
                <v-btn @click.stop="ok" color="primary" text>Save</v-btn>
            </v-card-actions>

        </v-card>
    </v-dialog>
</template>

<script>
export default {

    data() {
        return {

            settings: {
                language: this.$i18n.locale,
            },

            languages: [
                { language: 'English', code: 'en', },
                { language: 'Hebrew', code: 'he', },
            ],

        }
    },

    props: {
        show: {
            type: Boolean,
            required: false,
            default: false,
        },
    },

    methods: {
        cancel() {
            this.$emit('cancel');
        },

        ok() {
            this.$emit('ok', this.settings);
        },
    },

}
</script>
