import Header from "./Header.js";
import Body from "./Body.js";
import Footer from "./Footer.js";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <Router>
        <Header />
        <Body />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
