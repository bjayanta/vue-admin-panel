<template>
    <v-content>
        <v-row>
            <Header />
        </v-row>

        <v-row align="center" justify="center" style="height: 768px;">
            <v-card width="500">
                <v-form ref="form" v-model="valid" lazy-validation>
                <v-card-title>Log in to POS</v-card-title>
                <v-card-text>This panel only for users.</v-card-text>

                <div class="px-4 mb-4">
                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

                    <v-text-field 
                        v-model="password" 
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" 
                        :rules="passRules" 
                        :type="show ? 'text' : 'password'"
                        label="Password" 
                        hint="At least 6 characters"
                        counter
                        @click:append="show = !show"
                        required></v-text-field>
                </div>
                    
                <v-card-actions class="pb-5">
                    <v-btn :disabled="!valid" color="success" class="ml-2" @click="submit">Login</v-btn>
                    <v-btn color="error" class="mr-2" @click="reset">Reset</v-btn>
                </v-card-actions>
                </v-form>
            </v-card>
        </v-row>

        <v-row>
            <Footer />
        </v-row>
    </v-content>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
    name: 'pos-login',
    components: {
        Header,
        Footer,
    },
    data: () => ({
        valid: true,
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        show: false,
        password: '',
        passRules: [
            v => !!v || 'Password is required',
            v => (v && v.length >= 6) || 'Password must be greater than 6 characters',
        ],
        snackbar: false,
        text: 'Hello, I\'m a snackbar',
    }),
    methods: {
        submit () {
            if (this.$refs.form.validate()) {
                this.snackbar = true;
                this.$router.push('/pos');
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
