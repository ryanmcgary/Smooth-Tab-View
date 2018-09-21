function resize() {
    start();
}

start();

function setMousePosition(e) {
	mousePosition.x = e.clientX;
	mousePosition.y = e.clientY;
}

function mouseDown(e) {
	mousePosition.x = e.clientX;
    mousePosition.y = e.clientY;
}

function keyDownHandler(e) {
	if(e.keyCode == 39) {
		moveRight();
	}
	if(e.keyCode == 37) {
		moveLeft();
	}
	if(e.keyCode == 38) {
		moveUp();
	}
	if(e.keyCode == 40) {
		moveDown();
    }
    if(e.keyCode == 27) {
		directZoomOut();
	}
}

window.addEventListener("wheel", wheelScroll);
window.addEventListener("resize", resize);

document.addEventListener("mousemove", setMousePosition);
document.addEventListener("mousedown", mouseDown);

document.addEventListener("keydown", keyDownHandler);

for (let i=0; i < tabClass.length; i++) {
    tabClass[i].addEventListener("click", () => {directZoom(i)} );
}

zoomOutClass.addEventListener("click", directZoomOut);
arrowLeftClass.addEventListener("click", moveLeft);
arrowUpClass.addEventListener("click", moveUp);
arrowRightClass.addEventListener("click", moveRight);
arrowDownClass.addEventListener("click", moveDown);