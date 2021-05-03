"use strict";
/*
function erschaffePerson(_name: string, _vorname: string, _alter: number, _matrikelnummer: number) {
    let p: Student = {name: _name, vorname: _vorname, alter: _alter, matrikelnummer: _matrikelnummer};
    return p;
}
*/
class Student {
    constructor(_name, _vorname, _alter, _matrikelnummer) {
        this.name = _name;
        this.vorname = _vorname;
        this.alter = _alter;
        this.matrikelnummer = _matrikelnummer;
    }
    zeigeInfos() {
        console.log(this.name, this.vorname, this.alter, this.matrikelnummer);
    }
}
//# sourceMappingURL=script.js.map