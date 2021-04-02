<template>
  <v-data-table
    v-model="search"
    :headers="headers"
    :items="credenciais"
    class="elevation-1"
    :search="search"
    :footer-props="{itemsPerPageText: 'Itens por página'}"
  >
    <template v-slot:item.permission="{ item }">
      <v-chip-group
          mandatory
          active-class="primary--text"
        >
      <v-chip
        v-for="tag in tags"
        :key="tag"
      >
        {{ tags }}
      </v-chip>
      </v-chip-group>
    </template>
    <template v-slot:top>
        <v-toolbar
          flat
        >
            <v-dialog
              v-model="dialog"
              max-width="500px"
            >
              
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="10"
                        sm="8"
                        md="6"
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
                          v-model="editedItem.status"
                          label="Status"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    
                  </v-container>
                </v-card-text>
                <template v-slot:item.permission="{ item }">
      <v-chip
        :color="getColor(item.calories)"
        dark
      >
        {{ item.calories }}
      </v-chip>
    </template>
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
                <v-card-title class="headline">Você tem certeza que quer deletar?</v-card-title>
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
    <template v-slot:item.actions="{ item }">
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
</template>

<script>

  export default {
    data () {
      return {
        
        headers: [
          {
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Nome', value: 'nome' },
        { text: 'Status', value: 'status' },
        { text: 'Permissões', value: 'permission' },
        { text: 'Criado em:', value: 'criado' },
        { text: 'Ações', value: 'actions', sortable: false },
        ],
        tags: [
        'Dashboard',
        'Doações',
        'Doadores',
        'Módulos',
        'Usuários',
        'Metas',
        'Estilo',
        'Credenciais',
        'Configurações',
        'Saas',
      ],
        dados: [
          {
            name: 'Frozen Yogurt',
            status: 'Não', 
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            status: 'Sim',
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            status: 'Não',
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            status: 'Sim',
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            status: 'Não',
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            status: 'Talvez',
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            status: 'Sim',
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            status: 'Não',
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            status: 'Não',
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            status: 'Sim',
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      dialog: false,
      dialogDelete: false,
      search: '',
      tabela: [
        { text: 'Nome', value: 'nome' },
        { text: 'Status', value: 'status' },
        { text: 'Permissões', value: 'permission' },
        { text: 'Criado em:', value: 'criado' },
        { text: 'Ações', value: 'actions', sortable: false },
      ],
      credenciais: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        status: 0,
        status: 0,
        nome: 0,
        criado: 0,
        
      },
      }
    },

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
        this.credenciais = [
          {
            id: '0001',
            status: 'Ativo',
            nome: 'Super Admin',
            criado: '07/10/2020',
            permission: 'Configurações',
          },
          {
            id: '0002',
            status: 'Ativo',
            nome: 'Admin',
            criado: '05/11/2020',
            permission: 'Configurações',
          },
          {
            id: '0003',
            status: 'Pendente',
            nome: 'Financeiro',
            criado: '07/02/2021',
            permission: 'Configurações',
          },
          {
            id: '0004',
            status: 'Desativado',
            nome: 'Patrocinador',
            criado: '07/02/2021',
            permission: 'Configurações',
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.credenciais.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.credenciais.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.credenciais.splice(this.editedIndex, 1)
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
          Object.assign(this.credenciais[this.editedIndex], this.editedItem)
        } else {
          this.credenciais.push(this.editedItem)
        }
        this.close()
      },    
    },

    getColor (status) {
        if (status = 'Desativado') return 'red'
        else if (status = 'Pendente') return 'orange'
        else return 'green'
      },
  }
</script>