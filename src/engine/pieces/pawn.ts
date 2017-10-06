import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {

        let position:Square=board.findPiece(this);
        let moves:Square[] = [];
        if(this.player===Player.WHITE)
        {
            if(position.row===1)
            {
                moves.push(new Square(position.row+1,position.col));
                moves.push(new Square(position.row+2,position.col));
            }
            else if(position.row<7)
            {
                moves.push(new Square(position.row+1,position.col));
            }

        }
        else
        {
            if(position.row===6)
            {
                moves.push(new Square(position.row-1,position.col));
                moves.push(new Square(position.row-2,position.col));
            } else if(position.row>0)
            {
                moves.push(new Square(position.row-1,position.col));
            }
        }
        return moves;
    }
}
