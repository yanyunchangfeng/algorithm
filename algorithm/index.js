"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bubble_sort_1 = require("./bubble-sort");
var quick_sort_1 = require("./quick-sort");
var insert_sort_1 = require("./insert-sort");
var random_number_1 = require("./random-number");
var memory_function_1 = require("./memory-function");
var unique_1 = require("./unique");
exports.default = {
    bubbleSort: bubble_sort_1.default,
    quickSort: quick_sort_1.default,
    insertSort: insert_sort_1.default,
    unique: unique_1.default,
    ranNum: random_number_1.default,
    isPrime: memory_function_1.default.isPrime,
    isMemoryPrime: memory_function_1.default.isMemoryPrime
};
//# sourceMappingURL=index.js.map