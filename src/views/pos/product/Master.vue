<template>
    <div class="product-master">
        <!-- route vue -->
        <v-content class="mx-4" style="height: 100%">
            <h1>Product Master</h1>
            <router-view></router-view>
        </v-content>
    </div>
</template>

<script>
export default {
    name: 'product-master',

};
</script>
