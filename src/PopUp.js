import "./popUp.css";
import { useState, useEffect, useRef, forwardRef } from "react";
import { dataPromise } from "./RequestGit.js";

function copyToClipboard(link) {
  navigator.clipboard.writeText(link);
}
function stopPropagation(e) {
  e.stopPropagation();
}

const PopUp = forwardRef((args, ref) => {
  const chessBotVideoRef = useRef(null);
  const minesweeperVideoRef = useRef(null);
  const graphMakerVideoRef = useRef(null);

  function hidePopUp() {
    ref.current.style.display = "none";
    if (chessBotVideoRef.current) chessBotVideoRef.current.pause();
    if (minesweeperVideoRef.current) minesweeperVideoRef.current.pause();
    if (graphMakerVideoRef.current) graphMakerVideoRef.current.pause();
  }
  var myHref;
  if (args.props === "MinesweeperBotLink")
    myHref = "https://github.com/MunteanuAndrei237/minesweeperBot";
  else if (args.props === "ChessBotLink")
    myHref = "https://github.com/MunteanuAndrei237/chess_bot";
  else if (args.props === "GraphMakerLink")
    myHref = "https://github.com/MunteanuAndrei237/graphMaker";

  const [data, setData] = useState([
    ["wait please.."],
    ["wait please.."],
    ["wait please.."],
  ]);

  useEffect(() => {
    dataPromise.then((result) => {
      setData(result);
    });
  }, []);

  return (
    <div id="popUp" onClick={hidePopUp} ref={ref}>
      {args.props === "MinesweeperBotCode" ||
      args.props === "ChessBotCode" ||
      args.props === "GraphMakerCode" ? (
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
              : args.props === "GraphMakerCode"
              ? data[2].map((item, index) => (
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
        args.props === "MinesweeperBotLink" ||
        args.props === "GraphMakerLink" ? (
        <div id="popUpBoxLink" onClick={stopPropagation}>
          <p>The full code is at the following link:</p>
          <a style={{ color: "black" }} href={myHref}>
            {myHref}
          </a>
          <img
            src="copyLinkIcon.png"
            id="copyLinkIcon"
            onClick={copyToClipboard(myHref)}
            alt="Media not avalabile"
          ></img>
        </div>
      ) : args.props === "ChessBotVideo" ||
        args.props === "MinesweeperBotVideo" ||
        args.props === "GraphMakerVideo" ? (
        <div id="popUpBoxVideo" onClick={stopPropagation}>
          {args.props === "ChessBotVideo" && (
            <video ref={chessBotVideoRef} controls muted>
              <source src="2023-10-21_20-49-17 - Trim.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {args.props === "MinesweeperBotVideo" && (
            <video ref={minesweeperVideoRef} controls>
              <source src="2023-10-02 13-28-26.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {args.props === "GraphMakerVideo" && (
            <video ref={graphMakerVideoRef} controls>
              <source src="2023-11-30 19-27-39 - Trim.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      ) : null}
    </div>
  );
});

export default PopUp;
