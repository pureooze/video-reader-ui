module.exports = function(eleventyConfig) {
	// Output directory: _site
  
	// Copy `img/` to `_site/img`
	eleventyConfig.addPassthroughCopy("2023-9-10_4-17-04.csv")
};