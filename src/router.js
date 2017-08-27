import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`components/${component}.vue`)
}

export default new VueRouter({
  routes: [
    { name: 'Login', path: '/login', component: load('Login') },
    { name: 'Register', path: '/register', component: load('Register') },
    { name: 'Home', path: '/home', component: load('Home') },
    { name: 'Extract', path: '/extract', component: load('Extract') },
    { name: 'Challenges', path: '/challenges', component: load('Challenges') },
    { name: 'GeneralStatistic', path: '/general-statistic', component: load('GeneralStatistic') },

    { path: '*', component: load('Login') }
  ]
})
