import {displayNewTodo, displayAllTodo} from "./displayTodo.js";
import { parseISO } from "date-fns";

const addTodo = document.querySelector("#add-todo");
const todoForm = document.querySelector("#create-todo-form");

class Todo {

    constructor(name, description, priority,dueDate, id, section){
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.id = id;
        this.section = section;
        this.completed = false;
    }

    done()
    {
        this.completed = true;
    }
}

export let todos = JSON.parse(localStorage.getItem("savedTodos") || "[]");

if(todos.length != 0)
{
    let currentTodoProject = JSON.parse(localStorage.getItem("savedCurrentProject"));

    if(!currentTodoProject)
    {
        displayAllTodo("Inbox");
    }
    else{
        displayAllTodo(currentTodoProject.projectName);
    }
}

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
    const todoDueDate = document.querySelector("#due-date").value;
    const dueDate = parseISO(todoDueDate);
    const projectName = document.querySelector("#project-title").textContent;

    if(todoName == "")
    {
        return;
    }


    createTodo(todoName,todoDescript,todoPriority,dueDate,crypto.randomUUID(), projectName);

    todoForm.reset();
}

function createTodo(name,description,priority,dueDate, id, section)
{

    let newTodo = new Todo(name,description,priority,dueDate,id,section);

    todos.push(newTodo);
    displayNewTodo(newTodo);
}

