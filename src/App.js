import { useState } from "react";
import Square from "./components/Square";

const Board=()=>{
  const [square, setSquare] = useState(Array(9).fill(null));
  const [xisNext, setXIsNext] = useState(true);
  

  const HandleClick=(i)=>{
    if(square[i]!=null||calculateWinner(square)){
      return ;
    }
    const nextSquares = square.slice();
    if(xisNext){
      nextSquares[i]='X';
    }
    else{
      nextSquares[i]='O';
    }
    setSquare(nextSquares);
    setXIsNext(!xisNext);
  }

  const winner = calculateWinner(square);
  let status;

  if(winner){
    status = "Winner:"+winner;
  }
  else{
    status = "Next Player:" + (xisNext?"X":"O");
  }


  return(
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={square[0]} onSquareClick={()=>HandleClick(0)}/>
        <Square value={square[1]} onSquareClick={()=>HandleClick(1)}/>
        <Square value={square[2]} onSquareClick={()=>HandleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={square[3]} onSquareClick={()=>HandleClick(3)}/>
        <Square value={square[4]} onSquareClick={()=>HandleClick(4)}/>
        <Square value={square[5]} onSquareClick={()=>HandleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={square[6]} onSquareClick={()=>HandleClick(6)}/>
        <Square value={square[7]} onSquareClick={()=>HandleClick(7)}/>
        <Square value={square[8]} onSquareClick={()=>HandleClick(8)}/>
      </div>
    </>
    
  );
}

const calculateWinner=(square)=>{
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [2, 5, 8],
    [0, 3, 6],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(let i=0; i<lines.length; i++){
    const [a,b,c] = lines[i];
    if(square[a]&&square[a]===square[b]&&square[a]===square[c]){
      return square[a];
    }
  }
  return null;
}

export default Board
