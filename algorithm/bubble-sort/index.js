"use strict";
// import ranNum from "../random-number";
Object.defineProperty(exports, "__esModule", { value: true });
/**
  * [bubbleSort 冒泡排序算法]
  * @param  {[object Array]} arr    [要进行排序的数组]
  * return {void}
  */
var bubbleSort = function (arr) {
    for (var i = 1; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                arr[j] = [arr[j + 1], arr[j + 1] = arr[j]][0];
            }
        }
    }
};
exports.default = bubbleSort;
// let bubbleArr:any[] = [];
// for(let i = 0;i < 10000; i++){
//    bubbleArr[i] = ranNum(0,1001)
// }
// // unit test bubbleSort
// console.time('bubbleSort')
// bubbleSort(bubbleArr);
// console.log(bubbleArr)
// console.timeEnd('bubbleSort') // bubbleSort: 212.758056640625ms
//# sourceMappingURL=index.js.map