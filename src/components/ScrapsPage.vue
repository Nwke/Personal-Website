<template>
  <v-app>
    <v-layout row class="mx-auto anchor1">

      <v-progress-circular
        indeterminate
        :size="220"
        :width="7"
        color="green"
        v-if="showSpinner">

      </v-progress-circular>

      <v-flex xs12 sm12>
        <v-card class="mb-5" v-for="card in cards">
          <v-card-media
            :src=card.avatarCard
            height="230px"
          >
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <div class="headline">{{ card.titleCard }}</div>
              <span class="grey--text">{{ card.timeCreated }}</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange" @click="showShowCard"> Показать содержимое </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
          <v-slide-y-transition>
            <v-card-text class="hidden">
              {{ card.contentCard }}
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>

  import * as firebase from  'firebase'

  export default {
    name: "scraps-page",
    data: () => ({
      cards: [],
      stateBtn: 'Показать содержимое',
      showSpinner: true
    }),
    created() {
      firebase.database().ref('Total').once('value').then((snapshot) => {
        this.getContent(snapshot.val());
      })
    },
    methods: {
      getContent() {
        this.cards = [];
        firebase.database().ref(`AllCards`).once('value').then((snapshot) => {
          getCards(snapshot.val())
        });
        const _this = this;
        function getCards(card) {
          for (let key in card) {
            _this.cards.push({
              titleCard: card[key].titleCard,
              contentCard: card[key].contentCard,
              avatarCard: card[key].avatar,
              timeCreated: card[key].timeCreated
            });
          }
          document.querySelector('.anchor1').classList.remove('mx-auto');
          _this.showSpinner = false;
          _this.cards.reverse();
        }
      },


      showShowCard(e) {
        let elem = e.target;
        while (!elem.classList.contains('card')) {
          elem = elem.parentNode
        }
        elem.querySelector('.card__text').classList.toggle('hidden');
        elem.querySelector('.btn__content').innerText = elem.querySelector('.card__text').classList.contains('hidden')
          ? 'Показать содержимое'
          : 'Скрыть содержимое'
      }
    }
  }
</script>

<style scoped>

  .hidden {
    display: none;
  }

</style>
