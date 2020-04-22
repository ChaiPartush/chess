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
                        this.boardGame[row][col].pieceName = AllPieces.Empty;
                }
            }

        }

    }

    checkIfSoldierCanDoThisMovment(arrayOfSquareObject) {
        const firstSquare = arrayOfSquareObject[0];
        const secondSquare = arrayOfSquareObject[1];
        const soldierName = this.boardGame[firstSquare.row][firstSquare.col].pieceName;
        const soldierColor = this.boardGame[firstSquare.row][firstSquare.col].pieceColor;
        const checkMovements = new piecesMovements(firstSquare, secondSquare, this.boardGame);


        switch (soldierName) {

            case AllPieces.ROOK:
                return checkMovements.rookMovement();

            case AllPieces.KNIGHT:
                return checkMovements.knightMovement();

            case AllPieces.KING:
                return checkMovements.kingMovement();

            case AllPieces.BISHOP:
                return checkMovements.bishopMovement();

            case AllPieces.QUEEN:
                return checkMovements.queenMovement();

            case AllPieces.PAWN:
                return checkMovements.pawnMovement();
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
