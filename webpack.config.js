module.exports = {
  resolve: {
    fallback: {
      "fs": false,
      "path": require.resolve("path-browserify")
    }
  },
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      // Tu configuración de middlewares aquí
      return middlewares;
    },
  },
};