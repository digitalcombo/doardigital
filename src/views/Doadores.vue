<template>
  <div class="Doadores">
    <Header/>
    <v-container fluid>
    <v-card>
      <v-data-table
        v-model="selectedUsers"
        show-select
        :headers="headers"
        :items="users"
        :search="searchQuery"
        class="flex-grow-1"
      >
        <template v-slot:item.id="{ item }">
          <div class="font-weight-bold"># {{ item.id }}</div>
        </template>

        <template v-slot:item.email="{ item }">
          <div class="d-flex align-center py-1">
            <div class="ml-1 caption font-weight-bold">
              {{ item.email }}
            </div>
          </div>
        </template>

        <template v-slot:item.status="{ item }">
          <v-chip>Sim</v-chip> <v-chip>Não</v-chip>
          <v-chip>Sim</v-chip> <v-chip>Não</v-chip>
          <v-icon v-if="item.status" small color="success">
            mdi-check-circle
          </v-icon>
          <v-icon v-else small color="warning">
            mdi-minus-circle
          </v-icon>
        </template>

        <template v-slot:item.disabled="{ item }">
          <div>{{ item.disabled.toString() | capitalize }}</div>
        </template>

        <template v-slot:item.role="{ item }">
          <v-chip
            label
            small
            class="font-weight-bold"
            :color="item.role === 'ADMIN' ? 'primary' : undefined,"
          >{{ item.role | capitalize }}</v-chip>
        </template>

        <template v-slot:item.created="{ item }">
          <div>{{ item.created }}</div>
        </template>

        <template v-slot:item.lastSignIn="{ item }">
          <div>{{ item.lastSignIn }}</div>
        </template>

        <template v-slot:item.action="{ }">
          <div class="actions">
            <v-btn icon to="#">
              <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
    <v-sheet>
    <v-container class="py-4 py-lg-8">
      <v-row>
        <v-col cols="12" md="6">
          <h2 class="text-h3 text-lg-h2 mt-0 mt-xl-10">Get your startup ready for business</h2>
          <div class="text-h6 text-lg-h5 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni omnis ea incidunt amet voluptate dignissimos!</div>
          <div class="mt-4">
            <router-link to="#" class="text-decoration-none font-weight-bold text-h6">Learn More</router-link>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <v-img src="../images/5.jpg" class="rounded-lg elevation-6" max-height="480"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
    <v-container class="py-6 py-lg-12 text-center">
    <h1 class="text-h4 text-sm-h3 text-md-h2 text-lg-h1">A better way to build your next <span class="primary--text">web project</span></h1>
    <h2 class="text-h6 text-sm-h5 secondary--text mt-4 w-full w-md-8-12 w-xl-half mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ex facilis ad atque natus tenetur debitis qui quisquam iure amet.</h2>
    <div class="mt-4">
      <v-btn x-large class="my-1 mx-sm-1 w-full w-sm-auto" color="primary">Get started</v-btn>
      <v-btn x-large class="my-1 mx-sm-1 w-full w-sm-auto">Learn more</v-btn>
    </div>
  </v-container>
  <v-timeline class="ma-2">
    <v-timeline-item
      v-for="n in 3"
      :key="n"
      color="red lighten-2"
      large
    >
      <template v-slot:opposite>
        <span>Tus eu perfecto</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">Lorem ipsum</v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
  <v-container fluid>
    <v-expansion-panels>
      <v-expansion-panel
        v-for="(item,i) in 5"
        :key="i"
      >
        <v-expansion-panel-header>Item</v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels accordion>
      <v-expansion-panel
        v-for="(item,i) in 5"
        :key="i"
      >
        <v-expansion-panel-header>Item</v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
  </div>
</template>



<script>
import Header from '../components/Header.vue'

