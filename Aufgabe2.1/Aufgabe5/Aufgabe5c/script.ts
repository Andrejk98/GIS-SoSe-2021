function count(): void {
    let x: number = 0;
    let a: number = 0;
    while ( x < 100 ) {
        x++;
        a = x + a;
        
    }
    console.log(a); 
}
count();