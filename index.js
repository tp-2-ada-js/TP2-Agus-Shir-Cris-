var task
var newTask
var taskList


allTask = [
    {text:"", pending:true},
    {text:"", pending:true}
]

var enterKeyPress = function(event){
    if( event.code === 'Enter'){ 
        sendTask()
      }  
}

var printTask = function(){
    taskList = document.getElementById("taskList")
    taskList.innerHTML = ""
    allTask.map(function(assignment){
        var taskItem = document.createElement("li")
        taskItem.classList.add("liTask")
        taskItem.innerText = assignment.text
        taskList.appendChild(taskItem)
    })
}

var sendTask = function(){
    task = document.getElementById('commentInput');
    newTask = task.value;

    if(newTask !== ""){
    task.value = "";
    allTask.unshift({
        text:newTask,
        pending:true
    })
    console.log(allTask)
    printTask()
    }
}