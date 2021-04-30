class Student {
    name: String;
    vorname: String;
    alter: number;
    matrikelnummer: number;

    constructor (_name: String, _vorname: String, _alter: number, _matrikelnummer: number ) {
        this.name = _name;
        this.vorname = _vorname;
        this.alter = _alter;
        this.matrikelnummer = _matrikelnummer;
    }

    zeigeInfos(): void {
        console.log(this.name, this.vorname, this.alter, this.matrikelnummer);
    }
}