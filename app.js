// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const fiterOption = document.querySelector(".filter-todo");

// Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
fiterOption.addEventListener("click", filterTodos);
// FUnctions

function addTodo(event) {
  // prevent form from submitting
  event.preventDefault();
  // create div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  todoDiv.innerHTML = `
  <li class="todo-item">${todoInput.value}</li>
  <button class = "complete-btn"><i class='fas fa-check'></i></button>
  <button class = "trash-btn"><i class='fas fa-trash'></i></button>
  `;

  //   append to ul
  todoList.appendChild(todoDiv);
  //   add todo to lacal storage
  saveLocalTodos(todoInput.value);

  //   clear todo input value
  todoInput.value = "";
  //
  //
  //   Another way to add
  //   create div
  //   const todoDiv = document.createElement("div");
  //-  todoDiv.classList.add("todo");
  //   create li
  //   const newTodo = document.createElement("li");
  //   newTodo.innerText = `hey`;
  //   newTodo.classList.add("todo-item");
  //-  todoDiv.appendChild(newTodo);
  //   check mark button
  //   const completedButton = document.createElement("button");
  //   completedButton.innerHTML = "<i class='fas fa-check'></i>";
  //   completedButton.classList.add("complete-btn");
  //-  todoDiv.appendChild(completedButton);
  //   check trash button
  //   const trashButton = document.createElement("button");
  //   trashButton.innerHTML = "<i class='fas fa-trash'></i>";
  //   trashButton.classList.add("trash-btn");
  // - todoDiv.appendChild(trashButton);
  //   append to list
  //-  todoList.appendChild(todoDiv);
  //   console.log(todoList);
}
//
function deleteCheck(event) {
  //   console.log(event.target);
  //   delete todo
  const item = event.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    deleteTodos(todo);
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }
  // check todo
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
//
function filterTodos(event) {
  const todos = todoList.childNodes;
  //   console.log(todos);
  //   console.log(event.target.value);
  todos.forEach((todo) => {
    switch (event.target.value) {
      // all
      case "all":
        todo.style.display = "flex";
        break;

      // completed
      case "completed":
        if (todo.classList?.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;

      // uncompleted
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalTodos(todo) {
  //
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach((todo) => {
    // create div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    todoDiv.innerHTML = `
        <li class="todo-item">${todo}</li>
        <button class = "complete-btn"><i class='fas fa-check'></i></button>
        <button class = "trash-btn"><i class='fas fa-trash'></i></button>
        `;

    //   append to ul
    todoList.appendChild(todoDiv);
  });
}
function deleteTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  //
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
