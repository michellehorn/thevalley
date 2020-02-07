import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Courses from '../views/Courses.vue'
import CoursesDetail from '../views/CoursesDetail.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import Admin from '../views/Admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/courses/:name',
    name: 'courses-detail',
    component: CoursesDetail,
  },
  {
    path: '/courses/:name',
    name: 'courses-detail',
    component: CoursesDetail,
  },
  {
    path: '/courses',
    name: 'courses',
    component: Courses,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
