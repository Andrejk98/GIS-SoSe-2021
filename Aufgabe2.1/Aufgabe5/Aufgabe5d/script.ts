function getRandomInt(): void {
    for (let i: number = 0; i < 10; i++) {
        let zufall: number = Math.random() * 10;
        console.log(zufall);  
    }
}
getRandomInt();
