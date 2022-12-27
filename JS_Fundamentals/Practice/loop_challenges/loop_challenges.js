// 1. Print odds 1-20
// Using a loop write code that will console.log all of the odd values from 1 up to 20.

for(let i = 1; i <= 20; i+=2) {
    console.log(i);
}

// 2. Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.

let oddNums = 100;

while( oddNums > 0) {
    if(oddNums % 3 == 0) {
        console.log(oddNums);
    }
    oddNums--;
}

// 3. Print the sequence
// Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

// It looks like like the sequence starts at 4 and then decreases by 1.5 until -3.5.

for(let decimal = 4; decimal >= -3.5; decimal -= 1.5) {
    console.log(decimal);
}

// 4. Sigma
// Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.

let sigma = 0;
let value = 1;

while(value <= 100) {
    sigma += value;
    value++;
}

console.log(sigma);

// 5. Factorial
// Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.

let factorial = 1;

for(let allValue = 1; allValue <= 12; allValue++) {
    factorial *= allValue;
}

console.log(factorial);