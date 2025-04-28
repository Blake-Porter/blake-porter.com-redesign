module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/_redirects");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addCollection("sitemap", (collection) => {
    return collection.getAllSorted().filter(item => !item.data.excludeFromSitemap);
  });
  return {
    dir: { input: "src", output: "_site" },
    pathPrefix: "/",
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};
