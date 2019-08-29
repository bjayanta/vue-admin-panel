<template>
    <v-content>
        <v-row>
            <Header />
        </v-row>

        <v-row align="center" justify="center" style="height: 768px;">
            <v-card flat class="mx-auto grey lighten-5">
                <v-btn class="ma-5" color="warning" dark width="200" height="200" router :to="{name: 'pos.login'}">
                    <strong>POS</strong>
                </v-btn>

                <v-btn class="ma-5" color="error" dark width="200" height="200" router :to="{name: 'admin.login'}">
                    <strong>Admin Panel</strong>
                </v-btn>
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
    name: 'home',
    components: {
        Header,
        Footer,
    },
};
</script>
