function directZoom(i) {

    if (elementeInReihe > 1 && zoomAllowed) {
        toogleZoom();

        activeTab = i;

        showControls();

        let elementeInReiheOld = elementeInReihe;
        let zoomAnzahlOld = zoomAnzahl;

        elementeInReihe = 1;
        zoomAnzahl = insgesamtReihe-1;
        
        let xd = (zoomAnzahlOld * verschiebungX - translateX)/tabWidth; //for origin
        let yd = (zoomAnzahlOld * verschiebungY - translateY)/tabHeight;
        xOrigin = (tab[i].numberX - xd) / (elementeInReiheOld-1) * 100;
        yOrigin = (tab[i].numberY - yd) / (elementeInReiheOld-1) * 100;

        let fx = (xOrigin*2-100)/100; //1 or -1
        let fy = (yOrigin*2-100)/100;
        translateX = translateX + fx * verschiebungX * zoomAnzahlOld;
        translateY = translateY + fy * verschiebungY * zoomAnzahlOld;

        zoomPart1();

        setTimeout(() => {
            translateX = tab[i].translateX;
            translateY = tab[i].translateY;
            zoomPart2();
            translateToBefore();
        }, animatedTime + timeOutFirefox*3);
    }
    
}