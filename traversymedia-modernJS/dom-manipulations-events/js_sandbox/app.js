// DOM Selectors for Single Elements

console.log(document.getElementById('task-title'));

//Get things form an element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

// Change styling
taskTitle.style.background = 'rgba(121,112,31,0.5)';
taskTitle.style.padding = '5px';

// Change content

taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:rgb(128,128,50)">Task List</span>'

// Query Selector - (Newer and much more powerful)

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelectorAll('li').forEach((e) => e.style.color = 'red');
document.querySelector('li:nth-child(3)').style.color='blue';
document.querySelector('li:last-child').style.color='green';

document.querySelectorAll('li:nth-child(odd)').forEach(e => e.style.background = 'rgba(128,128,128,0.15)');
