import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let position:Square=board.findPiece(this);
        let moves:Square[] = [];

        for(let i=0;i<=7;i++)
        {
            if(i!==position.row)
            {
                moves.push(new Square(i,position.col));
            }
            if(i!==position.col)
            {
                moves.push(new Square(position.row,i));
            }
        }
        return moves;
    }
}
