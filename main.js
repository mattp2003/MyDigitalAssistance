const task_input = document.getElementById('task-input');           // Input for task
const add_task_button = document.getElementById('add-task-button'); // Button to add task
const task_container = document.getElementById('task-container');   // Container which stores tasks


function timeUpdate() {
    /*  Updates the time on the index.html page every minute
        to match the current time  
    */

    const time_obj = document.querySelector('.time');
    const current_time = new Date(); // current time
    const date = current_time.toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
  
    let hours = current_time.getHours();     // stores hours
    let minutes = current_time.getMinutes(); // stores minutes
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;

    if (hours === 0){   // hours is 12am or 12pm if it equals 0
        hours = 12;
    }
  
    // Add leading zeros to minutes
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
  
    const format = `${hours}:${minutes} ${ampm}`;
  
    // Update value on HTML and format it so the date appears above the time
    time_obj.innerHTML = `${date}<br>${format}`;
  }


function add_task() {
    /*  Adds a new task to the task column based on user input
    */
    const task_text = task_input.value.trim(); // Get the input value and remove whitespace

    if (task_text === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new task
    const task_element = document.createElement('div');
    task_element.classList.add('task');     // Add styling to task element
    task_element.textContent = task_text;

    // Append the note to the container
    task_container.appendChild(task_element);

    let tasks = JSON.parse(localStorage.getItem('tasks'));  // Retrieve task array from local storage
    if (tasks === null) {
        tasks = []; 
    }

    tasks.push(task_text);  // Add current task to task array
    localStorage.setItem('tasks', JSON.stringify(tasks));   // Store task array back in local storage

    // Clear the input field
    task_input.value = '';
}

function load_tasks() {
    /*  Loads the tasks from the local storage and displays them
        within the tasks column
    */

    // Retrive the tasks from the local storage on the borwser
    let tasks = JSON.parse(localStorage.getItem('tasks'));  
    if (tasks === null) {   // if no tasks found, empty list
        tasks = []; 
    }

    // Add all the loaded tasks into the task column
    tasks.forEach(task_text => {
        const task_element = document.createElement('div');
        task_element.classList.add('task');
        task_element.textContent = task_text;
        task_container.appendChild(task_element);
    });
}






// Update the time
timeUpdate();
setInterval(timeUpdate, 60000);

// Load tasks from local storage
load_tasks();
// Event listener for add-task-button
add_task_button.addEventListener('click', add_task);
