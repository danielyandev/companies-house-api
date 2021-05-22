<template>
    <div>
        <v-header></v-header>
        <v-container>
            <v-card elevation="3">

                <v-form @submit.prevent="search">
                    <v-card-title>
                        <v-text-field v-model="searchField" :loading="loading" prepend-inner-icon="mdi-magnify" label="Search company"></v-text-field>
                        <v-btn
                            class="ma-2"
                            :disabled="loading"
                            color="primary"
                            type="submit"
                        >
                            Search
                        </v-btn>
                    </v-card-title>
                </v-form>
                <v-card-text>
                    <v-simple-table>
                        <thead>
                        <tr>
                            <th class="text-left">ID</th>
                            <th class="text-left">Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-if="!companies.length" class="text-center">
                            <td colspan="2">No data found</td>
                        </tr>
                        </tbody>
                    </v-simple-table>
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    import VHeader from "../components/VHeader";

    export default {
        name: "Home",
        components: {VHeader},
        data() {
            return {
                loading: false,
                searchField: "",
                companies: []
            }
        },
        methods: {
            search() {
                console.log(this.searchField)
                this.loading = true

                setTimeout(() => {
                    this.loading = false
                }, 3000)
            }
        }
    }
</script>
