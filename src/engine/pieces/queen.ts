import Piece from './piece';
import Player from '../player';
import Board from '../board';
import {getAvailableMovesDiagonal, getAvailableMovesLinear} from "./MovesHelper";

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {

        let movesLinear = getAvailableMovesLinear(board, board.findPiece(this),this.player);
        let movesDiagonal = getAvailableMovesDiagonal(board, board.findPiece(this));
        return [...movesLinear, ...movesDiagonal];
    }
}
