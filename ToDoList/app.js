const qSel = (selector) => document.querySelector(selector);
const getById = (id) => document.getElementById(id);
const getByClass = (className) => document.getElementsByClassName(className);
const qSelAll = (selector) => document.querySelectorAll(selector);

let inputToDo = qSel("#input-todo");
let addBtn = getById("add");
let updateBtn = getByClass("upd_btn");
let editBtn = getByClass("edit-btn");
let deleteBtn = getByClass("del-btn");
let todoList = getById("todo-list");

inputToDo.addEventListener("click", () => {
  inputToDo.style.backgroundColor = "#dde1e7";
  inputToDo.style.border = "none";
});

const createItem = function () {
  let li = document.createElement("li");
  li.classList.add("list-group-item", "shadow-sm");
  li.innerHTML += `${inputToDo.value}`;
  let div = document.createElement("div");
  div.classList.add("editDel");

  let createEditButton = document.createElement("a");
  createEditButton.classList.add("edit-btn");
  createEditButton.innerHTML = "<i class='fa fa-pen-nib'></i>";

  let createDeleteButton = document.createElement("a");
  createDeleteButton.classList.add("del-btn");
  createDeleteButton.innerHTML = "<i class='fa fa-trash'></i>";

  div.appendChild(createEditButton);
  div.appendChild(createDeleteButton);
  li.appendChild(div);

  todoList.appendChild(li);
};

const removeItem = function () {
  for (let index = 0; index < deleteBtn.length; index++) {
    const element = deleteBtn[index];

    element.addEventListener("click", function () {
      this.parentNode.parentNode.remove();
    });
  }
};

const editItem = function () {
  for (let index =0;index<editBtn.length;index++) {
    const edit = editBtn[index];
    edit.addEventListener("click", function () {
      let textNode = this.parentNode.parentNode.childNodes[0];
      inputToDo.value = textNode.data.trim();
      updateItem(textNode);
    });
  }
};

const updateItem=function(text){
    updateBtn[0].addEventListener('click',function(){
        text.data=inputToDo.value;
    })
}

const addItem = function () {
  addBtn.addEventListener("click", function () {
    if (inputToDo.value) {
      createItem();
    }
    removeItem();
    editItem();
  });

  inputToDo.value='';
};

addItem();
