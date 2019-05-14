"use strict";
// import ranNum from "../random-number";
Object.defineProperty(exports, "__esModule", { value: true });
/*函数记忆: 让函数记住曾经处理过的参数及其对应的处理结果
* 为什么： 避免重复计算
* 何时： 只要一个函数，有可能处理大量重复的数据时
* 如何: 利用闭包，为函数添加一个受保护的关联数组
*       关联数组中保存曾经计算过的参数和处理结果*/
/**
 * [basicIsPrime 判断是否为质数的方法]
 * @param  {number} num [传入的参数]
 * @return {boolean}
*/
var basicIsPrime = function (num) {
    if (num <= 3)
        return true;
    else {
        for (var i = 2; i < Math.sqrt(num); i++) {
            if (num % i === 0)
                return false;
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
        if (num <= 3)
            return true;
        else if (hash[num] !== undefined) {
            return true;
        }
        else {
            for (var i = 2; i < Math.sqrt(num); i++) {
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
// let resArr:any [] = [];
// for(let i = 0; i<1000000;i++){
//     resArr[i] = ranNum(0,1001)
// }
// unit test basicIsPrime
// console.time('basicIsPrime')
// for(let i = 0; i < resArr.length;i++){
//     basicIsPrime(resArr[i]);
// }
// console.timeEnd('basicIsPrime') //basicIsPrime: 37.343017578125ms
// unit test isPrime
// console.time('isPrime')
// for(let i = 0; i < resArr.length;i++){
//     isPrime(resArr[i]);
// }
// console.timeEnd('isPrime')   //isPrime: 30.153076171875ms
//# sourceMappingURL=index.js.map