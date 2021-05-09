"use strict";
var Aufgabe2_3_Kapitelaufgabe;
(function (Aufgabe2_3_Kapitelaufgabe) {
    let caseHeadlines = ["Graphicscard:", "RAM:", "Powersupply:", "Prozessor:"];
    //Variable Computer anlegen
    let computer1 = new Aufgabe2_3_Kapitelaufgabe.Case("RTX2080", "8GB", "500W", "Ryzen7", "Mini Tower");
    let computer2 = new Aufgabe2_3_Kapitelaufgabe.Case("RTX3080", "16GB", "650W", "I9", "Mid Tower");
    let computer3 = new Aufgabe2_3_Kapitelaufgabe.Case("RTX3090", "32GB", "1000W", "Ryzen9", "Tower");
    //Computer dem Array hinzufügen
    Aufgabe2_3_Kapitelaufgabe.caseArray.push(computer1);
    Aufgabe2_3_Kapitelaufgabe.caseArray.push(computer2);
    Aufgabe2_3_Kapitelaufgabe.caseArray.push(computer3);
    //Variable Components anlegen
    let pc1 = new Aufgabe2_3_Kapitelaufgabe.Components("RTX3090", "32GB", "1000W", "Ryzen9");
    Aufgabe2_3_Kapitelaufgabe.componentsArray.push(pc1);
    Aufgabe2_3_Kapitelaufgabe.fillContent(Aufgabe2_3_Kapitelaufgabe.caseArray, Aufgabe2_3_Kapitelaufgabe.idGenerator(Aufgabe2_3_Kapitelaufgabe.caseArray, caseHeadlines), caseHeadlines);
})(Aufgabe2_3_Kapitelaufgabe || (Aufgabe2_3_Kapitelaufgabe = {}));
//# sourceMappingURL=data.js.map