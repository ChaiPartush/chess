class frontBoardLogic {
    constructor(backBoardObject) {
        this.arrayOfSquareObject = [];
        this.arrayOfClicksElementsId = [];
        this.backBoardObject = backBoardObject;
    }

    getArrayOfSquareObject() {
        return this.arrayOfSquareObject;
    }

    actionWhenNotpressedTwoClicksYet(squaresObjectById, id) {
        if (this.arrayOfSquareObject.length == 0 && squaresObjectById.pieceName == "") {
            alert("Please pick on of the Pieces")
        }
        else {
            this.arrayOfSquareObject.push(squaresObjectById);
            this.arrayOfClicksElementsId.push(id);
        }
    }

    moveSoldierOnFrontBoard() {
        let firstClickContent = document.getElementById(this.arrayOfClicksElementsId[0]).textContent;
        document.getElementById(this.arrayOfClicksElementsId[1]).innerHTML = firstClickContent;
        document.getElementById(this.arrayOfClicksElementsId[0]).innerHTML = "";
    }

    actionWhenTwoClicksWasPressed() {
        if (this.arrayOfSquareObject[0] === this.arrayOfSquareObject[1]) {
            alert("Please enter the place you want to move this piece")
        }

        else {
            if (this.backBoardObject.checkIfSoldierCanDoThisMovment(this.arrayOfSquareObject)) {
                this.backBoardObject.moveSoldierOnBackBoard(this.arrayOfSquareObject)
                this.moveSoldierOnFrontBoard();
            }
            else {
                alert("This soldier cant do this movement")
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
        const color = this.backBoardObject.boardGame[row][col].pieceColor;
        const name = this.backBoardObject.boardGame[row][col].pieceName;
        return new squareObject(color, name, parseInt(row), parseInt(col));
    }

}