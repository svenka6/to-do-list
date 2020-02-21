var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
  return input.value.length
}


function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    var button = document.createElement("Button");
    button.appendChild(document.createTextNode("Done"));
    li.appendChild(button);
    button.onclick = doneToDo;

    var button = document.createElement("Button");
    button.appendChild(document.createTextNode("Delete"));
    li.appendChild(button);
    button.onclick = deleteToDo;
};

function doneToDo(event) {
  event.target.parentNode.classList.toggle("done");
};

function deleteToDo(evt) {
  evt.target.parentNode.remove();
};


function createToDoClick () {
    if (inputLength() > 0) {
      createListElement();
    }
};

function createToDoEnter(evt) {
    if (inputLength() > 0 && evt.keyCode === 13) {
      createListElement();
    }
}





button.addEventListener("click", createToDoClick);
input.addEventListener("keypress", createToDoEnter)
