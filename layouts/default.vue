<template>
    <v-app>

        <the-header></the-header>

        <v-main>
            <v-container>
                <v-alert v-if="error" type="error" dark>{{ error }}</v-alert>
                <nuxt />
            </v-container>
        </v-main>

    </v-app>
</template>

<script>
export default {

    data () {
        return {
            title: this.$t('app.title'),
        }
    },

    computed: {
        error() {
            return this.$store.getters['common/getError'];
        }
    },

    head() {
        return this.$nuxtI18nSeo();
    },

}
</script>
