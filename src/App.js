import { useState } from "react";
import Square from "./components/Square";

const Board=()=>{
  const [square, setSquare] = useState(Array(9).fill(null));
  const [xisNext, setXIsNext] = useState(true);

  const HandleClick=(i)=>{
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

  return(
    <>
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

export default Board
