function zoom(richtung) {

    if (richtung === "up" && elementeInReihe > 1 && zoomAllowed) {
        toogleZoom();
        
        elementeInReihe -= 1;
        zoomAnzahl += 1;

        /* x-Position */

        if (mousePosition.x > window.innerWidth/2) {
            translateX = translateXbefore - verschiebungX;
            xOrigin = 100;
        }
        else {
            translateX = translateXbefore + verschiebungX;
            xOrigin = 0;
        }

        /* y-Position */

        if (mousePosition.y > window.innerHeight/2) {
            translateY = translateYbefore - verschiebungY;
            yOrigin = 100;
        }
        else {
            translateY = translateYbefore + verschiebungY;
            yOrigin = 0;
        }

        if (elementeInReihe === 1) {
            for (let i=0; i < tab.length; i++) {
                if (tab[i].translateX === translateX && tab[i].translateY === translateY) {
                    activeTab = i;
                }
            }
            showControls();
        }

        zooming();
    }

    else if (richtung === "down" && elementeInReihe < insgesamtReihe && zoomAllowed) {
        toogleZoom();

        if (elementeInReihe === 1) {
            removeControls();
        }

        elementeInReihe += 1;
        zoomAnzahl -= 1;

        /* x-Position */

        if (mousePosition.x > window.innerWidth/2) {
            translateX = translateXbefore - verschiebungX;
            xOrigin = 0;
        }
        else {
            translateX = translateXbefore + verschiebungX;
            xOrigin = 100;
        }

        if (translateX > zoomAnzahl * verschiebungX) { //wichtige Überprüfung nach außen
            translateX -= 2*verschiebungX;
            xOrigin = 0;
        }
        if (translateX < zoomAnzahl * -verschiebungX) {
            translateX += 2*verschiebungX;
            xOrigin = 100;
        }

        /* y-Position */

        if (mousePosition.y > window.innerHeight/2) {
            translateY = translateYbefore - verschiebungY;
            yOrigin = 0;
        }
        else {
            translateY = translateYbefore + verschiebungY;
            yOrigin = 100;
        }

        if (translateY > zoomAnzahl * verschiebungY) { //wichtige Überprüfung nach außen
            translateY -= 2*verschiebungY;
            yOrigin = 0;
        }
        if (translateY < zoomAnzahl * -verschiebungY) {
            translateY += 2*verschiebungY;
            yOrigin = 100;
        }

        zooming();
    }
    
}