<template>
  <div class="saas">
    <Header/>
    <v-toolbar
      color="primary"
      dark
      extended
      flat>
    </v-toolbar>

    <v-card
      class="mx-auto"
      max-width="1200"
      style="margin-top: -64px;"
    >
      <v-data-table
      v-model="search"
    :headers="headers"
    :items="desserts"
    :search="search"
    :footer-props="{itemsPerPageText: 'Itens por página'}"
    sort-by="url"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Listagem dos Sistemas</v-toolbar-title>
        
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Procurar"
        single-line
        hide-details
      ></v-text-field>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Adicionar Novo
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.nome"
                      label="Nome"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.url"
                      label="URL"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Salvar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Você tem certeza que quer deletar esse item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">Sim!</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.acoes="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
    </v-card>
<br>
  </div>
</template>


<script>
import Header from '../components/Header.vue'

  export default {
    components: { Header
    },
    data: () => ({
      dialog: false,
      dialogDelete: false,
      search: '',
      headers: [
        { text: 'ID', align: 'start', sortable: false, value: 'name' },
        { text: 'Nome', value: 'nome' },
        { text: 'Status', value: 'status' },
        { text: 'Criado em:', value: 'dataCadastro' },
        { text: 'URL', value: 'url' },
        { text: 'Ações', value: 'acoes', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        url: 0,
        status: 0,
        nome: 0,
        dataCadastro: 0,
      },
      defaultItem: {
        name: '',
        url: 0,
        status: 0,
        nome: 0,
        dataCadastro: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Adicionar Sistema' : 'Editar Sistema'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            name: '0001',
            url: 'https://doacoesbethania.com.br',
            status: 'Ativo',
            nome: 'Comunidade Bethânia',
            dataCadastro: '07/10/2020',
          },
          {
            name: '0002',
            url: 'https://doar.ironispuldaro.com.br',
            status: 'Ativo',
            nome: 'Missionário Ironi Spuldaro',
            dataCadastro: '05/11/2020',
          },
          {
            name: '0003',
            url: 'https://doar.passiodomini.com.br',
            status: 'Ativo',
            nome: 'Comunidade Católica Passio Domini',
            dataCadastro: '07/02/2021',
          },
          {
            name: '0004',
            url: 'https://doacoesbethania.com.br',
            status: 'Ativo',
            nome: 'Comunidade Bethânia',
            dataCadastro: '07/02/2021',
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
      methods: {
      getColor (url) {
        if (url > 400) return 'red'
        else if (url > 200) return 'orange'
        else return 'green'
      },
    },      
    },
  }
</script>
