function include(file) {
    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;
    document.getElementsByTagName('head').item(0).appendChild(script);
}

include('backBoardLogic.js');
include('piecesMovements.js');
include('squareObject.js');
include('consts.js');
include('client.js');