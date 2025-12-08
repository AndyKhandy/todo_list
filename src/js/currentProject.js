

export function setCurrentProject(projectTab)
{
    const allProjectTabs = document.querySelectorAll(".sidebar-tab");

    const projectTitle = document.querySelector("#project-title");

    const projectName = projectTab.id;
    
    projectTitle.textContent = projectName;

    for(let project of allProjectTabs)
    {
        if(project == projectTab)
        {
            project.classList.add("current");
        }
        else{
            project.classList.remove("current");
        }
    }
}