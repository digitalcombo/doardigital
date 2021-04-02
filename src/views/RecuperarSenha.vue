<template>
  <div class="test">
    <v-card
      id="loginRecupera"
    >
      <v-toolbar flat>
        <v-toolbar-title class="grey--text" style="margin-right: 2%;margin-left: 2%;margin-top: 2%;">
          Recuperar Senha
        </v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>
      <v-form style="margin-right: 8%;margin-left: 8%;margin-bottom: 3%">
            <v-text-field prepend-icon="mdi-email" name="Email" label="Informe o E-mail da sua conta"></v-text-field>
            <v-card-actions style="margin-top: 25px;">
              <v-btn rounded large block dark color="green">Recuperar Senha</v-btn>
            </v-card-actions>
            <br>
            <div style="text-align: center">
            <a href="/login">Fazer Login</a>
            </div>
            </v-form>
      <v-divider>
        
      </v-divider>
    </v-card>
  </div>
</template>

<script>

export default {
  name: 'RecuperarSenha',
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
@media only screen and (min-width: 601px) {
  #loginRecupera{
  position: relative;
  left: 50%;
  transform: translate(-50%, 68%);
  border-radius: 25px;
  margin-top: -25px;
  margin-bottom: -25px;
  max-width: 40%;

}
.test{
  height: 99%;
  background: url("https://doacoesbethania.com.br/wp-content/uploads/2020/10/fundo_campanha-2.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
}

@media (max-device-width: 600px) {
  #loginRecupera{
  position: relative;
  left: 50%;
  transform: translate(-50%, 15%);
  border-radius: 25px;
  max-width: 85%;

}
.test{
  height: 82%;
  background: url("https://doacoesbethania.com.br/wp-content/uploads/2020/10/fundo_campanha-2.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
}

#loginlogo{
  margin-top: 25px;
  margin-bottom: 25px;
}




</style>

