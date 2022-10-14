const sitemap = require("nextjs-sitemap-generator");
const path = require("path");

sitemap({
  baseUrl: "https://gublootech.com",
  pagesDirectory: path.resolve(__dirname, '../pages/'),
  targetDirectory: path.resolve(__dirname, '../public/'),
  ignoredExtensions: ["js", "map", "mxl", "css", "jpeg", "icons"],
  ignoredPaths: [
    "404", "favicon", "index"
  ],
  extraPaths: [
    "/"
  ]

});
