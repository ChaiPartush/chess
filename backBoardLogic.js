class backBoardLogic {
    constructor() {
        this.boardGame = [];
        for (let row = 0; row < 8; row++) {
            this.boardGame[row] = [];
            for (let col = 0; col < 8; col++) {
                let createPiece = new squareObject(ColorsPieces.NO_Color, AllPieces.Empty, row, col);
                this.boardGame[row][col] = createPiece;
            }
        }
    }

    organzieBackBoardStartPosision() {
        const firstRowPieces = Object.values(FirstRowOfUserBoard);
        for (let row = 0; row < this.boardGame.length; row++) {
            for (let col = 0; col < this.boardGame[row].length; col++) {
                switch (row) {


                    // black pieces rows 
                    case 0:
                        this.boardGame[row][col].pieceColor = ColorsPieces.BLACK;
                        this.boardGame[row][col].pieceName = firstRowPieces[col];
                        break;
                    case 1:
                        this.boardGame[row][col].pieceColor = ColorsPieces.BLACK;
                        this.boardGame[row][col].pieceName = secondRowUserBoard.PAWN;
                        break;


                    // white pieces rows 
                    case 7:
                        this.boardGame[row][col].pieceColor = ColorsPieces.WHITE;
                        this.boardGame[row][col].pieceName = firstRowPieces[col];
                        break;
                    case 6:
                        this.boardGame[row][col].pieceColor = ColorsPieces.WHITE;
                        this.boardGame[row][col].pieceName = secondRowUserBoard.PAWN;
                        break;


                    default:
                        this.boardGame[row][col].pieceColor = ColorsPieces.NO_Color;
                        this.boardGame[row][col].pieceName = '';
                }
            }

        }

    }

    checkIfSoldierCanDoThisMovment(arrayOfSquareObject) {
        const firstSquare = arrayOfSquareObject[0];
        const secondSquare = arrayOfSquareObject[1];
        const soldierName = this.boardGame[firstSquare.row][firstSquare.col].pieceName;
        const soldierColor = this.boardGame[firstSquare.row][firstSquare.col].pieceColor;

        switch (soldierName) {

            case AllPieces.BLACK_KING.piece:
                return Math.abs(secondSquare.col - firstSquare.col) <= 1 && Math.abs(secondSquare.row - firstSquare.row) <= 1;

            case AllPieces.BLACK_ROOK.piece:
                return secondSquare.col == firstSquare.col || secondSquare.row == firstSquare.row;

            case AllPieces.BLACK_PAWN.piece:
                if (soldierColor == AllPieces.BLACK_PAWN.color) {
                    return (secondSquare.col == firstSquare.col) && (firstSquare.row + 1 === secondSquare.row);
                }
                else return (secondSquare.col == firstSquare.col) && (firstSquare.row - 1 == secondSquare.row);

            case AllPieces.BLACK_BISHOP.piece:
                return Math.abs(secondSquare.col - firstSquare.col) > 1 && Math.abs(secondSquare.row - firstSquare.row) > 1;

            case AllPieces.BLACK_KNIGHT.piece:
                return (Math.abs(secondSquare.col - firstSquare.col) == 2 && Math.abs(secondSquare.row - firstSquare.row) == 1)
                    || (Math.abs(secondSquare.col - firstSquare.col) == 1 && Math.abs(secondSquare.row - firstSquare.row) == 2);

            default: return true; //the queen can move any direction with any amount of steps
        }
    }



    moveSoldierOnBackBoard(arrayOfSquareObject) {
        const firstSqureObject = arrayOfSquareObject[0];
        const secondSquareObject = arrayOfSquareObject[1];

        const squareOfFirstClickInBackendArray = this.boardGame[firstSqureObject.row][firstSqureObject.col];
        const squareOfSecondClickInBackendArray = this.boardGame[secondSquareObject.row][secondSquareObject.col];

        squareOfSecondClickInBackendArray.pieceColor = squareOfFirstClickInBackendArray.pieceColor;
        squareOfSecondClickInBackendArray.pieceName = squareOfFirstClickInBackendArray.pieceName;

        squareOfFirstClickInBackendArray.pieceColor = ColorsPieces.NO_Color;;
        squareOfFirstClickInBackendArray.pieceName = AllPieces.Empty;
    }



}
