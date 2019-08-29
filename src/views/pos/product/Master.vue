<template>
    <div class="product-master">
        <!-- navigation bar -->
        <Navbar />
        
        <!-- route vue -->
        <v-content class="mx-4" style="height: 100%">
            <h1>Product Master</h1>
            <router-view></router-view>
        </v-content>

        <!-- footer -->
        <Footer />
    </div>
</template>

<script>
export default {
    name: 'product-master',

};
</script>
