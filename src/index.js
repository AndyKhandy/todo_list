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

const hideSidebarBtn = document.querySelector("#large-close-sidebar");
const showSidebarBtn = document.querySelector("#large-show-sidebar");

export const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", toggleSideBar);
closeBtn.addEventListener("click", toggleSideBar);

hideSidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.add("hide");
  showSidebarBtn.classList.add("active");
});

showSidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.remove("hide");
  showSidebarBtn.classList.remove("active");
})

function toggleSideBar() {
  sidebar.classList.remove("hide");
  closeBtn.classList.toggle("active");
  sidebar.classList.toggle("active");
}

export function removeSideBar() {
  sidebar.classList.remove("hide");
  closeBtn.classList.remove("active");
  sidebar.classList.remove("active");
}

//DELETE LOCAL STORAGE
const clearStorage = document.querySelector("#clearStorage");

clearStorage.addEventListener("click", () => {
  localStorage.clear();
});
