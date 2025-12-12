import { setCurrentProject } from "./currentProject";
import { displayNewProject, displayAllProjects } from "./displayProject";
import { displayAllTodo } from "./displayTodo";
import { changeLocalStorage } from "./localStorage";

const addProject = document.querySelector("#add-project");
const projectForm = document.querySelector("#create-project-form");

export let projects = JSON.parse(localStorage.getItem("savedProjects") || "[]");

if(projects.length != 0)
{
    displayAllProjects();
    let currentProject = JSON.stringify(localStorage.getItem("savedCurrentProject"));
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
    displayNewProject(newProject, projects);
    setCurrentProject(newProject);
    changeLocalStorage("savedCurrentProject", newProject)
}