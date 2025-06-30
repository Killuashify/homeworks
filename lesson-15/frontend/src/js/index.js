import "../scss/main.scss";
import $ from "jquery";
import * as bootstrap from "bootstrap";

$(function () {
  const $form = $(".js--form");
  const $input = $(".js--form__input");
  const $todosWrapper = $(".js--todos-wrapper");

  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  function saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function renderTodos() {
    $todosWrapper.empty();
    todos.forEach((todo, index) => {
      const $li = $("<li>")
        .addClass("todo-item")
        .toggleClass("todo-item--checked", todo.completed)
        .attr("data-index", index);

      const $checkbox = $("<input type='checkbox'>")
        .prop("checked", todo.completed)
        .on("change", function () {
          todos[index].completed = !todos[index].completed;
          saveToLocalStorage();
          renderTodos();
        });

      const $span = $("<span>")
        .addClass("todo-item__description")
        .text(todo.text)
        .on("click", function () {
          $("#modalTaskText").text(todo.text);
          const modal = new bootstrap.Modal(
            document.getElementById("taskModal")
          );
          modal.show();
        });

      const $deleteBtn = $("<button>")
        .addClass("btn btn-danger btn-sm ms-2 todo-item__delete")
        .text("delete")
        .on("click", function () {
          todos.splice(index, 1);
          saveToLocalStorage();
          renderTodos();
        });

      $li.append($checkbox, $span, $deleteBtn);
      $todosWrapper.append($li);
    });
  }

  $form.on("submit", function (e) {
    e.preventDefault();
    const text = $input.val().trim();
    if (text === "") return;
    todos.push({ text, completed: false });
    saveToLocalStorage();
    $input.val("");
    renderTodos();
  });

  renderTodos();
});
