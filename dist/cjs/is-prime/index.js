"use strict";
/** 函数记忆: 让函数记住曾经处理过的参数及其对应的处理结果
 * 为什么： 避免重复计算
 * 何时： 只要一个函数，有可能处理大量重复的数据时
 * 如何: 利用闭包，为函数添加一个受保护的关联数组
 *       关联数组中保存曾经计算过的参数和处理结果
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * [basicIsPrime 判断是否为质数的方法]
 * @param  {number} num [传入的参数]
 * @return {boolean}
 */
var basicIsPrime = function (num) {
    if (num <= 3) {
        return true;
    }
    else {
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
};
/**
 * [isPrime 带有记忆功能的判断质数方法]
 * @params {number} num 传入的参数
 * @return {boolean}
 */
var isPrime = (function () {
    var hash = [];
    return function (num) {
        if (num <= 3) {
            return true;
        }
        else if (hash[num] !== undefined) {
            return true;
        }
        else {
            for (var i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    return false;
                }
            }
            hash[num] = true;
            return true;
        }
    };
})();
exports.default = isPrime;
