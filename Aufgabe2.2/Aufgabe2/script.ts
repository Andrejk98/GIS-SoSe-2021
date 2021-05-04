//A
function backwards(array1: number[]): number[] {
        let array2: number[] = [];
        let loopIndex: number = 0;
        for (let i: number = array1.length - 1; i >= 0; i--) {
            array2[loopIndex] = array1[i];
            loopIndex++;
        }
        return array2;
    }

let array1: number[] = [2, 4, 6, 3];
console.log("function backwards:");
console.log(backwards(array1));
//B
function join(arrayB1: number[], arrayB2: number[]): number[] {
        let arrayB3: number[] = [];
        for (let i: number = 0; i < arrayB1.length; i++) {
            arrayB3.push(arrayB1[i]);
        }
        for (let i: number = 0; i < arrayB2.length; i++) {
            arrayB3.push(arrayB2[i]);
        }
        return arrayB3;
    }
let arrayB1: number[] = [10, 0];
let arrayB2: number[] = [2, 5];
console.log("function join:");
console.log(join(arrayB1, arrayB2));
//C
function split(arrayC1: number[], numC1: number, numC2: number): number[] {
        let arrayC3: number[] = [];
        if (numC1 > numC2) {
            let numC3: number = 0;
            numC3 = numC1;
            numC1 = numC2;
            numC2 = numC3;
        }
        for (let i: number = numC1; i < numC2 + 1; i++) {
            arrayC3.push(arrayC1[i]);
        }
        return arrayC3;
    }
let arrayC1: number[] = [2, 1, 4, 5, 6, 7, 8];
console.log("function split:");
console.log(split(arrayC1, 2, 0));
