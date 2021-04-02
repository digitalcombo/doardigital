<template>
  <div class="home">
    <v-img
    src="https://doacoesbethania.com.br/wp-content/uploads/2020/10/fundo_campanha-2.jpg"
    >
      <v-container style="margin-top: 8%">
        <v-layout fill-height class="white--text">
          <v-flex>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
    data () {
      return {
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: '',
        rules: {
          required: value => !!value || 'Requerido.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`E-mail ou senha incorretos`),
        },
      }
    },
  }
</script>

<style scoped>
#loginarea{
  margin-left: 20px;
  margin-right: 20px;

}
#logincard{
  margin-top: 7%;
  border-radius: 25px;
}
#loginlogo{
  margin-top: 25px;
  margin-bottom: 25px;
}

</style>