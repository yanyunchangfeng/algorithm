"use strict";
/**
 * [deepClone 对象的深度克隆]
 * @param {[object Object]} obj [要深度拷贝的源对象]
 * @return {[object Object]}
 */
Object.defineProperty(exports, "__esModule", { value: true });
var deepClone = function (obj) {
    return JSON.parse(JSON.stringify(obj));
};
exports.default = deepClone;
//# sourceMappingURL=index.js.map