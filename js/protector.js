function protectFromCtrl(e) {
    var forbiddenKeys = new Array('a', 'c', 'x', 's', 'u', 'p', 'i');
    var key;
    var isCtrl;
    if (window.event) {
        key = window.event.keyCode;
        if (window.event.ctrlKey) isCtrl = true;
        else isCtrl = false;
    } else {
        key = e.which;
        if (e.ctrlKey) isCtrl = true;
        else isCtrl = false;
    }
    //проверка клавиш если нажат Ctrl
    if (isCtrl) {
        for (i = 0; i < forbiddenKeys.length; i++) {
            if (forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()) {
                return false;
            }
        }
    }
    return true;
}

function disableSelection(target) {
    if (typeof target.style.MozUserSelect != "undefined") {
        target.style.MozUserSelect = "none";
    }
    target.style.cursor = "default";
}

function doubleMouse(e) {
    if (e.which == 2 || e.which == 3) {
        return false;
    }
    return true;
}

function protectionCSS() {
    var x = document.body;
    x.style.WebkitUserSelect = "none";      // Chrome, Safari, Opera
    x.style.MozUserSelect = "none";         // Firefox
    x.style.msUserSelect = "none";          // IE 10+
    x.style.userSelect = "none";            // Стандартный синтаксис
}

function enableProtection() {
    function noselect() {
        return false;
    }
    disableSelection(document.body);        //Отключение выделения на странице
    document.captureEvents(Event.mousedown);
    document.onmousedown = doubleMouse;     //Отключение двойного клика
    document.ondragstart = noselect;
    document.onselectstart = noselect;
    document.oncontextmenu = noselect;      //Отключение правого клика
    document.onkeydown = protectFromCtrl;
    protectionCSS();
}

window.onload = function () {               //Защита от F12
    enableProtection();
    window.onkeydown = function (evt) {
        if (evt.keyCode == 123) return false;
    };
    window.onkeypress = function (evt) {
        if (evt.keyCode == 123) return false;
    };
};