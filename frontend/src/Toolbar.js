import React, { Component } from "react";

import './Tools.css';
import './App.css';

export default function Toolbar() {
    return (
        <div className="Toolbar flex-hor">
            <div className="tool h-tool">Item 1</div>
            <div className="tool h-tool">Item 2</div>
        </div>
    );
}