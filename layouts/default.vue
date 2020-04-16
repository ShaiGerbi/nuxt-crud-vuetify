<template>
    <v-app>

        <the-header></the-header>

        <v-content>
            <v-container>
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

    head() {
        return this.$nuxtI18nSeo();
    },

    components: {
        TheHeader,
    },

}
</script>
