"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bubble_sort_1 = require("./bubble-sort");
exports.bubbleSort = bubble_sort_1.default;
var calendar_algorithm_1 = require("./calendar-algorithm");
exports.getMonthData = calendar_algorithm_1.default;
var deep_clone_1 = require("./deep-clone");
exports.deepClone = deep_clone_1.default;
var insert_sort_1 = require("./insert-sort");
exports.insertSort = insert_sort_1.default;
var is_prime_1 = require("./is-prime");
exports.isPrime = is_prime_1.default;
var quick_sort_1 = require("./quick-sort");
exports.quickSort = quick_sort_1.default;
var random_number_1 = require("./random-number");
exports.ranNum = random_number_1.default;
var unique_1 = require("./unique");
exports.unique = unique_1.default;
var multi_inherit_1 = require("./multi-inherit");
exports.copyProperties = multi_inherit_1.copyProperties;
exports.mix = multi_inherit_1.mix;
var color_util_1 = require("./color-util");
exports.baseColor = color_util_1.baseColor;
exports.genColor = color_util_1.genColor;
// export default {
//     bubbleSort,
//     quickSort,
//     insertSort,
//     unique,
//     deepClone,
//     isPrime,
//     getMonthData,
//     ranNum,
//     genColor: color.genColor,
//     copyProperties: multiInherit.copyProperties,
//     mix: multiInherit.mix,
// };
