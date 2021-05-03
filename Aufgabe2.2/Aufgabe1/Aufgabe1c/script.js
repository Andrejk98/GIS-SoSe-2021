"use strict";
function erschaffePerson(_name, _vorname, _alter, _matrikelnummer) {
    let p = { name: _name, vorname: _vorname, alter: _alter, matrikelnummer: _matrikelnummer };
    return p;
}
class Student {
    constructor(_name, _vorname, _alter, _matrikelnummer) {
        this.name = _name;
        this.vorname = _vorname;
        this.alter = _alter;
        this.matrikelnummer = _matrikelnummer;
    }
    zeigeInfos(_name, _vorname, _alter, _matrikelnummer) {
        console.log(this.name, this.vorname, this.alter, this.matrikelnummer);
    }
}
//# sourceMappingURL=script.js.map