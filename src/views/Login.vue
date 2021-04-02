<template>
  <div class="TelaLogin">
    <v-card
      id="logincard"
    >
      <v-row justify="center"  style="">
        <v-img
        max-width="160px"
        src="https://digitalcombo.com.br/wp-content/uploads/2020/02/digital-combo-logo.png"
        id="loginlogo"
        ></v-img>
      </v-row>
        <v-form style="margin-right: 8%;margin-left: 8%;margin-bottom: 3%">
              <v-text-field v-model="login"
              :rules="[rules.required, rules.min]"
              prepend-icon="mdi-account" name="Username" label="Username ou E-mail"></v-text-field>
              <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Senha"
              prepend-icon="mdi-key"
              @click:append="show1 = !show1"
            ></v-text-field>
              <v-card-actions style="margin-top: 25px;">
                <v-btn rounded large block dark color="green">Login</v-btn>
              </v-card-actions>
              <br>
              <div style="text-align: center">
              <a href="/recuperar-senha">Esqueceu a senha?</a>
              </div>
        </v-form>
        <v-divider>
        </v-divider>
    </v-card>
  </div>
</template>

<script>

export default {
  name: 'Login',
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
  #logincard{
  position: relative;
  left: 50%;
  transform: translate(-50%, 50%);
  border-radius: 25px;
  margin-top: -25px;
  margin-bottom: -25px;
  max-width: 40%;

}
.TelaLogin{
  height: 99%;
  background: url("https://doacoesbethania.com.br/wp-content/uploads/2020/10/fundo_campanha-2.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
}

@media (max-device-width: 600px) {
  #logincard{
  position: relative;
  left: 50%;
  transform: translate(-50%, 15%);
  border-radius: 25px;
  max-width: 85%;

}
.TelaLogin{
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