const addTodo = document.querySelector("#add-todo");
const todoForm = document.querySelector("#create-todo-form");

addTodo.addEventListener("click", showTodoDialog);

function showTodoDialog()
{
    const favDialog = document.querySelector("#create-todo");
    favDialog.showModal();
}