import React, { Component } from "react";
import './App.css';
import './Toolbar.js';
import './Toolbox.js';
import './Workspace.js';

function App() {
  return (
    <div className="App">
        Toolbar()
        <div className="flex-hor">
            Toolbox()
            Workspace()
        </div>
    </div>
  );
}

export default App;
