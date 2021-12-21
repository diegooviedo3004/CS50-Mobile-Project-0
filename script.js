const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const input = document.getElementById("input");

function newTodo() {

  if(input.value === ""){
    alert("Please, type text for the TODO");
    return;
  }

  createTodo();
  updateUncheckedCount();
  updateCountSpan();
}

function createTodo(){

  let container = document.createElement("div");
  container.className = classNames.TODO_ITEM;
  list.appendChild(container);

  let text = document.createElement("p");
  text.className = classNames.TODO_TEXT;
  text.innerText = input.value;
  container.appendChild(text);

  let checkbox = document.createElement("input")
  checkbox.type = "radio";
  checkbox.className = classNames.TODO_CHECKBOX;
  checkbox.addEventListener("change",() => {
    decreaseUncheckedCountSpan();
  });
  text.appendChild(checkbox);

  let del = document.createElement("button");
  del.innerHTML = "Delete";
  del.addEventListener("click",() => {
      container.remove();
      decreaseCountSpan();
      if(!(checkbox.checked)){
        decreaseUncheckedCountSpan();
      }
  });
  del.className = classNames.TODO_DELETE;
  text.appendChild(del);

  input.value = ""
}

function updateCountSpan(){
  itemCountSpan.innerText = (parseInt(itemCountSpan.innerText) + 1) + "";
}

function updateUncheckedCount(){
  uncheckedCountSpan.innerText = (parseInt(uncheckedCountSpan.innerText) + 1) + "";
}

function decreaseCountSpan(){
  itemCountSpan.innerText = (parseInt(itemCountSpan.innerText) - 1) + "";
}
function decreaseUncheckedCountSpan(){
  uncheckedCountSpan.innerText = (parseInt(uncheckedCountSpan.innerText) - 1) + "";
}