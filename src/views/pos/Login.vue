<template>
    <v-app>
        <v-content>
            <v-row align="center" justify="center" style="height: 100%;">
                <v-col sm="auto">
                    <v-card>
                        <v-card-title>I'm a title</v-card-title>
                        <v-card-text>I'm card text</v-card-text>

                        <v-card-actions>
                            <v-btn text>Click</v-btn>
                        </v-card-actions>
                    </v-card>

                    <v-btn color="warning" dark width="200" height="200" to="/pos">
                        <strong>POS</strong>
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
