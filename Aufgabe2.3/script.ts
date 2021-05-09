namespace Aufgabe2_3 {
    //zwei Buttons für die Bedienung anlegen
    document.querySelector("#buttonAddRectangle").addEventListener("click", addRectangle);
    document.querySelector("#buttonReloadCanvas").addEventListener("click", resetArea);
    
    //Interface für Rectangle
    interface OwnRect {
        sizeX: number;
        sizeY: number;
        posX?: number;
        posY?: number;
    }
    function createRect(): OwnRect {
        //Ein Rechteck anlegen und mit zufälligen Werten füllen
        let rect1: OwnRect = {sizeX: Math.random() * 100, sizeY: Math.random() * 100 };
        return rect1;
    } 
    function drawRect(rect1: OwnRect): void {
        //div generieren
        let rectangleArea: HTMLElement = document.getElementById("rectangleArea");
        let div: HTMLDivElement = document.createElement("div");

        //String anlegen, um mit einer Variable style.transform zu definieren
        let randomTransform: string = "translate(" + Math.random() * 400 + "px," + Math.random() * 400 + "px)";
        //String für random colour
        let randomColour: string = "rgb(" + Math.random() * 255 + " ," + Math.random() * 255 + " ," + Math.random() * 255 + ")";
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
    let rectangles: OwnRect[] = [];
    
    //Immmer ein Rechteck hinzufügen, dann das Canvas leeren / reloaden und dann das Array mit Rechtecken neu zeichnen
    function addRectangle(): void {
        rectangles.push(createRect());
        reloadArea();
        for (let i: number = 0; i < rectangles.length; i++) {
            drawRect(rectangles[i]);
        }
    }
    //Länge des Arrays für Rechtecke auf 0 setzen und Reload der Area veranlassen
    function resetArea(): void {
        reloadArea();
        rectangles.length = 0;
    } 
    //Mit einer while-Schleife immer das erste Kind des Elternknotens entfernen
    function reloadArea(): void {
        let rectangleArea: HTMLElement = document.getElementById("rectangleArea");
        while (rectangleArea.firstChild) {
            rectangleArea.removeChild(rectangleArea.firstChild);
        }
    }
}
namespace Aufgabe2_3_Kapitelaufgabe {
    //Klasse für die Teile anlegen
    export class Components {
        graphicscard: string;
        ram: string;
        powersupply: string;
        processor: string;

        constructor(_graphicscard: string, _ram: string, _powersupply: string, _processor: string) {
            this.graphicscard = _graphicscard;
            this.ram = _ram;
            this.powersupply = _powersupply;
            this.processor = _processor;
        }
    }
   
    export class Case extends Components {
        casetype: string;
        constructor(_graphicscard: string, _ram: string, _powersupply: string, _processor: string, _casetype: string) {
            super(_graphicscard, _ram, _powersupply, _processor);
            this.casetype = _casetype;
        }
    }

    //Array für das case
    export let caseArray: Case [] = [];

    //Array für die Teile
    export let componentsArray: Components [] = [];

    //Content-Boxen erzeugen und darin die Funktion FillElement aufrufen
    export function fillContent(_elementeArray: Components [], _headlineIdArray: string[][], _headlinesArray: string[]): void {
        //i ist die LoopNumber
        for (let i: number = 0; i < _elementeArray.length; i++) {
            fillElement (_headlineIdArray, _headlinesArray, i, _elementeArray);
        }
    }
    //Funktion erstellt einen Container im Flexbereich für ein Element einer Kategorie
    //_headlineIdArray liefert individuelle Ids für die Divs, _headlinesArray liefert individuelle Überschriften für die Eigenschaften, _loopNumber ist die Anzahl des Durchlaufs, also die Nummer des Elements/der Auswahlmöglichkeit der Kategorie
    function fillElement(_headlineIdArray: string[][], _headlinesArray: string [], _loopNumber: number, _elementeArray: Components []): void {
        let contentValueArray: string [] = contentValue(_elementeArray[_loopNumber]);

        //Strings für die IDs erstellen, die dann je nach Durchlauf die Durchgangsnummer der Schleife anzeigen --> So ist jede ID verschieden und der Inhalt der Website flexibel erweiterbar
        let konfiguratorContentBoxID: string = "konfiguratorContentBoxID" + _loopNumber;

        //let konfiguratorLabelContainerID: string = "konfiguratorLabelContainerID" + _loopNumber; 
        //
        let konfiguratorContentID: string = "konfiguratorContentID" + _loopNumber;
        
        //Div erzeugen
        let contentDiv: HTMLElement = document.getElementById("konfiguratorFlexBox");
        let outerdiv: HTMLDivElement = document.createElement("div");
        //Dem Div Klassen geben
        outerdiv.className = "konfiguratorContentBox";
        outerdiv.id = konfiguratorContentBoxID;
        contentDiv.appendChild(outerdiv);

        //Überschrift der Box sowie RadioButton erzeugen
        let konfiguratorLabel: HTMLElement = document.getElementById(konfiguratorContentBoxID);
        //let konfiguratorLabelContainer: HTMLHeadElement = document.createElement("label");
        let konfiguratorButton: HTMLButtonElement = document.createElement("button");

        let buttonId: string = buttonIdGenerator(_loopNumber);
        //let selectedObjekt: RailVehicle = _elementeArray[_loopNumber];

        konfiguratorButton.textContent = "Auswählen";
        konfiguratorButton.id = buttonId;
        konfiguratorButton.className = "chooseButton";
        konfiguratorButton.addEventListener("click", printChosenObject);

        function printChosenObject(): void {
            let componentSelected: Components = _elementeArray[_loopNumber];
            console.log("Graphicscard: " + componentSelected.graphicscard);
            console.log("RAM: " + componentSelected.ram);
            console.log("Powersupply: " + componentSelected.powersupply.toString());
            console.log("Processor: " + componentSelected.processor);
        }

        konfiguratorLabel.appendChild(konfiguratorButton);
        
        //InnerDiv erzeugen
        let innercontentDiv: HTMLElement = document.getElementById(konfiguratorContentBoxID);
        let innerdiv: HTMLDivElement = document.createElement("div");
        innerdiv.className = "konfiguratorContent";
        innerdiv.id = konfiguratorContentID;
        innercontentDiv.appendChild(innerdiv);
        //Inhalt von InnerDiv

        for (let i: number = 0; i < _headlinesArray.length; i++) {
            //Create Div
            let contentType: HTMLElement = document.getElementById(konfiguratorContentID);
            let contentTypeDiv: HTMLDivElement = document.createElement("div");
            contentTypeDiv.id = _headlineIdArray[_loopNumber][i];
            contentType.appendChild(contentTypeDiv);
            //Elemente für den Typ
            let contentTypeContent: HTMLElement = document.getElementById(_headlineIdArray[_loopNumber][i]);
            let contentTypeContentH4: HTMLHeadElement = document.createElement("h4");
            let contentTypeContentSpan: HTMLSpanElement = document.createElement("span");
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
    export function idGenerator(_kategorieArray: Components[], _headlineArray: string[]): string [][] {
        
        let idArray: string [][] = [];
        let headlineIdArray: string [] = [];

        for (let i: number = 0; i < _kategorieArray.length; i++) {
            for (let j: number = 0; j < _headlineArray.length; j++) {
                let headlinePos: string = "headlinePosA" + i + "B" + j;
                headlineIdArray.push(headlinePos);
            }
            idArray.push(headlineIdArray);
            //Array zurücksetzen
            headlineIdArray = [];
        }
        return idArray;
    }

    //Informationen der Objekte ausgeben
    function contentValue(components: Components): string[] {
        let contentValueArray: string[] = [];
        contentValueArray.push(components.graphicscard);
        contentValueArray.push(components.ram);
        contentValueArray.push(components.powersupply);
        contentValueArray.push(components.processor);
        return contentValueArray; 
    }

    //IDs für Buttons dynamisch erstellen
    export function buttonIdGenerator(_loopNumber: number): string {
        let buttonId: string = "buttonSelected" + _loopNumber;
        return buttonId;
    }
}