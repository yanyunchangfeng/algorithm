"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * [quicksort 快速排序算法]
 * @param  {[object Array]} arr [要进行排序的数组]
 * @return {[object Array]}     [新的排好序的数组]
*/
var quickSort = function (arr) {
    if (arr.length > 1) {
        var centerIndex = parseInt(arr.length / 2 + '');
        var center = arr.splice(centerIndex, 1);
        var left = [], right = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < center)
                left.push(arr[i]);
            else
                right.push(arr[i]);
        }
        return quickSort(left).concat(center, quickSort(right));
    }
    else {
        return arr;
    }
};
exports.default = quickSort;
//# sourceMappingURL=index.js.map