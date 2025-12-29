import { currentProject } from "./data.js";
import { changeLocalStorage } from "./localStorage.js";

export function setCurrentProject(projectObject) {
  const allProjectTabs = document.querySelectorAll(".sidebar-tab");
  const projectTitle = document.querySelector("#project-title");

  currentProject.projectName = projectObject.projectName;
  currentProject.projectId = projectObject.projectId || null;
  currentProject.isOther = projectObject.isOther;

  projectTitle.textContent = currentProject.projectName;

  for (let project of allProjectTabs) {
    if (project.id == currentProject.projectName) {
      project.classList.add("current");
    } else {
      project.classList.remove("current");
    }
  }
  changeLocalStorage("savedCurrentProject", currentProject);
}
