import Piece from './piece';
import Player from '../player';
import Board from '../board';
import {getAvailableMovesKing} from "./MovesHelper";

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        return getAvailableMovesKing(board,board.findPiece(this));
    }
}
