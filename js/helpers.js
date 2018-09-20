class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Tab {
    constructor(nx, ny, w, h) {
        this.numberX = nx;
        this.numberY = ny;
        this.translateX = w;
        this.translateY = h;
    }
}

function selectAll(elem) {
    return document.querySelectorAll(elem);
}
function select(elem) {
    return document.querySelector(elem);
}

function wheelScroll(e) {
    let richtung = (e.deltaY > 0) ? "down" : "up"; //(e.wheelDelta < 0) ? "down" : "up";
    zoom(richtung);
}

function transformScaleTranslate() {
    contentClass.style.transform = "scale(" + zoomProzent + ") translate(" + translateX + "px, " + translateY + "px)";
}

function transformOrigin() {
    contentClass.style.transformOrigin = xOrigin + "% " + yOrigin + "%";
}

function resetOrigin() {
    contentClass.style.transformOrigin = 50 + "% " + 50 + "%";
}

function toogleZoom() {
    zoomAllowed = false;
    setTimeout(() => {
        zoomAllowed = true;
    }, animatedTime + timeOutFirefox*4);
}

function toogleButton() {
    buttonsAllowed = false;
    setTimeout(() => {
        buttonsAllowed = true;
    }, animatedTime + timeOutFirefox*5);
}