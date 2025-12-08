import { setCurrentProject } from "./currentProject";

const addProject = document.querySelector("#add-project");
const projectForm = document.querySelector("#create-project-form");

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

    const projectSection = document.querySelector(".sidebar-project-section");

    const sidebarTab = document.createElement("div");
    sidebarTab.classList.add("sidebar-tab", "flex");
    sidebarTab.id = projectName;

    sidebarTab.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" /></svg>
    <h2>${projectName}</h2>`;

    projectSection.appendChild(sidebarTab);
    setCurrentProject(projectName);
}