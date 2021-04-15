<template>
  <v-snackbar v-model="$nuxt.isOffline" timeout="-1">
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
      default: 'No Internet Connection'
    }
  }
}
</script>
