<template>
    <v-app-bar>
        <v-spacer></v-spacer>
        <span class="mr-3">{{user && user.name}}</span>
        <v-btn color="primary" small @click="logout">Logout</v-btn>
    </v-app-bar>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Header",
        async beforeMount() {
            if (!this.user){
                await this.$store.dispatch('auth/fetchUser')
            }
        },
        computed: {
            ...mapGetters({
                user: 'auth/user'
            })
        },
        methods: {
            async logout() {
                await this.$store.dispatch('auth/logout')
                this.$router.push({name: 'auth'})
            }
        }
    }
</script>
