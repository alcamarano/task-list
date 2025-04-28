const inNewTask = document.getElementById("inNewTask");
const btAddNewTask = document.getElementById("btAddNewTask");
const ulTaskList = document.getElementById("ulTaskList");
const yearCopywriting = document.getElementById("yearCopywriting");

btAddNewTask.addEventListener("click", () => {
    let nameTask = inNewTask.value;
    if (nameTask == "") {
        alert("Dados não preenchidos corretamente.");
        inNewTask.value = "";
        inNewTask.focus();
        return;
    }
    const li = document.createElement("li");
    li.innerHTML = `
        <div class="ul__div-buttons">
            <input type="checkbox" class="ul__li-input-task-check" title="">
            <input type="text" class="ul__li-input-task" readonly autocomplete="off" value="${nameTask}">
            <div>
                <button class="div__div-btn-edit" title="Editar tarefa">
                    <img src="assets/img/edit.svg" alt="Editar tarefa">
                </button>
                <button class="div__div-btn-delete" title="Excluir tarefa">
                    <img src="assets/img/delete.svg" alt="Excluir tarefa">
                </button>
            </div>
        </div>
    `;
    ulTaskList.appendChild(li);
    inNewTask.value = "";
});

ulTaskList.addEventListener("change", (event) => {
    if (event.target.classList.contains("ul__li-input-task-check")) {
        const checkbox = event.target;
        const inputTask = checkbox.nextElementSibling;

        if (checkbox.checked) {
            inputTask.classList.add("completed");
        } else {
            inputTask.classList.remove("completed");
        }
    }
});

ulTaskList.addEventListener("click", (event) => {
    const taskItem = event.target.closest("li");
    
    if (event.target.closest(".div__div-btn-edit")) {
        const inputTask = taskItem.querySelector(".ul__li-input-task");
        const btnEdit = taskItem.querySelector(".div__div-btn-edit img");

        if (inputTask.readOnly) {
            inputTask.readOnly = false;
            inputTask.classList.add("input__task-cursor");
            btnEdit.src = "assets/img/edit-check.svg";
        } else {
            inputTask.readOnly = true;
            inputTask.classList.remove("input__task-cursor");
            btnEdit.src = "assets/img/edit.svg";
        }
    }

    if (event.target.closest(".div__div-btn-delete")) {
        taskItem.remove();
    }
});

yearCopywriting.textContent = new Date().getFullYear();