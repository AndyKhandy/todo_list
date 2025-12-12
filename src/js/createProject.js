import { setCurrentProject } from "./currentProject.js";
import { displayNewProject, displayAllProjects } from "./displayProject.js";
import { displayAllTodo } from "./displayTodo.js";
import { changeLocalStorage } from "./localStorage.js";
import { projects, currentProject } from "./data.js";

const addProject = document.querySelector("#add-project");
const projectForm = document.querySelector("#create-project-form");

if(projects.length != 0)
{
    displayAllProjects();
    setCurrentProject(currentProject);
    displayAllTodo(currentProject.projectName);
}

addProject.addEventListener("click", showProjectDialog);
projectForm.addEventListener("submit",createProject);

export function showProjectDialog()
{
    const favDialog = document.querySelector("#create-project");
    favDialog.showModal();
}

export function createProject()
{
    const projectInput = document.querySelector("#create-project-input");
    const projectName = projectInput.value;
    if(projectName == ""){
        return;
    }

    projectInput.value = "";

    let newProject = {
        projectName,
        projectId: crypto.randomUUID(),
    };

    projects.push(newProject);
    changeLocalStorage("savedProjects", projects);

    displayNewProject(newProject, projects);
    setCurrentProject(newProject);
    displayAllTodo(newProject.projectName);
}