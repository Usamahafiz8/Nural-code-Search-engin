import React from "react";
import "./App.css";
import { CopyRightMArk } from "./components/copyRight";
import { QueryResults } from "./components/queryResults";
import { Typography } from "@mui/material";

function App() {
  return (
    <div >
      <div style={{ padding: "20px" }}>
        <QueryResults />
      </div>
    </div>
  );
}

export default App;
