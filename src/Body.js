import "./body.css";
import PopUp from "./PopUp";
import React, { useState } from "react";

function Body() {
  const [popUpProps, setpopUpProps] = useState(0);
  function renderPopUp(text) {
    document.getElementById("popUp").style.display = "flex";
    setpopUpProps(text);
  }

  return (
    <div id="body">
      <PopUp props={popUpProps} />
      <div className="bodySection" id="aboutMe">
        <h1>About me</h1>
        <p>
          I'm a second-year Computer Science student from Romania with a passion
          for coding. Over the years, I've developed a range of applications and
          programs using different languages and frameworks. While most of my
          work is on display on GitHub, there are still a few projects in the
          pipeline. I'm eager to take on new challenges and opportunities, keen
          to expand my knowledge and collaborate with people globally on
          creating efficient and accessible software.
        </p>
      </div>
      <div className="bodySection" id="githubProjects">
        <h1>My projects</h1>
        <div className="githubProject">
          <h1>Chess Bot</h1>
          <p>
            This app was developed using C++ with the SFML library for graphics
            and OOP techniques for optimization and code reusability. It
            features a fully functional chessboard with all the rules
            implemented, offering three game modes: Player vs Player, Bot vs
            Player, and Bot vs Bot. The application is still in development and
            lacks some features, such as selecting a timer or enabling game
            replay. It incorporates various sophisticated algorithms for
            optimizing move searches, including the minimax algorithm,
            alpha-beta pruning, and one devised by me, which attempts to predict
            the best move based on piece value. The program can reach a depth of
            10 moves in under a second in most cases.
          </p>
          <div className="buttonsContainer">
            <button
              className="seeDemoCode myButton"
              onClick={() => renderPopUp("ChessBotCode")}
            >
              Demo Code
            </button>
            <button
              className="seeFullCode myButton"
              onClick={() => renderPopUp("ChessBotLink")}
            >
              Access Full Code
            </button>
            <button
              className="seeVideo myButton"
              onClick={() => renderPopUp("ChessBotVideo")}
            >
              See video
            </button>
          </div>
        </div>
        <div className="githubProject">
          <h1>Minesweeper Bot</h1>
          <p>
            {" "}
            This program was developed using Python along with various pip
            libraries, such as mouse and keyboard for control and ImageGrab from
            PIL for screen reading. It specifically works with Google's
            Minesweeper (
            <a href="https://g.co/kgs/wV9bHr">https://g.co/kgs/wV9bHr</a>) and
            is designed to scan your screen and play the game autonomously (see
            video for details). The program can analyze the screen to determine
            the number and location of tiles, calculate the positions of mines,
            and identify different types of tiles (numbered, blank, flagged,
            etc.). It employs basic but optimal algorithms, such as counting the
            number of free tiles around a numbered tile and flagging them if
            necessary. In more complex scenarios where the previous algorithm is
            insufficient, it utilizes a backtracking algorithm on all "exposed"
            squares. By utilizing a vector to check neighboring tiles and
            breaking the loop as soon as possible, the program can solve a
            medium-level Minesweeper game in just 30 seconds, with a mouse speed
            of 0.1 seconds per click.
          </p>
          <div className="buttonsContainer">
            <button
              className="seeDemoCode myButton"
              onClick={() => renderPopUp("MinesweeperBotCode")}
            >
              Demo Code
            </button>
            <button
              className="seeFullCode myButton"
              onClick={() => renderPopUp("MinesweeperBotLink")}
            >
              Access Full Code
            </button>
            <button
              className="seeVideo myButton"
              onClick={() => renderPopUp("MinesweeperBotVideo")}
            >
              See video
            </button>
          </div>
        </div>
      </div>
      <div id="education" className="bodySection">
        <h1>Education</h1>
        <div id="educationGrid">
          <div id="CNITV">
            <h5>Colegiul Național de Informatică Tudor Vianu</h5>
            <p>
              I studied at Colegiul Național de Informatică Tudor Vianu,
              recognized as a top Computer Science high school in Romania.
              There, I built a solid foundation in mathematics, computer
              science, and C++ language, delving into both basic and advanced
              algorithms. Upon graduation in 2022, I achieved a commendable
              grade of 9.75/10 in Mathematics and 9.80/10 in Computer Science.
            </p>
          </div>
          <div id="FMI">
            <h5>Faculty of Mathematics and Computer Science</h5>
            <p>
              I am currently pursuing a Bachelor's degree in Computer Science,
              expected to graduate in 2025. Throughout my academic journey, I
              haven't just gained theoretical knowledge but have also delved
              deeply into Data Structures and operating system architectures.
              This period has provided me with a diverse coding language
              palette, including Python, C++, HTML, CSS, Javascript, PL/SQL, and
              Haskell. Additionally, I've familiarized myself with coding
              practices and principles, encompassing common notations and
              Object-Oriented Programming (OOP) concepts.
            </p>
          </div>
        </div>
      </div>
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

export default Body;
