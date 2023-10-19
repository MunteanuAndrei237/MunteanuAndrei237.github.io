import './body.css';
import PopUp from './PopUp';
import { dataPromise } from './requestGit.js';
import { useEffect, useState } from 'react';
import App from './App.js';

function Body()
{
    const [dataArray, setDataArray] = useState([]);

    const seeDemoCodeChessBot = async () => {
      try {
        const result = await dataPromise;
        setDataArray(result);
        console.log(result);
        document.getElementById("popUp").style.display="block";
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error, e.g., show an error message to the user
      }
    };
  
    useEffect(() => {
      // Fetch initial data or do any other setup if needed
    }, []);
    console.log(dataArray)
    return (
        <div id="body">
            <PopUp props={dataArray}/>
            <div class="bodySection" id="aboutMe">
                <h1>About me</h1>
                <p>Remember, good HTML practice involves properly nesting and closing tags. Not closing tags can lead to unexpected results and may cause issues with the rendering of your webpage. Always check the specific requirements for each HTML element in the official documentation.</p>
            </div>
            <div class="bodySection" id="githubProjectsContainer">
            <h1>My projects</h1>
                <div class="githubProject">
                    <h1>Chess Bot</h1>
                    <p>Remember, good HTML practice involves properly nesting and closing tags. Not closing tags can lead to unexpected results and may cause issues with the rendering of your webpage. Always check the specific requirements for each HTML element in the official documentation.</p>
                    <div class="buttonsContainer">
                        <button class="seeDemoCode myButton" onClick={seeDemoCodeChessBot}>See Demo Code</button>
                        <button class="seeFullCode myButton">See Full Code</button>
                        <button class="seeVideo myButton">See video</button>
                        </div>  
                        </div>
                <div class="githubProject">  
                    <h1>Minesweeper Bot</h1>
                    <p>Remember, good HTML practice involves properly nesting and closing tags. Not closing tags can lead to unexpected results and may cause issues with the rendering of your webpage. Always check the specific requirements for each HTML element in the official documentation.</p>
                    <div class="buttonsContainer">
                        <button class="seeDemoCode myButton">See Demo Code</button>
                        <button class="seeFullCode myButton">See Full Code</button>
                        <button class="seeVideo myButton">See video</button>
                        </div>                  
                </div>
            </div>
            <div id="Education" class="bodySection">
                <h1>Education</h1>
                <p>Remember, good HTML practice involves properly nesting and closing tags. Not closing tags can lead to unexpected results and may cause issues with the rendering of your webpage. Always check the specific requirements for each HTML element in the official documentation.</p>
            </div>
            <div id="skills" class="bodySection">
                <h1>Skills</h1>
                <p>Remember, good HTML practice involves properly nesting and closing tags. Not closing tags can lead to unexpected results and may cause issues with the rendering of your webpage. Always check the specific requirements for each HTML element in the official documentation.</p>
            </div>
        </div>
    )
}

export default Body;