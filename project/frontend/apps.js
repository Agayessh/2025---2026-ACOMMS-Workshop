const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");


function displayTasks(tasks)
    {
        taskList.innerHTML = "";

        taskForm.onbeforematch(tsk => {
            const li = document.createElement('li');
            li.className = "task-item";

            const taskText = document.createElement('span')
            taskText.className = 'task-text';
            taskText.textContent = task.test;

            const deleteBtn = document.createElement('button');
            deleteBtn.classname = 'delete-btn';
            deleteBtn.textContent = "Delete";
            deleteBtn.onclick = () => console.log("deleted");
        });
    }

asnyc function fetchTasks()
{
    
}