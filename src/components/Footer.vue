<template>
    <v-footer class="pa-0" width="100%">
        <v-card flat width="100%" class="text-center grey lighten-5">
            <v-card-text>
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/">Terms Of Service</router-link>
                <router-link to="/">Privacy Policy &amp; Copyright</router-link>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text>&copy; {{ new Date().getFullYear() }} <strong>Company name</strong></v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    name: 'app-footer'
};
</script>

<style lang="scss" scoped>
footer {
    a {
        text-decoration: none;
        display: inline-block;
        padding: 0 15px;
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
