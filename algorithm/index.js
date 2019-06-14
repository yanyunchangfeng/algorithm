"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bubble_sort_1 = require("./bubble-sort");
var calendar_algorithm_1 = require("./calendar-algorithm");
var color_util_1 = require("./color-util");
var deep_clone_1 = require("./deep-clone");
var insert_sort_1 = require("./insert-sort");
var is_prime_1 = require("./is-prime");
var multi_inherit_1 = require("./multi-inherit");
var quick_sort_1 = require("./quick-sort");
var random_number_1 = require("./random-number");
var unique_1 = require("./unique");
exports.default = {
    bubbleSort: bubble_sort_1.default,
    quickSort: quick_sort_1.default,
    insertSort: insert_sort_1.default,
    unique: unique_1.default,
    deepClone: deep_clone_1.default,
    isPrime: is_prime_1.default,
    getMonthData: calendar_algorithm_1.default,
    ranNum: random_number_1.default,
    genColor: color_util_1.default.genColor,
    copyProperties: multi_inherit_1.default.copyProperties,
    mix: multi_inherit_1.default.mix,
};
//# sourceMappingURL=index.js.map