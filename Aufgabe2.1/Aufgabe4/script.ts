let x: string = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);

function func1(y: string): void {
    y = "Bla";
    console.log(y);
}

function func2(): void {
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void {
    x = "Test";
}

//Ausgegeben wird Hallo Bla Hallo Blubb Test 

/*
Eine Globale Variable wird außerhalb von Funktionen angelegt(Hier "let x: string = "Hallo";"), diese
kann auch in neuen Funktionen verwendet werden. Eine Lokale Variable wir in Funktionen erstellt und ist
nicht außerhalb dieser funktion verfügbar.
*/