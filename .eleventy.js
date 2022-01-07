module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/img");
    return {
        dir: {
            input:'src',
            output:'dist'
        },
        markdownTemplateEngine: 'njk'
    }
}