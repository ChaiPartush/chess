class piecesMovements {
    constructor(firstSquare, secondSquare, boardGame) {
        this.boardGame = boardGame;
        this.firstRow = firstSquare.row;
        this.firstCol = firstSquare.col;
        this.secondRow = secondSquare.row;
        this.secondCol = secondSquare.col;
    }

    ////////////////////////////////// Pawn movement ///////////////////////////////////////////////////
    pawnMovement() {
        const soldierColor = this.boardGame[this.firstRow][this.firstCol].pieceColor;
        if (this.checkIfTherePieceInFrontOfIt(soldierColor)) {
            return ((soldierColor == ColorsPieces.BLACK) ? this.blackPawnMovement() : this.whitePawnMovemetnt());
        }
        else return false;
    }
    blackPawnMovement() {
        if (this.firstRow == FIRST_BLACK_PAWN_ROW_POSITION) {
            return this.secondCol == this.firstCol && (this.firstRow + 2 == this.secondRow ||
                this.firstRow + 1 == this.secondRow);
        }
        else return this.secondCol == this.firstCol && this.firstRow + 1 == this.secondRow;
    }
    whitePawnMovemetnt() {
        if (this.firstRow == FIRST_WHITE_PAWN_ROW_POSITION) {
            return this.secondCol == this.firstCol && (this.firstRow - 2 == this.secondRow ||
                this.firstRow - 1 == this.secondRow);
        }
        else return (this.secondCol == this.firstCol) && (this.firstRow - 1 == this.secondRow);
    }
    checkIfTherePieceInFrontOfIt(pieceColor) {
        let distanace = Math.abs(this.secondRow - this.firstRow);
        let row = this.firstRow;
        const col = this.firstCol;

        do {
            row = (pieceColor == ColorsPieces.BLACK) ? row + 1 : row - 1;
            if (this.boardGame[row][col].pieceName != AllPieces.Empty) {
                return false
            }
            distanace--;
        } while (distanace != 0);
        return true;
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////


    ///////////////////////////////////Rook movement///////////////////////////////////////////////////
    rookMovement() {
        let theSamePartcoordinateIsRow;
        if (this.secondCol == this.firstCol) {
            theSamePartcoordinateIsRow = false;
        }
        else if (this.secondRow == this.firstRow) {
            theSamePartcoordinateIsRow = true;
        }

        else {
            return false
        }
        return this.checkIfRookMoveOnAnotherPiece(theSamePartcoordinateIsRow);
    }
    checkIfRookMoveOnAnotherPiece(theSamePartcoordinateIsRow) {
        let row = this.firstRow;
        let col = this.firstCol;

        if (!theSamePartcoordinateIsRow) {
            row = this.secondRow > this.firstRow ? row + 1 : row - 1;
        }
        else {
            col = this.secondCol > this.firstCol ? col + 1 : col - 1;
        }

        let startIndex = theSamePartcoordinateIsRow ? Math.min(col, this.secondCol) :
            Math.min(row, this.secondRow);

        let endIndex = theSamePartcoordinateIsRow ? Math.max(col, this.secondCol) :
            Math.max(row, this.secondRow);

        for (let index = startIndex; index <= endIndex; index++) {
            let squareContent = theSamePartcoordinateIsRow ? this.boardGame[row][index].pieceName :
                this.boardGame[index][col].pieceName
            if (squareContent != AllPieces.Empty) {
                return false;
            }
        }
        return true

    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////


    //////////////////////////////////Knight Movement///////////////////////////////////////////////////
    knightMovement() {
        if ((Math.abs(this.secondCol - this.firstCol) == 2)) {
            if (Math.abs(this.secondRow - this.firstRow) == 1) {
                return true
            }
        }
        if (Math.abs(this.secondCol - this.firstCol) == 1) {
            if (Math.abs(this.secondRow - this.firstRow) == 2) {
                return true;
            }
        }

        return false;

    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////


    ///////////////////////////////////King Movement/////////////////////////////////////////////////////
    kingMovement() {
        if ((Math.abs(this.secondCol - this.firstCol) <= 1 &&
            Math.abs(this.secondRow - this.firstRow) <= 1)) {

            if (this.boardGame[this.secondRow][this.secondCol].pieceName == AllPieces.Empty) {
                return true
            }
        }
        else return false;
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////


    //////////////////////////////////Bishop Movements///////////////////////////////////////////////////
    bishopMovement() {
        if ((Math.abs(this.secondCol - this.firstCol) != Math.abs(this.secondRow - this.firstRow))) {
            return false
        }

        const isRowIncrease = this.firstRow < this.secondRow;
        const isColIncrease = this.firstCol < this.secondCol;

        let row = this.firstRow;
        let col = this.firstCol;
        return this.checkIfBishopMoveOnAnotherPiece(isRowIncrease, isColIncrease, row, col);
    }
    checkIfBishopMoveOnAnotherPiece(isRowIncrease, isColIncrease, row, col) {
        do {
            let counters = this.manageCounterOfBishopForLook(isRowIncrease, isColIncrease, row, col);
            row = counters.row;
            col = counters.col;

            let squareContent = this.boardGame[row][col].pieceName;
            if (squareContent != AllPieces.Empty) {
                return false;
            }

        } while (row != this.secondRow && col != this.secondCol)

        return true;
    }
    manageCounterOfBishopForLook(isRowIncrease, isColIncrease, row, col) {
        let forRowCounter = isRowIncrease ? row + 1 : row - 1;
        let forColCounter = isColIncrease ? col + 1 : col - 1;
        return {
            row: forRowCounter,
            col: forColCounter
        };
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////


    //////////////////////////////////Queen Movements////////////////////////////////////////////////////
    queenMovement() {
        return (this.rookMovement() || this.bishopMovement());
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////


}