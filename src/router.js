import Vue from 'vue'
import Router from 'vue-router'
import AuthPage from './views/Auth.vue'
import Setup from './views/Setup.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  routes: [
    {
      path: '/',
      name: 'auth',
      component: AuthPage
    },
    {
      path: '/setup',
      name: 'setup',
      component: Setup,
      children: [
        { name: 'selectCampaign', path: 'campaigns', component: () => import('./components/SelectCampaign.vue') },
        { name: 'selectParticipants', path: 'participants', component: () => import('./components/SelectParticipants.vue') }
      ]
    },
    {
      path: '/initiative',
      name: 'initiative',
      component: () => import('./views/Initiative.vue')
    },
    {
      path: '/oauth/callback',
      name: 'oauthCallback',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/OauthCallback.vue')
    }
  ]
})
