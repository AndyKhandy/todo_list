import "./style.css";
import "./js/createProject";
import {setCurrentProject} from "./js/currentProject";
import "./js/createTodo";
import "./js/displayTodo";

/*INBOX SECTION*/
const inboxTab = document.querySelector("#Inbox");

inboxTab.addEventListener("click", ()=>{
    setCurrentProject(inboxTab);
});