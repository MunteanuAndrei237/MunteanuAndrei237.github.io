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

function PopUp(args) {
  var myHref;
  if (args.props === "MinesweeperBotLink")
    myHref = "https://github.com/MunteanuAndrei237/minesweeperBot";
  else if (args.props === "ChessBotLink")
    myHref = "https://github.com/MunteanuAndrei237/chess_bot";

  const [data, setData] = useState([["wait please.."], ["wait please.."]]);

  useEffect(() => {
    dataPromise.then((result) => {
      setData(result);
    });
  }, []);

  return (
    <div id="popUp" onClick={hidePopUp}>
      {args.props === "MinesweeperBotCode" || args.props === "ChessBotCode" ? (
        <div id="popUpBoxCode" onClick={stopPropagation}>
          <div id="popUpText">
            {args.props === "MinesweeperBotCode"
              ? data[0].map((item, index) => (
                  <p
                    className="codep"
                    key={index}
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {item}
                  </p>
                ))
              : args.props === "ChessBotCode"
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
      ) : args.props === "ChessBotLink" ||
        args.props === "MinesweeperBotLink" ? (
        <div id="popUpBoxLink" onClick={stopPropagation}>
          <p>The full code is at the following link:</p>

          {args.props === "MinesweeperBotLink" ||
          args.props === "ChessBotLink" ? (
            <a style={{ color: "black" }} href={myHref}>
              {myHref}
            </a>
          ) : null}
          {args.props === "MinesweeperBotLink" ||
          args.props === "ChessBotLink" ? (
            <img
              src="copyLinkIcon.png"
              id="copyLinkIcon"
              onClick={copyToClipboard(myHref)}
              alt="Media not avalabile"
            ></img>
          ) : null}
        </div>
      ) : args.props === "ChessBotVideo" ||
        args.props === "MinesweeperBotVideo" ? (
        <div id="popUpBoxVideo" onClick={stopPropagation}>
          {args.props === "ChessBotVideo" && (
            <video id="ChessBotVideo" controls muted>
              <source src="2023-10-21_20-49-17 - Trim.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {args.props === "MinesweeperBotVideo" && (
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
