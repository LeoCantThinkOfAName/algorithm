'use strict';
//Given data
let A = [1, 1],
    B = [2, 5],
    C = [4 ,8],
    D = [1, 7],
    E = [3, 2];

//merge all array in one
let arr = A.concat(B, C, D, E);

//init empty arry
let arrX = [],
    arrY = [],
    result = [];

//seperate X and Y into two array
for(let i = 0; i < arr.length; i ++) {
    i % 2 === 0 ? arrX.push(arr[i]) : arrY.push(arr[i]);
}

for(let i = 0; i < arrX.length; i ++) {
    for(let j = i; j < arrX.length; j ++) {
        if(j + 1 <= arrX.length && i !== j) {
            //setup obj key for better readability
            let points = String.fromCharCode(65 + i) + '-' + String.fromCharCode(65 + j);

            //calculate distances between each point
            let dis = Math.sqrt(Math.pow(arrX[i] - arrX[j], 2) + Math.pow(arrY[i] - arrY[j], 2));

            //create object and push it into array
            let obj = {points: points, distance: dis};
            result.push(obj);
        }
    }
}

//ascending array by obj's value
result.sort(function(x, y) { return (x.distance > y.distance ? 1 : y.distance > x.distance ? -1 : 0)})

console.log('The shortest distance between all the points is ' + result[0].points + ' : ' +  result[0].distance);