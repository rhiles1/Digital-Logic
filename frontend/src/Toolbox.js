import React, { Component } from "react";
import styled from "styled-components";

import 'Tools.css';
import 'App.css';

function Toolbox() {
    return (
        <div className="Toolbox">
            <div className="flex-hor">
                <div className="flex-ver">
                    Tool(name='Item 1')
                    Tool(name='Item 2')
                    Tool(name='Item 3')
                </div>
                <div className="flex-ver">
                    Tool(name='Item 4')
                    Tool(name='Item 5')
                    Tool(name='Item 6')
                </div>
            </div>
        </div>
    );
}

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

function Tool() {
    return (
        <Button>
            {this.props.name}
        </Button>
    );
}

export default Toolbox;