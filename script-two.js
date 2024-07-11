const btn = document.querySelector("button");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
let isEditing = false;
let counter = 0;
let idToEdit = null;

btn.addEventListener("click", () => {
  if (isEditing === false) {
    const liElem = document.createElement("li"); //<li></li>

    // liElem.setAttribute("id", ++counter);
    liElem.id = "task-" + ++counter;

    const edit = document.createElement("i"); // <i></i>
    const del = document.createElement("i"); // <i></i>

    edit.classList.add("fa-solid", "fa-pencil"); // <i class="fa-solid fa-pencil"></i>
    del.classList.add("fa-solid", "fa-trash");

    edit.addEventListener("click", (e) => {
      input.value = e.target.parentElement.innerText;
      isEditing = true;
      idToEdit = e.target.parentElement.id;
      btn.innerHTML = "Edit Task";
    });
    del.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });

    const text = document.createElement("span");
    text.innerHTML = input.value; //<span>Learn HTML</span>
    liElem.append(text); //<li><span></li>
    liElem.append(edit, del); //<li>Learn HTML<i class="fa-solid fa-pencil"></i><i class="fa-solid fa-trash"></i></li>
    ul.append(liElem);

  } else {
    const liChildren = document.querySelector("#" + idToEdit).children;
    liChildren[0].innerHTML = input.value;

    isEditing = false;
    idToEdit = null;
    btn.innerHTML = "Add Task";
  }
  input.value = "";
  input.focus();
});