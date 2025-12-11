import {displayNewTodo} from "./displayTodo.js";

const addTodo = document.querySelector("#add-todo");
const todoForm = document.querySelector("#create-todo-form");

export let todos = [];

addTodo.addEventListener("click", showTodoDialog);
todoForm.addEventListener("submit", getTodoInfo);

function showTodoDialog()
{
    const favDialog = document.querySelector("#create-todo");
    favDialog.showModal();
}

function getTodoInfo()
{
    const todoName = document.querySelector("#create-todo-input").value;
    const todoDescript = document.querySelector("#create-todo-description").value;
    const todoPriority = document.querySelector("#select-priority").value;
    const projectName = document.querySelector("#project-title").textContent;

    if(todoName.value == "")
    {
        return;
    }

    createTodo(todoName,todoDescript,todoPriority,crypto.randomUUID(), projectName);

    todoForm.reset();
}

function createTodo(name,description,priority,id, section)
{

    let newTodo = {
        name,
        description,
        priority,
        id,
        section
    };

    todos.push(newTodo);
    displayNewTodo(newTodo);
}

