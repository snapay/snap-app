import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`components/${component}.vue`)
}

export default new VueRouter({
  routes: [
    { path: '/', component: load('Index') }, // Default
    { path: '/settings', component: load('Settings') }, // Default
    { path: '/new-sale', component: load('NewSale') }, // Default
    { path: '/list-sales', component: load('ListSales') }, // Default
    { path: '*', component: load('Error404') } // Not found
  ]
})
