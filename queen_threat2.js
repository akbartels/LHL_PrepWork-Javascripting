const generateBoard = function(whiteQueen, blackQueen){
  let board = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]
  ];

  for(let row = 0; row < board.length; row++){
    for(let col = 0; col < board[row].length; col++){
      if(row === whiteQueen[0] && col === whiteQueen[1]){
        board[row][col] = 1;
      } else if(row === blackQueen[0] && col === blackQueen[1]) {
        board[row][col] = 1;
      }
    }
  }
  return board;
}

const queenThreat = function(generatedBoard){
  let wRow = whiteQueen[0];
  let wCol = whiteQueen[1];
  let bRow = blackQueen[0];
  let bCol = blackQueen[1];
  

  if(wRow === bRow){ //check rows
    return true;
  } else if(wCol === bCol){ //check columns
    return true;
  } else if(wRow + wCol === bRow + bCol){ //check diag left to right
    return true;
  } else if(wRow - wCol === bRow - bCol){ // check diag right to left
    return true;
  } else {
    return false;
  }
}

let whiteQueen = [2, 3];
let blackQueen = [0, 1];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));