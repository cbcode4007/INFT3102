
/*
    Author:      Colin Bond
    Date:        October 4 2024
    File:        eleventy.config.js
    Description: Configuration file to control various happenings during eleventy --serve, including which files are copied over to the output and what that output is set as (dist in our case)
*/

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.addPassthroughCopy("20220906_143453.png");
    eleventyConfig.addPassthroughCopy("java.jpg");
    eleventyConfig.addPassthroughCopy("csharp.jpg");
    eleventyConfig.addPassthroughCopy("cobol.png");
    eleventyConfig.addPassthroughCopy("android.png");
    eleventyConfig.addPassthroughCopy("maxresdefault.jpg");
    eleventyConfig.addPassthroughCopy("mongo.jpg");

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
}