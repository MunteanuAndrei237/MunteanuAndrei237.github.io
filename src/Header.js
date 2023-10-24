import "./header.css";

function animateMenu(mi, mc, mo) {
  document.getElementById(mi).classList.toggle("rotated");
  var menuContainer = document.getElementById(mc);
  if (mo === false) {
    menuContainer.classList.add("lowering");
    menuContainer.classList.remove("raising");
    mo = true;
  } else {
    menuContainer.classList.add("raising");
    menuContainer.classList.remove("lowering");
    mo = false;
  }
  return mo;
}

function Header() {
  var menuopened = false;
  var menuContainer = (
    <div id="menuContainer">
      <a id="jumpToAbout" className="menuItem" href="#aboutMe">
        About
      </a>
      <a id="jumpToProjects" className="menuItem" href="#githubProjects">
        Projects
      </a>
      <a id="jumpToEducation" className="menuItem" href="#education">
        Education
      </a>
      <a id="jumpToSkills" className="menuItem" href="#skills">
        Skills
      </a>
    </div>
  );
  var menuIcon = (
    <img
      src="menuIcon.png"
      id="menuIcon"
      alt="Media not avalabile"
      onClick={() => {
        menuopened = animateMenu("menuIcon", "menuContainer", menuopened);
      }}
    ></img>
  );

  return (
    <div id="header">
      <div id="menu">
        {menuIcon}
        {menuContainer}
      </div>
      <div id="linkIconContainer">
        <p style={{ fontSize: 'small',
  '@media only screen and (max-width: 700px)': {
    fontSize: 'xx-small',
  },
}}>CONTACT</p>
        <a
          href="https://www.linkedin.com/in/andrei-munteanu-138a1a292/"
          className="iconLink"
        >
          <img
            src="linkedinIcon.png"
            className="linkIcon"
            alt="Media not avalabile"
          ></img>
        </a>
        <a href="https://github.com/MunteanuAndrei237" className="iconLink">
          <img
            src="githubIcon.png"
            className="linkIcon"
            alt="Media not avalabile"
          ></img>
        </a>
        <a
          href="https://www.facebook.com/andrei.munteanu.507679"
          className="iconLink"
        >
          <img
            src="facebookIcon.png"
            className="linkIcon"
            alt="Media not avalabile"
          ></img>
        </a>
        <a
          href="https://instagram.com/munteanu__andrei__?igshid=OGQ5ZDc2ODk2ZA=="
          className="iconLink"
        >
          <img
            src="instagramIcon.png"
            className="linkIcon"
            alt="Media not avalabile"
          ></img>
        </a>
      </div>
    </div>
  );
}

export default Header;
