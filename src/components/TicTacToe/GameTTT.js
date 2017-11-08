import React, { PureComponent } from 'react'
import Board from "./Board"

class GameTTT extends PureComponent {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* ... */}</ol>
        </div>
      </div>
    );
  }
}

export default GameTTT
