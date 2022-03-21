module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/sass/base/grid.sass"; @import "@/sass/base/sizing.sass";',
      },
    },
  },
};
