<template>
    <v-app>
        <v-dialog v-model="dialog" persistent max-width="600px" min-width="360px">
            <div>
                <v-tabs v-model="tab" show-arrows background-color="deep-purple accent-4" icons-and-text dark grow>
                    <v-tabs-slider color="purple darken-4"></v-tabs-slider>
                    <v-tab v-for="tab in tabs" :key="tab.name">
                        <v-icon large>{{ tab.icon }}</v-icon>
                        <div class="caption py-1">{{ tab.name }}</div>
                    </v-tab>
                    <v-tab-item>
                        <v-card class="px-4">
                            <v-card-text>
                                <v-form ref="loginForm" v-model="valid" lazy-validation>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field v-model="loginForm.email" :rules="[rules.required, rules.email]" label="Email" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="loginForm.password" :append-icon="passwordIcon" :rules="[rules.required, rules.min]" :type="passwordType" name="input-10-1" label="Password" hint="At least 8 characters" counter @click:append="toggleShowPassword"></v-text-field>
                                        </v-col>
                                        <v-col class="d-flex" cols="12" sm="6" xsm="12">
                                        </v-col>
                                        <v-spacer></v-spacer>
                                        <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                                            <v-btn x-large block :disabled="!valid" color="success" @click="login"> Login </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item>
                        <v-card class="px-4">
                            <v-card-text>
                                <v-form ref="registerForm" v-model="valid" lazy-validation>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field placeholder="" v-model="registerForm.name" :rules="[rules.required]" label="Name" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="registerForm.email" :rules="[rules.required, rules.email]" label="E-mail" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="registerForm.password" :append-icon="passwordIcon" :rules="[rules.required, rules.min]" :type="passwordType" name="input-10-1" label="Password" hint="At least 8 characters" counter @click:append="toggleShowPassword"></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field block v-model="verify" :append-icon="passwordIcon" :rules="[rules.required, passwordMatch]" :type="passwordType" name="input-10-1" label="Confirm Password" counter @click:append="toggleShowPassword"></v-text-field>
                                        </v-col>
                                        <v-spacer></v-spacer>
                                        <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                                            <v-btn x-large block :disabled="!valid" color="success" @click="register">Register</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs>
            </div>
        </v-dialog>
    </v-app>
</template>

<script>
    export default {
        name: "Login",
        data: () => ({
            dialog: true,
            valid: true,
            showPassword: false,
            verify: "",
            tab: 0,
            tabs: [
                {name:"Login", icon:"mdi-account"},
                {name:"Register", icon:"mdi-account-outline"}
            ],
            registerForm: {
                name: "",
                email: "",
                password: ""
            },
            loginForm: {
                email: "",
                password: ""
            },

            rules: {
                required: value => !!value || "Required.",
                min: v => (v && v.length >= 8) || "Min 8 characters",
                email: v => /.+@.+\..+/.test(v) || "E-mail must be valid"
            }
        }),
        computed: {
            passwordMatch() {
                return () => this.password === this.verify || "Password must match";
            },
            passwordIcon() {
                return this.showPassword ? "mdi-eye" : "mdi-eye-off"
            },
            passwordType() {
                return this.showPassword ? "text" : "password"
            }
        },
        methods: {
            reset() {
                this.$refs.form.reset();
            },
            resetValidation() {
                this.$refs.form.resetValidation();
            },
            toggleShowPassword() {
                this.showPassword = !this.showPassword
            },
            login() {
                console.log(this.loginForm)
            },
            register() {
                console.log(this.registerForm)
            }
        }
    }
</script>
