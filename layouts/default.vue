<template>
  <v-app>

    <the-header></the-header>

    <v-main>
      <v-container>
        <v-alert v-if="error" type="error">
          {{ error }}
        </v-alert>
        <offline :message="$t('errors.no internet connection')"></offline>
        <nuxt />
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
export default {

  data () {
    return {
      title: this.$t('app.title')
    }
  },

  head () {
    return this.$nuxtI18nSeo()
  },

  computed: {
    error () {
      return this.$store.getters['common/getError']
    }
  }

}
</script>
