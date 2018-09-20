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

window.addEventListener("wheel", wheelScroll);
window.addEventListener("resize", resize);

document.addEventListener("mousemove", setMousePosition);
document.addEventListener("mousedown", mouseDown);

for (let i=0; i < tabClass.length; i++) {
    tabClass[i].addEventListener("click", () => {directZoom(i)} );
}

zoomOutClass.addEventListener("click", directZoomOut);
arrowLeftClass.addEventListener("click", moveLeft);
arrowUpClass.addEventListener("click", moveUp);
arrowRightClass.addEventListener("click", moveRight);
arrowDownClass.addEventListener("click", moveDown);