"use strict";
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
//# sourceMappingURL=index.js.map