const readline = require('readline');

const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

let toDoList = [];

function askForTask(){
  rl.question("Enter a task (or type 'edit' to edit a task,or type 'remove' to remove a task,or type 'done' to finish): ", task => {
    if (task.toLowerCase() =='done'){
      displayTasks();
      rl.close();
    }
    else if(task.toLowerCase() == 'remove'){
      displayTasks();
      removeTask();
    }
    else if(task.toLowerCase() == 'edit'){
      displayTasks();
      editTask();
    }
    else{
        toDoList.push(task);
        askForTask();
      
    }
  });
}


function displayTasks(){
  console.log("Your To-Do-List:")
  toDoList.forEach((task1,index) =>{
    console.log(`Taks ${index +1}: ${task1}`)
  });
}


function removeTask(){
  rl.question("Enter the task number you want to remove: ", function(taskNumber){
    const taskIndex = parseInt(taskNumber) - 1;
    if(taskIndex >= 0 && taskIndex < toDoList.length){
      toDoList.splice(taskIndex, 1);
      console.log("Task Removed Successfully")
    }
    else{
      console.log("Invalid Task Number! Please try again");
    }
    askForTask();
  });
}

function editTask(){
  rl.question("Enter the task number you want to edit: ", function(taskNumber){
    const taskIndex = parseInt(taskNumber) - 1;
    if(taskIndex >= 0 && taskIndex < toDoList.length){
      rl.question("Enter the new description for the task: ", function(newDescription){
        toDoList[taskIndex] = newDescription;
        console.log("Task List Updated successfully");
        displayTasks();
      })
    }
  })
}

askForTask();
