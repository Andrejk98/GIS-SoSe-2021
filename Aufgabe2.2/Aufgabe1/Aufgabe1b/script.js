"use strict";
function isEven() {
    let num = 50;
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
console.log(isEven());
//# sourceMappingURL=script.js.map