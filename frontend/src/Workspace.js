import React, { Component } from "react";

import './Workspace.css';

export default function Workspace() {
    return (
        <div className="Workspace">
            <Board piecePos={[0,0]} />
        </div>
    );
}

function Piece(){
    return (
        <p>Thing</p>
    )
}

function Square({children}) {
    return (
        <div>
            {children}
        </div>
    );
}

function renderSquare(i, [pieceX, pieceY]) {
    const x = i % 8
    const y = Math.floor(i / 8)
    const isPieceHere = pieceX === x && pieceY === y
    const piece = isPieceHere ? <Piece /> : null

    return (
        <div key={i}>
            <Square>{piece}</Square>
        </div>
    )
}

function Board({piecePos}) {
    const squares = []
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, piecePos))
    }
    return (
        <div className='square'>
            {squares}
        </div>
    );
}