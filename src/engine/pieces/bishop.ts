import Piece from './piece';
import Player from '../player';
import Board from '../board';
import {getAvailableMovesDiagonal} from "./MovesHelper";


export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        return getAvailableMovesDiagonal(board, board.findPiece(this),this.player);
    }
}
