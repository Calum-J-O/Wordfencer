import $ from 'jquery';

/**
 * 
 * @param {*} document the HTML document to be manipulated by the generator
 * @param {*} window the window of the page so we can assing the jQuery variable
 * 
 * @returns {number} a random developer assigned number
 */
let generate = ((document, window) => {
    window.jQuery = $;
    console.log('document: ', document);
    console.log('window: ', window);
    return 1;
});

exports.generate = generate;