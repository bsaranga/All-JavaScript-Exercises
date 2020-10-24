// Event bubbling and event delegation

/*
document.querySelector('.card-title').addEventListener('click',
function(){
  console.log('card-title');
})

document.querySelector('.card-content').addEventListener('click',
function(){
  console.log('card-content');
})

document.querySelector('.card').addEventListener('click',
function(){
  console.log('card');
})

document.querySelector('.col').addEventListener('click',
function(){
  console.log('col');
})
*/

//const deleteItem = document.querySelector('.delete-item');
//deleteItem.addEventListener('click', deleteItemFunc);

document.body.addEventListener('click', deleteItemFunc);

function deleteItemFunc(e) {
  if(e.target.parentElement.className.includes('delete-item')){
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}