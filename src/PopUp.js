import "./popUp.css";
import { useState, useEffect } from "react";
import { dataPromise } from "./RequestGit.js";

function hidePopUp() {
  document.getElementById("popUp").style.display = "none";

  if (document.getElementById("minesweeperVideo"))
    document.getElementById("minesweeperVideo").pause();
  if (document.getElementById("ChessBotVideo"))
    document.getElementById("ChessBotVideo").pause();
}

function copyToClipboard(link) {
  navigator.clipboard.writeText(link);
}
function stopPropagation(e) {
  e.stopPropagation();
}

function PopUp(props) {
  var hreff;
  if (props.props === "MinesweeperBotLink")
    hreff = "https://github.com/MunteanuAndrei237/minesweeperBot";
  else if (props.props === "ChessBotLink")
    hreff = "https://github.com/MunteanuAndrei237/chess_bot";

  const [data, setData] = useState([["wait please.."], ["wait please.."]]);

  useEffect(() => {
    dataPromise.then((result) => {
      setData(result);
    });
  }, []);

  return (
    <div id="popUp" onClick={hidePopUp}>
      {props.props === "MinesweeperBotCode" ||
      props.props === "ChessBotCode" ? (
        <div id="popUpBoxCode" onClick={stopPropagation}>
          <div id="popUpText">
            {props.props === "MinesweeperBotCode"
              ? data[0].map((item, index) => (
                  <p
                    className="codep"
                    key={index}
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {item}
                  </p>
                ))
              : props.props === "ChessBotCode"
              ? data[1].map((item, index) => (
                  <p
                    className="codep"
                    key={index}
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {item}
                  </p>
                ))
              : null}
          </div>
        </div>
      ) : props.props === "ChessBotLink" ||
        props.props === "MinesweeperBotLink" ? (
        <div id="popUpBoxLink" onClick={stopPropagation}>
          <p>The full code is at the following link:</p>

          {props.props === "MinesweeperBotLink" ||
          props.props === "ChessBotLink" ? (
            <a style={{ color: "black" }} href={hreff}>
              {hreff}
            </a>
          ) : null}
          {props.props === "MinesweeperBotLink" ||
          props.props === "ChessBotLink" ? (
            <img
              src="copyLinkIcon.png"
              id="copyLinkIcon"
              onClick={copyToClipboard(hreff)}
              alt="Media not avalabile"
            ></img>
          ) : null}
        </div>
      ) : props.props === "ChessBotVideo" ||
        props.props === "MinesweeperBotVideo" ? (
        <div id="popUpBoxVideo" onClick={stopPropagation}>
          {props.props === "ChessBotVideo" && (
            <video id="ChessBotVideo" controls muted>
              <source src="2023-10-21_20-49-17 - Trim.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {props.props === "MinesweeperBotVideo" && (
            <video id="minesweeperVideo" controls>
              <source src="2023-10-02 13-28-26.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default PopUp;
