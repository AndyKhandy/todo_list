import { currentProject, todos } from "./data.js";
import { changeLocalStorage } from "./localStorage.js";
import { format, formatDistanceStrict, parseISO } from "date-fns";
import { displayAllTodo } from "./displayTodo.js";

const todoName = document.querySelector("#edit-name");
const todoDescription = document.querySelector("#edit-description");
const todoPriority = document.querySelector("#edit-priority");
const todoDueDate = document.querySelector("#edit-date");

export function finishTodo(checkBtn, titleElement, todoObject) {
  checkBtn.classList.add("checked");
  titleElement.style.textDecoration = "line-through";
  todoObject.completed = true;
  changeLocalStorage("savedTodos", todos);
}

/*EDIT TODO SECTION*/
let currentTodo = null;

export function openEditDialog(todoObject) {
  const editDialog = document.querySelector("#edit-todo");
  currentTodo = todoObject;

  showTodoInformation(todoObject);
  editDialog.showModal();
}

const changeTodo = document.querySelector("#edit-submit");

changeTodo.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#edit-todo").close();
  getTodoInformation(currentTodo);
});

/*DELETE TODO SECTION*/
export function deleteTodo(todoSection) {
  removeTodoFromList(todoSection);
  todoSection.remove();
}

function removeTodoFromList(todoSection) {
  let todoId = todoSection.dataset.id;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == todoId) {
      todos.splice(i, 1);
      changeLocalStorage("savedTodos", todos);
      return;
    }
  }
}

function showTodoInformation(todoObject) {
  todoName.value = todoObject.name;
  if (todoObject.description == "") {
    todoDescription.value = "N/A";
  } else {
    todoDescription.value = todoObject.description;
  }
  todoPriority.value = todoObject.priority;
  todoDueDate.value = format(
    new Date(todoObject.dueDate),
    "yyyy-MM-dd'T'HH:mm"
  );
}

function getTodoInformation(todoObject) {
  let newName = todoName.value;
  let newDescription = todoDescription.value;
  let newPriority = todoPriority.value;
  let newDueDate = parseISO(todoDueDate.value);

  changeTodoObject(
    newName,
    newDescription,
    newPriority,
    newDueDate,
    todoObject
  );
}

function changeTodoObject(
  newName,
  newDescription,
  newPriority,
  newDueDate,
  todoObject
) {
  todoObject.name = newName;
  todoObject.description = newDescription;
  todoObject.priority = newPriority;
  todoObject.dueDate = newDueDate;
  todoObject.timeTilDue = formatDistanceStrict(new Date(), newDueDate);

  displayAllTodo(currentProject.projectName, currentProject.isOther);
  changeLocalStorage("savedTodos", todos);
}
