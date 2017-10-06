import Board from "../board";
import Square from "../square";
import Player from "../player";
import King from "./king";

export function getAvailableMovesDiagonal(board: Board, position: Square, currentPlayer:Player): Square[] {
    let moves:Square[] = [];

    const directions=[[1,-1],[1,1],[-1,1],[-1,-1]];

    for( const [dr,dc] of directions)
    {
        for(let i=1;i<8;i++)
        {
            let r = position.row + dr * i;
            let c = position.col + dc * i;

            if(r<0 || r>=7 || c<0 ||c>7)
                break;

            if(checkAvailableMove(board, new Square(r,c)))
            {
                moves.push(new Square(r,c));
            }
            else if(currentPlayer !== board.getPiece(new Square(r,c))?.player && !(board.getPiece(new Square(r,c))instanceof King))
            {
                moves.push(new Square(r,c));
                break;
            }
        }
    }
    return moves;
}

export function getAvailableMovesLinear(board: Board, position: Square, currentPlayer:Player)  {
    let moves:Square[] = [];

    for(let i= position.row-1; i >=0; i--)
    {
        if(checkAvailableMove(board, new Square(i, position.col)))
                moves.push(new Square(i, position.col));
        else if(currentPlayer !== board.getPiece(new Square(i, position.col))?.player && !(board.getPiece(new Square(i,position.col))instanceof King))
            {
                moves.push(new Square(i, position.col));
                break;
            }
        else
            break;

    }

    for(let i= position.row+1; i <=7; i++)
    {
        if(checkAvailableMove(board, new Square(i, position.col)))
            moves.push(new Square(i, position.col));
        else if(currentPlayer !== board.getPiece(new Square(i, position.col))?.player && !(board.getPiece(new Square(i,position.col))instanceof King))
        {
            moves.push(new Square(i, position.col));
            break;
        }
        else
            break;

    }

    for(let i=position.col+1;i<=7;i++)
    {
            if(checkAvailableMove(board, new Square(position.row,i)))
                moves.push(new Square(position.row,i));
            else if(currentPlayer !== board.getPiece(new Square(position.row,i))?.player && !(board.getPiece(new Square(position.row,i))instanceof King))
            {
                moves.push(new Square(position.row,i));
                break;
            }
            else
                break;

    }

    for(let i=position.col-1;i>=0;i--)
    {
        if(checkAvailableMove(board, new Square(position.row,i)))
                moves.push(new Square(position.row,i));
        else if(currentPlayer !== board.getPiece(new Square(position.row,i))?.player && !(board.getPiece(new Square(position.row,i))instanceof King))
            {
                moves.push(new Square(position.row,i));
                break;
            }
        else
            break;

    }
    return moves;
}

export function getAvailableMovesKnight(board: Board, position: Square, currentPlayer:Player)  {
    let moves:Square[] = [];

    const directions=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];
    for( const [dr,dc] of directions) {
     let r=position.row+dr;
     let c=position.col+dc;
     if(r>=0 && r<=7 && c>=0 && c<=7)

        if(checkAvailableMove(board, new Square(r,c)))
            moves.push(new Square(r,c));
        else if(currentPlayer !== board.getPiece(new Square(r,c))?.player && !(board.getPiece(new Square(r,c))instanceof King)) {
            moves.push(new Square(r, c));
        }

    }

    return moves;
}

export function getAvailableMovesKing(board: Board, position: Square, currentPlayer:Player)  {
    let moves:Square[] = [];

    const directions=[[0,1],[0,-1],[1,0],[-1,0],[-1,-1],[-1,1],[1,-1],[1,1]];
    for( const [dr,dc] of directions) {
        let r=position.row+dr;
        let c=position.col+dc;
        if(r>=0 && r<=7 && c>=0 && c<=7)
            if(checkAvailableMove(board, new Square(r,c)))
                moves.push(new Square(r,c));
            else if(currentPlayer !== board.getPiece(new Square(r,c))?.player && !(board.getPiece(new Square(r,c))instanceof King)) {
                moves.push(new Square(r, c));
            }
    }

    return moves;
}

export function checkAvailableMove(board: Board, position: Square)  {
    return board.getPiece(position) === undefined;
}

export function getAvailableTakesForPawn(board: Board, position: Square, currentPlayer:Player)  {
    let moves:Square[] = [];

    if(currentPlayer===Player.WHITE) {

         if(position.row+1<=7)
        {

            if(board.getPiece(new Square(position.row+1,position.col+1))?.player === Player.BLACK && !(board.getPiece(new Square(position.row+1,position.col+1)) instanceof King) ) {
                moves.push(new Square(position.row+1,position.col+1));
            }

            if(board.getPiece(new Square(position.row+1,position.col-1))?.player === Player.BLACK && !(board.getPiece(new Square(position.row+1,position.col-1)) instanceof King)) {
                moves.push(new Square(position.row+1,position.col-1));
            }
        }

    } else {
        if(position.row-1>=0)
        {

            if(board.getPiece(new Square(position.row-1,position.col+1))?.player===Player.WHITE && !(board.getPiece(new Square(position.row-1,position.col+1)) instanceof King)) {
                moves.push(new Square(position.row-1,position.col+1));
            }

            if(board.getPiece(new Square(position.row-1,position.col-1))?.player===Player.WHITE && !(board.getPiece(new Square(position.row-1,position.col-1)) instanceof King)) {
                moves.push(new Square(position.row-1,position.col-1));
            }
        }
    }
    return moves;

}