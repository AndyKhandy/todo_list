// src/index.js
import "./style.css";
import "./js/data.js"
// Import modules
import { displayAllTodo } from "./js/displayTodo.js";
import { setCurrentProject } from "./js/currentProject.js";
import "./js/createProject.js";
import "./js/createTodo.js";

// INBOX SECTION
const inboxTab = document.querySelector("#Inbox");

inboxTab.addEventListener("click", () => {
    const inboxObject = {
        projectName: "Inbox",
        projectId: null
    };

    setCurrentProject(inboxObject);
    displayAllTodo("Inbox");
});
