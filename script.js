var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var btn = document.getElementById("deleteAll")


// Define function for input length

function inputLength() {
  return input.value.length;
}


// Define function that add list elements and buttons

function createLiElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    // Define function that toggle done class
    var button = document.createElement("Button");
    button.appendChild(document.createTextNode("Done"));
    li.appendChild(button);
    button.onclick = toggleClassDone;
    // Define function that remove item from list
    var button = document.createElement("Button");
    button.appendChild(document.createTextNode("Delete"));
    li.appendChild(button);
    button.onclick = removeLiElement;
    //
}


function toggleClassDone(evt) {
  evt.target.parentNode.classList.toggle("done");
}

function removeLiElement(event) {
  event.target.parentNode.remove();
}


function removeAllLiElement(event) {
    var list = document.getElementById("myList");
    while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}


function addAfterClick() {
    if (inputLength() > 0) {
      createLiElement();
    }
}

function addAfterKeyPress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
      createLiElement();
    }
}



button.addEventListener("click", addAfterClick)
input.addEventListener("keypress", addAfterKeyPress)
btn.addEventListener("click", removeAllLiElement)
