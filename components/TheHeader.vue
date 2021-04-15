<template>
  <v-app-bar fixed app>

    <v-toolbar-title v-text="title" />

    <v-spacer></v-spacer>

    <v-btn v-if="$auth.loggedIn" icon @click="$auth.logout()">
      <v-icon>mdi-logout</v-icon>
    </v-btn>
    <v-btn v-else icon @click="dialogs.auth = true">
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn icon @click="dialogs.settings = true">
      <v-icon>mdi-cog</v-icon>
    </v-btn>

    <auth :show="dialogs.auth" @cancel="dialogs.auth = false"></auth>
    <settings :show="dialogs.settings" @ok="dialogs.settings = false" @cancel="dialogs.settings = false"></settings>

  </v-app-bar>
</template>

<script>
export default {

  data () {
    return {
      title: 'Users App',

      dialogs: {
        auth: false,
        settings: false
      }
    }
  }

}
</script>
