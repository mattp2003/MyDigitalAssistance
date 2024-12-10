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

    // Create the task element
    const task_element = document.createElement('div');
    task_element.classList.add('task');           // Add style here

    const task_text_element = document.createElement('span');
    task_text_element.textContent = task_text;    // Add the task text here
    task_element.appendChild(task_text_element);

    // Create a container for the buttons
    const task_buttons = document.createElement('div');
    task_buttons.classList.add('task-buttons');
    task_element.appendChild(task_buttons);

    // Adds Edit button
    const edit_button = document.createElement('button');
    edit_button.textContent = 'Edit';
    edit_button.classList.add('edit-button');     // Add style here
    task_buttons.appendChild(edit_button);

    // Adds Delete button
    const delete_button = document.createElement('button');
    delete_button.textContent = 'Delete';
    delete_button.classList.add('delete-button'); // Add style here
    task_buttons.appendChild(delete_button);

    // Add event listener to delete button
    delete_button.addEventListener('click', () => {
        task_element.remove();
        delete_task(task_text);      // Deletes the task div from the column when delete is clicked
    });

    // Add event listener to edit button and opens pop-up prompt
    edit_button.addEventListener('click', () => {
        const new_text = prompt('Modify task text:', task_text_element.textContent);
        if (new_text) {
            update_task(task_text_element.textContent, new_text); // Updates the task div with new text
            task_text_element.textContent = new_text;
        }
    });

    task_container.appendChild(task_element);     // Adds task to the column

    // Store task in localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks === null) {   // if no tasks found, empty list
        tasks = []; 
    }

    tasks.push(task_text);  
    localStorage.setItem('tasks', JSON.stringify(tasks));

    task_input.value = '';   // Make the input blank
}

function load_tasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task_text => {
        // Creates task div
        const task_element = document.createElement('div');
        task_element.classList.add('task');

        // Adds task text to div
        const task_text_element = document.createElement('span');
        task_text_element.textContent = task_text; // Add task text
        task_element.appendChild(task_text_element);

        // Create a container for the buttons
        const task_buttons = document.createElement('div');
        task_buttons.classList.add('task-buttons');
        task_element.appendChild(task_buttons);

        // Add the buttons div to the task
        task_element.appendChild(task_buttons);

        // Adds Edit button
        const edit_button = document.createElement('button');
        edit_button.textContent = 'Edit';
        edit_button.classList.add('edit-button');
       
        // Adds Delete button
        const delete_button = document.createElement('button');
        delete_button.textContent = 'Delete';
        delete_button.classList.add('delete-button');
        task_buttons.appendChild(edit_button);
        task_buttons.appendChild(delete_button);


        // Adds event listener to delete button
        delete_button.addEventListener('click', () => {
            task_element.remove();
            delete_task(task_text);
        });

        // Adds event listener to edit button
        edit_button.addEventListener('click', () => {
            const new_text = prompt('Edit your task:', task_text_element.textContent);
            if (new_text) {
                update_task(task_text_element.textContent, new_text);
                task_text_element.textContent = new_text;
            }
        });

        // Adds task to column
        task_container.appendChild(task_element);
    });
}


function delete_task(task_text) {
    /*  Deletes a task from storage when the Delete button is clicked
    */
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks === null) {   // if no tasks found, empty list
        tasks = []; 
    }
    tasks = tasks.filter(task => task !== task_text);           // Remove task from task array
    localStorage.setItem('tasks', JSON.stringify(tasks));       // Convert task array into string and save it to storage
}

function update_task(old_text, new_text) {
    /*  Edits a task in storage when the Edit button is clicked
    */
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks === null) {                                       // if no tasks found, empty list
        tasks = []; 
    }
    const task_index = tasks.indexOf(old_text);
    if (task_index > -1) {
        tasks[task_index] = new_text;                           // Update the task
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
}




// Update the time
timeUpdate();
setInterval(timeUpdate, 60000);

// Load tasks from local storage
load_tasks();
// Event listener for add-task-button
add_task_button.addEventListener('click', add_task);
