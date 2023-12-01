function Skills() {
  return (
    <div className="bodySectionContainer">
      <div id="skills" className="bodySection">
        <h1>Skills</h1>
        <div id="skillsGrid">
          <div className="skillsGridItem">
            <p>Languages</p>
            <ul>
              <li>English </li>
              <li>French</li>
              <li>Romanian</li>
            </ul>
          </div>
          <div className="skillsGridItem">
            <p>Soft skills</p>
            <ul>
              <li>Critical thinking</li>
              <li>Problem solving</li>
              <li>Research </li>
              <li>Team collaboration</li>
            </ul>
          </div>
          <div className="skillsGridItem">
            <p>Front end languages, libraries and frameworks</p>
            <ul>
              <li>
                Javascript
                <img
                  src="javascriptIcon.png"
                  className="skillIcon"
                  alt="Media not avalabile"
                ></img>
              </li>
              <li>
                HTML
                <img
                  src="htmlIcon.png"
                  className="skillIcon"
                  alt="Media not avalabile"
                ></img>
              </li>
              <li>
                CSS
                <img
                  src="cssIcon.png"
                  className="skillIcon"
                  alt="Media not avalabile"
                ></img>
              </li>
              <li>
                React
                <img
                  src="reactIcon.png"
                  className="skillIcon"
                  alt="Media not avalabile"
                ></img>
              </li>
              <li>Express</li>
              <li>Cheerio</li>
            </ul>
          </div>
          <div className="skillsGridItem">
            <p>Other programming languages</p>
            <ul>
              <li>
                C++
                <img
                  src="c++Icon.png"
                  className="skillIcon"
                  alt="Media not avalabile"
                ></img>
              </li>
              <li>
                Python
                <img
                  src="pythonIcon.png"
                  className="skillIcon"
                  alt="Media not avalabile"
                ></img>
              </li>
              <li>
                Java
                <img
                  src="javaIcon.png"
                  className="skillIcon"
                  alt="Media not avalabile"
                ></img>
              </li>
              <li>
                SQL
                <img
                  src="sqlIcon.png"
                  className="skillIcon"
                  alt="Media not avalabile"
                ></img>
              </li>
              <li>
                Haskell
                <img
                  src="haskellIcon.png"
                  className="skillIcon"
                  alt="Media not avalabile"
                ></img>
              </li>
              <li>
                C#
                <img
                  src="csharpIcon.png"
                  className="skillIcon"
                  alt="Media not avalabile"
                ></img>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
