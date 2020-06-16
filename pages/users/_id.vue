<template>
    <pre>
        {{ user }}
    </pre>
</template>

<script>
    import User from '@/models/User';

    export default {

        mounted() {
            User.api().fetchById(this.id);
        },


        data() {
            return {
                id: this.$route.params.id,
            }
        },


        computed: {
            user() {
                return User.find(this.id);
            },
        }

    }
</script>
