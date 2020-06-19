import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

let Game = () => import('@/view/game');

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: '',
            redirect: '/game'
        },
        {
            path: '/game',
            name: 'game',
            component: Game
        },
    ]
});


export default router;
