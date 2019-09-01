<template>
    <nav>
        <v-toolbar flat color="grey lighten-5">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>Company name</v-toolbar-title>

            <div class="flex-grow-1"></div>

            <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
                <v-btn text>Link 1</v-btn>
                <v-btn text>Link 2</v-btn>
                <v-btn text>Link 3</v-btn>
            </v-toolbar-items>

            <template >
                <v-btn icon>
                    <v-icon>mdi-export-variant</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-delete-circle</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-plus-circle</v-icon>
                </v-btn>

                <v-menu transition="slide-y-transition" offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn text color="grey" v-on="on">
                            <span>Dropdown Menu</span>
                            <v-icon left>mdi-chevron-down</v-icon>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                            <v-list-item-title>{{ link.text }}</v-list-item-title>
                        </v-list-item>

                        <v-list-item router :to="{name: 'pos.login'}">
                            <v-list-item-title>Sign out &nbsp;</v-list-item-title>
                            <v-icon right>mdi-exit-to-app</v-icon>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </template>
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" absolute temporary>
            <v-list-item>
                <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>Jayanta Biswas</v-list-item-title>
                    <v-list-item-subtitle>Developer</v-list-item-subtitle>
                </v-list-item-content>

                <v-btn icon @click.stop="mini = !mini">
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
            </v-list-item>

            <v-divider></v-divider>

            <v-subheader>Basic</v-subheader>

            <v-list dense>
                <v-list-item v-for="item in items" :key="item.title" router :to="item.router" link>
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>
                <v-subheader>Application</v-subheader>

                <v-list-item v-for="menu in aside.modules" :key="menu.title" router :to="menu.router" link>
                    <v-list-item-icon>
                        <v-icon>{{ menu.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ menu.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>
                <v-subheader>Account </v-subheader>

                <v-list-group prepend-icon="mdi-account-circle">
                    <template v-slot:activator>
                        <v-list-item-title>Users</v-list-item-title>
                    </template>

                    <v-list-group no-action sub-group>
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>Admin</v-list-item-title>
                            </v-list-item-content>
                        </template>

                        <v-list-item link>
                            <v-list-item-title>Management</v-list-item-title>
                            <v-list-item-icon>
                                <v-icon>mdi-account-group-outline</v-icon>
                            </v-list-item-icon>
                        </v-list-item>

                        <v-list-item link>
                            <v-list-item-title>Settings</v-list-item-title>
                            <v-list-item-icon>
                                <v-icon>mdi-settings</v-icon>
                            </v-list-item-icon>
                        </v-list-item>
                    </v-list-group>

                    <v-list-group no-action sub-group>
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>Action</v-list-item-title>
                            </v-list-item-content>
                        </template>

                        <v-list-item link>
                            <v-list-item-title>Create</v-list-item-title>
                            <v-list-item-icon>
                                <v-icon>mdi-plus</v-icon>
                            </v-list-item-icon>
                        </v-list-item>

                        <v-list-item link>
                            <v-list-item-title>Read</v-list-item-title>
                            <v-list-item-icon>
                                <v-icon>mdi-book-open</v-icon>
                            </v-list-item-icon>
                        </v-list-item>

                        <v-list-item link>
                            <v-list-item-title>Update</v-list-item-title>
                            <v-list-item-icon>
                                <v-icon>mdi-update</v-icon>
                            </v-list-item-icon>
                        </v-list-item>

                        <v-list-item link>
                            <v-list-item-title>Delete</v-list-item-title>
                            <v-list-item-icon>
                                <v-icon>mdi-trash-can-outline</v-icon>
                            </v-list-item-icon>
                        </v-list-item>
                    </v-list-group>
                </v-list-group>

            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                mini: false,
                drawer: null,
                aside: {
                    modules: [
                        { title: 'Product', icon: 'mdi-information', router: {name: 'pos.product.index'} },
                    ],
                },
                items: [
                    { title: 'Dashboard', icon: 'mdi-home', router: {name: 'pos'} },
                    { title: 'Messages', icon: 'mdi-home', router: {name: 'messages'} },
                ],
                links: [
                    {icon: 'mdi-home', text: 'Dashboard', route: '/'},
                    {icon: 'mdi-apps', text: 'Projects', route: '/project'},
                    {icon: 'mdi-account', text: 'Team', route: '/team'},
                ]
            }
        },
        methods: {}
    };
</script>
