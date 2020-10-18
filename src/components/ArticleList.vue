<template>
  <div>
    <h1>記事取得</h1>
    <button class="btn btn-primary" @click="getAeticle">GetArticle</button>
    <h2>Result: {{ article }}</h2>
    <h2>Button: {{ msg }}</h2>
    <h2>ReturnMsg: {{ returnMsg }}</h2>
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
      msg: 'start'
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
    getAeticle: function () {
      let request = new GetByIDRequest()
      request.setId(1)
      this.client.getAeticle(request, {}, (err, response) => {
        if (err) console.log(err)
        console.log(response.toObject())
        this.article = response.toObject()
        this.msg = 'put'
      })
    },
    returnMsg: function () {
      return 'Return Message'
    }
  }
}
</script>
