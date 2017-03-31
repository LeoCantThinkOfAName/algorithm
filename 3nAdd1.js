'use strict';

//given number
let num = 3151684645315300034;

function fn(num) {
    let temp = 0,
        count = 0,
        arr = [];

    let inter = (number) => {
        count += 1;
        number % 2 === 0 ? temp = number / 2 : temp = 3 * number + 1;
        arr.push(temp);
        temp > 1 ? inter(temp) : console.log(count + ' times, the final answer is ' + temp);
    }
    inter(num);
}
fn(num);