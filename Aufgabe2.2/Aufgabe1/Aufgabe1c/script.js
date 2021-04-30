"use strict";
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