import "../scss/main.scss";
import $ from "jquery";
import * as bootstrap from "bootstrap";

$(function () {
  const $form = $(".js--form");
  const $input = $(".js--form__input");
  const $todosWrapper = $(".js--todos-wrapper");

  async function fetchTodos() {
    const res = await fetch("http://localhost:5000/api/todos");
    const todos = await res.json();
    renderTodos(todos);
  }

  async function createTodo(text) {
    await fetch("http://localhost:5000/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, completed: false }),
    });
    fetchTodos();
  }

  async function toggleTodo(todo) {
    await fetch(`http://localhost:5000/api/todos/${todo._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !todo.completed }),
    });
    fetchTodos();
  }

  async function deleteTodo(id) {
    await fetch(`http://localhost:5000/api/todos/${id}`, {
      method: "DELETE",
    });
    fetchTodos();
  }

  function renderTodos(todos) {
    $todosWrapper.empty();
    todos.forEach((todo) => {
      const $li = $("<li>")
        .addClass("todo-item")
        .toggleClass("todo-item--checked", todo.completed);

      const $checkbox = $("<input type='checkbox'>")
        .prop("checked", todo.completed)
        .on("change", () => toggleTodo(todo));

      const $span = $("<span>")
        .addClass("todo-item__description")
        .text(todo.text)
        .on("click", () => {
          $("#modalTaskText").text(todo.text);
          const modal = new bootstrap.Modal(
            document.getElementById("taskModal")
          );
          modal.show();
        });

      const $deleteBtn = $("<button>")
        .addClass("btn btn-danger btn-sm ms-2 todo-item__delete")
        .text("delete")
        .on("click", () => deleteTodo(todo._id));

      $li.append($checkbox, $span, $deleteBtn);
      $todosWrapper.append($li);
    });
  }

  $form.on("submit", function (e) {
    e.preventDefault();
    const text = $input.val().trim();
    if (!text) return;
    createTodo(text);
    $input.val("");
  });

  fetchTodos();
});
