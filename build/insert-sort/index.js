"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * [insertSort 插入排序算法]
 * @param {[object Array]} arr []
*/
var insertSort = function (arr) {
    //从1开始遍历arr
    for (var i = 1; i < arr.length; i++) {
        var current = arr[i]; //将当前值保存在current
        var p = i - 1; // 定义p = i-1
        // 反复：p > 0 && p位置的值 > current
        while (p >= 0 && arr[p] > current) {
            // p位置的值赋值给p+1
            arr[p + 1] = arr[p];
            //p--
            p--;
        }
        arr[p + 1] = current; //将current的值保存到p+1中
    }
};
exports.default = insertSort;
//# sourceMappingURL=index.js.map