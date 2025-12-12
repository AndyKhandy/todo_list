
if (!localStorage.getItem("savedTodos")) {
    localStorage.setItem(
        "savedTodos",
        JSON.stringify([
            { name: "Eat your veggies", description: "desc", priority: "low", dueDate: new Date(), id: "1", section: "Inbox", completed: false },
            { name: "Play Valorant", description: "desc", priority: "low", dueDate: new Date(), id: "2", section: "Inbox", completed: false }
        ])
    );
}

if (!localStorage.getItem("savedProjects")) {
    localStorage.setItem("savedProjects", JSON.stringify([]));
}

export let todos = JSON.parse(localStorage.getItem("savedTodos") || "[]");

export let projects = JSON.parse(localStorage.getItem("savedProjects") || "[]");

export let currentProject = JSON.parse(localStorage.getItem("savedCurrentProject")) || { projectName: "Inbox", projectId: null };