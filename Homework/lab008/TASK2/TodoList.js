{/* <div class="card-body">
  <h5 class="card-title">Have breakfast</h5>
  <button type="button" class="btn btn btn-primary my-2">
    Done
  </button>
  <button type="button" class="btn btn btn-primary my-2">
    Edit
  </button>
</div> */}

$("#btnAddnew").click(function(){
    $.post("https://ngounmengleang-database.herokuapp.com/todoList",
        {
        id: "1",
        task: $("#task").val()+""
        },
        function(a,b) {$("#AllTask").append(
        "<div class="+"card-body"+">"+
        "<h5 class="+"card-title"+">" + $("#task").val()+"</h5>"+
        "<button type="+"button"+" class="+"\"btn btn btn-primary m-2\""+">Done</button>"+
        "<button type="+"button"+" class="+"\"btn btn btn-primary m-2\""+">Edit</button> </div>"
    )})
   
});
