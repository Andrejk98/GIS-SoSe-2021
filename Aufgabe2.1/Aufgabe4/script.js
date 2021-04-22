"use strict";
let x = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);
function func1(y) {
    y = "Bla";
    console.log(y);
}
function func2() {
    let x = "Blubb";
    console.log(x);
}
function func3() {
    x = "Test";
}
//Ausgegeben wird Hallo Bla Hallo Blubb Test 
/*
Eine Globale Variable wird außerhalb von Funktionen angelegt(Hier "let x: string = "Hallo";"), diese
kann auch in neuen Funktionen verwendet werden. Eine Lokale Variable wir in Funktionen erstellt und ist
nicht außerhalb dieser funktion verfügbar.
*/ 
//# sourceMappingURL=script.js.map