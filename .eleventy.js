// const { JSDOM } = require('jsdom');

module.exports = (eleventyConfig) => {

    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("src/js");

    // eleventyConfig.addTransform('headerJumpLinks', (content, outputPath) => {
    //     if (!outputPath.endsWith('.html')) {
    //       return content;
    //     }
    
    //     const dom = new JSDOM(content);
    //     const document = dom.window.document;
    
    //     const [...headings] = document.querySelectorAll(options.headerSelectors);
    
    //     headings.forEach((heading) => {
    //       const text = heading.innerHTML;
    //       const slug = text.toLowerCase().replace(/[\W+]/g, '-');
    
    //       heading.setAttribute('id', slug);
    
    //       const link = document.createElement('a');
    //       link.setAttribute('href', `#${slug}`);
    //       link.innerHTML = '🔗 bookmark';
    
    //       heading.appendChild(link);
    //     });
    
    //     return `<!doctype html>${document.documentElement.outerHTML}`;
    //   });

    return {
        dir: {
            input:'src',
            output:'dist'
        },
        markdownTemplateEngine: 'njk'
    }
}