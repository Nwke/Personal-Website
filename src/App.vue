<template>
  <v-app id="inspire" light>
    <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>

        <v-list-tile @click="anotherPage('AboutMe')">
          <v-list-tile-action>
            <v-icon>airplay</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Обо мне</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="anotherPage('VideoMe')">
          <v-list-tile-action>
            <v-icon>assignment</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Отчетики</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="anotherPage('ScrapsPage')">
          <v-list-tile-action>
            <v-icon>mic</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Мюсельки</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Рукопись кота</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex>
            <router-view/>
          </v-flex>
        </v-layout>
      </v-container>

    </v-content>

    <v-footer app fixed>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: true
    }),
    methods: {
      anotherPage(typePage) {
        if (typePage === 'AboutMe') {
          this.$router.push({name: 'AboutMe'})
        } else if (typePage === 'VideoMe') {
          this.$router.push({name: 'YoutubePage'})
        } else if (typePage === 'ScrapsPage') {
          this.$router.push({name: 'ScrapsPage'})
        }
      }
    }
  }
</script>
