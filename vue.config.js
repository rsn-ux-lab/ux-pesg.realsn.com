const path = require("path");

module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "P.ESG 회사소개";
      return args;
    });
  },
  publicPath: "./",
  devServer: {
    // host: "localhost", // CORS 차단 방지 실행시
    // disableHostCheck: true,
    historyApiFallback: true,
    overlay: false,
    proxy: "https://esgdevel.realsn.com",
  },
  lintOnSave: false,
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        additionalData: `
            @import "@/assets/scss/utils/_variables.scss";
            @import "@/assets/scss/utils/_mixins.scss";
            `,
      },
    },
  },
  outputDir: path.resolve(__dirname, "./docs"),
};
