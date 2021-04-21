function a1(): void {
    let x: string = "Alles";
    debugger;
    console.log(x);
    func1();
    console.log("Logo!");
}

a1();

function func1(): void {
    console.log("Klar?");
}

//Ausgegeben in a wird Alles Klar? Logo!
