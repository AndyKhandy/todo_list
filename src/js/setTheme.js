import vulpixImg from "../img/vulpix.jpg";
import togepiImg from "../img/togepi.jpg";
import rowletImg from "../img/rowlet.png";

const profilePicture = document.querySelector("#profile-picture");
const root = document.documentElement;
const siteTitle = document.querySelector("title");
const headingTitle = document.querySelector("#title");

const rowletBtn = document.querySelector("#rowlet");
const vulpixBtn = document.querySelector("#vulpix");
const togepiBtn = document.querySelector("#togepi");

rowletBtn.addEventListener("click", (e)=>{
    changeTheme(e.target.id);
});

vulpixBtn.addEventListener("click", (e)=>{
    changeTheme(e.target.id);
});

togepiBtn.addEventListener("click", (e)=>{
    changeTheme(e.target.id);
});

function changeTheme(id)
{
    let newPfp = null;
    let newTitle = null;

    root.className = "";
    if(id == "vulpix"){
        root.classList.add("vulpix");
        newTitle = "Vulpix a Task";
        newPfp = vulpixImg;
    }
    else if(id == "togepi"){
        root.classList.add("togepi");
        newPfp = togepiImg;
        newTitle = "Togepi that Task";
    }
    else{
       newPfp = rowletImg;
        newTitle = "Row-lets Do";
    }
    siteTitle.textContent = `| ${newTitle} |`;
    headingTitle.textContent = newTitle;
    profilePicture.src = newPfp;
}