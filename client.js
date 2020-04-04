////////////////////////// Add dynamiclly attributes div tags///////////////////////////////
allDiv = document.querySelectorAll('div');
allDiv.forEach((element) => { element.setAttribute('onclick', 'ClickSquareOnBoard(this.id)'); });

divNum = 1;
for (var row = 0; row <= 7; row++) {
    for (var col = 0; col <= 7; col++) {
        let createId = "row:" + row + " col:" + col;
        allDiv.item(divNum).setAttribute('id', createId);
        divNum++;
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////
var IdsSquaresOfClicksArray = [];

function ClickSquareOnBoard(id) {
    var currentSquareContent = document.getElementById(id).textContent;
    if (IdsSquaresOfClicksArray.length < 2) {
        if (IdsSquaresOfClicksArray.length == 0 && currentSquareContent == "") {
            alert("Please pick on of the Pieces")
        }
        else {
            IdsSquaresOfClicksArray.push(id);
        }

    }


    if (IdsSquaresOfClicksArray.length == 2) {
        if (IdsSquaresOfClicksArray[0] === IdsSquaresOfClicksArray[1]) {
            alert("Please enter the place you want to move this piece")
        }
        else {
            var soldier = document.getElementById(IdsSquaresOfClicksArray[0]).textContent;
            var squaresCordinatesArray = getCoordinatesFromArray(IdsSquaresOfClicksArray);
            if (checkIfSoldierCanDoThisMovment(soldier, squaresCordinatesArray)) {
                moveSoldierOnBoard(IdsSquaresOfClicksArray);
            }
            else {
                alert("This soldier cant do this movement")
            }
        }
        IdsSquaresOfClicksArray.length = 0;
    }

    function getCoordinatesFromArray(IdsSquaresOfClicksArray) {
        var squaresCordinatesArray = [];
        for (let i = 0; i < IdsSquaresOfClicksArray.length; i++) {
            var clickId = IdsSquaresOfClicksArray[i];

            var RowWordIndex = clickId.search("row:");
            var Row = clickId.charAt(RowWordIndex + 4); // get the number after the word row

            var ColWordIndex = clickId.search("col:");
            var col = clickId.charAt(ColWordIndex + 4);// get the number after the word col

            var squareCordinates = new Coordinates(Row, col);
            squaresCordinatesArray.push(squareCordinates);
        }
        return squaresCordinatesArray;
    }

    function checkIfSoldierCanDoThisMovment(soldierName, cordinatesArray) {
        firstSquareRow = cordinatesArray[0].row;
        firstSquareCol = cordinatesArray[0].col;
        secondSquareRow = cordinatesArray[1].row;
        secondSquareCol = cordinatesArray[1].col;

        if (soldierName === Pieces.BLACK_KING || soldierName === Pieces.WHITE_KING) {
            return Math.abs(secondSquareCol - firstSquareCol) <= 1 && Math.abs(secondSquareRow - firstSquareRow) <= 1;
        }

        if (soldierName === Pieces.BLACK_ROOK || soldierName === Pieces.WHITE_ROOK) {
            return secondSquareCol == firstSquareCol || secondSquareRow == firstSquareRow;
        }

        if (soldierName === Pieces.BLACK_PAWN || soldierName === Pieces.WHITE_PAWN) {
            return secondSquareCol === firstSquareCol && firstSquareRow - 1 === secondSquareRow;
        }

        if (soldierName === Pieces.BLACK_BISHOP || soldierName === Pieces.WHITE_BISHOP) {
            return Math.abs(secondSquareCol - firstSquareCol) > 1 && Math.abs(secondSquareRow - firstSquareRow) > 1;
        }

        if (soldierName === Pieces.BLACK_KNIGHT || soldierName === Pieces.WHITE_KNIGHT) {
            return (Math.abs(secondSquareCol - firstSquareCol) === 2 && Math.abs(secondSquareRow - firstSquareRow) == 1)
                || (Math.abs(secondSquareCol - firstSquareCol) === 1 && Math.abs(secondSquareRow - firstSquareRow) == 2);
        }

        else return true; //the queen can move any direction with any amount of steps 
    }

    function moveSoldierOnBoard(IdsSquaresOfClicksArray) {
        var firstClickContent = document.getElementById(IdsSquaresOfClicksArray[0]).textContent;
        document.getElementById(IdsSquaresOfClicksArray[1]).innerHTML = firstClickContent;
        document.getElementById(IdsSquaresOfClicksArray[0]).innerHTML = "";
    }



}

