/*
*****param***** 
type: The type of element type be inserted e.g. anchor  
placement: The DOM-element that is the parent 
attr_type: The type of atribute to manipulate 
attr_content: The content of the attr_type
*/
function addElement(type, placement, attr_type, attr_content){
    const element = document.createElement(type);
    const position = document.querySelector(placement);
    position.setAttribute(attr_type, attr_content);
    position.appendChild(element);
}

addElement("a", "h1", "href","https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute");