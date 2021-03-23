<template>
    <v-app>

        <the-header></the-header>

        <v-content>
            <v-container>
                <v-alert v-if="error" type="error" dark>{{ error }}</v-alert>
                <nuxt />
            </v-container>
        </v-content>

    </v-app>
</template>

<script>
import TheHeader from '@/components/TheHeader';

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

    components: {
        TheHeader,
    },

}
</script>
