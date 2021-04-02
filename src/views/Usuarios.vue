<template>
<div class="Usuarios">
<Header/>
<v-card flat>
<v-toolbar
      color="primary"
      dark
      extended
      flat
    >
    </v-toolbar>

<v-card
      class="mx-auto"
      max-width="1100"
      style="margin-top: -64px;"
    >


    
      <v-divider></v-divider>

  <v-data-table
    :headers="headers"
    :items="tabela"
    :mobile-breakpoint="0" 
    sort-by="id"
    class="elevation-1"
  >
    <!-- CABEÇALHO DA TABELA COM TITULO E BOTÃO  -->
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Usuários</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
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
              Adicionar novo
            </v-btn>
          </template>

          <!-- POPUP ADICIONAR NOVO  -->
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
                    md="7"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Nome"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="5"
                  >
                    <v-select
                    v-model="editedItem.status"
                    :items="status"
                    label="Status"
                    multiple
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row>
                <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.telefone"
                      label="Telefone"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-select
                    v-model="editedItem.credencial"
                    label="Credencial"
                    :items="credencial"
                    multiple
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row>
                <v-col
                    cols="12"
                    sm="6"
                    md="12"
                  >
                    <v-text-field
                      v-model="editedItem.email"
                      label="Email"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      label="Nova Senha"
                      prepend-icon="mdi-key"
                      @click:append="show1 = !show1"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      label="Repetir Senha"
                      prepend-icon="mdi-key"
                      @click:append="show1 = !show1"
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

         <!-- DIALAGO DELETAR  -->
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Tem Certeza que quer Deletar?</v-card-title>
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


    <!-- STATUS NA TABELA -->
    <template v-slot:item.status="{ item }">
          <v-chip
            class="ma-2"
            v-bind:style="statusTipo"
            text-color="white"
            :color="item.status === true ? 'success' : 'red'"
            >
                <v-avatar left>
                     <v-icon v-if="item.status" small>
                        mdi-check-circle
                    </v-icon>
                    <v-icon v-else small>
                        mdi-minus-circle
                    </v-icon>
                </v-avatar>
            Ativo
        </v-chip>
         
    </template>

    <!-- CREDENCIAIS NA TABELA -->
    <template v-slot:item.credencial="{ item }">
      <v-chip-group
          column
          active-class="primary--text"
        >
      <v-chip
        v-for="tag in item.credencial.split(',')"
        :key="tag"
      >
        {{ tag  }}
      </v-chip>
      </v-chip-group>
    </template>
    

    <!-- AÇÕES (PUT / DEL) -->
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
  
  </v-data-table>
</v-card>
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

      // INFOS TABELA
      headers: [
        { id: '1', text: 'Nome', align: 'start', value: 'name' },
        { id: '2', text: 'Status', value: 'status' },
        { id: '3', text: 'Email', value: 'email', sortable: false },
        { id: '4', text: 'Credencial', value: 'credencial' },
        { id: '5', text: 'Ações', value: 'actions', sortable: false },
        
      ],
      tabela: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        status: 0,
        credencial: 0,
      },
      defaultItem: {
        name: '',
        status: 0,
        credencial: 0,
      },
      statusTipo: {
          'btn-danger': false,
          'btn-sucess': true,
      }
    }),



    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Novo Item' : 'Editar Item'
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

    // DADOS DA TABELA //

    methods: {
      initialize () {
        this.tabela = [
          {
            name: 'Digital Combo',
            status: true,
            credencial: 'Super Admin',
            email: 'contato@digitalcombo.com.br',
            telefone: '(41) 99628-3086'
          },
          {
            name: 'Admin',
            status: true,
            credencial: 'Admin',
            email: 'servidor@digitalcombo.com.br'
          },
          {
            name: 'Colaborador',
            status: false,
            credencial: 'Colaborador',
            email: 'social@digitalcombo.com.br'
          },
          {
            name: 'Financeiro',
            status: false,
            credencial: 'Financeiro',
            email: 'financeiro@digitalcombo.com.br'
          }
        ]
      },

      // Editar item da Tabela //

      editItem (item) {
        this.editedIndex = this.tabela.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      // DELETAR ITEM DA TABELA //

      deleteItem (item) {
        this.editedIndex = this.tabela.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      // CONFIRMAR DELETE DO ITEM DA TABELA //

      deleteItemConfirm () {
        this.tabela.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      // FECHAR JANELA //

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      // FECHAR JANELA AO DELETAR //

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.tabela[this.editedIndex], this.editedItem)
        } else {
          this.tabela.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>