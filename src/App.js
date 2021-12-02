import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterConfig from "./application/navigation/routerConfig";
import "./App.css";

function App(props) {
  return (
    <div>
      <Router>
        <RouterConfig />
      </Router>
    </div>
  );
}

export default App;
