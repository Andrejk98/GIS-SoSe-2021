namespace Aufgabe2_3_Kapitelaufgabe {
    let caseHeadlines: string [] = ["Graphicscard:", "RAM:", "Powersupply:", "Prozessor:"];

    //Variable Computer anlegen
    let computer1: Case = new Case("RTX2080", "8GB", "500W", "Ryzen7", "Mini Tower");
    let computer2: Case = new Case("RTX3080", "16GB", "650W", "I9", "Mid Tower");
    let computer3: Case = new Case("RTX3090", "32GB", "1000W", "Ryzen9", "Tower");

    //Computer dem Array hinzufügen
    caseArray.push(computer1);
    caseArray.push(computer2);
    caseArray.push(computer3);
    
    //Variable Components anlegen
    let pc1: Components = new Components("RTX3090", "32GB", "1000W", "Ryzen9");
    componentsArray.push(pc1);

    fillContent(caseArray, idGenerator(caseArray, caseHeadlines), caseHeadlines);
}