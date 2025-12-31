const addBtn = document.getElementById("addBtn");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
    const task = input.value.trim();

    if (task === "") {
        alert("Écris une tâche !");
        return;
    }

    const li = document.createElement("li");
    li.textContent = task;

    taskList.appendChild(li);
    input.value = "";
});

