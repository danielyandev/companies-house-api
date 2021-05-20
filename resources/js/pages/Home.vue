<template>
    <div>
        <v-app-bar>
            <v-spacer></v-spacer>
            <v-btn color="primary">Logout</v-btn>
        </v-app-bar>
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
    export default {
        name: "Home",
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
