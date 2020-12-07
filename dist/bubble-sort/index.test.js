"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var deep_clone_1 = require("../deep-clone");
var random_number_1 = require("../random-number");
var index_1 = require("./index");
test("bubbleSort", function () {
    var bubbleArr = [];
    for (var i = 0; i < 10000; i++) {
        bubbleArr[i] = random_number_1.default(0, 1001);
    }
    var cloneArr = deep_clone_1.default(bubbleArr).sort(function (a, b) { return a - b; });
    index_1.default(bubbleArr);
    expect(bubbleArr).toEqual(cloneArr);
});
