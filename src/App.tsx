import React from "react";
import "./App.css";
import { CopyRightMArk } from "./components/copyRight";
import { QueryResults } from "./components/queryResults";

function App() {
  return (
    <div >
      {/* <header className="App-header"> */}
        <h2 style={{ textTransform: "uppercase" , textAlign:"center", fontSize:"36px"}}>
          Neural Code Search Engine Using pre-trained model
        </h2>
      <br />
      <br />
      <div style={{ padding: "20px" }}>
        <QueryResults />
      </div>
      {/* <footer className="App-footer">
        <CopyRightMArk />
      </footer> */}
    </div>
  );
}

export default App;
