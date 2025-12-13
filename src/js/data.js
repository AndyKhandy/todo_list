import { formatDistanceStrict } from "date-fns";
import { nextFriday } from "date-fns";

if (!localStorage.getItem("savedTodos")) {
    localStorage.setItem(
        "savedTodos",
        JSON.stringify([
            { name: "Eat your veggies", description: "desc", priority: "low", dueDate: new Date(), id: "1", section: "Inbox", completed: false, timeTilDue: formatDistanceStrict(new Date(), nextFriday(new Date())) },
            { name: "Play Valorant", description: "desc", priority: "low", dueDate: new Date(), id: "2", section: "Inbox", completed: false, timeTilDue: formatDistanceStrict(new Date(), nextFriday(new Date()))}
        ])
    );
    changeTodoNumber();
}

if (!localStorage.getItem("savedProjects")) {
    localStorage.setItem("savedProjects", JSON.stringify([
        {projectName: "Today",
        projectId: 1,
        isOther: true},
        {projectName: "Week",
        projectId: 1,
        isOther: true},
        {projectName: "Month",
        projectId: 1,
        isOther: true},
        {projectName: "Inbox",
        projectId: 1,
        isOther: false}
    ]));
}

export let todos = JSON.parse(localStorage.getItem("savedTodos") || "[]");

export let projects = JSON.parse(localStorage.getItem("savedProjects") || "[]");

export let currentProject = JSON.parse(localStorage.getItem("savedCurrentProject")) || { projectName: "Inbox", projectId: 1, isOther: false };

export let todoNumber = parseInt(localStorage.getItem("numberOfTodos"),10);

changeTodoNumber(todoNumber);

export function changeTodoNumber(amount)
{
    localStorage.setItem("numberOfTodos", amount);

    const amountTodo = document.querySelector("#amount-todo h2");

    amountTodo.textContent = amount;
}