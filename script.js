let tasks = [];

$(".addNew").click(function() {
   let task = $(".newToDo").val();
   tasks.push(task);
    console.log(tasks);
   $(".ToDoList").append("<li>" + task + "</li>");

    $(".numTasks").text(tasks.length);
   $(".newToDo").val(null);
});


$(".newToDo").keypress(function(event) {
    if(event.key === "Enter"){
   let task = $(".newToDo").val();
   tasks.push(task);
    console.log(tasks);
   $(".ToDoList").append("<li>" + task + "</li>");

     $(".numTasks").text(tasks.length);
   $(".newToDo").val(null);
    }
});