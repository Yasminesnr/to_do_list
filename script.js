window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_elements = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;
    if (!task) {
      alert("Please enter a task");
    } else {
      const task_elem = document.createElement("div");
      task_elem.classList.add("task");

      const task_elem_content = document.createElement("div");
      task_elem_content.classList.add("content");
      task_elem.appendChild(task_elem_content);

      const task_elem_input = document.createElement("input");
      task_elem_input.classList.add("text");
      task_elem_input.type = "text";
      task_elem_input.value = task;
      task_elem_input.setAttribute("readonly", "readonly");
      task_elem_content.appendChild(task_elem_input);

      const task_elem_actions = document.createElement("div");
      task_elem_actions.classList.add("actions");

      const task_elem_edit = document.createElement("button");
      task_elem_edit.classList.add("edit");
      task_elem_edit.innerHTML = "Edit";

      const task_elem_delete = document.createElement("button");
      task_elem_delete.classList.add("delete");
      task_elem_delete.innerHTML = "Delete";

      task_elem_actions.appendChild(task_elem_edit);
      task_elem_actions.appendChild(task_elem_delete);
      task_elem.appendChild(task_elem_actions);

      list_elements.appendChild(task_elem);

      task_elem_edit.addEventListener("click", () => {
        if (task_elem_edit.innerHTML.toLocaleLowerCase() === "edit") {
          task_elem_input.removeAttribute("readonly");
          task_elem_input.focus();
          task_elem_edit.innerHTML = "Save";
        } else {
          task_elem_input.setAttribute("readonly", "readonly");
          task_elem_edit.innerHTML = "Edit";
        }
      });

      task_elem_delete.addEventListener("click", () => {
        list_elements.removeChild(task_elem);
      });
    }
  });
});
