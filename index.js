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
        taskItem.appendChild(createBtn('delete', index, deleteItem))
        taskItem.appendChild(createBtn('toggle', index, toggleItem))
        if(assignment.pending){
            taskList.appendChild(taskItem)
          } else {
            doneTaskList.appendChild(taskItem)
          }
    })
        
    
    if(taskList.children.length !== 0){
      var hidden = document.getElementById("hidden")
      hidden.classList.add("none") 
    }
    else{
      var hidden= document.getElementById("hidden")
      hidden.classList.remove("none") 
    }


    if(doneTaskList.children.length !== 0){
      var hiddenDone = document.getElementById("hiddenDone")
      hiddenDone.classList.add("none")
    }
    else{
      var hiddenDone = document.getElementById("hiddenDone")
      hiddenDone.classList.remove("none")
    }
    
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

var createBtn = function(className, itemId, btnFuction){
    var btn = document.createElement('button')
    btn.classList.add("check")
    btn.id = itemId
    btn.onclick = function(){ btnFuction(this) }
    return btn
  }

  var createBtnDelete = function(className, itemId, btnFuction){
    var btn = document.createElement('button')
    btn.classList.add("remove")
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
    allTask.splice(btn.id, 1)
    printTask()
  }

  
