import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/search/repositorio/',
    name: 'resultado',
    component: () => import(/* webpackChunkName: "resultado" */ '@/views/Resultados.vue')
  }
]
