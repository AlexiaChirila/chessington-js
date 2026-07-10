import Board from "../board";
import Square from "../square";

export function getAvailableMovesDiagonal(board: Board, position: Square): Square[] {
    let moves:Square[] = [];

    const directions=[[1,-1],[1,1],[-1,1],[-1,-1]];

    for( const [dr,dc] of directions)
    {
        for(let i=1;i<8;i++)
        {
            let r=position.row +dr*i;
            let c=position.col +dc*i;

            if(r<0 || r>=7 || c<0 ||c>7)
                break;

            if(checkAvailableMove(board, new Square(r,c)))
             moves.push(new Square(r,c));
        }
    }
    return moves;
}

export function getAvailableMovesLinear(board: Board, position: Square)  {
    let moves:Square[] = [];

    for(let i=0;i<=7;i++) {
        if (i !== position.row )
        {
            if(checkAvailableMove(board, new Square(i, position.col)))
                moves.push(new Square(i, position.col));
            else
                break;
        }
    }

    for(let i=0;i<=7;i++)
    {
        if(i!==position.col)
        {
            if(checkAvailableMove(board, new Square(i, position.col)))
                moves.push(new Square(position.row,i));
            else
                break;
        }
    }
    return moves;
}

export function getAvailableMovesKnight(board: Board, position: Square)  {
    let moves:Square[] = [];

    const directions=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];
    for( const [dr,dc] of directions) {
     let r=position.row+dr;
     let c=position.col+dc;
     if(r>=0 && r<=7 && c>=0 && c<=7)
         moves.push(new Square(r,c));
    }

    return moves;
}

export function getAvailableMovesKing(board: Board, position: Square)  {
    let moves:Square[] = [];

    const directions=[[0,1],[0,-1],[1,0],[-1,0],[-1,-1],[-1,1],[1,-1],[1,1]];
    for( const [dr,dc] of directions) {
        let r=position.row+dr;
        let c=position.col+dc;
        if(r>=0 && r<=7 && c>=0 && c<=7)
            moves.push(new Square(r,c));
    }

    return moves;
}

export function checkAvailableMove(board: Board, position: Square)  {
    return board.getPiece(position) === undefined;
}