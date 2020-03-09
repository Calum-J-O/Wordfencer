"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 
 * @param {*} document the HTML document to be manipulated by the generator
 * @param {*} window the window of the page so we can assing the jQuery variable
 * 
 * @returns {number} a random developer assigned number
 */
var generate = function generate(document, window) {
  window.jQuery = _jquery["default"];
  console.log('document: ', document);
  console.log('window: ', window);
  return 1;
};

exports.generate = generate;