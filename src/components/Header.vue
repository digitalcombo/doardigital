<template>
<div id='Header'>
    <v-navigation-drawer dark src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      v-model="drawer"
      app
    >
    <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ usuarioLogado.nome }}</v-list-item-title>
            <v-btn block small to="/login">
              <v-icon left>
              mdi-exit-to-app
              </v-icon>
            Logout
          </v-btn>
          </v-list-item-content>
        </v-list-item>
      </template>
      
      <v-divider></v-divider>
    <v-list shaped>
      <v-list-item-group
        v-model="selectedItem"
        color="white  "
      >
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route" v-if="Privileges.includes(link.id)"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    
    </v-navigation-drawer>

    <v-app-bar app color="white">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <img src="https://digitalcombo.com.br/wp-content/uploads/2020/02/digital-combo-logo.png" height="44px" >
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
       <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
        
          MUDAR SISTEMA
          <v-icon right>
            mdi-vector-arrange-below
          </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          v-if="item.admin==usuarioLogado.id || usuarioLogado.type=='Saas' "
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
    </v-app-bar>
</div>
</template>


<script>
import links from '../js/menus.js'
import instituicoes from '../js/instituicoes.js'
import usuarioLogado from '../js/usuario-logado.js'

export default {
    name: 'Header',
    ShowHeader: true,
    data: () => ({
      items: instituicoes,
      selectedItem: 1,
      links: links,
      drawer: false,
      Privileges: [
      'MenuDashboard', 'MenuDoacoes', 'MenuDoadores',
    ],
    usuarioLogado,
    }),
}
</script>