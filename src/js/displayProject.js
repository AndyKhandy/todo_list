import { setCurrentProject } from "./currentProject.js";
import { projects } from "./data.js";
import { displayAllTodo } from "./displayTodo.js";
import { changeLocalStorage } from "./localStorage.js";
import { removeSideBar } from "../index.js";

const projectSection = document.querySelector(".sidebar-project-section");
const otherProjectSection = document.querySelector(".sidebar-others-section");
export function displayAllProjects() {
  for (let project of projects) {
    displayNewProject(project);
  }
}

export function displayNewProject(project) {
  const sidebarTab = document.createElement("div");
  sidebarTab.classList.add("sidebar-tab", "flex", "flex-ali");
  sidebarTab.dataset.id = project.projectId;
  sidebarTab.id = project.projectName;

  sidebarTab.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" /></svg>
    <h2>${project.projectName}</h2>`;

    //distinguish between projects that can be removed or not removed
  if (project.projectId != 1) {
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-project");
    deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M336-280 480-424 624-280 680-336 536-480 680-624 624-680 480-536 336-680 280-624 424-480 280-336 336-280ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`;

    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteProject(sidebarTab);
    });

    sidebarTab.appendChild(deleteBtn);
    projectSection.appendChild(sidebarTab);
  } else {
    if (project.projectName == "Inbox") {
      projectSection.appendChild(sidebarTab);
    } else {
      otherProjectSection.appendChild(sidebarTab);
    }
  }

  sidebarTab.addEventListener("click", () => {
    setCurrentProject(project);
    displayAllTodo(project.projectName, project.isOther);
    removeSideBar();
  });
}

function deleteProject(tab) {
  const allProjectTabs = document.querySelectorAll(".sidebar-tab");
  let newTabObject = null;

  for (let i = 0; i < allProjectTabs.length; i++) {
    if (allProjectTabs[i] == tab) {
      projects.splice(i + 3, 1);
      changeLocalStorage("savedProjects", projects);
      newTabObject = projects[i + 2];
      break;
    }
  }

  tab.remove();

  setCurrentProject(newTabObject);
  displayAllTodo(newTabObject.projectName, newTabObject.isOther);
}
