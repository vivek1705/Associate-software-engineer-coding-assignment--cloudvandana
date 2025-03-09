
document.addEventListener("DOMContentLoaded", function() {
    const addBtn = document.getElementById('addBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    let tasks = [];
  
    // Load tasks from localStorage if available
    function loadTasks() {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        tasks = JSON.parse(storedTasks);
      }
      displayTasks();
    }
  
    // Save tasks array to localStorage
    function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    // Display tasks in the list
    function displayTasks() {
      // Clear existing list items
      taskList.innerHTML = '';
      // Iterate over tasks array (newest tasks are at the start)
      tasks.forEach((task, index) => {
        const li = document.createElement('li');
        if (task.completed) {
          li.classList.add('completed');
        }
        
        // Create a span for task text to enable toggling completion
        const span = document.createElement('span');
        span.textContent = task.text;
        span.classList.add('task-text');
        span.addEventListener('click', () => {
          // Toggle the completion state
          tasks[index].completed = !tasks[index].completed;
          saveTasks();
          displayTasks();
        });
        
        li.appendChild(span);
  
        // Create a remove button for deleting the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');
        removeBtn.addEventListener('click', () => {
          tasks.splice(index, 1);
          saveTasks();
          displayTasks();
        });
        li.appendChild(removeBtn);
  
        taskList.appendChild(li);
      });
    }
  
    // Add a new task to the list
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        // Add new tasks at the beginning of the array
        tasks.unshift({ text: taskText, completed: false });
        saveTasks();
        displayTasks();
        taskInput.value = "";
      }
    }
  
    // Event listener for clicking the Add button
    addBtn.addEventListener('click', addTask);
  
    // Allow adding tasks by pressing the Enter key
    taskInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        addTask();
      }
    });
  
    // Initialize the to-do list by loading any saved tasks
    loadTasks();
  });
  