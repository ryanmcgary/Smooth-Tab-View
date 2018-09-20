function zooming() {

    translateToBefore();

    let fx = (xOrigin*2-100)/100; //1 or -1
    let fy = (yOrigin*2-100)/100;
    translateX = translateX + fx * verschiebungX * zoomAnzahl;
    translateY = translateY + fy * verschiebungY * zoomAnzahl;

    zoomPart1();

    setTimeout(() => {
        translateX = translateXbefore;
        translateY = translateYbefore;
        zoomPart2();
    }, animatedTime + timeOutFirefox*3);

}


function zoomPart1() {
    transformOrigin();
    transformScaleTranslate(); //translate
    
    setTimeout(() => {
        contentClass.classList.add("animated");
        zoomProzent = insgesamtReihe/elementeInReihe;
        transformScaleTranslate(); //animated zoom to origin
    }, 0 + timeOutFirefox);
}

function zoomPart2() {
    contentClass.classList.remove("animated");
    resetOrigin();
    transformScaleTranslate(); //origin wird in translate umgewandelt
}

function translateToBefore() {
    translateXbefore = translateX;
    translateYbefore = translateY;
}