// Mouse events

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

/*
//Click
clearBtn.addEventListener('click', runEvent);

//Double-click
clearBtn.addEventListener('dblclick', runEvent);

//Mouse-down
clearBtn.addEventListener('mousedown', runEvent);

//Mouse-up
clearBtn.addEventListener('mouseup', runEvent);

//Mouse-enter
card.addEventListener('mouseenter', runEvent);

//Mouse-leave
card.addEventListener('mouseleave', runEvent);

//Mouse-over
card.addEventListener('mouseover', runEvent); // fires when the mouse goes over other elements in the dom.
*/

//Mouse-move
card.addEventListener('mousemove', runEvent);


// Event handler
function runEvent(e) {
  console.log(`Event Type: ${e.type}\nCoods: (${e.clientX}, ${e.clientY})`);
  heading.textContent = `(${e.clientX}, ${e.clientY})`;
  document.body.style.backgroundColor = `rgb(${e.clientX}, ${e.clientY}, ${1/e.clientY})`
  e.preventDefault();
}