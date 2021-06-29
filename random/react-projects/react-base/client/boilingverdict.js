import React from 'react';
import {hot} from 'react-hot-loader';

function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p className={`${props.style} text-red-700`}>The water would boil...</p>
    }
    return <p className={`${props.style} text-blue-700`}>The water would not boil...</p>
}

export default hot(module)(BoilingVerdict)