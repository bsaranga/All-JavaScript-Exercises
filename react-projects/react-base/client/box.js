import React from 'react';
import {hot} from 'react-hot-loader';
import Table from './table';
import NameForm from './nameform';
import Calculator from './Calculator';

class Box extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            state0: 0,
            shade: 100
        }
        this.incrementState = this.incrementState.bind(this);
    }

    incrementState(){
        let shade = this.state.shade;
        if (shade == 900){
            shade = 100;
        }else{
            shade += 100;
        }
        this.setState({
            state0: this.state.state0 + 1,
            shade: shade
        })
    }
        
    componentDidMount(){
    }

    componentDidUpdate(){
        console.log(`Component updated`);
    }

    getListData(){
        return [
            {
                id: 1,
                name: 'saranga',
                age: 27,
            },
            {
                id: 2,
                name: 'alex',
                age: 32
            },
            {
                id: 3,
                name: 'paige',
                age: 31
            },
            {
                id: 4,
                name: 'peter',
                age: 16
            },
            {
                id: 5,
                name: 'belle',
                age: 18
            },
            {
                id: 6,
                name: 'captain hook',
                age: 42
            },
            {
                id: 7,
                name: 'walt',
                age: 36
            },
        ]
    }

    render(){
        return(
            <div>
                <div className={`rounded-xl ml-5 mt-5 text-xs font-semibold text-center border-purple-400 border-solid border-2 text-gray-${1000-this.state.shade} bg-${this.props.color}-${this.state.shade} w-20 h-20 py-8 _unselectable`}
                        onClick={this.incrementState}>
                        {`State: ${this.state.state0}`}
                </div>
                <Table data={this.getListData()}/>
                <NameForm/>
                <Calculator/>
            </div>
        )

    }
}

export default hot(module)(Box);