<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>Company </span>
                <span class="font-weight-light">Name</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn text href="https://github.com/bjayanta/vue-admin-panel" target="_blank">
                <span class="mr-2">Inventory System</span>
            </v-btn>
        </v-app-bar>

        <v-content>
            <v-row align="center" justify="center" style="height: 100%;">

                <v-col lg="auto">
                    <v-btn color="warning" dark width="200" height="200" to="/pos">
                        <strong>POS</strong>
                    </v-btn>
                </v-col>

                <v-col lg="auto">
                    <v-btn color="error" dark width="200" height="200" to='/about'>
                        <strong>Admin Panel</strong>
                    </v-btn>
                </v-col>
            </v-row>
        </v-content>
    </v-app>
</template>

<script>
export default {

};
</script>
