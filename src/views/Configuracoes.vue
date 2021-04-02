<template>
  <div class="Dashboard">
    <Header/>
     <v-card flat>
    <v-toolbar
      color="primary"
      dark
      extended
      flat
    >
    </v-toolbar>


    <v-container class="white lighten-5"
    max-width="1200"
    style="margin-top: -64px;">
    <v-row>
      <v-col>
        <v-card
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          class="mx-auto"
          max-width="344"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
            <v-list-item-title class="headline mb-1">
           Informações
            </v-list-item-title>
             </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                 color="grey">
              </v-list-item-avatar>
          </v-list-item>
          <v-card-actions>
            <v-btn
              outlined
              rounded
              text
            >
              SAIBA MAIS
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col> 
      <v-col>
        <v-card
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          class="mx-auto"
          max-width="344"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
            <v-list-item-title class="headline mb-1">
           Credenciais
            </v-list-item-title>
             </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                 color="grey">
              </v-list-item-avatar>
          </v-list-item>
          <v-card-actions>
            <v-btn
              outlined
              rounded
              text
            >
              SAIBA MAIS
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          class="mx-auto"
          max-width="344"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
            <v-list-item-title class="headline mb-1">
           Usuários
            </v-list-item-title>
             </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                 color="grey">
              </v-list-item-avatar>
          </v-list-item>
          <v-card-actions>
            <v-btn
              outlined
              rounded
              text
            >
              SAIBA MAIS
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          class="mx-auto"
          max-width="344"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
            <v-list-item-title class="headline mb-1">
           Pagamentos
            </v-list-item-title>
             </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                 color="grey">
              </v-list-item-avatar>
          </v-list-item>
          <v-card-actions>
            <v-btn
              outlined
              rounded
              text
            >
              SAIBA MAIS
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          class="mx-auto"
          max-width="344"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
            <v-list-item-title class="headline mb-1">
           Planos
            </v-list-item-title>
             </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                 color="grey">
              </v-list-item-avatar>
          </v-list-item>
          <v-card-actions>
            <v-btn
              outlined
              rounded
              text
            >
              SAIBA MAIS
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          class="mx-auto"
          max-width="344"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
            <v-list-item-title class="headline mb-1">
           E-mails
            </v-list-item-title>
             </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                 color="grey">
              </v-list-item-avatar>
          </v-list-item>
          <v-card-actions>
            <v-btn
              outlined
              rounded
              text
            >
              SAIBA MAIS
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          class="mx-auto"
          max-width="344"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
            <v-list-item-title class="headline mb-1">
           Domínio
            </v-list-item-title>
             </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                 color="grey">
              </v-list-item-avatar>
          </v-list-item>
          <v-card-actions>
            <v-btn
              outlined
              rounded
              text
            >
              SAIBA MAIS
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          class="mx-auto"
          max-width="344"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
            <v-list-item-title class="headline mb-1">
           Privacidade
            </v-list-item-title>
             </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                 color="grey">
              </v-list-item-avatar>
          </v-list-item>
          <v-card-actions>
            <v-btn
              outlined
              rounded
              text
            >
              SAIBA MAIS
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </v-card>

<br>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  components: { Header
    },
    data () {
      return {
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },
  }
</script>
