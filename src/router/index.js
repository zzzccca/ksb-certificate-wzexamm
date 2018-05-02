import Vue from 'vue'
import Router from 'vue-router'
import detail from '@/components/detail'
import confirm from '@/components/confirm'
import applyed from '@/components/applyed'
import applyedtwo from '@/components/applyedtwo'
import address1 from '@/components/address1'
import address2 from '@/components/address2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'start',
      redirect:'confirm'
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: confirm,
    },
    {
      path:'/detail',
      name:'detail',
      component:detail
    },
    {
      path:'/applyed',
      name:'applyed',
      component:applyed
    },
    {
      path:'/applyedtwo',
      name:'applyedtwo',
      component:applyedtwo
    },
    {
      path:'/address1',
      name:'address1',
      component:address1
    },
    {
      path:'/address2',
      name:'address',
      component:address2
    }
  ]
})
