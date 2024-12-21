// script.js
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Add a new task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create task element
  const taskItem = document.createElement("li");
  taskItem.textContent = taskText;

  // Add delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  taskItem.appendChild(deleteBtn);

  // Mark task as completed
  taskItem.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });

  // Delete task
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    taskItem.remove();
  });

  // Append task to the list
  taskList.appendChild(taskItem);

  // Clear input field
  taskInput.value = "";
});
