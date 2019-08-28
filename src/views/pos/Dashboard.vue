<template>
    <div class="dashboard">
        <!-- navigation bar -->
        <Navbar />

        <!-- route vue -->
        <v-content class="mx-4" style="height: 100%">
            <h1>Dashboard</h1>
            <router-view></router-view>
        </v-content>

        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/pos/Navbar'
import Footer from '@/components/Footer'

export default {
    name: 'dashboard',
    components: {
        Navbar,
        Footer
    }

};
</script>
