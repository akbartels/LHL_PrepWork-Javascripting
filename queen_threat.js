//SPENT 240MINS
	//need to add backwards diagonal, then create if statement
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

/* const queenThreat = function(generatedBoard){
  let boardLength = generatedBoard.length;

  let rowLength = generatedBoard.length;
  let rowCount = 0;
  let rowThreat = false;

  let colLength = generatedBoard[0].length;
  let colCount = 0;
  let colThreat = false;

  let diagCount = 0;
  let diagThreatL2R = false;
  let diagThreatR2L = false;

  //1. check rows:
  for(let row = 0; row < boardLength; row++){
    for(let col = 0; col < generatedBoard[row].length; col++){
      if(generatedBoard[row][col] === 1){
        rowCount += 1;
      }
    }
    if(rowCount > 1){
      rowThreat = true;
      break;
    } else {
      rowCount = 0;
    }
  }

  //2. check columns:
  for(let row = 0; row < boardLength; row++){
    for(let col = 0; col < generatedBoard[row].length; col++){
      if(generatedBoard[col][row] === 1){
        colCount += 1;
      }
    }	
    if(colCount > 1){
      colThreat = true;
      break;
    } else {
      colCount = 0;
    }
  }	

  //3. check diagonal left to right:
  for(let count = 0; count <= (boardLength*2) - 1; count++){    
    if(count < boardLength-1){
      let row = count;
      let col = 0;
      while(row >= 0 && col <= count){
        if(generatedBoard[col][row] === 1){
          diagCount += 1
        }
        row -= 1
        col += 1
      }
      if(diagCount > 1){
        diagThreatL2R = true;
        break;
      } else {
        diagCount = 0;
      }
    } else if (count <= (boardLength*2)-1){
      let row = boardLength-1;
      let col = count - (boardLength-1);
      
      while(row >= 0 && col <= boardLength-1){
        if(generatedBoard[col][row] === 1){
          diagCount += 1
        } 	
        row -= 1
        col += 1			
      }
      if(diagCount > 1){
        diagThreatL2R = true;
        break;
      } else {
        diagCount = 0;
      }
    }
  }

  //4. check diagonal right to left - didn't finish - way too complicated!
  

  //5. check for threat
  if(rowThreat || colThreat || diagThreatL2R || diagThreatR2L){
    return true;
  } else {
    return false;
  }
} */
  
let whiteQueen = [7, 4];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

