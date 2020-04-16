<template>
    <v-app-bar fixed app>

        <v-toolbar-title v-text="title" />

        <v-spacer></v-spacer>

        <v-btn @click="openSettingsDialog" icon>
            <v-icon>mdi-cog</v-icon>
        </v-btn>

        <settings @ok="saveSettings" @cancel="cancelSettingsDialog" :show="dialogs.settings"></settings>

    </v-app-bar>
</template>

<script>
import Settings from '@/components/Settings';

export default {

    data () {
        return {
            title: 'Users App',

            dialogs: {
                settings: false,
            }
        }
    },

    components: {
        Settings,
    },

    methods: {
        saveSettings(settings) {
            this.$i18n.setLocale(settings.language)
            this.closeSettingsDialog();
        },

        cancelSettingsDialog() {
            this.closeSettingsDialog();
        },


        openSettingsDialog() {
            this.dialogs.settings = true;
        },

        closeSettingsDialog() {
            this.dialogs.settings = false;
        },
    },

}
</script>
