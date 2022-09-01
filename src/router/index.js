/* Router */
import Vue          from 'vue';
import Router       from 'vue-router';

//MAIN
import main             from '@/views/main';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [    
    {
      path: '/',
      name: main,
      component: main
    },
  ]
})

export default router
