let tabClass = selectAll(".tab");
let contentClass = select(".content");
let mainClass = select(".main");
let controlsClass = select(".controls");

let zoomOutClass = select(".zoom-out");
let arrowLeftClass = select(".arrow-left");
let arrowUpClass = select(".arrow-up");
let arrowRightClass = select(".arrow-right");
let arrowDownClass = select(".arrow-down");

let insgesamtReihe, tabWidth, tabHeight, verschiebungX, verschiebungY, elementeInReihe, zoomProzent, zoomAnzahl, translateX, translateY, translateXbefore, translateYbefore, activeTab, xOrigin, yOrigin, tab, mousePosition, animatedTime, timeOutFirefox, zoomAllowed, buttonsAllowed;