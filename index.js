const todoList = document.getElementById("todoList");
const taskInput = document.getElementById("taskInput");

let tasks = [];

function addTask() {
   const task = taskInput.value.trim();

   if (task !== "") {
       tasks.push(task);
       taskInput.value = "";
       renderTasks();
   }
}

function renderTasks() {
   todoList.innerHTML = tasks.map(task => {
       const listItem = document.createElement("li");
       listItem.textContent = task;
       listItem.classList.add("todo");

       return listItem;
   }).join("");
}

// Render initial tasks
renderTasks();

// Add event listeners
taskInput.addEventListener("keydown", (event) => {
   if (event.key === "Enter") {
       addTask();
   }
});

todoList.addEventListener("click", (event) => {
   if (event.target.tagName === "LI") {
       const index = tasks.indexOf(event.target.textContent);
       const isComplete = event.target.classList.contains("complete");

       if (isComplete) {
           tasks.splice(index, 1);
       } else {
           tasks.splice(index, 0, tasks.splice(index, 1)[0]);
       }

       renderTasks();
   }
});


// Save tasks to local storage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
 }
 
 // Load tasks from local storage
 function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        renderTasks();
    }
 }
 
 // Load initial tasks from local storage
 loadTasks();
 
 // Add event listeners to save tasks when tasks are changed
 todoList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        saveTasks();
    }
 });
 
 taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
        saveTasks();
    }
 });


const priorityInput = document.createElement("input");
priorityInput.type = "number";
priorityInput.placeholder = "Priority (1-5)";
priorityInput.style.marginBottom = "10px";

todoList.appendChild(priorityInput);

//priorityInput.addEventListener("keydown", (