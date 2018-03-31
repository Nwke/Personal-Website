<template>
  <v-container fluid>
    <form @submit.prevent="sendCard">
      <v-layout row>
        <v-flex xs4>
          <v-subheader>Тема заметки</v-subheader>
        </v-flex>
        <v-flex xs8>
          <v-text-field
            name="input-1"
            autofocus
            v-model="title"
            required
          >1</v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs4>
          <v-subheader>Контент карточки</v-subheader>
        </v-flex>
        <v-flex xs8>
          <v-text-field
            name="input-2"
            v-model="content"
            multi-line
            required
          >1</v-text-field>
        </v-flex>
      </v-layout>

      <v-btn color="success" type="submit">

        Создать заметку!
        <span slot="loader">Loading...</span>
      </v-btn>

      <v-btn
        @click="emitClick"

        color="blue-grey"
        class="white--text">
        Добавить фон для заметки
        <input type="file" class="hidden files" @change="getImgFileWithReader" accept="image/*">
        <v-icon right dark>cloud_upload</v-icon>
      </v-btn>

    </form>



    <v-layout>
      <v-flex xs12>
        <h1 class="display-2 mt-5 mb-5">Preview</h1>
        <v-card>
          <v-card-media
            :src=avatar
            height="250px"
            class="avatar_preview"
          >
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <div class="headline"> Title</div>
              <span class="grey--text">data</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Action</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
          <v-slide-y-transition>
            <v-card-text>
              Text
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>

  import * as firebase from  'firebase'

  export default {
    name: "create-card-page",
    data: () => ({

      content: '',
      title: '',
      contentPreview: '',
      titlePreview: '',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvaIuJL7fxaR3edSVB0AaMZ6UDMg-qEU1byLTAf3rUG_vF_kZw'
    }),
    methods: {
      emitClick() {
        document.querySelector('.files').click();
      },
      getImgFileWithReader(e) {
        return new Promise((done) => {
          const fileImg = e.target.files[0];
          const reader = new FileReader();
          reader.onloadend = function () {
            done(reader.result)
          };
          if (fileImg) reader.readAsDataURL(fileImg);
        }).then((avatar) => this.avatar = avatar)
      },
      sendCard() {
        const timeCreated = this.getCurrentTime();
        const card = {
          titleCard: this.title,
          contentCard: this.content,
          avatar: this.avatar,
          timeCreated
        };
        const timeStamp = new Date().getTime();

        firebase.database().ref(`AllCards/${timeStamp}`).set(card);
        this.refreshData()
      },
      refreshData() {
        this.content = '';
        this.title = '';
        this.avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvaIuJL7fxaR3edSVB0AaMZ6UDMg-qEU1byLTAf3rUG_vF_kZw';

      },
      getCurrentTime() {
        const date = new Date();
        let [day, month, hours, minutes] = [date.getDate(), date.getMonth() + 1, date.getHours(), date.getMinutes()];
        let year = date.getFullYear().toString().replace('20', '');
        if (date.getMinutes() < 10) minutes = `0${minutes}`;
        return `${day}.${month}.${year} ${hours}:${minutes}`
  }
    }
  }
</script>

<style scoped>
  .hidden {
    display: none;
  }


</style>
