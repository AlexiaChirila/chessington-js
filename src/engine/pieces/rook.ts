import Piece from './piece';
import Player from '../player';
import Board from '../board';
import {getAvailableMovesLinear} from "./MovesHelper";


export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        return getAvailableMovesLinear(board, board.findPiece(this),this.player);
    }
}
