const btn = document.querySelector("button");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
let isEditing = false;
let counter = 0;
let idToEdit = null;
const tasks = [];

function printTasks() {
    ul.innerHTML = "";
    tasks.forEach((obj, index) => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const edit = document.createElement("i");
        const del = document.createElement("i");

        span.innerHTML = obj.task;
        edit.classList.add("fa-solid", "fa-pencil");
        del.classList.add("fa-solid", "fa-trash");

        del.addEventListener("click", (e) => {
            tasks.splice(index, 1);
            printTasks();
        });

        edit.addEventListener("click", (e) => {
            input.value = obj.task;
            isEditing = true;
            idToEdit = obj.id;
            btn.textContent = "Edit Task";
            input.focus();
        });

        li.append(span, edit, del);
        ul.append(li);
    });
}

btn.addEventListener("click", (e) => {
    if (input.value.trim() === "") {
        alert("You must write something!");
        return;
    } else {
        if (isEditing) {
            tasks.forEach(task => {
                if (task.id === idToEdit) {
                    task.task = input.value;
                }
            });
            isEditing = false;
            idToEdit = null;
            btn.textContent = "Add Task";
        } else {
            const obj = {
                id: ++counter,
                task: input.value
            };
            tasks.push(obj);
        }

        input.value = "";
        input.focus();

        printTasks();
    }


});
