// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
// Event Listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
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
  //   clear todo input value
  todoInput.value = "";
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
function deleteCheck(event) {
  console.log(event.target);
  //   delete todo
  const item = event.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
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
