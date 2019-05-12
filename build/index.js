"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bubble_sort_1 = require("./bubble-sort");
var quick_sort_1 = require("./quick-sort");
var insert_sort_1 = require("./insert-sort");
/**
 * [ranNum 生成随机数的方法]
 * @return {number} [生成一个0-1000 的随机数]
 */
var ranNum = function () {
    return Math.trunc(Math.random() * 1001);
};
var bubbleArr = [], insertArr = [], quickArr = [];
for (var i = 0; i < 10000; i++) {
    bubbleArr[i] = ranNum();
    insertArr[i] = ranNum();
    quickArr[i] = ranNum();
}
console.log(bubbleArr, insertArr, quickArr);
// unit test bubbleSort
console.time('bubbleSort');
bubble_sort_1.default(bubbleArr);
console.log(bubbleArr);
console.timeEnd('bubbleSort'); // bubbleSort: 212.758056640625ms
// unit test quickSort
console.time('insertSort');
insert_sort_1.default(insertArr);
console.log(insertArr);
console.timeEnd('insertSort'); //insertSort: 36.515380859375ms
// unit test quickSort
console.time('quickSort');
var quickRes = quick_sort_1.default(quickArr);
console.log(quickRes);
console.timeEnd('quickSort'); //quickSort: 59.569091796875ms
//# sourceMappingURL=index.js.map