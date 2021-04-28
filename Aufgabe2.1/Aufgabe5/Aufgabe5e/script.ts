function factorial(_n: number): number {
    let fac: number = 1;
    if (_n < 1) {
        return 1;
    } else {
        for (let i: number = 1; i <= _n; i++) {
            fac = fac * i;
            console.log(fac);
        }
    }
    return fac; 
}
factorial(8);