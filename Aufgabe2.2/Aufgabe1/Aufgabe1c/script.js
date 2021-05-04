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
let s1 = new Student("Kalinic", "Andrej", 22, 28023);
let s2 = new Student("Kalinic", "Sara", 25, 22180);
let s3 = new Student("Mustermann", "Max", 28, 2890);
let students = [s1, s2, s3];
students.push(new Student("Lindenfelser", "Sandra", 45, 28930));
for (let i = 0; i < students.length; i++) {
    console.log("-------------------");
    students[i].zeigeInfos();
}
//# sourceMappingURL=script.js.map