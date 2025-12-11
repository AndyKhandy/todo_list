import { setCurrentProject } from "./currentProject";
import { projects as projectList} from "./createProject";
import { displayAllTodo } from "./displayTodo";

export function displayAllProjects()
{
    for(let project of projectList)
    {
        displayNewProject(project);
    }
}

export function displayNewProject(project)
{
        const projectSection = document.querySelector(".sidebar-project-section");
        
        const sidebarTab = document.createElement("div");
        sidebarTab.classList.add("sidebar-tab", "flex");
        sidebarTab.dataset.id = project.projectId;
        //the id will hold the section name too
        sidebarTab.id = project.projectName;
    
        sidebarTab.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" /></svg>
        <h2>${project.projectName}</h2>`;
    
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-project");
        deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`;
    
        deleteBtn.addEventListener("click",(e)=>{
            e.stopPropagation();
            deleteProject(sidebarTab, projectList);
        });
    
        sidebarTab.appendChild(deleteBtn);
        projectSection.appendChild(sidebarTab);
    
        sidebarTab.addEventListener("click", ()=>{
            setCurrentProject(project);
            displayAllTodo(project.projectName);
        });
}

function deleteProject(tab)
{
    const allProjectTabs = document.querySelectorAll(".sidebar-tab");
    let newTab = null;

    for(let i = 0; i < allProjectTabs.length; i++)
    {
        if(allProjectTabs[i] == tab)
        {
            projectList.splice(i-1,1);
            newTab = allProjectTabs[i-1];
        }
    }

    tab.remove();

    let newTabObject = {
        projectName: newTab.id
    }

    setCurrentProject(newTabObject);
}