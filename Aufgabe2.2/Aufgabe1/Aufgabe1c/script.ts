
class Student {
    name: String;
    vorname: String;
    alter: number;
    matrikelnummer: number;

    constructor (_name: String, _vorname: String, _alter: number, _matrikelnummer: number) {
        this.name = _name;
        this.vorname = _vorname;
        this.alter = _alter;
        this.matrikelnummer = _matrikelnummer;
    }

    zeigeInfos(): void {
        console.log(this.name, this.vorname, this.alter, this.matrikelnummer);
    }
}

let s1: Student = new Student("Kalinic", "Andrej", 22, 28023);
let s2: Student = new Student("Kalinic", "Sara", 25, 22180);
let s3: Student = new Student("Mustermann", "Max", 28, 2890);

let students: Student[] = [s1, s2, s3];

students.push(new Student("Lindenfelser", "Sandra", 45, 28930));

for (let i: number = 0; i < students.length; i++) {
    console.log("-------------------");
    students[i].zeigeInfos();
}