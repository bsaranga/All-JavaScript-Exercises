import React from 'react';
import Board from './Board';
import calculateWinner from './GameLogic';
import {hot} from 'react-hot-loader';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                coord: []
            }],
            stepNumber: 0,
            xIsNext: true,
            coords: [
                        [0,0],[1,0],[2,0],
                        [0,1],[1,1],[2,1],
                        [0,2],[1,2],[2,2]
                    ]
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const coord = current.coord.slice();
        if(calculateWinner(squares) || squares[i]){
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        coord.push(this.state.coords[i]);
        this.setState({history: history.concat([{squares: squares, coord: coord}]),
                       stepNumber: history.length,
                       xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const moves = history.map((step, move) => {
            const desc = move ? `Go to move #${move}` : `Go to game start`;
            const currPos = step.coord[move - 1];
            return(
                <li key={move}>
                    <button className="buttonFocus" onClick={() => this.jumpTo(move)}>{desc} {currPos != undefined ? `Col = ${currPos[0] + 1}, Row = ${currPos[1] + 1}` : ""}</button>
                </li>
            )
        });

        let status;
        if(winner) {
            status = `Winner ${winner}`;
        }else{
            status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
        }

        return (
            <div className="game">
                <div className="game--board">
                    <Board 
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        )        
    }
}

export default hot(module)(Game);