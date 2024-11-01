import {useState} from 'react'

function Square({state, clickFunc}) {
  return <button className="square" onClick={clickFunc}>{state}</button>
}

function Board({squareVals, handleStateChange}) {
  return (
    <>
      <div className='board-row'>
        <Square state={squareVals[0]} clickFunc={() => handleStateChange(0)} />
        <Square state={squareVals[1]} clickFunc={() => handleStateChange(1)} />
        <Square state={squareVals[2]} clickFunc={() => handleStateChange(2)} />
      </div>
      <div className='board-row'>
        <Square state={squareVals[3]} clickFunc={() => handleStateChange(3)} />
        <Square state={squareVals[4]} clickFunc={() => handleStateChange(4)} />
        <Square state={squareVals[5]} clickFunc={() => handleStateChange(5)} />
      </div>
      <div className='board-row'>
        <Square state={squareVals[6]} clickFunc={() => handleStateChange(6)} />
        <Square state={squareVals[7]} clickFunc={() => handleStateChange(7)} />
        <Square state={squareVals[8]} clickFunc={() => handleStateChange(8)} />
      </div>
    </>
  )
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [isXNext, setIsXNext] = useState(true)
  const [squares, setSquares] = useState(history[history.length - 1])

  let gameStatus = isXNext ? 'Player X\'s turn.' : 'Player O\'s turn.'
  if(calculateWinner(squares))
    gameStatus = isXNext ? 'Winner is O.' : 'Winner is X.'

  const handleHistoryChange = (ind) => {
    const newSquares = history[ind]
    setSquares(newSquares)
  }

  const whenBtnClicked = (ind) => {
    if (squares[ind] || calculateWinner(squares))
      return

    const historyInd = history.indexOf(squares)
    const newSquares = [...squares]

    if (isXNext) {
      newSquares[ind] = 'X'
    } else {
      newSquares[ind] = 'O'
    }

    history.splice(historyInd+1)
    setSquares(newSquares)
    setHistory([...history, newSquares])
    setIsXNext(!isXNext)
  }

  return (
    <>
      <div className='status'>{gameStatus}</div>
      <Board squareVals={squares} handleStateChange={whenBtnClicked} />
      <div className='game-info'>
        <ol>
          {history.map((ele, ind) => {
            const btnText = ind > 0 ? `Go to move # ${ind}` : 'Go to game start.'
            return <li key={ind}><button onClick={() => handleHistoryChange(ind)}>{btnText}</button></li>
          })}
        </ol>
      </div>
    </>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
