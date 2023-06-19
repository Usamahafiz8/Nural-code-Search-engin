import React from "react";
import "./App.css";
import { CopyRightMArk } from "./components/copyRight";
import { QueryResults } from "./components/queryResults";

function App() {
  return (
    <div>
      {/* <header className="App-header"> */}
      <div
        style={{
          textTransform: "uppercase",
          textAlign: "center",
          fontSize: "36px",
        }}
      >
        <h2>
          Neural Code Search Engine
          <h2
            style={{
              textTransform: "uppercase",
              textAlign: "center",
              fontSize: "28px",
            }}
          >
            Using pre-trained model
          </h2>
        </h2>
      </div>
      <div style={{ padding: "20px" }}>
        <QueryResults />
      </div>
    </div>
  );
}

export default App;
