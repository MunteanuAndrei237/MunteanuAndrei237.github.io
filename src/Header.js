import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="header">
      <nav id="nav">
        <Link className="navItem" to="/about">
          About Me
        </Link>
        <Link className="navItem" to="/projects">
          My Projects
        </Link>
        <Link className="navItem" to="/education">
          Education
        </Link>
        <Link className="navItem" to="/skills">
          Skills
        </Link>
      </nav>

      <div id="linkIconContainerContainer">
        <div id="linkIconContainer">
          <p
            style={{
              fontSize: "1rem",
              color: "white",
              "@media only screen and (maxWidth: 700px)": {
                fontSize: "xx-small",
              },
            }}
          >
            CONTACT
          </p>
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
            href="https://instagram.com/munteanu__andrei__?igshid=OGQ5ZDc2ODk2ZA=="
            className="iconLink"
          >
            <img
              src="instagramIcon.png"
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
        </div>
      </div>
    </div>
  );
}

export default Header;
