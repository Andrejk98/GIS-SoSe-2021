function a1(): void {
    let x: string = "Alles";
    console.log(x);
    ausgabe1();
    console.log(x);
    ausgabe2();
    console.log(x);
    ausgabe3();
}

a1();

function ausgabe1(): void {
    console.log("Gute!");
}

function ausgabe2(): void {
    console.log("Klar?");
}

function ausgabe3(): void {
    console.log("Logo!");
}
//Ausgegeben in a wird Alles Klar? Logo!
