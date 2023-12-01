function Education() {
  return (
    <div className="bodySectionContainer">
      <div className="bodySection" id="education">
        <h1>Education</h1>
        <div id="educationGrid">
          <div id="CNITV">
            <h3>Colegiul Național de Informatică Tudor Vianu</h3>
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
            <h3>Faculty of Mathematics and Computer Science</h3>
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
        <img
          src="graduation.jpg"
          style={{ width: "99%" }}
          alt="Media not avalabile"
        ></img>
      </div>
    </div>
  );
}
export default Education;
