<template>
    <div class="container">
        <v-app>
            <v-alert type="error" :value="true">
                Vuetify was installed properly
            </v-alert>
        </v-app>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
