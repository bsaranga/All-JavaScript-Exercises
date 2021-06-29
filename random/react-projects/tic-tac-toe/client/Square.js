import React from 'react';
import {hot} from 'react-hot-loader';

function Square(props){
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default hot(module)(Square);