# Vue.js

## Project setup

- パッケージインストール

  ```sh
  npm install
  ```

- サービス起動

  ```sh
  npm run serve
  ```

- ビルド

  ```sh
  npm run build
  ```

- Lint

  ```sh
  npm run lint
  ```

## 補足

- ESLint 関連ツールインストールは.devcontainer ではなく、アプリケーションプロジェクトの package.json の方に記述する

## コマンド
```sh
protoc --proto_path=./src/grpcspec/ .src/grpcspec/article.proto --js_out=import_style=commonjs:./src/grpc --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./src/grpc
```
* grpc clinent作成


## 参考

- [Vue.js 公式](https://v3.vuejs.org/guide/installation.html#release-notes)
- [Vue.js Extension Pack](https://marketplace.visualstudio.com/items?itemName=mubaidr.vuejs-extension-pack&ssr=false#overview)
- [Vuetify公式ドキュメント](https://vuetifyjs.com/en/introduction/why-vuetify/#guide)