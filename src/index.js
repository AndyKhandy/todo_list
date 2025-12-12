// src/index.js
import "./style.css";
import "./js/data.js";
import "./js/setTheme.js";
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

//OTHERS SECTION
const todayTab = document.querySelector("#Today");
const weekTab = document.querySelector("#Week");
const monthTab = document.querySelector("#Month");

todayTab.addEventListener("click", ()=>{
    const todayObject = {
        projectName: "Today",
        projectId: 1,
    };

    setCurrentProject(todayObject);
    displayAllTodo("Today", true);
});


weekTab.addEventListener("click", ()=>{
    const weekObject = {
        projectName: "Week",
        projectId: 2,
    };

    setCurrentProject(weekObject);
    displayAllTodo("Week", true);
});

monthTab.addEventListener("click", ()=>{
    const monthObject = {
        projectName: "Month",
        projectId: 3,
    };

    setCurrentProject(monthObject);
    displayAllTodo("Month", true);
});