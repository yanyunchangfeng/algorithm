"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * [ranNum 生成随机数的方法]
 * @param  {number} min  [最小范围]
 * @param  {number} max  [最大范围]
 * @return {number} [生成一个min-max 的随机数]
 */
var ranNum = function (min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
};
exports.default = ranNum;
//# sourceMappingURL=index.js.map