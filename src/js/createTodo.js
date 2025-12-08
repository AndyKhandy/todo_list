import {displayTodo} from "./displayTodo.js";

const addTodo = document.querySelector("#add-todo");
const todoForm = document.querySelector("#create-todo-form");

let todos = [];

addTodo.addEventListener("click", showTodoDialog);
todoForm.addEventListener("submit", createTodo);

function showTodoDialog()
{
    const favDialog = document.querySelector("#create-todo");
    favDialog.showModal();
}

function createTodo()
{
    const todoName = document.querySelector("#create-todo-input");
    const todoDescript = document.querySelector("#create-todo-description");
    const todoPriority = document.querySelector("#select-priority");

    let newTodo = {
        name: todoName.value,
        description: todoDescript.value,
        priority: todoPriority.value,
        id: crypto.randomUUID()
    };

    todos.push(newTodo);
    displayTodo(todos);
    todoForm.reset();
}

