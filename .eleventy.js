module.exports = function(eleventyConfig) {
  let markdownIt = require("markdown-it");
  let options = {
    html: true
  };
  let markdownLib = markdownIt(options).disable('code');
  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/js");

  //custom sorts for collections
  //filters could be added here as well
  eleventyConfig.addCollection("sortedCovid", function(collectionApi) {
    return collectionApi.getFilteredByTag("covidData").sort(function(a, b) {
      return a.data.order - b.data.order; //sort by order ascending
    });
  });

  eleventyConfig.addCollection("sortedPuf", function (collectionApi) {
    return collectionApi.getFilteredByTag("pufData").sort(function(a, b) {
      return a.data.order - b.data.order; //sort by order ascending
    });
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
