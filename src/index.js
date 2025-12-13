// src/index.js
import "./style.css";
import "./js/data.js";
import "./js/setTheme.js";
// Import modules
import "./js/displayTodo.js";
import "./js/currentProject.js";
import "./js/createProject.js";
import "./js/createTodo.js";

//SIDEBAR SHOWN / HIDE SECTION

const menuBtn = document.querySelector("#menu");
const closeBtn = document.querySelector("#close-sidebar");
export const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", toggleSideBar);
closeBtn.addEventListener("click", toggleSideBar)

function toggleSideBar()
{
    closeBtn.classList.toggle("active");
    sidebar.classList.toggle("active");
}

export function removeSideBar()
{
    sidebar.classList.remove("active");
}

//DELETE LOCAL STORAGE
const clearStorage = document.querySelector("#clearStorage")

clearStorage.addEventListener("click", ()=>{
    localStorage.clear();
})