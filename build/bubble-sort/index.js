"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
  * [bubbleSort 冒泡排序算法]
  * @param  {[object Array]} arr    [要进行排序的数组]
  *
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
//# sourceMappingURL=index.js.map