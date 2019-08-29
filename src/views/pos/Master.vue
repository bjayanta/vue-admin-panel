<template>
    <div class="master">
        <!-- navigation bar -->
        <Navbar />

        <!-- route vue -->
        <v-content class="mx-4" style="height: 100%">
            <h1>Master</h1>

            <router-view></router-view>
        </v-content>

        <Footer />
    </div>
</template>

<script>
import Navbar from '@/views/pos/Navbar'
import Footer from '@/components/Footer'

export default {
    name: 'master',
    components: {
        Navbar,
        Footer
    }

};
</script>
