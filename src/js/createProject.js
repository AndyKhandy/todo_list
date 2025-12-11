import { setCurrentProject } from "./currentProject";
import { displayNewProject } from "./displayProject";

const addProject = document.querySelector("#add-project");
const projectForm = document.querySelector("#create-project-form");

export let projects = [];

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
}