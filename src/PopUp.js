import './PopUp.css';
import React, { useState, useEffect } from 'react';
import {dataPromise,fetchData} from './requestGit.js';
function hidePopUp(){
    document.getElementById("popUp").style.display="none";
    // Pause the video
    if(document.getElementById("minesweeperVideo"))
document.getElementById("minesweeperVideo").pause();
}
function copyToClipboard(h){
  navigator.clipboard.writeText(h);
}
function stopPropagation(e){
    e.stopPropagation();
}
function PopUp(props){
    console.log(props.props)
    const [data, setData] = React.useState([["wait please.."],["wait please.."]]);

  React.useEffect(() => {
    // Use the dataPromise to get the data
    dataPromise.then((result) => {
      // Update the state with the fetched data
      setData(result);
    });
  }, []); 
  console.log(data)
  return (
    <div id="popUp" onClick={hidePopUp}>
      {props.props === "MinesweeperBotCode" || props.props === "ChessBotCode" ? (
        <div id="popUpBoxCode" onClick={stopPropagation}>
          <div id="popUpText">
            {props.props === "MinesweeperBotCode" ? (
              data[0].map((item, index) => (
                <p className="codep" key={index} style={{ whiteSpace: 'pre-wrap' }}>
                  {item}
                </p>
              ))
            ) : props.props === "ChessBotCode" ? (
              data[1].map((item, index) => (
                <p className="codep" key={index} style={{ whiteSpace: 'pre-wrap' }}>
                  {item}
                </p>
              )) 
            ) : null}
          </div>
        </div>
      ) : props.props === "ChessBotLink" || props.props === "MinesweeperBotLink" ? ( 
        <div id="popUpBoxLink" onClick={stopPropagation}>
            <p>The full code is at the following link:</p>
           
            {props.props === "MinesweeperBotLink" ?(<a style={{color:"black"}} onClick={copyToClipboard("https://github.com/MunteanuAndrei237/minesweeperBot")} href="https://github.com/MunteanuAndrei237/minesweeperBot">https://github.com/MunteanuAndrei237/minesweeperBot</a>)
            :props.props === "ChessBotLink" ?(<a style={{color:"black"}} href="https://github.com/MunteanuAndrei237/chess_bot">https://github.com/MunteanuAndrei237/chess_bot</a>):null}
             <img src="copyLinkIcon.png" onClick={copyToClipboard("https://github.com/MunteanuAndrei237/minesweeperBot")}></img>
        </div>
      ) : props.props === "ChessBotVideo" || props.props === "MinesweeperBotVideo" ? (
        <div id="popUpBoxVideo" onClick={stopPropagation}>
            <video id="minesweeperVideo" width="640" height="360" controls>
  <source src="2023-10-02 13-28-26.mp4" type="video/mp4" ></source>
  Your browser does not support the video tag.
</video>
        </div>):null }
    </div>
  );
}

export default PopUp;