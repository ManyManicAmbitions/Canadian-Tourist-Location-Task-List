const taskForm = document.getElementById("taskForm");
const confirmationDiv = document.getElementById("confirmed");

    taskForm.addEventListener("submit", createTask);

    function createTask(event){
        event.preventDefault();

        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const location = document.getElementById("location").value;
        const priority = document.getElementById("priority").value;

        document.getElementById("confirmation").textContent = "Task created";

    }
