<template>
    <v-app-bar fixed app>

        <v-toolbar-title v-text="title" />

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-cog</v-icon>
        </v-btn>

    </v-app-bar>
</template>

<script>
export default {

    data () {
        return {
            title: 'Users App',
        }
    },

}
</script>
