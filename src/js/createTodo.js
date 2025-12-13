import {displayAllTodo} from "./displayTodo.js";
import { changeLocalStorage } from "./localStorage.js";
import { todos, currentProject } from "./data.js";
import { parseISO, formatDistanceStrict } from "date-fns";

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
        this.timeTilDue = formatDistanceStrict(new Date(), dueDate);
    }
}

if(todos.length != 0)
{
    displayAllTodo(currentProject.projectName, currentProject.isOther);
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

    if(todoName == "")
    {
        return;
    }

    createTodo(todoName,todoDescript,todoPriority,dueDate,crypto.randomUUID());

    todoForm.reset();
}

function createTodo(name,description,priority,dueDate, id)
{

    let newTodo = new Todo(name,description,priority,dueDate,id);

    todos.push(newTodo);
    changeLocalStorage("savedTodos", todos);
    displayAllTodo(currentProject.projectName, currentProject.isOther);
}