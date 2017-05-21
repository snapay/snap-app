import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`components/${component}.vue`)
}

export default new VueRouter({
  routes: [
    { name: 'NewSale', path: '/', component: load('NewSale') }, // Default
    { name: 'Settings', path: '/settings', component: load('Settings') }, // Settings
    { name: 'NewSale2', path: '/new-sale', component: load('NewSale') }, // New sale
    { name: 'ListSales', path: '/list-sales', component: load('ListSales') }, // List sale
    { name: 'ReadCreditCard', path: '/read-credit-card', component: load('ReadCreditCard') }, // Reading credit card
    { path: '*', component: load('Error404') } // Not found
  ]
})
