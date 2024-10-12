do
document.getElementById('add-task-btn').addEventListener("click", function() {
    var taskInput = document.getElementById('task-input');
    var taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== "") {
        var listItem = document.createElement("li");
        listItem.textContent = taskInput.value.trim();

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
});