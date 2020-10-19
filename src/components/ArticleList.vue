<template>
  <div>
    <v-row
      ><v-col cols="12" sm="6" md="3">
        <v-card class="mx-auto" max-width="300" tile>
          <v-list flat>
            <v-subheader>記事フィード</v-subheader>
            <v-list-item-group v-model="item" color="primary">
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col>
        <h1>記事取得</h1>
        <v-col cols="12" sm="6" md="3">
          <v-text-field v-model="AerticleId" label="記事ID" type="text">
            <template #append-outer>
              <v-btn color="primary" @click="getAeticle()">取得</v-btn>
            </template>
          </v-text-field>
        </v-col>
        <h2>Result: {{ article }}</h2>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { GetByIDRequest } from '../grpc/article_pb.js'
import { ArticleServiceClient } from '../grpc/article_grpc_web_pb.js'

export default {
  name: 'ArticleList',
  data() {
    return {
      article: Object,
      AerticleId: 1,
      item: 1,
      items: [
        { text: 'トレンド', icon: 'mdi-trending-up' },
        { text: 'タイムライン', icon: 'mdi-account-group' },
        { text: 'タグ', icon: 'mdi-tag-multiple' }
      ]
    }
  },
  created() {
    this.client = new ArticleServiceClient(
      'http://34.83.106.163:80',
      null,
      null
    )
  },
  methods: {
    getAeticle() {
      let request = new GetByIDRequest()
      request.setId(this.AerticleId)
      this.client.getByID(request, {}, (err, response) => {
        if (err) console.log(err)
        console.log(response.toObject())
        this.article = response.toObject()
      })
    }
  }
}
</script>
