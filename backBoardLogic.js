class backBoardLogic {
    constructor() {
        this.boardGame = [];
        for (let row = 0; row < 8; row++) {
            this.boardGame[row] = [];
            for (let col = 0; col < 8; col++) {
                let createPiece = new squareObject(ColorsPieces.NO_COLOR, AllPieces.Empty, row, col);
                this.boardGame[row][col] = createPiece;
            }
        }
        this.arrayOfSquareObject = [];
        this.arrayOfClicksElementsId = [];
    }


    getBackBoardGame() {
        return this.arrayOfSquareObject;
    }


    clickOnSquare(id) {
        let squareObjectById = this.parseIdToCordinatesObject(id);
        if (this.arrayOfSquareObject.length < 2) {
            this.actionWhenNotpressedTwoClicksYet(squareObjectById, id);
        }
        if (this.arrayOfSquareObject.length == 2) {
            this.actionWhenTwoClicksWasPressed();
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
    actionWhenNotpressedTwoClicksYet(squaresObjectById, id) {
        if (this.arrayOfSquareObject.length == 0 && squaresObjectById.pieceName == AllPieces.Empty) {
            alert("Please pick on of the Pieces")
        }
        else {
            this.arrayOfSquareObject.push(squaresObjectById);
            this.arrayOfClicksElementsId.push(id);
        }
    }
    actionWhenTwoClicksWasPressed() {
        if ((this.arrayOfSquareObject[0].row == this.arrayOfSquareObject[1].row) &&
            (this.arrayOfSquareObject[0].col == this.arrayOfSquareObject[1].col)) {
            alert("Please enter the place you want to move this piece");
        }

        else {
            if (this.checkIfSoldierCanDoThisMovment(this.arrayOfSquareObject)) {
                this.moveSoldierOnBackBoard(this.arrayOfSquareObject)
            }
            else {
                alert("This soldier cant do this movement");
            }
        }
        this.arrayOfSquareObject.length = 0;
        this.arrayOfClicksElementsId.length = 0;

    }
    parseIdToCordinatesObject(id) {
        let RowWordIndex = id.search("row:");
        let row = id.charAt(RowWordIndex + 4); // get the number after the word row
        let ColWordIndex = id.search("col:");
        let col = id.charAt(ColWordIndex + 4);// get the number after the word col
        const color = this.boardGame[row][col].pieceColor;
        const name = this.boardGame[row][col].pieceName;
        return new squareObject(color, name, parseInt(row), parseInt(col));
    }
}
