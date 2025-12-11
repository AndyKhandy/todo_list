import {todos} from "./createTodo.js"; 

export function finishTodo(checkBtn, titleElement)
{
    checkBtn.classList.add("checked");
    titleElement.style.textDecoration = "line-through";
}

export function deleteTodo(todoSection)
{
    removeTodoFromList(todoSection);
    todoSection.remove();
}

function removeTodoFromList(todoSection)
{
    let todoId = todoSection.dataset.id;
    for(let i = 0; i < todos.length; i++)
    {
        if(todos[i].id == todoId)
        {
            todos.splice(i,1);
            return;
        }
    }
}