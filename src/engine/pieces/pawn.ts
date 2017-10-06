import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import {checkAvailableMove, getAvailableTakesForPawn} from "./MovesHelper";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {

        let position:Square=board.findPiece(this);
        let moves:Square[] = [];
        let posibileTakes:Square[]=getAvailableTakesForPawn(board,position,this.player);
        if(this.player===Player.WHITE)
        {
            if(position.row===1)
            {
                if(checkAvailableMove(board, new Square(position.row+1,position.col))) {
                    moves.push(new Square(position.row + 1, position.col));
                    if (checkAvailableMove(board, new Square(position.row + 2, position.col)))
                        moves.push(new Square(position.row + 2, position.col));
                }


            }
            else if(position.row<7)
            {
                if(checkAvailableMove(board, new Square(position.row+1,position.col)))
                moves.push(new Square(position.row+1,position.col));

            }

        }
        else
        {
            if(position.row===6)
            {
                if(checkAvailableMove(board, new Square(position.row-1,position.col)))
                {
                    moves.push(new Square(position.row-1,position.col));
                    if(checkAvailableMove(board, new Square(position.row-2,position.col)))
                        moves.push(new Square(position.row-2,position.col));
                }


            } else if(position.row>0)
            {
                if(checkAvailableMove(board, new Square(position.row-1,position.col)))
                moves.push(new Square(position.row-1,position.col));


            }

        }


            if (posibileTakes.length>0)
                return [...moves,...posibileTakes];
        return moves;
    }
}
