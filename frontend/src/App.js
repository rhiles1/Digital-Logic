import React, { Component } from "react";
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
  );
}

export default App;
