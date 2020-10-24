const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
/*
form.addEventListener('submit', runEvent);

function runEvent(e) {

  console.log(`Event type: ${e.type}`);
  console.log(taskInput.value);
  taskInput.value = '';
  e.preventDefault();
}
*/

taskInput.value = '';
/*
taskInput.addEventListener('keydown', keyEvent);
taskInput.addEventListener('keyup', keyEvent);
taskInput.addEventListener('keypress', keyEvent);
taskInput.addEventListener('focus', focusEvent);
taskInput.addEventListener('blur', blurEvent);
taskInput.addEventListener('cut', keyEvent);
taskInput.addEventListener('copy', keyEvent);
taskInput.addEventListener('paste', keyEvent);
*/

taskInput.addEventListener('input', keyEvent);


function keyEvent(e) {
  console.log(`Event type: ${e.type}`);
}

function focusEvent(e) {
  console.log('Focused');
}

function blurEvent(e) {
  console.log('Blurred');
}