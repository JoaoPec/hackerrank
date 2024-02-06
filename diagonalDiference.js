'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
process.stdin.resume();
process.stdin.setEncoding('utf-8');
var inputString = '';
var inputLines = [];
var currentLine = 0;
process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});
process.stdin.on('end', function () {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});
function readLine() {
    return inputLines[currentLine++];
}
/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */
function diagonalDifference(arr) {
    // Write your code here
    var leftArr = [];
    var rightArr = [];
    leftArr.push(arr[1][0], arr[2][1], arr[3][2]);
    rightArr.push(arr[1][2], arr[2][1], arr[3][0]);
    var leftSum = leftArr.reduce(function (acc, currentValue) { return acc + currentValue; }, 0);
    var rightSum = rightArr.reduce(function (acc, currentValue) { return acc + currentValue; }, 0);
    return leftSum + rightSum;
}
function main() {
    var ws = (0, fs_1.createWriteStream)(process.env['OUTPUT_PATH']);
    var n = parseInt(readLine().trim(), 10);
    var arr = Array(n);
    for (var i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(function (arrTemp) { return parseInt(arrTemp, 10); });
    }
    var result = diagonalDifference(arr);
    ws.write(result + '\n');
    ws.end();
}
