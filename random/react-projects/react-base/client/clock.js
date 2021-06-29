import React from 'react';
import { render } from 'react-dom';
import {hot} from 'react-hot-loader';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.setState({
                date: new Date()
            }),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    render(){
        return(
            <h2>{this.state.date.toLocaleTimeString()}</h2>
        )
    }
}

export default hot(module)(Clock);