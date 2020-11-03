import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import LandingNavbar from './layout/LandingNavbar.vue';
import LandingFooter from './layout/LandingFooter.vue';


Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: Index, header: LandingNavbar, footer: LandingFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
