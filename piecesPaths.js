class piecesPaths {
    constructor() { }


    hh(soldierName, currentSquare) {
        if (soldierName == AllPieces.ROOK) {
            squresInCurrentRow = this.getAllSquaresInRow(currentSquare.row);
            squresInCurrentCol = this.getAllSquaresInCol(currentSquare.col);
            squresInCurrentRow.splice(currentSquare.col,1);
            squresInCurrentCol.splice(currentSquare.row,1);

        }
    }

    getAllSquaresInRow(row) {
        let squares = [];
        for (let i = 0; i < INDEX_OF_LAST_COL; i++) {
            squares.push(this.boardGame[row][i]);
        }
        return squares;
    }
    getAllSquaresInCol(col) {
        let squares = [];
        for (let i = 0; i < INDEX_OF_LAST_ROW; i++) {
            squares.push(this.boardGame[i][col]);
        }
        return squares;
    }


}