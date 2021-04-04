<template>
  <v-app-bar fixed app>

    <v-toolbar-title v-text="title" />

    <v-spacer></v-spacer>

    <v-btn icon @click="openSettingsDialog">
      <v-icon>mdi-cog</v-icon>
    </v-btn>

    <settings :show="dialogs.settings" @ok="saveSettings" @cancel="cancelSettingsDialog"></settings>

  </v-app-bar>
</template>

<script>
export default {

  data () {
    return {
      title: 'Users App',

      dialogs: {
        settings: false
      }
    }
  },

  methods: {
    saveSettings (settings) {
      this.$i18n.setLocale(settings.language)
      this.closeSettingsDialog()
    },

    cancelSettingsDialog () {
      this.closeSettingsDialog()
    },

    openSettingsDialog () {
      this.dialogs.settings = true
    },

    closeSettingsDialog () {
      this.dialogs.settings = false
    }
  }

}
</script>
