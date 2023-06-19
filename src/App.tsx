import React from "react";
import "./App.css";
import { CopyRightMArk } from "./components/copyRight";
import { QueryResults } from "./components/queryResults";
import { Typography } from "@mui/material";

function App() {
  return (
    <div>
      {/* <header className="App-header"> */}
      <div>
        <h2>
          <Typography
            color={"primary"}
            style={{
              textTransform: "uppercase",
              textAlign: "center",
              fontSize: "48px",
            }}
          >
            <b>Neural Code Search Engine</b>
          </Typography>
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
