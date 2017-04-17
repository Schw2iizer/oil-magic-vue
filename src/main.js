// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource-2'
import VueJsonp from 'vue-jsonp'
import About from './components/about/about.vue'
import Home from './components/home.vue'
import MyHeader from './components/myHeader.vue'
import MyFooter from './components/myFooter.vue'
import MyTeam from './components/team.vue'
import MemberBenefits from './components/member-benefits.vue'
import Contact from './components/contact.vue'
import ImpactSourcing from './components/coimpact-sourcing.vue'
import HealthyLifestyle from './components/about/healthy-lifestyle.vue'
import MembersPage from './components/members.vue'
import FavoriteProducts from './components/about/favorite-products.vue'
import WhyDoterra from './components/why-doterra.vue'
import HowTo from './components/how-to.vue'
import Resources from './components/resources.vue'
import OrderOils from './components/order-oils.vue'
import LoyaltyRewards from './components/loyalty-rewards.vue'
import NotFound from './components/not-found.vue'
import StarterKits from './components/starter-kits.vue'

Vue.use(VueResource)
Vue.use(VueJsonp, 8000)
Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About},
  {path: '/favorite-products', component: FavoriteProducts},
  {path: '/team', component: MyTeam},
  {path: '/member-benefits', component: MemberBenefits},
  {path: '/contact', component: Contact},
  {path: '/co-impact-sourcing', component: ImpactSourcing},
  {path: '/healthy-lifestyle', component: HealthyLifestyle},
  {path: '/members-only', component: MembersPage},
  {path: '/why-doterra', component: WhyDoterra},
  {path: '/how-to-use', component: HowTo},
  {path: '/resources', component: Resources},
  {path: '/how-to-order', component: OrderOils},
  {path: '/loyalty-rewards', component: LoyaltyRewards},
  {path: '/starter-kits', component: StarterKits},
  {path: '*', component: NotFound}
]

const router = new VueRouter({
  routes
  // mode: 'history'
})

new Vue({ // eslint-disable-line no-new
  router,
  el: '#app',
  components: {
    App,
    MyHeader,
    MyFooter,
    MyTeam,
    About,
    Contact,
    MembersPage,
    HowTo,
    Resources,
    HealthyLifestyle,
    MemberBenefits,
    ImpactSourcing,
    FavoriteProducts,
    WhyDoterra,
    OrderOils,
    LoyaltyRewards,
    StarterKits,
    NotFound
  }
})

const app = new Vue({
  router,
  el: '#app'
})