export default {
  components: { Header
    },
    data () {
      return {
        chips: ['Programming', 'Playing video games', 'Watching movies', 'Sleeping'],
        items: ['Streaming', 'Eating'],
      searchQuery: '',
      selectedUsers: [],
      headers: [
        { text: 'Id', align: 'left', value: 'id' },
        { text: 'Email', value: 'email' },
        { text: 'status', value: 'status' },
        { text: 'Name', align: 'left', value: 'name' },
        { text: 'Role', value: 'role' },
        { text: 'Created', value: 'created' },
        { text: 'Last SignIn', value: 'lastSignIn' },
        { text: 'Disabled', value: 'disabled' },
        { text: '', sortable: false, align: 'right', value: 'action' }
      ],
      users: [
        { 'id':1,'email':'bfitchew0@ezinearticles.com','name':'Bartel Fitchew','status':false,'created':'2019-08-09T03:14:12Z','lastSignIn':'2019-08-14T20:00:53Z','disabled':true,'role':'EDITOR','avatar':'/images/avatars/avatar19.svg' },
        { 'id':2,'email':'tscherme1@delicious.com','name':'Tymon Scherme','status':false,'created':'2019-11-07T06:47:53Z','lastSignIn':'2019-09-20T01:11:13Z','disabled':true,'role':'EDITOR','avatar':'/images/avatars/avatar1.svg' },
        { 'id':3,'email':'dgowan2@histats.com','name':'Danette Gowan','status':false,'created':'2020-05-23T06:46:40Z','lastSignIn':'2019-06-05T10:03:10Z','disabled':true,'role':'ADMIN','avatar':'/images/avatars/avatar14.svg' },
        { 'id':4,'email':'bbroomfield3@nbcnews.com','name':'Bing Broomfield','status':true,'created':'2020-03-13T08:39:07Z','lastSignIn':'2019-09-21T04:56:23Z','disabled':true,'role':'EDITOR','avatar':'/images/avatars/avatar6.svg' },
        { 'id':5,'email':'rpitman4@cisco.com','name':'Ruy Pitman','status':false,'created':'2019-11-24T22:18:43Z','lastSignIn':'2020-05-23T15:07:18Z','disabled':true,'role':'USER','avatar':'/images/avatars/avatar1.svg' },
        { 'id':6,'email':'ldedon5@topsy.com','name':'Lucilia Dedon','status':true,'created':'2020-03-21T19:04:42Z','lastSignIn':'2020-05-19T20:12:01Z','disabled':false,'role':'USER','avatar':'/images/avatars/avatar7.svg' },
        { 'id':7,'email':'grusted6@github.io','name':'Gerti Rusted','status':true,'created':'2019-07-05T02:44:05Z','lastSignIn':'2019-07-05T11:55:38Z','disabled':true,'role':'EDITOR','avatar':'/images/avatars/avatar6.svg' },
        { 'id':8,'email':'imeconi7@etsy.com','name':'Imelda Meconi','status':false,'created':'2019-08-19T11:10:08Z','lastSignIn':'2019-07-03T07:40:23Z','disabled':true,'role':'EDITOR','avatar':'/images/avatars/avatar3.svg' },
        { 'id':9,'email':'bberthon8@archive.org','name':'Benoite Berthon','status':true,'created':'2019-05-31T22:33:05Z','lastSignIn':'2020-02-17T08:31:17Z','disabled':false,'role':'ADMIN','avatar':'/images/avatars/avatar1.svg' },
        { 'id':10,'email':'srustan9@msn.com','name':'See Rustan','status':true,'created':'2020-01-29T13:31:15Z','lastSignIn':'2020-04-08T10:57:40Z','disabled':false,'role':'USER','avatar':'/images/avatars/avatar18.svg' },
        { 'id':11,'email':'bambrosettia@dot.gov','name':'Borden Ambrosetti','status':true,'created':'2019-11-25T17:49:07Z','lastSignIn':'2019-12-04T02:08:07Z','disabled':true,'role':'USER','avatar':'/images/avatars/avatar14.svg' },
        { 'id':12,'email':'adalzellb@intel.com','name':'Aldrich Dalzell','status':false,'created':'2019-05-02T21:01:49Z','lastSignIn':'2019-09-03T20:54:17Z','disabled':true,'role':'ADMIN','avatar':'/images/avatars/avatar15.svg' },
        { 'id':13,'email':'kpiersonc@usatoday.com','name':'Kristofor Pierson','status':true,'created':'2019-12-21T04:53:45Z','lastSignIn':'2020-06-05T19:04:53Z','disabled':true,'role':'EDITOR','avatar':'/images/avatars/avatar5.svg' },
        { 'id':14,'email':'mjonked@theglobeandmail.com','name':'Mellisa Jonke','status':true,'created':'2020-03-28T18:59:34Z','lastSignIn':'2019-10-08T13:59:08Z','disabled':false,'role':'USER','avatar':'/images/avatars/avatar11.svg' },
        { 'id':15,'email':'mrzehorze@github.io','name':'Martica Rzehorz','status':true,'created':'2019-05-01T21:50:04Z','lastSignIn':'2019-10-26T23:09:49Z','disabled':true,'role':'EDITOR','avatar':'/images/avatars/avatar17.svg' },
        { 'id':16,'email':'wbeesonf@mapquest.com','name':'Wallace Beeson','status':true,'created':'2019-07-06T05:20:19Z','lastSignIn':'2019-11-03T08:02:09Z','disabled':true,'role':'USER','avatar':'/images/avatars/avatar20.svg' },
        { 'id':17,'email':'bforderg@123-reg.co.uk','name':'Bobinette Forder','status':false,'created':'2019-09-06T04:46:15Z','lastSignIn':'2020-03-15T02:42:14Z','disabled':true,'role':'EDITOR','avatar':'/images/avatars/avatar9.svg' },
        { 'id':18,'email':'cmassieh@reuters.com','name':'Courtney Massie','status':false,'created':'2019-06-17T00:36:05Z','lastSignIn':'2020-04-01T11:27:55Z','disabled':true,'role':'USER','avatar':'/images/avatars/avatar9.svg' },
        { 'id':19,'email':'jbilyardi@youtu.be','name':'Jefferson Bilyard','status':false,'created':'2019-07-11T00:15:27Z','lastSignIn':'2020-04-05T23:13:11Z','disabled':true,'role':'EDITOR','avatar':'/images/avatars/avatar6.svg' },
        { 'id':20,'email':'fdemogej@independent.co.uk','name':'Fionnula Demoge','status':false,'created':'2019-05-06T15:23:52Z','lastSignIn':'2020-05-25T15:02:42Z','disabled':false,'role':'EDITOR','avatar':'/images/avatars/avatar7.svg' },
        { 'id':21,'email':'gcicerok@sphinn.com','name':'Germana Cicero','status':false,'created':'2019-08-10T18:35:33Z','lastSignIn':'2019-06-19T22:52:25Z','disabled':true,'role':'USER','avatar':'/images/avatars/avatar15.svg' },
        { 'id':22,'email':'dchalcotl@sakura.ne.jp','name':'Dionne Chalcot','status':true,'created':'2019-09-06T15:18:46Z','lastSignIn':'2020-06-20T17:44:19Z','disabled':true,'role':'ADMIN','avatar':'/images/avatars/avatar18.svg' },
        { 'id':23,'email':'fmisselbrookm@devhub.com','name':'Fayette Misselbrook','status':false,'created':'2019-11-26T16:45:09Z','lastSignIn':'2020-06-07T04:04:25Z','disabled':false,'role':'USER','avatar':'/images/avatars/avatar19.svg' },
        { 'id':24,'email':'lgrumbridgen@unesco.org','name':'Lewie Grumbridge','status':false,'created':'2019-06-24T03:15:45Z','lastSignIn':'2020-04-19T07:22:13Z','disabled':false,'role':'ADMIN','avatar':'/images/avatars/avatar14.svg' },
        { 'id':25,'email':'lphalipo@mashable.com','name':'Liesa Phalip','status':false,'created':'2019-11-27T20:53:04Z','lastSignIn':'2020-01-28T05:41:14Z','disabled':true,'role':'EDITOR','avatar':'/images/avatars/avatar5.svg' },
        { 'id':26,'email':'eglindep@cisco.com','name':'Eduardo Glinde','status':false,'created':'2019-09-20T09:32:29Z','lastSignIn':'2020-05-15T03:54:39Z','disabled':false,'role':'ADMIN','avatar':'/images/avatars/avatar3.svg' },
        { 'id':27,'email':'kllewellinq@wisc.edu','name':'Kameko Llewellin','status':false,'created':'2020-06-12T02:40:10Z','lastSignIn':'2019-09-21T07:43:14Z','disabled':true,'role':'USER','avatar':'/images/avatars/avatar14.svg' },
        { 'id':28,'email':'aaddionizior@simplemachines.org','name':'Anstice Addionizio','status':true,'created':'2020-05-11T18:25:32Z','lastSignIn':'2019-06-01T20:12:33Z','disabled':false,'role':'ADMIN','avatar':'/images/avatars/avatar7.svg' },
        { 'id':29,'email':'rmembrys@jimdo.com','name':'Rufe Membry','status':false,'created':'2020-04-22T05:53:30Z','lastSignIn':'2020-02-07T19:55:16Z','disabled':true,'role':'USER','avatar':'/images/avatars/avatar7.svg' },
        { 'id':30,'email':'kbroadeyt@aol.com','name':'Kendrick Broadey','status':true,'created':'2019-12-28T23:05:36Z','lastSignIn':'2020-02-21T13:15:18Z','disabled':false,'role':'EDITOR','avatar':'/images/avatars/avatar9.svg' }
        ]}
    },

    methods: {
      remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
      },
      searchUser() {},
      open() {}
    },
  }
</script>
