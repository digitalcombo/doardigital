import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Configuracoes from '../views/Configuracoes.vue'
import Metas from '../views/Metas.vue'
import Doadores from '../views/Doadores.vue'
import Doacoes from '../views/Doacoes.vue'
import Dashboard from '../views/Dashboard.vue'
import RecuperarSenha from '../views/RecuperarSenha.vue'
import NovaSenha from '../views/NovaSenha.vue'
import Saas from '../views/Saas.vue'
import Usuarios from '../views/Usuarios.vue'
import Credenciais from '../views/Credenciais.vue'
import Estilo from '../views/Estilo.vue'
import Modulos from '../views/Modulos.vue'
import Tabela from '../views/Tabela.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/configuracoes',
    name: 'Configuracoes',
    component: Configuracoes
  },
  {
    path: '/metas',
    name: 'Metas',
    component: Metas
  },
  {
    path: '/doadores',
    name: 'Doadores',
    component: Doadores
  },
  {
    path: '/doacoes',
    name: 'Doacoes',
    component: Doacoes
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/nova-senha',
    name: 'NovaSenha',
    component: NovaSenha
  },
  {
    path: '/recuperar-senha',
    name: 'RecuperarSenha',
    component: RecuperarSenha
  },
  {
    path: '/saas',
    name: 'Saas',
    component: Saas
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: Usuarios
  },
  {
    path: '/credenciais',
    name: 'Credenciais',
    component: Credenciais
  },
  {
    path: '/estilo',
    name: 'Estilo',
    component: Estilo,
  },
  {
    path: '/modulos',
    name: 'Modulos',
    component: Modulos,
  },
  {
    path: '/tabela',
    name: 'Tabela',
    component: Tabela,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
