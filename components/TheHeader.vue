<template>
  <v-app-bar fixed app>

    <v-toolbar-title v-text="title" />

    <v-spacer></v-spacer>

    <v-btn icon @click="dialogs.settings = true">
      <v-icon>mdi-cog</v-icon>
    </v-btn>

    <settings :show="dialogs.settings" @ok="dialogs.settings = false" @cancel="dialogs.settings = false"></settings>

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
  }

}
</script>
