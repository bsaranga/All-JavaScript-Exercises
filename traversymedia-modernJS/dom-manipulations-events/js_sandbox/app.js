// Replacing elements

// Create the element

const newHeading = document.createElement('h2');

// Add an id
newHeading.id = 'task-title';

// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old element
const oldHeading = document.getElementById('task-title');

// Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// Remove an element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

lis[0].remove();

// Remove a child
list.removeChild(lis[3]);

// Classes and attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];
let val;

val = link.className;
val = link.classList; // returns a dom token list

link.classList.add('test');
link.classList.remove('test');

val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('href');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
val = link;

val.removeAttribute('title');

console.log(val);