import Login from './Login.vue'
import Messages from './Messages.vue'

import POS from './Master.vue'
import Dashboard from './Dashboard.vue'

// Product routes
import Product from './product/Master.vue'
import ProductIndex from './product/Index.vue'
import ProductDetails from './product/Details.vue'

export default [
    { path: '/login', name: 'pos.login', component: Login },
    {
        path: '/pos',
        component: POS,
        children: [
            { path: '', name: 'pos', component: Dashboard }, 
            { path: '/messages', name: 'messages', component: Messages },
            { 
                path: '/product',
                component: Product,
                children: [
                    { path: '', name: 'pos.product.index', component: ProductIndex }, 
                    { path: '/product/:id/show', name: 'pos.product.show', component: ProductDetails }, 
                ]
            },
        ]
    },
];