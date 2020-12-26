{
  /* <div class="card-body">
  <h5 class="card-title">Have breakfast</h5>
  <button type="button" class="btn btn btn-primary my-2">
    Done
  </button>
  <button type="button" class="btn btn btn-primary my-2">
    Edit
  </button>
</div> */
}

function addTask(taskData) {
  let taskName = taskData.task;
 taskName = taskName.replace(/</g, "&lt").replace(/>/g, "&gt")
  $("#AllTask").append(
    "<div id='" +
      taskData.id +
      "' class=" +
      "card-body border" +
      ">" +
      "<h5 class=" +
      "card-title" +
      ">" +
      taskName +
      "</h5>" +
      "<button type=" +
      "button" +
      " class=" +
      '"btn btn btn-primary m-2 done"' +
      ">Done</button>" +
      "<button type=" +
      "button" +
      " class=" +
      '"btn btn btn-primary m-2 edit"' +
      ">Edit</button> </div>"
  );
}
//start up page
$(document).ready(function () {
  $.get(
    "https://ngounmengleang-database.herokuapp.com/todoList",
    function (data, status) {
      $.each(data, function (key, data) {
        addTask(data);
      });
    }
  );
});

//delete task
$("#AllTask").on("click", ".done", function () {
  let a = $(this).parent();
  $.ajax({
    type: "DELETE",
    url:
      "https://ngounmengleang-database.herokuapp.com/todoList/" +
      a.attr("id"),
    success: function (response) { a.remove()}
  });
 
});

//add task
$("#btnAddnew").click(function () {
  $.post(
    "https://ngounmengleang-database.herokuapp.com/todoList",
    {
      task: $("#task").val() + "",
    },
    function (data, status) {}
  );
  $.get(
    "https://ngounmengleang-database.herokuapp.com/todoList",
    function (data, status) {
      const last = data.pop();
      addTask(last);
    }
  );
});

$("#AllTask").on("click", ".edit", function () {
  $(this)
    .parent()
    .append(
      "<div> <input type='text'><button type='button' class='btn btn btn-primary m-2 btnGo'>Go</button> </div>"
    );
  $(this).hide();
  $(".btnGo").click(function () {
    if ($(this).siblings("input").val()) {
      let name =  $(this).siblings('input').val();
      $.ajax({
        data: {
          task: name
      },
        type: "PUT",
        url:
          "https://ngounmengleang-database.herokuapp.com/todoList/" + $(this).parent().parent().attr("id"),
        success: function (response) {
          $("#"+response.id+" > h5").text(response.task)
          $("#"+response.id+" > div").remove();
          $("#"+response.id+" .edit").show();
        },
      });
    }
  });
});
