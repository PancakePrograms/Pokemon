const encounter = document.querySelector('.root'); 
const owned = document.querySelector(".ownedRoot")

let item = document.createElement("span")
  
  item.classList.add("object")




function createElm() {
  
  item.innerHTML = "Object 1"
  
  encounter.appendChild(item);
}


function createElm2() {
  
  item.innerHTML = "Object 2"
  
  encounter.appendChild(item);
}
 
document.querySelector(".take").addEventListener("click", () => {
  console.log("take clicked")
  
  encounter.removeChild(item);
  
  let ownedItem = item;
  owned.appendChild(ownedItem);
})

document.getElementById("add").addEventListener("click", () => {
  if(item.innerHTML === "Object 1") {
    createElm2();
  } else {
    createElm();
  }
})
