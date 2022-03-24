import React, { Component } from "react";
import './App.css';
import Toolbar from './Toolbar.js';
import Toolbox from './Toolbox.js';
import Workspace from './Workspace.js';

function App() {
  return (
    <div className="App">
        <Toolbar />
        <div className="flex-hor">
            <Toolbox />
            <Workspace />
        </div>
    </div>
  );
}

export default App;
