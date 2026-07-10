import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let position:Square=board.findPiece(this);
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

                moves.push(new Square(r,c));

            }
        }

        return moves;
    }
}
