<template>
    <div>
        
        <v-btn @click="goBack">Try Again</v-btn>

    </div>
</template>

<script>
export default {

    methods: {
        goBack() {
            return this.$router.go(-1);
        },
    },

}
</script>
