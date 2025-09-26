let input = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addTaskBtn");
let taskList = document.querySelector("#taskList");
let clearBtn = document.querySelector("#clearTasksBtn");

function addTask() {
  let taskText = input.value.trim();

  if (taskText === "") {
    alert("Add task!");
    return;
  }

  let li = document.createElement("li");
  
  let taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  
  let buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-group");
  
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖"; 
  deleteBtn.classList.add("delete-btn");

  let doneBtn = document.createElement("button");
  doneBtn.textContent = "✔"; 
  doneBtn.classList.add("done-btn");

  doneBtn.addEventListener("click", function() {
    li.classList.add("done");
    doneBtn.disabled = true;
    // Add completion animation
    li.style.animation = "none";
    li.style.transform = "scale(1.05)";
    setTimeout(() => {
      li.style.transform = "scale(1)";
    }, 150);
  });
  
  deleteBtn.addEventListener("click", function() {
    // Add removing class for animation
    li.classList.add("removing");
    
    // Remove after animation completes
    setTimeout(() => {
      if (li.parentNode) {
        taskList.removeChild(li);
      }
    }, 400); // Match the animation duration
  });

  buttonContainer.appendChild(doneBtn);
  buttonContainer.appendChild(deleteBtn);
  
  li.appendChild(taskSpan);
  li.appendChild(buttonContainer);
  taskList.appendChild(li);

  input.value = "";

  input.style.transform = "scale(0.95)";
  setTimeout(() => {
  input.style.transform = "scale(1)";
  }, 100);
}

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});

addBtn.addEventListener("click", addTask);
