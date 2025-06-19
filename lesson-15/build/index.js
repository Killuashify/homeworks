"use strict";

$(function () {
  var $form = $(".js--form");
  var $input = $(".js--form__input");
  var $todosWrapper = $(".js--todos-wrapper");
  var todos = JSON.parse(localStorage.getItem("todos")) || [];
  function saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  function renderTodos() {
    $todosWrapper.empty();
    todos.forEach(function (todo, index) {
      var $li = $("<li>").addClass("todo-item").toggleClass("todo-item--checked", todo.completed).attr("data-index", index);
      var $checkbox = $("<input type='checkbox'>").prop("checked", todo.completed).on("change", function () {
        todos[index].completed = !todos[index].completed;
        saveToLocalStorage();
        renderTodos();
      });
      var $span = $("<span>").addClass("todo-item__description").text(todo.text).on("click", function () {
        $("#modalTaskText").text(todo.text);
        var modal = new bootstrap.Modal(document.getElementById("taskModal"));
        modal.show();
      });
      var $deleteBtn = $("<button>").addClass("btn btn-danger btn-sm ms-2 todo-item__delete").text("Видалити").on("click", function () {
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
    var text = $input.val().trim();
    if (text === "") return;
    todos.push({
      text: text,
      completed: false
    });
    saveToLocalStorage();
    $input.val("");
    renderTodos();
  });
  renderTodos();
});