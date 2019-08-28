<template>
    <v-app>
        <v-content>
            <v-row align="center" justify="center" style="height: 100%;">
                <v-col sm="auto">
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-card width="500px">
                            <v-card-title>Log in to Admin</v-card-title>
                            <v-card-text>I'm card text</v-card-text>

                            <div class="px-4 mb-4">
                                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                                <v-text-field v-model="password" :rules="passRules" label="Password" required></v-text-field>
                            </div>
                                
                            <v-card-actions class="pb-5">
                                <v-btn :disabled="!valid" color="success" class="ml-2" @click="submit">Login</v-btn>
                                <v-btn color="error" class="mr-2" @click="reset">Reset</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-form>
                    
                </v-col>
            </v-row>
        </v-content>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        valid: true,
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        password: '',
        passRules: [
            v => !!v || 'Password is required',
            v => (v && v.length >= 6) || 'Password must be greater than 6 characters',
        ],
    }),
    methods: {
        submit () {
            if (this.$refs.form.validate()) {
                this.snackbar = true
            }
        },
        reset () {
            this.$refs.form.reset();

            // optional
            // this.$refs.form.resetValidation();
        }
    }
};
</script>
