// main.js

const form = document.querySelector(".js--form");
const input = document.querySelector(".js--form__input");
const todosWrapper = document.querySelector(".js--todos-wrapper");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  todosWrapper.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = "todo-item";
    if (todo.completed) {
      li.classList.add("todo-item--checked");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
      todos[index].completed = !todos[index].completed;
      saveToLocalStorage();
      renderTodos();
    });

    const span = document.createElement("span");
    span.className = "todo-item__description";
    span.textContent = todo.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "todo-item__delete";
    deleteBtn.textContent = "Видалити";
    deleteBtn.addEventListener("click", () => {
      todos.splice(index, 1);
      saveToLocalStorage();
      renderTodos();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todosWrapper.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (text === "") return;
  todos.push({ text, completed: false });
  input.value = "";
  saveToLocalStorage();
  renderTodos();
});

renderTodos();
