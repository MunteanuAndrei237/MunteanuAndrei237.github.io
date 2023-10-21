import './header.css'



window.onload = function() {
    var menuopened=false;
    var menuContainer=document.getElementById("menuContainer"); 
    var menuIcon=document.getElementById("menuIcon");
    menuIcon.onclick=menuIconOnClick;
    function menuIconOnClick(){
        menuIcon.classList.toggle("rotated");
        if(menuopened==false)
        {
            console.log("lowering");    
            menuContainer.classList.add("lowering");
            menuContainer.classList.remove("raising");
            menuopened=true;
        }
        else
        {
            console.log("raising");
            menuContainer.classList.add("raising");
            menuContainer.classList.remove("lowering");
            menuopened=false;
        }     
    }
};



function Header()
{
    return (<div id="header">
        <div id="menu">
            <img src="menuIcon.png" id="menuIcon"></img>
            <div id="menuContainer">
                <a id="jumpToAbout" class="menuItem" href="#aboutMe">About</a>
                <a id="jumpToProjects" class="menuItem" href="#githubProjects">Projects</a>
                <a id="jumpToEducation" class="menuItem" href="#education">Education</a>
                <a id="jumpToSkills" class="menuItem" href="#skills">Skills</a>
            </div>
        </div>
        <div id="linkIconContainer">
            <p style={{fontFamily:"'luminari',fantasy"}}>CONTACT</p>
        <a href="https://www.linkedin.com/in/andrei-munteanu-138a1a292/" class="iconLink"><img src="linkedinIcon.png" class="linkIcon"></img></a>
        <a href="https://github.com/MunteanuAndrei237" class="iconLink"><img src="githubIcon.png" class="linkIcon"></img></a>
        <a href="https://www.facebook.com/andrei.munteanu.507679" class="iconLink"><img src="facebookIcon.png" class="linkIcon"></img></a>
        <a href="https://instagram.com/munteanu__andrei__?igshid=OGQ5ZDc2ODk2ZA==" class="iconLink"><img src="instagramIcon.png" class="linkIcon"></img></a>
        </div>
    </div>)
}

export default Header