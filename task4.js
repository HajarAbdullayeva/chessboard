const input = 6;
let firstValue = 1;
let secondValue =  Math.ceil(input ** 2 / 2) + 1;
const filtered = [];

for (let i = 0; i < input; i++) {
    const temp = [];

    if (i % 2 === 0) {
        for (let j = 0; j < input; j++) {
            if (j % 2 === 0) {
                temp.push(firstValue++);
            } else {
                temp.push(secondValue++);
            }
        }
        filtered.push(temp);
    } else {
        for (let j = 0; j < input; j++) {
            if (j % 2 === 0) {
                temp.push(secondValue++);
            } else {
                temp.push(firstValue++);
            }
        }
        filtered.push(temp);
    }
}
console.log(filtered);
