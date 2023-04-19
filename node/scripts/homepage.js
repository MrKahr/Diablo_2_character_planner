/*
* Purpose: To dynamically create the home page on load as html file when requested by user  
* Author: MKHA 
* Last Modified: 15/04/2023
*/
/**
 * @param {*} type 
 * @param {*} placement 
 * @param {*} attr_type 
 * @param {*} attr_content 
 */
function addElement(type, placement, attr_type, attr_content){
    const element = document.createElement(type);
    const position = document.querySelector(placement);
    position.setAttribute(attr_type, attr_content);
    position.appendChild(element);
}

addElement("a", "h1", "href","https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute");