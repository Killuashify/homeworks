$(document).ready(function () {
  $(".todo-item").on("click", function () {
    const taskText = $(this).text();
    $("#taskText").text(taskText);
    const modal = new bootstrap.Modal(document.getElementById("taskModal"));
    modal.show();
  });
});
