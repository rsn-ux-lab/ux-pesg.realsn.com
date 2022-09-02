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
            `,
      },
    },
  },
  outputDir: path.resolve(__dirname, "./docs"),
};
