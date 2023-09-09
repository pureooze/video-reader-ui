module.exports = function(eleventyConfig) {
	// Output directory: _site
  
	// Copy `img/` to `_site/img`
	eleventyConfig.addPassthroughCopy("2023-9-9_14-14-39.csv")
};