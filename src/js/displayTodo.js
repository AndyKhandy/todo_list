
export function displayTodo(todoList)
{
    for(let todo of todoList)
    {
        const todosSection = document.querySelector(".todos");

        const newTodoSection = document.createElement("div");
        newTodoSection.classList.add("todo", "flex", "flex-ali");
        newTodoSection.dataset.id = todo.id;

        const leftTodoSection = document.createElement("div");
        leftTodoSection.classList.add("todo-left", "flex", "flex-ali");

        const checkBtn = document.createElement("button");
        checkBtn.classList.add("check");

        const title = document.createElement("h2");
        title.textContent = todo.name;

        leftTodoSection.appendChild(checkBtn);
        leftTodoSection.appendChild(title);

        const rightTodoSection = document.createElement("div");
        rightTodoSection.classList.add("todo-right", "flex", "flex-ali");

        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-todo");
        editBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.71,8.04L17.37,10.37L13.62,6.62L15.96,4.29C16.35,3.9 17,3.9 17.37,4.29L19.71,6.63C20.1,7 20.1,7.65 19.71,8.04M3,17.25L13.06,7.18L16.81,10.93L6.75,21H3V17.25M16.62,5.04L15.08,6.58L17.42,8.92L18.96,7.38L16.62,5.04M15.36,11L13,8.64L4,17.66V20H6.34L15.36,11Z" /></svg>`;

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-todo");
        deleteBtn.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,19C18,20.66 16.66,22 15,22H8C6.34,22 5,20.66 5,19V7H4V4H8.5L9.5,3H13.5L14.5,4H19V7H18V19M6,7V19C6,20.1 6.9,21 8,21H15C16.1,21 17,20.1 17,19V7H6M18,6V5H14L13,4H10L9,5H5V6H18M8,9H9V19H8V9M14,9H15V19H14V9Z" /></svg>`;

        rightTodoSection.appendChild(editBtn);
        rightTodoSection.appendChild(deleteBtn);

        newTodoSection.appendChild(leftTodoSection);
        newTodoSection.appendChild(rightTodoSection);

        todosSection.appendChild(newTodoSection);

    }
}