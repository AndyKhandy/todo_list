import "./style.css";
import "./js/createProject";
import {setCurrentProject} from "./js/currentProject";
import "./js/createTodo";

/*INBOX SECTION*/
const inboxTab = document.querySelector("#Inbox");

inboxTab.addEventListener("click", ()=>{
    setCurrentProject(inboxTab);
});