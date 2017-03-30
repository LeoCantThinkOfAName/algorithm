'use strict';

//Given data
let A = [3, 3],
    B = [1, 5],
    C = [4, 6],
    D = [2, 8],
    E = [9, 9],
    F = [2, 1],
    G = [7, 2],
    H = [6, 5],
    I = [9, 4],
    J = [5, 9];

function findTheShortest(num, ...array) {
    //merge all array in one
    let arr = [].concat(...array);
    
    //init empty arry
    let arrX = [],
        arrY = [],
        result = [];

    //seperate X and Y into two array
    for(let i = 0; i < arr.length; i ++) {
        i % 2 === 0 ? arrX.push(arr[i]) : arrY.push(arr[i]);
    }

    for(let i = 0; i < arrX.length; i ++) {
        for(let j = i + 1; j < arrX.length; j ++) {
            //setup obj key for better readability
            let points = String.fromCharCode(65 + i) + '-' + String.fromCharCode(65 + j);

            //calculate distances between each point
            let dis = Math.sqrt(Math.pow(arrX[i] - arrX[j], 2) + Math.pow(arrY[i] - arrY[j], 2));

            //create object and push it into array
            let obj = {points: points, distance: dis};
            result.push(obj);
        }
    }

    //ascending array by obj's distance
    result.sort(function(x, y) { return (x.distance > y.distance ? 1 : y.distance > x.distance ? -1 : 0)});
    
    console.log(result);
    console.log('The shortest distance between all the points is ' + result[num].points + ' : ' +  result[num].distance);
}
findTheShortest(0, A, B, C, D, E, F, G, H, I, J);