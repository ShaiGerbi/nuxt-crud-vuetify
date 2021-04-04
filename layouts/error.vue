<template>
  <v-app>

    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      {{ $t('errors.home') }}
    </NuxtLink>

  </v-app>
</template>

<script>
export default {

  layout: 'empty',

  props: {
    error: {
      type: Object,
      default: null
    }
  },

  data () {
    return {
      pageNotFound: this.$t('errors.404 not found'),
      otherError: this.$t('errors.an error occurred')
    }
  },

  head () {
    const title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}

</script>

<style scoped>

h1 {
    font-size: 20px;
}

</style>
