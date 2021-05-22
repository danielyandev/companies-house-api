<template>
    <div>
        <v-header></v-header>
        <v-container>
            <v-card elevation="3">

                <v-form @submit.prevent="() => search()">
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
                            <th class="text-left">Number</th>
                            <th class="text-left">Name</th>
                            <th class="text-left">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-if="!companies.length" class="text-center">
                            <td colspan="3">No data found, search to fetch results</td>
                        </tr>
                        <tr v-else v-for="company in companies">
                            <td>{{company.company_number}}</td>
                            <td>{{company.title}}</td>
                            <td>
                                <v-badge :content="company.company_status" :color="company.company_status === 'active' ? 'green' : 'pink'"></v-badge>
                            </td>
                        </tr>
                        </tbody>
                    </v-simple-table>

                    <div class="text-center">
                        <v-pagination
                            v-model="currentPage"
                            :length="totalPages"
                            :total-visible="7"
                        ></v-pagination>
                    </div>
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    import VHeader from "../components/VHeader";
    import {search} from "../api/requests/companies";

    export default {
        name: "Home",
        components: {VHeader},
        data() {
            return {
                loading: false,
                searchField: "",
                companies: [],
                currentPage: 1,
                perPage: 10,
                totalResults: 0
            }
        },
        computed: {
            totalPages() {
                let total = Math.floor(this.totalResults / this.perPage)
                if(this.totalResults % this.perPage !== 0) {
                    total++
                }
                return total--
            }
        },
        watch: {
            currentPage(page) {
                this.search(page)
            }
        },
        methods: {
            async search(page = 1) {
                if (!this.searchField){
                    return
                }
                this.loading = true
                this.currentPage = page
                const start_index = page * this.perPage - this.perPage

                const {data} = await search(this.searchField, 10, start_index)

                this.companies = data.items || []

                if (page === 1) {
                    this.totalResults = data.total_results || 0
                }

                this.loading = false
            }
        }
    }
</script>
