$(function () {
  $(".todo-item").on("click", function () {
    const taskText = $(this).data("task");
    $("#taskText").text(taskText);
    const modal = new bootstrap.Modal(document.getElementById("taskModal"));
    modal.show();
  });
});
