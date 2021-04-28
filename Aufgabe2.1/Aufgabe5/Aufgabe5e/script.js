"use strict";
function factorial(_n) {
    let fac = 1;
    if (_n < 1) {
        return 1;
    }
    else {
        for (let i = 1; i <= _n; i++) {
            fac = fac * i;
            console.log(fac);
        }
    }
    return fac;
}
factorial(8);
//# sourceMappingURL=script.js.map