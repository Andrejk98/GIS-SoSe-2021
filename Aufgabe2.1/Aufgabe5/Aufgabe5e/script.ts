function factorial(): number {
    let n: number = 1;
    while (n > 1) {
        n = n * (n + 1);
        console.log(n);
    }
    return n;
}