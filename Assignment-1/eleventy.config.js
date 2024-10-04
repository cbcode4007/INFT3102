module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("bundle.css");

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
}