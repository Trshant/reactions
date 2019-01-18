import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Square extends React.Component {
  getComponent(event) {
    // event.currentTarget.style.backgroundColor = '#ccc';
    console.log(event.currentTarget.getAttribute('row'), event.currentTarget.getAttribute('val') );
  };
  render() {
    console.log(this.props);
    return (
      <button onClick={this.getComponent} row={this.props.row} val={this.props.count} className="square">
            {this.props.value}
        </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.status = [
      0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0,
      0, 0, 1, 1, 1, 0,
      0, 1, 1, 1, 0, 0,
      0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0
    ];
  }
  renderSquare(i,j) {
    return <Square value={this.status[i]} row={j} count={i} />;
  }

  render() {
    
    return (
      <div>
        <div className="status"></div>
        <div className="board-row">
          {this.renderSquare(0, 1)}
          {this.renderSquare(1, 1)}
          {this.renderSquare(2, 1)}
          {this.renderSquare(3, 1)}
          {this.renderSquare(4, 1)}
          {this.renderSquare(5, 1)}
        </div>
        <div className="board-row">
          {this.renderSquare(6, 2)}
          {this.renderSquare(7, 2)}
          {this.renderSquare(8, 2)}
          {this.renderSquare(9, 2)}
          {this.renderSquare(10, 2)}
          {this.renderSquare(11, 2)}
        </div>
        <div className="board-row">
          {this.renderSquare(12, 3)}
          {this.renderSquare(13, 3)}
          {this.renderSquare(14, 3)}
          {this.renderSquare(15, 3)}
          {this.renderSquare(16, 3)}
          {this.renderSquare(17, 3)}
        </div>
        <div className="board-row">
          {this.renderSquare(18, 4)}
          {this.renderSquare(19, 4)}
          {this.renderSquare(20, 4)}
          {this.renderSquare(21, 4)}
          {this.renderSquare(22, 4)}
          {this.renderSquare(23, 4)}
        </div>
        <div className="board-row">
          {this.renderSquare(24, 5)}
          {this.renderSquare(25, 5)}
          {this.renderSquare(26, 5)}
          {this.renderSquare(27, 5)}
          {this.renderSquare(28, 5)}
          {this.renderSquare(29, 5)}
        </div>
        <div className="board-row">
          {this.renderSquare(30, 6)}
          {this.renderSquare(31, 6)}
          {this.renderSquare(32, 6)}
          {this.renderSquare(33, 6)}
          {this.renderSquare(34, 6)}
          {this.renderSquare(35, 6)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
