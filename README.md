# My Digital Assistance

**This is INF133 A3-A5 project by Matthew Phan (phannm) and Mukarram Ali (mukarraa).**

# Milestones:

## A3

- [x] A high level description of “what” features your final project will aim to deliver
- [x] Keeping in mind the HCI perspective, you might also include details about your target user group OR users' context.
    * This point was inspired by a question one of you asked in class and may help you think about a specific group of users or a specific context. This team is aiming to create a Digital assistant solution to help members of a household. This team might then think of both the context (i.e. household activities that need to be managed/tracked and the different members of a typical household.)
    * As another example: you might develop a Personal digital assistant to help UCI students manage their quarterly activities at school. Here, your target users are UCI students like yourself and the context could include typical activities during a quarter. 
    * Whatever target user group and context you choose, please include some information about this so we can provide you feedback and perhaps help you scope your project. 
- [x] Names of students (in pairs)
- [x] Any Templates you will build on as reference

### Task/Todo Feature:
- The user will have the ability to create tasks by clicking an "Add" button.
- Each task will have a delete button so the user can remove them.
- Tasks will be stored locally in files so their content can be saved and the columns they are categorized under are saved as well.

### Notes Feature:
- We want to allow the user to create notes with a date, and timestamp. 
- There will be a scrolling functionality to allow for finding specific notes within the Notes section of the site.
- The notes will be saved in a local file so the user can access them at any time. 
- Notes can be easily deleted by pressing a "delete" button.

### Calender & Clock Feature:
- There will be a live clock on the top of the screen which is consistent and updating to reflect the real time. 
- We will implement a calender feature as well, which will show the current day highlighted. 
- We haven't decided to use any API for our calendar feature since we haven't learned about backend development yet. However, if we decided to use, we are aiming Google Calendar.

### External API Feature (weather)
- We will use OpenWeatherMap API to access daily weather information.
- Upon external data retrieval, we automatically add weather reminders to the user's daily tasks (e.g. remember to bring your umbrella, wear your jacket, put on your sunglasses, ...).
- We will also determine a threshold level to warn the user if the weather condition would affect their daily activity (proximity).
- Connecting this feature to our calendar feature, the user would only be able to access the weather information once he/she clicks on a specific date. This would reduce the amount of data traffic that we have to constantly process.

### Additional API Feature (openai)
- Integrate an AI chat box in case the user does want its recommendation on their daily tasks.
- We could train it to focus on healthy lifestyle behaviors.
- The goal is to personalize with the user's habits and living styles.

### Potential Template References:
- Menu: [Notion Template](https://www.notion.so/)
- Tasks: [Trello Template](https://trello.com/) / [Todoist Template](https://todoist.com/)

### Target Group:
- Our app is a digital organization tool, with the intended users of our proposed solution are students who want to keep their tasks organized and need to keep notes on things they need to get done. One context would be a student who needs to complete 3 homework assignments by the end of the week. The student can keep track of each assignment by creating 3 seperate tasks for them and categorizing them in the "This Week" column. The student may also need to remember to search certain concepts for some of the homework assignments, so they would create multiple notes that list certain concepts to search up later or links they found throughout the week that will help them when they work on the assignments. This allows for optimal workflow and organization for the student, ensuring that all the work is completed on time and their resources are contained within the app.
