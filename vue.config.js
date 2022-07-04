const { defineConfig } = require("@vue/cli-service");

const publicPath =
  process.env.NODE_ENV === "production" ? "/gh-btc-vue-final" : "/";

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath,
});
