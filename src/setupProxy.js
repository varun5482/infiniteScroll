const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/app-api/v1/photo-gallery-feed-page/page/*", {
      target: "https://englishapi.pinkvilla.com",
      changeOrigin: true,
    })
  );
};
