const path = require("path");
module.exports = {
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, "src/assets/"),
      '@components': path.resolve(__dirname, "src/components/"),
      '@pages': path.resolve(__dirname, "src/pages/"),
      '@state': path.resolve(__dirname, "src/state/"),
      '@styles': path.resolve(__dirname, "src/styles/"),
      '@utils': path.resolve(__dirname, "src/utils/"),
    }
  }
}