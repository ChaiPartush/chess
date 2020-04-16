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

/////////////////initialize////////////////////////////////////////////////////////////////////
const backendBoard = new backBoardLogic();
backendBoard.organzieBackBoardStartPosision();
const frontendBoard = new frontBoardLogic(backendBoard);

//////////////////////////////////////////////////////////////////////////////////////////////

function ClickSquareOnBoard(id) {

    let squareObjectById = frontendBoard.parseIdToCordinatesObject(id);
    let getSquaresArray = frontendBoard.getArrayOfSquareObject();
    if (getSquaresArray.length < 2) {
        frontendBoard.actionWhenNotpressedTwoClicksYet(squareObjectById, id);
    }
    if (getSquaresArray.length == 2) {
        frontendBoard.actionWhenTwoClicksWasPressed();
    }
}












