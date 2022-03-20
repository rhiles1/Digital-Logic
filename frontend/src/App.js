import React, { Component } from "react";
import axios from "axios";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="Toolbar flex-hor">
            <div className="tool h-tool">Item 1</div>
            <div className="tool h-tool">Item 2</div>
        </div>
        <div className="flex-hor">
            <div className="Toolbox">
                <div className="flex-hor">
                    <div className="flex-ver">
                        <div className="tool v-tool">Item 3</div>
                        <div className="tool v-tool">Item 4</div>
                        <div className="tool v-tool">Item 5</div>
                    </div>
                    <div className="flex-ver">
                        <div className="tool v-tool">Item 6</div>
                        <div className="tool v-tool">Item 7</div>
                        <div className="tool v-tool">Item 8</div>

                    </div>
                </div>
            </div>
            <div className="Workspace">
                <p>Workspace</p>
            </div>
        </div>
    </div>
    //<div className="App">
    //  <header className="App-header">
    //    <img src={logo} className="App-logo" alt="logo" />
    //    <p>
    //      Edit <code>src/App.js</code> and save to reload.
    //   </p>
    //    <a
    //      className="App-link"
    //      href="https://reactjs.org"
    //      target="_blank"
    //      rel="noopener noreferrer"
    //    >
    //      Learn React
    //    </a>
    //  </header>
    //</div>
  );
}

export default App;
