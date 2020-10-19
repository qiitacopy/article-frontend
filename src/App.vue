<template>
  <v-app>
    <Header />
    <v-main>
      <v-row>
        <v-col><ArticleList /></v-col>
      </v-row>
    </v-main>
    <v-footer color="green" dense dark> Qiitacopy </v-footer>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import ArticleList from './components/ArticleList.vue'

export default {
  name: 'App',

  components: {
    Header,
    ArticleList
  },

  data: () => ({
    //
  })
}
</script>
