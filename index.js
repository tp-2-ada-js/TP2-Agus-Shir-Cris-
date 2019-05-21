var task
var newTask
var taskList


allTask = [
    
]

var enterKeyPress = function(event){
    if( event.code === 'Enter'){ 
        sendTask()
      }  
}

var printTask = function(){
    taskList = document.getElementById("taskList")
    taskList.innerHTML = ""
    doneTaskList = document.getElementById('doneTaskList')
    doneTaskList.innerHTML = ''
    allTask.map(function(assignment, index){
        var taskItem = document.createElement("li")
        taskItem.classList.add("assignment")
        taskItem.innerText = assignment.text
        taskItem.appendChild(createBtn('toggle', index, toggleItem))
        taskItem.appendChild(createBtn('delete', index, deleteItem))
        if(assignment.pending){
            taskList.appendChild(taskItem)
          } else {
            doneTaskList.appendChild(taskItem)
          }
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

var createBtn = function(text, itemId, btnFuction){
    var btn = document.createElement('button')
    btn.innerText = text
    btn.id = itemId
    btn.onclick = function(){ btnFuction(this) }
    return btn
  }

  var toggleItem = function(btn){
    console.log(btn.id)
    allTask[btn.id].pending = !allTask[btn.id].pending
    printTask()
  }

  var deleteItem = function(btn){
    // splice elimina del array al elemento especificado por su indice.
    allTask.splice(btn.id, 1)
    printTask()
  }