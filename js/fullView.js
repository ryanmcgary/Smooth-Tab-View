function showControls() {
    setTimeout(() => {
        controlsClass.classList.add("controls-visible");
        contentClass.style.cursor = "auto";
    }, animatedTime * 60 / 100); //percent
    setTimeout(() => {
        buttonsAllowed = true;
    }, animatedTime + timeOutFirefox*5);
}

function removeControls() {
    buttonsAllowed = false;
    controlsClass.classList.remove("controls-visible");
    contentClass.style.cursor = "default";
}

function directZoomOut() {

    if (buttonsAllowed) {
        removeControls();
        toogleZoom();

        xOrigin = tab[activeTab].numberX / (insgesamtReihe-1) * 100;
        yOrigin = tab[activeTab].numberY / (insgesamtReihe-1) * 100;

        translateX = 0;
        translateY = 0;

        transformScaleTranslate();
        transformOrigin();

        elementeInReihe = insgesamtReihe;
        zoomProzent = 1;
        zoomAnzahl = 0;
        translateXbefore = 0;
        translateYbefore = 0;
        xOrigin = 50;
        yOrigin = 50;

        setTimeout(() => {
            contentClass.classList.add("animated");
            transformScaleTranslate();
        }, 0 + timeOutFirefox);

        setTimeout(() => {
            contentClass.classList.remove("animated");
        }, animatedTime + timeOutFirefox*3);

    }
}

function move() {
    translateX = tab[activeTab].translateX;
    translateY = tab[activeTab].translateY;
    translateXbefore = translateX;
    translateYbefore = translateY;
    contentClass.classList.add("animated");
    transformScaleTranslate();
    setTimeout(() => {
        contentClass.classList.remove("animated");
    }, animatedTime + timeOutFirefox*2);
}

function moveRight() {
    if (buttonsAllowed) {
        toogleButton();
        toogleZoom();
        activeTab += 1;
        if (activeTab >= tab.length) {
            activeTab = 0;
        }
        move()
    }
}

function moveLeft() {
    if (buttonsAllowed) {
        toogleButton();
        toogleZoom();
        activeTab -= 1;
        if (activeTab < 0) {
            activeTab = tab.length-1;
        }
        move()
    }
}

function moveUp() {
    if (buttonsAllowed) {
        toogleButton();
        toogleZoom();
        activeTab -= insgesamtReihe;
        if (activeTab < 0) {
            activeTab += tab.length;
        }
        move()
    }
}

function moveDown() {
    if (buttonsAllowed) {
        toogleButton();
        toogleZoom();
        activeTab += insgesamtReihe;
        if (activeTab >= tab.length) {
            activeTab -= tab.length;
        }
        move()
    }
}