let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes

val = list.childNodes; // returns a node list

// Get children

val = list.children; // returns an html collection

val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

val = list.children[3].children[0];

val = list.firstChild; // includes non-elements.
val = list.firstElementChild; // returns only elements.

val = list.childElementCount; // returns the count of child elements

console.clear();

val = listItem.parentNode;
val = listItem.parentElement;

// Getting parents of parents

val = listItem.parentElement.parentElement;

// Getting siblings

console.clear();

val = listItem.nextSibling; // includes non-elements
val = listItem.nextElementSibling;

// Get Previous Sibling

val = listItem.previousElementSibling; // null, because there's no previous element-sibling

console.log(val);