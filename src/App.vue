<template>
  <v-app>
    <Header />
    <v-conntent>
      <v-row>
        <ArticleList></ArticleList>
      </v-row>
    </v-conntent>
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
