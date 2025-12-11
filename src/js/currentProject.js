

export function setCurrentProject(projectObject)
{
    const allProjectTabs = document.querySelectorAll(".sidebar-tab");

    const projectTitle = document.querySelector("#project-title");

    const projectName = projectObject.projectName;
    
    projectTitle.textContent = projectName;

    for(let project of allProjectTabs)
    {
        if(project.id == projectName)
        {
            project.classList.add("current");
        }
        else{
            project.classList.remove("current");
        }
    }
}
