<template>
<!-- Navegação -->
  <v-app id="inspire">
<!-- Fim Navegação -->
    <v-main>
      
      <!-- Conteúdo Views-->
      <router-view/>
      <!--Fim Conteúdo -->
      <Footer/>
      
      
    </v-main>
  </v-app>
</template>

<script>

import Footer from './components/Footer'
import Header from './components/Header'

  export default {
    name: 'App',
    components: {
      Footer, Header
    },
  }
</script>

<style scoped>
</style>