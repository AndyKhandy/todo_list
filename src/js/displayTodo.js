// src/js/displayTodo.js
import { todos as todoList } from "./data.js";
import { finishTodo, openEditDialog, deleteTodo } from "./changeTodo.js";
import { formatDistanceStrict, isBefore } from "date-fns";
import { changeTodoNumber } from "./data.js";
export const todosSection = document.querySelector(".todos");
export const noTodosSection = document.querySelector(".no-todos");

let count = 0;

export function displayAllTodo(projectName, isOtherTab) {
  count = 0;
  todosSection.innerHTML = "";

  for (let todo of todoList) {
    if (!isOtherTab) {
      if (todo.section == projectName || projectName == "Inbox") {
        displayNewTodo(todo);
      }
    } else {
      if (todo.dueDate == null || isBefore(todo.dueDate, new Date())) {
        continue;
      }

      todo.timeTilDue = formatDistanceStrict(new Date(), todo.dueDate);
      let splitDateMsg = todo.timeTilDue.split(" ");
      let [numberString, identifier] = splitDateMsg;
      let number = +numberString;

      if (projectName == "Today") {
        if (
          (identifier == "days" && number == 1) ||
          identifier == "hours" ||
          identifier == "minutes" ||
          identifier == "seconds"
        ) {
          displayNewTodo(todo, "high");
        }
      } else if (projectName == "Week") {
        if (!(identifier == "days" && number > 7)) {
          displayNewTodo(todo, "med");
        }
      } else {
        displayNewTodo(todo);
      }
    }
  }
  changeTodoNumber(count);
  if(!count)
  {
    noTodosSection.classList.add("active");
  }
  else{
    noTodosSection.classList.remove("active");
  }
}

export function displayNewTodo(todo, urgency = todo.priority) {
  const newTodoSection = document.createElement("div");
  newTodoSection.classList.add("todo", "flex", "flex-ali");
  newTodoSection.dataset.id = todo.id;

  const leftTodoSection = document.createElement("div");
  leftTodoSection.classList.add("todo-left", "flex", "flex-ali");

  const checkBtn = document.createElement("button");
  checkBtn.classList.add("check");

  const priority = document.createElement("div");
  priority.classList.add("priority");

  priority.innerHTML = `<p>${todo.priority}</p>`;
  changePriorityColor(priority, todo.priority);

  const title = document.createElement("h2");
  title.textContent = todo.name;

  leftTodoSection.appendChild(checkBtn);
  leftTodoSection.appendChild(priority);
  leftTodoSection.appendChild(title);

  const rightTodoSection = document.createElement("div");
  rightTodoSection.classList.add("todo-right", "flex", "flex-ali");

  const dueParagraph = document.createElement("p");

  if (todo.dueDate != null) {
    todo.timeTilDue = formatDistanceStrict(new Date(), todo.dueDate);
    if (isBefore(todo.dueDate, new Date())) {
      //if it's past due date make it high priority
      if (todo.priority != "high") {
        todo.priority = "high";
        priority.innerHTML = `<p>${todo.priority}</p>`;
        changePriorityColor(priority, todo.priority);
      }

      dueParagraph.textContent = `Past due date by ${todo.timeTilDue}`;
    } else {
      dueParagraph.textContent = `Due in ${todo.timeTilDue}`;
    }
  } else {
    dueParagraph.textContent = `No Due Date Given`;
  }

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-todo");
  editBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.71,8.04L17.37,10.37L13.62,6.62L15.96,4.29C16.35,3.9 17,3.9 17.37,4.29L19.71,6.63C20.1,7 20.1,7.65 19.71,8.04M3,17.25L13.06,7.18L16.81,10.93L6.75,21H3V17.25M16.62,5.04L15.08,6.58L17.42,8.92L18.96,7.38L16.62,5.04M15.36,11L13,8.64L4,17.66V20H6.34L15.36,11Z" /></svg>`;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-todo");
  deleteBtn.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,19C18,20.66 16.66,22 15,22H8C6.34,22 5,20.66 5,19V7H4V4H8.5L9.5,3H13.5L14.5,4H19V7H18V19M6,7V19C6,20.1 6.9,21 8,21H15C16.1,21 17,20.1 17,19V7H6M18,6V5H14L13,4H10L9,5H5V6H18M8,9H9V19H8V9M14,9H15V19H14V9Z" /></svg>`;

  rightTodoSection.appendChild(dueParagraph);
  rightTodoSection.appendChild(editBtn);
  rightTodoSection.appendChild(deleteBtn);

  newTodoSection.appendChild(leftTodoSection);
  newTodoSection.appendChild(rightTodoSection);

  todosSection.appendChild(newTodoSection);

  checkBtn.addEventListener("click", (e) => {
    if (!todo.completed) {
      changeTodoNumber(--count);
    }
    finishTodo(e.currentTarget, title, todo);
  });

  editBtn.addEventListener("click", () => {
    openEditDialog(todo);
  });

  deleteBtn.addEventListener("click", () => {
    if (!todo.completed) {
      changeTodoNumber(--count);
    }
    deleteTodo(newTodoSection, count);
  });

  if (todo.completed) {
    let done = new Event("click");
    checkBtn.dispatchEvent(done);
  } else {
    count++;
    changeTodoNumber(count);
  }
}

function changePriorityColor(priorityDiv, priorityValue) {
  let color = null;

  if (priorityValue == "low") {
    color = "darkgreen";
  } else if (priorityValue == "med") {
    color = "darkorange";
  } else {
    color = "red";
  }

  priorityDiv.style.backgroundColor = color;
}
