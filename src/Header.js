import './header.css'



window.onload = function() {
    var menuopened=false;
    document.getElementById("menuIcon").onclick=menuIconOnClick;
    let menuitems=document.getElementsByClassName("menuItem");
    function menuIconOnClick(){
        if(menuopened==false)
            {
                for(var i=0;i<menuitems.length;i++)
                    menuitems[i].style.display="block";
                menuopened=true;
            }
        else
        {
            for(var i=0;i<menuitems.length;i++)
                menuitems[i].style.display="none";
            menuopened=false;
        }     
    }
};



function Header()
{
    return (<div id="header">
        <div id="menu">
            <img src="menuIcon.png" id="menuIcon" ></img>
            <div id="menuContainer">
                <a id="jumpToAbout" class="menuItem" href="#aboutMe">Jump to About</a>
                <a id="jumpToProjects" class="menuItem" href="#aboutMe">Jump to Projects</a>
                <a id="jumpToEducation" class="menuItem" href="#aboutMe">Jump to Education</a>
                <a id="jumpToSkills" class="menuItem" href="#aboutMe">Jump to Skills</a>
            </div>
        </div>
        <div id="linkIconContainer">
        <a href="https://www.linkedin.com/in/andrei-munteanu-138a1a292/" class="iconLink"><img src="linkedinIcon.jpg" class="linkIcon"></img></a>
        <a href="https://github.com/MunteanuAndrei237" class="iconLink"><img src="githubIcon.png" class="linkIcon"></img></a>
        <a href="https://www.facebook.com/andrei.munteanu.507679" class="iconLink"><img src="facebookIcon.png" class="linkIcon"></img></a>
        <a href="https://instagram.com/munteanu__andrei__?igshid=OGQ5ZDc2ODk2ZA==" class="iconLink"><img src="instagramIcon.png" class="linkIcon"></img></a>
        </div>
    </div>)
}

export default Header