<template>
    <v-content>
        <v-row>
            <Header />
        </v-row>
        
        <v-row>
            <v-content>
                <v-row align="center" justify="center" style="height: 800px;">
                    <v-col sm="auto">
                        <v-btn color="warning" dark width="200" height="200" to="/pos-login">
                            <strong>POS</strong>
                        </v-btn>
                    </v-col>

                    <v-col sm="auto">
                        <v-btn color="error" dark width="200" height="200" to='/admin-login'>
                            <strong>Admin Panel</strong>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-content>
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
