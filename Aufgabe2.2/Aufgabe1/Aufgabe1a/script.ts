function min(x: number, y: number, z: number): number {
    if (x < y && x < z) {
        return x;
    }
    else if (y < x && y < z) {
        return y;
    }
    else  {
        return z;
    }
}
console.log(min(20, 15 , 200));

