class piecesMovements {
    constructor(firstSquare, secondSquare, boardGame) {
        this.firstSquare = firstSquare;
        this.secondSquare = secondSquare;
        this.boardGame = boardGame;
    }

    ////////////////////////////////// pawn movement ///////////////////////////////////////////////////
    blackPawnMovement() {
        if (this.firstSquare.row == FIRST_BLACK_PAWN_ROW_POSITION) {
            return this.secondSquare.col == this.firstSquare.col && (this.firstSquare.row + 2 == this.secondSquare.row ||
                this.firstSquare.row + 1 == this.secondSquare.row);
        }
        else return this.secondSquare.col == this.firstSquare.col && this.firstSquare.row + 1 == this.secondSquare.row;
    }
    whitePawnMovemetnt() {
        if (this.firstSquare.row == FIRST_WHITE_PAWN_ROW_POSITION) {
            return this.secondSquare.col == this.firstSquare.col && (this.firstSquare.row - 2 == this.secondSquare.row ||
                this.firstSquare.row - 1 == this.secondSquare.row);
        }
        else return (this.secondSquare.col == this.firstSquare.col) && (this.firstSquare.row - 1 == this.secondSquare.row);
    }
    checkIfTherePieceInFrontOfIt() {
        let distanace = Math.abs(this.secondSquare.row - this.firstSquare.row);
        let row = this.firstSquare.row;
        const col = this.firstSquare.col;
        const pieceColor = this.firstSquare.pieceColor;

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

    ///////////////////////////////////rook movement///////////////////////////////////////////////////
    rookMovement() {
        let theSamePartcoordinateIsRow;
        if (this.secondSquare.col == this.firstSquare.col) {
            theSamePartcoordinateIsRow = false;
        }
        else if (this.secondSquare.row == this.firstSquare.row) {
            theSamePartcoordinateIsRow = true;
        }

        else {
            return false
        }
        return this.checkIfRookMoveOnAnotherPiece(theSamePartcoordinateIsRow);
    }
    checkIfRookMoveOnAnotherPiece(theSamePartcoordinateIsRow) {
        let row = this.firstSquare.row;
        let col = this.firstSquare.col;

        if (!theSamePartcoordinateIsRow) {
            row = this.secondSquare.row > this.firstSquare.row ? row + 1 : row - 1;
        }
        else {
            col = this.secondSquare.col > this.firstSquare.col ? col + 1 : col - 1;
        }

        let startIndex = theSamePartcoordinateIsRow ? Math.min(col, this.secondSquare.col) :
            Math.min(row, this.secondSquare.row);

        let endIndex = theSamePartcoordinateIsRow ? Math.max(col, this.secondSquare.col) :
            Math.max(row, this.secondSquare.row);

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



}