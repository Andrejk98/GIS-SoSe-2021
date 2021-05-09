"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    //zwei Buttons für die Bedienung anlegen
    document.querySelector("#buttonAddRectangle").addEventListener("click", addRectangle);
    document.querySelector("#buttonReloadCanvas").addEventListener("click", resetArea);
    function createRect() {
        //Ein Rechteck anlegen und mit zufälligen Werten füllen
        let rect1 = { sizeX: Math.random() * 100, sizeY: Math.random() * 100 };
        return rect1;
    }
    function drawRect(rect1) {
        //div generieren
        let rectangleArea = document.getElementById("rectangleArea");
        let div = document.createElement("div");
        //String anlegen, um mit einer Variable style.transform zu definieren
        let randomTransform = "translate(" + Math.random() * 400 + "px," + Math.random() * 400 + "px)";
        //String für random colour
        let randomColour = "rgb(" + Math.random() * 255 + " ," + Math.random() * 255 + " ," + Math.random() * 255 + ")";
        //allgemeine Style Einstellungen
        div.style.width = (rect1.sizeX) + "px";
        div.style.height = (rect1.sizeY) + "px";
        div.style.backgroundColor = randomColour;
        div.style.position = ("absolute");
        //hier wird die Position des Rectangles verändert
        div.style.transform = randomTransform;
        //Rechteck dem Eltern-Div unterordnen
        rectangleArea.appendChild(div);
    }
    //Array anlegen für die Rechtecke
    let rectangles = [];
    //Immmer ein Rechteck hinzufügen, dann das Canvas leeren / reloaden und dann das Array mit Rechtecken neu zeichnen
    function addRectangle() {
        rectangles.push(createRect());
        reloadArea();
        for (let i = 0; i < rectangles.length; i++) {
            drawRect(rectangles[i]);
        }
    }
    //Länge des Arrays für Rechtecke auf 0 setzen und Reload der Area veranlassen
    function resetArea() {
        reloadArea();
        rectangles.length = 0;
    }
    //Mit einer while-Schleife immer das erste Kind des Elternknotens entfernen
    function reloadArea() {
        let rectangleArea = document.getElementById("rectangleArea");
        while (rectangleArea.firstChild) {
            rectangleArea.removeChild(rectangleArea.firstChild);
        }
    }
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
var Aufgabe2_3_Kapitelaufgabe;
(function (Aufgabe2_3_Kapitelaufgabe) {
    //Klasse für die Teile anlegen
    class Components {
        constructor(_graphicscard, _ram, _powersupply, _processor) {
            this.graphicscard = _graphicscard;
            this.ram = _ram;
            this.powersupply = _powersupply;
            this.processor = _processor;
        }
    }
    Aufgabe2_3_Kapitelaufgabe.Components = Components;
    class Case extends Components {
        constructor(_graphicscard, _ram, _powersupply, _processor, _casetype) {
            super(_graphicscard, _ram, _powersupply, _processor);
            this.casetype = _casetype;
        }
    }
    Aufgabe2_3_Kapitelaufgabe.Case = Case;
    //Array für das case
    Aufgabe2_3_Kapitelaufgabe.caseArray = [];
    //Array für die Teile
    Aufgabe2_3_Kapitelaufgabe.componentsArray = [];
    //Content-Boxen erzeugen und darin die Funktion FillElement aufrufen
    function fillContent(_elementeArray, _headlineIdArray, _headlinesArray) {
        //i ist die LoopNumber
        for (let i = 0; i < _elementeArray.length; i++) {
            fillElement(_headlineIdArray, _headlinesArray, i, _elementeArray);
        }
    }
    Aufgabe2_3_Kapitelaufgabe.fillContent = fillContent;
    //Funktion erstellt einen Container im Flexbereich für ein Element einer Kategorie
    //_headlineIdArray liefert individuelle Ids für die Divs, _headlinesArray liefert individuelle Überschriften für die Eigenschaften, _loopNumber ist die Anzahl des Durchlaufs, also die Nummer des Elements/der Auswahlmöglichkeit der Kategorie
    function fillElement(_headlineIdArray, _headlinesArray, _loopNumber, _elementeArray) {
        let contentValueArray = contentValue(_elementeArray[_loopNumber]);
        //Strings für die IDs erstellen, die dann je nach Durchlauf die Durchgangsnummer der Schleife anzeigen --> So ist jede ID verschieden und der Inhalt der Website flexibel erweiterbar
        let konfiguratorContentBoxID = "konfiguratorContentBoxID" + _loopNumber;
        //let konfiguratorLabelContainerID: string = "konfiguratorLabelContainerID" + _loopNumber; 
        //
        let konfiguratorContentID = "konfiguratorContentID" + _loopNumber;
        //Div erzeugen
        let contentDiv = document.getElementById("konfiguratorFlexBox");
        let outerdiv = document.createElement("div");
        //Dem Div Klassen geben
        outerdiv.className = "konfiguratorContentBox";
        outerdiv.id = konfiguratorContentBoxID;
        contentDiv.appendChild(outerdiv);
        //Überschrift der Box sowie RadioButton erzeugen
        let konfiguratorLabel = document.getElementById(konfiguratorContentBoxID);
        //let konfiguratorLabelContainer: HTMLHeadElement = document.createElement("label");
        let konfiguratorButton = document.createElement("button");
        let buttonId = buttonIdGenerator(_loopNumber);
        //let selectedObjekt: RailVehicle = _elementeArray[_loopNumber];
        konfiguratorButton.textContent = "Auswählen";
        konfiguratorButton.id = buttonId;
        konfiguratorButton.className = "chooseButton";
        konfiguratorButton.addEventListener("click", printChosenObject);
        function printChosenObject() {
            let componentSelected = _elementeArray[_loopNumber];
            console.log("Graphicscard: " + componentSelected.graphicscard);
            console.log("RAM: " + componentSelected.ram);
            console.log("Powersupply: " + componentSelected.powersupply.toString());
            console.log("Processor: " + componentSelected.processor);
        }
        konfiguratorLabel.appendChild(konfiguratorButton);
        //InnerDiv erzeugen
        let innercontentDiv = document.getElementById(konfiguratorContentBoxID);
        let innerdiv = document.createElement("div");
        innerdiv.className = "konfiguratorContent";
        innerdiv.id = konfiguratorContentID;
        innercontentDiv.appendChild(innerdiv);
        //Inhalt von InnerDiv
        for (let i = 0; i < _headlinesArray.length; i++) {
            //Create Div
            let contentType = document.getElementById(konfiguratorContentID);
            let contentTypeDiv = document.createElement("div");
            contentTypeDiv.id = _headlineIdArray[_loopNumber][i];
            contentType.appendChild(contentTypeDiv);
            //Elemente für den Typ
            let contentTypeContent = document.getElementById(_headlineIdArray[_loopNumber][i]);
            let contentTypeContentH4 = document.createElement("h4");
            let contentTypeContentSpan = document.createElement("span");
            //Inhalt für h4 und span
            contentTypeContentH4.textContent = _headlinesArray[i];
            contentTypeContentSpan.textContent = contentValueArray[i];
            //Erstellte Elemente an das Elternelement anhängen
            contentTypeContent.appendChild(contentTypeContentH4);
            contentTypeContent.appendChild(contentTypeContentSpan);
        }
    }
    //Funktion, welche dynamisch, je nach Anzahl an Parametern ein Array mit IDs zurückgibt
    // tslint:disable-next-line: no-any
    function idGenerator(_kategorieArray, _headlineArray) {
        let idArray = [];
        let headlineIdArray = [];
        for (let i = 0; i < _kategorieArray.length; i++) {
            for (let j = 0; j < _headlineArray.length; j++) {
                let headlinePos = "headlinePosA" + i + "B" + j;
                headlineIdArray.push(headlinePos);
            }
            idArray.push(headlineIdArray);
            //Array zurücksetzen
            headlineIdArray = [];
        }
        return idArray;
    }
    Aufgabe2_3_Kapitelaufgabe.idGenerator = idGenerator;
    //Informationen der Objekte ausgeben
    function contentValue(components) {
        let contentValueArray = [];
        contentValueArray.push(components.graphicscard);
        contentValueArray.push(components.ram);
        contentValueArray.push(components.powersupply);
        contentValueArray.push(components.processor);
        return contentValueArray;
    }
    //IDs für Buttons dynamisch erstellen
    function buttonIdGenerator(_loopNumber) {
        let buttonId = "buttonSelected" + _loopNumber;
        return buttonId;
    }
    Aufgabe2_3_Kapitelaufgabe.buttonIdGenerator = buttonIdGenerator;
})(Aufgabe2_3_Kapitelaufgabe || (Aufgabe2_3_Kapitelaufgabe = {}));
//# sourceMappingURL=script.js.map