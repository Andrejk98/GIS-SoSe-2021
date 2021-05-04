"use strict";
function isEven(num) {
    while (num >= 0) {
        if (num == 0) {
            return true; //Zahl ist gerade
        }
        if (num == 1) {
            return false; //Zahl ist ungerade
        }
        num = num - 2;
    }
    console.log("Keine Lösung gefunden");
    return false;
}
let num1 = 50;
let num2 = 75;
console.log(num1 + " " + isEven(num1));
console.log(num2 + " " + isEven(num2));
//Mit -1 startet die while Schleife nicht, da die Zahl >= 0 sein sollte. 
//In dem Fall wird dann der angegebenen Rückgabewert (in meinem Fall false).
//Die Funktion könnte sich jedoch so umbauen lassen, 
//dass eine negative Zahl erkannt wird if(num < 0) und diese in dem Fall dann mit -1 multipliziert wird.
//# sourceMappingURL=script.js.map