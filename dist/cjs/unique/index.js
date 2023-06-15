"use strict";
/**
 * [unique hash算法 数组去重 效率最高]
 * @params {[object Array]} arr [要去重的数组]
 * @return {[object Array]}     [新的去重后的数组]
 */
Object.defineProperty(exports, "__esModule", { value: true });
var unique = function (arr) {
    var result = [], hash = [];
    for (var i = 0; i < arr.length; i++) {
        if (!hash[arr[i]]) {
            result.push(arr[i]);
            hash[arr[i]] = true;
        }
    }
    return result;
};
exports.default = unique;
