import Vue from 'vue'
import Router from 'vue-router'
import AboutMe from '@/components/AboutMe'
import YoutubePage from '@/components/YoutubePage'
import ScrapsPage from '@/components/ScrapsPage'
import CreateCardPage from '@/components/CreateCardPage'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/AboutMe'
    },
    {
      path: '/AboutMe',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/Video',
      name: 'YoutubePage',
      component: YoutubePage
    },
    {
      path: '/Scraps',
      name: 'ScrapsPage',
      component: ScrapsPage
    },
    {
      path: 'createCard',
      name: 'CreateCardPage',
      component: CreateCardPage
    }
  ]
})
