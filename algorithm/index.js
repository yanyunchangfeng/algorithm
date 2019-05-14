"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bubble_sort_1 = require("./bubble-sort");
var quick_sort_1 = require("./quick-sort");
var insert_sort_1 = require("./insert-sort");
var random_number_1 = require("./random-number");
var is_prime_1 = require("./is-prime");
var unique_1 = require("./unique");
var calendar_algorithm_1 = require("./calendar-algorithm");
exports.default = {
    bubbleSort: bubble_sort_1.default,
    quickSort: quick_sort_1.default,
    insertSort: insert_sort_1.default,
    unique: unique_1.default,
    isPrime: is_prime_1.default,
    getMonthData: calendar_algorithm_1.default,
    ranNum: random_number_1.default
};
//# sourceMappingURL=index.js.map