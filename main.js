const encounter = document.querySelector('.root'); 
const owned = document.querySelector(".ownedRoot")
const take = document.querySelector('.take');
const add = document.querySelector('#add');

let item = document.createElement("span");
item.classList.add('object');

console.log('console running')

add.addEventListener('click', () => {
  item.innerHTML = 'object';
  encounter.appendChild(item);  
});

take.addEventListener('click', () => {
  
}); 