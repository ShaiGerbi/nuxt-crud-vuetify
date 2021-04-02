<template>
  <v-snackbar v-model="$nuxt.isOffline" :timeout="timeout">
    <v-icon left>
      mdi-wifi-off
    </v-icon>
    {{ message }}
  </v-snackbar>
</template>

<script>
  export default {
    name: 'Offline',

    props: {
      message: {
        type: String,
        required: false,
        default: 'No Internet Connection',
      },
      timeout: {
        required: false,
        default: -1,
      },
    }
  }
</script>
