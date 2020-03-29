document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const createTaskForm = document.getElementById("create-task-form");
  createTaskForm.addEventListener("submit", addTaskToDOM);
});
 
function addTaskToDOM(event) {
    event.preventDefault()
    console.log("form submit", event);
    const newTaskDescriptionInput = document.getElementById("new-task-description");
    const newTaskDescription = newTaskDescriptionInput.value;
    tasks.innerHTML += `<li>${newTaskDescription}</li>`;
    newTaskDescription.value = "";
}