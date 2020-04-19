function include(file) {
    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;
    document.getElementsByTagName('head').item(0).appendChild(script);
}

include('backboardLogic.js');
include('frontBoardLogic.js');
include('squareObject.js');
include('consts.js');
include('client.js');