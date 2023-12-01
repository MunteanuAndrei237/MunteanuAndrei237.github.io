import "./body.css";
import AboutMe from "./AboutMe";
import PopUp from "./PopUp";
import MyProjects from "./MyProjects";
import Education from "./Education";
import Skills from "./Skills";
import React, { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";

function Body() {
  let popUpRef = useRef(null);

  const [popUpProps, setpopUpProps] = useState(0);
  function renderPopUp(text) {
    popUpRef.current.style.display = "flex";
    setpopUpProps(text);
  }

  return (
    <div id="body">
      <PopUp props={popUpProps} ref={popUpRef} />

      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/about" element={<AboutMe />} />
        <Route
          path="/projects"
          element={<MyProjects renderPopUp={renderPopUp} />}
        />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default Body;
