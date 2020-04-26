// Event listeners

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  let val;

  val = e;

  // Event target element
  val = e.target;

  // Event type
  val = e.type;

  // Event coordinates relative to window
  val = [e.clientX, e.clientY];

  // Event coordinates relative to element
  val = [e.offsetX, e.offsetY];

  console.log(val);
  e.preventDefault();
}