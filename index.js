// la variables podrían haber sido creadas todas en una sola linea
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
        
    // esta validación se repite igual para las dos listas, podria ser una función aparte
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
    event.preventDefault();
    task = document.getElementById('commentInput');
    newTask = task.value;

    if(newTask !== ""){
    task.value = "";
    allTask.unshift({
        text:newTask,
        pending:true
    })
    // cuidado con dejar console logs en codigo final
    console.log(allTask)
    printTask()
    }
}

var createBtn = function(_nameElement, itemId, btnFuction){
  var btn = document.createElement('a')
  btn.classList.add(_nameElement)
  btn.id = itemId
  btn.onclick = function(){ btnFuction(this) }
  return btn
}

//esta funcion no está siendo usada nunca y es un clon de la anterior, deberia ser borrada
var createBtnDelete = function(_nameElement, itemId, btnFuction){
  var btn = document.createElement('a')
  btn.classList.add(_nameElement)
  btn.id = itemId
  btn.onclick = function(){ btnFuction(this) }
  return btn
}

  var toggleItem = function(btn){
    // cuidado con dejar console logs en codigo final
    console.log(btn.id)
    allTask[btn.id].pending = !allTask[btn.id].pending
    printTask()
    
  }

  var deleteItem = function(btn){
    allTask.splice(btn.id, 1)
    printTask()
  }

  
