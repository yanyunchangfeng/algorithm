"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genColor = exports.baseColor = exports.mix = exports.copyProperties = exports.unique = exports.ranNum = exports.quickSort = exports.isPrime = exports.insertSort = exports.deepClone = exports.getMonthData = exports.bubbleSort = void 0;
var bubble_sort_1 = require("./utils/bubble-sort");
Object.defineProperty(exports, "bubbleSort", { enumerable: true, get: function () { return __importDefault(bubble_sort_1).default; } });
var calendar_algorithm_1 = require("./utils/calendar-algorithm");
Object.defineProperty(exports, "getMonthData", { enumerable: true, get: function () { return __importDefault(calendar_algorithm_1).default; } });
var deep_clone_1 = require("./utils/deep-clone");
Object.defineProperty(exports, "deepClone", { enumerable: true, get: function () { return __importDefault(deep_clone_1).default; } });
var insert_sort_1 = require("./utils/insert-sort");
Object.defineProperty(exports, "insertSort", { enumerable: true, get: function () { return __importDefault(insert_sort_1).default; } });
var is_prime_1 = require("./utils/is-prime");
Object.defineProperty(exports, "isPrime", { enumerable: true, get: function () { return __importDefault(is_prime_1).default; } });
var quick_sort_1 = require("./utils/quick-sort");
Object.defineProperty(exports, "quickSort", { enumerable: true, get: function () { return __importDefault(quick_sort_1).default; } });
var random_number_1 = require("./utils/random-number");
Object.defineProperty(exports, "ranNum", { enumerable: true, get: function () { return __importDefault(random_number_1).default; } });
var unique_1 = require("./utils/unique");
Object.defineProperty(exports, "unique", { enumerable: true, get: function () { return __importDefault(unique_1).default; } });
var multi_inherit_1 = require("./utils/multi-inherit");
Object.defineProperty(exports, "copyProperties", { enumerable: true, get: function () { return multi_inherit_1.copyProperties; } });
Object.defineProperty(exports, "mix", { enumerable: true, get: function () { return multi_inherit_1.mix; } });
var color_util_1 = require("./utils/color-util");
Object.defineProperty(exports, "baseColor", { enumerable: true, get: function () { return color_util_1.baseColor; } });
Object.defineProperty(exports, "genColor", { enumerable: true, get: function () { return color_util_1.genColor; } });
//# sourceMappingURL=index.js.map