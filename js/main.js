function start() {
    insgesamtReihe = 4;

    let s = 1/insgesamtReihe;
    mainClass.style.transform = "scale("+s+")";

    tabWidth = window.innerWidth;
    tabHeight = window.innerHeight;
    verschiebungX = tabWidth/2;
    verschiebungY = tabHeight/2;

    console.log(tabWidth + " " + tabHeight);

    elementeInReihe = insgesamtReihe;
    zoomProzent = 1;
    zoomAnzahl = 0;
    translateX = 0;
    translateY = 0;
    translateXbefore = 0;
    translateYbefore = 0;
    activeTab = 0;
    xOrigin = 50;
    yOrigin = 50;

    tab = [];
    mousePosition = new Position(0, 0);
    animatedTime = 400;
    timeOutFirefox = 50;
    zoomAllowed = true;
    buttonsAllowed = false;
    
    let nx = 0;
    let ny = 0;
    for (let i=0; i < tabClass.length; i++) {
        tabClass[i].style.width = tabWidth + "px";
        tabClass[i].style.height = tabHeight + "px";

        let w = ( (insgesamtReihe-1)/2 - nx) * tabWidth;
        let h = ( (insgesamtReihe-1)/2 - ny) * tabHeight;

        tab[i] = new Tab(nx, ny, w, h);

        if (nx < insgesamtReihe-1) {
            nx += 1;
        } else {
            nx = 0;
            ny += 1;
        }
    }

    contentClass.style.width = insgesamtReihe * tabWidth + "px";
    contentClass.style.height = insgesamtReihe * tabHeight + "px";

    transformScaleTranslate();

    contentClass.style.cursor = "default";
}