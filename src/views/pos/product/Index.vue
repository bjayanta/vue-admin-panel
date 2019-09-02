<template>
    <v-content>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title>Product List</v-card-title>
                    <v-card-text>all the products list in here</v-card-text>

                    <v-row>
                        <v-col class="mx-4">
                            <v-select 
                                v-model="company" 
                                :items="companies" 
                                item-text="name" 
                                item-value="id" 
                                label="Company" 
                                @change="getBrands(company)" outlined></v-select>
                        </v-col>

                        <v-col class="mx-4">
                            <v-select 
                                v-model="brand" 
                                :items="brands" 
                                item-text="name" 
                                item-value="id" 
                                label="Brands" 
                                @change="getProducts(brand)" outlined></v-select>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col v-for="product in products" :key="product.id">
                            <v-card class="mx-4">
                                <v-card-title>{{ product.name }}</v-card-title>
                                <v-card-text>BDT {{ product.price }}, {{ product.description }}</v-card-text>

                                <v-card-actions>
                                    <v-btn text>Add to cart</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            
        </v-row>
    </v-content>
</template>

<script>
export default {
    name: 'index',
    data() {
        return {
            company: '',
            companies: [
                {id: 1, name: 'Pran'},
                {id: 2, name: 'BD Group'},
                {id: 3, name: 'ACI'},
                {id: 4, name: 'Akij Group'},
                {id: 5, name: 'Kazi'}
            ],
            brand: '',
            brands: [],
            products: [],
        }
    },
    methods: {
        getBrands(company) {
            console.log(company);

            this.brands = [
                {id: 1, company_id: 1, name: 'Beverages'},
                {id: 2, company_id: 1, name: 'Snacks'},
                {id: 3, company_id: 1, name: 'Culinary'},
                {id: 4, company_id: 1, name: 'Sugar Confectionery'},
                {id: 5, company_id: 1, name: 'Biscuit and Bakery'},
            ];
        },
        getProducts(brand) {
            console.log(brand);

            this.products = [
                {id: 1, brand_id: 1, category: 1, name: 'Beverages', price: 10.50},
                {id: 2, brand_id: 1, category: 1, name: 'Snacks', price: 10.50},
                {id: 3, brand_id: 1, category: 1, name: 'Culinary', price: 10.50},
                {id: 4, brand_id: 1, category: 1, name: 'Sugar Confectionery', price: 10.50},
                {id: 5, brand_id: 1, category: 1, name: 'Biscuit and Bakery', price: 10.50},
            ];
        }
    }

};
</script>
