function leapyears(): void {
    for (let i: number = 1900; i < 2021; i++) {
        let schaltjahr: boolean = false;
        if (i % 4 == 0) {
            if (i % 100 == 0) {
                if (i % 400 == 0) {
                    schaltjahr = true;
                }
            } else {
                schaltjahr = true;
            }
        }
        if (schaltjahr) {
            console.log(i);
        }
    }
}
leapyears();