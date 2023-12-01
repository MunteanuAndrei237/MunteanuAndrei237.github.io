function MyProjects({ renderPopUp }) {
  return (
    <div className="bodySectionContainer">
      <div className="bodySection" id="githubProjects">
        <h1>My projects</h1>

        <div className="githubProject">
          <h3>Graph maker</h3>
          <p>
            Web application developed using vanilla front-end languages
            (HTML/CSS/JavaScript), along with React for state management and
            Material UI for a user-friendly interface with various components
            and other frameworks and libraries. It allows users to create graphs
            and perform various operations on them, such as adding and modifying
            values and names, changing their colors, and scaling them as
            desired. Users can choose from multiple graph types, including bar
            graphs, line graphs, and pie charts, and can also select from
            multiple color palettes implemented using Material UI themes and CSS
            variables. The graph is drawn in vanilla JS canvas and can be
            downloaded. It is created based on the state of the user's input.You
            can use ir for free at{" "}
            <a
              style={{ color: "purple" }}
              href="https://graph-maker-e86f6.web.app/"
            >
              https://graph-maker-e86f6.web.app/
            </a>
          </p>
          <div className="buttonsContainer">
            <button
              className="seeDemoCode myButton"
              onClick={() => renderPopUp("GraphMakerCode")}
            >
              Demo Code
            </button>
            <button
              className="seeFullCode myButton"
              onClick={() => renderPopUp("GraphMakerLink")}
            >
              Access Full Code
            </button>
            <button
              className="seeVideo myButton"
              onClick={() => renderPopUp("GraphMakerVideo")}
            >
              See video
            </button>
          </div>
        </div>
        <div className="githubProject">
          <h3>Minesweeper Bot</h3>
          <p>
            This program was developed using Python along with various pip
            libraries, such as mouse and keyboard for control and ImageGrab from
            PIL for screen reading. It specifically works with Google's
            Minesweeper (
            <a style={{ color: "purple" }} href="https://g.co/kgs/wV9bHr">
              https://g.co/kgs/wV9bHr
            </a>
            ) and is designed to scan your screen and play the game autonomously
            (see video for details). The program can analyze the screen to
            determine the number and location of tiles, calculate the positions
            of mines, and identify different types of tiles (numbered, blank,
            flagged, etc.). It employs basic but optimal algorithms, such as
            counting the number of free tiles around a numbered tile and
            flagging them if necessary. In more complex scenarios where the
            previous algorithm is insufficient, it utilizes a backtracking
            algorithm on all "exposed" squares. By utilizing a vector to check
            neighboring tiles and breaking the loop as soon as possible, the
            program can solve a medium-level Minesweeper game in just 30
            seconds, with a mouse speed of 0.1 seconds per click.
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
        <div className="githubProject">
          <h3>Chess Bot</h3>
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
        <div className="imagesFlex">
          <img src="chess.png" alt="Media not avalabile"></img>
          <img src="graph.png" alt="Media not avalabile"></img>
        </div>
      </div>
    </div>
  );
}
export default MyProjects;
