import "./style.css";
import "./js/createProject";
import { setCurrentProject } from "./js/currentProject";
import "./js/createTodo";
import "./js/displayTodo";
import { displayAllTodo } from "./js/displayTodo";


/*INBOX SECTION*/
const inboxTab = document.querySelector("#Inbox");

inboxTab.addEventListener("click", ()=>{
    let inboxObject = {
        projectName: "Inbox",
        projectId: null
    }

    displayAllTodo("Inbox");
    setCurrentProject(inboxObject);
});

