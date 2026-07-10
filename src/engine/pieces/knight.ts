import Piece from './piece';
import Player from '../player';
import Board from '../board';
import {getAvailableMovesKnight} from "./MovesHelper";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {

        return getAvailableMovesKnight(board, board.findPiece(this));
    }
}
