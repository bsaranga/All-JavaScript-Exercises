// Get elements by class name

const items = document.getElementsByClassName('collection-item'); //globally

console.log(items);
console.log(items[0])

items[0].style.color = 'red';
items[3].textContent = 'Hello';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item'); //locally on ul elements

console.log(listItems);

// Get elements by tag name

console.clear();

let lis = document.getElementsByTagName('li');

// Convert lis to an array

lis = Array.from(lis);

lis.reverse();

console.log(lis);

lis.forEach((li,index) => {
  li.style.color = 'blue';
  li.textContent = `${index} - Item`;
});

// Using Query Selector All

console.clear();

const items2 = document.querySelectorAll('ul.collection li.collection-item');
console.log(items2);

items2.forEach((e,index) => {
  e.style.color = 'green';
  e.textContent += ` - ${index}`;
})

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach((item,index) => {
  item.style.background = '#ccc';
})

liEven.forEach((item,index) => {
  item.style.background = 'rgba(50,128,10,0.2)';
})