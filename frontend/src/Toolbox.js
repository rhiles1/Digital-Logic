import React, { Button } from "react";

import './Tools.css';
import './App.css';

function clickAnd() {
    alert('You clicked AND.');
}

function clickOr() {
    alert('You clicked OR.');
}

function clickNand() {
    alert('You clicked NAND.');
}

function clickNor() {
    alert('You clicked NOR.');
}

function clickXor() {
    alert('You clicked XOR.');
}

function clickNot() {
    alert('You clicked NOT.');
}

export default function Toolbox() {
    return (
        <div className="Toolbox">
            <div className="flex-hor">
                <div className="flex-ver">
                    <button className='button v-tool' onClick={clickAnd}>AND</button>
                    <button className='button v-tool' onClick={clickNot}>NOT</button>
                    <button className='button v-tool' onClick={clickNand}>NAND</button>
                </div>
                <div className="flex-ver">
                    <button className='button v-tool' onClick={clickOr}>OR</button>
                    <button className='button v-tool' onClick={clickXor}>XOR</button>
                    <button className='button v-tool' onClick={clickNor}>NOR</button>
                </div>
            </div>
        </div>
    );
}