"use strict";
function leapyears() {
    for (let i = 1900; i < 2021; i++) {
        let schaltjahr = false;
        if (i % 4 == 0) {
            if (i % 100 == 0) {
                if (i % 400 == 0) {
                    schaltjahr = true;
                }
            }
            else {
                schaltjahr = true;
            }
        }
        if (schaltjahr) {
            console.log(i);
        }
    }
}
leapyears();
//# sourceMappingURL=script.js.map